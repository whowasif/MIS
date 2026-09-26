"use strict";
exports.id = 3164;
exports.ids = [3164];
exports.modules = {

/***/ 3164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADMIN_ROLES": () => (/* binding */ ADMIN_ROLES),
/* harmony export */   "ADMIN_ROLE_COOKIE": () => (/* binding */ ADMIN_ROLE_COOKIE),
/* harmony export */   "ADMIN_SESSION_COOKIE": () => (/* binding */ ADMIN_SESSION_COOKIE),
/* harmony export */   "ADMIN_SESSION_TTL_SECONDS": () => (/* binding */ ADMIN_SESSION_TTL_SECONDS),
/* harmony export */   "ROLE_RESTRICTIONS": () => (/* binding */ ROLE_RESTRICTIONS),
/* harmony export */   "buildExpiredRoleCookie": () => (/* binding */ buildExpiredRoleCookie),
/* harmony export */   "buildExpiredSessionCookie": () => (/* binding */ buildExpiredSessionCookie),
/* harmony export */   "buildRoleCookie": () => (/* binding */ buildRoleCookie),
/* harmony export */   "buildSessionCookie": () => (/* binding */ buildSessionCookie),
/* harmony export */   "createAdminSessionToken": () => (/* binding */ createAdminSessionToken),
/* harmony export */   "verifyAdminSessionToken": () => (/* binding */ verifyAdminSessionToken)
/* harmony export */ });
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9369);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jose__WEBPACK_IMPORTED_MODULE_0__]);
jose__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ADMIN_SESSION_COOKIE = "mis_admin_session";
const ADMIN_ROLE_COOKIE = "mis_admin_role";
const ADMIN_SESSION_TTL_SECONDS = 30 * 60;
// Role hierarchy: super_admin > senior_admin > junior_admin
const ADMIN_ROLES = [
    "super_admin",
    "senior_admin",
    "junior_admin"
];
// Pages/resources restricted from certain roles
const ROLE_RESTRICTIONS = {
    // senior_admin cannot access:
    senior_admin: [
        "admin_users"
    ],
    // junior_admin cannot access:
    junior_admin: [
        "admin_users",
        "customers",
        "company_contacts",
        "orders",
        "quotes",
        "promo_codes",
        "quotes-manager",
        "applications"
    ]
};
const getSessionSecret = ()=>{
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;
    if (!sessionSecret || sessionSecret.length < 32) {
        throw new Error("ADMIN_SESSION_SECRET must be set and at least 32 characters long.");
    }
    return new TextEncoder().encode(sessionSecret);
};
const createAdminSessionToken = async ({ id , role , email , name  })=>{
    const secret = getSessionSecret();
    return new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT({
        role,
        email,
        name
    }).setProtectedHeader({
        alg: "HS256"
    }).setSubject(String(id)).setIssuedAt().setExpirationTime(`${ADMIN_SESSION_TTL_SECONDS}s`).sign(secret);
};
const verifyAdminSessionToken = async (token)=>{
    if (!token) return null;
    try {
        const secret = getSessionSecret();
        const { payload  } = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, secret);
        return payload;
    } catch (error) {
        return null;
    }
};
const buildSessionCookie = (token)=>{
    const secureAttribute =  true ? "; Secure" : 0;
    const sameSiteValue =  true ? "Strict" : 0;
    return `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=${ADMIN_SESSION_TTL_SECONDS}${secureAttribute}`;
};
const buildRoleCookie = (role)=>{
    const secureAttribute =  true ? "; Secure" : 0;
    const sameSiteValue =  true ? "Strict" : 0;
    return `${ADMIN_ROLE_COOKIE}=${encodeURIComponent(String(role || ""))}; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=${ADMIN_SESSION_TTL_SECONDS}${secureAttribute}`;
};
const buildExpiredSessionCookie = ()=>{
    const secureAttribute =  true ? "; Secure" : 0;
    const sameSiteValue =  true ? "Strict" : 0;
    return `${ADMIN_SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secureAttribute}`;
};
const buildExpiredRoleCookie = ()=>{
    const secureAttribute =  true ? "; Secure" : 0;
    const sameSiteValue =  true ? "Strict" : 0;
    return `${ADMIN_ROLE_COOKIE}=; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secureAttribute}`;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;