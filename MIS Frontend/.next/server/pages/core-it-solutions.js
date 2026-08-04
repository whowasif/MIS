"use strict";
(() => {
var exports = {};
exports.id = 7348;
exports.ids = [7348,7174];
exports.modules = {

/***/ 4743:
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







const StatCounter = ({ end , suffix ="" , label , decimals =0  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: hasAnimated , 1: setHasAnimated  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                const duration = 1800;
                const startTime = performance.now();
                const animate = (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(eased * end);
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
    const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cit-stat",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "cit-stat-number",
                children: [
                    displayValue,
                    suffix
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "cit-stat-label",
                children: label
            })
        ]
    });
};
const CoreITSolutions = ({ digitalServices =[] , businessSolutions =[] , maintenanceServices =[]  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-bf961ec7739667aa" + " " + "cit-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-bf961ec7739667aa",
                                children: "Core IT Solutions - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Core IT Solutions - MIS Solution",
                                className: "jsx-bf961ec7739667aa"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Comprehensive IT solutions including digital services, business & corporate solutions, and maintenance support for modern enterprises.",
                                className: "jsx-bf961ec7739667aa"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-bf961ec7739667aa" + " " + "cit-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "jsx-bf961ec7739667aa"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-bf961ec7739667aa" + " " + "cit-hero-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero-tag",
                                        children: "End-to-End IT Services"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero-title",
                                        children: [
                                            "Drive Growth with Our",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: "jsx-bf961ec7739667aa"
                                            }),
                                            "Core IT Capabilities"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero-subtitle",
                                        children: "From concept to deployment and beyond — we deliver complete technology solutions that transform businesses, accelerate growth, and build lasting digital infrastructure."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-hero-cta",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/request-custom-quote",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-btn-primary",
                                                    children: "Schedule a Consultation"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-btn-outline",
                                                    children: "Talk to Our Experts"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-bf961ec7739667aa" + " " + "cit-hero-stats-bar",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 150,
                                        suffix: "+",
                                        label: "Projects Delivered"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 10,
                                        suffix: "+",
                                        label: "Years Experience"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 99,
                                        suffix: "%",
                                        label: "Client Satisfaction"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 50,
                                        suffix: "+",
                                        label: "Enterprise Clients"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillars-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-pillars-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-pillars-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-bf961ec7739667aa",
                                            children: "Our Service Pillars"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-bf961ec7739667aa",
                                            children: "Three specialized divisions working together to cover every aspect of your IT needs."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-pillars-grid",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/digital-services",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-card cit-pillar-large",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-bf961ec7739667aa",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            className: "jsx-bf961ec7739667aa"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                            x1: "2",
                                                                            y1: "12",
                                                                            x2: "22",
                                                                            y2: "12",
                                                                            className: "jsx-bf961ec7739667aa"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
                                                                            className: "jsx-bf961ec7739667aa"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Digital Services"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Web development, hosting, digital marketing, and mobile apps to build your digital presence."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-list",
                                                                children: [
                                                                    digitalServices.slice(0, 4).map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "jsx-bf961ec7739667aa",
                                                                            children: s.name
                                                                        }, s.id)),
                                                                    digitalServices.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-bf961ec7739667aa",
                                                                                children: "Website Design & Development"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-bf961ec7739667aa",
                                                                                children: "Web Domain & Hosting"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-bf961ec7739667aa",
                                                                                children: "Digital Marketing & SEO"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-bf961ec7739667aa",
                                                                                children: "Mobile App Development"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-cta",
                                                                children: "Explore Digital Services →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/enterprise-solutions",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-card cit-pillar-medium",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-bf961ec7739667aa",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "2",
                                                                            y: "7",
                                                                            width: "20",
                                                                            height: "14",
                                                                            rx: "2",
                                                                            className: "jsx-bf961ec7739667aa"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                                            className: "jsx-bf961ec7739667aa"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Business & Corporate Solutions"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Enterprise infrastructure, networking, CCTV, data centers, and B2B project deployments."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-cta",
                                                                children: "Explore Enterprise Solutions →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/maintenance-support",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-card cit-pillar-medium",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-bf961ec7739667aa",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                                        className: "jsx-bf961ec7739667aa"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Maintenance & Support"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-bf961ec7739667aa",
                                                                children: "Annual IT contracts, rapid repairs, troubleshooting, and project-based installations."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-bf961ec7739667aa" + " " + "cit-pillar-cta",
                                                                children: "Explore Support Services →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-process-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-process-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-process-title",
                                    children: "How We Work"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-process-timeline",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-item cit-timeline-right",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-step",
                                                            children: "STEP 1"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Assessment & Planning"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Architecture, risk, and compliance review. We study your existing systems and define clear objectives."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-item cit-timeline-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-step",
                                                            children: "STEP 2"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Deployment & Configuration"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "LMS, proctoring, integrations — seamless execution with rigorous quality gates at every phase."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-item cit-timeline-right",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-step",
                                                            children: "STEP 3"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Go-Live & Support"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Monitoring, incident readiness, and real-time support to ensure a flawless launch."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-item cit-timeline-left",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-bf961ec7739667aa" + " " + "cit-timeline-step",
                                                            children: "STEP 4"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Ongoing Ownership"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-bf961ec7739667aa",
                                                            children: "Support, optimization, upgrades — we stay with you as a long-term technology partner."
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-industries-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-industries-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-bf961ec7739667aa",
                                    children: "Industries We Serve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-industries-sub",
                                    children: "Our deep understanding of diverse industries empowers us to design customized technology solutions."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-industries-grid",
                                    children: [
                                        "Finance & Banking",
                                        "E-commerce",
                                        "Telecom",
                                        "Real Estate",
                                        "Healthcare",
                                        "Education",
                                        "Logistics",
                                        "Manufacturing",
                                        "Retail",
                                        "Government",
                                        "Startups",
                                        "NGO & Non-Profit"
                                    ].map((industry)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-industry-tag",
                                            children: industry
                                        }, industry))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-tech-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-tech-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-bf961ec7739667aa",
                                    children: "Technologies We Work With"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-tech-sub",
                                    children: "We leverage modern tools and platforms to deliver scalable, future-proof solutions."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-tech-marquee",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-bf961ec7739667aa" + " " + "cit-tech-track",
                                        children: [
                                            "React",
                                            "Next.js",
                                            "Node.js",
                                            "Python",
                                            "PHP",
                                            "Laravel",
                                            "MySQL",
                                            "MongoDB",
                                            "AWS",
                                            "Azure",
                                            "Docker",
                                            "WordPress",
                                            "Flutter",
                                            "Java",
                                            "MikroTik",
                                            "Cisco",
                                            "Ubiquiti",
                                            "Hikvision",
                                            "React",
                                            "Next.js",
                                            "Node.js",
                                            "Python",
                                            "PHP",
                                            "Laravel",
                                            "MySQL",
                                            "MongoDB",
                                            "AWS",
                                            "Azure",
                                            "Docker",
                                            "WordPress",
                                            "Flutter",
                                            "Java",
                                            "MikroTik",
                                            "Cisco",
                                            "Ubiquiti",
                                            "Hikvision"
                                        ].map((tech, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-tech-item",
                                                children: tech
                                            }, idx))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-why-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-why-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-bf961ec7739667aa",
                                            children: "Why Enterprises Choose Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-bf961ec7739667aa",
                                            children: "We combine deep technical expertise with a client-first approach to deliver results that matter."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-bf961ec7739667aa",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                            className: "jsx-bf961ec7739667aa"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Proven Expertise"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "A decade of delivering mission-critical IT solutions across diverse industries with consistent quality."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-bf961ec7739667aa",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                className: "jsx-bf961ec7739667aa"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "12 6 12 12 16 14",
                                                                className: "jsx-bf961ec7739667aa"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "24/7 Support"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Round-the-clock technical assistance ensures minimal downtime and maximum productivity."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-bf961ec7739667aa",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                                                                className: "jsx-bf961ec7739667aa"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "9",
                                                                cy: "7",
                                                                r: "4",
                                                                className: "jsx-bf961ec7739667aa"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M23 21v-2a4 4 0 00-3-3.87",
                                                                className: "jsx-bf961ec7739667aa"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M16 3.13a4 4 0 010 7.75",
                                                                className: "jsx-bf961ec7739667aa"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Tailored Solutions"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Every engagement is customized to your business — no templates, no one-size-fits-all."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-bf961ec7739667aa" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bf961ec7739667aa" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        className: "jsx-bf961ec7739667aa",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "23 6 13.5 15.5 8.5 10.5 1 18",
                                                                className: "jsx-bf961ec7739667aa"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "17 6 23 6 23 12",
                                                                className: "jsx-bf961ec7739667aa"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Scalable Growth"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-bf961ec7739667aa",
                                                    children: "Solutions architected to grow with your business — from startup to enterprise-grade systems."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-bf961ec7739667aa" + " " + "cit-cta-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-bf961ec7739667aa" + " " + "cit-cta-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-bf961ec7739667aa",
                                    children: "Ready to Transform Your IT Infrastructure?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-bf961ec7739667aa",
                                    children: "Let's discuss how our solutions can accelerate your business goals."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-bf961ec7739667aa" + " " + "cit-cta-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/request-custom-quote",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-btn-primary",
                                                children: "Request a Quote"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-bf961ec7739667aa" + " " + "cit-btn-outline-dark",
                                                children: "Contact Us"
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
                id: "bf961ec7739667aa",
                children: '.cit-page.jsx-bf961ec7739667aa{width:100%;min-height:100vh}.cit-hero.jsx-bf961ec7739667aa{position:relative;min-height:600px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.cit-hero-bg.jsx-bf961ec7739667aa{position:absolute;inset:0}.cit-hero-bg.jsx-bf961ec7739667aa img.jsx-bf961ec7739667aa{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cit-hero-overlay.jsx-bf961ec7739667aa{position:absolute;inset:0;background:-webkit-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.7)100%);background:-moz-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.7)100%);background:-o-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.7)100%);background:linear-gradient(135deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.7)100%)}.cit-hero-content.jsx-bf961ec7739667aa{position:relative;z-index:1;max-width:720px;padding:140px 32px 60px}.cit-hero-tag.jsx-bf961ec7739667aa{display:inline-block;padding:6px 16px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:rgba(247,229,0,.12);border:1px solid rgba(247,229,0,.3);color:#f7e500;font-size:13px;font-weight:600;margin-bottom:20px}.cit-hero-title.jsx-bf961ec7739667aa{margin:0;font-size:clamp(34px,5vw,54px);font-weight:800;color:#fff;line-height:1.12;letter-spacing:-.02em}.cit-hero-subtitle.jsx-bf961ec7739667aa{margin:18px 0 0;font-size:17px;color:rgba(255,255,255,.7);line-height:1.7;max-width:580px}.cit-hero-cta.jsx-bf961ec7739667aa{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;margin-top:32px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-btn-primary.jsx-bf961ec7739667aa{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;background:#f7e500;color:#0a101b;-webkit-transition:-webkit-transform.15s,box-shadow.15s;-moz-transition:-moz-transform.15s,box-shadow.15s;-o-transition:-o-transform.15s,box-shadow.15s;transition:-webkit-transform.15s,box-shadow.15s;transition:-moz-transform.15s,box-shadow.15s;transition:-o-transform.15s,box-shadow.15s;transition:transform.15s,box-shadow.15s}.cit-btn-primary.jsx-bf961ec7739667aa:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 24px rgba(247,229,0,.3);-moz-box-shadow:0 8px 24px rgba(247,229,0,.3);box-shadow:0 8px 24px rgba(247,229,0,.3)}.cit-btn-outline.jsx-bf961ec7739667aa{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3);-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.cit-btn-outline.jsx-bf961ec7739667aa:hover{border-color:#f7e500;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-btn-outline-dark.jsx-bf961ec7739667aa{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;background:transparent;color:#0a101b;border:2px solid#0a101b;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.cit-btn-outline-dark.jsx-bf961ec7739667aa:hover{background:#0a101b;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-hero-stats-bar.jsx-bf961ec7739667aa{position:relative;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:40px;padding:28px 24px;background:rgba(10,16,27,.85);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-top:1px solid rgba(247,229,0,.15);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-stat.jsx-bf961ec7739667aa{text-align:center}.cit-stat-number.jsx-bf961ec7739667aa{display:block;font-size:30px;font-weight:800;color:#f7e500;font-family:"JetBrains Mono",monospace}.cit-stat-label.jsx-bf961ec7739667aa{font-size:12px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.05em}.cit-pillars-section.jsx-bf961ec7739667aa{padding:80px 24px;background:#f8fafc}.cit-pillars-container.jsx-bf961ec7739667aa{max-width:1200px;margin:0 auto}.cit-pillars-header.jsx-bf961ec7739667aa{text-align:center;margin-bottom:48px}.cit-pillars-header.jsx-bf961ec7739667aa h2.jsx-bf961ec7739667aa{margin:0;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#111827}.cit-pillars-header.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:12px 0 0;font-size:16px;color:#6b7280}.cit-pillars-grid.jsx-bf961ec7739667aa{display:grid;grid-template-columns:1.2fr 1fr;grid-template-rows:1fr 1fr;gap:20px;min-height:520px}.cit-pillar-large.jsx-bf961ec7739667aa{grid-row:1/3}.cit-pillar-card.jsx-bf961ec7739667aa{position:relative;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden;text-decoration:none;color:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;min-height:240px;-webkit-transition:-webkit-transform.3s,box-shadow.3s;-moz-transition:-moz-transform.3s,box-shadow.3s;-o-transition:-o-transform.3s,box-shadow.3s;transition:-webkit-transform.3s,box-shadow.3s;transition:-moz-transform.3s,box-shadow.3s;transition:-o-transform.3s,box-shadow.3s;transition:transform.3s,box-shadow.3s}.cit-pillar-card.jsx-bf961ec7739667aa:hover{-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px);-webkit-box-shadow:0 20px 60px rgba(0,0,0,.15);-moz-box-shadow:0 20px 60px rgba(0,0,0,.15);box-shadow:0 20px 60px rgba(0,0,0,.15)}.cit-pillar-bg.jsx-bf961ec7739667aa{position:absolute;inset:0;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;-webkit-transition:-webkit-transform.5s;-moz-transition:-moz-transform.5s;-o-transition:-o-transform.5s;transition:-webkit-transform.5s;transition:-moz-transform.5s;transition:-o-transform.5s;transition:transform.5s}.cit-pillar-card.jsx-bf961ec7739667aa:hover .cit-pillar-bg.jsx-bf961ec7739667aa{-webkit-transform:scale(1.06);-moz-transform:scale(1.06);-ms-transform:scale(1.06);-o-transform:scale(1.06);transform:scale(1.06)}.cit-pillar-overlay.jsx-bf961ec7739667aa{position:absolute;inset:0;background:-webkit-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:-moz-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:-o-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:linear-gradient(to top,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%)}.cit-pillar-content.jsx-bf961ec7739667aa{position:relative;z-index:1;padding:32px;width:100%}.cit-pillar-icon.jsx-bf961ec7739667aa{width:48px;height:48px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:rgba(247,229,0,.15);border:1px solid rgba(247,229,0,.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:14px;color:#f7e500}.cit-pillar-content.jsx-bf961ec7739667aa h3.jsx-bf961ec7739667aa{margin:0 0 8px;font-size:20px;font-weight:700}.cit-pillar-content.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:0;font-size:14px;color:rgba(255,255,255,.75);line-height:1.6}.cit-pillar-list.jsx-bf961ec7739667aa{list-style:none;padding:0;margin:12px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.cit-pillar-list.jsx-bf961ec7739667aa li.jsx-bf961ec7739667aa{font-size:13px;color:rgba(255,255,255,.8);padding-left:14px;position:relative}.cit-pillar-list.jsx-bf961ec7739667aa li.jsx-bf961ec7739667aa::before{content:"";position:absolute;left:0;top:7px;width:6px;height:6px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f7e500}.cit-pillar-cta.jsx-bf961ec7739667aa{display:inline-block;margin-top:14px;font-size:14px;font-weight:700;color:#f7e500}.cit-process-section.jsx-bf961ec7739667aa{padding:80px 24px;background:#fff}.cit-process-container.jsx-bf961ec7739667aa{max-width:700px;margin:0 auto}.cit-process-title.jsx-bf961ec7739667aa{text-align:center;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#111827;margin:0 0 48px}.cit-process-timeline.jsx-bf961ec7739667aa{position:relative}.cit-process-timeline.jsx-bf961ec7739667aa::before{content:"";position:absolute;left:50%;top:0;bottom:0;width:2px;background:-webkit-linear-gradient(top,#f7e500,#e5e7eb);background:-moz-linear-gradient(top,#f7e500,#e5e7eb);background:-o-linear-gradient(top,#f7e500,#e5e7eb);background:linear-gradient(to bottom,#f7e500,#e5e7eb);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.cit-timeline-item.jsx-bf961ec7739667aa{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-bottom:48px}.cit-timeline-item.jsx-bf961ec7739667aa:last-child{margin-bottom:0}.cit-timeline-dot.jsx-bf961ec7739667aa{position:absolute;left:50%;top:6px;width:14px;height:14px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#fff;border:3px solid#f7e500;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);z-index:2}.cit-timeline-right.jsx-bf961ec7739667aa .cit-timeline-content.jsx-bf961ec7739667aa{margin-left:-webkit-calc(50% + 28px);margin-left:-moz-calc(50% + 28px);margin-left:calc(50% + 28px)}.cit-timeline-left.jsx-bf961ec7739667aa .cit-timeline-content.jsx-bf961ec7739667aa{margin-right:-webkit-calc(50% + 28px);margin-right:-moz-calc(50% + 28px);margin-right:calc(50% + 28px);text-align:right}.cit-timeline-step.jsx-bf961ec7739667aa{font-size:11px;font-weight:700;color:#f7e500;text-transform:uppercase;letter-spacing:.1em}.cit-timeline-content.jsx-bf961ec7739667aa h3.jsx-bf961ec7739667aa{margin:4px 0 6px;font-size:18px;font-weight:700;color:#111827}.cit-timeline-content.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:0;font-size:14px;color:#6b7280;line-height:1.6}.cit-industries-section.jsx-bf961ec7739667aa{padding:72px 24px;background:#0a101b}.cit-industries-container.jsx-bf961ec7739667aa{max-width:900px;margin:0 auto;text-align:center}.cit-industries-container.jsx-bf961ec7739667aa h2.jsx-bf961ec7739667aa{margin:0;font-size:clamp(24px,3.5vw,34px);font-weight:800;color:#fff}.cit-industries-sub.jsx-bf961ec7739667aa{margin:10px 0 32px;font-size:15px;color:rgba(255,255,255,.55)}.cit-industries-grid.jsx-bf961ec7739667aa{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px}.cit-industry-tag.jsx-bf961ec7739667aa{padding:10px 20px;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:rgba(247,229,0,.08);border:1px solid rgba(247,229,0,.2);color:rgba(255,255,255,.85);font-size:13px;font-weight:600;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.cit-industry-tag.jsx-bf961ec7739667aa:hover{background:rgba(247,229,0,.18);border-color:#f7e500;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-tech-section.jsx-bf961ec7739667aa{padding:60px 0;background:#f8fafc;overflow:hidden}.cit-tech-container.jsx-bf961ec7739667aa{text-align:center}.cit-tech-container.jsx-bf961ec7739667aa h2.jsx-bf961ec7739667aa{margin:0;font-size:clamp(22px,3vw,30px);font-weight:800;color:#111827}.cit-tech-sub.jsx-bf961ec7739667aa{margin:8px 0 32px;font-size:15px;color:#6b7280}.cit-tech-marquee.jsx-bf961ec7739667aa{overflow:hidden;width:100%}.cit-tech-track.jsx-bf961ec7739667aa{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:48px;-webkit-animation:techScroll 30s linear infinite;-moz-animation:techScroll 30s linear infinite;-o-animation:techScroll 30s linear infinite;animation:techScroll 30s linear infinite;white-space:nowrap}.cit-tech-item.jsx-bf961ec7739667aa{font-size:clamp(20px,3vw,32px);font-weight:700;color:#cbd5e1;-webkit-transition:color.2s;-moz-transition:color.2s;-o-transition:color.2s;transition:color.2s;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cit-tech-item.jsx-bf961ec7739667aa:hover{color:#0a101b}@-webkit-keyframes techScroll{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);transform:translateX(-50%)}}@-moz-keyframes techScroll{0%{-moz-transform:translateX(0);transform:translateX(0)}100%{-moz-transform:translateX(-50%);transform:translateX(-50%)}}@-o-keyframes techScroll{0%{-o-transform:translateX(0);transform:translateX(0)}100%{-o-transform:translateX(-50%);transform:translateX(-50%)}}@keyframes techScroll{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}}.cit-why-section.jsx-bf961ec7739667aa{padding:80px 24px;background:#fff}.cit-why-container.jsx-bf961ec7739667aa{max-width:1100px;margin:0 auto}.cit-why-header.jsx-bf961ec7739667aa{text-align:center;margin-bottom:48px}.cit-why-header.jsx-bf961ec7739667aa h2.jsx-bf961ec7739667aa{margin:0;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#111827}.cit-why-header.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:12px 0 0;font-size:16px;color:#6b7280}.cit-why-grid.jsx-bf961ec7739667aa{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px}.cit-why-card.jsx-bf961ec7739667aa{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;border:1px solid#e5e7eb;background:#fafbfc;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.cit-why-card.jsx-bf961ec7739667aa:hover{-webkit-box-shadow:0 12px 32px rgba(0,0,0,.06);-moz-box-shadow:0 12px 32px rgba(0,0,0,.06);box-shadow:0 12px 32px rgba(0,0,0,.06);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);border-color:#f7e500}.cit-why-icon.jsx-bf961ec7739667aa{width:48px;height:48px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#0a101b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#f7e500;margin-bottom:16px}.cit-why-card.jsx-bf961ec7739667aa h3.jsx-bf961ec7739667aa{margin:0 0 8px;font-size:17px;font-weight:700;color:#111827}.cit-why-card.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.cit-cta-section.jsx-bf961ec7739667aa{padding:80px 24px;background:-webkit-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-moz-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-o-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:linear-gradient(135deg,#f7e500 0%,#e6d400 100%);text-align:center}.cit-cta-container.jsx-bf961ec7739667aa{max-width:700px;margin:0 auto}.cit-cta-container.jsx-bf961ec7739667aa h2.jsx-bf961ec7739667aa{margin:0;font-size:clamp(24px,3.5vw,34px);font-weight:800;color:#0a101b}.cit-cta-container.jsx-bf961ec7739667aa p.jsx-bf961ec7739667aa{margin:12px 0 0;font-size:16px;color:rgba(10,16,27,.7)}.cit-cta-buttons.jsx-bf961ec7739667aa{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media(max-width:768px){.cit-hero.jsx-bf961ec7739667aa{min-height:500px}.cit-hero-content.jsx-bf961ec7739667aa{padding:110px 20px 40px}.cit-hero-stats-bar.jsx-bf961ec7739667aa{gap:20px;padding:20px 16px}.cit-stat-number.jsx-bf961ec7739667aa{font-size:24px}.cit-pillars-grid.jsx-bf961ec7739667aa{grid-template-columns:1fr;grid-template-rows:auto}.cit-pillar-large.jsx-bf961ec7739667aa{grid-row:auto;min-height:300px}.cit-pillar-card.jsx-bf961ec7739667aa{min-height:250px}.cit-process-timeline.jsx-bf961ec7739667aa::before{left:16px}.cit-timeline-dot.jsx-bf961ec7739667aa{left:16px}.cit-timeline-right.jsx-bf961ec7739667aa .cit-timeline-content.jsx-bf961ec7739667aa{margin-left:44px}.cit-timeline-left.jsx-bf961ec7739667aa .cit-timeline-content.jsx-bf961ec7739667aa{margin-right:0;margin-left:44px;text-align:left}.cit-why-grid.jsx-bf961ec7739667aa{grid-template-columns:1fr}.cit-industries-grid.jsx-bf961ec7739667aa{gap:8px}.cit-industry-tag.jsx-bf961ec7739667aa{padding:8px 14px;font-size:12px}}'
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listDigitalServiceEntries , listBusinessSolutionEntries , listMaintenanceSupportEntries  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const [digitalServices, businessSolutions, maintenanceServices] = await Promise.all([
            listDigitalServiceEntries(6),
            listBusinessSolutionEntries(6),
            listMaintenanceSupportEntries(6), 
        ]);
        return {
            props: {
                digitalServices,
                businessSolutions,
                maintenanceServices
            }
        };
    } catch (error) {
        return {
            props: {
                digitalServices: [],
                businessSolutions: [],
                maintenanceServices: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreITSolutions);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(4743)));
module.exports = __webpack_exports__;

})();