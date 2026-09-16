"use strict";
(() => {
var exports = {};
exports.id = 2807;
exports.ids = [2807,6548,8930];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 1033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__]);
_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Manages the manually-curated filter option values for a category's spec field.
// GET  /api/admin/spec-options?category_id=1[&spec_name=processor-brand]
//   -> { success, options: { [spec_name]: string[] } }   (grouped, deduped, ordered)
// POST /api/admin/spec-options  { category_id, spec_name, option_value }
//   -> inserts the value (ignored if it already exists for that category+spec)
async function handler(req, res) {
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_1__/* .requireAdminApiAuth */ .W)(req);
    if (!auth.ok) return res.status(auth.status).json({
        error: auth.error
    });
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    if (req.method === "GET") {
        const categoryId = req.query.category_id;
        if (!categoryId) return res.status(400).json({
            error: "category_id required"
        });
        const specName = req.query.spec_name;
        try {
            let rows;
            if (specName) {
                ;
                [rows] = await db.execute("SELECT spec_name, option_value FROM spec_filter_options WHERE category_id = ? AND spec_name = ? ORDER BY display_order ASC, option_value ASC", [
                    categoryId,
                    specName
                ]);
            } else {
                ;
                [rows] = await db.execute("SELECT spec_name, option_value FROM spec_filter_options WHERE category_id = ? ORDER BY spec_name ASC, display_order ASC, option_value ASC", [
                    categoryId
                ]);
            }
            const options = {};
            rows.forEach((r)=>{
                if (!options[r.spec_name]) options[r.spec_name] = [];
                if (!options[r.spec_name].includes(r.option_value)) options[r.spec_name].push(r.option_value);
            });
            return res.status(200).json({
                success: true,
                options
            });
        } catch (e) {
            return res.status(500).json({
                error: "Failed to load spec options."
            });
        }
    }
    if (req.method === "POST") {
        const { category_id: categoryId1 , spec_name: specName1  } = req.body || {};
        const optionValue = typeof req.body?.option_value === "string" ? req.body.option_value.trim() : "";
        if (!categoryId1 || !specName1 || !optionValue) {
            return res.status(400).json({
                error: "category_id, spec_name and option_value are required"
            });
        }
        if (optionValue.length > 255) {
            return res.status(400).json({
                error: "option_value too long (max 255)"
            });
        }
        try {
            // Unique key (category_id, spec_name, option_value) makes this idempotent.
            await db.execute("INSERT IGNORE INTO spec_filter_options (category_id, spec_name, option_value) VALUES (?, ?, ?)", [
                categoryId1,
                specName1,
                optionValue
            ]);
            return res.status(200).json({
                success: true
            });
        } catch (e1) {
            return res.status(500).json({
                error: "Failed to save spec option."
            });
        }
    }
    if (req.method === "DELETE") {
        const { category_id: categoryId2 , spec_name: specName2 , option_value: optionValue1  } = req.body || {};
        if (!categoryId2 || !specName2 || !optionValue1) {
            return res.status(400).json({
                error: "category_id, spec_name and option_value are required"
            });
        }
        try {
            await db.execute("DELETE FROM spec_filter_options WHERE category_id = ? AND spec_name = ? AND option_value = ?", [
                categoryId2,
                specName2,
                optionValue1
            ]);
            return res.status(200).json({
                success: true
            });
        } catch (e2) {
            return res.status(500).json({
                error: "Failed to delete spec option."
            });
        }
    }
    return res.status(405).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [9563,322], () => (__webpack_exec__(1033)));
module.exports = __webpack_exports__;

})();