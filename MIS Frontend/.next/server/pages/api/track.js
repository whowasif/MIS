"use strict";
(() => {
var exports = {};
exports.id = 3172;
exports.ids = [3172];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 4057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_activity_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false
        });
    }
    try {
        const { eventType , page , searchQuery , productId , productName  } = req.body || {};
        if (!eventType) {
            return res.status(400).json({
                success: false,
                error: "Missing eventType"
            });
        }
        const allowedTypes = [
            "page_view",
            "search",
            "product_view",
            "add_to_cart"
        ];
        if (!allowedTypes.includes(eventType)) {
            return res.status(400).json({
                success: false,
                error: "Invalid eventType"
            });
        }
        const ipAddress = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || null;
        const userAgent = req.headers["user-agent"] || null;
        const referrer = req.headers["referer"] || null;
        await (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_0__/* .logVisitorEvent */ .e9)({
            eventType,
            page: page || null,
            searchQuery: searchQuery || null,
            productId: productId || null,
            productName: productName || null,
            ipAddress,
            userAgent,
            referrer,
            customerId: null
        });
        return res.status(200).json({
            success: true
        });
    } catch (e) {
        return res.status(500).json({
            success: false
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
var __webpack_exports__ = __webpack_require__.X(0, [174], () => (__webpack_exec__(4057)));
module.exports = __webpack_exports__;

})();