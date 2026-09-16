"use strict";
(() => {
var exports = {};
exports.id = 3689;
exports.ids = [3689];
exports.modules = {

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 6611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _lib_auth_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__, _lib_auth_session__WEBPACK_IMPORTED_MODULE_1__]);
([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__, _lib_auth_session__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Re-issues the admin session JWT + cookie for another full TTL window and
// returns the new absolute expiry (epoch seconds) so the client timer can stay
// perfectly in sync with the real server-side session.
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
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__/* .requireAdminApiAuth */ .W)(req);
    if (!auth.ok) return res.status(auth.status).json({
        success: false,
        error: auth.error
    });
    const { sub , role , email , name  } = auth.payload;
    const token = await (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_1__/* .createAdminSessionToken */ .gO)({
        id: sub,
        role,
        email,
        name
    });
    const expiresAt = Math.floor(Date.now() / 1000) + _lib_auth_session__WEBPACK_IMPORTED_MODULE_1__/* .ADMIN_SESSION_TTL_SECONDS */ .nc;
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Set-Cookie", [
        (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_1__/* .buildSessionCookie */ .cc)(token),
        (0,_lib_auth_session__WEBPACK_IMPORTED_MODULE_1__/* .buildRoleCookie */ .Kh)(role)
    ]);
    return res.status(200).json({
        success: true,
        expiresAt
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
var __webpack_exports__ = __webpack_require__.X(0, [9563,322], () => (__webpack_exec__(6611)));
module.exports = __webpack_exports__;

})();