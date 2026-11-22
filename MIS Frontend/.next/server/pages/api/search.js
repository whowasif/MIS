"use strict";
(() => {
var exports = {};
exports.id = 5198;
exports.ids = [5198];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 3766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/server/db.js
var server_db = __webpack_require__(6548);
// EXTERNAL MODULE: ./lib/server/activity-log.js
var activity_log = __webpack_require__(174);
;// CONCATENATED MODULE: ./lib/server/search-query.js
/** Common brand / product typos → canonical search term. Keep small and O(1). */ const BRAND_ALIASES = {
    lenevo: "lenovo",
    lenova: "lenovo",
    lenovo: "lenovo",
    hewlet: "hp",
    hewlett: "hp",
    "hewlett packard": "hp",
    "hewlett-packard": "hp",
    msi: "msi",
    asus: "asus",
    asuz: "asus",
    dell: "dell",
    del: "dell",
    acer: "acer",
    aoc: "aoc",
    samsung: "samsung",
    samsumg: "samsung",
    samsug: "samsung",
    logitech: "logitech",
    logi: "logitech",
    canon: "canon",
    epson: "epson",
    brother: "brother",
    cisco: "cisco",
    mikrotik: "mikrotik",
    microtik: "mikrotik",
    tp_link: "tp-link",
    tplink: "tp-link",
    "tp link": "tp-link",
    intel: "intel",
    amd: "amd",
    nvidia: "nvidia",
    nvedia: "nvidia",
    apc: "apc"
};
const normalizeSearchQuery = (raw)=>String(raw || "").trim().replace(/\s+/g, " ");
/**
 * Expand a user query into unique search terms (original + alias canonical).
 * Returns patterns ready for SQL LIKE (without % wrapping).
 */ const expandSearchTerms = (raw)=>{
    const q = normalizeSearchQuery(raw);
    if (!q) return [];
    const lower = q.toLowerCase();
    const terms = new Set([
        q
    ]);
    const alias = BRAND_ALIASES[lower];
    if (alias) terms.add(alias);
    // Also try alias on first token (e.g. "lenevo laptop")
    const first = lower.split(" ")[0];
    if (first && BRAND_ALIASES[first]) {
        const canonical = BRAND_ALIASES[first];
        terms.add(canonical);
        if (q.includes(" ")) {
            terms.add(`${canonical}${q.slice(first.length)}`);
        }
    }
    return [
        ...terms
    ];
};
/**
 * Build parameterized OR clauses for product search fields.
 * Fields: name, short_desc, type, brand, model, category name.
 */ const buildProductSearchClause = (terms)=>{
    if (!terms.length) {
        return {
            sql: "1=0",
            params: []
        };
    }
    const fieldExprs = [
        "p.name LIKE ?",
        "p.short_desc LIKE ?",
        "p.type LIKE ?",
        "p.brand LIKE ?",
        "p.model LIKE ?",
        "c.name LIKE ?", 
    ];
    const parts = [];
    const params = [];
    for (const term of terms){
        const pattern = `%${term}%`;
        parts.push(`(${fieldExprs.join(" OR ")})`);
        for(let i = 0; i < fieldExprs.length; i += 1)params.push(pattern);
    }
    return {
        sql: parts.join(" OR "),
        params
    };
};
const buildSimpleSearchClause = (terms, columns)=>{
    if (!terms.length || !columns.length) {
        return {
            sql: "1=0",
            params: []
        };
    }
    const parts = [];
    const params = [];
    for (const term of terms){
        const pattern = `%${term}%`;
        parts.push(`(${columns.map((col)=>`${col} LIKE ?`).join(" OR ")})`);
        for(let i = 0; i < columns.length; i += 1)params.push(pattern);
    }
    return {
        sql: parts.join(" OR "),
        params
    };
};

;// CONCATENATED MODULE: ./pages/api/search.js



async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const q = String(req.query.q || "").trim();
    if (!q || q.length < 2) {
        return res.status(200).json({
            products: [],
            services: []
        });
    }
    const terms = expandSearchTerms(q);
    const productClause = buildProductSearchClause(terms);
    const serviceClause = buildSimpleSearchClause(terms, [
        "name",
        "description"
    ]);
    const db = (0,server_db/* getDbPool */.z)();
    try {
        // Search products
        const [products] = await db.execute(`SELECT p.id, p.name, p.slug, p.short_desc, p.price, p.type, p.thumbnail_1, p.brand, p.model,
              c.name AS category_name
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
         AND (${productClause.sql})
       ORDER BY p.name ASC LIMIT 20`, productClause.params);
        // Search digital services
        const [digiServices] = await db.execute(`SELECT id, name, slug, description, 'digital-services' AS page_type
       FROM digi_services
       WHERE deleted_at IS NULL AND status = 'active'
         AND (${serviceClause.sql})
       LIMIT 5`, serviceClause.params);
        // Search business & corporate solutions
        const [bizServices] = await db.execute(`SELECT id, name, slug, description, 'enterprise-solutions' AS page_type
       FROM bus_corp_sol
       WHERE deleted_at IS NULL AND status = 'active'
         AND (${serviceClause.sql})
       LIMIT 5`, serviceClause.params);
        // Search maintenance services
        const [maintServices] = await db.execute(`SELECT id, name, slug, description, 'maintenance-support' AS page_type
       FROM service_maintenance
       WHERE deleted_at IS NULL AND status = 'active'
         AND (${serviceClause.sql})
       LIMIT 5`, serviceClause.params);
        const services = [
            ...digiServices,
            ...bizServices,
            ...maintServices
        ];
        // Log search event
        const ipAddress = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || null;
        const userAgent = req.headers["user-agent"] || null;
        (0,activity_log/* logVisitorEvent */.e9)({
            eventType: "search",
            searchQuery: q,
            ipAddress,
            userAgent
        }).catch(()=>{});
        return res.status(200).json({
            products: JSON.parse(JSON.stringify(products)),
            services: JSON.parse(JSON.stringify(services))
        });
    } catch (error) {
        console.error("Search error:", error);
        return res.status(500).json({
            error: "Search failed."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [174], () => (__webpack_exec__(3766)));
module.exports = __webpack_exports__;

})();