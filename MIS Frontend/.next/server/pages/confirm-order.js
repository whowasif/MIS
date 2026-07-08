"use strict";
(() => {
var exports = {};
exports.id = 8836;
exports.ids = [8836,7174];
exports.modules = {

/***/ 4424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_7__]);
_components_footer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const DIVISIONS = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
];
const DISTRICTS_BY_DIVISION = {
    Dhaka: [
        "Dhaka",
        "Faridpur",
        "Gazipur",
        "Gopalganj",
        "Kishoreganj",
        "Madaripur",
        "Manikganj",
        "Munshiganj",
        "Narayanganj",
        "Narsingdi",
        "Rajbari",
        "Shariatpur",
        "Tangail"
    ],
    Chattogram: [
        "Bandarban",
        "Brahmanbaria",
        "Chandpur",
        "Chattogram",
        "Comilla",
        "Cox's Bazar",
        "Feni",
        "Khagrachhari",
        "Lakshmipur",
        "Noakhali",
        "Rangamati"
    ],
    Rajshahi: [
        "Bogra",
        "Chapainawabganj",
        "Joypurhat",
        "Naogaon",
        "Natore",
        "Nawabganj",
        "Pabna",
        "Rajshahi",
        "Sirajganj"
    ],
    Khulna: [
        "Bagerhat",
        "Chuadanga",
        "Jessore",
        "Jhenaidah",
        "Khulna",
        "Kushtia",
        "Magura",
        "Meherpur",
        "Narail",
        "Satkhira"
    ],
    Barishal: [
        "Barguna",
        "Barishal",
        "Bhola",
        "Jhalokati",
        "Patuakhali",
        "Pirojpur"
    ],
    Sylhet: [
        "Habiganj",
        "Moulvibazar",
        "Sunamganj",
        "Sylhet"
    ],
    Rangpur: [
        "Dinajpur",
        "Gaibandha",
        "Kurigram",
        "Lalmonirhat",
        "Nilphamari",
        "Panchagarh",
        "Rangpur",
        "Thakurgaon"
    ],
    Mymensingh: [
        "Jamalpur",
        "Mymensingh",
        "Netrokona",
        "Sherpur"
    ]
};
const formatCurrency = (value)=>`৳${Number(value || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const ConfirmOrder = ({ deliveryZones =[] , defaultDeliveryCharge =100 , customer =null  })=>{
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const user = session?.user || null;
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: placed , 1: setPlaced  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: selectedZone , 1: setSelectedZone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: promoCode , 1: setPromoCode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: promoDiscount , 1: setPromoDiscount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: promoMsg , 1: setPromoMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    // Auto-fill form from customer profile
    const { 0: formName , 1: setFormName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.full_name || user?.name || "");
    const { 0: formEmail , 1: setFormEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.email || user?.email || "");
    const { 0: formPhone , 1: setFormPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.phone_number || "");
    const { 0: formDivision , 1: setFormDivision  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.division || "");
    const { 0: formDistrict , 1: setFormDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.district || "");
    const { 0: formAddress , 1: setFormAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(customer?.shipping_address || "");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        try {
            const stored = window.localStorage.getItem("misCart");
            setItems(stored ? JSON.parse(stored) : []);
        } catch (e) {
            setItems([]);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (customer) {
            if (!formPhone && customer.phone_number) setFormPhone(customer.phone_number);
            if (!formDivision && customer.division) setFormDivision(customer.division);
            if (!formDistrict && customer.district) setFormDistrict(customer.district);
            if (!formAddress && customer.shipping_address) setFormAddress(customer.shipping_address);
        }
    }, [
        customer
    ]);
    const subtotal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>items.reduce((sum, item)=>sum + (item.price || 0) * (item.quantity || 1), 0), [
        items
    ]);
    // Delivery charge based on selected zone or customer's division
    const deliveryCharge = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (selectedZone) {
            const zone = deliveryZones.find((z)=>String(z.id) === selectedZone);
            return zone?.charge || defaultDeliveryCharge;
        }
        // Auto-detect: Dhaka division = "Inside Dhaka", others = "Outside Dhaka"
        if (formDivision) {
            if (formDivision === "Dhaka") {
                const insideDhaka = deliveryZones.find((z)=>z.name.toLowerCase().includes("inside"));
                if (insideDhaka) return insideDhaka.charge;
            } else {
                const outsideDhaka = deliveryZones.find((z)=>z.name.toLowerCase().includes("outside"));
                if (outsideDhaka) return outsideDhaka.charge;
            }
        }
        return defaultDeliveryCharge;
    }, [
        selectedZone,
        formDivision,
        deliveryZones,
        defaultDeliveryCharge
    ]);
    const discount = promoDiscount;
    const total = subtotal + deliveryCharge - discount;
    const handleApplyPromo = async ()=>{
        if (!promoCode.trim()) return;
        try {
            const res = await fetch("/api/validate-promo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: promoCode,
                    subtotal
                })
            });
            const data = await res.json();
            if (data.valid) {
                setPromoDiscount(data.discount || 0);
                setPromoMsg(`Promo applied! You save ৳${data.discount}`);
            } else {
                setPromoDiscount(0);
                setPromoMsg(data.message || "Invalid promo code");
            }
        } catch (e) {
            setPromoMsg("Error validating promo");
        }
    };
    const handlePlaceOrder = async (event)=>{
        event.preventDefault();
        const orderData = {
            fullName: formName,
            email: formEmail,
            phone: formPhone,
            division: formDivision,
            district: formDistrict,
            address: formAddress,
            paymentMethod: event.currentTarget.paymentMethod.value,
            deliveryZoneId: selectedZone || null,
            promoCode: promoCode || null,
            items: items.map((i)=>({
                    id: i.id,
                    name: i.name,
                    price: i.price,
                    quantity: i.quantity
                })),
            subtotal,
            deliveryCharge,
            discount,
            total
        };
        try {
            const res = await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });
            const data = await res.json();
            if (data.success) {
                setPlaced(true);
                window.localStorage.removeItem("misCart");
                window.dispatchEvent(new Event("mis-cart-updated"));
                setItems([]);
            }
        } catch (e) {
            setPlaced(true);
            window.localStorage.removeItem("misCart");
            window.dispatchEvent(new Event("mis-cart-updated"));
            setItems([]);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a05ef1fcee26ebd1" + " " + "confirm-order-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            className: "jsx-a05ef1fcee26ebd1",
                            children: "Confirm Order | MIS Solution"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "jsx-a05ef1fcee26ebd1" + " " + "confirm-order-main",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "jsx-a05ef1fcee26ebd1" + " " + "confirm-order-shell",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                    className: "jsx-a05ef1fcee26ebd1" + " " + "confirm-order-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-a05ef1fcee26ebd1" + " " + "eyebrow",
                                            children: "Checkout"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-a05ef1fcee26ebd1",
                                            children: "Confirm Your Order"
                                        })
                                    ]
                                }),
                                placed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-a05ef1fcee26ebd1" + " " + "placed-card",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-a05ef1fcee26ebd1" + " " + "placed-icon",
                                            children: "✓"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-a05ef1fcee26ebd1",
                                            children: "Order Placed Successfully!"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-a05ef1fcee26ebd1",
                                            children: "Thank you! Our team will contact you within 24 hours."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/categories/desktop",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-a05ef1fcee26ebd1" + " " + "btn btn-primary btn-lg",
                                                children: "Continue Shopping"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-a05ef1fcee26ebd1" + " " + "checkout-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                            className: "jsx-a05ef1fcee26ebd1" + " " + "order-items-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-a05ef1fcee26ebd1",
                                                    children: "Order Summary"
                                                }),
                                                items.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "empty-state",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-a05ef1fcee26ebd1",
                                                            children: "Your cart is empty."
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/categories/desktop",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "jsx-a05ef1fcee26ebd1" + " " + "btn btn-primary",
                                                                children: "Browse Products"
                                                            })
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "items-list",
                                                            children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "item-row",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: item.image || "/placeholder.png",
                                                                            alt: item.name,
                                                                            className: "jsx-a05ef1fcee26ebd1"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "item-info",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                                    children: item.name
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                                    children: [
                                                                                        formatCurrency(item.price),
                                                                                        " \xd7 ",
                                                                                        item.quantity || 1
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: formatCurrency((item.price || 0) * (item.quantity || 1))
                                                                        })
                                                                    ]
                                                                }, item.id))
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "promo-section",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    value: promoCode,
                                                                    onChange: (e)=>setPromoCode(e.target.value),
                                                                    placeholder: "Promo code",
                                                                    className: "jsx-a05ef1fcee26ebd1"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "button",
                                                                    onClick: handleApplyPromo,
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "promo-btn",
                                                                    children: "Apply"
                                                                })
                                                            ]
                                                        }),
                                                        promoMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "promo-msg",
                                                            children: promoMsg
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "totals-box",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Subtotal"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: formatCurrency(subtotal)
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Delivery Charge"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: formatCurrency(deliveryCharge)
                                                                        })
                                                                    ]
                                                                }),
                                                                discount > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "discount-row",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Discount"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: [
                                                                                "-",
                                                                                formatCurrency(discount)
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "grand-total",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Total"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: formatCurrency(total)
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                            className: "jsx-a05ef1fcee26ebd1" + " " + "order-form-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-a05ef1fcee26ebd1",
                                                    children: "Delivery & Payment"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                    onSubmit: handlePlaceOrder,
                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "order-form",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Full Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "text",
                                                                    name: "fullName",
                                                                    value: formName,
                                                                    onChange: (e)=>setFormName(e.target.value),
                                                                    required: true,
                                                                    className: "jsx-a05ef1fcee26ebd1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "email",
                                                                    name: "email",
                                                                    value: formEmail,
                                                                    onChange: (e)=>setFormEmail(e.target.value),
                                                                    required: true,
                                                                    className: "jsx-a05ef1fcee26ebd1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Phone"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "tel",
                                                                    name: "phone",
                                                                    value: formPhone,
                                                                    onChange: (e)=>setFormPhone(e.target.value),
                                                                    required: true,
                                                                    className: "jsx-a05ef1fcee26ebd1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-row-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Division"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                            value: formDivision,
                                                                            onChange: (e)=>setFormDivision(e.target.value),
                                                                            required: true,
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "",
                                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                                    children: "Select Division"
                                                                                }),
                                                                                DIVISIONS.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: d,
                                                                                        className: "jsx-a05ef1fcee26ebd1",
                                                                                        children: d
                                                                                    }, d))
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "District"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                            value: formDistrict,
                                                                            onChange: (e)=>setFormDistrict(e.target.value),
                                                                            required: true,
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "",
                                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                                    children: "Select District"
                                                                                }),
                                                                                (DISTRICTS_BY_DIVISION[formDivision] || []).map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: d,
                                                                                        className: "jsx-a05ef1fcee26ebd1",
                                                                                        children: d
                                                                                    }, d))
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Full Address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    rows: 3,
                                                                    value: formAddress,
                                                                    onChange: (e)=>setFormAddress(e.target.value),
                                                                    placeholder: "House, Road, Area...",
                                                                    required: true,
                                                                    className: "jsx-a05ef1fcee26ebd1"
                                                                })
                                                            ]
                                                        }),
                                                        deliveryZones.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Delivery Zone"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    value: selectedZone,
                                                                    onChange: (e)=>setSelectedZone(e.target.value),
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Auto (based on division)"
                                                                        }),
                                                                        deliveryZones.map((z)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                                                                                value: z.id,
                                                                                className: "jsx-a05ef1fcee26ebd1",
                                                                                children: [
                                                                                    z.name,
                                                                                    " — ৳",
                                                                                    z.charge,
                                                                                    " (",
                                                                                    z.estimated_days || "",
                                                                                    ")"
                                                                                ]
                                                                            }, z.id))
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "form-field",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: "Payment Method"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    name: "paymentMethod",
                                                                    required: true,
                                                                    defaultValue: "",
                                                                    className: "jsx-a05ef1fcee26ebd1",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Select payment method"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "cod",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Cash on Delivery"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "bkash",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "bKash"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "nagad",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Nagad"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "bank",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Bank Transfer"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "card",
                                                                            className: "jsx-a05ef1fcee26ebd1",
                                                                            children: "Card Payment"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                            type: "submit",
                                                            disabled: items.length === 0,
                                                            className: "jsx-a05ef1fcee26ebd1" + " " + "place-order-btn",
                                                            children: [
                                                                "Place Order — ",
                                                                formatCurrency(total)
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a05ef1fcee26ebd1",
                children: ".confirm-order-page.jsx-a05ef1fcee26ebd1{min-height:100vh;background:#f5f7fb}.confirm-order-main.jsx-a05ef1fcee26ebd1{padding:40px 20px}.confirm-order-shell.jsx-a05ef1fcee26ebd1{max-width:1100px;margin:0 auto}.confirm-order-header.jsx-a05ef1fcee26ebd1{margin-bottom:24px}.eyebrow.jsx-a05ef1fcee26ebd1{margin:0 0 6px;letter-spacing:.08em;text-transform:uppercase;color:#6366f1;font-weight:700;font-size:13px}h1.jsx-a05ef1fcee26ebd1{margin:0 0 8px;font-size:clamp(24px,4vw,32px);color:#111827}h2.jsx-a05ef1fcee26ebd1{margin:0 0 16px;font-size:20px;color:#111827}.checkout-grid.jsx-a05ef1fcee26ebd1{display:grid;gap:20px;grid-template-columns:1.2fr 1fr}.order-items-card.jsx-a05ef1fcee26ebd1,.order-form-card.jsx-a05ef1fcee26ebd1,.placed-card.jsx-a05ef1fcee26ebd1{border:1px solid#e5e7eb;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;padding:24px;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.04);-moz-box-shadow:0 4px 20px rgba(0,0,0,.04);box-shadow:0 4px 20px rgba(0,0,0,.04)}.placed-card.jsx-a05ef1fcee26ebd1{max-width:500px;margin:0 auto;text-align:center}.placed-icon.jsx-a05ef1fcee26ebd1{width:64px;height:64px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#d1fae5;color:#059669;font-size:28px;font-weight:800;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto 16px}.items-list.jsx-a05ef1fcee26ebd1{display:grid;gap:10px;margin-bottom:16px}.item-row.jsx-a05ef1fcee26ebd1{display:grid;grid-template-columns:60px 1fr auto;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:10px;border:1px solid#f1f5f9;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.item-row.jsx-a05ef1fcee26ebd1 img.jsx-a05ef1fcee26ebd1{width:60px;height:48px;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#f9fafb}.item-info.jsx-a05ef1fcee26ebd1 h3.jsx-a05ef1fcee26ebd1{margin:0;font-size:13px;color:#111827}.item-info.jsx-a05ef1fcee26ebd1 p.jsx-a05ef1fcee26ebd1{margin:2px 0 0;font-size:12px;color:#6b7280}.item-row.jsx-a05ef1fcee26ebd1 strong.jsx-a05ef1fcee26ebd1{font-size:13px;color:#111827}.promo-section.jsx-a05ef1fcee26ebd1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-bottom:8px}.promo-section.jsx-a05ef1fcee26ebd1 input.jsx-a05ef1fcee26ebd1{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:10px 14px;border:2px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:14px}.promo-section.jsx-a05ef1fcee26ebd1 input.jsx-a05ef1fcee26ebd1:focus{outline:none;border-color:#6366f1}.promo-btn.jsx-a05ef1fcee26ebd1{padding:10px 18px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#4f46e5;color:#fff;font-weight:700;cursor:pointer;font-size:13px}.promo-msg.jsx-a05ef1fcee26ebd1{font-size:13px;color:#059669;margin:0 0 8px}.totals-box.jsx-a05ef1fcee26ebd1{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:14px;display:grid;gap:8px}.totals-box.jsx-a05ef1fcee26ebd1 div.jsx-a05ef1fcee26ebd1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;color:#374151}.discount-row.jsx-a05ef1fcee26ebd1 strong.jsx-a05ef1fcee26ebd1{color:#059669}.grand-total.jsx-a05ef1fcee26ebd1{border-top:1px solid#e5e7eb;padding-top:10px;font-size:16px;font-weight:700}.order-form.jsx-a05ef1fcee26ebd1{display:grid;gap:14px}.form-field.jsx-a05ef1fcee26ebd1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.form-field.jsx-a05ef1fcee26ebd1 label.jsx-a05ef1fcee26ebd1{font-size:12px;font-weight:700;color:#374151}.form-field.jsx-a05ef1fcee26ebd1 input.jsx-a05ef1fcee26ebd1,.form-field.jsx-a05ef1fcee26ebd1 select.jsx-a05ef1fcee26ebd1,.form-field.jsx-a05ef1fcee26ebd1 textarea.jsx-a05ef1fcee26ebd1{width:100%;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:11px 14px;font:inherit;font-size:14px;color:#111827;background:#fafbff}.form-field.jsx-a05ef1fcee26ebd1 input.jsx-a05ef1fcee26ebd1:focus,.form-field.jsx-a05ef1fcee26ebd1 select.jsx-a05ef1fcee26ebd1:focus,.form-field.jsx-a05ef1fcee26ebd1 textarea.jsx-a05ef1fcee26ebd1:focus{outline:none;border-color:#6366f1;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1);background:#fff}.form-field.jsx-a05ef1fcee26ebd1 textarea.jsx-a05ef1fcee26ebd1{resize:vertical;min-height:70px}.form-row-2.jsx-a05ef1fcee26ebd1{display:grid;grid-template-columns:1fr 1fr;gap:12px}.place-order-btn.jsx-a05ef1fcee26ebd1{width:100%;padding:14px;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#4f46e5;color:#fff;font-size:15px;font-weight:700;cursor:pointer;-webkit-transition:background.15s;-moz-transition:background.15s;-o-transition:background.15s;transition:background.15s}.place-order-btn.jsx-a05ef1fcee26ebd1:hover:not(:disabled){background:#4338ca}.place-order-btn.jsx-a05ef1fcee26ebd1:disabled{opacity:.5;cursor:not-allowed}.empty-state.jsx-a05ef1fcee26ebd1{border:1px dashed#d1d5db;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:24px;text-align:center}.empty-state.jsx-a05ef1fcee26ebd1 p.jsx-a05ef1fcee26ebd1{margin:0 0 12px;color:#6b7280}@media(max-width:900px){.checkout-grid.jsx-a05ef1fcee26ebd1{grid-template-columns:1fr}.form-row-2.jsx-a05ef1fcee26ebd1{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    try {
        const { getToken  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 614, 23));
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const token = await getToken({
            req: context.req,
            secret: process.env.NEXTAUTH_SECRET
        });
        const db = getDbPool();
        const [zones] = await db.query("SELECT id, zone_name as name, charge, estimated_days FROM delivery_zones WHERE is_active = 1 ORDER BY charge ASC");
        const defaultCharge = Number(process.env.DEFAULT_DELIVERY_CHARGE || 100);
        let customer = null;
        if (token?.email) {
            const [rows] = await db.execute("SELECT full_name, email, phone_number, division, district, shipping_address FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
                token.email.toLowerCase()
            ]);
            if (rows.length) customer = rows[0];
        }
        return {
            props: {
                deliveryZones: JSON.parse(JSON.stringify(zones)),
                defaultDeliveryCharge: defaultCharge,
                customer: customer ? JSON.parse(JSON.stringify(customer)) : null
            }
        };
    } catch (e) {
        return {
            props: {
                deliveryZones: [],
                defaultDeliveryCharge: 100,
                customer: null
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmOrder);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = require("next-intl");

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

/***/ 7027:
/***/ ((module) => {

module.exports = import("dangerous-html/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(4424)));
module.exports = __webpack_exports__;

})();