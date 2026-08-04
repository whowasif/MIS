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
                className: "jsx-356473dffd8c6441" + " " + "cit-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-356473dffd8c6441",
                                children: "Core IT Solutions - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Core IT Solutions - MIS Solution",
                                className: "jsx-356473dffd8c6441"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Comprehensive IT solutions including digital services, business & corporate solutions, and maintenance support for modern enterprises.",
                                className: "jsx-356473dffd8c6441"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-356473dffd8c6441" + " " + "cit-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-356473dffd8c6441" + " " + "cit-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-pattern"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-gradient"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-356473dffd8c6441" + " " + "cit-hero-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-tag",
                                        children: "End-to-End IT Services"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-title",
                                        children: [
                                            "Comprehensive IT Solutions",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: "jsx-356473dffd8c6441"
                                            }),
                                            "for Modern Enterprises"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-subtitle",
                                        children: "From digital transformation to infrastructure deployment and ongoing support — we deliver technology solutions that drive business growth."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-hero-stats",
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
                                                label: "Client Satisfaction",
                                                decimals: 0
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                                end: 50,
                                                suffix: "+",
                                                label: "Enterprise Clients"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-356473dffd8c6441" + " " + "cit-bento-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-bento-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "Our Service Pillars"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "Three specialized divisions working together to cover every aspect of your IT needs."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-bento-grid",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/digital-services",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-card cit-bento-large",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "32",
                                                                    height: "32",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "jsx-356473dffd8c6441",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            className: "jsx-356473dffd8c6441"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                            x1: "2",
                                                                            y1: "12",
                                                                            x2: "22",
                                                                            y2: "12",
                                                                            className: "jsx-356473dffd8c6441"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
                                                                            className: "jsx-356473dffd8c6441"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Digital Services"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Website design & development, domain & hosting, digital marketing, and mobile app solutions to establish your digital presence."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-list",
                                                                children: [
                                                                    digitalServices.slice(0, 4).map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "jsx-356473dffd8c6441",
                                                                            children: s.name
                                                                        }, s.id)),
                                                                    digitalServices.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-356473dffd8c6441",
                                                                                children: "Website Design & Development"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-356473dffd8c6441",
                                                                                children: "Web Domain & Hosting"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-356473dffd8c6441",
                                                                                children: "Digital Marketing & SEO"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "jsx-356473dffd8c6441",
                                                                                children: "Mobile App Development"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-cta",
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
                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-card cit-bento-medium",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "32",
                                                                    height: "32",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "jsx-356473dffd8c6441",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "2",
                                                                            y: "7",
                                                                            width: "20",
                                                                            height: "14",
                                                                            rx: "2",
                                                                            className: "jsx-356473dffd8c6441"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                                            className: "jsx-356473dffd8c6441"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Business & Corporate Solutions"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Enterprise-grade infrastructure, networking, security systems, and project-based B2B deployments."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-cta",
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
                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-card cit-bento-medium",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800')"
                                                        },
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-bg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-356473dffd8c6441" + " " + "cit-bento-card-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "32",
                                                                    height: "32",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "jsx-356473dffd8c6441",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                                        className: "jsx-356473dffd8c6441"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Maintenance & Support"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-356473dffd8c6441",
                                                                children: "Annual IT contracts, on-call repairs, troubleshooting, and project-based installation services."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-356473dffd8c6441" + " " + "cit-bento-cta",
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
                        className: "jsx-356473dffd8c6441" + " " + "cit-why-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-356473dffd8c6441" + " " + "cit-why-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "Why Enterprises Choose Us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "We combine deep technical expertise with a client-first approach to deliver results that matter."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-356473dffd8c6441",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                            className: "jsx-356473dffd8c6441"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Proven Expertise"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "A decade of delivering mission-critical IT solutions across diverse industries with consistent quality and reliability."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-356473dffd8c6441",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                className: "jsx-356473dffd8c6441"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "12 6 12 12 16 14",
                                                                className: "jsx-356473dffd8c6441"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "24/7 Support"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Round-the-clock technical assistance ensures your systems stay operational with minimal downtime."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-356473dffd8c6441",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                                                                className: "jsx-356473dffd8c6441"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "9",
                                                                cy: "7",
                                                                r: "4",
                                                                className: "jsx-356473dffd8c6441"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M23 21v-2a4 4 0 00-3-3.87",
                                                                className: "jsx-356473dffd8c6441"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M16 3.13a4 4 0 010 7.75",
                                                                className: "jsx-356473dffd8c6441"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Tailored Solutions"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Every engagement is customized to your business requirements — no one-size-fits-all templates."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-why-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-why-icon",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-356473dffd8c6441",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "23 6 13.5 15.5 8.5 10.5 1 18",
                                                                className: "jsx-356473dffd8c6441"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                points: "17 6 23 6 23 12",
                                                                className: "jsx-356473dffd8c6441"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Scalable Growth"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Solutions architected to grow with your business — from startup infrastructure to enterprise-grade systems."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-356473dffd8c6441" + " " + "cit-process-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-356473dffd8c6441" + " " + "cit-process-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "How We Work"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-356473dffd8c6441",
                                            children: "A structured approach that ensures transparency, quality, and timely delivery at every stage."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-process-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-num",
                                                    children: "01"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Consultation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "We assess your current IT landscape, understand business goals, and identify opportunities for improvement."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-process-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-num",
                                                    children: "02"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Planning & Design"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Our team architects a tailored solution with clear timelines, resource allocation, and measurable milestones."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-process-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-num",
                                                    children: "03"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Implementation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Expert execution with rigorous quality checks, testing protocols, and seamless integration with existing systems."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-356473dffd8c6441" + " " + "cit-process-step",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-process-num",
                                                    children: "04"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Support & Optimization"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-356473dffd8c6441",
                                                    children: "Ongoing maintenance, performance monitoring, and continuous improvements to keep your systems ahead."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-356473dffd8c6441" + " " + "cit-cta-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-356473dffd8c6441" + " " + "cit-cta-container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-356473dffd8c6441" + " " + "cit-cta-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-356473dffd8c6441",
                                        children: "Ready to Transform Your IT Infrastructure?"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-356473dffd8c6441",
                                        children: "Let's discuss how our solutions can accelerate your business goals."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-356473dffd8c6441" + " " + "cit-cta-buttons",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/request-custom-quote",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-cta-btn cit-cta-primary",
                                                    children: "Request a Quote"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-356473dffd8c6441" + " " + "cit-cta-btn cit-cta-secondary",
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "356473dffd8c6441",
                children: '.cit-page.jsx-356473dffd8c6441{width:100%;min-height:100vh}.cit-hero.jsx-356473dffd8c6441{position:relative;min-height:560px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.cit-hero-bg.jsx-356473dffd8c6441{position:absolute;inset:0;background:#0a101b}.cit-hero-pattern.jsx-356473dffd8c6441{position:absolute;inset:0;opacity:.06;background-image:-webkit-radial-gradient(25%25%,circle,#f7e500 1px,transparent 1px),-webkit-radial-gradient(75%75%,circle,#f7e500 1px,transparent 1px);background-image:-moz-radial-gradient(25%25%,circle,#f7e500 1px,transparent 1px),-moz-radial-gradient(75%75%,circle,#f7e500 1px,transparent 1px);background-image:-o-radial-gradient(25%25%,circle,#f7e500 1px,transparent 1px),-o-radial-gradient(75%75%,circle,#f7e500 1px,transparent 1px);background-image:radial-gradient(circle at 25%25%,#f7e500 1px,transparent 1px),radial-gradient(circle at 75%75%,#f7e500 1px,transparent 1px);-webkit-background-size:60px 60px;-moz-background-size:60px 60px;-o-background-size:60px 60px;background-size:60px 60px}.cit-hero-gradient.jsx-356473dffd8c6441{position:absolute;inset:0;background:-webkit-radial-gradient(50%120%,ellipse,rgba(247,229,0,.08)0%,transparent 60%);background:-moz-radial-gradient(50%120%,ellipse,rgba(247,229,0,.08)0%,transparent 60%);background:-o-radial-gradient(50%120%,ellipse,rgba(247,229,0,.08)0%,transparent 60%);background:radial-gradient(ellipse at 50%120%,rgba(247,229,0,.08)0%,transparent 60%)}.cit-hero-content.jsx-356473dffd8c6441{position:relative;z-index:1;max-width:900px;width:100%;padding:120px 24px 80px;text-align:center}.cit-hero-tag.jsx-356473dffd8c6441{display:inline-block;padding:6px 16px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:rgba(247,229,0,.12);border:1px solid rgba(247,229,0,.25);color:#f7e500;font-size:13px;font-weight:600;letter-spacing:.02em;margin-bottom:20px}.cit-hero-title.jsx-356473dffd8c6441{margin:0;font-size:clamp(32px,5vw,52px);font-weight:800;color:#fff;line-height:1.15;letter-spacing:-.02em}.cit-hero-subtitle.jsx-356473dffd8c6441{margin:18px auto 0;max-width:640px;font-size:17px;color:rgba(255,255,255,.7);line-height:1.7}.cit-hero-stats.jsx-356473dffd8c6441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:32px;margin-top:48px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-stat.jsx-356473dffd8c6441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.cit-stat-number.jsx-356473dffd8c6441{font-size:32px;font-weight:800;color:#f7e500;font-family:"JetBrains Mono",monospace}.cit-stat-label.jsx-356473dffd8c6441{font-size:13px;color:rgba(255,255,255,.6);font-weight:500}.cit-bento-section.jsx-356473dffd8c6441{padding:80px 24px;background:#f8fafc}.cit-bento-container.jsx-356473dffd8c6441{max-width:1200px;margin:0 auto}.cit-bento-header.jsx-356473dffd8c6441{text-align:center;margin-bottom:48px}.cit-bento-header.jsx-356473dffd8c6441 h2.jsx-356473dffd8c6441{margin:0;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#111827}.cit-bento-header.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:12px 0 0;font-size:16px;color:#6b7280;max-width:560px;margin-left:auto;margin-right:auto}.cit-bento-grid.jsx-356473dffd8c6441{display:grid;grid-template-columns:1.2fr 1fr;grid-template-rows:1fr 1fr;gap:20px;min-height:520px}.cit-bento-large.jsx-356473dffd8c6441{grid-row:1/3}.cit-bento-card.jsx-356473dffd8c6441{position:relative;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden;text-decoration:none;color:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;min-height:240px;-webkit-transition:-webkit-transform.25s ease,box-shadow.25s ease;-moz-transition:-moz-transform.25s ease,box-shadow.25s ease;-o-transition:-o-transform.25s ease,box-shadow.25s ease;transition:-webkit-transform.25s ease,box-shadow.25s ease;transition:-moz-transform.25s ease,box-shadow.25s ease;transition:-o-transform.25s ease,box-shadow.25s ease;transition:transform.25s ease,box-shadow.25s ease}.cit-bento-card.jsx-356473dffd8c6441:hover{-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px);-webkit-box-shadow:0 20px 60px rgba(0,0,0,.15);-moz-box-shadow:0 20px 60px rgba(0,0,0,.15);box-shadow:0 20px 60px rgba(0,0,0,.15)}.cit-bento-card-bg.jsx-356473dffd8c6441{position:absolute;inset:0;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;-webkit-transition:-webkit-transform.4s ease;-moz-transition:-moz-transform.4s ease;-o-transition:-o-transform.4s ease;transition:-webkit-transform.4s ease;transition:-moz-transform.4s ease;transition:-o-transform.4s ease;transition:transform.4s ease}.cit-bento-card.jsx-356473dffd8c6441:hover .cit-bento-card-bg.jsx-356473dffd8c6441{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}.cit-bento-card-overlay.jsx-356473dffd8c6441{position:absolute;inset:0;background:-webkit-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:-moz-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:-o-linear-gradient(bottom,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%);background:linear-gradient(to top,rgba(10,16,27,.92)0%,rgba(10,16,27,.5)50%,rgba(10,16,27,.2)100%)}.cit-bento-card-content.jsx-356473dffd8c6441{position:relative;z-index:1;padding:32px;width:100%}.cit-bento-icon.jsx-356473dffd8c6441{width:52px;height:52px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:rgba(247,229,0,.15);border:1px solid rgba(247,229,0,.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:16px;color:#f7e500}.cit-bento-card-content.jsx-356473dffd8c6441 h3.jsx-356473dffd8c6441{margin:0 0 8px;font-size:22px;font-weight:700}.cit-bento-card-content.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:0;font-size:14px;color:rgba(255,255,255,.75);line-height:1.6}.cit-bento-list.jsx-356473dffd8c6441{list-style:none;padding:0;margin:14px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:6px}.cit-bento-list.jsx-356473dffd8c6441 li.jsx-356473dffd8c6441{font-size:13px;color:rgba(255,255,255,.8);padding-left:16px;position:relative}.cit-bento-list.jsx-356473dffd8c6441 li.jsx-356473dffd8c6441::before{content:"";position:absolute;left:0;top:7px;width:6px;height:6px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f7e500}.cit-bento-cta.jsx-356473dffd8c6441{display:inline-block;margin-top:16px;font-size:14px;font-weight:700;color:#f7e500;-webkit-transition:letter-spacing.2s;-moz-transition:letter-spacing.2s;-o-transition:letter-spacing.2s;transition:letter-spacing.2s}.cit-bento-card.jsx-356473dffd8c6441:hover .cit-bento-cta.jsx-356473dffd8c6441{letter-spacing:.03em}.cit-why-section.jsx-356473dffd8c6441{padding:80px 24px;background:#fff}.cit-why-container.jsx-356473dffd8c6441{max-width:1100px;margin:0 auto}.cit-why-header.jsx-356473dffd8c6441{text-align:center;margin-bottom:48px}.cit-why-header.jsx-356473dffd8c6441 h2.jsx-356473dffd8c6441{margin:0;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#111827}.cit-why-header.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:12px 0 0;font-size:16px;color:#6b7280;max-width:520px;margin-left:auto;margin-right:auto}.cit-why-grid.jsx-356473dffd8c6441{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px}.cit-why-card.jsx-356473dffd8c6441{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;border:1px solid#e5e7eb;background:#fafbfc;-webkit-transition:box-shadow.2s,-webkit-transform.15s,border-color.2s;-moz-transition:box-shadow.2s,-moz-transform.15s,border-color.2s;-o-transition:box-shadow.2s,-o-transform.15s,border-color.2s;transition:box-shadow.2s,-webkit-transform.15s,border-color.2s;transition:box-shadow.2s,-moz-transform.15s,border-color.2s;transition:box-shadow.2s,-o-transform.15s,border-color.2s;transition:box-shadow.2s,transform.15s,border-color.2s}.cit-why-card.jsx-356473dffd8c6441:hover{-webkit-box-shadow:0 12px 32px rgba(0,0,0,.06);-moz-box-shadow:0 12px 32px rgba(0,0,0,.06);box-shadow:0 12px 32px rgba(0,0,0,.06);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);border-color:#f7e500}.cit-why-icon.jsx-356473dffd8c6441{width:48px;height:48px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#0a101b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#f7e500;margin-bottom:16px}.cit-why-card.jsx-356473dffd8c6441 h3.jsx-356473dffd8c6441{margin:0 0 8px;font-size:17px;font-weight:700;color:#111827}.cit-why-card.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.cit-process-section.jsx-356473dffd8c6441{padding:80px 24px;background:#0a101b}.cit-process-container.jsx-356473dffd8c6441{max-width:1100px;margin:0 auto}.cit-process-header.jsx-356473dffd8c6441{text-align:center;margin-bottom:48px}.cit-process-header.jsx-356473dffd8c6441 h2.jsx-356473dffd8c6441{margin:0;font-size:clamp(26px,3.5vw,36px);font-weight:800;color:#fff}.cit-process-header.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:12px 0 0;font-size:16px;color:rgba(255,255,255,.6);max-width:520px;margin-left:auto;margin-right:auto}.cit-process-grid.jsx-356473dffd8c6441{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px}.cit-process-step.jsx-356473dffd8c6441{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);-webkit-transition:border-color.2s,background.2s;-moz-transition:border-color.2s,background.2s;-o-transition:border-color.2s,background.2s;transition:border-color.2s,background.2s}.cit-process-step.jsx-356473dffd8c6441:hover{border-color:rgba(247,229,0,.3);background:rgba(247,229,0,.04)}.cit-process-num.jsx-356473dffd8c6441{font-size:36px;font-weight:800;color:#f7e500;opacity:.7;font-family:"JetBrains Mono",monospace;margin-bottom:12px}.cit-process-step.jsx-356473dffd8c6441 h3.jsx-356473dffd8c6441{margin:0 0 8px;font-size:17px;font-weight:700;color:#fff}.cit-process-step.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:0;font-size:14px;color:rgba(255,255,255,.6);line-height:1.7}.cit-cta-section.jsx-356473dffd8c6441{padding:80px 24px;background:-webkit-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-moz-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:-o-linear-gradient(315deg,#f7e500 0%,#e6d400 100%);background:linear-gradient(135deg,#f7e500 0%,#e6d400 100%)}.cit-cta-container.jsx-356473dffd8c6441{max-width:800px;margin:0 auto}.cit-cta-content.jsx-356473dffd8c6441{text-align:center}.cit-cta-content.jsx-356473dffd8c6441 h2.jsx-356473dffd8c6441{margin:0;font-size:clamp(24px,3.5vw,34px);font-weight:800;color:#0a101b}.cit-cta-content.jsx-356473dffd8c6441 p.jsx-356473dffd8c6441{margin:12px 0 0;font-size:16px;color:rgba(10,16,27,.7)}.cit-cta-buttons.jsx-356473dffd8c6441{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-cta-btn.jsx-356473dffd8c6441{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:-webkit-transform.15s,box-shadow.15s;-moz-transition:-moz-transform.15s,box-shadow.15s;-o-transition:-o-transform.15s,box-shadow.15s;transition:-webkit-transform.15s,box-shadow.15s;transition:-moz-transform.15s,box-shadow.15s;transition:-o-transform.15s,box-shadow.15s;transition:transform.15s,box-shadow.15s}.cit-cta-primary.jsx-356473dffd8c6441{background:#0a101b;color:#f7e500}.cit-cta-primary.jsx-356473dffd8c6441:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 24px rgba(0,0,0,.2);-moz-box-shadow:0 8px 24px rgba(0,0,0,.2);box-shadow:0 8px 24px rgba(0,0,0,.2)}.cit-cta-secondary.jsx-356473dffd8c6441{background:transparent;color:#0a101b;border:2px solid#0a101b}.cit-cta-secondary.jsx-356473dffd8c6441:hover{background:#0a101b;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}@media(max-width:768px){.cit-hero.jsx-356473dffd8c6441{min-height:480px}.cit-hero-content.jsx-356473dffd8c6441{padding:100px 20px 60px}.cit-hero-stats.jsx-356473dffd8c6441{gap:20px}.cit-stat-number.jsx-356473dffd8c6441{font-size:26px}.cit-bento-grid.jsx-356473dffd8c6441{grid-template-columns:1fr;grid-template-rows:auto}.cit-bento-large.jsx-356473dffd8c6441{grid-row:auto;min-height:320px}.cit-bento-medium.jsx-356473dffd8c6441{min-height:260px}.cit-why-grid.jsx-356473dffd8c6441{grid-template-columns:1fr}.cit-process-grid.jsx-356473dffd8c6441{grid-template-columns:1fr}}'
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