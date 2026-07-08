"use strict";
(() => {
var exports = {};
exports.id = 9345;
exports.ids = [9345];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 7618:
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 3968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _lib_server_admin_tables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4353);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__]);
_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    const table = String(req.query?.table || "").toLowerCase();
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__/* .requireAdminApiAuth */ .W)(req, {
        resource: table
    });
    if (!auth.ok) {
        return res.status(auth.status).json({
            success: false,
            error: auth.error
        });
    }
    const id = String(req.query?.id || "").trim();
    if (!_lib_server_admin_tables__WEBPACK_IMPORTED_MODULE_1__/* .MANAGED_TABLES.includes */ .xJ.includes(table)) {
        return res.status(404).json({
            success: false,
            error: "Unknown managed table."
        });
    }
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Invalid row id."
        });
    }
    try {
        if (req.method === "PUT") {
            const values = req.body?.values || {};
            // Hash password for admin_users table
            if (table === "admin_users" && values.password) {
                const bcrypt = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7618));
                values.password_hash = await bcrypt.default.hash(values.password, 12);
                delete values.password;
            }
            const affectedRows = await (0,_lib_server_admin_tables__WEBPACK_IMPORTED_MODULE_1__/* .updateTableRow */ .eY)({
                table,
                id,
                values
            });
            return res.status(200).json({
                success: true,
                affectedRows
            });
        }
        if (req.method === "DELETE") {
            const affectedRows1 = await (0,_lib_server_admin_tables__WEBPACK_IMPORTED_MODULE_1__/* .deleteTableRow */ .JC)({
                table,
                id
            });
            return res.status(200).json({
                success: true,
                affectedRows: affectedRows1
            });
        }
        res.setHeader("Allow", [
            "PUT",
            "DELETE"
        ]);
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "Table row operation failed.",
            details:  false ? 0 : undefined
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9563,322,6548,4353], () => (__webpack_exec__(3968)));
module.exports = __webpack_exports__;

})();