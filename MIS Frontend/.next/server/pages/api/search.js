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

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);


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
        // Log search event
        const ipAddress = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || null;
        const userAgent = req.headers["user-agent"] || null;
        (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__/* .logVisitorEvent */ .e9)({
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
var __webpack_exports__ = __webpack_require__.X(0, [174], () => (__webpack_exec__(5122)));
module.exports = __webpack_exports__;

})();