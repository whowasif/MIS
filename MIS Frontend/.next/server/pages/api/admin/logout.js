"use strict";
(() => {
var exports = {};
exports.id = 9085;
exports.ids = [9085];
exports.modules = {

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 2617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_session__WEBPACK_IMPORTED_MODULE_0__]);
_lib_auth_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]);
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Set-Cookie", [
        (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_0__/* .buildExpiredSessionCookie */ .Ix)(),
        (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_0__/* .buildExpiredRoleCookie */ .Lu)()
    ]);
    return res.status(200).json({
        success: true
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9563], () => (__webpack_exec__(2617)));
module.exports = __webpack_exports__;

})();