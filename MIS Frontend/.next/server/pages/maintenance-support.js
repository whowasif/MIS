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
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_6__]);
_components_footer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const fallbackServices = [
    {
        id: "maintenance-1",
        name: "Yearly IT Maintenance Contract",
        slug: "yearly-it-maintenance",
        description: "Annual coverage for preventive checks, monitoring, upgrades, and support response."
    },
    {
        id: "maintenance-2",
        name: "On-call Repairs & Troubleshooting",
        slug: "on-call-repairs",
        description: "Fast-response repair support for desktops, servers, network devices, and office systems."
    },
    {
        id: "maintenance-3",
        name: "Project Basis Installation & Delivery",
        slug: "project-installation",
        description: "Project-based setup and commissioning for IT hardware, network, and corporate rollouts."
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
        className: "ms-metric",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "ms-metric-value",
                children: [
                    count,
                    suffix
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ms-metric-label",
                children: label
            })
        ]
    });
};
const MaintenanceSupport = ({ services =[]  })=>{
    const supportItems = Array.isArray(services) && services.length > 0 ? services : fallbackServices;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-62d3f18d05479603" + " " + "ms-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-62d3f18d05479603",
                                children: "Maintenance & Support - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Maintenance & Support - MIS Solution",
                                className: "jsx-62d3f18d05479603"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Reliable IT maintenance contracts, on-call repairs, troubleshooting, and project-based installation services.",
                                className: "jsx-62d3f18d05479603"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-62d3f18d05479603" + " " + "ms-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-62d3f18d05479603" + " " + "ms-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "jsx-62d3f18d05479603"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-62d3f18d05479603" + " " + "ms-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-62d3f18d05479603" + " " + "ms-hero-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                        "aria-label": "Breadcrumb",
                                        className: "jsx-62d3f18d05479603" + " " + "ms-breadcrumb",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-62d3f18d05479603",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/core-it-solutions",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Core IT Solutions"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-62d3f18d05479603",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-62d3f18d05479603" + " " + "ms-breadcrumb-current",
                                                children: "Maintenance & Support"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "jsx-62d3f18d05479603",
                                        children: [
                                            "Maintenance &",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: "jsx-62d3f18d05479603"
                                            }),
                                            "Support Services"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-62d3f18d05479603",
                                        children: "Keep your IT infrastructure running at peak performance with our preventive maintenance, rapid response repairs, and professional installation services."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-62d3f18d05479603" + " " + "ms-metrics-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-62d3f18d05479603" + " " + "ms-metrics-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 4,
                                    suffix: "hr",
                                    label: "Avg. Response Time"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 99,
                                    suffix: "%",
                                    label: "SLA Compliance"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 500,
                                    suffix: "+",
                                    label: "Issues Resolved"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 365,
                                    suffix: "d",
                                    label: "Coverage Available"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-62d3f18d05479603" + " " + "ms-services-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-62d3f18d05479603" + " " + "ms-services-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-62d3f18d05479603" + " " + "ms-services-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-62d3f18d05479603",
                                            children: "Support & Maintenance Plans"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-62d3f18d05479603",
                                            children: "Flexible service options designed to keep your systems healthy and your team productive."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-62d3f18d05479603" + " " + "ms-services-grid",
                                    children: supportItems.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(item.slug || item.id)}?type=service_maintenance`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-62d3f18d05479603" + " " + "ms-service-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-62d3f18d05479603" + " " + "ms-service-icon-wrap",
                                                        children: item.iconUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.iconUrl,
                                                            alt: item.name,
                                                            className: "jsx-62d3f18d05479603" + " " + "ms-service-icon-img"
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-62d3f18d05479603" + " " + "ms-service-icon",
                                                            children: [
                                                                idx === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-62d3f18d05479603",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                                        className: "jsx-62d3f18d05479603"
                                                                    })
                                                                }),
                                                                idx === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-62d3f18d05479603",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                                        className: "jsx-62d3f18d05479603"
                                                                    })
                                                                }),
                                                                idx === 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-62d3f18d05479603",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "1",
                                                                            y: "3",
                                                                            width: "15",
                                                                            height: "13",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                                            points: "16 8 20 8 23 11 23 16 16 16 16 8",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "5.5",
                                                                            cy: "18.5",
                                                                            r: "2.5",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "18.5",
                                                                            cy: "18.5",
                                                                            r: "2.5",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        })
                                                                    ]
                                                                }),
                                                                idx > 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-62d3f18d05479603",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                            points: "12 6 12 12 16 14",
                                                                            className: "jsx-62d3f18d05479603"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-62d3f18d05479603" + " " + "ms-service-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-62d3f18d05479603",
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-62d3f18d05479603",
                                                                children: item.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-62d3f18d05479603" + " " + "ms-service-link",
                                                                children: "Learn More →"
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
                        className: "jsx-62d3f18d05479603" + " " + "ms-covered-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-62d3f18d05479603",
                                            children: "What Our Support Covers"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-62d3f18d05479603",
                                            children: "End-to-end coverage for your complete IT ecosystem."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Desktop & Laptop Systems"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Servers & Storage"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Network Switches & Routers"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Printers & Peripherals"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "CCTV & Security Systems"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "UPS & Power Solutions"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Software & OS Issues"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-62d3f18d05479603" + " " + "ms-covered-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603" + " " + "ms-covered-dot"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-62d3f18d05479603",
                                                    children: "Data Backup & Recovery"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-62d3f18d05479603" + " " + "ms-cta-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-62d3f18d05479603" + " " + "ms-cta-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-62d3f18d05479603",
                                    children: "Need Reliable IT Support?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-62d3f18d05479603",
                                    children: "Get a customized maintenance plan that fits your operations and budget."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-62d3f18d05479603" + " " + "ms-cta-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/request-custom-quote",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-62d3f18d05479603" + " " + "ms-cta-btn ms-cta-primary",
                                                children: "Get a Support Quote"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-62d3f18d05479603" + " " + "ms-cta-btn ms-cta-secondary",
                                                children: "Contact Support Team"
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
                id: "62d3f18d05479603",
                children: '.ms-page.jsx-62d3f18d05479603{width:100%;min-height:100vh}.ms-hero.jsx-62d3f18d05479603{position:relative;min-height:420px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.ms-hero-bg.jsx-62d3f18d05479603{position:absolute;inset:0}.ms-hero-bg.jsx-62d3f18d05479603 img.jsx-62d3f18d05479603{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ms-hero-overlay.jsx-62d3f18d05479603{position:absolute;inset:0;background:-webkit-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-moz-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-o-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:linear-gradient(to top,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%)}.ms-hero-content.jsx-62d3f18d05479603{position:relative;z-index:1;max-width:800px;padding:60px 32px 48px}.ms-breadcrumb.jsx-62d3f18d05479603{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-size:13px;margin-bottom:16px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.ms-breadcrumb.jsx-62d3f18d05479603 a{color:rgba(255,255,255,.7);text-decoration:none;font-weight:500;-webkit-transition:color.15s;-moz-transition:color.15s;-o-transition:color.15s;transition:color.15s}.ms-breadcrumb.jsx-62d3f18d05479603 a:hover{color:#f7e500}.ms-breadcrumb.jsx-62d3f18d05479603 span.jsx-62d3f18d05479603{color:rgba(255,255,255,.4)}.ms-breadcrumb-current.jsx-62d3f18d05479603{color:#f7e500;font-weight:600}.ms-hero-content.jsx-62d3f18d05479603 h1.jsx-62d3f18d05479603{margin:0;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.1}.ms-hero-content.jsx-62d3f18d05479603 p.jsx-62d3f18d05479603{margin:14px 0 0;font-size:17px;color:rgba(255,255,255,.7);line-height:1.6;max-width:600px}.ms-metrics-section.jsx-62d3f18d05479603{padding:0 24px;margin-top:-1px;background:#0a101b}.ms-metrics-container.jsx-62d3f18d05479603{max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:36px 0;border-top:1px solid rgba(255,255,255,.08)}.ms-metric.jsx-62d3f18d05479603{text-align:center}.ms-metric-value.jsx-62d3f18d05479603{display:block;font-size:28px;font-weight:800;color:#f7e500;font-family:"JetBrains Mono",monospace}.ms-metric-label.jsx-62d3f18d05479603{display:block;font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;text-transform:uppercase;letter-spacing:.05em}.ms-services-section.jsx-62d3f18d05479603{padding:72px 24px;background:#f8fafc}.ms-services-container.jsx-62d3f18d05479603{max-width:1e3px;margin:0 auto}.ms-services-header.jsx-62d3f18d05479603{text-align:center;margin-bottom:40px}.ms-services-header.jsx-62d3f18d05479603 h2.jsx-62d3f18d05479603{margin:0;font-size:clamp(26px,3.5vw,34px);font-weight:800;color:#111827}.ms-services-header.jsx-62d3f18d05479603 p.jsx-62d3f18d05479603{margin:10px 0 0;font-size:16px;color:#6b7280}.ms-services-grid.jsx-62d3f18d05479603{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.ms-service-card.jsx-62d3f18d05479603{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;border:1px solid#e5e7eb;background:#fff;text-decoration:none;color:inherit;-webkit-transition:box-shadow.2s,-webkit-transform.15s,border-color.2s;-moz-transition:box-shadow.2s,-moz-transform.15s,border-color.2s;-o-transition:box-shadow.2s,-o-transform.15s,border-color.2s;transition:box-shadow.2s,-webkit-transform.15s,border-color.2s;transition:box-shadow.2s,-moz-transform.15s,border-color.2s;transition:box-shadow.2s,-o-transform.15s,border-color.2s;transition:box-shadow.2s,transform.15s,border-color.2s}.ms-service-card.jsx-62d3f18d05479603:hover{-webkit-box-shadow:0 12px 36px rgba(0,0,0,.06);-moz-box-shadow:0 12px 36px rgba(0,0,0,.06);box-shadow:0 12px 36px rgba(0,0,0,.06);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);border-color:#f7e500}.ms-service-icon-wrap.jsx-62d3f18d05479603{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.ms-service-icon.jsx-62d3f18d05479603{width:52px;height:52px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#0a101b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#f7e500}.ms-service-icon-img.jsx-62d3f18d05479603{width:52px;height:52px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;-o-object-fit:cover;object-fit:cover}.ms-service-body.jsx-62d3f18d05479603{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.ms-service-body.jsx-62d3f18d05479603 h3.jsx-62d3f18d05479603{margin:0 0 8px;font-size:17px;font-weight:700;color:#111827}.ms-service-body.jsx-62d3f18d05479603 p.jsx-62d3f18d05479603{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.ms-service-link.jsx-62d3f18d05479603{display:inline-block;margin-top:10px;font-size:13px;font-weight:700;color:#0a101b}.ms-service-card.jsx-62d3f18d05479603:hover .ms-service-link.jsx-62d3f18d05479603{color:#b8860b}.ms-covered-section.jsx-62d3f18d05479603{padding:72px 24px;background:#0a101b}.ms-covered-container.jsx-62d3f18d05479603{max-width:800px;margin:0 auto}.ms-covered-header.jsx-62d3f18d05479603{text-align:center;margin-bottom:36px}.ms-covered-header.jsx-62d3f18d05479603 h2.jsx-62d3f18d05479603{margin:0;font-size:clamp(24px,3.5vw,32px);font-weight:800;color:#fff}.ms-covered-header.jsx-62d3f18d05479603 p.jsx-62d3f18d05479603{margin:10px 0 0;font-size:16px;color:rgba(255,255,255,.6)}.ms-covered-grid.jsx-62d3f18d05479603{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px}.ms-covered-item.jsx-62d3f18d05479603{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;padding:14px 18px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);font-size:14px;color:rgba(255,255,255,.85);font-weight:500;-webkit-transition:border-color.2s;-moz-transition:border-color.2s;-o-transition:border-color.2s;transition:border-color.2s}.ms-covered-item.jsx-62d3f18d05479603:hover{border-color:rgba(247,229,0,.4)}.ms-covered-dot.jsx-62d3f18d05479603{width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f7e500;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.ms-cta-section.jsx-62d3f18d05479603{padding:72px 24px;background:-webkit-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-moz-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-o-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:linear-gradient(135deg,#f7e500 0%,#e6d400 100%);text-align:center}.ms-cta-container.jsx-62d3f18d05479603{max-width:600px;margin:0 auto}.ms-cta-container.jsx-62d3f18d05479603 h2.jsx-62d3f18d05479603{margin:0;font-size:clamp(24px,3.5vw,32px);font-weight:800;color:#0a101b}.ms-cta-container.jsx-62d3f18d05479603 p.jsx-62d3f18d05479603{margin:12px 0 0;font-size:16px;color:rgba(10,16,27,.7)}.ms-cta-buttons.jsx-62d3f18d05479603{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.ms-cta-btn.jsx-62d3f18d05479603{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:-webkit-transform.15s,box-shadow.15s;-moz-transition:-moz-transform.15s,box-shadow.15s;-o-transition:-o-transform.15s,box-shadow.15s;transition:-webkit-transform.15s,box-shadow.15s;transition:-moz-transform.15s,box-shadow.15s;transition:-o-transform.15s,box-shadow.15s;transition:transform.15s,box-shadow.15s}.ms-cta-primary.jsx-62d3f18d05479603{background:#0a101b;color:#f7e500}.ms-cta-primary.jsx-62d3f18d05479603:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 24px rgba(0,0,0,.2);-moz-box-shadow:0 8px 24px rgba(0,0,0,.2);box-shadow:0 8px 24px rgba(0,0,0,.2)}.ms-cta-secondary.jsx-62d3f18d05479603{background:transparent;color:#0a101b;border:2px solid#0a101b}.ms-cta-secondary.jsx-62d3f18d05479603:hover{background:#0a101b;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}@media(max-width:768px){.ms-hero.jsx-62d3f18d05479603{min-height:360px}.ms-hero-content.jsx-62d3f18d05479603{padding:100px 20px 36px}.ms-metrics-container.jsx-62d3f18d05479603{grid-template-columns:repeat(2,1fr);gap:16px}.ms-services-grid.jsx-62d3f18d05479603{grid-template-columns:1fr}.ms-service-card.jsx-62d3f18d05479603{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:14px}.ms-covered-grid.jsx-62d3f18d05479603{grid-template-columns:1fr}}'
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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(870)));
module.exports = __webpack_exports__;

})();