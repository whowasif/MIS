"use strict";
(() => {
var exports = {};
exports.id = 8480;
exports.ids = [8480];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 8467:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__]);
_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// GET  /api/admin/notifications            -> { success, notifications, unread }
// GET  /api/admin/notifications?count=1    -> { success, unread }   (lightweight poll)
// POST /api/admin/notifications  { ids?: number[] }  -> mark seen (this admin only)
async function handler(req, res) {
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__/* .requireAdminApiAuth */ .W)(req);
    if (!auth.ok) return res.status(auth.status).json({
        success: false,
        error: auth.error
    });
    const adminId = auth.payload?.sub;
    const role = auth.role;
    if (req.method === "GET") {
        try {
            if (req.query.count) {
                const unread = await (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .countUnreadForAdmin */ .hZ)({
                    adminId,
                    role
                });
                return res.status(200).json({
                    success: true,
                    unread
                });
            }
            const notifications = await (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .listNotificationsForAdmin */ .XW)({
                adminId,
                role,
                limit: 30
            });
            const unread1 = notifications.filter((n)=>!n.is_read).length;
            return res.status(200).json({
                success: true,
                notifications,
                unread: unread1
            });
        } catch (e) {
            return res.status(500).json({
                success: false,
                error: "Failed to load notifications."
            });
        }
    }
    if (req.method === "POST") {
        try {
            const ids = Array.isArray(req.body?.ids) ? req.body.ids : null;
            await (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .markNotificationsSeen */ .eK)({
                adminId,
                role,
                ids
            });
            const unread2 = await (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .countUnreadForAdmin */ .hZ)({
                adminId,
                role
            });
            return res.status(200).json({
                success: true,
                unread: unread2
            });
        } catch (e1) {
            return res.status(500).json({
                success: false,
                error: "Failed to update notifications."
            });
        }
    }
    return res.status(405).json({
        success: false,
        error: "Method not allowed"
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [9563,322,7942], () => (__webpack_exec__(8467)));
module.exports = __webpack_exports__;

})();