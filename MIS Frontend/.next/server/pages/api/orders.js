"use strict";
(() => {
var exports = {};
exports.id = 7722;
exports.ids = [7722];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7185:
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
    const { customer , items , paymentMethod , deliveryZone , deliveryCharge: clientDeliveryCharge , promoCode , promoDiscount  } = req.body || {};
    if (!customer || !items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
            error: "Missing customer info or items."
        });
    }
    const fullName = String(customer.fullName || "").trim();
    const email = String(customer.email || "").trim();
    const phone = String(customer.phone || "").trim();
    const address = String(customer.address || "").trim();
    if (!fullName || !email || !phone || !address) {
        return res.status(400).json({
            error: "All customer fields are required."
        });
    }
    const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_0__/* .getDbPool */ .z)();
    let connection;
    try {
        connection = await db.getConnection();
        await connection.beginTransaction();
        // 1. Find or create customer
        const [existingCustomers] = await connection.execute("SELECT id FROM customers WHERE email = ? LIMIT 1", [
            email
        ]);
        let customerId;
        if (existingCustomers.length > 0) {
            customerId = existingCustomers[0].id;
            // Update customer info
            await connection.execute("UPDATE customers SET full_name = ?, phone_number = ?, shipping_address = ? WHERE id = ?", [
                fullName,
                phone,
                address,
                customerId
            ]);
        } else {
            const [insertResult] = await connection.execute("INSERT INTO customers (full_name, email, phone_number, shipping_address, password_hash) VALUES (?, ?, ?, ?, ?)", [
                fullName,
                email,
                phone,
                address,
                ""
            ]);
            customerId = insertResult.insertId;
        }
        // 2. Calculate total
        const subtotal = items.reduce((sum, item)=>sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
        // 3. Delivery charge from selected zone
        const deliveryCharge = Number(clientDeliveryCharge || process.env.DEFAULT_DELIVERY_CHARGE || 100);
        const discountAmt = Number(promoDiscount || 0);
        const totalAmount = Math.max(0, subtotal + deliveryCharge - discountAmt);
        // 4. Generate unique order number
        const orderNo = `MIS-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
        // 5. Insert order
        const [orderResult] = await connection.execute(`INSERT INTO orders (order_no, customer_id, total_amount, delivery_charge, discount_amount, shipping_address, status, payment_method, promo_code, delivery_zone)
       VALUES (?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)`, [
            orderNo,
            customerId,
            totalAmount,
            deliveryCharge,
            discountAmt,
            address,
            String(paymentMethod || "Not specified"),
            String(promoCode || ""),
            String(deliveryZone || "")
        ]);
        const orderId = orderResult.insertId;
        // 6. Increment promo usage if used
        if (promoCode) {
            await connection.execute("UPDATE promo_codes SET used_count = used_count + 1 WHERE UPPER(code) = UPPER(?)", [
                promoCode
            ]);
        }
        // 6. Insert order items
        for (const item of items){
            const productId = item.productId || null;
            const productName = String(item.name || "").trim() || null;
            const quantity = Number(item.quantity || 1);
            const priceAtPurchase = Number(item.price || 0);
            await connection.execute(`INSERT INTO order_items (order_id, product_id, product_name, quantity, price_at_purchase)
         VALUES (?, ?, ?, ?, ?)`, [
                orderId,
                productId,
                productName,
                quantity,
                priceAtPurchase
            ]);
        }
        await connection.commit();
        // Notify (super admin only): a new order was placed.
        (0,_lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .createNotification */ .sc)({
            type: "new_order",
            title: "New order placed",
            message: `Order ${orderNo} — ${new Intl.NumberFormat("en-BD").format(Number(totalAmount || 0))} BDT`,
            resource: "orders",
            resourceId: orderId,
            minRoleRank: _lib_server_notifications__WEBPACK_IMPORTED_MODULE_1__/* .VISIBILITY.SUPER_ONLY */ .ix.SUPER_ONLY
        }).catch(()=>{});
        // Confirmation to customer + alert to sales (fire-and-forget).
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendOrderConfirmationEmail */ .bn)({
                to: email,
                name: fullName,
                orderNo,
                totalAmount,
                items: items.map((it)=>({
                        name: it.name,
                        quantity: it.quantity,
                        price: it.price
                    }))
            }), "order confirmation");
        (0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .safeSend */ .iV)(()=>(0,_lib_server_mailer__WEBPACK_IMPORTED_MODULE_2__/* .sendOrderAlertToAdmin */ .cg)({
                orderNo,
                customerName: fullName,
                email,
                totalAmount
            }), "order alert");
        return res.status(201).json({
            success: true,
            orderId,
            message: "Order placed successfully."
        });
    } catch (error) {
        if (connection) {
            await connection.rollback();
        }
        console.error("Order placement error:", error);
        return res.status(500).json({
            error: "Unable to place order. Please try again."
        });
    } finally{
        if (connection) {
            connection.release();
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7053,7942], () => (__webpack_exec__(7185)));
module.exports = __webpack_exports__;

})();