"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603,7174];
exports.modules = {

/***/ 9505:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_6__]);
_components_footer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const formatCurrency = (v)=>`৳${Number(v || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const SearchPage = ({ query , products =[] , services =[]  })=>{
    const totalResults = products.length + services.length;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        className: "jsx-7072b846802ac650",
                        children: [
                            query ? `Search: ${query}` : "Search",
                            " | MIS Solution"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png",
                        className: "jsx-7072b846802ac650"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "jsx-7072b846802ac650" + " " + "search-page",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-7072b846802ac650" + " " + "search-shell",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "jsx-7072b846802ac650" + " " + "search-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-7072b846802ac650",
                                    children: "Search Results"
                                }),
                                query && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "jsx-7072b846802ac650",
                                    children: [
                                        "Showing ",
                                        totalResults,
                                        " result",
                                        totalResults !== 1 ? "s" : "",
                                        ' for "',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            className: "jsx-7072b846802ac650",
                                            children: query
                                        }),
                                        '"'
                                    ]
                                })
                            ]
                        }),
                        totalResults === 0 && query && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-7072b846802ac650" + " " + "empty-state",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-7072b846802ac650",
                                    children: "No products or services found matching your search."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/product-catalog",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "jsx-7072b846802ac650" + " " + "browse-link",
                                        children: "Browse All Products"
                                    })
                                })
                            ]
                        }),
                        products.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "jsx-7072b846802ac650" + " " + "results-section",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "jsx-7072b846802ac650",
                                    children: [
                                        "Products (",
                                        products.length,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-7072b846802ac650" + " " + "results-grid",
                                    children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/products/${encodeURIComponent(product.slug || product.id)}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-7072b846802ac650" + " " + "result-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-7072b846802ac650" + " " + "result-image",
                                                        children: product.thumbnail_1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: product.thumbnail_1,
                                                            alt: product.name,
                                                            className: "jsx-7072b846802ac650"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-7072b846802ac650" + " " + "no-img",
                                                            children: "No Image"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-7072b846802ac650" + " " + "result-info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-7072b846802ac650",
                                                                children: product.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-7072b846802ac650" + " " + "result-meta",
                                                                children: product.category_name || product.type
                                                            }),
                                                            product.short_desc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-7072b846802ac650" + " " + "result-desc",
                                                                children: product.short_desc.substring(0, 100)
                                                            }),
                                                            Number(product.price) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                className: "jsx-7072b846802ac650" + " " + "result-price",
                                                                children: formatCurrency(product.price)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, product.id))
                                })
                            ]
                        }),
                        services.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "jsx-7072b846802ac650" + " " + "results-section",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "jsx-7072b846802ac650",
                                    children: [
                                        "Services (",
                                        services.length,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-7072b846802ac650" + " " + "results-grid",
                                    children: services.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(service.slug || service.id)}?type=${service.page_type === "digital-services" ? "digi_services" : service.page_type === "enterprise-solutions" ? "bus_corp_sol" : "service_maintenance"}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-7072b846802ac650" + " " + "result-card",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-7072b846802ac650" + " " + "result-info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-7072b846802ac650" + " " + "result-badge",
                                                            children: service.page_type === "digital-services" ? "Digital Service" : service.page_type === "enterprise-solutions" ? "Enterprise Solution" : "Maintenance"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-7072b846802ac650",
                                                            children: service.name
                                                        }),
                                                        service.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-7072b846802ac650" + " " + "result-desc",
                                                            children: service.description.substring(0, 120)
                                                        })
                                                    ]
                                                })
                                            })
                                        }, `${service.page_type}-${service.id}`))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7072b846802ac650",
                children: ".search-page.jsx-7072b846802ac650{min-height:100vh;background:#f8fafe}.search-shell.jsx-7072b846802ac650{max-width:1e3px;margin:0 auto;padding:36px 20px 60px}.search-header.jsx-7072b846802ac650{margin-bottom:28px}.search-header.jsx-7072b846802ac650 h1.jsx-7072b846802ac650{margin:0;font-size:28px;color:#111827}.search-header.jsx-7072b846802ac650 p.jsx-7072b846802ac650{margin:8px 0 0;color:#6b7280;font-size:15px}.search-header.jsx-7072b846802ac650 strong.jsx-7072b846802ac650{color:#111827}.empty-state.jsx-7072b846802ac650{text-align:center;padding:48px 20px;border:1px dashed#d1d5db;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff}.empty-state.jsx-7072b846802ac650 p.jsx-7072b846802ac650{margin:0 0 16px;color:#6b7280}.browse-link.jsx-7072b846802ac650{color:#4f46e5;font-weight:700;text-decoration:none}.results-section.jsx-7072b846802ac650{margin-bottom:32px}.results-section.jsx-7072b846802ac650 h2.jsx-7072b846802ac650{margin:0 0 16px;font-size:18px;color:#111827;font-weight:700}.results-grid.jsx-7072b846802ac650{display:grid;gap:12px}.result-card.jsx-7072b846802ac650{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:16px;border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;padding:16px;text-decoration:none;color:inherit;-webkit-transition:box-shadow.15s,border-color.15s;-moz-transition:box-shadow.15s,border-color.15s;-o-transition:box-shadow.15s,border-color.15s;transition:box-shadow.15s,border-color.15s}.result-card.jsx-7072b846802ac650:hover{border-color:#a5b4fc;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.06);-moz-box-shadow:0 4px 16px rgba(0,0,0,.06);box-shadow:0 4px 16px rgba(0,0,0,.06)}.result-image.jsx-7072b846802ac650{width:80px;height:80px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;background:#f3f4f6}.result-image.jsx-7072b846802ac650 img.jsx-7072b846802ac650{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.no-img.jsx-7072b846802ac650{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:11px;color:#9ca3af}.result-info.jsx-7072b846802ac650{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:0}.result-info.jsx-7072b846802ac650 h3.jsx-7072b846802ac650{margin:0 0 4px;font-size:16px;color:#111827}.result-meta.jsx-7072b846802ac650{font-size:12px;color:#6b7280}.result-badge.jsx-7072b846802ac650{display:inline-block;padding:2px 8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#eff6ff;color:#1d4ed8;font-size:11px;font-weight:700;margin-bottom:4px}.result-desc.jsx-7072b846802ac650{margin:6px 0 0;font-size:13px;color:#4b5563;line-height:1.5}.result-price.jsx-7072b846802ac650{display:block;margin-top:6px;font-size:15px;color:#111827}@media(max-width:600px){.result-card.jsx-7072b846802ac650{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.result-image.jsx-7072b846802ac650{width:100%;height:160px}}"
            })
        ]
    });
};
const getServerSideProps = async ({ query: params  })=>{
    const q = String(params.q || "").trim();
    if (!q || q.length < 2) {
        return {
            props: {
                query: q,
                products: [],
                services: []
            }
        };
    }
    try {
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const db = getDbPool();
        const searchPattern = `%${q}%`;
        const [products] = await db.execute(`SELECT p.id, p.name, p.slug, p.short_desc, p.price, p.type, p.thumbnail_1, p.brand, p.model,
              c.name AS category_name
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
         AND (p.name LIKE ? OR p.short_desc LIKE ? OR p.type LIKE ? OR p.brand LIKE ? OR p.model LIKE ?)
       ORDER BY p.name ASC LIMIT 20`, [
            searchPattern,
            searchPattern,
            searchPattern,
            searchPattern,
            searchPattern
        ]);
        const [digiServices] = await db.execute(`SELECT id, name, slug, description, 'digital-services' AS page_type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        const [bizServices] = await db.execute(`SELECT id, name, slug, description, 'enterprise-solutions' AS page_type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        const [maintServices] = await db.execute(`SELECT id, name, slug, description, 'maintenance-support' AS page_type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`, [
            searchPattern,
            searchPattern
        ]);
        return {
            props: {
                query: q,
                products: JSON.parse(JSON.stringify(products)),
                services: JSON.parse(JSON.stringify([
                    ...digiServices,
                    ...bizServices,
                    ...maintServices
                ]))
            }
        };
    } catch (e) {
        return {
            props: {
                query: q,
                products: [],
                services: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(9505)));
module.exports = __webpack_exports__;

})();