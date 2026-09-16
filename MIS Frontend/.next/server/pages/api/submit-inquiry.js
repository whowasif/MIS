"use strict";
(() => {
var exports = {};
exports.id = 7471;
exports.ids = [7471];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_mailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5333);


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    // Handle both JSON body and form-encoded body
    const body = req.body || {};
    const clientName = String(body["full-name"] || body.fullName || "").trim();
    const email = String(body["email-address"] || body.email || "").trim();
    const serviceType = String(body["service-type"] || body.service || body.serviceType || "").trim();
    const message = String(body.message || body.requirements || "").trim();
    if (!clientName || !email || !message) {
        // Redirect back with error for form submissions
        return res.redirect(302, "/contact?status=error");
    }
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    try {
        await db.execute(`INSERT INTO quotes (client_name, company_name, email, project_type, requirements_text, status)
       VALUES (?, ?, ?, ?, ?, 'new')`, [
            clientName,
            "",
            email,
            serviceType || "General Inquiry",
            message
        ]);
        // Confirmation to client + alert to sales (fire-and-forget).
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_1__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_1__/* .sendQuoteReceivedEmail */ .ZZ)({
                to: email,
                name: clientName
            }), "inquiry confirmation");
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_1__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_1__/* .sendQuoteAlertToAdmin */ .F7)({
                clientName,
                companyName: "",
                email,
                projectType: serviceType || "General Inquiry",
                requirements: message
            }), "inquiry alert");
        // Redirect back to contact page with success
        return res.redirect(302, "/contact?status=success");
    } catch (error) {
        console.error("Inquiry submission error:", error);
        return res.redirect(302, "/contact?status=error");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7053], () => (__webpack_exec__(3200)));
module.exports = __webpack_exports__;

})();