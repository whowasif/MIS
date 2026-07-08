"use strict";
(() => {
var exports = {};
exports.id = 3131;
exports.ids = [3131,7174];
exports.modules = {

/***/ 870:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_7__]);
_components_footer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const fallbackServices = [
    {
        id: "maintenance-1",
        name: "Yearly IT Maintenance Contract",
        description: "Annual coverage for preventive checks, monitoring, upgrades, and support response."
    },
    {
        id: "maintenance-2",
        name: "On-call Repairs & Troubleshooting",
        description: "Fast-response repair support for desktops, servers, network devices, and office systems."
    },
    {
        id: "maintenance-3",
        name: "Project Basis Installation & Delivery",
        description: "Project-based setup and commissioning for IT hardware, network, and corporate rollouts."
    }, 
];
const MaintenanceSupport = ({ services =[]  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(router.query.search || "");
    const { 0: viewMode , 1: setViewMode  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("list");
    const supportItems = Array.isArray(services) && services.length > 0 ? services : fallbackServices;
    const filteredItems = searchTerm.trim() ? supportItems.filter((s)=>s.name.toLowerCase().includes(searchTerm.toLowerCase()) || (s.description || "").toLowerCase().includes(searchTerm.toLowerCase())) : supportItems;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-e4f067798ad82282" + " " + "maintenance-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-e4f067798ad82282",
                                children: "Maintenance Support - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Maintenance Support - MIS Solution",
                                className: "jsx-e4f067798ad82282"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-e4f067798ad82282" + " " + "maintenance-hero",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-e4f067798ad82282" + " " + "maintenance-hero-overlay"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-e4f067798ad82282" + " " + "maintenance-hero-inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-e4f067798ad82282" + " " + "hero-title",
                                        children: "Service & Maintenance"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-e4f067798ad82282" + " " + "hero-subtitle",
                                        children: "Reliable after-sales support with yearly maintenance contracts, on-call repairs, and project-based installation."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#support-catalog",
                                        className: "jsx-e4f067798ad82282" + " " + "btn btn-primary btn-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-e4f067798ad82282",
                                            children: "View Support Services"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "support-catalog",
                        className: "jsx-e4f067798ad82282" + " " + "services-listing",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-e4f067798ad82282" + " " + "services-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-e4f067798ad82282" + " " + "toolbar",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "search",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            placeholder: "Search maintenance services...",
                                            className: "jsx-e4f067798ad82282" + " " + "page-search-input"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-e4f067798ad82282" + " " + "view-toggle",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>setViewMode("list"),
                                                    "aria-label": "List view",
                                                    className: "jsx-e4f067798ad82282" + " " + `toggle-btn ${viewMode === "list" ? "active" : ""}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "jsx-e4f067798ad82282",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
                                                            className: "jsx-e4f067798ad82282"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>setViewMode("grid"),
                                                    "aria-label": "Grid view",
                                                    className: "jsx-e4f067798ad82282" + " " + `toggle-btn ${viewMode === "grid" ? "active" : ""}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        className: "jsx-e4f067798ad82282",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "3",
                                                                y: "3",
                                                                width: "7",
                                                                height: "7",
                                                                className: "jsx-e4f067798ad82282"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "14",
                                                                y: "3",
                                                                width: "7",
                                                                height: "7",
                                                                className: "jsx-e4f067798ad82282"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "3",
                                                                y: "14",
                                                                width: "7",
                                                                height: "7",
                                                                className: "jsx-e4f067798ad82282"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                x: "14",
                                                                y: "14",
                                                                width: "7",
                                                                height: "7",
                                                                className: "jsx-e4f067798ad82282"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                viewMode === "list" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-e4f067798ad82282" + " " + "list-view",
                                    children: filteredItems.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(item.slug || item.id)}?type=service_maintenance`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-e4f067798ad82282" + " " + `list-card ${idx % 2 === 0 ? "text-first" : "img-first"}`,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-e4f067798ad82282" + " " + "list-card-text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-e4f067798ad82282",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-e4f067798ad82282",
                                                                children: item.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-e4f067798ad82282" + " " + "card-link",
                                                                children: "View Details →"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-e4f067798ad82282" + " " + "list-card-img",
                                                        children: item.iconUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.iconUrl,
                                                            alt: item.name,
                                                            className: "jsx-e4f067798ad82282"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-e4f067798ad82282" + " " + "card-placeholder",
                                                            children: item.name.charAt(0)
                                                        })
                                                    })
                                                ]
                                            })
                                        }, item.id))
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-e4f067798ad82282" + " " + "grid-view",
                                    children: filteredItems.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(item.slug || item.id)}?type=service_maintenance`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-e4f067798ad82282" + " " + "grid-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-e4f067798ad82282" + " " + "grid-card-img",
                                                        children: item.iconUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.iconUrl,
                                                            alt: item.name,
                                                            className: "jsx-e4f067798ad82282"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-e4f067798ad82282" + " " + "card-placeholder",
                                                            children: item.name.charAt(0)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-e4f067798ad82282" + " " + "grid-card-text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-e4f067798ad82282",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-e4f067798ad82282",
                                                                children: item.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-e4f067798ad82282" + " " + "card-link",
                                                                children: "View Details →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, item.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "e4f067798ad82282",
                children: '.maintenance-page.jsx-e4f067798ad82282{width:100%;min-height:100vh;background:#fff}.maintenance-hero.jsx-e4f067798ad82282{width:100%;min-height:430px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-image:url("https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center}.maintenance-hero-overlay.jsx-e4f067798ad82282{position:absolute;inset:0;background:rgba(15,23,42,.66)}.maintenance-hero-inner.jsx-e4f067798ad82282{position:relative;z-index:1;max-width:940px;width:100%;text-align:center;color:#fff;padding:110px 20px 70px}.services-listing.jsx-e4f067798ad82282{padding:48px 20px 72px;background:#f8fafc}.services-container.jsx-e4f067798ad82282{width:100%;max-width:1180px;margin:0 auto}.toolbar.jsx-e4f067798ad82282{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;margin-bottom:24px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.toolbar.jsx-e4f067798ad82282 .page-search-input.jsx-e4f067798ad82282{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:200px;padding:12px 18px;border:1px solid#e2e8f0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:14px;background:#fff}.toolbar.jsx-e4f067798ad82282 .page-search-input.jsx-e4f067798ad82282:focus{outline:none;border-color:#6366f1;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.view-toggle.jsx-e4f067798ad82282{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;border:1px solid#e2e8f0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.toggle-btn.jsx-e4f067798ad82282{border:none;background:#fff;padding:10px 14px;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#6b7280;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.toggle-btn.active.jsx-e4f067798ad82282{background:#4f46e5;color:#fff}.toggle-btn.jsx-e4f067798ad82282:not(.active):hover{background:#f3f4f6}.list-view.jsx-e4f067798ad82282{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:16px}.list-card.jsx-e4f067798ad82282{display:grid;grid-template-columns:1fr 1fr;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;border:1px solid#e2e8f0;background:#fff;text-decoration:none;color:inherit;-webkit-transition:box-shadow.2s,-webkit-transform.15s;-moz-transition:box-shadow.2s,-moz-transform.15s;-o-transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,-webkit-transform.15s;transition:box-shadow.2s,-moz-transform.15s;transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,transform.15s;min-height:200px}.list-card.jsx-e4f067798ad82282:hover{-webkit-box-shadow:0 12px 32px rgba(0,0,0,.08);-moz-box-shadow:0 12px 32px rgba(0,0,0,.08);box-shadow:0 12px 32px rgba(0,0,0,.08);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.list-card.img-first.jsx-e4f067798ad82282{direction:rtl}.list-card.img-first.jsx-e4f067798ad82282>*.jsx-e4f067798ad82282{direction:ltr}.list-card-text.jsx-e4f067798ad82282{padding:28px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:8px}.list-card-text.jsx-e4f067798ad82282 h3.jsx-e4f067798ad82282{margin:0;font-size:18px;color:#111827;font-weight:700}.list-card-text.jsx-e4f067798ad82282 p.jsx-e4f067798ad82282{margin:0;font-size:14px;color:#4b5563;line-height:1.7}.card-link.jsx-e4f067798ad82282{font-size:13px;font-weight:700;color:#4f46e5}.list-card-img.jsx-e4f067798ad82282{background:#f1f5f9;overflow:hidden}.list-card-img.jsx-e4f067798ad82282 img.jsx-e4f067798ad82282{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.grid-view.jsx-e4f067798ad82282{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.grid-card.jsx-e4f067798ad82282{-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;overflow:hidden;border:1px solid#e2e8f0;background:#fff;text-decoration:none;color:inherit;-webkit-transition:box-shadow.2s,-webkit-transform.15s;-moz-transition:box-shadow.2s,-moz-transform.15s;-o-transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,-webkit-transform.15s;transition:box-shadow.2s,-moz-transform.15s;transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,transform.15s;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.grid-card.jsx-e4f067798ad82282:hover{-webkit-box-shadow:0 12px 28px rgba(0,0,0,.08);-moz-box-shadow:0 12px 28px rgba(0,0,0,.08);box-shadow:0 12px 28px rgba(0,0,0,.08);-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px)}.grid-card-img.jsx-e4f067798ad82282{height:180px;background:#f1f5f9;overflow:hidden}.grid-card-img.jsx-e4f067798ad82282 img.jsx-e4f067798ad82282{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.grid-card-text.jsx-e4f067798ad82282{padding:18px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.grid-card-text.jsx-e4f067798ad82282 h3.jsx-e4f067798ad82282{margin:0;font-size:16px;color:#111827;font-weight:700}.grid-card-text.jsx-e4f067798ad82282 p.jsx-e4f067798ad82282{margin:0;font-size:13px;color:#4b5563;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.card-placeholder.jsx-e4f067798ad82282{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:56px;font-weight:800;color:#cbd5e1;background:-webkit-linear-gradient(315deg,#f8fafc 0%,#e2e8f0 100%);background:-moz-linear-gradient(315deg,#f8fafc 0%,#e2e8f0 100%);background:-o-linear-gradient(315deg,#f8fafc 0%,#e2e8f0 100%);background:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)}@media(max-width:767px){.maintenance-hero-inner.jsx-e4f067798ad82282{padding-top:94px;padding-bottom:56px}.list-card.jsx-e4f067798ad82282{grid-template-columns:1fr}.list-card.img-first.jsx-e4f067798ad82282{direction:ltr}.list-card-img.jsx-e4f067798ad82282{height:160px}.list-card-text.jsx-e4f067798ad82282{padding:20px}.grid-view.jsx-e4f067798ad82282{grid-template-columns:1fr}}'
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listMaintenanceSupportEntries  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const services = await listMaintenanceSupportEntries(60);
        return {
            props: {
                services
            }
        };
    } catch (error) {
        return {
            props: {
                services: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceSupport);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(870)));
module.exports = __webpack_exports__;

})();