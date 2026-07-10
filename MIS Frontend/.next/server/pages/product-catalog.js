"use strict";
(() => {
var exports = {};
exports.id = 8207;
exports.ids = [8207,7174];
exports.modules = {

/***/ 1595:
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
/* harmony import */ var dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7027);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__, _components_footer__WEBPACK_IMPORTED_MODULE_6__]);
([dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__, _components_footer__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const fallbackCatalogProducts = [
    {
        id: "fallback-1",
        name: "Pro-Workstation Laptop v14",
        description: "Intel Core i9, 32GB RAM, 1TB SSD. Designed for heavy corporate workloads.",
        price: 1499,
        type: "Hardware",
        categoryName: "Hardware",
        filterCategory: "hardware"
    },
    {
        id: "fallback-2",
        name: "NVIDIA GeForce RTX 4080",
        description: "Ultra-fast graphics performance for rendering and high-end gaming.",
        price: 1199,
        type: "Hardware",
        categoryName: "Components",
        filterCategory: "components"
    },
    {
        id: "fallback-3",
        name: "MIS Enterprise Server X100",
        description: "Scalable storage and processing power for corporate data centers.",
        price: 4250,
        type: "Hardware",
        categoryName: "Hardware",
        filterCategory: "hardware"
    },
    {
        id: "fallback-4",
        name: "Ergo-Precision Mouse",
        description: "Vertical design to reduce wrist strain during long office hours.",
        price: 89,
        type: "Hardware",
        categoryName: "Peripherals",
        filterCategory: "peripherals"
    },
    {
        id: "fallback-5",
        name: "CyberShield Enterprise 2026",
        description: "Annual license for up to 50 users. Advanced threat detection and firewall.",
        price: 899,
        type: "Software",
        categoryName: "Software Licenses",
        filterCategory: "software"
    },
    {
        id: "fallback-6",
        name: "MIS Master Z790 Board",
        description: "DDR5 support, PCIe 5.0, and advanced VRM cooling for enthusiasts.",
        price: 349,
        type: "Hardware",
        categoryName: "Components",
        filterCategory: "components"
    }, 
];
const fallbackImages = [
    "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500",
    "https://images.pexels.com/photos/32728403/pexels-photo-32728403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500",
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500",
    "https://images.pexels.com/photos/16645421/pexels-photo-16645421.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500",
    "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500",
    "https://images.pexels.com/photos/159235/computer-technology-pc-electronics-159235.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500", 
];
const ProductCatalog = (props)=>{
    const catalogProducts = Array.isArray(props.products) && props.products.length > 0 ? props.products : fallbackCatalogProducts;
    const categoryOptions = Array.isArray(props.categories) && props.categories.length > 0 ? props.categories : [
        {
            key: "hardware",
            label: "Hardware"
        },
        {
            key: "components",
            label: "Components"
        },
        {
            key: "peripherals",
            label: "Peripherals"
        },
        {
            key: "software",
            label: "Software Licenses"
        }, 
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-b4786e31254478ce" + " " + "product-catalog-container1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-b4786e31254478ce",
                                children: "Product-Catalog - Ideal Real Porpoise"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Product-Catalog - Ideal Real Porpoise",
                                className: "jsx-b4786e31254478ce"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "canonical",
                                href: "https://ideal-real-porpoise-ox0ksz.teleporthq.app/product-catalog",
                                className: "jsx-b4786e31254478ce"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:url",
                                content: "https://ideal-real-porpoise-ox0ksz.teleporthq.app/product-catalog",
                                className: "jsx-b4786e31254478ce"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-b4786e31254478ce" + " " + "catalog-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-b4786e31254478ce" + " " + "catalog-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                    className: "jsx-b4786e31254478ce" + " " + "catalog-header",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-title-group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-b4786e31254478ce" + " " + "section-title",
                                                    children: "MIS Solution Product Catalog"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-b4786e31254478ce" + " " + "section-content",
                                                    children: "Shop retail IT products by hardware, software, components, accessories, office equipment, and power solutions."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-search-bar",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-b4786e31254478ce" + " " + "search-input-wrapper",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-b4786e31254478ce" + " " + "search-icon-box",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-b4786e31254478ce",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                className: "jsx-b4786e31254478ce",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "m21 21l-4.34-4.34",
                                                                        className: "jsx-b4786e31254478ce"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                        cx: "11",
                                                                        cy: "11",
                                                                        r: "8",
                                                                        className: "jsx-b4786e31254478ce"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        id: "catalogSearch",
                                                        placeholder: "Search hardware, components, licenses...",
                                                        "aria-label": "Search products",
                                                        className: "jsx-b4786e31254478ce"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-b4786e31254478ce" + " " + "catalog-main-layout",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-filters",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-b4786e31254478ce" + " " + "product-catalog-filter-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-filter-title",
                                                            children: "Categories"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-b4786e31254478ce" + " " + "category-select-wrap",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                id: "catalogCategory",
                                                                "aria-label": "Filter by category",
                                                                className: "jsx-b4786e31254478ce" + " " + "category-select",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "all",
                                                                        className: "jsx-b4786e31254478ce",
                                                                        children: "All Products"
                                                                    }),
                                                                    categoryOptions.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: category.key,
                                                                            className: "jsx-b4786e31254478ce",
                                                                            children: category.label
                                                                        }, category.key))
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-b4786e31254478ce" + " " + "product-catalog-filter-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-filter-title",
                                                            children: "Price Range"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-b4786e31254478ce" + " " + "price-inputs",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "number",
                                                                    placeholder: "Min",
                                                                    "aria-label": "Minimum Price",
                                                                    className: "jsx-b4786e31254478ce"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "number",
                                                                    placeholder: "Max",
                                                                    "aria-label": "Maximum Price",
                                                                    className: "jsx-b4786e31254478ce"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "productGrid",
                                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-catalog-grid",
                                            children: catalogProducts.map((product, index)=>{
                                                const priceLabel = `$${Number(product.price || 0).toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}`;
                                                const imageUrl = product.image || fallbackImages[index % fallbackImages.length];
                                                const isSoftware = String(product.type || "").toLowerCase() === "software";
                                                const buttonLabel = isSoftware ? "Buy License" : "Add to Cart";
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                                    "data-category": product.filterCategory || "components",
                                                    className: "jsx-b4786e31254478ce" + " " + "product-catalog-product-card1",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-product-image-box",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: imageUrl,
                                                                    alt: product.name || "Product image",
                                                                    className: "jsx-b4786e31254478ce"
                                                                }),
                                                                index === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-b4786e31254478ce" + " " + "product-badge",
                                                                    children: "Featured"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-product-info",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "jsx-b4786e31254478ce" + " " + "product-catalog-product-name1",
                                                                    children: product.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-b4786e31254478ce" + " " + "product-desc",
                                                                    children: product.description
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-b4786e31254478ce" + " " + "product-footer",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-b4786e31254478ce" + " " + "product-price",
                                                                            children: priceLabel
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "jsx-b4786e31254478ce" + " " + "product-card-actions",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    href: `/products/${product.id}`,
                                                                                    className: "jsx-b4786e31254478ce" + " " + "btn-link",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "jsx-b4786e31254478ce",
                                                                                        children: "View Details"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: "jsx-b4786e31254478ce" + " " + "catalog-add-cart btn btn-primary btn-sm",
                                                                                    children: buttonLabel
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, `${product.id}-${index}`);
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "cartBackdrop",
                                    className: "jsx-b4786e31254478ce" + " " + "catalog-cart-backdrop"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                    id: "catalogCartSidebar",
                                    "aria-label": "Shopping cart",
                                    "aria-hidden": "true",
                                    className: "jsx-b4786e31254478ce" + " " + "catalog-cart-sidebar",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-cart-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-b4786e31254478ce",
                                                    children: "Your Cart"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    id: "cartCloseBtn",
                                                    type: "button",
                                                    "aria-label": "Close cart",
                                                    className: "jsx-b4786e31254478ce" + " " + "catalog-cart-close",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        className: "jsx-b4786e31254478ce",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "m18 6l-12 12M6 6l12 12",
                                                            className: "jsx-b4786e31254478ce"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            id: "cartEmptyState",
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-cart-empty",
                                            children: "Your cart is empty. Add products to continue."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "cartItemsContainer",
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-cart-items"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-b4786e31254478ce" + " " + "catalog-cart-footer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-b4786e31254478ce" + " " + "catalog-cart-total",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-b4786e31254478ce",
                                                            children: "Subtotal"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            id: "cartSubtotalValue",
                                                            className: "jsx-b4786e31254478ce",
                                                            children: "$0.00"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    id: "cartCheckoutBtn",
                                                    href: "/confirm-order",
                                                    className: "jsx-b4786e31254478ce" + " " + "btn btn-brand-white-text btn-lg",
                                                    children: "Confirm Order"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-b4786e31254478ce" + " " + "product-catalog-container2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-b4786e31254478ce" + " " + "product-catalog-container3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                html: `<script defer data-name="catalog-logic">
(function(){
  const CART_KEY = "misCart"
  const categorySelect = document.getElementById("catalogCategory")
  const productGrid = document.getElementById("productGrid")
  const productCards = document.querySelectorAll(".product-catalog-product-card1")
  const searchInput = document.getElementById("catalogSearch")
  const cartCloseBtn = document.getElementById("cartCloseBtn")
  const cartSidebar = document.getElementById("catalogCartSidebar")
  const cartBackdrop = document.getElementById("cartBackdrop")
  const cartItemsContainer = document.getElementById("cartItemsContainer")
  const cartSubtotalValue = document.getElementById("cartSubtotalValue")
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn")
  const cartEmptyState = document.getElementById("cartEmptyState")
  const bodyElement = document.body
  let cartItems = []

  const formatCurrency = (value) => "$" + value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const parsePrice = (priceText) => {
    const parsed = Number((priceText || "0").replace(/[^0-9.]/g, ""))
    return Number.isFinite(parsed) ? parsed : 0
  }

  const loadCart = () => {
    try {
      const storedCart = window.localStorage.getItem(CART_KEY)
      cartItems = storedCart ? JSON.parse(storedCart) : []
    } catch (error) {
      cartItems = []
    }
  }

  const saveCart = () => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }

  const updateCartUI = () => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    if (cartSubtotalValue) {
      cartSubtotalValue.textContent = formatCurrency(subtotal)
    }

    if (cartEmptyState) {
      cartEmptyState.style.display = cartItems.length ? "none" : "block"
    }

    if (cartCheckoutBtn) {
      if (cartItems.length) {
        cartCheckoutBtn.classList.remove("is-disabled")
        cartCheckoutBtn.removeAttribute("aria-disabled")
      } else {
        cartCheckoutBtn.classList.add("is-disabled")
        cartCheckoutBtn.setAttribute("aria-disabled", "true")
      }
    }

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = cartItems
        .map((item) =>
          '<article class="catalog-cart-item" data-id="' + item.id + '">' +
            '<img src="' + item.image + '" alt="' + item.name + '" />' +
            '<div class="catalog-cart-item-copy">' +
              '<h4>' + item.name + '</h4>' +
              '<p>' + formatCurrency(item.price) + '</p>' +
              '<div class="catalog-cart-qty">' +
                '<button type="button" data-action="decrease" aria-label="Decrease quantity">-</button>' +
                '<span>' + item.quantity + '</span>' +
                '<button type="button" data-action="increase" aria-label="Increase quantity">+</button>' +
              '</div>' +
            '</div>' +
            '<button type="button" class="catalog-cart-remove" data-action="remove" aria-label="Remove item">Remove</button>' +
          '</article>'
        )
        .join("")
    }
  }

  const addProductToCart = (card) => {
    if (!card) return
    const nameEl = card.querySelector(".product-catalog-product-name1")
    const priceEl = card.querySelector(".product-price")
    const imageEl = card.querySelector(".product-catalog-product-image-box img")
    const name = nameEl ? nameEl.textContent.trim() : "Product"
    const price = parsePrice(priceEl ? priceEl.textContent : "0")
    const image = imageEl ? imageEl.getAttribute("src") : ""
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    const existingItem = cartItems.find((item) => item.id === id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.push({ id, name, price, image, quantity: 1 })
    }

    saveCart()
    window.dispatchEvent(new Event("mis-cart-updated"))
    updateCartUI()
    openCart()
  }

  const openCart = () => {
    if (!cartSidebar || !cartBackdrop) return
    cartSidebar.classList.add("is-open")
    cartSidebar.setAttribute("aria-hidden", "false")
    cartBackdrop.classList.add("is-visible")
    document.body.classList.add("cart-open")
  }

  const closeCart = () => {
    if (!cartSidebar || !cartBackdrop) return
    cartSidebar.classList.remove("is-open")
    cartSidebar.setAttribute("aria-hidden", "true")
    cartBackdrop.classList.remove("is-visible")
    bodyElement.classList.remove("cart-open")
  }

  const applyFilters = () => {
    const selectedCategory = categorySelect ? categorySelect.value : "all"
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : ""

    productCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")
      const productNameEl = card.querySelector(".product-catalog-product-name1")
      const productDescEl = card.querySelector(".product-desc")
      const productName = productNameEl ? productNameEl.textContent.toLowerCase() : ""
      const productDesc = productDescEl ? productDescEl.textContent.toLowerCase() : ""

      const categoryMatch = selectedCategory === "all" || cardCategory === selectedCategory
      const searchMatch =
        searchTerm === "" ||
        productName.includes(searchTerm) ||
        productDesc.includes(searchTerm)

      if (categoryMatch && searchMatch) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    })
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", applyFilters)
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters)
  }

  if (productGrid) {
    productGrid.addEventListener("click", (event) => {
      const addButton = event.target.closest(".catalog-add-cart")
      if (!addButton) return
      const card = addButton.closest(".product-catalog-product-card1")
      addProductToCart(card)
    })
  }

  if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (event) => {
      const actionButton = event.target.closest("button[data-action]")
      if (!actionButton) return

      const cartItem = actionButton.closest(".catalog-cart-item")
      if (!cartItem) return

      const itemId = cartItem.getAttribute("data-id")
      const action = actionButton.getAttribute("data-action")
      const targetItem = cartItems.find((item) => item.id === itemId)
      if (!targetItem) return

      if (action === "increase") {
        targetItem.quantity += 1
      }

      if (action === "decrease") {
        targetItem.quantity = Math.max(1, targetItem.quantity - 1)
      }

      if (action === "remove") {
        cartItems = cartItems.filter((item) => item.id !== itemId)
      }

      saveCart()
      window.dispatchEvent(new Event("mis-cart-updated"))
      updateCartUI()
    })
  }

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", closeCart)
  }

  if (cartBackdrop) {
    cartBackdrop.addEventListener("click", closeCart)
  }

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", (event) => {
      if (!cartItems.length) {
        event.preventDefault()
      }
    })
  }

  const openCartFromNav = () => openCart()
  window.addEventListener("open-mis-cart", openCartFromNav)

  const shouldOpenFromQuery =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("cart") === "open"
  if (shouldOpenFromQuery) {
    openCart()
  }

  const onKeyDown = (event) => {
    if (event.key === "Escape") closeCart()
  }

  document.addEventListener("keydown", onKeyDown)

  window.addEventListener("beforeunload", () => {
    window.removeEventListener("open-mis-cart", openCartFromNav)
    document.removeEventListener("keydown", onKeyDown)
  })

  loadCart()
  updateCartUI()
  applyFilters()

  // Price Filter Mock (Visual Only as per scope)
  const priceInputs = document.querySelectorAll(".price-inputs input")
  priceInputs.forEach((input) => {
    input.addEventListener("change", () => {
      console.log("Price filter updated")
      // In a real production app, this would trigger a re-render or API call
    })
  })
})()
</script>`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b4786e31254478ce",
                children: ".product-catalog-container1.jsx-b4786e31254478ce{width:100%;min-height:100vh}.product-catalog-thq-filter-icon-wrap-elm1.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.product-catalog-thq-filter-icon-wrap-elm2.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.product-catalog-thq-filter-icon-wrap-elm3.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.product-catalog-thq-filter-icon-wrap-elm4.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.product-catalog-thq-filter-icon-wrap-elm5.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.product-catalog-container2.jsx-b4786e31254478ce{display:none}.product-card-actions.jsx-b4786e31254478ce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px}.product-catalog-container3.jsx-b4786e31254478ce{display:contents}.product-catalog-container4.jsx-b4786e31254478ce{right:50px;border:1px solid#ffffff5c;bottom:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:22;position:fixed;-webkit-box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);-moz-box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);min-height:auto;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:8px;padding-left:12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding-right:12px;padding-bottom:8px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);background-color:rgba(41,41,41,.41)}.product-catalog-icon31.jsx-b4786e31254478ce{width:24px;margin-right:4px}.product-catalog-text6.jsx-b4786e31254478ce{color:white;font-size:13px;font-style:normal;font-weight:500;line-height:24px}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listCatalogProducts  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const products = await listCatalogProducts(100);
        const categoriesMap = new Map();
        const preferredLabels = {
            hardware: "Hardware (Laptops, Desktops, Servers)",
            software: "Software (Windows & Antivirus Licenses)",
            components: "Components (Processors, RAM, Motherboards)",
            accessories: "Accessories (Mouse, Keyboard, Cables)",
            "office-equipment": "Office Equipment (Printers, Projectors, Scanners)",
            "power-solution": "Power Solution (UPS, Batteries)"
        };
        products.forEach((product)=>{
            const key = product.filterCategory || "general";
            if (key === "service") return;
            if (!categoriesMap.has(key)) {
                categoriesMap.set(key, preferredLabels[key] || product.categoryName || product.type || "General");
            }
        });
        const categories = Array.from(categoriesMap.entries()).map(([key, label])=>({
                key,
                label
            }));
        return {
            props: {
                products,
                categories
            }
        };
    } catch (error) {
        return {
            props: {
                products: [],
                categories: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCatalog);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(1595)));
module.exports = __webpack_exports__;

})();