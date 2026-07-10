"use strict";
(() => {
var exports = {};
exports.id = 6524;
exports.ids = [6524];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 7618:
/***/ ((module) => {

module.exports = import("bcryptjs");;

/***/ }),

/***/ 5241:
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
    if (password.length < 8) {
        return res.status(400).json({
            error: "Password must be at least 8 characters."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
        // Find valid token
        const [tokens] = await db.execute("SELECT id, customer_id, expires_at FROM password_reset_tokens WHERE token = ? AND used = 0 LIMIT 1", [
            token
        ]);
        if (!tokens.length) {
            return res.status(400).json({
                error: "Invalid or expired reset link. Please request a new one."
            });
        }
        const resetToken = tokens[0];
        // Check expiry
        if (new Date(resetToken.expires_at) < new Date()) {
            await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE id = ?", [
                resetToken.id
            ]);
            return res.status(400).json({
                error: "This reset link has expired. Please request a new one."
            });
        }
        // Hash new password
        const passwordHash = await bcryptjs__WEBPACK_IMPORTED_MODULE_0__["default"].hash(password, 12);
        // Update customer password
        await db.execute("UPDATE customers SET password_hash = ? WHERE id = ?", [
            passwordHash,
            resetToken.customer_id
        ]);
        // Mark token as used
        await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE id = ?", [
            resetToken.id
        ]);
        return res.status(200).json({
            success: true,
            message: "Password has been reset successfully. You can now sign in."
        });
    } catch (error) {
        console.error("Reset password error:", error);
        return res.status(500).json({
            error: "Unable to reset password. Please try again."
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
var __webpack_exports__ = __webpack_require__.X(0, [6548], () => (__webpack_exec__(5241)));
module.exports = __webpack_exports__;

})();