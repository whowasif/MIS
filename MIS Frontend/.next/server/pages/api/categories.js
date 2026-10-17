"use strict";
(() => {
var exports = {};
exports.id = 6957;
exports.ids = [6957];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6248);
/* harmony import */ var _lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        (0,_lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__.setPrivateNoStore)(res);
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }
    try {
        const payload = await (0,_lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__.getOrLoad)("api:categories", async ()=>{
            const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
            const [rows] = await db.query(`SELECT id, parent_id, name, slug, icon_url, display_order
         FROM categories
         WHERE deleted_at IS NULL AND status = 'active'
         ORDER BY display_order ASC, name ASC`);
            return {
                categories: rows,
                count: rows.length,
                items: rows
            };
        });
        (0,_lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__.setPublicPageCache)(res);
        return res.status(200).json({
            success: true,
            ...payload
        });
    } catch (error) {
        (0,_lib_server_ttl_cache__WEBPACK_IMPORTED_MODULE_1__.setPrivateNoStore)(res);
        return res.status(500).json({
            success: false,
            error: "Failed to load categories"
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
var __webpack_exports__ = __webpack_require__.X(0, [2065], () => (__webpack_exec__(8678)));
module.exports = __webpack_exports__;

})();