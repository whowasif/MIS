"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ requireAdminApiAuth)
/* harmony export */ });
/* unused harmony export canRoleAccess */
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session__WEBPACK_IMPORTED_MODULE_0__]);
_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const parseCookieHeader = (rawCookie)=>{
    const source = String(rawCookie || "");
    return source.split(";").reduce((accumulator, pair)=>{
        const index = pair.indexOf("=");
        if (index < 0) return accumulator;
        const key = pair.slice(0, index).trim();
        const value = pair.slice(index + 1).trim();
        if (!key) return accumulator;
        accumulator[key] = decodeURIComponent(value);
        return accumulator;
    }, {});
};
const requireAdminApiAuth = async (req, options = {})=>{
    const cookieMap = parseCookieHeader(req.headers?.cookie);
    const token = cookieMap.mis_admin_session;
    if (!token) {
        return {
            ok: false,
            status: 401,
            error: "Missing admin session."
        };
    }
    const payload = await (0,_session__WEBPACK_IMPORTED_MODULE_0__/* .verifyAdminSessionToken */ .aw)(token);
    if (!payload) {
        return {
            ok: false,
            status: 401,
            error: "Invalid or expired admin session."
        };
    }
    const role = String(payload.role || "");
    // Check if role is a valid admin role
    if (!_session__WEBPACK_IMPORTED_MODULE_0__/* .ADMIN_ROLES.includes */ .kI.includes(role)) {
        return {
            ok: false,
            status: 403,
            error: "Insufficient admin role."
        };
    }
    // Check resource-level access if a resource is specified
    if (options.resource) {
        const restrictions = _session__WEBPACK_IMPORTED_MODULE_0__/* .ROLE_RESTRICTIONS */ .mC[role] || [];
        if (restrictions.includes(options.resource)) {
            return {
                ok: false,
                status: 403,
                error: "You do not have access to this resource."
            };
        }
    }
    return {
        ok: true,
        payload,
        role
    };
};
// Helper to check if a role can access a specific resource
const canRoleAccess = (role, resource)=>{
    const restrictions = ROLE_RESTRICTIONS[role] || [];
    return !restrictions.includes(resource);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;