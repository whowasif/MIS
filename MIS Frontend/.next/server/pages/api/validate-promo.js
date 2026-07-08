"use strict";
(() => {
var exports = {};
exports.id = 5947;
exports.ids = [5947,6548,8930];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

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

/***/ 9810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6548);

async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    const { code , subtotal  } = req.body || {};
    if (!code) {
        return res.status(400).json({
            error: "Promo code is required."
        });
    }
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
        const [rows] = await db.execute("SELECT * FROM promo_codes WHERE UPPER(code) = UPPER(?) AND is_active = 1 LIMIT 1", [
            String(code).trim()
        ]);
        if (!rows.length) {
            return res.status(404).json({
                valid: false,
                error: "Invalid promo code."
            });
        }
        const promo = rows[0];
        const now = new Date();
        // Check validity period
        if (promo.valid_from && new Date(promo.valid_from) > now) {
            return res.status(400).json({
                valid: false,
                error: "This promo code is not yet active."
            });
        }
        if (promo.valid_until && new Date(promo.valid_until) < now) {
            return res.status(400).json({
                valid: false,
                error: "This promo code has expired."
            });
        }
        // Check usage limit
        if (promo.max_uses > 0 && promo.used_count >= promo.max_uses) {
            return res.status(400).json({
                valid: false,
                error: "This promo code has been fully redeemed."
            });
        }
        // Check minimum order amount
        const orderSubtotal = Number(subtotal || 0);
        if (promo.min_order_amount > 0 && orderSubtotal < promo.min_order_amount) {
            return res.status(400).json({
                valid: false,
                error: `Minimum order of ৳${promo.min_order_amount} required for this code.`
            });
        }
        // Calculate discount
        let discountAmount = 0;
        if (promo.discount_type === "percentage") {
            discountAmount = Math.round(orderSubtotal * promo.discount_value / 100 * 100) / 100;
        } else {
            discountAmount = Number(promo.discount_value);
        }
        return res.status(200).json({
            valid: true,
            code: promo.code,
            discountType: promo.discount_type,
            discountValue: Number(promo.discount_value),
            discountAmount,
            description: promo.description
        });
    } catch (error) {
        return res.status(500).json({
            error: "Failed to validate promo code."
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
var __webpack_exports__ = (__webpack_exec__(9810));
module.exports = __webpack_exports__;

})();