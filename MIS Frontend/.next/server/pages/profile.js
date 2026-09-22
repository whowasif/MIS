"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277,7174];
exports.modules = {

/***/ 8812:
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
const formatDate = (d)=>{
    const date = new Date(d);
    return isNaN(date.getTime()) ? "N/A" : date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
};
const Profile = ({ customer =null , orders =[]  })=>{
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const user = session?.user || null;
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: saving , 1: setSaving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        full_name: customer?.full_name || "",
        phone_number: customer?.phone_number || "",
        division: customer?.division || "",
        district: customer?.district || "",
        shipping_address: customer?.shipping_address || ""
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (customer) {
            setForm({
                full_name: customer.full_name || "",
                phone_number: customer.phone_number || "",
                division: customer.division || "",
                district: customer.district || "",
                shipping_address: customer.shipping_address || ""
            });
        }
    }, [
        customer
    ]);
    const handleSave = async ()=>{
        setSaving(true);
        try {
            const res = await fetch("/api/auth/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setEditing(false);
            } else {
                alert(data.error || "Failed to save. Please try again.");
            }
        } catch (e) {
            console.error(e);
            alert("Network error. Please try again.");
        } finally{
            setSaving(false);
        }
    };
    if (status === "loading") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    style: {
                        minHeight: "60vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Loading..."
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        });
    }
    if (!user) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    style: {
                        minHeight: "60vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "16px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            style: {
                                margin: 0
                            },
                            children: "Please sign in to view your profile"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/auth/signin",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "btn btn-primary btn-lg",
                                children: "Sign In"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f3277b10d1d719c7" + " " + "profile-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            className: "jsx-f3277b10d1d719c7",
                            children: "My Profile | MIS Solution"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "jsx-f3277b10d1d719c7" + " " + "profile-main",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            className: "jsx-f3277b10d1d719c7" + " " + "profile-shell",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f3277b10d1d719c7" + " " + "profile-layout",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                        className: "jsx-f3277b10d1d719c7" + " " + "profile-card info-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "avatar-section",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "avatar",
                                                        children: user.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: user.image,
                                                            alt: user.name,
                                                            className: "jsx-f3277b10d1d719c7"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-f3277b10d1d719c7",
                                                            children: (user.name || "U").charAt(0).toUpperCase()
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "jsx-f3277b10d1d719c7",
                                                        children: form.full_name || user.name || "User"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "user-email",
                                                        children: user.email
                                                    })
                                                ]
                                            }),
                                            !editing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "profile-details",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Full Name"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: form.full_name || "Not set"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Email"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: user.email
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Phone"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: form.phone_number || "Not set"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Division"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: form.division || "Not set"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "District"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: form.district || "Not set"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Address"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: form.shipping_address || "Not set"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "detail-row",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Member Since"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: customer?.created_at ? formatDate(customer.created_at) : "N/A"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "edit-form",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Full Name"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                value: form.full_name,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            full_name: e.target.value
                                                                        })),
                                                                placeholder: "Your full name",
                                                                className: "jsx-f3277b10d1d719c7"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Phone"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                value: form.phone_number,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            phone_number: e.target.value
                                                                        })),
                                                                placeholder: "01XXXXXXXXX",
                                                                className: "jsx-f3277b10d1d719c7"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Division"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                value: form.division,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            division: e.target.value
                                                                        })),
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "",
                                                                        className: "jsx-f3277b10d1d719c7",
                                                                        children: "Select Division"
                                                                    }),
                                                                    DIVISIONS.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: d,
                                                                            className: "jsx-f3277b10d1d719c7",
                                                                            children: d
                                                                        }, d))
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "District"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                value: form.district,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            district: e.target.value
                                                                        })),
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "",
                                                                        className: "jsx-f3277b10d1d719c7",
                                                                        children: "Select District"
                                                                    }),
                                                                    (DISTRICTS_BY_DIVISION[form.division] || []).map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: d,
                                                                            className: "jsx-f3277b10d1d719c7",
                                                                            children: d
                                                                        }, d))
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f3277b10d1d719c7",
                                                                children: "Full Address"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                rows: 3,
                                                                value: form.shipping_address,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            shipping_address: e.target.value
                                                                        })),
                                                                placeholder: "House, Road, Area...",
                                                                className: "jsx-f3277b10d1d719c7"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "profile-actions",
                                                children: [
                                                    !editing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setEditing(true),
                                                        className: "jsx-f3277b10d1d719c7" + " " + "btn-edit",
                                                        children: "Edit Profile"
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "edit-actions",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: handleSave,
                                                                disabled: saving,
                                                                className: "jsx-f3277b10d1d719c7" + " " + "btn-save",
                                                                children: saving ? "Saving..." : "Save Changes"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                onClick: ()=>setEditing(false),
                                                                className: "jsx-f3277b10d1d719c7" + " " + "btn-cancel",
                                                                children: "Cancel"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)({
                                                                callbackUrl: "/"
                                                            }),
                                                        className: "jsx-f3277b10d1d719c7" + " " + "btn-signout",
                                                        children: "Sign Out"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                        className: "jsx-f3277b10d1d719c7" + " " + "profile-card orders-card",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "orders-header",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "jsx-f3277b10d1d719c7",
                                                        children: "My Orders"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "order-count",
                                                        children: [
                                                            orders.length,
                                                            " order",
                                                            orders.length !== 1 ? "s" : ""
                                                        ]
                                                    })
                                                ]
                                            }),
                                            orders.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "empty-box",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-f3277b10d1d719c7",
                                                        children: "No orders yet. Start shopping to see your orders here."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/categories/desktop",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "jsx-f3277b10d1d719c7" + " " + "btn btn-primary",
                                                            children: "Browse Products"
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-f3277b10d1d719c7" + " " + "orders-list",
                                                children: orders.map((order)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                                        className: "jsx-f3277b10d1d719c7" + " " + "order-item",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f3277b10d1d719c7" + " " + "order-top",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                        className: "jsx-f3277b10d1d719c7",
                                                                        children: [
                                                                            "#",
                                                                            order.order_no || order.id
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-f3277b10d1d719c7" + " " + `order-status status-${(order.status || "pending").toLowerCase()}`,
                                                                        children: order.status || "Pending"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f3277b10d1d719c7" + " " + "order-meta",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-f3277b10d1d719c7",
                                                                        children: formatDate(order.created_at)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        className: "jsx-f3277b10d1d719c7",
                                                                        children: formatCurrency(order.total_amount)
                                                                    })
                                                                ]
                                                            }),
                                                            order.payment_method && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "jsx-f3277b10d1d719c7" + " " + "order-payment",
                                                                children: [
                                                                    "Payment: ",
                                                                    order.payment_method
                                                                ]
                                                            })
                                                        ]
                                                    }, order.id))
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f3277b10d1d719c7",
                children: ".profile-page.jsx-f3277b10d1d719c7{min-height:100vh;background:#f5f7fb}.profile-main.jsx-f3277b10d1d719c7{padding:40px 20px}.profile-shell.jsx-f3277b10d1d719c7{max-width:1100px;margin:0 auto}.profile-layout.jsx-f3277b10d1d719c7{display:grid;gap:20px;grid-template-columns:380px 1fr}.profile-card.jsx-f3277b10d1d719c7{border:1px solid#e2e8f0;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.05);-moz-box-shadow:0 4px 20px rgba(0,0,0,.05);box-shadow:0 4px 20px rgba(0,0,0,.05);padding:28px}.avatar-section.jsx-f3277b10d1d719c7{text-align:center;margin-bottom:24px;padding-bottom:24px;border-bottom:1px solid#f1f5f9}.avatar.jsx-f3277b10d1d719c7{width:80px;height:80px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin:0 auto 12px;background:-webkit-linear-gradient(315deg,#667eea,#764ba2);background:-moz-linear-gradient(315deg,#667eea,#764ba2);background:-o-linear-gradient(315deg,#667eea,#764ba2);background:linear-gradient(135deg,#667eea,#764ba2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.avatar.jsx-f3277b10d1d719c7 img.jsx-f3277b10d1d719c7{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar.jsx-f3277b10d1d719c7 span.jsx-f3277b10d1d719c7{color:#fff;font-size:32px;font-weight:800}.avatar-section.jsx-f3277b10d1d719c7 h2.jsx-f3277b10d1d719c7{margin:0 0 4px;font-size:20px;color:#111827}.user-email.jsx-f3277b10d1d719c7{margin:0;color:#6b7280;font-size:14px}.profile-details.jsx-f3277b10d1d719c7{margin:0;display:grid;gap:10px}.detail-row.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 14px;background:#f9fafb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:1px solid#f1f5f9}dt.jsx-f3277b10d1d719c7{color:#6b7280;font-size:13px;font-weight:600}dd.jsx-f3277b10d1d719c7{margin:0;color:#111827;font-size:14px;font-weight:600;text-align:right;max-width:60%;word-break:break-word}.edit-form.jsx-f3277b10d1d719c7{display:grid;gap:12px}.edit-field.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.edit-field.jsx-f3277b10d1d719c7 label.jsx-f3277b10d1d719c7{font-size:12px;font-weight:700;color:#374151}.edit-field.jsx-f3277b10d1d719c7 input.jsx-f3277b10d1d719c7,.edit-field.jsx-f3277b10d1d719c7 select.jsx-f3277b10d1d719c7,.edit-field.jsx-f3277b10d1d719c7 textarea.jsx-f3277b10d1d719c7{width:100%;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:10px 14px;font:inherit;font-size:14px;color:#111827;background:#fafbff}.edit-field.jsx-f3277b10d1d719c7 input.jsx-f3277b10d1d719c7:focus,.edit-field.jsx-f3277b10d1d719c7 select.jsx-f3277b10d1d719c7:focus,.edit-field.jsx-f3277b10d1d719c7 textarea.jsx-f3277b10d1d719c7:focus{outline:none;border-color:#6366f1;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.edit-field.jsx-f3277b10d1d719c7 textarea.jsx-f3277b10d1d719c7{resize:vertical;min-height:70px}.profile-actions.jsx-f3277b10d1d719c7{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:10px}.edit-actions.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.btn-edit.jsx-f3277b10d1d719c7{width:100%;padding:12px;border:2px solid#4f46e5;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#eef2ff;color:#4f46e5;font-weight:700;cursor:pointer;font-size:14px}.btn-edit.jsx-f3277b10d1d719c7:hover{background:#e0e7ff}.btn-save.jsx-f3277b10d1d719c7{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;padding:12px;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#4f46e5;color:#fff;font-weight:700;cursor:pointer;font-size:14px}.btn-save.jsx-f3277b10d1d719c7:disabled{opacity:.6}.btn-cancel.jsx-f3277b10d1d719c7{padding:12px 20px;border:1px solid#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fff;color:#374151;font-weight:600;cursor:pointer;font-size:14px}.btn-signout.jsx-f3277b10d1d719c7{width:100%;padding:12px;border:1px solid#fecaca;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fef2f2;color:#dc2626;font-weight:700;cursor:pointer;font-size:14px}.btn-signout.jsx-f3277b10d1d719c7:hover{background:#fee2e2}.orders-header.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:16px}.orders-header.jsx-f3277b10d1d719c7 h2.jsx-f3277b10d1d719c7{margin:0;font-size:20px;color:#111827}.order-count.jsx-f3277b10d1d719c7{background:#eef2ff;color:#4338ca;padding:4px 12px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;font-size:12px;font-weight:700}.orders-list.jsx-f3277b10d1d719c7{display:grid;gap:10px;max-height:500px;overflow-y:auto}.order-item.jsx-f3277b10d1d719c7{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:14px 16px;-webkit-transition:box-shadow.2s;-moz-transition:box-shadow.2s;-o-transition:box-shadow.2s;transition:box-shadow.2s}.order-item.jsx-f3277b10d1d719c7:hover{-webkit-box-shadow:0 4px 12px rgba(0,0,0,.06);-moz-box-shadow:0 4px 12px rgba(0,0,0,.06);box-shadow:0 4px 12px rgba(0,0,0,.06)}.order-top.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:8px}.order-top.jsx-f3277b10d1d719c7 strong.jsx-f3277b10d1d719c7{color:#111827;font-size:14px}.order-status.jsx-f3277b10d1d719c7{padding:3px 10px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;font-size:11px;font-weight:700;text-transform:uppercase}.status-pending.jsx-f3277b10d1d719c7{background:#fef3c7;color:#92400e}.status-paid.jsx-f3277b10d1d719c7{background:#d1fae5;color:#065f46}.status-shipped.jsx-f3277b10d1d719c7{background:#dbeafe;color:#1e40af}.status-cancelled.jsx-f3277b10d1d719c7{background:#fee2e2;color:#991b1b}.order-meta.jsx-f3277b10d1d719c7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.order-meta.jsx-f3277b10d1d719c7 span.jsx-f3277b10d1d719c7{color:#6b7280;font-size:13px}.order-meta.jsx-f3277b10d1d719c7 strong.jsx-f3277b10d1d719c7{color:#111827;font-size:15px}.order-payment.jsx-f3277b10d1d719c7{margin:6px 0 0;font-size:12px;color:#6b7280}.empty-box.jsx-f3277b10d1d719c7{border:1px dashed#d1d5db;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:24px;text-align:center}.empty-box.jsx-f3277b10d1d719c7 p.jsx-f3277b10d1d719c7{margin:0 0 12px;color:#6b7280}@media(max-width:900px){.profile-layout.jsx-f3277b10d1d719c7{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    try {
        const { getSession  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1649, 23));
        const session = await getSession({
            req: context.req
        });
        if (!session?.user?.email) return {
            props: {
                customer: null,
                orders: []
            }
        };
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const db = getDbPool();
        // Get customer record
        const [customers] = await db.execute("SELECT id, full_name, email, phone_number, division, district, shipping_address, profile_image, created_at FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
            session.user.email.toLowerCase()
        ]);
        if (!customers.length) return {
            props: {
                customer: null,
                orders: []
            }
        };
        const customer = customers[0];
        // Get orders by customer_id
        const [orders] = await db.execute("SELECT id, order_no, total_amount, status, payment_method, delivery_charge, created_at FROM orders WHERE customer_id = ? AND deleted_at IS NULL ORDER BY created_at DESC LIMIT 30", [
            customer.id
        ]);
        return {
            props: {
                customer: JSON.parse(JSON.stringify(customer)),
                orders: JSON.parse(JSON.stringify(orders))
            }
        };
    } catch (e) {
        console.error("Profile SSR error:", e);
        return {
            props: {
                customer: null,
                orders: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(8812)));
module.exports = __webpack_exports__;

})();