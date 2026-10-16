"use strict";
(() => {
var exports = {};
exports.id = 7637;
exports.ids = [7637,7174,2984];
exports.modules = {

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDbPool": () => (/* binding */ getDbPool)
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

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2984);






const STATUS_OPTIONS = [
    "pending",
    "paid",
    "shipped",
    "cancelled"
];
const statusColors = {
    pending: {
        bg: "#fef3c7",
        color: "#92400e"
    },
    paid: {
        bg: "#d1fae5",
        color: "#065f46"
    },
    shipped: {
        bg: "#dbeafe",
        color: "#1e40af"
    },
    cancelled: {
        bg: "#fee2e2",
        color: "#991b1b"
    }
};
const formatCurrency = (v)=>`৳${Number(v || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const formatDate = (d)=>d ? new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }) : "—";
const OrdersPage = ({ initialOrders =[]  })=>{
    const { 0: orders , 1: setOrders  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialOrders);
    const { 0: selectedOrder , 1: setSelectedOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: orderItems , 1: setOrderItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: updatingId , 1: setUpdatingId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: statusFilter , 1: setStatusFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const printRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const filteredOrders = statusFilter ? orders.filter((o)=>o.status === statusFilter) : orders;
    const viewOrder = async (order)=>{
        setSelectedOrder(order);
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/orders/${order.id}/items`);
            const data = await res.json();
            setOrderItems(data.items || []);
        } catch (e) {
            setOrderItems([]);
        } finally{
            setLoading(false);
        }
    };
    const closeDetail = ()=>{
        setSelectedOrder(null);
        setOrderItems([]);
    };
    const updateStatus = async (orderId, newStatus)=>{
        setUpdatingId(orderId);
        try {
            await fetch(`/api/admin/orders/${orderId}/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            setOrders((prev)=>prev.map((o)=>o.id === orderId ? {
                        ...o,
                        status: newStatus
                    } : o));
            if (selectedOrder?.id === orderId) {
                setSelectedOrder((prev)=>({
                        ...prev,
                        status: newStatus
                    }));
            }
        } catch (e) {
            console.error("Status update failed", e);
        } finally{
            setUpdatingId(null);
        }
    };
    const handlePrint = ()=>{
        const content = printRef.current;
        if (!content) return;
        const win = window.open("", "_blank");
        win.document.write(`
      <html>
        <head>
          <title>${selectedOrder.order_no || "Order #" + selectedOrder.id} - MIS Solution</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1f2937; }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
            .brand-block { display: flex; align-items: center; gap: 14px; }
            .invoice-logo { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
            .brand { font-size: 22px; font-weight: 800; color: #4f46e5; }
            .order-id { font-size: 14px; color: #6b7280; margin-top: 4px; }
            .invoice-title { font-size: 28px; font-weight: 700; text-align: right; }
            .invoice-date { font-size: 13px; color: #6b7280; text-align: right; margin-top: 4px; }
            .section { margin-bottom: 24px; }
            .section h3 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; margin-bottom: 8px; font-weight: 700; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px; }
            .info-block p { font-size: 14px; line-height: 1.6; }
            .info-block strong { display: block; font-size: 15px; margin-bottom: 2px; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; }
            th { text-align: left; padding: 10px 12px; background: #f9fafb; font-size: 12px; text-transform: uppercase; color: #374151; border-bottom: 2px solid #e5e7eb; }
            td { padding: 10px 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
            .text-right { text-align: right; }
            .total-row td { font-weight: 700; font-size: 16px; border-top: 2px solid #e5e7eb; padding-top: 12px; }
            .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
            .status { display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
          <div class="footer">MIS Solution — Generated on ${new Date().toLocaleString()}</div>
        </body>
      </html>
    `);
        win.document.close();
        win.print();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-9dba7d7dd5281648",
                    children: "Orders | Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-9dba7d7dd5281648" + " " + "orders-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "jsx-9dba7d7dd5281648" + " " + "page-header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-9dba7d7dd5281648",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Orders"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "jsx-9dba7d7dd5281648",
                                        children: [
                                            filteredOrders.length,
                                            " of ",
                                            orders.length,
                                            " orders"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "jsx-9dba7d7dd5281648" + " " + "status-filter",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "All Status"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "pending",
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Pending"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "paid",
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Paid"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shipped",
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Shipped"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "cancelled",
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Cancelled"
                                    })
                                ]
                            })
                        ]
                    }),
                    !selectedOrder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-9dba7d7dd5281648" + " " + "table-wrap",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "jsx-9dba7d7dd5281648" + " " + "orders-table",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    className: "jsx-9dba7d7dd5281648",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "jsx-9dba7d7dd5281648",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "#"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "Customer"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "Total"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "Payment"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: "Date"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-9dba7d7dd5281648"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                    className: "jsx-9dba7d7dd5281648",
                                    children: [
                                        orders.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                            className: "jsx-9dba7d7dd5281648",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                colSpan: "7",
                                                className: "jsx-9dba7d7dd5281648" + " " + "empty",
                                                children: "No orders yet."
                                            })
                                        }),
                                        filteredOrders.map((order)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "id-col",
                                                        children: order.order_no || `#${order.id}`
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                className: "jsx-9dba7d7dd5281648",
                                                                children: order.customer_name || "—"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "sub",
                                                                children: order.customer_email || ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "mono",
                                                        children: formatCurrency(order.total_amount)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: order.payment_method || "—"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                            value: order.status,
                                                            disabled: updatingId === order.id,
                                                            onChange: (e)=>updateStatus(order.id, e.target.value),
                                                            style: {
                                                                background: statusColors[order.status]?.bg,
                                                                color: statusColors[order.status]?.color
                                                            },
                                                            className: "jsx-9dba7d7dd5281648" + " " + "status-pill",
                                                            children: STATUS_OPTIONS.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: s,
                                                                    className: "jsx-9dba7d7dd5281648",
                                                                    children: s.charAt(0).toUpperCase() + s.slice(1)
                                                                }, s))
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "sub",
                                                        children: formatDate(order.created_at)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>viewOrder(order),
                                                            className: "jsx-9dba7d7dd5281648" + " " + "view-btn",
                                                            children: "View"
                                                        })
                                                    })
                                                ]
                                            }, order.id))
                                    ]
                                })
                            ]
                        })
                    }),
                    selectedOrder && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-9dba7d7dd5281648" + " " + "detail-view",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-9dba7d7dd5281648" + " " + "detail-toolbar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: closeDetail,
                                        className: "jsx-9dba7d7dd5281648" + " " + "back-btn",
                                        children: "← Back to Orders"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: handlePrint,
                                        className: "jsx-9dba7d7dd5281648" + " " + "print-btn",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-9dba7d7dd5281648",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "6 9 6 2 18 2 18 9",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                        x: "6",
                                                        y: "14",
                                                        width: "12",
                                                        height: "8",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    })
                                                ]
                                            }),
                                            "Print Invoice"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                ref: printRef,
                                className: "jsx-9dba7d7dd5281648" + " " + "invoice-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "header",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "brand-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/footer%20logo.png",
                                                        alt: "MIS Solution",
                                                        className: "jsx-9dba7d7dd5281648" + " " + "invoice-logo"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "brand",
                                                                children: "MIS Solution"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "order-id",
                                                                children: selectedOrder.order_no || `Order #${selectedOrder.id}`
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "header-right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "invoice-title",
                                                        children: "Invoice"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "invoice-date",
                                                        children: formatDate(selectedOrder.created_at)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "info-grid",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "info-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "section",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Customer"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: selectedOrder.customer_name || "—"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: selectedOrder.customer_email || "—"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "info-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "section",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Shipping Address"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: selectedOrder.shipping_address || "Not provided"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "info-grid",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "info-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "section",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Payment Method"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: selectedOrder.payment_method || "—"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "info-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "section",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Status"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        style: {
                                                            background: statusColors[selectedOrder.status]?.bg,
                                                            color: statusColors[selectedOrder.status]?.color
                                                        },
                                                        className: "jsx-9dba7d7dd5281648" + " " + "status",
                                                        children: selectedOrder.status?.charAt(0).toUpperCase() + selectedOrder.status?.slice(1)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "section",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-9dba7d7dd5281648",
                                            children: "Order Items"
                                        })
                                    }),
                                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "loading-text",
                                        children: "Loading items..."
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "items-table",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    className: "jsx-9dba7d7dd5281648",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Product"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: "Qty"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                            children: "Unit Price"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                            children: "Subtotal"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                className: "jsx-9dba7d7dd5281648",
                                                children: [
                                                    orderItems.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                            colSpan: "4",
                                                            className: "jsx-9dba7d7dd5281648" + " " + "empty",
                                                            children: "No items recorded for this order."
                                                        })
                                                    }),
                                                    orderItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            className: "jsx-9dba7d7dd5281648",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "jsx-9dba7d7dd5281648",
                                                                    children: item.product_name || "Unknown Product"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "jsx-9dba7d7dd5281648",
                                                                    children: item.quantity
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                    children: formatCurrency(item.price_at_purchase)
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                    children: formatCurrency(item.price_at_purchase * item.quantity)
                                                                })
                                                            ]
                                                        }, item.id)),
                                                    selectedOrder.discount_percent > 0 || selectedOrder.discount_amount > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "discount-row",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                colSpan: "3",
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                children: [
                                                                    "Discount ",
                                                                    selectedOrder.discount_percent > 0 ? `(${selectedOrder.discount_percent}%)` : ""
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right discount-val",
                                                                children: [
                                                                    "-",
                                                                    formatCurrency(selectedOrder.discount_amount || selectedOrder.total_amount * selectedOrder.discount_percent / 100)
                                                                ]
                                                            })
                                                        ]
                                                    }) : null,
                                                    Number(selectedOrder.delivery_charge) > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                colSpan: "3",
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                children: "Delivery Charge"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                children: formatCurrency(selectedOrder.delivery_charge)
                                                            })
                                                        ]
                                                    }) : null,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "jsx-9dba7d7dd5281648" + " " + "total-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                colSpan: "3",
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                children: "Grand Total"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-9dba7d7dd5281648" + " " + "text-right",
                                                                children: formatCurrency(Number(selectedOrder.total_amount) - Number(selectedOrder.discount_amount || 0))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-9dba7d7dd5281648" + " " + "discount-editor",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "jsx-9dba7d7dd5281648",
                                        children: "Adjust Pricing"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-9dba7d7dd5281648" + " " + "discount-fields",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "discount-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: "Discount %"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        min: "0",
                                                        max: "100",
                                                        step: "0.01",
                                                        defaultValue: selectedOrder.discount_percent || 0,
                                                        id: "discountPercent",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "discount-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: "Discount Amount (৳)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "0.01",
                                                        defaultValue: selectedOrder.discount_amount || 0,
                                                        id: "discountAmount",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-9dba7d7dd5281648" + " " + "discount-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "jsx-9dba7d7dd5281648",
                                                        children: "Delivery Charge (৳)"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "0.01",
                                                        defaultValue: selectedOrder.delivery_charge || 0,
                                                        id: "deliveryCharge",
                                                        className: "jsx-9dba7d7dd5281648"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: async ()=>{
                                                    const pct = Number(document.getElementById("discountPercent").value) || 0;
                                                    const amt = Number(document.getElementById("discountAmount").value) || 0;
                                                    const delivery = Number(document.getElementById("deliveryCharge").value) || 0;
                                                    try {
                                                        await fetch(`/api/admin/orders/${selectedOrder.id}/discount`, {
                                                            method: "PUT",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            body: JSON.stringify({
                                                                discountPercent: pct,
                                                                discountAmount: amt,
                                                                deliveryCharge: delivery
                                                            })
                                                        });
                                                        setSelectedOrder((prev)=>({
                                                                ...prev,
                                                                discount_percent: pct,
                                                                discount_amount: amt,
                                                                delivery_charge: delivery
                                                            }));
                                                        setOrders((prev)=>prev.map((o)=>o.id === selectedOrder.id ? {
                                                                    ...o,
                                                                    discount_percent: pct,
                                                                    discount_amount: amt,
                                                                    delivery_charge: delivery
                                                                } : o));
                                                    } catch (e) {
                                                        console.error(e);
                                                    }
                                                },
                                                className: "jsx-9dba7d7dd5281648" + " " + "save-discount-btn",
                                                children: "Save Changes"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "9dba7d7dd5281648",
                children: ".orders-page.jsx-9dba7d7dd5281648{display:grid;gap:20px}.page-header.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.page-header.jsx-9dba7d7dd5281648 h1.jsx-9dba7d7dd5281648{margin:0;font-size:24px;color:#1f2937}.page-header.jsx-9dba7d7dd5281648 p.jsx-9dba7d7dd5281648{margin:4px 0 0;color:#6b7280;font-size:14px}.status-filter.jsx-9dba7d7dd5281648{padding:9px 14px;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fafbff;font:inherit;font-size:14px;cursor:pointer}.status-filter.jsx-9dba7d7dd5281648:focus{outline:none;border-color:#6366f1}.table-wrap.jsx-9dba7d7dd5281648{overflow-x:auto;border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff}.orders-table.jsx-9dba7d7dd5281648{width:100%;border-collapse:collapse;font-size:14px}.orders-table.jsx-9dba7d7dd5281648 thead.jsx-9dba7d7dd5281648 th.jsx-9dba7d7dd5281648{text-align:left;padding:12px 16px;background:#f9fafb;color:#374151;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.04em;border-bottom:1px solid#e5e7eb;white-space:nowrap}.orders-table.jsx-9dba7d7dd5281648 tbody.jsx-9dba7d7dd5281648 td.jsx-9dba7d7dd5281648{padding:14px 16px;border-bottom:1px solid#f3f4f6;vertical-align:middle}.orders-table.jsx-9dba7d7dd5281648 tbody.jsx-9dba7d7dd5281648 tr.jsx-9dba7d7dd5281648:hover{background:#f9fafb}.id-col.jsx-9dba7d7dd5281648{font-weight:700;color:#4338ca}.mono.jsx-9dba7d7dd5281648{font-weight:700}.sub.jsx-9dba7d7dd5281648{display:block;font-size:12px;color:#6b7280;margin-top:2px}.status-pill.jsx-9dba7d7dd5281648{border:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:5px 10px;font-weight:700;font-size:12px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none}.view-btn.jsx-9dba7d7dd5281648{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:6px 14px;background:#fff;color:#374151;font-size:13px;font-weight:600;cursor:pointer}.view-btn.jsx-9dba7d7dd5281648:hover{background:#f3f4f6}.empty.jsx-9dba7d7dd5281648{text-align:center;color:#9ca3af;padding:32px!important}.detail-view.jsx-9dba7d7dd5281648{display:grid;gap:16px}.detail-toolbar.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.back-btn.jsx-9dba7d7dd5281648{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 16px;background:#fff;font-size:13px;font-weight:600;cursor:pointer;color:#374151}.back-btn.jsx-9dba7d7dd5281648:hover{background:#f3f4f6}.print-btn.jsx-9dba7d7dd5281648{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 18px;background:#4f46e5;color:#fff;font-size:13px;font-weight:700;cursor:pointer}.print-btn.jsx-9dba7d7dd5281648:hover{background:#4338ca}.invoice-card.jsx-9dba7d7dd5281648{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;padding:32px}.header.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid#e5e7eb}.brand-block.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px}.invoice-logo.jsx-9dba7d7dd5281648{width:48px;height:48px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-o-object-fit:cover;object-fit:cover}.brand.jsx-9dba7d7dd5281648{font-size:20px;font-weight:800;color:#4f46e5}.order-id.jsx-9dba7d7dd5281648{font-size:13px;color:#6b7280;margin-top:4px}.header-right.jsx-9dba7d7dd5281648{text-align:right}.invoice-title.jsx-9dba7d7dd5281648{font-size:26px;font-weight:700;color:#111827}.invoice-date.jsx-9dba7d7dd5281648{font-size:13px;color:#6b7280;margin-top:4px}.info-grid.jsx-9dba7d7dd5281648{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}.info-block.jsx-9dba7d7dd5281648 p.jsx-9dba7d7dd5281648{font-size:14px;color:#374151;line-height:1.6;margin:0}.info-block.jsx-9dba7d7dd5281648 strong.jsx-9dba7d7dd5281648{display:block;margin-bottom:2px}.section.jsx-9dba7d7dd5281648 h3.jsx-9dba7d7dd5281648{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#6b7280;margin-bottom:8px;font-weight:700}.status.jsx-9dba7d7dd5281648{display:inline-block;padding:4px 12px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;font-size:12px;font-weight:700}.items-table.jsx-9dba7d7dd5281648{width:100%;border-collapse:collapse;margin-top:8px;font-size:14px}.items-table.jsx-9dba7d7dd5281648 thead.jsx-9dba7d7dd5281648 th.jsx-9dba7d7dd5281648{text-align:left;padding:10px 12px;background:#f9fafb;font-size:12px;text-transform:uppercase;color:#374151;font-weight:700;border-bottom:2px solid#e5e7eb}.items-table.jsx-9dba7d7dd5281648 td.jsx-9dba7d7dd5281648{padding:10px 12px;border-bottom:1px solid#f3f4f6}.text-right.jsx-9dba7d7dd5281648{text-align:right}.total-row.jsx-9dba7d7dd5281648 td.jsx-9dba7d7dd5281648{font-weight:700;font-size:15px;border-top:2px solid#e5e7eb;padding-top:14px}.loading-text.jsx-9dba7d7dd5281648{color:#6b7280;padding:16px 0}.discount-row.jsx-9dba7d7dd5281648 td.jsx-9dba7d7dd5281648{color:#dc2626}.discount-val.jsx-9dba7d7dd5281648{font-weight:600}.discount-editor.jsx-9dba7d7dd5281648{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;padding:20px;margin-top:16px}.discount-editor.jsx-9dba7d7dd5281648 h3.jsx-9dba7d7dd5281648{margin:0 0 14px;font-size:14px;color:#111827;font-weight:700}.discount-fields.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.discount-field.jsx-9dba7d7dd5281648{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.discount-field.jsx-9dba7d7dd5281648 label.jsx-9dba7d7dd5281648{font-size:12px;color:#6b7280;font-weight:600}.discount-field.jsx-9dba7d7dd5281648 input.jsx-9dba7d7dd5281648{width:140px;height:38px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:0 10px;font:inherit;font-size:14px}.discount-field.jsx-9dba7d7dd5281648 input.jsx-9dba7d7dd5281648:focus{outline:none;border-color:#4f46e5}.save-discount-btn.jsx-9dba7d7dd5281648{height:38px;padding:0 18px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#4f46e5;color:#fff;font-size:13px;font-weight:700;cursor:pointer}.save-discount-btn.jsx-9dba7d7dd5281648:hover{background:#4338ca}@media(max-width:768px){.invoice-card.jsx-9dba7d7dd5281648{padding:20px}.info-grid.jsx-9dba7d7dd5281648{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    try {
        const { verifyAdminSessionToken , ROLE_RESTRICTIONS  } = await __webpack_require__.e(/* import() */ 3164).then(__webpack_require__.bind(__webpack_require__, 3164));
        const cookieStr = req.headers?.cookie || "";
        const match = cookieStr.match(/mis_admin_session=([^;]+)/);
        if (match) {
            const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]));
            if (payload) {
                const restrictions = ROLE_RESTRICTIONS[payload.role] || [];
                if (restrictions.includes("orders")) {
                    return {
                        redirect: {
                            destination: "/portal-secure-99x",
                            permanent: false
                        }
                    };
                }
            }
        }
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_5__.getDbPool)();
        const [rows] = await db.query(`
      SELECT o.*, c.full_name AS customer_name, c.email AS customer_email
      FROM orders o
      LEFT JOIN customers c ON c.id = o.customer_id
      WHERE o.deleted_at IS NULL
      ORDER BY o.created_at DESC
      LIMIT 200
    `);
        return {
            props: {
                initialOrders: JSON.parse(JSON.stringify(rows))
            }
        };
    } catch (e) {
        return {
            props: {
                initialOrders: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersPage);


/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(5102)));
module.exports = __webpack_exports__;

})();