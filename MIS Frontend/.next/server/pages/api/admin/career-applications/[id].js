"use strict";
(() => {
var exports = {};
exports.id = 3205;
exports.ids = [3205,6548,8930];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

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

/***/ 7853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__]);
_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__/* .requireAdminApiAuth */ .W)(req);
    if (!auth.ok) return res.status(auth.status).json({
        error: auth.error
    });
    const { id  } = req.query;
    if (req.method === "PUT") {
        const { status  } = req.body || {};
        const valid = [
            "new",
            "reviewed",
            "shortlisted",
            "rejected"
        ];
        if (!status || !valid.includes(status)) {
            return res.status(400).json({
                error: "Invalid status."
            });
        }
        try {
            const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
            await db.execute("UPDATE career_applications SET status = ? WHERE id = ?", [
                status,
                id
            ]);
            return res.status(200).json({
                success: true
            });
        } catch (e) {
            return res.status(500).json({
                error: "Failed to update."
            });
        }
    }
    if (req.method === "DELETE") {
        try {
            const db1 = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
            await db1.execute("DELETE FROM career_applications WHERE id = ?", [
                id
            ]);
            return res.status(200).json({
                success: true
            });
        } catch (e1) {
            return res.status(500).json({
                error: "Failed to delete."
            });
        }
    }
    return res.status(405).json({
        error: "Method not allowed"
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9563,322], () => (__webpack_exec__(7853)));
module.exports = __webpack_exports__;

})();