"use strict";
(() => {
var exports = {};
exports.id = 5939;
exports.ids = [5939,7174];
exports.modules = {

/***/ 619:
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







const fallbackItems = [
    {
        id: "b2b-1",
        name: "Data Center Solution",
        slug: "data-center-solution",
        description: "End-to-end enterprise data center design and deployment."
    },
    {
        id: "b2b-2",
        name: "Structured Cabling",
        slug: "structured-cabling",
        description: "Reliable structured cabling for modern enterprise infrastructure."
    },
    {
        id: "b2b-3",
        name: "CCTV Camera / IP Camera",
        slug: "cctv-ip-camera",
        description: "Scalable surveillance architecture for corporate security."
    },
    {
        id: "b2b-4",
        name: "Corporate ID Card Printing",
        slug: "corporate-id-printing",
        description: "Bulk professional printing support for enterprise operations."
    }, 
];
const MetricCounter = ({ end , suffix , label  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: hasAnimated , 1: setHasAnimated  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                const duration = 1600;
                const startTime = performance.now();
                const animate = (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.floor(eased * end));
                    if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
            }
        }, {
            threshold: 0.3
        });
        if (ref.current) observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, [
        hasAnimated,
        end
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "es-metric",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "es-metric-value",
                children: [
                    count,
                    suffix
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "es-metric-label",
                children: label
            })
        ]
    });
};
const EnterpriseSolutions = ({ services =[]  })=>{
    const sourceItems = Array.isArray(services) && services.length > 0 ? services : fallbackItems;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-943cc523f5ca9a7e" + " " + "es-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-943cc523f5ca9a7e",
                                children: "Business & Corporate Solutions - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Business & Corporate Solutions - MIS Solution",
                                className: "jsx-943cc523f5ca9a7e"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Enterprise-grade IT infrastructure, networking, security systems, and project-based B2B solutions by MIS Solution.",
                                className: "jsx-943cc523f5ca9a7e"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-943cc523f5ca9a7e" + " " + "es-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-943cc523f5ca9a7e" + " " + "es-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/business%20corporate%20sol.webp",
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "jsx-943cc523f5ca9a7e"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-943cc523f5ca9a7e" + " " + "es-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-943cc523f5ca9a7e" + " " + "es-hero-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                        "aria-label": "Breadcrumb",
                                        className: "jsx-943cc523f5ca9a7e" + " " + "es-breadcrumb",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-943cc523f5ca9a7e",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/core-it-solutions",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Core IT Solutions"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-943cc523f5ca9a7e",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-943cc523f5ca9a7e" + " " + "es-breadcrumb-current",
                                                children: "Business & Corporate Solutions"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "jsx-943cc523f5ca9a7e",
                                        children: [
                                            "Business & Corporate",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: "jsx-943cc523f5ca9a7e"
                                            }),
                                            "Solutions"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-943cc523f5ca9a7e",
                                        children: "Project-based B2B solutions engineered for enterprise infrastructure, networking, physical security, and large-scale deployments."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-943cc523f5ca9a7e" + " " + "es-metrics-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-943cc523f5ca9a7e" + " " + "es-metrics-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 80,
                                    suffix: "+",
                                    label: "B2B Projects"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 100,
                                    suffix: "%",
                                    label: "Warranty Coverage"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 30,
                                    suffix: "+",
                                    label: "Corporate Clients"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 5,
                                    suffix: "yr",
                                    label: "Avg. Partnership"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-943cc523f5ca9a7e" + " " + "es-services-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-943cc523f5ca9a7e" + " " + "es-services-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-services-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-943cc523f5ca9a7e",
                                            children: "Enterprise Solutions Portfolio"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-943cc523f5ca9a7e",
                                            children: "Comprehensive infrastructure and technology solutions for organizations of all sizes."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-services-grid",
                                    children: sourceItems.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(item.slug || item.id)}?type=bus_corp_sol`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-943cc523f5ca9a7e" + " " + "es-service-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-943cc523f5ca9a7e" + " " + "es-service-number",
                                                        children: String(idx + 1).padStart(2, "0")
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-943cc523f5ca9a7e" + " " + "es-service-img",
                                                        children: item.iconUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.iconUrl,
                                                            alt: item.name,
                                                            className: "jsx-943cc523f5ca9a7e"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-943cc523f5ca9a7e" + " " + "es-service-placeholder",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-943cc523f5ca9a7e",
                                                                children: item.name.charAt(0)
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-943cc523f5ca9a7e" + " " + "es-service-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-943cc523f5ca9a7e",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-943cc523f5ca9a7e",
                                                                children: item.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-943cc523f5ca9a7e" + " " + "es-service-link",
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-943cc523f5ca9a7e" + " " + "es-process-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-943cc523f5ca9a7e" + " " + "es-process-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-process-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-943cc523f5ca9a7e",
                                            children: "Enterprise Delivery Framework"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-943cc523f5ca9a7e",
                                            children: "A structured methodology ensuring every project is delivered on time, on spec, and within budget."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-process-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-943cc523f5ca9a7e" + " " + "es-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-step-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-943cc523f5ca9a7e",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                className: "jsx-943cc523f5ca9a7e"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M12 16v-4M12 8h.01",
                                                                className: "jsx-943cc523f5ca9a7e"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Site Assessment"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "On-site survey, requirements gathering, and feasibility analysis for your infrastructure needs."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-943cc523f5ca9a7e" + " " + "es-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-step-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-943cc523f5ca9a7e",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z",
                                                                className: "jsx-943cc523f5ca9a7e"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
                                                                className: "jsx-943cc523f5ca9a7e"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Solution Design"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Technical architecture, BOQ preparation, and project plan with clear milestones."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-943cc523f5ca9a7e" + " " + "es-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-step-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-943cc523f5ca9a7e",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                            className: "jsx-943cc523f5ca9a7e"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Deployment"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Professional installation, configuration, testing, and commissioning by certified engineers."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-943cc523f5ca9a7e" + " " + "es-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-step-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-943cc523f5ca9a7e",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                            className: "jsx-943cc523f5ca9a7e"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Warranty & Support"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-943cc523f5ca9a7e",
                                                    children: "Comprehensive warranty coverage, SLA-based support, and proactive maintenance plans."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-943cc523f5ca9a7e" + " " + "es-cta-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-943cc523f5ca9a7e" + " " + "es-cta-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-943cc523f5ca9a7e",
                                    children: "Need a Corporate IT Partner?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-943cc523f5ca9a7e",
                                    children: "From data centers to security systems — let's build your enterprise infrastructure together."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-943cc523f5ca9a7e" + " " + "es-cta-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/request-custom-quote",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-943cc523f5ca9a7e" + " " + "es-cta-btn es-cta-primary",
                                                children: "Request a Proposal"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-943cc523f5ca9a7e" + " " + "es-cta-btn es-cta-secondary",
                                                children: "Schedule a Consultation"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "943cc523f5ca9a7e",
                children: '.es-page.jsx-943cc523f5ca9a7e{width:100%;min-height:100vh}.es-hero.jsx-943cc523f5ca9a7e{position:relative;min-height:420px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.es-hero-bg.jsx-943cc523f5ca9a7e{position:absolute;inset:0}.es-hero-bg.jsx-943cc523f5ca9a7e img.jsx-943cc523f5ca9a7e{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.es-hero-overlay.jsx-943cc523f5ca9a7e{position:absolute;inset:0;background:-webkit-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-moz-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-o-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:linear-gradient(to top,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%)}.es-hero-content.jsx-943cc523f5ca9a7e{position:relative;z-index:1;max-width:800px;padding:60px 32px 48px}.es-breadcrumb.jsx-943cc523f5ca9a7e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-size:13px;margin-bottom:16px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.es-breadcrumb.jsx-943cc523f5ca9a7e a{color:rgba(255,255,255,.7);text-decoration:none;font-weight:500;-webkit-transition:color.15s;-moz-transition:color.15s;-o-transition:color.15s;transition:color.15s}.es-breadcrumb.jsx-943cc523f5ca9a7e a:hover{color:#f7e500}.es-breadcrumb.jsx-943cc523f5ca9a7e span.jsx-943cc523f5ca9a7e{color:rgba(255,255,255,.4)}.es-breadcrumb-current.jsx-943cc523f5ca9a7e{color:#f7e500;font-weight:600}.es-hero-content.jsx-943cc523f5ca9a7e h1.jsx-943cc523f5ca9a7e{margin:0;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.1}.es-hero-content.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:14px 0 0;font-size:17px;color:rgba(255,255,255,.7);line-height:1.6;max-width:600px}.es-metrics-section.jsx-943cc523f5ca9a7e{padding:0 24px;margin-top:-1px;background:#0a101b}.es-metrics-container.jsx-943cc523f5ca9a7e{max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:36px 0;border-top:1px solid rgba(255,255,255,.08)}.es-metric.jsx-943cc523f5ca9a7e{text-align:center}.es-metric-value.jsx-943cc523f5ca9a7e{display:block;font-size:28px;font-weight:800;color:#f7e500;font-family:"JetBrains Mono",monospace}.es-metric-label.jsx-943cc523f5ca9a7e{display:block;font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;text-transform:uppercase;letter-spacing:.05em}.es-services-section.jsx-943cc523f5ca9a7e{padding:72px 24px;background:#f8fafc}.es-services-container.jsx-943cc523f5ca9a7e{max-width:1140px;margin:0 auto}.es-services-header.jsx-943cc523f5ca9a7e{text-align:center;margin-bottom:40px}.es-services-header.jsx-943cc523f5ca9a7e h2.jsx-943cc523f5ca9a7e{margin:0;font-size:clamp(26px,3.5vw,34px);font-weight:800;color:#111827}.es-services-header.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:10px 0 0;font-size:16px;color:#6b7280}.es-services-grid.jsx-943cc523f5ca9a7e{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px}.es-service-card.jsx-943cc523f5ca9a7e{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;border:1px solid#e5e7eb;background:#fff;text-decoration:none;color:inherit;-webkit-transition:box-shadow.2s,-webkit-transform.15s;-moz-transition:box-shadow.2s,-moz-transform.15s;-o-transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,-webkit-transform.15s;transition:box-shadow.2s,-moz-transform.15s;transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,transform.15s}.es-service-card.jsx-943cc523f5ca9a7e:hover{-webkit-box-shadow:0 16px 48px rgba(0,0,0,.08);-moz-box-shadow:0 16px 48px rgba(0,0,0,.08);box-shadow:0 16px 48px rgba(0,0,0,.08);-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px)}.es-service-number.jsx-943cc523f5ca9a7e{position:absolute;top:16px;right:16px;font-size:42px;font-weight:900;color:rgba(10,16,27,.04);line-height:1;z-index:1;font-family:"JetBrains Mono",monospace}.es-service-img.jsx-943cc523f5ca9a7e{height:160px;background:-webkit-linear-gradient(315deg,#0a101b,#1e293b);background:-moz-linear-gradient(315deg,#0a101b,#1e293b);background:-o-linear-gradient(315deg,#0a101b,#1e293b);background:linear-gradient(135deg,#0a101b,#1e293b);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.es-service-img.jsx-943cc523f5ca9a7e img.jsx-943cc523f5ca9a7e{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.es-service-placeholder.jsx-943cc523f5ca9a7e{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.es-service-placeholder.jsx-943cc523f5ca9a7e span.jsx-943cc523f5ca9a7e{font-size:48px;font-weight:800;color:#f7e500;opacity:.5}.es-service-body.jsx-943cc523f5ca9a7e{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.es-service-body.jsx-943cc523f5ca9a7e h3.jsx-943cc523f5ca9a7e{margin:0;font-size:18px;font-weight:700;color:#111827}.es-service-body.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.es-service-link.jsx-943cc523f5ca9a7e{font-size:13px;font-weight:700;color:#0a101b;margin-top:auto;padding-top:8px}.es-service-card.jsx-943cc523f5ca9a7e:hover .es-service-link.jsx-943cc523f5ca9a7e{color:#b8860b}.es-process-section.jsx-943cc523f5ca9a7e{padding:72px 24px;background:#fff}.es-process-container.jsx-943cc523f5ca9a7e{max-width:1e3px;margin:0 auto}.es-process-header.jsx-943cc523f5ca9a7e{text-align:center;margin-bottom:40px}.es-process-header.jsx-943cc523f5ca9a7e h2.jsx-943cc523f5ca9a7e{margin:0;font-size:clamp(26px,3.5vw,34px);font-weight:800;color:#111827}.es-process-header.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:10px 0 0;font-size:16px;color:#6b7280}.es-process-grid.jsx-943cc523f5ca9a7e{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px}.es-step.jsx-943cc523f5ca9a7e{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fafbfc;border:1px solid#e5e7eb;-webkit-transition:border-color.2s,box-shadow.2s;-moz-transition:border-color.2s,box-shadow.2s;-o-transition:border-color.2s,box-shadow.2s;transition:border-color.2s,box-shadow.2s}.es-step.jsx-943cc523f5ca9a7e:hover{border-color:#f7e500;-webkit-box-shadow:0 8px 24px rgba(0,0,0,.04);-moz-box-shadow:0 8px 24px rgba(0,0,0,.04);box-shadow:0 8px 24px rgba(0,0,0,.04)}.es-step-icon.jsx-943cc523f5ca9a7e{width:44px;height:44px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#0a101b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#f7e500;margin-bottom:14px}.es-step.jsx-943cc523f5ca9a7e h3.jsx-943cc523f5ca9a7e{margin:0 0 8px;font-size:16px;font-weight:700;color:#111827}.es-step.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.es-cta-section.jsx-943cc523f5ca9a7e{padding:72px 24px;background:#0a101b;text-align:center}.es-cta-container.jsx-943cc523f5ca9a7e{max-width:600px;margin:0 auto}.es-cta-container.jsx-943cc523f5ca9a7e h2.jsx-943cc523f5ca9a7e{margin:0;font-size:clamp(24px,3.5vw,32px);font-weight:800;color:#fff}.es-cta-container.jsx-943cc523f5ca9a7e p.jsx-943cc523f5ca9a7e{margin:12px 0 0;font-size:16px;color:rgba(255,255,255,.6)}.es-cta-buttons.jsx-943cc523f5ca9a7e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.es-cta-btn.jsx-943cc523f5ca9a7e{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:-webkit-transform.15s,box-shadow.15s;-moz-transition:-moz-transform.15s,box-shadow.15s;-o-transition:-o-transform.15s,box-shadow.15s;transition:-webkit-transform.15s,box-shadow.15s;transition:-moz-transform.15s,box-shadow.15s;transition:-o-transform.15s,box-shadow.15s;transition:transform.15s,box-shadow.15s}.es-cta-primary.jsx-943cc523f5ca9a7e{background:#f7e500;color:#0a101b}.es-cta-primary.jsx-943cc523f5ca9a7e:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 24px rgba(247,229,0,.3);-moz-box-shadow:0 8px 24px rgba(247,229,0,.3);box-shadow:0 8px 24px rgba(247,229,0,.3)}.es-cta-secondary.jsx-943cc523f5ca9a7e{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3)}.es-cta-secondary.jsx-943cc523f5ca9a7e:hover{border-color:#f7e500;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}@media(max-width:768px){.es-hero.jsx-943cc523f5ca9a7e{min-height:360px}.es-hero-content.jsx-943cc523f5ca9a7e{padding:100px 20px 36px}.es-metrics-container.jsx-943cc523f5ca9a7e{grid-template-columns:repeat(2,1fr);gap:16px}.es-services-grid.jsx-943cc523f5ca9a7e{grid-template-columns:1fr}.es-process-grid.jsx-943cc523f5ca9a7e{grid-template-columns:1fr}}'
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listBusinessSolutionEntries  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const services = await listBusinessSolutionEntries(120);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterpriseSolutions);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();