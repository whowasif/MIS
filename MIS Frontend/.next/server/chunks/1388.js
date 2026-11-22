"use strict";
exports.id = 1388;
exports.ids = [1388];
exports.modules = {

/***/ 1388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProductSearchClause": () => (/* binding */ buildProductSearchClause),
/* harmony export */   "buildSimpleSearchClause": () => (/* binding */ buildSimpleSearchClause),
/* harmony export */   "expandSearchTerms": () => (/* binding */ expandSearchTerms),
/* harmony export */   "normalizeSearchQuery": () => (/* binding */ normalizeSearchQuery)
/* harmony export */ });
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


/***/ })

};
;