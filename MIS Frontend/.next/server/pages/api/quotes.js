"use strict";
(() => {
var exports = {};
exports.id = 5605;
exports.ids = [5605];
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

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7942);
/* harmony import */ var _lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5333);



async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const { clientName , companyName , email , projectType , requirements  } = req.body || {};
    if (!clientName || !email || !requirements) {
        return res.status(400).json({
            error: "Client name, email, and requirements are required."
        });
    }
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    try {
        const [result] = await db.execute(`INSERT INTO quotes (client_name, company_name, email, project_type, requirements_text, status)
       VALUES (?, ?, ?, ?, ?, 'new')`, [
            String(clientName).trim(),
            String(companyName || "").trim(),
            String(email).trim(),
            String(projectType || "").trim(),
            String(requirements).trim(), 
        ]);
        // Notify (super admin only): a new quotation request arrived.
        (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .createNotification */ .sc)({
            type: "new_quote",
            title: "New quotation request",
            message: `${String(clientName).trim()}${companyName ? ` (${String(companyName).trim()})` : ""} — ${String(projectType || "general").trim()}`,
            resource: "quotes",
            resourceId: result.insertId,
            minRoleRank: _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .VISIBILITY.SUPER_ONLY */ .ix.SUPER_ONLY
        }).catch(()=>{});
        // Confirmation to client + alert to sales (fire-and-forget).
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendQuoteReceivedEmail */ .ZZ)({
                to: String(email).trim(),
                name: String(clientName).trim()
            }), "quote confirmation");
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendQuoteAlertToAdmin */ .F7)({
                clientName: String(clientName).trim(),
                companyName: String(companyName || "").trim(),
                email: String(email).trim(),
                projectType: String(projectType || "").trim(),
                requirements: String(requirements).trim()
            }), "quote alert");
        return res.status(201).json({
            success: true,
            quoteId: result.insertId,
            message: "Quote request submitted successfully."
        });
    } catch (error) {
        console.error("Quote submission error:", error);
        return res.status(500).json({
            error: "Unable to submit quote request. Please try again."
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7053,7942], () => (__webpack_exec__(6309)));
module.exports = __webpack_exports__;

})();