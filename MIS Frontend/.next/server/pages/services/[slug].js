"use strict";
(() => {
var exports = {};
exports.id = 4945;
exports.ids = [4945,7174,2984];
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

/***/ 8572:
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








const ContentDetailPage = ({ content , contentType  })=>{
    if (!content) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    style: {
                        minHeight: "60vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Not Found"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "The content you're looking for doesn't exist."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    style: {
                                        color: "#4f46e5",
                                        fontWeight: 700
                                    },
                                    children: "Go Home"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        className: "jsx-8aa76e67b341728e",
                        children: [
                            content.name,
                            " | MIS Solution"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: content.description || content.name,
                        className: "jsx-8aa76e67b341728e"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png",
                        className: "jsx-8aa76e67b341728e"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "jsx-8aa76e67b341728e" + " " + "content-detail-page",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: "jsx-8aa76e67b341728e" + " " + "content-shell",
                    children: [
                        content.icon_url ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-8aa76e67b341728e" + " " + "content-hero-cover",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: content.icon_url,
                                    alt: content.name || content.title,
                                    className: "jsx-8aa76e67b341728e"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-hero-overlay"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-hero-inner",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-8aa76e67b341728e" + " " + "breadcrumb",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Home"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-8aa76e67b341728e",
                                                    children: "/"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/core-it-solutions",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Core IT Solutions"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-8aa76e67b341728e",
                                                    children: "/"
                                                }),
                                                contentType === "digi_services" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/digital-services",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Digital Services"
                                                    })
                                                }),
                                                contentType === "bus_corp_sol" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/enterprise-solutions",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Enterprise Solutions"
                                                    })
                                                }),
                                                contentType === "service_maintenance" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/maintenance-support",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Maintenance & Support"
                                                    })
                                                }),
                                                contentType === "career_posts" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/career",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "Career"
                                                    })
                                                }),
                                                contentType === "page_contents" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/company-information-policies",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-8aa76e67b341728e",
                                                        children: "About"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-8aa76e67b341728e",
                                            children: content.name || content.title
                                        }),
                                        content.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-8aa76e67b341728e" + " " + "content-hero-subtitle",
                                            children: content.description
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "jsx-8aa76e67b341728e" + " " + "content-header-nocover",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "breadcrumb",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-8aa76e67b341728e",
                                            children: "/"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/core-it-solutions",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Core IT Solutions"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-8aa76e67b341728e",
                                            children: "/"
                                        }),
                                        contentType === "digi_services" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/digital-services",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Digital Services"
                                            })
                                        }),
                                        contentType === "bus_corp_sol" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/enterprise-solutions",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Enterprise Solutions"
                                            })
                                        }),
                                        contentType === "service_maintenance" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/maintenance-support",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Maintenance & Support"
                                            })
                                        }),
                                        contentType === "career_posts" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/career",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "Career"
                                            })
                                        }),
                                        contentType === "page_contents" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/company-information-policies",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: "About"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-8aa76e67b341728e",
                                    children: content.name || content.title
                                }),
                                content.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-summary",
                                    children: content.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-8aa76e67b341728e" + " " + "content-body-wrap",
                            children: [
                                content.full_description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-body-modern",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-8aa76e67b341728e" + " " + "content-accent-bar"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: content.full_description
                                            },
                                            className: "jsx-8aa76e67b341728e" + " " + "content-rich-html"
                                        })
                                    ]
                                }),
                                !content.full_description && content.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-body-modern",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-8aa76e67b341728e" + " " + "content-accent-bar"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-8aa76e67b341728e" + " " + "content-rich-html",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-8aa76e67b341728e",
                                                children: content.description
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-8aa76e67b341728e" + " " + "content-cta-wrap",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/request-custom-quote",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "jsx-8aa76e67b341728e" + " " + "content-cta-btn",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "jsx-8aa76e67b341728e",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                                                        className: "jsx-8aa76e67b341728e"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-8aa76e67b341728e",
                                                    children: "Request a Quote"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8aa76e67b341728e",
                children: '.content-detail-page.jsx-8aa76e67b341728e{min-height:100vh;background:#f8fafe}.content-shell.jsx-8aa76e67b341728e{width:100%}.content-hero-cover.jsx-8aa76e67b341728e{position:relative;width:100%;min-height:380px;max-height:440px;overflow:hidden}.content-hero-cover.jsx-8aa76e67b341728e img.jsx-8aa76e67b341728e{width:100%;height:100%;min-height:380px;max-height:440px;-o-object-fit:cover;object-fit:cover;display:block}.content-hero-overlay.jsx-8aa76e67b341728e{position:absolute;inset:0;background:-webkit-linear-gradient(top,rgba(0,0,0,.2)0%,rgba(0,0,0,.65)100%);background:-moz-linear-gradient(top,rgba(0,0,0,.2)0%,rgba(0,0,0,.65)100%);background:-o-linear-gradient(top,rgba(0,0,0,.2)0%,rgba(0,0,0,.65)100%);background:linear-gradient(to bottom,rgba(0,0,0,.2)0%,rgba(0,0,0,.65)100%)}.content-hero-inner.jsx-8aa76e67b341728e{position:absolute;bottom:0;left:0;right:0;padding:40px 48px;color:#fff}.content-hero-inner.jsx-8aa76e67b341728e h1.jsx-8aa76e67b341728e{margin:0;font-size:clamp(28px,5vw,42px);font-weight:800;line-height:1.2;text-shadow:0 2px 12px rgba(0,0,0,.3)}.content-hero-subtitle.jsx-8aa76e67b341728e{margin:10px 0 0;font-size:16px;color:rgba(255,255,255,.88);line-height:1.6;max-width:700px}.content-hero-inner.jsx-8aa76e67b341728e .breadcrumb.jsx-8aa76e67b341728e{margin-bottom:12px}.content-hero-inner.jsx-8aa76e67b341728e .breadcrumb.jsx-8aa76e67b341728e span.jsx-8aa76e67b341728e{color:rgba(255,255,255,.7)}.content-hero-inner.jsx-8aa76e67b341728e .breadcrumb.jsx-8aa76e67b341728e a{color:rgba(255,255,255,.9);text-decoration:none;font-weight:600}.content-hero-inner.jsx-8aa76e67b341728e .breadcrumb.jsx-8aa76e67b341728e a:hover{text-decoration:underline}.content-header-nocover.jsx-8aa76e67b341728e{max-width:820px;margin:0 auto;padding:36px 20px 0}.content-header-nocover.jsx-8aa76e67b341728e h1.jsx-8aa76e67b341728e{margin:0;font-size:clamp(24px,4vw,36px);color:#111827;font-weight:800;line-height:1.2}.content-summary.jsx-8aa76e67b341728e{margin:12px 0 0;font-size:17px;color:#4b5563;line-height:1.7}.breadcrumb.jsx-8aa76e67b341728e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-size:13px;color:#6b7280}.breadcrumb.jsx-8aa76e67b341728e a{color:#4f46e5;text-decoration:none;font-weight:600}.breadcrumb.jsx-8aa76e67b341728e a:hover{text-decoration:underline}.content-body-wrap.jsx-8aa76e67b341728e{max-width:900px;margin:0 auto;padding:48px 20px 72px}.content-body-modern.jsx-8aa76e67b341728e{position:relative;padding:48px 48px 48px 56px;background:#fff;border:1px solid#e5e7eb;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;-webkit-box-shadow:0 4px 24px rgba(0,0,0,.04),0 1px 4px rgba(0,0,0,.02);-moz-box-shadow:0 4px 24px rgba(0,0,0,.04),0 1px 4px rgba(0,0,0,.02);box-shadow:0 4px 24px rgba(0,0,0,.04),0 1px 4px rgba(0,0,0,.02);overflow:hidden}.content-accent-bar.jsx-8aa76e67b341728e{position:absolute;top:0;left:0;width:5px;height:100%;background:-webkit-linear-gradient(top,#f7e500 0%,#eab308 50%,#ca8a04 100%);background:-moz-linear-gradient(top,#f7e500 0%,#eab308 50%,#ca8a04 100%);background:-o-linear-gradient(top,#f7e500 0%,#eab308 50%,#ca8a04 100%);background:linear-gradient(180deg,#f7e500 0%,#eab308 50%,#ca8a04 100%);-webkit-border-radius:20px 0 0 20px;-moz-border-radius:20px 0 0 20px;border-radius:20px 0 0 20px}.content-rich-html.jsx-8aa76e67b341728e h1{font-size:30px;margin:0 0 20px;color:#0f172a;font-weight:800;letter-spacing:-.02em;line-height:1.3}.content-rich-html.jsx-8aa76e67b341728e h2{font-size:22px;margin:36px 0 14px;color:#1e293b;font-weight:700;letter-spacing:-.01em;padding-bottom:10px;border-bottom:2px solid#f1f5f9}.content-rich-html.jsx-8aa76e67b341728e h3{font-size:18px;margin:28px 0 10px;color:#334155;font-weight:700}.content-rich-html.jsx-8aa76e67b341728e p{margin:0 0 16px;font-size:15.5px;line-height:1.85;color:#475569}.content-rich-html.jsx-8aa76e67b341728e ul,.content-rich-html.jsx-8aa76e67b341728e ol{margin:0 0 20px;padding-left:0;list-style:none}.content-rich-html.jsx-8aa76e67b341728e li{position:relative;margin-bottom:10px;font-size:15px;line-height:1.75;color:#475569;padding-left:28px}.content-rich-html.jsx-8aa76e67b341728e li::before{content:"";position:absolute;left:0;top:10px;width:8px;height:8px;background:-webkit-linear-gradient(315deg,#f7e500,#eab308);background:-moz-linear-gradient(315deg,#f7e500,#eab308);background:-o-linear-gradient(315deg,#f7e500,#eab308);background:linear-gradient(135deg,#f7e500,#eab308);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.content-rich-html.jsx-8aa76e67b341728e ol li::before{content:counter(li-counter);counter-increment:li-counter;background:#1e293b;color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;top:4px}.content-rich-html.jsx-8aa76e67b341728e ol{counter-reset:li-counter}.content-rich-html.jsx-8aa76e67b341728e img{max-width:100%;height:auto;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;margin:24px 0;-webkit-box-shadow:0 8px 32px rgba(0,0,0,.08);-moz-box-shadow:0 8px 32px rgba(0,0,0,.08);box-shadow:0 8px 32px rgba(0,0,0,.08)}.content-rich-html.jsx-8aa76e67b341728e blockquote{border-left:4px solid#f7e500;padding:16px 24px;margin:24px 0;background:-webkit-linear-gradient(315deg,#fefce8,#fef9c3);background:-moz-linear-gradient(315deg,#fefce8,#fef9c3);background:-o-linear-gradient(315deg,#fefce8,#fef9c3);background:linear-gradient(135deg,#fefce8,#fef9c3);-webkit-border-radius:0 12px 12px 0;-moz-border-radius:0 12px 12px 0;border-radius:0 12px 12px 0;color:#854d0e;font-style:italic;font-size:15px;line-height:1.7}.content-rich-html.jsx-8aa76e67b341728e a{color:#2563eb;text-decoration:none;font-weight:600;border-bottom:1px solid rgba(37,99,235,.2);-webkit-transition:border-color.15s;-moz-transition:border-color.15s;-o-transition:border-color.15s;transition:border-color.15s}.content-rich-html.jsx-8aa76e67b341728e a:hover{border-bottom-color:#2563eb}.content-rich-html.jsx-8aa76e67b341728e strong{font-weight:700;color:#1e293b}.content-rich-html.jsx-8aa76e67b341728e table{width:100%;border-collapse:separate;border-spacing:0;margin:24px 0;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden;border:1px solid#e2e8f0}.content-rich-html.jsx-8aa76e67b341728e th{background:#1e293b;color:#fff;padding:12px 16px;text-align:left;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}.content-rich-html.jsx-8aa76e67b341728e td{padding:12px 16px;text-align:left;font-size:14px;border-bottom:1px solid#f1f5f9;color:#475569}.content-rich-html.jsx-8aa76e67b341728e tr:last-child td{border-bottom:none}.content-rich-html.jsx-8aa76e67b341728e tr:hover td{background:#f8fafc}.content-rich-html.jsx-8aa76e67b341728e code{background:#f1f5f9;padding:2px 8px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;font-size:13px;color:#e11d48;font-family:"JetBrains Mono",monospace}.content-rich-html.jsx-8aa76e67b341728e pre{background:#1e293b;color:#e2e8f0;padding:20px 24px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow-x:auto;margin:20px 0;font-size:13px;line-height:1.7}.content-rich-html.jsx-8aa76e67b341728e hr{border:none;height:2px;background:-webkit-linear-gradient(left,transparent,#e2e8f0,transparent);background:-moz-linear-gradient(left,transparent,#e2e8f0,transparent);background:-o-linear-gradient(left,transparent,#e2e8f0,transparent);background:linear-gradient(90deg,transparent,#e2e8f0,transparent);margin:32px 0}.content-cta-wrap.jsx-8aa76e67b341728e{margin-top:36px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.content-cta-btn.jsx-8aa76e67b341728e{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;padding:16px 36px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;font-size:16px;font-weight:700;text-decoration:none;background:#0f172a;color:#f7e500;-webkit-box-shadow:0 4px 16px rgba(15,23,42,.2);-moz-box-shadow:0 4px 16px rgba(15,23,42,.2);box-shadow:0 4px 16px rgba(15,23,42,.2);-webkit-transition:-webkit-transform.2s,box-shadow.2s;-moz-transition:-moz-transform.2s,box-shadow.2s;-o-transition:-o-transform.2s,box-shadow.2s;transition:-webkit-transform.2s,box-shadow.2s;transition:-moz-transform.2s,box-shadow.2s;transition:-o-transform.2s,box-shadow.2s;transition:transform.2s,box-shadow.2s}.content-cta-btn.jsx-8aa76e67b341728e:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 32px rgba(15,23,42,.3);-moz-box-shadow:0 8px 32px rgba(15,23,42,.3);box-shadow:0 8px 32px rgba(15,23,42,.3)}@media(max-width:767px){.content-hero-cover.jsx-8aa76e67b341728e{min-height:280px;max-height:320px}.content-hero-cover.jsx-8aa76e67b341728e img.jsx-8aa76e67b341728e{min-height:280px;max-height:320px}.content-hero-inner.jsx-8aa76e67b341728e{padding:24px 20px}.content-hero-inner.jsx-8aa76e67b341728e h1.jsx-8aa76e67b341728e{font-size:24px}.content-body-wrap.jsx-8aa76e67b341728e{padding:28px 16px 48px}.content-body-modern.jsx-8aa76e67b341728e{padding:28px 24px 28px 32px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px}.content-rich-html.jsx-8aa76e67b341728e h1{font-size:24px}.content-rich-html.jsx-8aa76e67b341728e h2{font-size:19px}}'
            })
        ]
    });
};
const getServerSideProps = async ({ params , query  })=>{
    const slug = String(params?.slug || "").trim().toLowerCase();
    if (!slug) return {
        notFound: true
    };
    // Determine which table to search based on query param or try all
    const contentType = query.type || null;
    const tables = contentType ? [
        contentType
    ] : [
        "digi_services",
        "bus_corp_sol",
        "service_maintenance",
        "page_contents",
        "career_posts"
    ];
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_7__.getDbPool)();
        for (const table of tables){
            const safeTable = [
                "digi_services",
                "bus_corp_sol",
                "service_maintenance",
                "page_contents",
                "career_posts"
            ].includes(table) ? table : null;
            if (!safeTable) continue;
            // career_posts uses 'title' instead of 'name'
            const nameCol = safeTable === "career_posts" ? "title" : "name";
            const slugCol = safeTable === "career_posts" ? "id" : "slug";
            let rows;
            if (safeTable === "career_posts") {
                [rows] = await db.execute(`SELECT * FROM ${safeTable} WHERE id = ? LIMIT 1`, [
                    slug
                ]);
            } else {
                [rows] = await db.execute(`SELECT * FROM ${safeTable} WHERE LOWER(COALESCE(slug, '')) = ? AND deleted_at IS NULL LIMIT 1`, [
                    slug
                ]);
            }
            if (rows.length > 0) {
                return {
                    props: {
                        content: JSON.parse(JSON.stringify(rows[0])),
                        contentType: safeTable
                    }
                };
            }
        }
        return {
            notFound: true
        };
    } catch (e) {
        console.error("Content detail error:", e);
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentDetailPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(8572)));
module.exports = __webpack_exports__;

})();