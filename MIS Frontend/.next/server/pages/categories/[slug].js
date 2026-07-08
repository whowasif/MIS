"use strict";
(() => {
var exports = {};
exports.id = 9591;
exports.ids = [9591,7174,2984];
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

/***/ 8808:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6151);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_7__]);
_components_footer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const formatCurrency = (v)=>`৳${Number(v || 0).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
const CategoryPage = ({ category , subcategories , products , specs , brands , maxPrice  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: priceRange , 1: setPriceRange  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        0,
        maxPrice || 500000
    ]);
    const { 0: selectedBrand , 1: setSelectedBrand  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: selectedSpecs , 1: setSelectedSpecs  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const { 0: availability , 1: setAvailability  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    const { 0: sortBy , 1: setSortBy  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("default");
    // Reset filters when category changes (client-side navigation)
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setPriceRange([
            0,
            maxPrice || 500000
        ]);
        setSelectedBrand("");
        setSelectedSpecs({});
        setAvailability("all");
        setSortBy("default");
    }, [
        category?.id,
        maxPrice
    ]);
    const filteredProducts = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        let filtered = [
            ...products
        ];
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
        // Spec filters
        Object.entries(selectedSpecs).forEach(([specName, specValue])=>{
            if (!specValue) return;
            filtered = filtered.filter((p)=>{
                const pSpec = p.specs?.find((s)=>s.spec_name === specName);
                return pSpec?.spec_value === specValue;
            });
        });
        // Sort
        if (sortBy === "price-low") filtered.sort((a, b)=>a.price - b.price);
        else if (sortBy === "price-high") filtered.sort((a, b)=>b.price - a.price);
        else if (sortBy === "newest") filtered.sort((a, b)=>new Date(b.created_at) - new Date(a.created_at));
        return filtered;
    }, [
        products,
        priceRange,
        selectedBrand,
        selectedSpecs,
        availability,
        sortBy
    ]);
    // Get unique values for each spec from current products
    const specOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const options = {};
        specs.forEach((spec)=>{
            const values = new Set();
            products.forEach((p)=>{
                const pSpec = p.specs?.find((s)=>s.spec_name === spec.spec_name);
                if (pSpec?.spec_value) values.add(pSpec.spec_value);
            });
            if (values.size > 0) options[spec.spec_name] = {
                label: spec.spec_label,
                values: [
                    ...values
                ].sort()
            };
        });
        return options;
    }, [
        specs,
        products
    ]);
    if (!category) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    style: {
                        minHeight: "60vh",
                        display: "grid",
                        placeItems: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Category Not Found"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/product-catalog",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: "Browse All Products"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        className: "jsx-609e02266d60a7d8",
                        children: [
                            category.meta_title || `${category.name} Price in Bangladesh`,
                            " | MIS Solution"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: category.meta_description || category.description || `Buy ${category.name} from MIS Solution at best price in Bangladesh.`,
                        className: "jsx-609e02266d60a7d8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png",
                        className: "jsx-609e02266d60a7d8"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "jsx-609e02266d60a7d8" + " " + "cat-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-609e02266d60a7d8" + " " + "cat-breadcrumb",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-609e02266d60a7d8" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-609e02266d60a7d8",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-609e02266d60a7d8",
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-609e02266d60a7d8",
                                    children: category.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-609e02266d60a7d8" + " " + "cat-header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-609e02266d60a7d8" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "jsx-609e02266d60a7d8",
                                    children: [
                                        category.name,
                                        " Price in Bangladesh"
                                    ]
                                }),
                                category.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-609e02266d60a7d8",
                                    children: category.description
                                })
                            ]
                        })
                    }),
                    brands.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-609e02266d60a7d8" + " " + "brands-row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-609e02266d60a7d8" + " " + "cat-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setSelectedBrand(""),
                                    className: "jsx-609e02266d60a7d8" + " " + `brand-chip ${!selectedBrand ? "active" : ""}`,
                                    children: "All"
                                }),
                                brands.map((b)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setSelectedBrand(selectedBrand === b ? "" : b),
                                        className: "jsx-609e02266d60a7d8" + " " + `brand-chip ${selectedBrand === b ? "active" : ""}`,
                                        children: b
                                    }, b))
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-609e02266d60a7d8" + " " + "cat-main",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-609e02266d60a7d8" + " " + "cat-container cat-grid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                    className: "jsx-609e02266d60a7d8" + " " + "cat-sidebar",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-609e02266d60a7d8" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-609e02266d60a7d8",
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
                                                    className: "jsx-609e02266d60a7d8" + " " + "price-slider"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "price-inputs",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "number",
                                                            value: priceRange[0],
                                                            onChange: (e)=>setPriceRange([
                                                                    Number(e.target.value),
                                                                    priceRange[1]
                                                                ]),
                                                            className: "jsx-609e02266d60a7d8"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "number",
                                                            value: priceRange[1],
                                                            onChange: (e)=>setPriceRange([
                                                                    priceRange[0],
                                                                    Number(e.target.value)
                                                                ]),
                                                            className: "jsx-609e02266d60a7d8"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-609e02266d60a7d8" + " " + "filter-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-609e02266d60a7d8",
                                                    children: "Availability"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "all",
                                                            onChange: ()=>setAvailability("all"),
                                                            className: "jsx-609e02266d60a7d8"
                                                        }),
                                                        " All"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "in-stock",
                                                            onChange: ()=>setAvailability("in-stock"),
                                                            className: "jsx-609e02266d60a7d8"
                                                        }),
                                                        " In Stock"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "filter-option",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "radio",
                                                            name: "avail",
                                                            checked: availability === "upcoming",
                                                            onChange: ()=>setAvailability("upcoming"),
                                                            className: "jsx-609e02266d60a7d8"
                                                        }),
                                                        " Upcoming"
                                                    ]
                                                })
                                            ]
                                        }),
                                        Object.entries(specOptions).map(([specName, { label , values  }])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-609e02266d60a7d8" + " " + "filter-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-609e02266d60a7d8",
                                                        children: label
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-609e02266d60a7d8" + " " + "filter-options-list",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "jsx-609e02266d60a7d8" + " " + "filter-option",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "radio",
                                                                        name: specName,
                                                                        checked: !selectedSpecs[specName],
                                                                        onChange: ()=>setSelectedSpecs((p)=>({
                                                                                    ...p,
                                                                                    [specName]: ""
                                                                                })),
                                                                        className: "jsx-609e02266d60a7d8"
                                                                    }),
                                                                    " All"
                                                                ]
                                                            }),
                                                            values.map((val)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                    className: "jsx-609e02266d60a7d8" + " " + "filter-option",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "radio",
                                                                            name: specName,
                                                                            checked: selectedSpecs[specName] === val,
                                                                            onChange: ()=>setSelectedSpecs((p)=>({
                                                                                        ...p,
                                                                                        [specName]: val
                                                                                    })),
                                                                            className: "jsx-609e02266d60a7d8"
                                                                        }),
                                                                        val
                                                                    ]
                                                                }, val))
                                                        ]
                                                    })
                                                ]
                                            }, specName))
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                    className: "jsx-609e02266d60a7d8" + " " + "cat-products",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-609e02266d60a7d8" + " " + "cat-toolbar",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "toolbar-title",
                                                    children: category.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "toolbar-controls",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "jsx-609e02266d60a7d8" + " " + "product-count",
                                                            children: [
                                                                "Show: ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                    className: "jsx-609e02266d60a7d8",
                                                                    children: filteredProducts.length
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-609e02266d60a7d8" + " " + "sort-label",
                                                            children: "Sort By:"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                            value: sortBy,
                                                            onChange: (e)=>setSortBy(e.target.value),
                                                            className: "jsx-609e02266d60a7d8" + " " + "sort-select",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "default",
                                                                    className: "jsx-609e02266d60a7d8",
                                                                    children: "Default"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "price-low",
                                                                    className: "jsx-609e02266d60a7d8",
                                                                    children: "Price: Low to High"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "price-high",
                                                                    className: "jsx-609e02266d60a7d8",
                                                                    children: "Price: High to Low"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                    value: "newest",
                                                                    className: "jsx-609e02266d60a7d8",
                                                                    children: "Newest First"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        filteredProducts.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-609e02266d60a7d8" + " " + "no-products",
                                            children: "No products match your filters."
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-609e02266d60a7d8" + " " + "products-grid",
                                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-609e02266d60a7d8" + " " + "product-card-item",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: `/products/${product.slug || product.id}`,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                className: "jsx-609e02266d60a7d8" + " " + "product-card-link",
                                                                children: [
                                                                    product.regular_price && product.regular_price > product.price && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "jsx-609e02266d60a7d8" + " " + "save-badge",
                                                                        children: [
                                                                            "Save: ",
                                                                            formatCurrency(product.regular_price - product.price)
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-609e02266d60a7d8" + " " + "product-card-img",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: product.thumbnail_1 || "/footer%20logo.png",
                                                                            alt: product.name,
                                                                            className: "jsx-609e02266d60a7d8"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "jsx-609e02266d60a7d8" + " " + "product-card-body",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                className: "jsx-609e02266d60a7d8",
                                                                                children: product.name
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                className: "jsx-609e02266d60a7d8" + " " + "spec-list",
                                                                                children: product.specs?.slice(0, 4).map((spec)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        className: "jsx-609e02266d60a7d8",
                                                                                        children: spec.spec_value
                                                                                    }, spec.spec_name))
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "jsx-609e02266d60a7d8" + " " + "product-card-price",
                                                                                children: product.price > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                            className: "jsx-609e02266d60a7d8",
                                                                                            children: formatCurrency(product.price)
                                                                                        }),
                                                                                        product.regular_price > product.price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "jsx-609e02266d60a7d8" + " " + "old-price",
                                                                                            children: formatCurrency(product.regular_price)
                                                                                        })
                                                                                    ]
                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                                    className: "jsx-609e02266d60a7d8" + " " + "contact-price",
                                                                                    children: "Contact for Price"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-609e02266d60a7d8" + " " + "product-card-actions",
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
                                                                className: "jsx-609e02266d60a7d8" + " " + "add-cart-btn",
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
                                                                        className: "jsx-609e02266d60a7d8",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                cx: "9",
                                                                                cy: "21",
                                                                                r: "1",
                                                                                className: "jsx-609e02266d60a7d8"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                cx: "20",
                                                                                cy: "21",
                                                                                r: "1",
                                                                                className: "jsx-609e02266d60a7d8"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
                                                                                className: "jsx-609e02266d60a7d8"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "609e02266d60a7d8",
                children: '.cat-page.jsx-609e02266d60a7d8{min-height:100vh;background:#f0f3f8;font-family:"Inter","Segoe UI",Arial,sans-serif}.cat-container.jsx-609e02266d60a7d8{max-width:1320px;margin:0 auto;padding:0 16px}.cat-breadcrumb.jsx-609e02266d60a7d8{padding:12px 0;background:#fff;border-bottom:1px solid#e8ecf1}.cat-breadcrumb.jsx-609e02266d60a7d8 .cat-container.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;font-size:13px;color:#6b7280;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cat-breadcrumb.jsx-609e02266d60a7d8 a{color:#3b82f6;text-decoration:none;font-weight:500}.cat-breadcrumb.jsx-609e02266d60a7d8 a:hover{text-decoration:underline}.cat-header.jsx-609e02266d60a7d8{padding:20px 0 12px;background:#fff;border-bottom:1px solid#e8ecf1}.cat-header.jsx-609e02266d60a7d8 h1.jsx-609e02266d60a7d8{margin:0;font-size:20px;color:#1e3a5f;font-weight:700}.cat-header.jsx-609e02266d60a7d8 p.jsx-609e02266d60a7d8{margin:6px 0 0;color:#64748b;font-size:13px;line-height:1.6;max-width:800px}.brands-row.jsx-609e02266d60a7d8{padding:12px 0;background:#fff;border-bottom:1px solid#e8ecf1}.brands-row.jsx-609e02266d60a7d8 .cat-container.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.brand-chip.jsx-609e02266d60a7d8{border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:5px 14px;background:#fff;font-size:12px;font-weight:500;cursor:pointer;color:#374151;-webkit-transition:all.12s;-moz-transition:all.12s;-o-transition:all.12s;transition:all.12s}.brand-chip.jsx-609e02266d60a7d8:hover{border-color:#3b82f6;color:#3b82f6}.brand-chip.active.jsx-609e02266d60a7d8{background:#3b82f6;color:#fff;border-color:#3b82f6}.subcats-row.jsx-609e02266d60a7d8{padding:10px 0;background:#fff;border-bottom:1px solid#e8ecf1}.subcats-row.jsx-609e02266d60a7d8 .cat-container.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.subcat-chip.jsx-609e02266d60a7d8{padding:4px 12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid#d4dae3;background:#fff;color:#374151;font-size:12px;font-weight:500;text-decoration:none;-webkit-transition:all.12s;-moz-transition:all.12s;-o-transition:all.12s;transition:all.12s}.subcat-chip.jsx-609e02266d60a7d8:hover{border-color:#3b82f6;color:#3b82f6}.cat-main.jsx-609e02266d60a7d8{padding:20px 0 48px}.cat-grid.jsx-609e02266d60a7d8{display:grid;grid-template-columns:260px 1fr;gap:20px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.cat-sidebar.jsx-609e02266d60a7d8{position:-webkit-sticky;position:sticky;top:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:0;background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;overflow:hidden}.filter-block.jsx-609e02266d60a7d8{padding:14px 16px;border-bottom:1px solid#f1f5f9}.filter-block.jsx-609e02266d60a7d8:last-child{border-bottom:none}.filter-block.jsx-609e02266d60a7d8 h3.jsx-609e02266d60a7d8{margin:0 0 10px;font-size:13px;color:#1e293b;font-weight:700}.price-slider.jsx-609e02266d60a7d8{width:100%;accent-color:#ef4444;margin-bottom:8px;height:4px}.price-inputs.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px}.price-inputs.jsx-609e02266d60a7d8 input.jsx-609e02266d60a7d8{width:50%;border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:5px 6px;font-size:12px;text-align:center}.filter-options-list.jsx-609e02266d60a7d8{max-height:180px;overflow-y:auto}.filter-option.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:3px 0;font-size:12.5px;color:#374151;cursor:pointer}.filter-option.jsx-609e02266d60a7d8 input.jsx-609e02266d60a7d8{accent-color:#3b82f6;width:14px;height:14px}.cat-products.jsx-609e02266d60a7d8{min-width:0}.cat-toolbar.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 16px;background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:16px}.toolbar-title.jsx-609e02266d60a7d8{margin:0;font-size:16px;color:#1e293b;font-weight:700}.toolbar-controls.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px}.product-count.jsx-609e02266d60a7d8{font-size:12px;color:#64748b}.product-count.jsx-609e02266d60a7d8 strong.jsx-609e02266d60a7d8{color:#1e293b}.sort-label.jsx-609e02266d60a7d8{font-size:12px;color:#64748b}.sort-select.jsx-609e02266d60a7d8{border:1px solid#d4dae3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding:6px 10px;font-size:12px;color:#374151}.products-grid.jsx-609e02266d60a7d8{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}.product-card-item.jsx-609e02266d60a7d8{position:relative;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;overflow:hidden;-webkit-transition:box-shadow.2s,border-color.2s;-moz-transition:box-shadow.2s,border-color.2s;-o-transition:box-shadow.2s,border-color.2s;transition:box-shadow.2s,border-color.2s;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-card-item.jsx-609e02266d60a7d8:hover{-webkit-box-shadow:0 6px 20px rgba(0,0,0,.08);-moz-box-shadow:0 6px 20px rgba(0,0,0,.08);box-shadow:0 6px 20px rgba(0,0,0,.08);border-color:#cbd5e1}.product-card-link.jsx-609e02266d60a7d8{text-decoration:none;color:inherit;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.save-badge.jsx-609e02266d60a7d8{position:absolute;top:8px;left:8px;padding:2px 8px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background:#7c3aed;color:#fff;font-size:10px;font-weight:700;z-index:1}.product-card-img.jsx-609e02266d60a7d8{height:170px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:12px;background:#fff;border-bottom:1px solid#f1f5f9}.product-card-img.jsx-609e02266d60a7d8 img.jsx-609e02266d60a7d8{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain;mix-blend-mode:multiply}.product-card-body.jsx-609e02266d60a7d8{padding:12px 14px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.product-card-body.jsx-609e02266d60a7d8 h4.jsx-609e02266d60a7d8{margin:0 0 8px;font-size:13px;color:#1e293b;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.spec-list.jsx-609e02266d60a7d8{margin:0 0 8px;padding:0;list-style:none}.spec-list.jsx-609e02266d60a7d8 li.jsx-609e02266d60a7d8{position:relative;font-size:11px;color:#64748b;margin-bottom:2px;padding-left:12px;line-height:1.5}.spec-list.jsx-609e02266d60a7d8 li.jsx-609e02266d60a7d8::before{content:"•";position:absolute;left:0;color:#94a3b8}.product-card-price.jsx-609e02266d60a7d8{margin-top:auto;padding-top:10px;border-top:1px solid#f1f5f9;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;gap:8px}.product-card-price.jsx-609e02266d60a7d8 strong.jsx-609e02266d60a7d8{font-size:15px;color:#ef4444;font-weight:700}.old-price.jsx-609e02266d60a7d8{font-size:12px;color:#9ca3af;text-decoration:line-through}.contact-price.jsx-609e02266d60a7d8{color:#64748b;font-size:13px;font-weight:600}.product-card-actions.jsx-609e02266d60a7d8{margin-top:10px}.add-cart-btn.jsx-609e02266d60a7d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:6px;width:100%;padding:8px;border:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#3b82f6;color:#fff;font-size:12px;font-weight:700;cursor:pointer;-webkit-transition:background.15s;-moz-transition:background.15s;-o-transition:background.15s;transition:background.15s}.add-cart-btn.jsx-609e02266d60a7d8:hover{background:#2563eb}.product-card-item.jsx-609e02266d60a7d8:hover .add-cart-btn.jsx-609e02266d60a7d8{background:#2563eb}.no-products.jsx-609e02266d60a7d8{padding:48px;text-align:center;color:#94a3b8;border:1px solid#e2e8f0;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;font-size:14px}@media(max-width:960px){.cat-grid.jsx-609e02266d60a7d8{grid-template-columns:220px 1fr}.products-grid.jsx-609e02266d60a7d8{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}}@media(max-width:768px){.cat-grid.jsx-609e02266d60a7d8{grid-template-columns:1fr}.cat-sidebar.jsx-609e02266d60a7d8{position:static;display:none}.products-grid.jsx-609e02266d60a7d8{grid-template-columns:repeat(2,1fr);gap:10px}.product-card-img.jsx-609e02266d60a7d8{height:140px}}'
            })
        ]
    });
};
const getServerSideProps = async ({ params  })=>{
    const slug = String(params?.slug || "").trim().toLowerCase();
    if (!slug) return {
        notFound: true
    };
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_8__.getDbPool)();
        // Get category
        const [cats] = await db.execute("SELECT * FROM categories WHERE LOWER(slug) = ? AND deleted_at IS NULL AND status = 'active' LIMIT 1", [
            slug
        ]);
        if (!cats.length) return {
            notFound: true
        };
        const category = cats[0];
        // Get subcategories
        const [subcats] = await db.execute("SELECT id, name, slug FROM categories WHERE parent_id = ? AND deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC", [
            category.id
        ]);
        // Get category specs (for filters)
        const [specs] = await db.execute("SELECT spec_name, spec_label, display_order FROM category_specs WHERE category_id = ? AND is_filterable = 1 ORDER BY display_order ASC", [
            category.id
        ]);
        // Get products in this category (and subcategories)
        const categoryIds = [
            category.id,
            ...subcats.map((s)=>s.id)
        ];
        const placeholders = categoryIds.map(()=>"?").join(",");
        const [products] = await db.execute(`SELECT p.* FROM products p
       WHERE p.category_id IN (${placeholders})
         AND p.deleted_at IS NULL AND p.is_active = 1
       ORDER BY p.created_at DESC
       LIMIT 200`, categoryIds);
        // Parse specs from JSON column
        const productsWithSpecs = products.map((p)=>{
            let specs = [];
            try {
                const parsed = p.specifications ? JSON.parse(p.specifications) : {};
                specs = Object.entries(parsed).map(([key, val])=>({
                        spec_name: key,
                        spec_value: val
                    }));
            } catch (e) {}
            return {
                ...p,
                specs
            };
        });
        // Get unique brands
        const brands = [
            ...new Set(products.map((p)=>p.brand).filter(Boolean))
        ].sort();
        // Max price
        const maxPrice = Math.max(...products.map((p)=>Number(p.price || 0)), 10000);
        return {
            props: {
                category: JSON.parse(JSON.stringify(category)),
                subcategories: JSON.parse(JSON.stringify(subcats)),
                products: JSON.parse(JSON.stringify(productsWithSpecs)),
                specs: JSON.parse(JSON.stringify(specs)),
                brands,
                maxPrice
            }
        };
    } catch (e) {
        console.error("Category page error:", e);
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(8808)));
module.exports = __webpack_exports__;

})();