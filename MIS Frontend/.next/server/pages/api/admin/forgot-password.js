"use strict";
(() => {
var exports = {};
exports.id = 4643;
exports.ids = [4643];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 5549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5333);



async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const identifier = String(req.body?.identifier || "").trim().toLowerCase();
    if (!identifier) {
        return res.status(400).json({
            error: "Email or username is required."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
        const [admins] = await db.execute("SELECT id, name, email FROM admin_users WHERE (LOWER(email) = ? OR LOWER(username) = ?) AND deleted_at IS NULL LIMIT 1", [
            identifier,
            identifier
        ]);
        if (!admins.length) {
            return res.status(200).json({
                success: true,
                message: "If an admin account exists, a reset link has been sent."
            });
        }
        const admin = admins[0];
        const token = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes
        ;
        // Invalidate existing tokens for this admin
        await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE customer_id = ? AND used = 0", [
            admin.id + 1000000
        ]);
        // Store token (use customer_id + 1000000 offset to distinguish admin tokens)
        await db.execute("INSERT INTO password_reset_tokens (customer_id, token, expires_at) VALUES (?, ?, ?)", [
            admin.id + 1000000,
            token,
            expiresAt
        ]);
        const baseUrl = process.env.NEXTAUTH_URL || "https://missolution.com.bd";
        const resetUrl = `${baseUrl}/portal-secure-99x/reset-password?token=${token}`;
        await (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendAdminPasswordResetEmail */ .mN)({
            to: admin.email,
            name: admin.name,
            resetUrl
        });
        return res.status(200).json({
            success: true,
            message: "If an admin account exists, a reset link has been sent."
        });
    } catch (error) {
        console.error("Admin forgot password error:", error);
        return res.status(500).json({
            error: "Unable to process request."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7053], () => (__webpack_exec__(5549)));
module.exports = __webpack_exports__;

})();