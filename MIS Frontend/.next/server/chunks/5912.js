"use strict";
exports.id = 5912;
exports.ids = [5912];
exports.modules = {

/***/ 7500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ managedTableConfig)
/* harmony export */ });
/* unused harmony export managedTableNames */
const managedTableConfig = [
    {
        name: "admin_users",
        label: "Admin Users",
        group: "Security"
    },
    {
        name: "customers",
        label: "Customers",
        group: "CRM"
    },
    {
        name: "newsletter_subscribers",
        label: "Newsletter Subscribers",
        group: "CRM"
    },
    {
        name: "company_contacts",
        label: "Company Contacts",
        group: "Content"
    },
    {
        name: "digi_services",
        label: "Digital Services",
        group: "Content"
    },
    {
        name: "bus_corp_sol",
        label: "Business & Corporate Solutions",
        group: "Content"
    },
    {
        name: "service_maintenance",
        label: "Service & Maintenance",
        group: "Content"
    },
    {
        name: "career_posts",
        label: "Career Posts",
        group: "Content"
    },
    {
        name: "advertisements",
        label: "Advertisements",
        group: "Content"
    },
    {
        name: "client_projects",
        label: "Client Projects",
        group: "Content"
    },
    {
        name: "category_specs",
        label: "Category Specs",
        group: "Catalog"
    },
    {
        name: "products",
        label: "Products",
        group: "Catalog"
    },
    {
        name: "orders",
        label: "Orders",
        group: "Commerce"
    },
    {
        name: "promo_codes",
        label: "Promo Codes",
        group: "Commerce"
    },
    {
        name: "delivery_zones",
        label: "Delivery Zones",
        group: "Commerce"
    }, 
];
const managedTableNames = managedTableConfig.map((item)=>item.name);


/***/ }),

/***/ 5912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_admin_managed_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7500);






// Role restrictions matching server-side config
const ROLE_RESTRICTIONS = {
    senior_admin: [
        "admin_users"
    ],
    junior_admin: [
        "admin_users",
        "customers",
        "company_contacts",
        "orders",
        "quotes",
        "promo_codes",
        "quotes-manager",
        "applications"
    ]
};
const ROLES = [
    {
        value: "super_admin",
        label: "Super Admin"
    },
    {
        value: "senior_admin",
        label: "Senior Admin"
    },
    {
        value: "junior_admin",
        label: "Junior Admin"
    }, 
];
const coreNavigationItems = [
    {
        href: "/portal-secure-99x",
        label: "Dashboard",
        resource: null,
        icon: "dashboard"
    },
    {
        href: "/portal-secure-99x/category-manager",
        label: "Category Manager",
        resource: null,
        icon: "category"
    },
    {
        href: "/portal-secure-99x/orders",
        label: "Orders",
        resource: "orders",
        icon: "orders"
    },
    {
        href: "/portal-secure-99x/quotes-manager",
        label: "Quotes",
        resource: "quotes-manager",
        icon: "quotes"
    },
    {
        href: "/portal-secure-99x/applications",
        label: "Applications",
        resource: "applications",
        icon: "applications"
    },
    {
        href: "/portal-secure-99x/logs",
        label: "Activity Logs",
        resource: null,
        icon: "activity"
    }, 
];
// Icon map for table groups and items
const TABLE_ICONS = {
    admin_users: "shield",
    customers: "users",
    newsletter_subscribers: "mail",
    company_contacts: "phone",
    digi_services: "globe",
    bus_corp_sol: "briefcase",
    service_maintenance: "wrench",
    career_posts: "award",
    advertisements: "megaphone",
    client_projects: "folder",
    category_specs: "layers",
    products: "box",
    orders: "cart",
    promo_codes: "tag",
    delivery_zones: "truck"
};
const NavIcon = ({ name , size =18  })=>{
    const icons = {
        dashboard: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                })
            ]
        }),
        category: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 2L2 7l10 5 10-5-10-5z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M2 17l10 5 10-5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M2 12l10 5 10-5"
                })
            ]
        }),
        orders: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16 10a4 4 0 01-8 0"
                })
            ]
        }),
        quotes: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "14 2 14 8 20 8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                })
            ]
        }),
        applications: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "8.5",
                    cy: "7",
                    r: "4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "17 11 19 13 23 9"
                })
            ]
        }),
        shield: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            })
        }),
        users: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M23 21v-2a4 4 0 00-3-3.87"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16 3.13a4 4 0 010 7.75"
                })
            ]
        }),
        mail: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "22,6 12,13 2,6"
                })
            ]
        }),
        phone: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            })
        }),
        globe: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "2",
                    y1: "12",
                    x2: "22",
                    y2: "12"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                })
            ]
        }),
        briefcase: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "2",
                    y: "7",
                    width: "20",
                    height: "14",
                    rx: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"
                })
            ]
        }),
        wrench: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
            })
        }),
        file: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "13 2 13 9 20 9"
                })
            ]
        }),
        award: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "8",
                    r: "7"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                })
            ]
        }),
        megaphone: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M3 11l18-5v12L3 13v-2z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M11.6 16.8a3 3 0 11-5.8-1.6"
                })
            ]
        }),
        folder: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"
            })
        }),
        layers: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                    points: "12 2 2 7 12 12 22 7 12 2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "2 17 12 22 22 17"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "2 12 12 17 22 12"
                })
            ]
        }),
        box: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                    points: "3.27 6.96 12 12.01 20.73 6.96"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "12",
                    y1: "22.08",
                    x2: "12",
                    y2: "12"
                })
            ]
        }),
        cart: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
                })
            ]
        }),
        tag: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                    x1: "7",
                    y1: "7",
                    x2: "7.01",
                    y2: "7"
                })
            ]
        }),
        truck: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "1",
                    y: "3",
                    width: "15",
                    height: "13"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                    points: "16 8 20 8 23 11 23 16 16 16 16 8"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "5.5",
                    cy: "18.5",
                    r: "2.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "18.5",
                    cy: "18.5",
                    r: "2.5"
                })
            ]
        }),
        activity: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                points: "22 12 18 12 15 21 9 3 6 12 2 12"
            })
        })
    };
    return icons[name] || /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "3"
        })
    });
};
const buildTableGroups = ()=>{
    const groups = {};
    _lib_admin_managed_tables__WEBPACK_IMPORTED_MODULE_5__/* .managedTableConfig.forEach */ .C.forEach((item)=>{
        const key = item.group || "General";
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
    });
    return Object.entries(groups);
};
const SecureAdminLayout = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: sidebarOpen , 1: setSidebarOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: adminRole , 1: setAdminRole  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("super_admin");
    const { 0: adminInfo , 1: setAdminInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        role: "",
        profileImage: ""
    });
    const { 0: clock , 1: setClock  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: sessionRemaining , 1: setSessionRemaining  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: notifications , 1: setNotifications  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: notifUnread , 1: setNotifUnread  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: notifOpen , 1: setNotifOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const tableGroups = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>buildTableGroups(), []);
    // Clock
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const tick = ()=>setClock(new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }));
        tick();
        const timer = setInterval(tick, 1000);
        return ()=>clearInterval(timer);
    }, []);
    // Session Timer - 30 min TTL, resets on admin API activity
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const SESSION_TTL = 30 * 60 // 30 minutes in seconds
        ;
        const STORAGE_KEY = "mis_admin_session_start";
        const initSession = ()=>{
            const stored = sessionStorage.getItem(STORAGE_KEY);
            if (!stored) {
                sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
            }
        };
        const getRemaining = ()=>{
            const start = Number(sessionStorage.getItem(STORAGE_KEY) || Date.now());
            const elapsed = Math.floor((Date.now() - start) / 1000);
            return Math.max(0, SESSION_TTL - elapsed);
        };
        const resetSessionTimer = ()=>{
            sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
        };
        // Reset timer on any fetch to admin API (intercept)
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            const url = typeof args[0] === "string" ? args[0] : args[0]?.url || "";
            // Background notification polling must NOT keep the session alive.
            const isNotifPoll = url.includes("/api/admin/notifications") && url.includes("count");
            if (url.includes("/api/admin/") && !isNotifPoll) {
                resetSessionTimer();
            }
            return originalFetch.apply(this, args);
        };
        initSession();
        const interval = setInterval(()=>{
            const remaining = getRemaining();
            setSessionRemaining(remaining);
            if (remaining <= 0) {
                clearInterval(interval);
                router.push("/portal-secure-99x/access?reason=session");
            }
        }, 1000);
        return ()=>{
            clearInterval(interval);
            window.fetch = originalFetch;
        };
    }, []);
    const formatSessionTime = (seconds)=>{
        if (seconds === null) return "--:--";
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };
    const sessionTimerClass = sessionRemaining !== null && sessionRemaining <= 120 ? "session-timer is-warning" : "session-timer";
    // Fetch admin info from server (cookies are HttpOnly so can't parse client-side)
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch("/api/admin/me").then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (data) {
                setAdminInfo({
                    name: data.name || "",
                    email: data.email || "",
                    role: data.role || "",
                    profileImage: data.profileImage || ""
                });
                if (data.role) setAdminRole(data.role);
            }
        }).catch(()=>{});
    }, []);
    // Poll unread notification count (lightweight, does not keep session alive).
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let cancelled = false;
        const loadCount = ()=>{
            if (document.hidden) return;
            fetch("/api/admin/notifications?count=1", {
                credentials: "include"
            }).then((r)=>r.ok ? r.json() : null).then((data)=>{
                if (!cancelled && data?.success) setNotifUnread(Number(data.unread || 0));
            }).catch(()=>{});
        };
        loadCount();
        const interval = setInterval(loadCount, 45000);
        return ()=>{
            cancelled = true;
            clearInterval(interval);
        };
    }, []);
    const loadNotifications = ()=>{
        fetch("/api/admin/notifications", {
            credentials: "include"
        }).then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (data?.success) {
                setNotifications(Array.isArray(data.notifications) ? data.notifications : []);
                setNotifUnread(Number(data.unread || 0));
            }
        }).catch(()=>{});
    };
    const toggleNotifications = ()=>{
        const next = !notifOpen;
        setNotifOpen(next);
        if (next) loadNotifications();
    };
    const markAllNotificationsSeen = ()=>{
        // Optimistically clear the badge; server marks seen for THIS admin only.
        setNotifications((prev)=>prev.map((n)=>({
                    ...n,
                    is_read: true
                })));
        setNotifUnread(0);
        fetch("/api/admin/notifications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({})
        }).catch(()=>{});
    };
    const formatNotifTime = (value)=>{
        if (!value) return "";
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return "";
        const diffMs = Date.now() - d.getTime();
        const mins = Math.floor(diffMs / 60000);
        if (mins < 1) return "just now";
        if (mins < 60) return `${mins}m ago`;
        const hrs = Math.floor(mins / 60);
        if (hrs < 24) return `${hrs}h ago`;
        return d.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const restrictions = ROLE_RESTRICTIONS[adminRole] || [];
    const canAccess = (resource)=>!resource || !restrictions.includes(resource);
    const filteredCoreNav = coreNavigationItems.filter((item)=>canAccess(item.resource));
    const filteredTableGroups = tableGroups.map(([groupName, rows])=>[
            groupName,
            rows.filter((row)=>canAccess(row.name))
        ]).filter(([, rows])=>rows.length > 0);
    const handleForceLogout = async ()=>{
        try {
            await fetch("/api/admin/logout", {
                method: "POST"
            });
        } catch (e) {}
        router.push("/portal-secure-99x/access?reason=session");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-5764d96973b29a1b" + " " + "admin-shell",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "jsx-5764d96973b29a1b" + " " + `admin-sidebar ${sidebarOpen ? "is-open" : ""}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-5764d96973b29a1b" + " " + "sidebar-top",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5764d96973b29a1b" + " " + "brand",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/footer logo.png",
                                        alt: "MIS",
                                        className: "jsx-5764d96973b29a1b" + " " + "brand-logo"
                                    }),
                                    "MIS Admin"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setSidebarOpen(false),
                                "aria-label": "Close menu",
                                className: "jsx-5764d96973b29a1b" + " " + "sidebar-close",
                                children: "✕"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        "aria-label": "Core admin navigation",
                        className: "jsx-5764d96973b29a1b" + " " + "menu-block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-5764d96973b29a1b" + " " + "menu-section-label",
                                children: "Main"
                            }),
                            filteredCoreNav.map((item)=>{
                                const isActive = router.pathname === item.href;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: ()=>setSidebarOpen(false),
                                        className: "jsx-5764d96973b29a1b" + " " + `menu-link ${isActive ? "is-active" : ""}`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-5764d96973b29a1b" + " " + "menu-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavIcon, {
                                                    name: item.icon,
                                                    size: 18
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-5764d96973b29a1b" + " " + "menu-text",
                                                children: item.label
                                            })
                                        ]
                                    })
                                }, item.href);
                            })
                        ]
                    }),
                    filteredTableGroups.map(([groupName, rows])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-5764d96973b29a1b" + " " + "menu-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-5764d96973b29a1b" + " " + "menu-section-label",
                                    children: groupName
                                }),
                                rows.map((row)=>{
                                    const href = `/portal-secure-99x/tables/${row.name}`;
                                    const isActive = router.asPath === href;
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: href,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            onClick: ()=>setSidebarOpen(false),
                                            className: "jsx-5764d96973b29a1b" + " " + `menu-link ${isActive ? "is-active" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5764d96973b29a1b" + " " + "menu-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavIcon, {
                                                        name: TABLE_ICONS[row.name] || "file",
                                                        size: 18
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5764d96973b29a1b" + " " + "menu-text",
                                                    children: row.label
                                                })
                                            ]
                                        })
                                    }, row.name);
                                })
                            ]
                        }, groupName))
                ]
            }),
            sidebarOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setSidebarOpen(false),
                className: "jsx-5764d96973b29a1b" + " " + "sidebar-backdrop"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "jsx-5764d96973b29a1b" + " " + "admin-main",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "jsx-5764d96973b29a1b" + " " + "admin-topbar",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setSidebarOpen(true),
                                "aria-label": "Open menu",
                                className: "jsx-5764d96973b29a1b" + " " + "hamburger-btn",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "round",
                                    className: "jsx-5764d96973b29a1b",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M3 6h18M3 12h18M3 18h18",
                                        className: "jsx-5764d96973b29a1b"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5764d96973b29a1b" + " " + "topbar-clock",
                                children: clock
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5764d96973b29a1b" + " " + (sessionTimerClass || ""),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "jsx-5764d96973b29a1b",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                className: "jsx-5764d96973b29a1b"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                points: "12 6 12 12 16 14",
                                                className: "jsx-5764d96973b29a1b"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-5764d96973b29a1b",
                                        children: formatSessionTime(sessionRemaining)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5764d96973b29a1b" + " " + "topbar-right",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5764d96973b29a1b" + " " + "notif-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                type: "button",
                                                onClick: toggleNotifications,
                                                "aria-label": "Notifications",
                                                className: "jsx-5764d96973b29a1b" + " " + "notif-bell",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-5764d96973b29a1b",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9",
                                                                className: "jsx-5764d96973b29a1b"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M13.73 21a2 2 0 01-3.46 0",
                                                                className: "jsx-5764d96973b29a1b"
                                                            })
                                                        ]
                                                    }),
                                                    notifUnread > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-badge",
                                                        children: notifUnread > 99 ? "99+" : notifUnread
                                                    })
                                                ]
                                            }),
                                            notifOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        onClick: ()=>setNotifOpen(false),
                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-backdrop"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-dropdown",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-5764d96973b29a1b" + " " + "notif-header",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        className: "jsx-5764d96973b29a1b",
                                                                        children: "Notifications"
                                                                    }),
                                                                    notifUnread > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                        type: "button",
                                                                        onClick: markAllNotificationsSeen,
                                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-markall",
                                                                        children: "Mark all as read"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-5764d96973b29a1b" + " " + "notif-list",
                                                                children: notifications.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-5764d96973b29a1b" + " " + "notif-empty",
                                                                    children: "No notifications yet."
                                                                }) : notifications.map((n)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-5764d96973b29a1b" + " " + `notif-item ${n.is_read ? "" : "is-unread"}`,
                                                                        children: [
                                                                            !n.is_read && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "jsx-5764d96973b29a1b" + " " + "notif-dot"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "jsx-5764d96973b29a1b" + " " + "notif-body",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-title",
                                                                                        children: n.title
                                                                                    }),
                                                                                    n.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-msg",
                                                                                        children: n.message
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "jsx-5764d96973b29a1b" + " " + "notif-time",
                                                                                        children: formatNotifTime(n.created_at)
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, n.id))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5764d96973b29a1b" + " " + "topbar-admin-info",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-5764d96973b29a1b" + " " + "topbar-avatar",
                                                children: adminInfo.profileImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: adminInfo.profileImage,
                                                    alt: adminInfo.name,
                                                    className: "jsx-5764d96973b29a1b" + " " + "topbar-avatar-img"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5764d96973b29a1b",
                                                    children: (adminInfo.name || "A").charAt(0).toUpperCase()
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5764d96973b29a1b" + " " + "topbar-admin-text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-5764d96973b29a1b",
                                                        children: adminInfo.name || "Admin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-5764d96973b29a1b",
                                                        children: ROLES.find((r)=>r.value === (adminInfo.role || adminRole))?.label || adminRole
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: handleForceLogout,
                                        className: "jsx-5764d96973b29a1b" + " " + "logout-btn",
                                        children: "Sign out"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "jsx-5764d96973b29a1b" + " " + "admin-content",
                        children: children
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "5764d96973b29a1b",
                children: '.admin-shell.jsx-5764d96973b29a1b{min-height:100vh;display:grid;grid-template-columns:270px minmax(0,1fr);background:#f4f6fa;color:#2b2a3c;font-family:"Segoe UI","Inter",Arial,sans-serif}.admin-sidebar.jsx-5764d96973b29a1b{background:-webkit-linear-gradient(top,#1e1b4b 0%,#312e81 100%);background:-moz-linear-gradient(top,#1e1b4b 0%,#312e81 100%);background:-o-linear-gradient(top,#1e1b4b 0%,#312e81 100%);background:linear-gradient(180deg,#1e1b4b 0%,#312e81 100%);padding:20px 14px 24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px;overflow-y:auto}.admin-sidebar.jsx-5764d96973b29a1b::-webkit-scrollbar{width:4px}.admin-sidebar.jsx-5764d96973b29a1b::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.sidebar-top.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:8px}.sidebar-close.jsx-5764d96973b29a1b{display:none;border:none;background:none;font-size:20px;cursor:pointer;color:rgba(255,255,255,.7);padding:4px 8px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.sidebar-close.jsx-5764d96973b29a1b:hover{background:rgba(255,255,255,.1)}.sidebar-backdrop.jsx-5764d96973b29a1b{display:none}.brand.jsx-5764d96973b29a1b{font-size:22px;font-weight:800;color:#fff;padding:8px 10px 12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.brand-logo.jsx-5764d96973b29a1b{width:38px;height:38px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-o-object-fit:contain;object-fit:contain;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.menu-block.jsx-5764d96973b29a1b,.menu-group.jsx-5764d96973b29a1b{display:grid;gap:2px}.menu-section-label.jsx-5764d96973b29a1b{margin:14px 12px 6px;font-size:10px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.12em}.menu-link.jsx-5764d96973b29a1b{text-decoration:none;color:rgba(255,255,255,.7);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:9px 12px;font-weight:500;font-size:13px;-webkit-transition:all.15s ease;-moz-transition:all.15s ease;-o-transition:all.15s ease;transition:all.15s ease;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.menu-link.jsx-5764d96973b29a1b:hover{background:rgba(255,255,255,.08);color:#fff}.menu-link.is-active.jsx-5764d96973b29a1b{background:-webkit-linear-gradient(left,#7c3aed 0%,#6d28d9 100%);background:-moz-linear-gradient(left,#7c3aed 0%,#6d28d9 100%);background:-o-linear-gradient(left,#7c3aed 0%,#6d28d9 100%);background:linear-gradient(90deg,#7c3aed 0%,#6d28d9 100%);color:#fff;-webkit-box-shadow:0 4px 12px rgba(124,58,237,.3);-moz-box-shadow:0 4px 12px rgba(124,58,237,.3);box-shadow:0 4px 12px rgba(124,58,237,.3)}.menu-link.is-active.jsx-5764d96973b29a1b .menu-icon.jsx-5764d96973b29a1b{color:#fff}.menu-icon.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;opacity:.85}.menu-link.is-active.jsx-5764d96973b29a1b .menu-icon.jsx-5764d96973b29a1b{opacity:1}.menu-text.jsx-5764d96973b29a1b{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.admin-main.jsx-5764d96973b29a1b{min-width:0;display:grid;grid-template-rows:auto 1fr}.admin-topbar.jsx-5764d96973b29a1b{height:66px;border-bottom:1px solid#e5e7eb;background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 24px;gap:12px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.04);-moz-box-shadow:0 1px 3px rgba(0,0,0,.04);box-shadow:0 1px 3px rgba(0,0,0,.04);position:-webkit-sticky;position:sticky;top:0;z-index:100}.topbar-clock.jsx-5764d96973b29a1b{font-size:13px;color:#6b7280;font-weight:500;font-family:"JetBrains Mono",monospace;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.session-timer.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:6px 12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#ecfdf5;border:1px solid#a7f3d0;font-size:13px;font-weight:700;color:#047857;font-family:"JetBrains Mono",monospace;white-space:nowrap}.session-timer.jsx-5764d96973b29a1b svg.jsx-5764d96973b29a1b{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.session-timer.is-warning.jsx-5764d96973b29a1b{background:#fef3c7;border-color:#fbbf24;color:#b45309;-webkit-animation:pulse-warning 1s ease-in-out infinite;-moz-animation:pulse-warning 1s ease-in-out infinite;-o-animation:pulse-warning 1s ease-in-out infinite;animation:pulse-warning 1s ease-in-out infinite}@-webkit-keyframes pulse-warning{0%,100%{opacity:1}50%{opacity:.7}}@-moz-keyframes pulse-warning{0%,100%{opacity:1}50%{opacity:.7}}@-o-keyframes pulse-warning{0%,100%{opacity:1}50%{opacity:.7}}@keyframes pulse-warning{0%,100%{opacity:1}50%{opacity:.7}}.topbar-right.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px}.notif-wrap.jsx-5764d96973b29a1b{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.notif-bell.jsx-5764d96973b29a1b{position:relative;border:1px solid#e5e7eb;background:#fff;color:#4b5563;width:40px;height:40px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.notif-bell.jsx-5764d96973b29a1b:hover{background:#f5f3ff;border-color:#ddd6fe;color:#6d28d9}.notif-badge.jsx-5764d96973b29a1b{position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;padding:0 5px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;font-weight:800;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:0 0 0 2px#fff;-moz-box-shadow:0 0 0 2px#fff;box-shadow:0 0 0 2px#fff}.notif-backdrop.jsx-5764d96973b29a1b{position:fixed;inset:0;z-index:190}.notif-dropdown.jsx-5764d96973b29a1b{position:absolute;top:52px;right:0;width:340px;max-width:88vw;background:#fff;border:1px solid#e5e7eb;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;-webkit-box-shadow:0 16px 48px rgba(0,0,0,.16);-moz-box-shadow:0 16px 48px rgba(0,0,0,.16);box-shadow:0 16px 48px rgba(0,0,0,.16);z-index:200;overflow:hidden}.notif-header.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:14px 16px;border-bottom:1px solid#f1f5f9}.notif-header.jsx-5764d96973b29a1b strong.jsx-5764d96973b29a1b{font-size:14px;color:#111827}.notif-markall.jsx-5764d96973b29a1b{border:none;background:none;color:#6d28d9;font-size:12px;font-weight:700;cursor:pointer;padding:0}.notif-markall.jsx-5764d96973b29a1b:hover{text-decoration:underline}.notif-list.jsx-5764d96973b29a1b{max-height:380px;overflow-y:auto}.notif-empty.jsx-5764d96973b29a1b{padding:32px 16px;text-align:center;color:#9ca3af;font-size:13px}.notif-item.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid#f8fafc;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.notif-item.is-unread.jsx-5764d96973b29a1b{background:#faf5ff}.notif-dot.jsx-5764d96973b29a1b{width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#7c3aed;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-top:5px}.notif-item.jsx-5764d96973b29a1b:not(.is-unread) .notif-body.jsx-5764d96973b29a1b{padding-left:18px}.notif-body.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px;min-width:0}.notif-title.jsx-5764d96973b29a1b{font-size:13px;font-weight:700;color:#1f2937}.notif-msg.jsx-5764d96973b29a1b{font-size:12px;color:#6b7280;line-height:1.4;word-break:break-word}.notif-time.jsx-5764d96973b29a1b{font-size:11px;color:#9ca3af;margin-top:2px}.topbar-admin-info.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.topbar-avatar.jsx-5764d96973b29a1b{width:38px;height:38px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:-webkit-linear-gradient(315deg,#7c3aed,#6d28d9);background:-moz-linear-gradient(315deg,#7c3aed,#6d28d9);background:-o-linear-gradient(315deg,#7c3aed,#6d28d9);background:linear-gradient(135deg,#7c3aed,#6d28d9);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.topbar-avatar.jsx-5764d96973b29a1b span.jsx-5764d96973b29a1b{color:#fff;font-size:14px;font-weight:800}.topbar-avatar-img.jsx-5764d96973b29a1b{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.topbar-admin-text.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.topbar-admin-text.jsx-5764d96973b29a1b strong.jsx-5764d96973b29a1b{font-size:13px;color:#1f2937;line-height:1.2;font-weight:700}.topbar-admin-text.jsx-5764d96973b29a1b span.jsx-5764d96973b29a1b{font-size:11px;color:#7c3aed;font-weight:600}.hamburger-btn.jsx-5764d96973b29a1b{display:none;border:none;background:none;cursor:pointer;padding:6px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:#4a4864}.hamburger-btn.jsx-5764d96973b29a1b:hover{background:#f1ebff}.logout-btn.jsx-5764d96973b29a1b{border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:9px 14px;background:#fff;color:#dc2626;cursor:pointer;font-weight:600;font-size:13px;white-space:nowrap;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.logout-btn.jsx-5764d96973b29a1b:hover{background:#fef2f2;border-color:#fecaca}.admin-content.jsx-5764d96973b29a1b{padding:24px;overflow-x:auto}@media(max-width:1080px){.admin-shell.jsx-5764d96973b29a1b{grid-template-columns:1fr}.admin-sidebar.jsx-5764d96973b29a1b{position:fixed;top:0;left:0;bottom:0;width:280px;z-index:1200;-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.admin-sidebar.is-open.jsx-5764d96973b29a1b{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);-webkit-box-shadow:4px 0 24px rgba(0,0,0,.3);-moz-box-shadow:4px 0 24px rgba(0,0,0,.3);box-shadow:4px 0 24px rgba(0,0,0,.3)}.sidebar-close.jsx-5764d96973b29a1b{display:block}.sidebar-backdrop.jsx-5764d96973b29a1b{display:block;position:fixed;inset:0;z-index:1100;background:rgba(0,0,0,.5)}.hamburger-btn.jsx-5764d96973b29a1b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}'
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecureAdminLayout);


/***/ })

};
;