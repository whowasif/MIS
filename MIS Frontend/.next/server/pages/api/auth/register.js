"use strict";
(() => {
var exports = {};
exports.id = 7007;
exports.ids = [7007];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 7618:
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ 8567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7618);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bcryptjs__WEBPACK_IMPORTED_MODULE_0__]);
bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const { fullName , email , password  } = req.body || {};
    if (!fullName || !email || !password) {
        return res.status(400).json({
            error: "All fields are required."
        });
    }
    if (password.length < 8) {
        return res.status(400).json({
            error: "Password must be at least 8 characters."
        });
    }
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanName = String(fullName).trim();
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
    // Check if email exists
    const [existing] = await db.execute("SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
        cleanEmail
    ]);
    if (existing.length > 0) {
        return res.status(409).json({
            error: "An account with this email already exists. Please sign in."
        });
    }
    // Hash password
    const passwordHash = await bcryptjs__WEBPACK_IMPORTED_MODULE_0__["default"].hash(password, 12);
    // Create customer
    try {
        await db.execute("INSERT INTO customers (full_name, email, password_hash, is_email_verified) VALUES (?, ?, ?, 0)", [
            cleanName,
            cleanEmail,
            passwordHash
        ]);
        return res.status(201).json({
            success: true,
            message: "Account created successfully."
        });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({
            error: "Unable to create account. Please try again."
        });
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [6548], () => (__webpack_exec__(8567)));
module.exports = __webpack_exports__;

})();