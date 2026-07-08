"use strict";
(() => {
var exports = {};
exports.id = 7221;
exports.ids = [7221];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 1798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);

async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        const limit = req.query.limit ? Number(req.query.limit) : 100;
        const products = await (0,_lib_server_products__WEBPACK_IMPORTED_MODULE_0__/* .listCatalogProducts */ .PS)(limit);
        return res.status(200).json({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to load catalog products from database",
            details:  false ? 0 : undefined
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
var __webpack_exports__ = __webpack_require__.X(0, [558], () => (__webpack_exec__(1798)));
module.exports = __webpack_exports__;

})();