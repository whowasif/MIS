"use strict";
(() => {
var exports = {};
exports.id = 2012;
exports.ids = [2012];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7942);


async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]);
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const email = String(req.body?.email || "").trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            error: "A valid email address is required."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
        // Check if already subscribed
        const [existing] = await db.execute("SELECT id FROM newsletter_subscribers WHERE email = ? LIMIT 1", [
            email
        ]);
        if (existing.length > 0) {
            return res.status(200).json({
                success: true,
                message: "You are already subscribed!"
            });
        }
        const [subResult] = await db.execute("INSERT INTO newsletter_subscribers (email, subscribed_at) VALUES (?, NOW())", [
            email
        ]);
        // Notify (all admins): a new newsletter subscriber.
        (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .createNotification */ .sc)({
            type: "new_subscriber",
            title: "New newsletter subscriber",
            message: email,
            resource: "newsletter_subscribers",
            resourceId: subResult?.insertId || null,
            minRoleRank: _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .VISIBILITY.ALL_ADMINS */ .ix.ALL_ADMINS
        }).catch(()=>{});
        return res.status(201).json({
            success: true,
            message: "Subscribed successfully!"
        });
    } catch (error) {
        console.error("Newsletter subscribe error:", error);
        return res.status(500).json({
            error: "Unable to subscribe. Please try again later."
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
var __webpack_exports__ = __webpack_require__.X(0, [7942], () => (__webpack_exec__(695)));
module.exports = __webpack_exports__;

})();