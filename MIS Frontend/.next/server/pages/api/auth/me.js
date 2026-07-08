"use strict";
(() => {
var exports = {};
exports.id = 9661;
exports.ids = [9661];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6548);


async function handler(req, res) {
    // Use JWT token directly — more reliable than getSession in API routes
    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req,
        secret: process.env.NEXTAUTH_SECRET
    });
    if (!token?.email) {
        return res.status(401).json({
            error: "Not authenticated"
        });
    }
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_1__/* .getDbPool */ .z)();
    const email = token.email.toLowerCase();
    if (req.method === "GET") {
        const [rows] = await db.execute("SELECT id, full_name, email, phone_number, division, district, shipping_address, profile_image, created_at FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
            email
        ]);
        if (!rows.length) return res.status(404).json({
            error: "Customer not found"
        });
        return res.json({
            success: true,
            customer: rows[0]
        });
    }
    if (req.method === "PUT") {
        const { full_name , phone_number , division , district , shipping_address  } = req.body || {};
        const [result] = await db.execute("UPDATE customers SET full_name = ?, phone_number = ?, division = ?, district = ?, shipping_address = ? WHERE email = ? AND deleted_at IS NULL", [
            full_name || "",
            phone_number || "",
            division || "",
            district || "",
            shipping_address || "",
            email
        ]);
        return res.json({
            success: true,
            affected: result.affectedRows
        });
    }
    res.setHeader("Allow", [
        "GET",
        "PUT"
    ]);
    return res.status(405).json({
        error: "Method not allowed"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8930], () => (__webpack_exec__(1483)));
module.exports = __webpack_exports__;

})();