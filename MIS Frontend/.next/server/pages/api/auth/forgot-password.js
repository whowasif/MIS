"use strict";
(() => {
var exports = {};
exports.id = 6048;
exports.ids = [6048];
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

/***/ 518:
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
    const email = String(req.body?.email || "").trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            error: "Valid email address is required."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
        // Find customer
        const [customers] = await db.execute("SELECT id, full_name, email FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
            email
        ]);
        // Always return success to prevent email enumeration
        if (!customers.length) {
            return res.status(200).json({
                success: true,
                message: "If an account exists with this email, a reset link has been sent."
            });
        }
        const customer = customers[0];
        // Generate token
        const token = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
        ;
        // Invalidate any existing tokens
        await db.execute("UPDATE password_reset_tokens SET used = 1 WHERE customer_id = ? AND used = 0", [
            customer.id
        ]);
        // Store token
        await db.execute("INSERT INTO password_reset_tokens (customer_id, token, expires_at) VALUES (?, ?, ?)", [
            customer.id,
            token,
            expiresAt
        ]);
        // Build reset URL
        const baseUrl = process.env.NEXTAUTH_URL || "https://missolution.com.bd";
        const resetUrl = `${baseUrl}/auth/reset-password?token=${token}`;
        // Send email
        await (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendPasswordResetEmail */ .LS)({
            to: customer.email,
            name: customer.full_name,
            resetUrl
        });
        return res.status(200).json({
            success: true,
            message: "If an account exists with this email, a reset link has been sent."
        });
    } catch (error) {
        console.error("Forgot password error:", error);
        return res.status(500).json({
            error: "Unable to process request. Please try again."
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
var __webpack_exports__ = __webpack_require__.X(0, [7053], () => (__webpack_exec__(518)));
module.exports = __webpack_exports__;

})();