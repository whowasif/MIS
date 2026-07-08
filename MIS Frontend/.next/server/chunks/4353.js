"use strict";
exports.id = 4353;
exports.ids = [4353];
exports.modules = {

/***/ 4353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "xJ": () => (/* binding */ MANAGED_TABLES),
  "ui": () => (/* binding */ createTableRow),
  "JC": () => (/* binding */ deleteTableRow),
  "$Z": () => (/* binding */ getManagedTablesSummary),
  "SS": () => (/* binding */ getTableColumns),
  "Qq": () => (/* binding */ getTableRows),
  "eY": () => (/* binding */ updateTableRow)
});

// EXTERNAL MODULE: ./lib/server/db.js
var server_db = __webpack_require__(6548);
;// CONCATENATED MODULE: ./lib/admin/managed-tables.js
const managedTableConfig = [
    {
        name: "admin_users",
        label: "Admin Users",
        group: "Security"
    },
    {
        name: "customers",
        label: "Customers",
        group: "CRM"
    },
    {
        name: "newsletter_subscribers",
        label: "Newsletter Subscribers",
        group: "CRM"
    },
    {
        name: "company_contacts",
        label: "Company Contacts",
        group: "Content"
    },
    {
        name: "digi_services",
        label: "Digital Services",
        group: "Content"
    },
    {
        name: "bus_corp_sol",
        label: "Business & Corporate Solutions",
        group: "Content"
    },
    {
        name: "service_maintenance",
        label: "Service & Maintenance",
        group: "Content"
    },
    {
        name: "page_contents",
        label: "Page Contents",
        group: "Content"
    },
    {
        name: "career_posts",
        label: "Career Posts",
        group: "Content"
    },
    {
        name: "advertisements",
        label: "Advertisements",
        group: "Content"
    },
    {
        name: "client_projects",
        label: "Client Projects",
        group: "Content"
    },
    {
        name: "category_specs",
        label: "Category Specs",
        group: "Catalog"
    },
    {
        name: "products",
        label: "Products",
        group: "Catalog"
    },
    {
        name: "orders",
        label: "Orders",
        group: "Commerce"
    },
    {
        name: "promo_codes",
        label: "Promo Codes",
        group: "Commerce"
    },
    {
        name: "delivery_zones",
        label: "Delivery Zones",
        group: "Commerce"
    }, 
];
const managedTableNames = managedTableConfig.map((item)=>item.name);

;// CONCATENATED MODULE: ./lib/server/admin/tables.js


const MANAGED_TABLES = managedTableNames;
const AUTO_COLUMNS = new Set([
    "created_at",
    "updated_at",
    "deleted_at"
]);
const isSafeIdentifier = (value)=>/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(String(value || ""));
const ensureManagedTable = (table)=>{
    const normalized = String(table || "").trim().toLowerCase();
    if (!MANAGED_TABLES.includes(normalized)) {
        throw new Error("Table is not managed by admin panel.");
    }
    if (!isSafeIdentifier(normalized)) {
        throw new Error("Invalid table name.");
    }
    return normalized;
};
const escapeIdentifier = (identifier)=>{
    if (!isSafeIdentifier(identifier)) {
        throw new Error("Unsafe SQL identifier.");
    }
    return `\`${identifier}\``;
};
const getManagedTablesSummary = async ()=>{
    const db = (0,server_db/* getDbPool */.z)();
    const summary = [];
    for (const table of MANAGED_TABLES){
        const query = `SELECT COUNT(*) AS total FROM ${escapeIdentifier(table)}`;
        const [rows] = await db.query(query);
        summary.push({
            table,
            total: Number(rows?.[0]?.total || 0)
        });
    }
    return summary;
};
const getTableColumns = async (table)=>{
    const safeTable = ensureManagedTable(table);
    const db = (0,server_db/* getDbPool */.z)();
    const [columns] = await db.execute(`SELECT
      COLUMN_NAME AS columnName,
      DATA_TYPE AS dataType,
      COLUMN_TYPE AS columnType,
      IS_NULLABLE AS isNullable,
      COLUMN_KEY AS columnKey,
      EXTRA AS extra,
      COLUMN_DEFAULT AS columnDefault
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = ?
    ORDER BY ORDINAL_POSITION`, [
        safeTable
    ]);
    return columns.map((column)=>({
            columnName: column.columnName,
            dataType: column.dataType,
            columnType: column.columnType,
            isNullable: column.isNullable === "YES",
            columnKey: column.columnKey,
            isPrimary: column.columnKey === "PRI",
            isAutoIncrement: String(column.extra || "").toLowerCase().includes("auto_increment"),
            columnDefault: column.columnDefault
        }));
};
const getPrimaryKeyColumn = (columns)=>columns.find((column)=>column.isPrimary)?.columnName || "id";
const normalizeValueForWrite = (rawValue, column)=>{
    if (rawValue === undefined) return undefined;
    if (rawValue === null) return null;
    const value = typeof rawValue === "string" ? rawValue.trim() : rawValue;
    if (value === "" && column.isNullable) {
        return null;
    }
    const type = String(column.dataType || "").toLowerCase();
    if ([
        "int",
        "bigint",
        "smallint",
        "mediumint",
        "tinyint"
    ].includes(type)) {
        if (value === "") return column.isNullable ? null : 0;
        const asNumber = Number(value);
        if (!Number.isFinite(asNumber)) throw new Error(`Invalid number for ${column.columnName}`);
        return Math.trunc(asNumber);
    }
    if ([
        "decimal",
        "float",
        "double"
    ].includes(type)) {
        if (value === "") return column.isNullable ? null : 0;
        const asNumber1 = Number(value);
        if (!Number.isFinite(asNumber1)) throw new Error(`Invalid decimal for ${column.columnName}`);
        return asNumber1;
    }
    if (type === "json") {
        if (value === "" || value === null) return column.isNullable ? null : "[]";
        if (typeof value === "object") return JSON.stringify(value);
        JSON.parse(String(value));
        return String(value);
    }
    return value;
};
const mapEditableColumns = (columns, includePrimary = false)=>columns.filter((column)=>{
        if (AUTO_COLUMNS.has(column.columnName)) return false;
        if (column.isAutoIncrement) return false;
        if (!includePrimary && column.isPrimary) return false;
        return true;
    });
const getTableRows = async ({ table , limit =50 , offset =0  })=>{
    const safeTable = ensureManagedTable(table);
    const db = (0,server_db/* getDbPool */.z)();
    const columns = await getTableColumns(safeTable);
    const primaryKeyColumn = getPrimaryKeyColumn(columns);
    const safeLimit = Math.max(1, Math.min(200, Number(limit) || 50));
    const safeOffset = Math.max(0, Number(offset) || 0);
    const [rows] = await db.query(`SELECT * FROM ${escapeIdentifier(safeTable)} ORDER BY ${escapeIdentifier(primaryKeyColumn)} DESC LIMIT ${safeLimit} OFFSET ${safeOffset}`);
    return rows;
};
const createTableRow = async ({ table , values  })=>{
    const safeTable = ensureManagedTable(table);
    const db = (0,server_db/* getDbPool */.z)();
    const columns = await getTableColumns(safeTable);
    const editableColumns = mapEditableColumns(columns);
    const selectedColumns = [];
    const selectedValues = [];
    editableColumns.forEach((column)=>{
        if (!Object.prototype.hasOwnProperty.call(values, column.columnName)) return;
        const normalized = normalizeValueForWrite(values[column.columnName], column);
        if (normalized === undefined) return;
        selectedColumns.push(column.columnName);
        selectedValues.push(normalized);
    });
    if (!selectedColumns.length) {
        throw new Error("No editable fields provided.");
    }
    const placeholders = selectedColumns.map(()=>"?").join(", ");
    const query = `INSERT INTO ${escapeIdentifier(safeTable)} (${selectedColumns.map(escapeIdentifier).join(", ")}) VALUES (${placeholders})`;
    const [result] = await db.execute(query, selectedValues);
    return result.insertId;
};
const updateTableRow = async ({ table , id , values  })=>{
    const safeTable = ensureManagedTable(table);
    const db = (0,server_db/* getDbPool */.z)();
    const columns = await getTableColumns(safeTable);
    const primaryKeyColumn = getPrimaryKeyColumn(columns);
    const editableColumns = mapEditableColumns(columns);
    const assignments = [];
    const assignmentValues = [];
    editableColumns.forEach((column)=>{
        if (!Object.prototype.hasOwnProperty.call(values, column.columnName)) return;
        const normalized = normalizeValueForWrite(values[column.columnName], column);
        if (normalized === undefined) return;
        assignments.push(`${escapeIdentifier(column.columnName)} = ?`);
        assignmentValues.push(normalized);
    });
    if (!assignments.length) {
        throw new Error("No editable fields provided for update.");
    }
    const query = `UPDATE ${escapeIdentifier(safeTable)} SET ${assignments.join(", ")} WHERE ${escapeIdentifier(primaryKeyColumn)} = ? LIMIT 1`;
    const [result] = await db.execute(query, [
        ...assignmentValues,
        id
    ]);
    return result.affectedRows;
};
const deleteTableRow = async ({ table , id  })=>{
    const safeTable = ensureManagedTable(table);
    const db = (0,server_db/* getDbPool */.z)();
    const columns = await getTableColumns(safeTable);
    const primaryKeyColumn = getPrimaryKeyColumn(columns);
    const [result] = await db.execute(`DELETE FROM ${escapeIdentifier(safeTable)} WHERE ${escapeIdentifier(primaryKeyColumn)} = ? LIMIT 1`, [
        id
    ]);
    return result.affectedRows;
};


/***/ })

};
;