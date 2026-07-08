"use strict";
(() => {
var exports = {};
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 9664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6548);


async function handler(req, res) {
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
    // Get customer ID
    const [customers] = await db.execute("SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
        token.email.toLowerCase()
    ]);
    if (!customers.length) {
        return res.status(404).json({
            error: "Customer not found"
        });
    }
    const customerId = customers[0].id;
    // GET - fetch saved cart
    if (req.method === "GET") {
        try {
            const [items] = await db.execute("SELECT product_slug, product_name, product_image, product_id, price, quantity FROM customer_cart WHERE customer_id = ? ORDER BY created_at ASC", [
                customerId
            ]);
            const cart = items.map((item)=>({
                    id: item.product_slug,
                    productId: item.product_id,
                    name: item.product_name,
                    image: item.product_image || "",
                    price: Number(item.price),
                    quantity: Number(item.quantity)
                }));
            return res.status(200).json({
                cart
            });
        } catch (e) {
            return res.status(500).json({
                error: "Failed to load cart."
            });
        }
    }
    // PUT - save/sync entire cart
    if (req.method === "PUT") {
        const { items: items1  } = req.body || {};
        if (!Array.isArray(items1)) {
            return res.status(400).json({
                error: "Items array required."
            });
        }
        try {
            // Clear existing cart
            await db.execute("DELETE FROM customer_cart WHERE customer_id = ?", [
                customerId
            ]);
            // Insert new items
            for (const item of items1){
                if (!item.id || !item.name) continue;
                await db.execute(`INSERT INTO customer_cart (customer_id, product_slug, product_name, product_image, product_id, price, quantity)
           VALUES (?, ?, ?, ?, ?, ?, ?)`, [
                    customerId,
                    String(item.id),
                    String(item.name),
                    String(item.image || ""),
                    item.productId || null,
                    Number(item.price || 0),
                    Number(item.quantity || 1), 
                ]);
            }
            return res.status(200).json({
                success: true
            });
        } catch (e1) {
            return res.status(500).json({
                error: "Failed to save cart."
            });
        }
    }
    return res.status(405).json({
        error: "Method not allowed"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8930], () => (__webpack_exec__(9664)));
module.exports = __webpack_exports__;

})();