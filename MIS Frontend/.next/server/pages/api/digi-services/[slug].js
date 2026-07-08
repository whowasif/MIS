"use strict";
(() => {
var exports = {};
exports.id = 8943;
exports.ids = [8943];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 5680:
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
            success: false,
            error: "Method not allowed"
        });
    }
    try {
        const slug = String(req.query?.slug || "").trim();
        const item = await (0,_lib_server_products__WEBPACK_IMPORTED_MODULE_0__/* .getStructuredContentBySlug */ .rh)("digi_services", slug);
        if (!item) {
            return res.status(404).json({
                success: false,
                error: "Digital service not found"
            });
        }
        return res.status(200).json({
            success: true,
            item
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Failed to load digital service by slug",
            details:  false ? 0 : undefined
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [558], () => (__webpack_exec__(5680)));
module.exports = __webpack_exports__;

})();