"use strict";
(() => {
var exports = {};
exports.id = 9616;
exports.ids = [9616];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 7618:
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ 8489:
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
    const { token , password  } = req.body || {};
    if (!token || !password) {
        return res.status(400).json({
            error: "Token and new password are required."
        });
    }
    if (password.length < 10) {
        return res.status(400).json({
            error: "Admin password must be at least 10 characters with uppercase, lowercase, number, and symbol."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
        const [tokens] = await db.execute("SELECT id, customer_id, expires_at FROM password_reset_tokens WHERE token = ? AND used = 0 LIMIT 1", [
            token
        ]);
        if (!tokens.length) {
            return res.status(400).json({
                error: "Invalid or expired reset link."
            });
        }
        const resetToken = tokens[0];
        const adminId = resetToken.customer_id - 1000000;
        if (adminId <= 0) {
            return res.status(400).json({
                error: "Invalid reset token."
            });
        }
        if (new Date(resetToken.expires_at) < new Date()) {
            await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE id = ?", [
                resetToken.id
            ]);
            return res.status(400).json({
                error: "This reset link has expired."
            });
        }
        const passwordHash = await bcryptjs__WEBPACK_IMPORTED_MODULE_0__["default"].hash(password, 12);
        await db.execute("UPDATE admin_users SET password_hash = ?, failed_login_attempts = 0 WHERE id = ?", [
            passwordHash,
            adminId
        ]);
        await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE id = ?", [
            resetToken.id
        ]);
        return res.status(200).json({
            success: true,
            message: "Admin password reset successfully."
        });
    } catch (error) {
        console.error("Admin reset password error:", error);
        return res.status(500).json({
            error: "Unable to reset password."
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
var __webpack_exports__ = __webpack_require__.X(0, [6548], () => (__webpack_exec__(8489)));
module.exports = __webpack_exports__;

})();