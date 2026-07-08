"use strict";
(() => {
var exports = {};
exports.id = 4385;
exports.ids = [4385,7174];
exports.modules = {

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _table_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./pages/portal-secure-99x/SecureAdminLayout.jsx
var SecureAdminLayout = __webpack_require__(5912);
// EXTERNAL MODULE: ./lib/admin/managed-tables.js
var managed_tables = __webpack_require__(7500);
;// CONCATENATED MODULE: ./components/admin/TableManagerModern.jsx








const ReactQuill = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\admin\\TableManagerModern.jsx -> " + "react-quill"
        ]
    },
    ssr: false
});
const RICH_TEXT_TABLES = [
    "digi_services",
    "bus_corp_sol",
    "service_maintenance",
    "page_contents",
    "career_posts"
];
const RICH_TEXT_COLUMN = "full_description";
const quillModules = {
    toolbar: [
        [
            {
                header: [
                    1,
                    2,
                    3,
                    false
                ]
            }
        ],
        [
            "bold",
            "italic",
            "underline",
            "strike"
        ],
        [
            {
                color: []
            },
            {
                background: []
            }
        ],
        [
            {
                align: []
            }
        ],
        [
            {
                list: "ordered"
            },
            {
                list: "bullet"
            }
        ],
        [
            "blockquote",
            "link",
            "image"
        ],
        [
            "clean"
        ], 
    ]
};
const AUDIT_COLUMNS = new Set([
    "created_at",
    "updated_at",
    "deleted_at"
]);
const SENSITIVE_COLUMNS = new Set([
    "password",
    "password_hash",
    "token",
    "access_token",
    "remember_token"
]);
const IMAGE_MEDIA_COLUMNS = new Set([
    "thumbnail_1",
    "thumbnail_2",
    "photos"
]);
const SLUG_AUTOFILL_TABLES = null // Auto-slug works for all tables with name+slug columns
;
const IMAGE_ACCEPT = "image/*";
// Searchable Select Component
const SearchableSelect = ({ value , onChange , options , placeholder  })=>{
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)("");
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const wrapRef = (0,external_react_.useRef)(null);
    const filtered = search ? options.filter((o)=>o.label.toLowerCase().includes(search.toLowerCase())) : options;
    const selectedLabel = options.find((o)=>String(o.value) === String(value))?.label || "";
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (e)=>{
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: wrapRef,
        style: {
            position: "relative",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: ()=>setIsOpen(!isOpen),
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "44px",
                    padding: "0 14px",
                    border: "1px solid #d0d5dd",
                    borderRadius: "8px",
                    background: "#fff",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: selectedLabel ? "#1d2939" : "#9ca3af"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        },
                        children: selectedLabel || placeholder || "Select..."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "#6b7280",
                            fontSize: "12px"
                        },
                        children: "▾"
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    marginTop: "4px",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 9999,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        placeholder: "Type to search...",
                        autoFocus: true,
                        style: {
                            width: "100%",
                            border: "none",
                            borderBottom: "1px solid #f3f4f6",
                            padding: "10px 14px",
                            fontSize: "13px",
                            outline: "none"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            maxHeight: "200px",
                            overflowY: "auto"
                        },
                        children: [
                            filtered.map((opt)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    onClick: ()=>{
                                        onChange(opt.value);
                                        setIsOpen(false);
                                        setSearch("");
                                    },
                                    style: {
                                        padding: "8px 14px",
                                        fontSize: "13px",
                                        cursor: "pointer",
                                        color: String(opt.value) === String(value) ? "#1d4ed8" : "#374151",
                                        background: String(opt.value) === String(value) ? "#eff6ff" : "transparent",
                                        fontWeight: String(opt.value) === String(value) ? "600" : "400"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "#f3f4f6";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = String(opt.value) === String(value) ? "#eff6ff" : "transparent";
                                    },
                                    children: opt.label
                                }, opt.value)),
                            filtered.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    padding: "12px 14px",
                                    fontSize: "13px",
                                    color: "#9ca3af",
                                    textAlign: "center"
                                },
                                children: "No results"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const VIDEO_ACCEPT = "video/*";
const toTitleCase = (value)=>String(value || "").replace(/_/g, " ").replace(/\b\w/g, (character)=>character.toUpperCase());
const FRIENDLY_LABELS = {
    name: "Name",
    slug: "URL Slug",
    category_id: "Category",
    type: "Type",
    price: "Price",
    stock_qty: "Stock Quantity",
    short_desc: "Short Description",
    long_desc: "Full Description",
    features: "Features",
    is_active: "Status",
    active: "Status",
    thumbnail_1: "Main Image",
    thumbnail_2: "Secondary Image",
    photos: "Gallery Images",
    video_link: "Video",
    email: "Email Address",
    phone: "Phone Number",
    full_name: "Full Name",
    branch_name: "Branch Name"
};
const toFriendlyLabel = (columnName)=>{
    const key = String(columnName || "").toLowerCase();
    return FRIENDLY_LABELS[key] || toTitleCase(columnName);
};
const safeText = (value)=>{
    if (value === null || value === undefined) return "";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
};
const toSlug = (value)=>String(value || "").trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
const isEditableColumn = (column)=>{
    if (!column) return false;
    if (AUDIT_COLUMNS.has(column.columnName)) return false;
    if (column.isAutoIncrement) return false;
    return true;
};
const isMediaColumn = (table, column)=>{
    if (!column) return false;
    if (table === "products" && IMAGE_MEDIA_COLUMNS.has(column.columnName)) return true;
    if (String(column.columnName || "").toLowerCase().includes("video")) return true;
    if (String(column.columnName || "").toLowerCase() === "icon_url") return true;
    if (String(column.columnName || "").toLowerCase() === "image_url") return true;
    return false;
};
const isBooleanishColumn = (column)=>{
    const type = String(column?.dataType || "").toLowerCase();
    const name = String(column?.columnName || "").toLowerCase();
    return type === "tinyint" && (name.startsWith("is_") || name.endsWith("_active") || name === "active");
};
const isLongTextColumn = (column)=>{
    const type = String(column?.dataType || "").toLowerCase();
    return [
        "text",
        "mediumtext",
        "longtext",
        "json"
    ].includes(type);
};
const resolveFieldControl = (table, column)=>{
    const type = String(column?.dataType || "").toLowerCase();
    const columnName = String(column?.columnName || "").toLowerCase();
    const columnType = String(column?.columnType || "").toLowerCase();
    if (table === "products" && IMAGE_MEDIA_COLUMNS.has(columnName)) {
        if (columnName === "photos") {
            return {
                kind: "gallery-upload",
                label: "Gallery Images",
                hint: "Upload multiple images from this PC or paste image URLs one per line.",
                accept: IMAGE_ACCEPT
            };
        }
        return {
            kind: "upload-url",
            label: columnName === "thumbnail_1" ? "Main Image" : "Secondary Image",
            hint: "Upload an image to save it locally on this PC, or paste an image URL.",
            accept: IMAGE_ACCEPT
        };
    }
    if (columnName.includes("video")) {
        return {
            kind: "upload-url",
            label: "Video Link",
            hint: "Upload a video to save it locally on this PC, or paste a video URL.",
            accept: VIDEO_ACCEPT
        };
    }
    if (columnName === "icon_url" || columnName === "image_url") {
        return {
            kind: "upload-url",
            label: columnName === "icon_url" ? "Icon / Image" : "Advertisement Image",
            hint: "Upload an image or paste an image URL.",
            accept: IMAGE_ACCEPT
        };
    }
    if (columnName === "status" && (type === "enum" || columnType.includes("'active'"))) {
        return {
            kind: "select",
            label: toFriendlyLabel(column.columnName),
            hint: "Choose active or inactive.",
            options: [
                {
                    label: "Active",
                    value: "active"
                },
                {
                    label: "Inactive",
                    value: "inactive"
                }, 
            ]
        };
    }
    if (isBooleanishColumn(column)) {
        return {
            kind: "select",
            label: toFriendlyLabel(column.columnName),
            hint: "Choose yes or no.",
            options: [
                {
                    label: "Yes",
                    value: "1"
                },
                {
                    label: "No",
                    value: "0"
                }, 
            ]
        };
    }
    if ([
        "int",
        "bigint",
        "smallint",
        "mediumint",
        "tinyint",
        "decimal",
        "double",
        "float"
    ].includes(type)) {
        return {
            kind: "input",
            type: "number",
            label: toFriendlyLabel(column.columnName),
            hint: "Enter a number."
        };
    }
    if (type === "date") {
        return {
            kind: "input",
            type: "date",
            label: toFriendlyLabel(column.columnName),
            hint: "Pick a date."
        };
    }
    if (type === "datetime" || type === "timestamp") {
        return {
            kind: "input",
            type: "datetime-local",
            label: toFriendlyLabel(column.columnName),
            hint: "Pick date and time."
        };
    }
    if (isLongTextColumn(column)) {
        return {
            kind: "textarea",
            label: toFriendlyLabel(column.columnName),
            hint: type === "json" ? "You can paste JSON or a list of URLs." : "Write longer text here."
        };
    }
    return {
        kind: "input",
        type: "text",
        label: toFriendlyLabel(column.columnName),
        hint: "Enter a value."
    };
};
const getPrimaryColumn = (columns)=>columns.find((column)=>column.isPrimary)?.columnName || "id";
const getDisplayTitle = (row, columns, primaryColumn)=>{
    const preferredColumns = [
        "name",
        "title",
        "subject",
        "branch_name",
        "full_name",
        "email",
        "phone"
    ];
    const preferredColumn = columns.find((column)=>preferredColumns.some((token)=>String(column.columnName).toLowerCase().includes(token)));
    if (preferredColumn && safeText(row?.[preferredColumn.columnName])) {
        return safeText(row?.[preferredColumn.columnName]);
    }
    return safeText(row?.[primaryColumn]) || `Row ${safeText(row?.[primaryColumn] || "")}`;
};
const getCardColumns = (table, columns)=>{
    const hiddenColumns = new Set([
        ...AUDIT_COLUMNS,
        ...SENSITIVE_COLUMNS,
        ...columns.filter((column)=>isMediaColumn(table, column)).map((column)=>column.columnName),
        "photos", 
    ]);
    const preferredNames = [
        "name",
        "title",
        "subject",
        "branch_name",
        "full_name",
        "email",
        "phone",
        "price",
        "stock_qty",
        "type"
    ];
    const ordered = [];
    preferredNames.forEach((token)=>{
        const match = columns.find((column)=>!hiddenColumns.has(column.columnName) && String(column.columnName).toLowerCase().includes(token));
        if (match && !ordered.some((column)=>column.columnName === match.columnName)) {
            ordered.push(match);
        }
    });
    columns.forEach((column)=>{
        if (ordered.length >= 5) return;
        if (hiddenColumns.has(column.columnName)) return;
        if (!isEditableColumn(column) && column.columnKey !== "PRI") return;
        if (!ordered.some((existing)=>existing.columnName === column.columnName)) {
            ordered.push(column);
        }
    });
    return ordered.slice(0, 5);
};
const getDisplayColumns = (table, columns)=>{
    return getCardColumns(table, columns).filter((column)=>!SENSITIVE_COLUMNS.has(String(column.columnName).toLowerCase()));
};
const stringifyMediaUrls = (value)=>{
    if (Array.isArray(value)) return value.filter(Boolean).join("\n");
    if (typeof value === "string") {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return parsed.filter(Boolean).join("\n");
        } catch (error) {
            return value;
        }
    }
    return safeText(value);
};
const parseStoredPhotos = (value)=>{
    if (Array.isArray(value)) return value.filter(Boolean);
    if (typeof value === "string") {
        try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return parsed.filter(Boolean);
        } catch (error) {
            return String(value || "").split(/\n|,/).map((item)=>item.trim()).filter(Boolean);
        }
    }
    return [];
};
const parseMediaUrls = (value)=>String(value || "").split(/\n|,/).map((item)=>item.trim()).filter(Boolean);
const getRowCoverCandidate = (row)=>{
    const primary = row?.thumbnail_1 || row?.thumbnail_2 || row?.icon_url || row?.image_url;
    if (primary) return primary;
    if (!row?.photos) return "";
    if (Array.isArray(row.photos)) {
        return row.photos.find(Boolean) || "";
    }
    if (typeof row.photos === "string") {
        try {
            const parsed = JSON.parse(row.photos);
            if (Array.isArray(parsed)) return parsed.find(Boolean) || "";
        } catch (error) {
            const fallbackList = parseMediaUrls(row.photos);
            return fallbackList[0] || "";
        }
    }
    return "";
};
const cardMediaFrameStyle = {
    position: "relative",
    width: "100%",
    height: "148px",
    minHeight: "148px",
    maxHeight: "148px",
    flex: "0 0 148px",
    overflow: "hidden",
    display: "block",
    margin: 0,
    borderBottom: "1px solid #efeafd",
    background: "#f3f2fb"
};
const cardMediaImageStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block"
};
const toSafeMediaSrc = (value)=>{
    const source = String(value || "").trim().replace(/\\/g, "/");
    if (!source) return "";
    if (source.startsWith("http://") || source.startsWith("https://") || source.startsWith("/")) {
        return source;
    }
    const uploadsIndex = source.toLowerCase().indexOf("uploads/admin/");
    if (uploadsIndex !== -1) {
        return `/${source.slice(uploadsIndex)}`;
    }
    return "";
};
const normalizeSubmitValues = (table, columns, formValues)=>{
    const normalized = {};
    columns.forEach((column)=>{
        if (!Object.prototype.hasOwnProperty.call(formValues, column.columnName)) return;
        const control = resolveFieldControl(table, column);
        let value = formValues[column.columnName];
        if (control.kind === "textarea" && column.columnName === "photos") {
            normalized[column.columnName] = JSON.stringify(parseMediaUrls(value));
            return;
        }
        if (control.kind === "upload-url" && IMAGE_MEDIA_COLUMNS.has(column.columnName)) {
            normalized[column.columnName] = safeText(value);
            return;
        }
        if (control.kind === "select") {
            const values = Array.isArray(control.options) ? control.options.map((option)=>String(option.value)) : [];
            if (values.includes("1") && values.includes("0")) {
                normalized[column.columnName] = String(value) === "1" ? 1 : 0;
            } else {
                normalized[column.columnName] = safeText(value);
            }
            return;
        }
        normalized[column.columnName] = value;
    });
    return normalized;
};
const extractCardValue = (table, column, row)=>{
    const value = row?.[column.columnName];
    if (table === "products" && column.columnName === "photos") {
        try {
            const parsed = typeof value === "string" ? JSON.parse(value) : value;
            if (Array.isArray(parsed)) return `${parsed.length} image${parsed.length === 1 ? "" : "s"}`;
        } catch (error) {
            return safeText(value);
        }
    }
    if (typeof value === "boolean") {
        return value ? "Yes" : "No";
    }
    return safeText(value);
};
const ModernTableManager = ()=>{
    const router = (0,router_.useRouter)();
    const table = String(router.query.table || "").toLowerCase();
    const { 0: columns , 1: setColumns  } = (0,external_react_.useState)([]);
    const { 0: rows , 1: setRows  } = (0,external_react_.useState)([]);
    const { 0: searchText , 1: setSearchText  } = (0,external_react_.useState)("");
    const { 0: viewMode , 1: setViewMode  } = (0,external_react_.useState)("list");
    const { 0: sortBy , 1: setSortBy  } = (0,external_react_.useState)("default");
    const { 0: filterCategory , 1: setFilterCategory  } = (0,external_react_.useState)("");
    const { 0: filterBrand , 1: setFilterBrand  } = (0,external_react_.useState)("");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: submitting , 1: setSubmitting  } = (0,external_react_.useState)(false);
    const { 0: uploadingField , 1: setUploadingField  } = (0,external_react_.useState)("");
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: success , 1: setSuccess  } = (0,external_react_.useState)("");
    const { 0: showForm , 1: setShowForm  } = (0,external_react_.useState)(false);
    const { 0: editRowId , 1: setEditRowId  } = (0,external_react_.useState)(null);
    const { 0: createForm , 1: setCreateForm  } = (0,external_react_.useState)({});
    const { 0: editForm , 1: setEditForm  } = (0,external_react_.useState)({});
    const { 0: createSlugEdited , 1: setCreateSlugEdited  } = (0,external_react_.useState)(false);
    const { 0: categorySpecs , 1: setCategorySpecs  } = (0,external_react_.useState)([]);
    const { 0: allCategories , 1: setAllCategories  } = (0,external_react_.useState)([]);
    const { 0: allProducts , 1: setAllProducts  } = (0,external_react_.useState)([]);
    const { 0: previewImages , 1: setPreviewImages  } = (0,external_react_.useState)([]);
    const uploadRefs = (0,external_react_.useRef)({});
    const formSectionRef = (0,external_react_.useRef)(null);
    const tableMeta = (0,external_react_.useMemo)(()=>managed_tables/* managedTableConfig.find */.C.find((item)=>item.name === table), [
        table
    ]);
    const editableColumns = (0,external_react_.useMemo)(()=>columns.filter(isEditableColumn), [
        columns
    ]);
    const mediaColumns = (0,external_react_.useMemo)(()=>editableColumns.filter((column)=>isMediaColumn(table, column)), [
        editableColumns,
        table
    ]);
    const detailColumns = (0,external_react_.useMemo)(()=>editableColumns.filter((column)=>!isMediaColumn(table, column)), [
        editableColumns,
        table
    ]);
    const orderedDetailColumns = (0,external_react_.useMemo)(()=>{
        const preferredOrder = [
            "name",
            "slug",
            "category_id",
            "type",
            "price",
            "stock_qty",
            "short_desc",
            "long_desc",
            "features",
            "is_active",
            "active", 
        ];
        const used = new Set();
        const ordered = [];
        preferredOrder.forEach((preferredName)=>{
            const match = detailColumns.find((column)=>String(column.columnName).toLowerCase() === preferredName);
            if (match && !used.has(match.columnName)) {
                ordered.push(match);
                used.add(match.columnName);
            }
        });
        detailColumns.forEach((column)=>{
            if (!used.has(column.columnName)) {
                ordered.push(column);
                used.add(column.columnName);
            }
        });
        return ordered;
    }, [
        detailColumns
    ]);
    const orderedMediaColumns = (0,external_react_.useMemo)(()=>{
        const preferredOrder = [
            "thumbnail_1",
            "thumbnail_2",
            "photos",
            "video",
            "video_url",
            "video_link"
        ];
        const used = new Set();
        const ordered = [];
        preferredOrder.forEach((preferredName)=>{
            const match = mediaColumns.find((column)=>String(column.columnName).toLowerCase() === preferredName);
            if (match && !used.has(match.columnName)) {
                ordered.push(match);
                used.add(match.columnName);
            }
        });
        mediaColumns.forEach((column)=>{
            if (!used.has(column.columnName)) {
                ordered.push(column);
                used.add(column.columnName);
            }
        });
        return ordered;
    }, [
        mediaColumns
    ]);
    const primaryColumn = (0,external_react_.useMemo)(()=>getPrimaryColumn(columns), [
        columns
    ]);
    const cardColumns = (0,external_react_.useMemo)(()=>getCardColumns(table, columns), [
        table,
        columns
    ]);
    const displayColumns = (0,external_react_.useMemo)(()=>getDisplayColumns(table, columns), [
        table,
        columns
    ]);
    const tableColumns = (0,external_react_.useMemo)(()=>{
        const nextColumns = [];
        const preferredTitleColumns = [
            "name",
            "title",
            "subject",
            "branch_name",
            "full_name",
            "email",
            "phone"
        ];
        const alreadyRenderedColumnNames = new Set([
            "id",
            "uid",
            ...preferredTitleColumns
        ]);
        const excludeFromTable = new Set([
            "description",
            "full_description",
            "long_desc",
            "short_desc",
            "features",
            "specifications",
            "photos",
            "video",
            "video_url"
        ]);
        displayColumns.forEach((column)=>{
            if (nextColumns.length >= 3) return;
            const columnNameLower = String(column.columnName).toLowerCase();
            if (alreadyRenderedColumnNames.has(columnNameLower)) return;
            if (excludeFromTable.has(columnNameLower)) return;
            if (column.dataType === "text" || column.dataType === "longtext" || column.dataType === "json") return;
            if (!nextColumns.some((existing)=>existing.columnName === column.columnName)) {
                nextColumns.push(column);
            }
        });
        return nextColumns.slice(0, 3);
    }, [
        displayColumns
    ]);
    const filteredRows = (0,external_react_.useMemo)(()=>{
        let result = [
            ...rows
        ];
        // Text search
        const query = searchText.trim().toLowerCase();
        if (query) {
            result = result.filter((row)=>columns.some((column)=>safeText(row[column.columnName]).toLowerCase().includes(query)));
        }
        // Category filter (filter by parent category - includes all its subcategories)
        if (filterCategory) {
            const childCatIds = allCategories.filter((c)=>String(c.parent_id) === filterCategory).map((c)=>c.id);
            const matchIds = [
                Number(filterCategory),
                ...childCatIds
            ];
            result = result.filter((row)=>matchIds.includes(row.category_id));
        }
        // Brand filter
        if (filterBrand) {
            result = result.filter((row)=>safeText(row.brand).toLowerCase() === filterBrand.toLowerCase());
        }
        // Sorting
        if (sortBy === "price-high") {
            result.sort((a, b)=>Number(b.price || b.regular_price || 0) - Number(a.price || a.regular_price || 0));
        } else if (sortBy === "price-low") {
            result.sort((a, b)=>Number(a.price || a.regular_price || 0) - Number(b.price || b.regular_price || 0));
        } else if (sortBy === "newest") {
            result.sort((a, b)=>new Date(b.created_at || 0) - new Date(a.created_at || 0));
        } else if (sortBy === "oldest") {
            result.sort((a, b)=>new Date(a.created_at || 0) - new Date(b.created_at || 0));
        }
        return result;
    }, [
        rows,
        columns,
        searchText,
        sortBy,
        filterCategory,
        filterBrand
    ]);
    // Extract unique categories and brands for filter dropdowns (show parent categories)
    const availableCategories = (0,external_react_.useMemo)(()=>{
        const cats = new Map();
        rows.forEach((row)=>{
            if (row.category_id) {
                const catMatch = allCategories.find((c)=>c.id === row.category_id);
                if (catMatch) {
                    // If it's a subcategory, show the parent category name
                    if (catMatch.parent_id) {
                        const parentCat = allCategories.find((c)=>c.id === catMatch.parent_id);
                        if (parentCat) {
                            cats.set(String(parentCat.id), parentCat.name);
                        } else {
                            cats.set(String(catMatch.id), catMatch.name);
                        }
                    } else {
                        cats.set(String(catMatch.id), catMatch.name);
                    }
                }
            }
        });
        return Array.from(cats.entries()).map(([id, name])=>({
                id,
                name
            }));
    }, [
        rows,
        allCategories
    ]);
    const availableBrands = (0,external_react_.useMemo)(()=>{
        const brands = new Set();
        rows.forEach((row)=>{
            if (row.brand) brands.add(row.brand);
        });
        return Array.from(brands).sort();
    }, [
        rows
    ]);
    const activeFormValues = editRowId !== null ? editForm : createForm;
    const scrollToFormSection = ()=>{
        window.setTimeout(()=>{
            requestAnimationFrame(()=>{
                formSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }, 80);
    };
    const loadTableData = async ()=>{
        if (!table) return;
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`/api/admin/tables/${table}`);
            const payload = await response.json();
            if (!response.ok || !payload?.success) {
                throw new Error(payload?.details || payload?.error || "Unable to load table data.");
            }
            setColumns(payload.columns || []);
            setRows(payload.rows || []);
            setCreateForm({});
            setEditRowId(null);
            setEditForm({});
            setShowForm(false);
        } catch (loadError) {
            setError(loadError.message);
        } finally{
            setLoading(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        loadTableData();
    }, [
        table
    ]);
    // Fetch all categories for dropdown (when table has category_id column)
    (0,external_react_.useEffect)(()=>{
        fetch("/api/categories").then((r)=>r.json()).then((data)=>{
            if (data.categories) setAllCategories(data.categories);
        }).catch(()=>{});
        // Fetch products for product_id dropdown
        fetch("/api/admin/tables/products?limit=200").then((r)=>r.json()).then((data)=>{
            if (data.rows) setAllProducts(data.rows);
        }).catch(()=>{});
    }, []);
    const handleFormChange = (columnName, value, options = {})=>{
        const isUserInput = options?.source !== "auto";
        const hasSlugColumn = editableColumns.some((column)=>column.columnName === "slug");
        const shouldAutoFillSlug = editRowId === null && hasSlugColumn;
        if (editRowId !== null) {
            setEditForm((current)=>({
                    ...current,
                    [columnName]: value
                }));
            return;
        }
        if (columnName === "slug" && isUserInput) {
            setCreateSlugEdited(true);
        }
        setCreateForm((current)=>{
            const next = {
                ...current,
                [columnName]: value
            };
            if (columnName === "name" && shouldAutoFillSlug && (!createSlugEdited || !safeText(current.slug).trim())) {
                next.slug = toSlug(value);
            }
            return next;
        });
        // Fetch category specs when category_id changes (for products table)
        if (columnName === "category_id" && table === "products" && value) {
            fetchCategorySpecs(value);
        }
    };
    const fetchCategorySpecs = async (categoryId)=>{
        if (!categoryId) {
            setCategorySpecs([]);
            return;
        }
        try {
            const res = await fetch(`/api/admin/category-specs?category_id=${categoryId}`);
            const data = await res.json();
            if (data.success && data.specs) {
                setCategorySpecs(data.specs);
            } else {
                setCategorySpecs([]);
            }
        } catch (e) {
            setCategorySpecs([]);
        }
    };
    const openCreateForm = ()=>{
        setEditRowId(null);
        setEditForm({});
        setCreateForm({});
        setCreateSlugEdited(false);
        setPreviewImages([]);
        setShowForm(true);
        setError("");
        setSuccess("");
        scrollToFormSection();
    };
    const openEditForm = (row)=>{
        const nextForm = {};
        const nextPreviews = [];
        editableColumns.forEach((column)=>{
            const control = resolveFieldControl(table, column);
            const rowValue = row[column.columnName];
            if (table === "products" && column.columnName === "photos") {
                nextForm[column.columnName] = stringifyMediaUrls(rowValue);
                nextPreviews.push(...parseStoredPhotos(rowValue));
                return;
            }
            if (control.kind === "select") {
                nextForm[column.columnName] = safeText(rowValue || control.options?.[0]?.value || "");
                return;
            }
            if (isMediaColumn(table, column)) {
                nextForm[column.columnName] = safeText(rowValue);
                return;
            }
            nextForm[column.columnName] = safeText(rowValue);
        });
        setEditRowId(row[primaryColumn]);
        setEditForm(nextForm);
        setPreviewImages(nextPreviews);
        setShowForm(true);
        setError("");
        setSuccess("");
        scrollToFormSection();
        // Load category specs if editing a product with category_id
        if (table === "products" && row.category_id) {
            fetchCategorySpecs(row.category_id);
        }
    };
    const closeForm = ()=>{
        setEditRowId(null);
        setEditForm({});
        setCreateForm({});
        setCreateSlugEdited(false);
        setCategorySpecs([]);
        setPreviewImages([]);
        setShowForm(false);
        setUploadingField("");
    };
    const submitRecord = async (event)=>{
        event.preventDefault();
        setError("");
        setSuccess("");
        setSubmitting(true);
        try {
            const values = normalizeSubmitValues(table, editableColumns, activeFormValues);
            const endpoint = editRowId !== null ? `/api/admin/tables/${table}/${encodeURIComponent(String(editRowId))}` : `/api/admin/tables/${table}`;
            const method = editRowId !== null ? "PUT" : "POST";
            const response = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    values
                })
            });
            const payload = await response.json();
            if (!response.ok || !payload?.success) {
                throw new Error(payload?.details || payload?.error || "Unable to save record.");
            }
            setSuccess(editRowId !== null ? "Record updated successfully." : "New record created successfully.");
            await loadTableData();
        } catch (submitError) {
            setError(submitError.message);
        } finally{
            setSubmitting(false);
        }
    };
    const handleDeleteRow = async (rowId)=>{
        const confirmed = window.confirm("Delete this row? This cannot be undone.");
        if (!confirmed) return;
        setError("");
        setSuccess("");
        try {
            const response = await fetch(`/api/admin/tables/${table}/${encodeURIComponent(String(rowId))}`, {
                method: "DELETE"
            });
            const payload = await response.json();
            if (!response.ok || !payload?.success) {
                throw new Error(payload?.details || payload?.error || "Unable to delete row.");
            }
            setSuccess("Row deleted successfully.");
            await loadTableData();
        } catch (deleteError) {
            setError(deleteError.message);
        }
    };
    const uploadFieldFile = async (columnName, file)=>{
        if (!file) return;
        setUploadingField(columnName);
        setError("");
        setSuccess("");
        try {
            const formData = new FormData();
            formData.append("file", file);
            const response = await fetch("/api/admin/uploads", {
                method: "POST",
                body: formData
            });
            const payload = await response.json();
            if (!response.ok || !payload?.success) {
                throw new Error(payload?.details || payload?.error || "Upload failed.");
            }
            if (columnName === "photos") {
                setEditForm((current)=>{
                    if (editRowId === null) return current;
                    const currentList = parseMediaUrls(current[columnName]);
                    return {
                        ...current,
                        [columnName]: [
                            ...currentList,
                            payload.url
                        ].join("\n")
                    };
                });
                setCreateForm((current)=>{
                    if (editRowId !== null) return current;
                    const currentList = parseMediaUrls(current[columnName]);
                    return {
                        ...current,
                        [columnName]: [
                            ...currentList,
                            payload.url
                        ].join("\n")
                    };
                });
                setPreviewImages((current)=>[
                        ...current,
                        payload.url
                    ]);
            } else {
                handleFormChange(columnName, payload.url);
            }
            setSuccess("File uploaded successfully.");
        } catch (uploadError) {
            setError(uploadError.message);
        } finally{
            setUploadingField("");
        }
    };
    const triggerUpload = (columnName)=>{
        uploadRefs.current[columnName]?.click();
    };
    const onFilePick = (columnName, event)=>{
        const file = event.target.files?.[0];
        event.target.value = "";
        uploadFieldFile(columnName, file);
    };
    const onGalleryPick = async (event)=>{
        const files = Array.from(event.target.files || []);
        event.target.value = "";
        for (const file of files){
            // Upload one by one so the stored gallery order matches the chosen files.
            await uploadFieldFile("photos", file);
        }
    };
    const removeGalleryImage = (url)=>{
        const nextList = parseMediaUrls(activeFormValues.photos).filter((item)=>item !== url);
        if (editRowId !== null) {
            setEditForm((current)=>({
                    ...current,
                    photos: nextList.join("\n")
                }));
        } else {
            setCreateForm((current)=>({
                    ...current,
                    photos: nextList.join("\n")
                }));
        }
        setPreviewImages((current)=>current.filter((item)=>item !== url));
    };
    const getInputPlaceholder = (column)=>{
        const name = String(column?.columnName || "").toLowerCase();
        if (name === "name") return "Enter product name";
        if (name === "slug") return "product-url-slug";
        if (name === "category_id") return "Enter category id";
        if (name === "type") return "Hardware, Software, Service...";
        if (name === "price") return "0.00";
        if (name === "stock_qty") return "0";
        if (name.includes("short")) return "Write a short product summary";
        if (name.includes("long")) return "Write the full product description";
        if (name.includes("feature")) return "List product features or paste JSON";
        const control = resolveFieldControl(table, column);
        return control.hint || `Enter ${toTitleCase(column?.columnName || "value").toLowerCase()}`;
    };
    const renderInput = (column)=>{
        const control = resolveFieldControl(table, column);
        const value = activeFormValues[column.columnName] || "";
        const columnNameLower = String(column.columnName).toLowerCase();
        // Rich text editor for full_description in specific tables
        if (columnNameLower === RICH_TEXT_COLUMN && RICH_TEXT_TABLES.includes(table)) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rich-editor-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ReactQuill, {
                    theme: "snow",
                    value: value,
                    onChange: (content)=>handleFormChange(column.columnName, content),
                    modules: quillModules,
                    placeholder: "Write detailed content with formatting..."
                })
            });
        }
        // Category dropdown for category_id and parent_id columns
        if ((columnNameLower === "category_id" || columnNameLower === "parent_id") && allCategories.length > 0) {
            const parents = allCategories.filter((c)=>!c.parent_id);
            return /*#__PURE__*/ jsx_runtime_.jsx(SearchableSelect, {
                value: value || "",
                onChange: (val)=>handleFormChange(column.columnName, val),
                placeholder: "Search & select category...",
                options: (()=>{
                    const opts = [
                        {
                            value: "",
                            label: "— Select Category —"
                        }
                    ];
                    parents.forEach((parent)=>{
                        opts.push({
                            value: String(parent.id),
                            label: `${parent.name}`
                        });
                        const children = allCategories.filter((c)=>c.parent_id === parent.id);
                        children.forEach((child)=>{
                            opts.push({
                                value: String(child.id),
                                label: `  └ ${child.name}`
                            });
                        });
                    });
                    return opts;
                })()
            });
        }
        // Product dropdown for product_id column
        if (columnNameLower === "product_id" && allProducts.length > 0) {
            return /*#__PURE__*/ jsx_runtime_.jsx(SearchableSelect, {
                value: value || "",
                onChange: (val)=>handleFormChange(column.columnName, val),
                placeholder: "Search & select product...",
                options: [
                    {
                        value: "",
                        label: "— Select Product (optional) —"
                    },
                    ...allProducts.map((p)=>({
                            value: String(p.id),
                            label: `${p.name} (#${p.id})`
                        }))
                ]
            });
        }
        if (control.kind === "select") {
            return /*#__PURE__*/ jsx_runtime_.jsx("select", {
                className: "form-input-styled",
                style: {
                    width: "100%",
                    height: "48px",
                    padding: "0 14px",
                    border: "2px solid #c7d2fe",
                    borderRadius: "10px",
                    background: "#fafbff",
                    color: "#0f172a",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    cursor: "pointer"
                },
                value: value || control.options?.[0]?.value || "",
                onChange: (event)=>handleFormChange(column.columnName, event.target.value),
                children: control.options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: option.value,
                        children: option.label
                    }, option.value))
            });
        }
        if (control.kind === "textarea") {
            const isShort = columnNameLower.includes("short");
            const isLong = columnNameLower.includes("long");
            const isFeature = columnNameLower.includes("feature");
            return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                className: "form-input-styled",
                style: {
                    width: "100%",
                    minHeight: isShort ? "80px" : "120px",
                    padding: "12px 14px",
                    border: "2px solid #c7d2fe",
                    borderRadius: "10px",
                    background: "#fafbff",
                    color: "#0f172a",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    resize: "vertical",
                    lineHeight: "1.6"
                },
                rows: isShort ? 3 : isLong || isFeature ? 5 : 4,
                value: value,
                onChange: (event)=>handleFormChange(column.columnName, event.target.value),
                placeholder: getInputPlaceholder(column)
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("input", {
            className: "form-input-styled",
            style: {
                width: "100%",
                height: "48px",
                padding: "0 14px",
                border: "2px solid #c7d2fe",
                borderRadius: "10px",
                background: "#fafbff",
                color: "#0f172a",
                fontSize: "14px",
                fontFamily: "inherit"
            },
            type: control.type || "text",
            value: value,
            onChange: (event)=>handleFormChange(column.columnName, event.target.value),
            placeholder: getInputPlaceholder(column)
        });
    };
    // Inline style constants for media fields (styled-jsx won't scope to helper-rendered elements)
    const mediaFieldBoxStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "16px",
        border: "2px solid #c7d2fe",
        borderRadius: "14px",
        background: "#ffffff"
    };
    const mediaPreviewFixedStyle = {
        position: "relative",
        width: "100%",
        height: "150px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "2px solid #e0e7ff",
        background: "#f1f5f9",
        flexShrink: 0
    };
    const mediaPreviewImgStyle = {
        width: "100%",
        height: "150px",
        objectFit: "contain",
        objectPosition: "center",
        display: "block",
        background: "#f8fafc"
    };
    const mediaPreviewRemoveStyle = {
        position: "absolute",
        top: "6px",
        right: "6px",
        width: "24px",
        height: "24px",
        border: "none",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.55)",
        color: "#fff",
        fontSize: "16px",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    };
    const mediaThumbBoxStyle = {
        position: "relative",
        width: "80px",
        height: "80px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "2px solid #c7d2fe",
        flexShrink: 0,
        background: "#f8fafc"
    };
    const mediaThumbImgStyle = {
        width: "80px",
        height: "80px",
        objectFit: "cover",
        display: "block"
    };
    const mediaThumbRemoveStyle = {
        position: "absolute",
        top: "4px",
        right: "4px",
        width: "20px",
        height: "20px",
        border: "none",
        borderRadius: "50%",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        fontSize: "14px",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    };
    const mediaThumbRowStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 80px)",
        gap: "10px"
    };
    const mediaFileNameRowStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "8px"
    };
    const renderMediaField = (column)=>{
        const control = resolveFieldControl(table, column);
        const value = activeFormValues[column.columnName] || "";
        const columnNameLower = String(column.columnName).toLowerCase();
        const isGallery = columnNameLower === "photos";
        const isVideo = columnNameLower.includes("video");
        const galleryItems = isGallery ? parseMediaUrls(value) : [];
        const previewSrc = !isGallery && value ? toSafeMediaSrc(value) : "";
        const onDragOver = (e)=>{
            e.preventDefault();
            e.currentTarget.classList.add("drag-over");
        };
        const onDragLeave = (e)=>{
            e.preventDefault();
            e.currentTarget.classList.remove("drag-over");
        };
        const onDropSingle = (e)=>{
            e.preventDefault();
            e.currentTarget.classList.remove("drag-over");
            const file = e.dataTransfer?.files?.[0];
            if (file) {
                const fakeEvent = {
                    target: {
                        files: [
                            file
                        ]
                    }
                };
                onFilePick(column.columnName, fakeEvent);
            }
        };
        const onDropGallery = (e)=>{
            e.preventDefault();
            e.currentTarget.classList.remove("drag-over");
            const files = e.dataTransfer?.files;
            if (files?.length) {
                const fakeEvent = {
                    target: {
                        files
                    }
                };
                onGalleryPick(fakeEvent);
            }
        };
        if (isGallery) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: mediaFieldBoxStyle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "media-field-label-row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "media-field-label",
                                children: control.label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "media-badge",
                                children: galleryItems.length
                            })
                        ]
                    }),
                    galleryItems.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: mediaThumbRowStyle,
                        children: galleryItems.map((url)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: mediaThumbBoxStyle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: url,
                                        alt: "",
                                        style: mediaThumbImgStyle
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        style: mediaThumbRemoveStyle,
                                        onClick: ()=>removeGalleryImage(url),
                                        children: "\xd7"
                                    })
                                ]
                            }, url))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "media-drop-box",
                        onClick: ()=>uploadRefs.current[column.columnName]?.click(),
                        onDragOver: onDragOver,
                        onDragLeave: onDragLeave,
                        onDrop: onDropGallery,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "media-drop-icon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 24 24",
                                    fill: "#4f46e5",
                                    stroke: "none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M20 6h-4l-2-2H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "media-drop-text",
                                children: "Drag your photos here to start uploading."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "media-drop-or",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "OR"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "media-browse-btn",
                                children: uploadingField === column.columnName ? "Uploading..." : "Browse files"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ref: (node)=>{
                            uploadRefs.current[column.columnName] = node;
                        },
                        type: "file",
                        accept: control.accept,
                        multiple: true,
                        style: {
                            display: "none"
                        },
                        onChange: onGalleryPick
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: mediaFieldBoxStyle,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "media-field-label-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "media-field-label",
                            children: control.label
                        }),
                        value && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "media-status-dot"
                        })
                    ]
                }),
                previewSrc && !isVideo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: mediaPreviewFixedStyle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: previewSrc,
                            alt: "",
                            style: mediaPreviewImgStyle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            style: mediaPreviewRemoveStyle,
                            onClick: ()=>handleFormChange(column.columnName, ""),
                            children: "\xd7"
                        })
                    ]
                }) : value && isVideo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        ...mediaPreviewFixedStyle,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#eef2ff"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#6366f1",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                    points: "23 7 16 12 23 17 23 7"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    x: "1",
                                    y: "5",
                                    width: "15",
                                    height: "14",
                                    rx: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            style: mediaPreviewRemoveStyle,
                            onClick: ()=>handleFormChange(column.columnName, ""),
                            children: "\xd7"
                        })
                    ]
                }) : null,
                previewSrc && !isVideo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: mediaFileNameRowStyle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "media-current-name",
                            children: value.split("/").pop()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "media-remove-file",
                            onClick: ()=>handleFormChange(column.columnName, ""),
                            children: "Remove"
                        })
                    ]
                }),
                value && isVideo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: mediaFileNameRowStyle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "media-current-name",
                            children: value.split("/").pop()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "media-remove-file",
                            onClick: ()=>handleFormChange(column.columnName, ""),
                            children: "Remove"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "media-drop-box",
                    onClick: ()=>triggerUpload(column.columnName),
                    onDragOver: onDragOver,
                    onDragLeave: onDragLeave,
                    onDrop: onDropSingle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "media-drop-icon",
                            children: isVideo ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "#4f46e5",
                                stroke: "none",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                        points: "23 7 16 12 23 17 23 7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        x: "1",
                                        y: "5",
                                        width: "15",
                                        height: "14",
                                        rx: "2",
                                        fill: "#4f46e5"
                                    })
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 24 24",
                                fill: "#4f46e5",
                                stroke: "none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M20 6h-4l-2-2H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "media-drop-text",
                            children: isVideo ? "Drag your video here to start uploading." : "Drag your image here to start uploading."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "media-drop-or",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "OR"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "media-browse-btn",
                            children: uploadingField === column.columnName ? "Uploading..." : "Browse files"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    ref: (node)=>{
                        uploadRefs.current[column.columnName] = node;
                    },
                    type: "file",
                    accept: control.accept,
                    style: {
                        display: "none"
                    },
                    onChange: (event)=>onFilePick(column.columnName, event)
                })
            ]
        });
    };
    const renderCardMedia = (row)=>{
        const cover = toSafeMediaSrc(getRowCoverCandidate(row));
        if (!cover) {
            return /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                className: "record-card-figure row-media is-empty",
                "aria-hidden": "true",
                style: cardMediaFrameStyle,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "row-media-placeholder",
                    children: "No image"
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
            className: "record-card-figure row-media",
            role: "img",
            "aria-label": safeText(row?.[primaryColumn]) || "Record media",
            style: cardMediaFrameStyle,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: cover,
                    alt: safeText(row?.[primaryColumn]) || "Record media",
                    loading: "lazy",
                    style: cardMediaImageStyle,
                    onError: (event)=>{
                        event.currentTarget.style.display = "none";
                        const wrapper = event.currentTarget.closest(".row-media");
                        const placeholder = wrapper?.querySelector(".row-media-placeholder");
                        if (placeholder) placeholder.style.display = "inline-flex";
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "row-media-placeholder",
                    children: "Image unavailable"
                })
            ]
        });
    };
    const renderTablePreview = (row, size = "small")=>{
        const cover = toSafeMediaSrc(getRowCoverCandidate(row));
        const isGrid = size === "large";
        const previewContainerStyle = isGrid ? {
            width: "100%",
            height: "140px",
            borderRadius: "0",
            overflow: "hidden",
            backgroundColor: "#f2f5fb",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7d8399",
            fontSize: "14px",
            fontWeight: "700"
        } : {
            width: "54px",
            height: "54px",
            minWidth: "54px",
            maxWidth: "54px",
            flex: "0 0 54px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#f2f5fb",
            border: "1px solid #e0e6f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7d8399",
            fontSize: "11px",
            fontWeight: "700"
        };
        const imageStyle = isGrid ? {
            width: "100%",
            height: "140px",
            objectFit: "cover",
            objectPosition: "center",
            display: "block"
        } : {
            width: "54px",
            height: "54px",
            maxWidth: "54px",
            maxHeight: "54px",
            objectFit: "contain",
            objectPosition: "center",
            display: "block",
            flexShrink: 0
        };
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: previewContainerStyle,
            className: `table-preview ${cover ? "" : "empty"}`,
            children: cover ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                style: imageStyle,
                src: cover,
                alt: safeText(row?.[primaryColumn]) || "Record preview",
                loading: "lazy"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "No image"
            })
        });
    };
    const renderTableCellValue = (row, column)=>{
        if (!column) return "-";
        const value = extractCardValue(table, column, row);
        if (value === "Yes" || value === "No") {
            return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `status-pill ${value === "Yes" ? "is-yes" : "is-no"}`,
                children: value
            });
        }
        return value || "-";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SecureAdminLayout["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    className: "jsx-71f208de48479913",
                    children: tableMeta ? `${tableMeta.label} | MIS Admin` : "Table Manager | MIS Admin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "jsx-71f208de48479913" + " " + "manager-shell",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                        className: "jsx-71f208de48479913" + " " + "manager-head",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-71f208de48479913",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "jsx-71f208de48479913" + " " + "kicker",
                                        children: "Managed Database Table"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "jsx-71f208de48479913",
                                        children: tableMeta ? tableMeta.label : "Table"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "jsx-71f208de48479913" + " " + "subline",
                                        children: [
                                            "Modern, form-first control for ",
                                            table || "selected table",
                                            "."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-71f208de48479913" + " " + "head-actions",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: loadTableData,
                                        disabled: loading,
                                        className: "jsx-71f208de48479913" + " " + "refresh-btn",
                                        children: loading ? "Loading..." : "Refresh"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: openCreateForm,
                                        className: "jsx-71f208de48479913" + " " + "create-btn",
                                        children: "Add New Record"
                                    })
                                ]
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-71f208de48479913" + " " + "alert error",
                        children: error
                    }) : null,
                    success ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-71f208de48479913" + " " + "alert success",
                        children: success
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "jsx-71f208de48479913" + " " + "card inventory-card",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-71f208de48479913" + " " + "inventory-toolbar",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-71f208de48479913",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "jsx-71f208de48479913",
                                                children: "Records"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "jsx-71f208de48479913",
                                                children: [
                                                    filteredRows.length,
                                                    " of ",
                                                    rows.length,
                                                    " records"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-71f208de48479913" + " " + "inventory-filters",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                className: "jsx-71f208de48479913" + " " + "search-field",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "jsx-71f208de48479913",
                                                        children: "Search"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "search",
                                                        value: searchText,
                                                        onChange: (event)=>setSearchText(event.target.value),
                                                        placeholder: "Search records...",
                                                        className: "jsx-71f208de48479913"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-71f208de48479913" + " " + "view-toggle-group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setViewMode("list"),
                                                        "aria-label": "List view",
                                                        className: "jsx-71f208de48479913" + " " + `view-toggle-btn ${viewMode === "list" ? "is-active" : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            className: "jsx-71f208de48479913",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
                                                                className: "jsx-71f208de48479913"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        onClick: ()=>setViewMode("grid"),
                                                        "aria-label": "Grid view",
                                                        className: "jsx-71f208de48479913" + " " + `view-toggle-btn ${viewMode === "grid" ? "is-active" : ""}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.5",
                                                            className: "jsx-71f208de48479913",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "7",
                                                                    height: "7",
                                                                    rx: "1",
                                                                    className: "jsx-71f208de48479913"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "14",
                                                                    y: "3",
                                                                    width: "7",
                                                                    height: "7",
                                                                    rx: "1",
                                                                    className: "jsx-71f208de48479913"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "3",
                                                                    y: "14",
                                                                    width: "7",
                                                                    height: "7",
                                                                    rx: "1",
                                                                    className: "jsx-71f208de48479913"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                    x: "14",
                                                                    y: "14",
                                                                    width: "7",
                                                                    height: "7",
                                                                    rx: "1",
                                                                    className: "jsx-71f208de48479913"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            table === "products" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-71f208de48479913" + " " + "filter-bar",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "jsx-71f208de48479913" + " " + "filter-select",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-71f208de48479913",
                                                children: "Sort By"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                value: sortBy,
                                                onChange: (e)=>setSortBy(e.target.value),
                                                className: "jsx-71f208de48479913",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "default",
                                                        className: "jsx-71f208de48479913",
                                                        children: "Default"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "newest",
                                                        className: "jsx-71f208de48479913",
                                                        children: "Newest First"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "oldest",
                                                        className: "jsx-71f208de48479913",
                                                        children: "Oldest First"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "price-high",
                                                        className: "jsx-71f208de48479913",
                                                        children: "Price: High to Low"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "price-low",
                                                        className: "jsx-71f208de48479913",
                                                        children: "Price: Low to High"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    availableCategories.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "jsx-71f208de48479913" + " " + "filter-select",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-71f208de48479913",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                value: filterCategory,
                                                onChange: (e)=>setFilterCategory(e.target.value),
                                                className: "jsx-71f208de48479913",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "",
                                                        className: "jsx-71f208de48479913",
                                                        children: "All Categories"
                                                    }),
                                                    availableCategories.map((cat)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: cat.id,
                                                            className: "jsx-71f208de48479913",
                                                            children: cat.name
                                                        }, cat.id))
                                                ]
                                            })
                                        ]
                                    }),
                                    availableBrands.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                        className: "jsx-71f208de48479913" + " " + "filter-select",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "jsx-71f208de48479913",
                                                children: "Brand"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                value: filterBrand,
                                                onChange: (e)=>setFilterBrand(e.target.value),
                                                className: "jsx-71f208de48479913",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "",
                                                        className: "jsx-71f208de48479913",
                                                        children: "All Brands"
                                                    }),
                                                    availableBrands.map((brand)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                            value: brand,
                                                            className: "jsx-71f208de48479913",
                                                            children: brand
                                                        }, brand))
                                                ]
                                            })
                                        ]
                                    }),
                                    (sortBy !== "default" || filterCategory || filterBrand) && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setSortBy("default");
                                            setFilterCategory("");
                                            setFilterBrand("");
                                        },
                                        style: {
                                            alignSelf: "flex-end",
                                            marginBottom: "2px"
                                        },
                                        className: "jsx-71f208de48479913" + " " + "ghost-btn",
                                        children: "Clear Filters"
                                    })
                                ]
                            }),
                            viewMode === "grid" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-71f208de48479913" + " " + "records-grid",
                                children: filteredRows.length ? filteredRows.map((row, index)=>{
                                    const rowId = row[primaryColumn];
                                    const title = getDisplayTitle(row, columns, primaryColumn);
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-71f208de48479913" + " " + "record-grid-card",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-71f208de48479913" + " " + "rgc-preview",
                                                children: renderTablePreview(row, "large")
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-71f208de48479913" + " " + "rgc-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        className: "jsx-71f208de48479913" + " " + "rgc-title",
                                                        children: title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        className: "jsx-71f208de48479913" + " " + "rgc-id",
                                                        children: [
                                                            "ID: ",
                                                            safeText(rowId)
                                                        ]
                                                    }),
                                                    tableColumns.slice(0, 2).map((col)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "jsx-71f208de48479913" + " " + "rgc-meta",
                                                            children: [
                                                                toTitleCase(col.columnName),
                                                                ": ",
                                                                renderTableCellValue(row, col)
                                                            ]
                                                        }, col.columnName))
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-71f208de48479913" + " " + "rgc-actions",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        onClick: ()=>openEditForm(row),
                                                        className: "jsx-71f208de48479913" + " " + "action-btn",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "jsx-71f208de48479913",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M12 20h9",
                                                                        className: "jsx-71f208de48479913"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",
                                                                        className: "jsx-71f208de48479913"
                                                                    })
                                                                ]
                                                            }),
                                                            "Edit"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        onClick: ()=>handleDeleteRow(rowId),
                                                        className: "jsx-71f208de48479913" + " " + "action-btn danger",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                className: "jsx-71f208de48479913",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M3 6h18",
                                                                        className: "jsx-71f208de48479913"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                                                        className: "jsx-71f208de48479913"
                                                                    })
                                                                ]
                                                            }),
                                                            "Delete"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, String(rowId ?? index));
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    style: {
                                        gridColumn: "1 / -1"
                                    },
                                    className: "jsx-71f208de48479913" + " " + "empty-state",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-71f208de48479913",
                                            children: "No records match your search."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setSearchText(""),
                                            className: "jsx-71f208de48479913" + " " + "ghost-btn",
                                            children: "Clear Search"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-71f208de48479913" + " " + "table-shell",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "jsx-71f208de48479913" + " " + "inventory-table",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("colgroup", {
                                            className: "jsx-71f208de48479913",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("col", {
                                                    style: {
                                                        width: "80px"
                                                    },
                                                    className: "jsx-71f208de48479913"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("col", {
                                                    style: {
                                                        width: "84px"
                                                    },
                                                    className: "jsx-71f208de48479913"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("col", {
                                                    style: {
                                                        width: "auto"
                                                    },
                                                    className: "jsx-71f208de48479913"
                                                }),
                                                tableColumns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx("col", {
                                                        style: {
                                                            width: "auto"
                                                        },
                                                        className: "jsx-71f208de48479913"
                                                    }, column.columnName)),
                                                /*#__PURE__*/ jsx_runtime_.jsx("col", {
                                                    style: {
                                                        width: "140px"
                                                    },
                                                    className: "jsx-71f208de48479913"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "jsx-71f208de48479913",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "jsx-71f208de48479913",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "jsx-71f208de48479913",
                                                        children: "ID"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "jsx-71f208de48479913",
                                                        children: "Image"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "jsx-71f208de48479913",
                                                        children: tableMeta?.label ? "Name" : "Record"
                                                    }),
                                                    tableColumns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                            className: "jsx-71f208de48479913",
                                                            children: toTitleCase(column.columnName)
                                                        }, column.columnName)),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                        className: "jsx-71f208de48479913",
                                                        children: "Actions"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            className: "jsx-71f208de48479913",
                                            children: filteredRows.length ? filteredRows.map((row, index)=>{
                                                const rowId = row[primaryColumn];
                                                const title = getDisplayTitle(row, columns, primaryColumn);
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "jsx-71f208de48479913",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "jsx-71f208de48479913" + " " + "id-cell",
                                                            children: safeText(rowId)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            style: {
                                                                width: "84px",
                                                                minWidth: "84px",
                                                                maxWidth: "84px",
                                                                padding: "12px 12px",
                                                                boxSizing: "border-box"
                                                            },
                                                            className: "jsx-71f208de48479913" + " " + "image-cell",
                                                            children: renderTablePreview(row)
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "jsx-71f208de48479913" + " " + "name-cell",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    className: "jsx-71f208de48479913",
                                                                    children: title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "jsx-71f208de48479913",
                                                                    children: tableMeta?.label || "Record"
                                                                })
                                                            ]
                                                        }),
                                                        tableColumns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "jsx-71f208de48479913",
                                                                children: renderTableCellValue(row, column)
                                                            }, column.columnName)),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "jsx-71f208de48479913",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "jsx-71f208de48479913" + " " + "table-actions",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                        type: "button",
                                                                        onClick: ()=>openEditForm(row),
                                                                        className: "jsx-71f208de48479913" + " " + "action-btn",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                "aria-hidden": "true",
                                                                                className: "jsx-71f208de48479913",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M12 20h9",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "Edit"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleDeleteRow(rowId),
                                                                        className: "jsx-71f208de48479913" + " " + "action-btn danger",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                "aria-hidden": "true",
                                                                                className: "jsx-71f208de48479913",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M3 6h18",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                                                        x1: "10",
                                                                                        y1: "11",
                                                                                        x2: "10",
                                                                                        y2: "17",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                                                                        x1: "14",
                                                                                        y1: "11",
                                                                                        x2: "14",
                                                                                        y2: "17",
                                                                                        className: "jsx-71f208de48479913"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "Delete"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, String(rowId ?? index));
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                className: "jsx-71f208de48479913",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    colSpan: 4 + tableColumns.length,
                                                    className: "jsx-71f208de48479913",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "empty-state",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "jsx-71f208de48479913",
                                                                children: "No records match your search."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>setSearchText(""),
                                                                className: "jsx-71f208de48479913" + " " + "ghost-btn",
                                                                children: "Clear Search"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    showForm ? /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        ref: formSectionRef,
                        className: "jsx-71f208de48479913" + " " + "form-section",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-71f208de48479913" + " " + "form-modal-overlay",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-71f208de48479913" + " " + "modern-form-shell",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-71f208de48479913" + " " + "modern-form-topbar",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "jsx-71f208de48479913",
                                                children: editRowId !== null ? `Edit ${tableMeta?.label || "Record"}` : `Add ${tableMeta?.label || "Record"}`
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-71f208de48479913" + " " + "modern-form-topbar-actions",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        onClick: closeForm,
                                                        className: "jsx-71f208de48479913" + " " + "cancel-btn",
                                                        children: "Cancel"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        disabled: submitting,
                                                        onClick: (e)=>{
                                                            const form = e.target.closest(".modern-form-shell").querySelector("form");
                                                            if (form) form.requestSubmit();
                                                        },
                                                        className: "jsx-71f208de48479913" + " " + "submit-btn",
                                                        children: submitting ? "Saving..." : editRowId !== null ? "Save Changes" : "Create Record"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        onSubmit: submitRecord,
                                        className: "jsx-71f208de48479913" + " " + "modern-form-layout",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-71f208de48479913" + " " + "modern-form-main",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "modern-form-card",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-title",
                                                                children: "General"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-fields",
                                                                children: orderedDetailColumns.filter((col)=>{
                                                                    const n = col.columnName.toLowerCase();
                                                                    return ![
                                                                        "is_active",
                                                                        "active",
                                                                        "status",
                                                                        "category_id",
                                                                        "type"
                                                                    ].includes(n) && !n.includes("desc") && !n.includes("feature") && n !== "full_description";
                                                                }).map((column)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-71f208de48479913" + " " + "modern-field",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                className: "jsx-71f208de48479913" + " " + "modern-field-label",
                                                                                children: resolveFieldControl(table, column).label
                                                                            }),
                                                                            renderInput(column),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "jsx-71f208de48479913" + " " + "modern-field-hint",
                                                                                children: [
                                                                                    "Enter the ",
                                                                                    resolveFieldControl(table, column).label.toLowerCase(),
                                                                                    "."
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, column.columnName))
                                                            })
                                                        ]
                                                    }),
                                                    orderedDetailColumns.some((col)=>[
                                                            "is_active",
                                                            "active",
                                                            "status",
                                                            "category_id",
                                                            "type"
                                                        ].includes(col.columnName.toLowerCase())) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "modern-form-card",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-title",
                                                                children: "Settings"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-fields",
                                                                children: orderedDetailColumns.filter((col)=>[
                                                                        "category_id",
                                                                        "type",
                                                                        "is_active",
                                                                        "active",
                                                                        "status"
                                                                    ].includes(col.columnName.toLowerCase())).map((column)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-71f208de48479913" + " " + "modern-field",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                className: "jsx-71f208de48479913" + " " + "modern-field-label",
                                                                                children: resolveFieldControl(table, column).label
                                                                            }),
                                                                            renderInput(column)
                                                                        ]
                                                                    }, column.columnName))
                                                            })
                                                        ]
                                                    }),
                                                    orderedDetailColumns.some((col)=>col.columnName.toLowerCase().includes("desc") || col.columnName.toLowerCase() === "full_description" || col.columnName.toLowerCase().includes("feature")) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "modern-form-card",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-title",
                                                                children: "Description"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-fields",
                                                                children: orderedDetailColumns.filter((col)=>{
                                                                    const n = col.columnName.toLowerCase();
                                                                    return n.includes("desc") || n === "full_description" || n.includes("feature");
                                                                }).map((column)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-71f208de48479913" + " " + "modern-field",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                className: "jsx-71f208de48479913" + " " + "modern-field-label",
                                                                                children: resolveFieldControl(table, column).label
                                                                            }),
                                                                            renderInput(column)
                                                                        ]
                                                                    }, column.columnName))
                                                            })
                                                        ]
                                                    }),
                                                    table === "products" && categorySpecs.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "modern-form-card",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-title",
                                                                children: "Specifications"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-subtitle",
                                                                children: "Fill in the specs for this product category."
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-fields specs-grid",
                                                                children: categorySpecs.map((spec)=>{
                                                                    const specsObj = (()=>{
                                                                        try {
                                                                            return JSON.parse(activeFormValues.specifications || "{}");
                                                                        } catch (e) {
                                                                            return {};
                                                                        }
                                                                    })();
                                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "jsx-71f208de48479913" + " " + "modern-field",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                                className: "jsx-71f208de48479913" + " " + "modern-field-label",
                                                                                children: spec.spec_label
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                                type: "text",
                                                                                style: {
                                                                                    width: "100%",
                                                                                    height: "48px",
                                                                                    padding: "0 14px",
                                                                                    border: "2px solid #c7d2fe",
                                                                                    borderRadius: "10px",
                                                                                    background: "#fafbff",
                                                                                    color: "#0f172a",
                                                                                    fontSize: "14px",
                                                                                    fontFamily: "inherit"
                                                                                },
                                                                                value: specsObj[spec.spec_name] || "",
                                                                                onChange: (e)=>{
                                                                                    const updated = {
                                                                                        ...specsObj,
                                                                                        [spec.spec_name]: e.target.value
                                                                                    };
                                                                                    handleFormChange("specifications", JSON.stringify(updated));
                                                                                },
                                                                                placeholder: `Enter ${spec.spec_label.toLowerCase()}`,
                                                                                className: "jsx-71f208de48479913"
                                                                            })
                                                                        ]
                                                                    }, spec.id);
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    orderedMediaColumns.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "jsx-71f208de48479913" + " " + "modern-form-card modern-media-card",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-card-title media-card-title",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "#4f46e5",
                                                                        strokeWidth: "2",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        className: "jsx-71f208de48479913",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                x: "3",
                                                                                y: "3",
                                                                                width: "18",
                                                                                height: "18",
                                                                                rx: "2",
                                                                                className: "jsx-71f208de48479913"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                                cx: "8.5",
                                                                                cy: "8.5",
                                                                                r: "1.5",
                                                                                className: "jsx-71f208de48479913"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
                                                                                points: "21 15 16 10 5 21",
                                                                                className: "jsx-71f208de48479913"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    "Media"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-71f208de48479913" + " " + "modern-media-fields",
                                                                children: orderedMediaColumns.map((column)=>{
                                                                    const columnNameLower = String(column.columnName).toLowerCase();
                                                                    const isGallery = columnNameLower === "photos";
                                                                    const isVideo = columnNameLower.includes("video");
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "jsx-71f208de48479913" + " " + `modern-media-item ${isGallery || isVideo ? "full-width" : ""}`,
                                                                        children: renderMediaField(column)
                                                                    }, column.columnName);
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-71f208de48479913" + " " + "modern-form-sidebar"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }) : null
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "71f208de48479913",
                children: ".manager-shell.jsx-71f208de48479913{display:grid;gap:18px;max-width:100%;overflow-x:hidden}.manager-head.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:14px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.kicker.jsx-71f208de48479913,.form-kicker.jsx-71f208de48479913{margin:0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#7f7f95;font-weight:800}h2.jsx-71f208de48479913{margin:6px 0 4px;font-size:30px;color:#2e2d3f}.subline.jsx-71f208de48479913{margin:0;color:#73728f}.head-actions.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.refresh-btn.jsx-71f208de48479913,.create-btn.jsx-71f208de48479913,.primary-btn.jsx-71f208de48479913,.ghost-btn.jsx-71f208de48479913,.cancel-btn.jsx-71f208de48479913,.submit-btn.jsx-71f208de48479913,.close-form-btn.jsx-71f208de48479913,.upload-trigger.jsx-71f208de48479913,.mini-btn.jsx-71f208de48479913{border:0;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:10px 14px;cursor:pointer;font-weight:700;font:inherit}.refresh-btn.jsx-71f208de48479913{background:#8a5dff;color:#fff}.create-btn.jsx-71f208de48479913,.primary-btn.jsx-71f208de48479913,.submit-btn.jsx-71f208de48479913{background:#2f3d7a;color:#fff}.ghost-btn.jsx-71f208de48479913,.cancel-btn.jsx-71f208de48479913,.close-form-btn.jsx-71f208de48479913{background:#fff;color:#393657;border:1px solid#d8d3ef}.action-btn.jsx-71f208de48479913{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:5px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:5px 10px;font-size:12px;font-weight:600;line-height:1.2;white-space:nowrap;cursor:pointer;font-family:inherit;border:1px solid transparent;-webkit-transition:background-color.15s ease,border-color.15s ease,color.15s ease;-moz-transition:background-color.15s ease,border-color.15s ease,color.15s ease;-o-transition:background-color.15s ease,border-color.15s ease,color.15s ease;transition:background-color.15s ease,border-color.15s ease,color.15s ease}.action-btn.jsx-71f208de48479913 svg.jsx-71f208de48479913{width:14px;height:14px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.action-btn.jsx-71f208de48479913:not(.danger){background:#eef2ff;color:#2f3d7a;border-color:#c7d2fe}.action-btn.danger.jsx-71f208de48479913{background:#fef2f2;color:#c0344f;border-color:#f7c4cf}.refresh-btn.jsx-71f208de48479913:disabled,.primary-btn.jsx-71f208de48479913:disabled,.submit-btn.jsx-71f208de48479913:disabled,.upload-trigger.jsx-71f208de48479913:disabled{opacity:.7;cursor:wait}.alert.jsx-71f208de48479913{-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:12px 14px;font-weight:600}.alert.error.jsx-71f208de48479913{background:#ffe3e7;color:#ab2d44}.alert.success.jsx-71f208de48479913{background:#dbffe8;color:#1f8a52}.card.jsx-71f208de48479913{-webkit-border-radius:18px;-moz-border-radius:18px;border-radius:18px;background:#fff;border:1px solid#e6e3f5;-webkit-box-shadow:0 10px 30px rgba(34,27,72,.06);-moz-box-shadow:0 10px 30px rgba(34,27,72,.06);box-shadow:0 10px 30px rgba(34,27,72,.06)}.inventory-card.jsx-71f208de48479913{padding:18px}.inventory-toolbar.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:12px;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-bottom:14px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.inventory-toolbar.jsx-71f208de48479913 h3.jsx-71f208de48479913{margin:0;color:#2e2d3f}.inventory-toolbar.jsx-71f208de48479913 p.jsx-71f208de48479913{margin:0;color:#747391}.inventory-filters.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.search-field.jsx-71f208de48479913{display:grid;gap:6px;min-width:180px;-webkit-box-flex:1;-webkit-flex:1 1 220px;-moz-box-flex:1;-ms-flex:1 1 220px;flex:1 1 220px}.search-field.jsx-71f208de48479913 span.jsx-71f208de48479913{font-size:12px;font-weight:700;color:#666283;text-transform:uppercase;letter-spacing:.05em}.search-field.jsx-71f208de48479913 input.jsx-71f208de48479913,.search-field.jsx-71f208de48479913 select.jsx-71f208de48479913{width:100%;border:1px solid#d6d2eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:11px 12px;background:#fbfaff;color:#29293d;font:inherit}.table-shell.jsx-71f208de48479913{width:100%;overflow-x:auto}.view-toggle-group.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;border:1px solid#d6d2eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.view-toggle-btn.jsx-71f208de48479913{border:none;background:#fff;padding:9px 12px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#6b7280;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.view-toggle-btn.is-active.jsx-71f208de48479913{background:#7c3aed;color:#fff}.view-toggle-btn.jsx-71f208de48479913:not(.is-active):hover{background:#f5f3ff}.filter-bar.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-bottom:16px;padding:12px 14px;background:#faf9ff;border:1px solid#ede9fe;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.filter-select.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px;min-width:140px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;max-width:200px}.filter-select.jsx-71f208de48479913 span.jsx-71f208de48479913{font-size:11px;font-weight:700;color:#6b21a8;text-transform:uppercase;letter-spacing:.05em}.filter-select.jsx-71f208de48479913 select.jsx-71f208de48479913{width:100%;border:1px solid#d6d2eb;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 10px;background:#fff;color:#29293d;font:inherit;font-size:13px;cursor:pointer}.filter-select.jsx-71f208de48479913 select.jsx-71f208de48479913:focus{outline:none;border-color:#7c3aed;-webkit-box-shadow:0 0 0 2px rgba(124,58,237,.12);-moz-box-shadow:0 0 0 2px rgba(124,58,237,.12);box-shadow:0 0 0 2px rgba(124,58,237,.12)}.records-grid.jsx-71f208de48479913{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}.record-grid-card.jsx-71f208de48479913{border:1px solid#e6e3f5;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff;overflow:hidden;-webkit-transition:box-shadow.2s,-webkit-transform.15s;-moz-transition:box-shadow.2s,-moz-transform.15s;-o-transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,-webkit-transform.15s;transition:box-shadow.2s,-moz-transform.15s;transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,transform.15s;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.record-grid-card.jsx-71f208de48479913:hover{-webkit-box-shadow:0 8px 24px rgba(0,0,0,.08);-moz-box-shadow:0 8px 24px rgba(0,0,0,.08);box-shadow:0 8px 24px rgba(0,0,0,.08);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.rgc-preview.jsx-71f208de48479913{height:140px;background:#f4f1ff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.rgc-body.jsx-71f208de48479913{padding:14px 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.rgc-title.jsx-71f208de48479913{font-size:14px;font-weight:700;color:#1e1b4b;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.rgc-id.jsx-71f208de48479913{font-size:11px;color:#7c3aed;font-weight:600}.rgc-meta.jsx-71f208de48479913{font-size:12px;color:#6b7280;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.rgc-actions.jsx-71f208de48479913{padding:10px 16px;border-top:1px solid#f1eef8;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.inventory-table.jsx-71f208de48479913{width:100%;min-width:0;table-layout:auto;border-collapse:collapse;overflow:hidden;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff;border:1px solid#e6e3f5}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913{text-align:left;padding:14px 16px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5e6480;background:#eef4f8;border-bottom:1px solid#dde4ef;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.jsx-71f208de48479913{padding:14px 16px;border-bottom:1px solid#edf0f7;color:#2f3146;vertical-align:middle;overflow-wrap:anywhere;word-break:break-word}.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 tr.jsx-71f208de48479913:hover{background:#fafbff}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:nth-child(1){width:80px}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:nth-child(2),.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.image-cell.jsx-71f208de48479913{width:84px!important;min-width:84px!important;max-width:84px!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important;padding-left:12px;padding-right:12px}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:last-child{width:180px}.id-cell.jsx-71f208de48479913{white-space:nowrap;font-weight:700;color:#2d3a60;width:84px}.table-preview.jsx-71f208de48479913{width:54px;height:54px;min-width:54px;max-width:54px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden;background:#f2f5fb;border:1px solid#e0e6f1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#7d8399;font-size:11px;font-weight:700;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.table-preview.jsx-71f208de48479913 img.jsx-71f208de48479913{width:54px;height:54px;max-width:54px;max-height:54px;-o-object-fit:contain;object-fit:contain;display:block}.rgc-preview.jsx-71f208de48479913 .table-preview.jsx-71f208de48479913{width:100%;height:140px;max-width:100%;min-width:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;border:none}.rgc-preview.jsx-71f208de48479913 .table-preview.jsx-71f208de48479913 img.jsx-71f208de48479913{width:100%;height:140px;max-width:100%;max-height:140px;-o-object-fit:cover;object-fit:cover}.rgc-preview.jsx-71f208de48479913 .table-preview.empty.jsx-71f208de48479913{height:140px;font-size:14px}.table-preview.empty.jsx-71f208de48479913{padding:8px;text-align:center}.table-preview.empty.jsx-71f208de48479913 span.jsx-71f208de48479913{display:block;line-height:1.1}.name-cell.jsx-71f208de48479913 strong.jsx-71f208de48479913{display:block;font-size:15px;line-height:1.35;color:#28304d}.name-cell.jsx-71f208de48479913,.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.jsx-71f208de48479913:not(.id-cell):not(.image-cell):not(:last-child){min-width:0}.name-cell.jsx-71f208de48479913 span.jsx-71f208de48479913,.table-muted.jsx-71f208de48479913{display:block;color:#7d8399;font-size:12px;margin-top:2px}.status-pill.jsx-71f208de48479913{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 10px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;font-size:12px;font-weight:700}.status-pill.is-yes.jsx-71f208de48479913{background:#dff5e8;color:#157347}.status-pill.is-no.jsx-71f208de48479913{background:#ffe1e1;color:#b03030}.table-actions.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.empty-state.jsx-71f208de48479913{border:1px dashed#cfcae8;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;padding:18px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:12px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:#fff}.form-section.jsx-71f208de48479913{padding:0;scroll-margin-top:110px;position:fixed;inset:0;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow-y:auto;padding:40px 20px}.form-modal-overlay.jsx-71f208de48479913{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:999;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow-y:auto;padding:40px 16px}.modern-form-shell.jsx-71f208de48479913{width:100%;max-width:920px;background:#f8fafc;border:1px solid#e2e8f0;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;-webkit-box-shadow:0 24px 48px rgba(0,0,0,.15);-moz-box-shadow:0 24px 48px rgba(0,0,0,.15);box-shadow:0 24px 48px rgba(0,0,0,.15)}.modern-form-topbar.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:16px 24px;background:#fff;border-bottom:1px solid#e2e8f0}.modern-form-topbar.jsx-71f208de48479913 h3.jsx-71f208de48479913{margin:0;font-size:18px;color:#1e293b;font-weight:700}.modern-form-topbar-actions.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.modern-form-layout.jsx-71f208de48479913{display:grid;grid-template-columns:1fr;gap:20px;padding:20px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start;max-height:-webkit-calc(100vh - 140px);max-height:-moz-calc(100vh - 140px);max-height:calc(100vh - 140px);overflow-y:auto}.modern-form-main.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.modern-form-sidebar.jsx-71f208de48479913{display:none}.modern-form-card.jsx-71f208de48479913,.modern-sidebar-card.jsx-71f208de48479913{background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:20px}.modern-card-title.jsx-71f208de48479913{margin:0 0 16px;font-size:16px;font-weight:800;color:#0f172a;padding-bottom:12px;border-bottom:2px solid#e2e8f0}.modern-fields.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.modern-fields.specs-grid.jsx-71f208de48479913{display:grid;grid-template-columns:1fr 1fr;gap:14px}.modern-card-subtitle.jsx-71f208de48479913{margin:-8px 0 14px;font-size:12px;color:#94a3b8}.modern-field.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913,.modern-field.jsx-71f208de48479913 select.jsx-71f208de48479913{width:100%;border:1.5px solid#cbd5e1;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f8fafc;color:#0f172a;font:inherit;font-size:14px;-webkit-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;-moz-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;-o-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;transition:border-color.15s ease,box-shadow.15s ease,background.15s ease}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913,.modern-field.jsx-71f208de48479913 select.jsx-71f208de48479913{height:46px;padding:0 14px}.modern-field.jsx-71f208de48479913 select.jsx-71f208de48479913{cursor:pointer;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right 14px center;padding-right:36px}.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913{min-height:110px;padding:12px 14px;resize:vertical;line-height:1.6}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913::-webkit-input-placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-webkit-input-placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913:-moz-placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913:-moz-placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913::-moz-placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-moz-placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913:-ms-input-placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913:-ms-input-placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913::-ms-input-placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-ms-input-placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913::placeholder,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913::placeholder{color:#94a3b8}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913:focus,.modern-field.jsx-71f208de48479913 select.jsx-71f208de48479913:focus,.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913:focus{outline:none;border-color:#6366f1;background:#fff;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.12);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.12);box-shadow:0 0 0 3px rgba(99,102,241,.12)}.modern-field.jsx-71f208de48479913 input.jsx-71f208de48479913:hover:not(:focus),.modern-field.jsx-71f208de48479913 select.jsx-71f208de48479913:hover:not(:focus),.modern-field.jsx-71f208de48479913 textarea.jsx-71f208de48479913:hover:not(:focus){border-color:#94a3b8}.modern-field-label.jsx-71f208de48479913{font-size:13px;font-weight:700;color:#1e293b;letter-spacing:.01em}.modern-field-hint.jsx-71f208de48479913{font-size:11px;color:#64748b;font-style:italic}.form-input-styled.jsx-71f208de48479913{width:100%;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fafbff;color:#0f172a;font:inherit;font-size:14px;-webkit-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;-moz-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;-o-transition:border-color.15s ease,box-shadow.15s ease,background.15s ease;transition:border-color.15s ease,box-shadow.15s ease,background.15s ease}input.form-input-styled.jsx-71f208de48479913,select.form-input-styled.jsx-71f208de48479913{height:48px;padding:0 14px}select.form-input-styled.jsx-71f208de48479913{cursor:pointer}textarea.form-input-styled.jsx-71f208de48479913{min-height:110px;padding:12px 14px;resize:vertical;line-height:1.6}.form-input-styled.jsx-71f208de48479913::-webkit-input-placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913:-moz-placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913::-moz-placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913:-ms-input-placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913::-ms-input-placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913::placeholder{color:#94a3b8}.form-input-styled.jsx-71f208de48479913:focus{outline:none;border-color:#6366f1;background:#fff;-webkit-box-shadow:0 0 0 4px rgba(99,102,241,.12);-moz-box-shadow:0 0 0 4px rgba(99,102,241,.12);box-shadow:0 0 0 4px rgba(99,102,241,.12)}.form-input-styled.jsx-71f208de48479913:hover:not(:focus){border-color:#a5b4fc}.searchable-select.jsx-71f208de48479913{position:relative;width:100%}.ss-display.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:44px;padding:0 14px;border:1px solid#d0d5dd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;color:#1d2939}.ss-display.jsx-71f208de48479913:hover{border-color:#9ca3af}.ss-placeholder.jsx-71f208de48479913{color:#9ca3af}.ss-arrow.jsx-71f208de48479913{color:#6b7280;font-size:12px}.ss-dropdown.jsx-71f208de48479913{position:absolute;top:100%;left:0;right:0;margin-top:4px;background:#fff;border:1px solid#e5e7eb;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 8px 24px rgba(0,0,0,.12);-moz-box-shadow:0 8px 24px rgba(0,0,0,.12);box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:50;overflow:hidden;max-height:280px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ss-search.jsx-71f208de48479913{width:100%;border:none;border-bottom:1px solid#f3f4f6;padding:10px 14px;font-size:13px;outline:none;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.ss-options.jsx-71f208de48479913{max-height:220px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.ss-option.jsx-71f208de48479913{padding:8px 14px;font-size:13px;cursor:pointer;color:#374151}.ss-option.jsx-71f208de48479913:hover{background:#f3f4f6}.ss-option.is-selected.jsx-71f208de48479913{background:#eff6ff;color:#1d4ed8;font-weight:600}.ss-no-results.jsx-71f208de48479913{padding:12px 14px;font-size:13px;color:#9ca3af;text-align:center}.modern-media-card.jsx-71f208de48479913{border:2px solid#c7d2fe;background:-webkit-linear-gradient(315deg,#faf5ff 0%,#eef2ff 100%);background:-moz-linear-gradient(315deg,#faf5ff 0%,#eef2ff 100%);background:-o-linear-gradient(315deg,#faf5ff 0%,#eef2ff 100%);background:linear-gradient(135deg,#faf5ff 0%,#eef2ff 100%)}.media-card-title.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;border-bottom-color:#c7d2fe}.modern-media-fields.jsx-71f208de48479913{display:grid;grid-template-columns:1fr;gap:14px}.modern-media-item.full-width.jsx-71f208de48479913{grid-column:auto}.media-field-box.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px;padding:16px;border:2px solid#c7d2fe;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff}.media-preview-fixed.jsx-71f208de48479913{position:relative;width:100%;height:140px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;border:2px solid#e0e7ff;background:#f1f5f9;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.media-preview-fixed.jsx-71f208de48479913 img.jsx-71f208de48479913{width:100%;height:140px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;display:block;background:#f8fafc}.media-preview-video.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#eef2ff}.media-preview-remove.jsx-71f208de48479913{position:absolute;top:6px;right:6px;width:24px;height:24px;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;font-size:16px;line-height:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:background.15s;-moz-transition:background.15s;-o-transition:background.15s;transition:background.15s}.media-preview-remove.jsx-71f208de48479913:hover{background:rgba(220,38,38,.85)}.media-file-name-row.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:8px}.modern-thumbnail-preview.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:160px;border:1px dashed#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f9fafb;overflow:hidden}.modern-thumb-img.jsx-71f208de48479913{width:100%;max-height:200px;-o-object-fit:contain;object-fit:contain;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.modern-thumb-placeholder.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:24px;color:#9ca3af;font-size:12px;text-align:center}@media(max-width:900px){.modern-form-layout.jsx-71f208de48479913{grid-template-columns:1fr}.modern-form-sidebar.jsx-71f208de48479913{position:static}.modern-media-fields.jsx-71f208de48479913{grid-template-columns:1fr}.modern-media-item.full-width.jsx-71f208de48479913{grid-column:auto}}.block-head.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid#f1f3f9}.block-number.jsx-71f208de48479913{width:32px;height:32px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#eef1ff;color:#4252a6;font-size:12px;font-weight:800;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.block-head.jsx-71f208de48479913 h4.jsx-71f208de48479913{margin:0;font-size:15px;color:#1f2638;letter-spacing:-.01em;font-weight:700}.block-head.jsx-71f208de48479913 p.jsx-71f208de48479913{margin:3px 0 0;color:#74809a;font-size:12.5px;line-height:1.45}.field-grid.jsx-71f208de48479913{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:20px 18px}.field-group.jsx-71f208de48479913{grid-column:span 4;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px;min-width:0}.field-group.span-3.jsx-71f208de48479913{grid-column:span 3}.field-group.span-4.jsx-71f208de48479913{grid-column:span 4}.field-group.span-6.jsx-71f208de48479913{grid-column:span 6}.field-group.span-12.jsx-71f208de48479913{grid-column:span 12}.field-group.status-field.jsx-71f208de48479913{max-width:260px}.field-label.jsx-71f208de48479913{display:block;color:#344054;font-size:13px;line-height:1.3;font-weight:600;margin-bottom:2px}.field-group.jsx-71f208de48479913>span.jsx-71f208de48479913{color:#475467;font-size:12.5px;line-height:1.2;font-weight:600}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913,.field-group.jsx-71f208de48479913 select.jsx-71f208de48479913,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913{width:100%;border:1px solid#d0d5dd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;color:#1d2939;font:inherit;font-size:14px;-webkit-transition:border-color.15s ease,box-shadow.15s ease;-moz-transition:border-color.15s ease,box-shadow.15s ease;-o-transition:border-color.15s ease,box-shadow.15s ease;transition:border-color.15s ease,box-shadow.15s ease}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913,.field-group.jsx-71f208de48479913 select.jsx-71f208de48479913{height:44px;padding:0 14px}.field-group.jsx-71f208de48479913 select.jsx-71f208de48479913{cursor:pointer}.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913{min-height:110px;padding:10px 14px;resize:vertical;line-height:1.6}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913::-webkit-input-placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-webkit-input-placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913:-moz-placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913:-moz-placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913::-moz-placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-moz-placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913:-ms-input-placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913:-ms-input-placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913::-ms-input-placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913::-ms-input-placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913::placeholder,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913::placeholder{color:#98a2b3}.field-group.jsx-71f208de48479913 input.jsx-71f208de48479913:focus,.field-group.jsx-71f208de48479913 select.jsx-71f208de48479913:focus,.field-group.jsx-71f208de48479913 textarea.jsx-71f208de48479913:focus{outline:none;border-color:#5b6abf;-webkit-box-shadow:0 0 0 3px rgba(91,106,191,.12);-moz-box-shadow:0 0 0 3px rgba(91,106,191,.12);box-shadow:0 0 0 3px rgba(91,106,191,.12)}.rich-editor-wrap.jsx-71f208de48479913{width:100%;min-height:300px}.rich-editor-wrap.jsx-71f208de48479913 .ql-container{min-height:250px;font-size:14px;-webkit-border-radius:0 0 8px 8px;-moz-border-radius:0 0 8px 8px;border-radius:0 0 8px 8px}.rich-editor-wrap.jsx-71f208de48479913 .ql-toolbar{-webkit-border-radius:8px 8px 0 0;-moz-border-radius:8px 8px 0 0;border-radius:8px 8px 0 0;background:#f9fafb}.rich-editor-wrap.jsx-71f208de48479913 .ql-editor{min-height:250px}.media-section-grid.jsx-71f208de48479913{display:grid;grid-template-columns:1fr;gap:16px}.media-section-item.jsx-71f208de48479913{min-width:0}.media-full-width.jsx-71f208de48479913{grid-column:auto}.media-field-label-row.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.media-field-label.jsx-71f208de48479913{margin:0;font-size:13px;font-weight:700;color:#1e293b}.media-badge.jsx-71f208de48479913{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:#eef2ff;color:#4f46e5;font-size:11px;font-weight:700}.media-status-dot.jsx-71f208de48479913{width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#22c55e;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.media-drop-box.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px;padding:28px 20px;border:2px dashed#818cf8;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;cursor:pointer;-webkit-transition:border-color.2s,background.2s,box-shadow.2s;-moz-transition:border-color.2s,background.2s,box-shadow.2s;-o-transition:border-color.2s,background.2s,box-shadow.2s;transition:border-color.2s,background.2s,box-shadow.2s;-webkit-box-shadow:0 2px 8px rgba(79,70,229,.06);-moz-box-shadow:0 2px 8px rgba(79,70,229,.06);box-shadow:0 2px 8px rgba(79,70,229,.06)}.media-drop-box.jsx-71f208de48479913:hover,.media-drop-box.drag-over.jsx-71f208de48479913{border-color:#4f46e5;background:#eef2ff;-webkit-box-shadow:0 4px 16px rgba(79,70,229,.15);-moz-box-shadow:0 4px 16px rgba(79,70,229,.15);box-shadow:0 4px 16px rgba(79,70,229,.15)}.media-drop-icon.jsx-71f208de48479913{width:48px;height:48px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.media-drop-text.jsx-71f208de48479913{margin:0;font-size:14px;color:#475569;text-align:center;line-height:1.5}.media-drop-or.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;width:100%;max-width:180px}.media-drop-or.jsx-71f208de48479913::before,.media-drop-or.jsx-71f208de48479913::after{content:\"\";-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:1px;background:#e2e8f0}.media-drop-or.jsx-71f208de48479913 span.jsx-71f208de48479913{font-size:12px;color:#94a3b8;font-weight:600;letter-spacing:.05em}.media-browse-btn.jsx-71f208de48479913{padding:10px 24px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#4f46e5;color:#fff;font-size:14px;font-weight:600;cursor:pointer;-webkit-transition:background.15s,-webkit-transform.1s;-moz-transition:background.15s,-moz-transform.1s;-o-transition:background.15s,-o-transform.1s;transition:background.15s,-webkit-transform.1s;transition:background.15s,-moz-transform.1s;transition:background.15s,-o-transform.1s;transition:background.15s,transform.1s}.media-browse-btn.jsx-71f208de48479913:hover{background:#4338ca;-webkit-transform:translateY(-1px);-moz-transform:translateY(-1px);-ms-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px)}.media-thumb-row.jsx-71f208de48479913{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,80px));gap:10px}.media-thumb.jsx-71f208de48479913{position:relative;width:80px;height:80px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;border:2px solid#c7d2fe;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;background:#f8fafc}.media-thumb.jsx-71f208de48479913 img.jsx-71f208de48479913{width:80px;height:80px;-o-object-fit:cover;object-fit:cover;display:block}.media-thumb-remove.jsx-71f208de48479913{position:absolute;top:4px;right:4px;width:20px;height:20px;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(0,0,0,.6);color:#fff;font-size:14px;line-height:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;opacity:0;-webkit-transition:opacity.15s;-moz-transition:opacity.15s;-o-transition:opacity.15s;transition:opacity.15s}.media-thumb.jsx-71f208de48479913:hover .media-thumb-remove.jsx-71f208de48479913{opacity:1}.media-current-name.jsx-71f208de48479913{font-size:12px;color:#475569;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.media-remove-file.jsx-71f208de48479913{border:none;background:none;color:#ef4444;font-size:12px;font-weight:600;cursor:pointer;padding:2px 6px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.media-remove-file.jsx-71f208de48479913:hover{background:#fef2f2}.media-field-card.jsx-71f208de48479913{display:none}.media-field-header.jsx-71f208de48479913,.media-field-title-row.jsx-71f208de48479913,.media-title-icon.jsx-71f208de48479913,.media-field-title.jsx-71f208de48479913,.media-status-active.jsx-71f208de48479913,.media-field-body.jsx-71f208de48479913,.media-upload-area.jsx-71f208de48479913,.media-dropzone.jsx-71f208de48479913,.media-dropzone-icon.jsx-71f208de48479913,.media-dropzone-text.jsx-71f208de48479913,.media-dropzone-compact.jsx-71f208de48479913,.media-inline-preview.jsx-71f208de48479913,.media-preview-overlay.jsx-71f208de48479913,.media-file-info.jsx-71f208de48479913,.media-file-name.jsx-71f208de48479913,.media-clear-btn.jsx-71f208de48479913{}.media-input-group.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px}.media-input-label.jsx-71f208de48479913{font-size:12px;font-weight:600;color:#667085}.media-url-input.jsx-71f208de48479913,.media-textarea.jsx-71f208de48479913{width:100%;border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f9fafb;color:#0f172a;font:inherit;font-size:13px;-webkit-transition:border-color.15s ease,box-shadow.15s ease;-moz-transition:border-color.15s ease,box-shadow.15s ease;-o-transition:border-color.15s ease,box-shadow.15s ease;transition:border-color.15s ease,box-shadow.15s ease}.media-textarea.jsx-71f208de48479913{min-height:64px;padding:10px 14px;resize:vertical;line-height:1.6}.media-textarea.jsx-71f208de48479913::-webkit-input-placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913:-moz-placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913::-moz-placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913:-ms-input-placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913::-ms-input-placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913::placeholder{color:#94a3b8}.media-textarea.jsx-71f208de48479913:focus{outline:none;border-color:#6366f1;background:#fff;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.media-or-divider.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px}.media-or-divider.jsx-71f208de48479913::before,.media-or-divider.jsx-71f208de48479913::after{content:\"\";-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:1px;background:#e4e7ec}.media-or-divider.jsx-71f208de48479913 span.jsx-71f208de48479913{font-size:12px;color:#98a2b3;font-weight:500;text-transform:uppercase;letter-spacing:.04em}.media-upload-btn.jsx-71f208de48479913{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:8px;height:42px;padding:0 18px;border:1px solid#d0d5dd;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;color:#344054;font:inherit;font-size:13.5px;font-weight:600;cursor:pointer;-webkit-transition:border-color.15s ease,background.15s ease,box-shadow.15s ease;-moz-transition:border-color.15s ease,background.15s ease,box-shadow.15s ease;-o-transition:border-color.15s ease,background.15s ease,box-shadow.15s ease;transition:border-color.15s ease,background.15s ease,box-shadow.15s ease}.media-upload-btn.jsx-71f208de48479913:hover{border-color:#98a2b3;background:#f9fafb;-webkit-box-shadow:0 1px 3px rgba(16,24,40,.06);-moz-box-shadow:0 1px 3px rgba(16,24,40,.06);box-shadow:0 1px 3px rgba(16,24,40,.06)}.media-upload-btn.jsx-71f208de48479913:disabled{opacity:.6;cursor:wait}.media-preview-grid.jsx-71f208de48479913{display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:10px}.media-preview-item.jsx-71f208de48479913{position:relative;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;border:1px solid#e5e7eb;background:#f9fafb;aspect-ratio:1}.media-preview-item.jsx-71f208de48479913 img.jsx-71f208de48479913{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.media-remove-btn.jsx-71f208de48479913{position:absolute;top:4px;right:4px;width:24px;height:24px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;cursor:pointer;opacity:0;-webkit-transition:opacity.15s ease;-moz-transition:opacity.15s ease;-o-transition:opacity.15s ease;transition:opacity.15s ease}.media-preview-item.jsx-71f208de48479913:hover .media-remove-btn.jsx-71f208de48479913{opacity:1}.hidden-file-input.jsx-71f208de48479913{display:none!important;width:0!important;height:0!important;opacity:0!important;pointer-events:none!important;position:absolute!important}.form-actions.jsx-71f208de48479913{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding-top:22px;border-top:1px solid#edf1f7}.cancel-btn.jsx-71f208de48479913,.submit-btn.jsx-71f208de48479913{height:44px;padding-left:20px;padding-right:20px}.submit-btn.jsx-71f208de48479913{-webkit-box-shadow:0 1px 3px rgba(47,61,122,.15);-moz-box-shadow:0 1px 3px rgba(47,61,122,.15);box-shadow:0 1px 3px rgba(47,61,122,.15)}.submit-btn.jsx-71f208de48479913:hover,.create-btn.jsx-71f208de48479913:hover,.refresh-btn.jsx-71f208de48479913:hover{-webkit-filter:brightness(1.04);filter:brightness(1.04)}.cancel-btn.jsx-71f208de48479913:hover,.close-form-btn.jsx-71f208de48479913:hover,.ghost-btn.jsx-71f208de48479913:hover{border-color:#bfc7dd;background:#f9fafb}.action-btn.jsx-71f208de48479913:not(.danger):hover{background:#2f3d7a;color:#fff;border-color:#2f3d7a}.action-btn.danger.jsx-71f208de48479913:hover{background:#c0344f;color:#fff;border-color:#c0344f}.product-form-card.jsx-71f208de48479913 .field-group.jsx-71f208de48479913 select.jsx-71f208de48479913{-ms-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;-moz-appearance:none!important;padding-right:40px!important;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-position:right 14px center!important;cursor:pointer!important}@media(max-width:1080px){.field-group.jsx-71f208de48479913,.field-group.span-3.jsx-71f208de48479913{grid-column:span 4}.field-group.span-6.jsx-71f208de48479913{grid-column:span 6}.field-group.span-12.jsx-71f208de48479913{grid-column:span 12}.field-group.status-field.jsx-71f208de48479913{max-width:none}}@media(max-width:840px){.inventory-toolbar.jsx-71f208de48479913,.empty-state.jsx-71f208de48479913{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.inventory-filters.jsx-71f208de48479913{width:100%}.search-field.jsx-71f208de48479913{width:100%;min-width:0}.table-actions.jsx-71f208de48479913{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:nth-child(n+5):not(:last-child),.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.jsx-71f208de48479913:nth-child(n+5):not(:last-child){display:none}.product-form-header.jsx-71f208de48479913{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-entry-form.jsx-71f208de48479913,.product-form-header.jsx-71f208de48479913{padding-left:20px;padding-right:20px}.form-block.jsx-71f208de48479913{padding:18px}.field-group.jsx-71f208de48479913,.field-group.span-3.jsx-71f208de48479913,.field-group.span-4.jsx-71f208de48479913,.field-group.span-6.jsx-71f208de48479913,.field-group.span-12.jsx-71f208de48479913{grid-column:span 12}.media-section-grid.jsx-71f208de48479913{grid-template-columns:1fr}.media-full-width.jsx-71f208de48479913{grid-column:auto}}@media(max-width:560px){.inventory-card.jsx-71f208de48479913,.admin-content.jsx-71f208de48479913{padding-left:12px;padding-right:12px}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:nth-child(3),.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.jsx-71f208de48479913:nth-child(3){width:auto}.inventory-table.jsx-71f208de48479913 thead.jsx-71f208de48479913 th.jsx-71f208de48479913:nth-child(n+4):not(:last-child),.inventory-table.jsx-71f208de48479913 tbody.jsx-71f208de48479913 td.jsx-71f208de48479913:nth-child(n+4):not(:last-child){display:none}.product-form-card.jsx-71f208de48479913{-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}.product-entry-form.jsx-71f208de48479913,.product-form-header.jsx-71f208de48479913{padding:16px}.product-form-header.jsx-71f208de48479913 h3.jsx-71f208de48479913{font-size:20px}.block-head.jsx-71f208de48479913{gap:10px}.form-actions.jsx-71f208de48479913{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.cancel-btn.jsx-71f208de48479913,.submit-btn.jsx-71f208de48479913,.close-form-btn.jsx-71f208de48479913{width:100%}}"
            })
        ]
    });
};
/* harmony default export */ const TableManagerModern = (ModernTableManager);

;// CONCATENATED MODULE: ./pages/portal-secure-99x/tables/[table].js



const TablePage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(TableManagerModern, {});
};
const getServerSideProps = async ({ req , params  })=>{
    const table = String(params?.table || "").toLowerCase();
    try {
        const { verifyAdminSessionToken , ROLE_RESTRICTIONS  } = await __webpack_require__.e(/* import() */ 3164).then(__webpack_require__.bind(__webpack_require__, 3164));
        const cookieStr = req.headers?.cookie || "";
        const match = cookieStr.match(/mis_admin_session=([^;]+)/);
        if (match) {
            const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]));
            if (payload) {
                const role = payload.role || "junior_admin";
                const restrictions = ROLE_RESTRICTIONS[role] || [];
                if (restrictions.includes(table)) {
                    return {
                        redirect: {
                            destination: "/portal-secure-99x",
                            permanent: false
                        }
                    };
                }
            }
        }
    } catch (e) {}
    return {
        props: {}
    };
};
/* harmony default export */ const _table_ = (TablePage);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,5912], () => (__webpack_exec__(5924)));
module.exports = __webpack_exports__;

})();