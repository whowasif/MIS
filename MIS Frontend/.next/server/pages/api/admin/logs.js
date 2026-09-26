"use strict";
(() => {
var exports = {};
exports.id = 9825;
exports.ids = [9825];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__]);
_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_0__/* .requireAdminApiAuth */ .W)(req, {
        resource: "logs"
    });
    if (!auth.ok) {
        return res.status(auth.status).json({
            success: false,
            error: auth.error
        });
    }
    try {
        const { type ="visitor" , limit =100 , offset =0 , eventType , days =7 , adminEmail , action , resource , resourceId , dateFrom , dateTo  } = req.query;
        if (type === "admin") {
            // Only super_admin can view admin activity logs
            if (auth.role !== "super_admin") {
                return res.status(403).json({
                    success: false,
                    error: "Only super admin can view admin activity logs."
                });
            }
            const { rows , total  } = await (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__/* .getAdminActivityLogsFiltered */ .th)({
                limit: Number(limit) || 50,
                offset: Number(offset) || 0,
                adminEmail: adminEmail || null,
                action: action || null,
                resource: resource || null,
                resourceId: resourceId || null,
                dateFrom: dateFrom || null,
                dateTo: dateTo || null
            });
            const options = await (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__/* .getAdminActivityFilterOptions */ .T0)();
            return res.status(200).json({
                success: true,
                logs: rows,
                total,
                options
            });
        }
        if (type === "stats") {
            const stats = await (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__/* .getVisitorStats */ .aH)(Number(days));
            return res.status(200).json({
                success: true,
                stats
            });
        }
        // Default: visitor logs (paginated)
        const { rows: visitorRows , total: visitorTotal  } = await (0,_lib_server_activity_log__WEBPACK_IMPORTED_MODULE_1__/* .getVisitorLogsPaged */ .u_)(Number(limit) || 50, Number(offset) || 0, eventType || null);
        return res.status(200).json({
            success: true,
            logs: visitorRows,
            total: visitorTotal
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            error: "Failed to fetch logs",
            details:  false ? 0 : undefined
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
var __webpack_exports__ = __webpack_require__.X(0, [9563,322,174], () => (__webpack_exec__(921)));
module.exports = __webpack_exports__;

})();