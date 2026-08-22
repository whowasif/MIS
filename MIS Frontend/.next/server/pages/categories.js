"use strict";
(() => {
var exports = {};
exports.id = 3161;
exports.ids = [3161,7174,2984];
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

/***/ 8582:
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
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6151);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_6__]);
_components_footer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const formatCurrency = (v)=>`৳${Number(v || 0).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
const AllProductsPage = ({ categories , products , brands , maxPrice  })=>{
    const { 0: priceRange , 1: setPriceRange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        0,
        maxPrice || 500000
    ]);
    const { 0: selectedBrand , 1: setSelectedBrand  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: selectedCategory , 1: setSelectedCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: availability , 1: setAvailability  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    const { 0: sortBy , 1: setSortBy  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("default");
    const { 0: filterOpen , 1: setFilterOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const filteredProducts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let filtered = [
            ...products
        ];
        // Category filter
        if (selectedCategory) {
            filtered = filtered.filter((p)=>p.category_slug === selectedCategory);
        }
        // Price filter
        filtered = filtered.filter((p)=>p.price >= priceRange[0] && p.price <= priceRange[1]);
        // Brand filter
        if (selectedBrand) {
            filtered = filtered.filter((p)=>p.brand === selectedBrand);
        }
        // Availability
        if (availability === "in-stock") {
            filtered = filtered.filter((p)=>p.stock_qty > 0);
        } else if (availability === "upcoming") {
            filtered = filtered.filter((p)=>p.stock_qty === 0);
        }
        // Sort
        if (sortBy === "price-low") filtered.sort((a, b)=>a.price - b.price);
        else if (sortBy === "price-high") filtered.sort((a, b)=>b.price - a.price);
        else if (sortBy === "newest") filtered.sort((a, b)=>new Date(b.created_at) - new Date(a.created_at));
        return filtered;
    }, [
        products,
        priceRange,
        selectedBrand,
        selectedCategory,
        availability,
        sortBy
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: "jsx-c95d0c644423cd05",
                        children: "All Products - MIS Solution"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Browse all products from MIS Solution - Computers, Laptops, Networking, Security, Accessories and more at best prices in Bangladesh.",
                        className: "jsx-c95d0c644423cd05"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png",
                        className: "jsx-c95d0c644423cd05"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "jsx-c95d0c644423cd05" + " " + "cat-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-c95d0c644423cd05" + " " + "cat-breadcrumb",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-c95d0c644423cd05",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-c95d0c644423cd05",
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-c95d0c644423cd05",
                                    children: "All Products"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-c95d0c644423cd05" + " " + "cat-header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-c95d0c644423cd05",
                                    children: "All Products"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-c95d0c644423cd05",
                                    children: "Browse our complete catalog of IT products, hardware, networking equipment, and accessories."
                                })
                            ]
                        })
                    }),
                    categories.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-c95d0c644423cd05" + " " + "brands-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedCategory(""),
                                    className: "jsx-c95d0c644423cd05" + " " + `brand-chip ${!selectedCategory ? "active" : ""}`,
                                    children: "All Categories"
                                }),
                                categories.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setSelectedCategory(selectedCategory === c.slug ? "" : c.slug),
                                        className: "jsx-c95d0c644423cd05" + " " + `brand-chip ${selectedCategory === c.slug ? "active" : ""}`,
                                        children: c.name
                                    }, c.id))
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-c95d0c644423cd05" + " " + "cat-main",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "cat-container cat-grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                    className: "jsx-c95d0c644423cd05" + " " + "cat-sidebar",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-c95d0c644423cd05",
                                                    children: "Price Range"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: maxPrice || 500000,
                                                    step: "1000",
                                                    value: priceRange[1],
                                                    onChange: (e)=>setPriceRange([
                                                            priceRange[0],
                                                            Number(e.target.value)
                                                        ]),
                                                    className: "jsx-c95d0c644423cd05" + " " + "price-slider"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "price-inputs",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "number",
                                                            value: priceRange[0],
                                                            onChange: (e)=>setPriceRange([
                                                                    Number(e.target.value),
                                                                    priceRange[1]
                                                                ]),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "number",
                                                            value: priceRange[1],
                                                            onChange: (e)=>setPriceRange([
                                                                    priceRange[0],
                                                                    Number(e.target.value)
                                                                ]),
                                                            className: "jsx-c95d0c644423cd05"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-c95d0c644423cd05",
                                                    children: "Availability"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "all",
                                                            onChange: ()=>setAvailability("all"),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        " All"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "in-stock",
                                                            onChange: ()=>setAvailability("in-stock"),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        " In Stock"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "upcoming",
                                                            onChange: ()=>setAvailability("upcoming"),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        " Upcoming"
                                                    ]
                                                })
                                            ]
                                        }),
                                        brands.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-c95d0c644423cd05",
                                                    children: "Brand"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-options-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "radio",
                                                                    name: "brand",
                                                                    checked: !selectedBrand,
                                                                    onChange: ()=>setSelectedBrand(""),
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                " All"
                                                            ]
                                                        }),
                                                        brands.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        name: "brand",
                                                                        checked: selectedBrand === b,
                                                                        onChange: ()=>setSelectedBrand(b),
                                                                        className: "jsx-c95d0c644423cd05"
                                                                    }),
                                                                    " ",
                                                                    b
                                                                ]
                                                            }, b))
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-c95d0c644423cd05",
                                                    children: "Category"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-options-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "radio",
                                                                    name: "cat",
                                                                    checked: !selectedCategory,
                                                                    onChange: ()=>setSelectedCategory(""),
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                " All"
                                                            ]
                                                        }),
                                                        categories.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        name: "cat",
                                                                        checked: selectedCategory === c.slug,
                                                                        onChange: ()=>setSelectedCategory(c.slug),
                                                                        className: "jsx-c95d0c644423cd05"
                                                                    }),
                                                                    " ",
                                                                    c.name
                                                                ]
                                                            }, c.id))
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "jsx-c95d0c644423cd05" + " " + "cat-products",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "cat-toolbar",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: ()=>setFilterOpen(true),
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-toggle-btn",
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
                                                            className: "jsx-c95d0c644423cd05",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "4",
                                                                    y1: "21",
                                                                    x2: "4",
                                                                    y2: "14",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "4",
                                                                    y1: "10",
                                                                    x2: "4",
                                                                    y2: "3",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "12",
                                                                    y1: "21",
                                                                    x2: "12",
                                                                    y2: "12",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "12",
                                                                    y1: "8",
                                                                    x2: "12",
                                                                    y2: "3",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "20",
                                                                    y1: "21",
                                                                    x2: "20",
                                                                    y2: "16",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "20",
                                                                    y1: "12",
                                                                    x2: "20",
                                                                    y2: "3",
                                                                    className: "jsx-c95d0c644423cd05"
                                                                })
                                                            ]
                                                        }),
                                                        "Filter"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "toolbar-title",
                                                    children: "All Products"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "toolbar-controls",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "jsx-c95d0c644423cd05" + " " + "product-count",
                                                            children: [
                                                                "Show: ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                    className: "jsx-c95d0c644423cd05",
                                                                    children: filteredProducts.length
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-c95d0c644423cd05" + " " + "sort-label",
                                                            children: "Sort By:"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            value: sortBy,
                                                            onChange: (e)=>setSortBy(e.target.value),
                                                            className: "jsx-c95d0c644423cd05" + " " + "sort-select",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "default",
                                                                    className: "jsx-c95d0c644423cd05",
                                                                    children: "Default"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "price-low",
                                                                    className: "jsx-c95d0c644423cd05",
                                                                    children: "Price: Low to High"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "price-high",
                                                                    className: "jsx-c95d0c644423cd05",
                                                                    children: "Price: High to Low"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "newest",
                                                                    className: "jsx-c95d0c644423cd05",
                                                                    children: "Newest First"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        filteredProducts.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "no-products",
                                            children: "No products match your filters."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "products-grid",
                                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "product-card-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: `/products/${product.slug || product.id}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                className: "jsx-c95d0c644423cd05" + " " + "product-card-link",
                                                                children: [
                                                                    product.regular_price && product.regular_price > product.price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "jsx-c95d0c644423cd05" + " " + "save-badge",
                                                                        children: [
                                                                            "Save: ",
                                                                            formatCurrency(product.regular_price - product.price)
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-c95d0c644423cd05" + " " + "product-card-img",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: product.thumbnail_1 || "/footer%20logo.png",
                                                                            alt: product.name,
                                                                            className: "jsx-c95d0c644423cd05"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-c95d0c644423cd05" + " " + "product-card-body",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                className: "jsx-c95d0c644423cd05",
                                                                                children: product.name
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "jsx-c95d0c644423cd05" + " " + "product-category-tag",
                                                                                children: product.category_name || "General"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "jsx-c95d0c644423cd05" + " " + "product-card-price",
                                                                                children: product.price > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                            className: "jsx-c95d0c644423cd05",
                                                                                            children: formatCurrency(product.price)
                                                                                        }),
                                                                                        product.regular_price > product.price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "jsx-c95d0c644423cd05" + " " + "old-price",
                                                                                            children: formatCurrency(product.regular_price)
                                                                                        })
                                                                                    ]
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    className: "jsx-c95d0c644423cd05" + " " + "contact-price",
                                                                                    children: "Contact for Price"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-c95d0c644423cd05" + " " + "product-card-actions",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                onClick: ()=>{
                                                                    try {
                                                                        const cart = JSON.parse(window.localStorage.getItem("misCart") || "[]");
                                                                        const id = product.slug || String(product.id);
                                                                        const existing = cart.find((item)=>item.id === id);
                                                                        if (existing) {
                                                                            existing.quantity += 1;
                                                                        } else {
                                                                            cart.push({
                                                                                id,
                                                                                productId: product.id,
                                                                                name: product.name,
                                                                                price: Number(product.price || 0),
                                                                                image: product.thumbnail_1 || "",
                                                                                quantity: 1
                                                                            });
                                                                        }
                                                                        window.localStorage.setItem("misCart", JSON.stringify(cart));
                                                                        window.dispatchEvent(new Event("mis-cart-updated"));
                                                                    } catch (err) {}
                                                                },
                                                                className: "jsx-c95d0c644423cd05" + " " + "add-cart-btn",
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
                                                                        className: "jsx-c95d0c644423cd05",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                cx: "9",
                                                                                cy: "21",
                                                                                r: "1",
                                                                                className: "jsx-c95d0c644423cd05"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                cx: "20",
                                                                                cy: "21",
                                                                                r: "1",
                                                                                className: "jsx-c95d0c644423cd05"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
                                                                                className: "jsx-c95d0c644423cd05"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    "Add to Cart"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, product.id))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            filterOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setFilterOpen(false),
                className: "jsx-c95d0c644423cd05" + " " + "filter-overlay",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-c95d0c644423cd05" + " " + "filter-drawer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "filter-drawer-head",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-c95d0c644423cd05",
                                    children: "Filters"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setFilterOpen(false),
                                    className: "jsx-c95d0c644423cd05" + " " + "filter-drawer-close",
                                    children: "✕"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "filter-drawer-body",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-c95d0c644423cd05",
                                            children: "Price Range"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "range",
                                            min: "0",
                                            max: maxPrice || 500000,
                                            step: "1000",
                                            value: priceRange[1],
                                            onChange: (e)=>setPriceRange([
                                                    priceRange[0],
                                                    Number(e.target.value)
                                                ]),
                                            className: "jsx-c95d0c644423cd05" + " " + "price-slider"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "price-inputs",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "number",
                                                    value: priceRange[0],
                                                    onChange: (e)=>setPriceRange([
                                                            Number(e.target.value),
                                                            priceRange[1]
                                                        ]),
                                                    className: "jsx-c95d0c644423cd05"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "number",
                                                    value: priceRange[1],
                                                    onChange: (e)=>setPriceRange([
                                                            priceRange[0],
                                                            Number(e.target.value)
                                                        ]),
                                                    className: "jsx-c95d0c644423cd05"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-c95d0c644423cd05",
                                            children: "Availability"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    name: "avail-m",
                                                    checked: availability === "all",
                                                    onChange: ()=>setAvailability("all"),
                                                    className: "jsx-c95d0c644423cd05"
                                                }),
                                                " All"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    name: "avail-m",
                                                    checked: availability === "in-stock",
                                                    onChange: ()=>setAvailability("in-stock"),
                                                    className: "jsx-c95d0c644423cd05"
                                                }),
                                                " In Stock"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "radio",
                                                    name: "avail-m",
                                                    checked: availability === "upcoming",
                                                    onChange: ()=>setAvailability("upcoming"),
                                                    className: "jsx-c95d0c644423cd05"
                                                }),
                                                " Upcoming"
                                            ]
                                        })
                                    ]
                                }),
                                brands.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-c95d0c644423cd05",
                                            children: "Brand"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-options-list",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "brand-m",
                                                            checked: !selectedBrand,
                                                            onChange: ()=>setSelectedBrand(""),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        " All"
                                                    ]
                                                }),
                                                brands.map((b)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "radio",
                                                                name: "brand-m",
                                                                checked: selectedBrand === b,
                                                                onChange: ()=>setSelectedBrand(b),
                                                                className: "jsx-c95d0c644423cd05"
                                                            }),
                                                            b
                                                        ]
                                                    }, b))
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-c95d0c644423cd05" + " " + "filter-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-c95d0c644423cd05",
                                            children: "Category"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c95d0c644423cd05" + " " + "filter-options-list",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "cat-m",
                                                            checked: !selectedCategory,
                                                            onChange: ()=>setSelectedCategory(""),
                                                            className: "jsx-c95d0c644423cd05"
                                                        }),
                                                        " All"
                                                    ]
                                                }),
                                                categories.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "jsx-c95d0c644423cd05" + " " + "filter-option",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "radio",
                                                                name: "cat-m",
                                                                checked: selectedCategory === c.slug,
                                                                onChange: ()=>setSelectedCategory(c.slug),
                                                                className: "jsx-c95d0c644423cd05"
                                                            }),
                                                            c.name
                                                        ]
                                                    }, c.id))
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-c95d0c644423cd05" + " " + "filter-drawer-footer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setFilterOpen(false),
                                className: "jsx-c95d0c644423cd05" + " " + "filter-apply-btn",
                                children: [
                                    "Show ",
                                    filteredProducts.length,
                                    " Products"
                                ]
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c95d0c644423cd05",
                children: '.cat-page.jsx-c95d0c644423cd05{min-height:100vh;background:#f0f3f8;font-family:"Inter","Segoe UI",Arial,sans-serif}.cat-container.jsx-c95d0c644423cd05{max-width:1320px;margin:0 auto;padding:0 16px}.cat-breadcrumb.jsx-c95d0c644423cd05{padding:12px 0;background:#fff;border-bottom:1px solid#e8ecf1}.cat-breadcrumb.jsx-c95d0c644423cd05 .cat-container.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;font-size:13px;color:#6b7280;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cat-breadcrumb.jsx-c95d0c644423cd05 a{color:#3b82f6;text-decoration:none;font-weight:500}.cat-breadcrumb.jsx-c95d0c644423cd05 a:hover{text-decoration:underline}.cat-header.jsx-c95d0c644423cd05{padding:20px 0 12px;background:#fff;border-bottom:1px solid#e8ecf1}.cat-header.jsx-c95d0c644423cd05 h1.jsx-c95d0c644423cd05{margin:0;font-size:20px;color:#1e3a5f;font-weight:700}.cat-header.jsx-c95d0c644423cd05 p.jsx-c95d0c644423cd05{margin:6px 0 0;color:#64748b;font-size:13px;line-height:1.6;max-width:800px}.brands-row.jsx-c95d0c644423cd05{padding:12px 0;background:#fff;border-bottom:1px solid#e8ecf1}.brands-row.jsx-c95d0c644423cd05 .cat-container.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.brand-chip.jsx-c95d0c644423cd05{border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:5px 14px;background:#fff;font-size:12px;font-weight:500;cursor:pointer;color:#374151;-webkit-transition:all.12s;-moz-transition:all.12s;-o-transition:all.12s;transition:all.12s}.brand-chip.jsx-c95d0c644423cd05:hover{border-color:#3b82f6;color:#3b82f6}.brand-chip.active.jsx-c95d0c644423cd05{background:#3b82f6;color:#fff;border-color:#3b82f6}.cat-main.jsx-c95d0c644423cd05{padding:20px 0 48px}.cat-grid.jsx-c95d0c644423cd05{display:grid;grid-template-columns:260px 1fr;gap:20px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.cat-sidebar.jsx-c95d0c644423cd05{position:-webkit-sticky;position:sticky;top:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:0;background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;overflow:hidden}.filter-block.jsx-c95d0c644423cd05{padding:14px 16px;border-bottom:1px solid#f1f5f9}.filter-block.jsx-c95d0c644423cd05:last-child{border-bottom:none}.filter-block.jsx-c95d0c644423cd05 h3.jsx-c95d0c644423cd05{margin:0 0 10px;font-size:13px;color:#1e293b;font-weight:700}.price-slider.jsx-c95d0c644423cd05{width:100%;accent-color:#ef4444;margin-bottom:8px;height:4px}.price-inputs.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.price-inputs.jsx-c95d0c644423cd05 input.jsx-c95d0c644423cd05{width:50%;border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:5px 6px;font-size:12px;text-align:center}.filter-options-list.jsx-c95d0c644423cd05{max-height:180px;overflow-y:auto}.filter-option.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:3px 0;font-size:12.5px;color:#374151;cursor:pointer}.filter-option.jsx-c95d0c644423cd05 input.jsx-c95d0c644423cd05{accent-color:#3b82f6;width:14px;height:14px}.cat-products.jsx-c95d0c644423cd05{min-width:0}.cat-toolbar.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 16px;background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:16px}.toolbar-title.jsx-c95d0c644423cd05{margin:0;font-size:16px;color:#1e293b;font-weight:700}.toolbar-controls.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px}.product-count.jsx-c95d0c644423cd05{font-size:12px;color:#64748b}.product-count.jsx-c95d0c644423cd05 strong.jsx-c95d0c644423cd05{color:#1e293b}.sort-label.jsx-c95d0c644423cd05{font-size:12px;color:#64748b}.sort-select.jsx-c95d0c644423cd05{border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:6px 10px;font-size:12px;color:#374151}.products-grid.jsx-c95d0c644423cd05{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}.product-card-item.jsx-c95d0c644423cd05{position:relative;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;overflow:hidden;-webkit-transition:box-shadow.2s,border-color.2s;-moz-transition:box-shadow.2s,border-color.2s;-o-transition:box-shadow.2s,border-color.2s;transition:box-shadow.2s,border-color.2s;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-card-item.jsx-c95d0c644423cd05:hover{-webkit-box-shadow:0 6px 20px rgba(0,0,0,.08);-moz-box-shadow:0 6px 20px rgba(0,0,0,.08);box-shadow:0 6px 20px rgba(0,0,0,.08);border-color:#cbd5e1}.product-card-link.jsx-c95d0c644423cd05{text-decoration:none;color:inherit;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.save-badge.jsx-c95d0c644423cd05{position:absolute;top:8px;left:8px;padding:2px 8px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background:#7c3aed;color:#fff;font-size:10px;font-weight:700;z-index:1}.product-card-img.jsx-c95d0c644423cd05{height:170px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:12px;background:#fff;border-bottom:1px solid#f1f5f9}.product-card-img.jsx-c95d0c644423cd05 img.jsx-c95d0c644423cd05{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain;mix-blend-mode:multiply}.product-card-body.jsx-c95d0c644423cd05{padding:12px 14px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-card-body.jsx-c95d0c644423cd05 h4.jsx-c95d0c644423cd05{margin:0 0 6px;font-size:13px;color:#1e293b;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.product-category-tag.jsx-c95d0c644423cd05{display:inline-block;font-size:10px;color:#6b7280;background:#f1f5f9;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:2px 7px;margin-bottom:8px;font-weight:500}.product-card-price.jsx-c95d0c644423cd05{margin-top:auto;padding-top:10px;border-top:1px solid#f1f5f9;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;gap:8px}.product-card-price.jsx-c95d0c644423cd05 strong.jsx-c95d0c644423cd05{font-size:15px;color:#ef4444;font-weight:700}.old-price.jsx-c95d0c644423cd05{font-size:12px;color:#9ca3af;text-decoration:line-through}.contact-price.jsx-c95d0c644423cd05{color:#64748b;font-size:13px;font-weight:600}.product-card-actions.jsx-c95d0c644423cd05{margin-top:10px}.add-cart-btn.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:6px;width:100%;padding:8px;border:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#3b82f6;color:#fff;font-size:12px;font-weight:700;cursor:pointer;-webkit-transition:background.15s;-moz-transition:background.15s;-o-transition:background.15s;transition:background.15s}.add-cart-btn.jsx-c95d0c644423cd05:hover{background:#2563eb}.no-products.jsx-c95d0c644423cd05{padding:48px;text-align:center;color:#94a3b8;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;font-size:14px}.filter-toggle-btn.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;border:1px solid#d4dae3;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:8px 14px;background:#fff;font-size:13px;font-weight:600;color:#374151;cursor:pointer;-webkit-transition:border-color.12s;-moz-transition:border-color.12s;-o-transition:border-color.12s;transition:border-color.12s}.filter-toggle-btn.jsx-c95d0c644423cd05:hover{border-color:#3b82f6;color:#3b82f6}.filter-overlay.jsx-c95d0c644423cd05{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:2000;-webkit-animation:fadeIn.15s;-moz-animation:fadeIn.15s;-o-animation:fadeIn.15s;animation:fadeIn.15s}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.filter-drawer.jsx-c95d0c644423cd05{position:fixed;top:0;right:0;width:min(360px,85vw);height:100vh;background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:-8px 0 24px rgba(0,0,0,.15);-moz-box-shadow:-8px 0 24px rgba(0,0,0,.15);box-shadow:-8px 0 24px rgba(0,0,0,.15);-webkit-animation:slideIn.2s ease-out;-moz-animation:slideIn.2s ease-out;-o-animation:slideIn.2s ease-out;animation:slideIn.2s ease-out}@-webkit-keyframes slideIn{from{-webkit-transform:translateX(100%);transform:translateX(100%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-moz-keyframes slideIn{from{-moz-transform:translateX(100%);transform:translateX(100%)}to{-moz-transform:translateX(0);transform:translateX(0)}}@-o-keyframes slideIn{from{-o-transform:translateX(100%);transform:translateX(100%)}to{-o-transform:translateX(0);transform:translateX(0)}}@keyframes slideIn{from{-webkit-transform:translateX(100%);-moz-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}to{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}}.filter-drawer-head.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:18px 20px;border-bottom:1px solid#e5e7eb}.filter-drawer-head.jsx-c95d0c644423cd05 span.jsx-c95d0c644423cd05{font-size:18px;font-weight:700;color:#111827}.filter-drawer-close.jsx-c95d0c644423cd05{border:none;background:transparent;font-size:22px;cursor:pointer;color:#6b7280;width:32px;height:32px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.filter-drawer-close.jsx-c95d0c644423cd05:hover{background:#f3f4f6}.filter-drawer-body.jsx-c95d0c644423cd05{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;padding:0}.filter-drawer-body.jsx-c95d0c644423cd05 .filter-block.jsx-c95d0c644423cd05{padding:16px 20px;border-bottom:1px solid#f1f5f9}.filter-drawer-body.jsx-c95d0c644423cd05 .filter-block.jsx-c95d0c644423cd05 h3.jsx-c95d0c644423cd05{margin:0 0 12px;font-size:14px;color:#1e293b;font-weight:700}.filter-drawer-body.jsx-c95d0c644423cd05 .filter-option.jsx-c95d0c644423cd05{padding:5px 0;font-size:13px}.filter-drawer-body.jsx-c95d0c644423cd05 .price-slider.jsx-c95d0c644423cd05{width:100%;accent-color:#ef4444}.filter-drawer-body.jsx-c95d0c644423cd05 .price-inputs.jsx-c95d0c644423cd05{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;margin-top:8px}.filter-drawer-body.jsx-c95d0c644423cd05 .price-inputs.jsx-c95d0c644423cd05 input.jsx-c95d0c644423cd05{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;border:1px solid#d4dae3;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:8px 10px;font-size:13px;text-align:center}.filter-drawer-body.jsx-c95d0c644423cd05 .filter-options-list.jsx-c95d0c644423cd05{max-height:200px;overflow-y:auto}.filter-drawer-footer.jsx-c95d0c644423cd05{padding:16px 20px;border-top:1px solid#e5e7eb}.filter-apply-btn.jsx-c95d0c644423cd05{width:100%;padding:12px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#1e293b;color:#fff;font-size:14px;font-weight:700;cursor:pointer;-webkit-transition:background.15s;-moz-transition:background.15s;-o-transition:background.15s;transition:background.15s}.filter-apply-btn.jsx-c95d0c644423cd05:hover{background:#334155}@media(max-width:960px){.cat-grid.jsx-c95d0c644423cd05{grid-template-columns:220px 1fr}.products-grid.jsx-c95d0c644423cd05{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}}@media(max-width:768px){.cat-grid.jsx-c95d0c644423cd05{grid-template-columns:1fr}.cat-sidebar.jsx-c95d0c644423cd05{position:static;display:none}.products-grid.jsx-c95d0c644423cd05{grid-template-columns:repeat(2,1fr);gap:10px}.product-card-img.jsx-c95d0c644423cd05{height:140px}.toolbar-title.jsx-c95d0c644423cd05{display:none}}'
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_7__.getDbPool)();
        // Get all active categories
        const [cats] = await db.query("SELECT id, name, slug FROM categories WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, name ASC");
        // Get all active products
        const [products] = await db.query(`SELECT p.*, c.name AS category_name, c.slug AS category_slug
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
       ORDER BY p.created_at DESC
       LIMIT 500`);
        // Get unique brands
        const brands = [
            ...new Set(products.map((p)=>p.brand).filter(Boolean))
        ].sort();
        // Max price
        const maxPrice = Math.max(...products.map((p)=>Number(p.price || 0)), 10000);
        return {
            props: {
                categories: JSON.parse(JSON.stringify(cats)),
                products: JSON.parse(JSON.stringify(products)),
                brands,
                maxPrice
            }
        };
    } catch (e) {
        console.error("All products page error:", e);
        return {
            props: {
                categories: [],
                products: [],
                brands: [],
                maxPrice: 500000
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProductsPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(8582)));
module.exports = __webpack_exports__;

})();