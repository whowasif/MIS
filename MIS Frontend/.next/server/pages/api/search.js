"use strict";
(() => {
var exports = {};
exports.id = 5198;
exports.ids = [5198,6548,8930];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);

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
    const searchPattern = `%${q}%`;
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    try {
        // Search products
        const [products] = await db.execute(`SELECT p.id, p.name, p.slug, p.short_desc, p.price, p.type, p.thumbnail_1, p.brand, p.model,
              c.name AS category_name
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
         AND (p.name LIKE ? OR p.short_desc LIKE ? OR p.type LIKE ? OR p.brand LIKE ? OR p.model LIKE ?)
       ORDER BY p.name ASC LIMIT 20`, [
            searchPattern,
            searchPattern,
            searchPattern,
            searchPattern,
            searchPattern
        ]);
        // Search digital services
        const [digiServices] = await db.execute(`SELECT id, name, slug, description, 'digital-services' AS page_type
       FROM digi_services
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        // Search business & corporate solutions
        const [bizServices] = await db.execute(`SELECT id, name, slug, description, 'enterprise-solutions' AS page_type
       FROM bus_corp_sol
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        // Search maintenance services
        const [maintServices] = await db.execute(`SELECT id, name, slug, description, 'maintenance-support' AS page_type
       FROM service_maintenance
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        const services = [
            ...digiServices,
            ...bizServices,
            ...maintServices
        ];
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
var __webpack_exports__ = (__webpack_exec__(5122));
module.exports = __webpack_exports__;

})();