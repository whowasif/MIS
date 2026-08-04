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







const useInView = (threshold = 0.15)=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const observer = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) setIsVisible(true);
        }, {
            threshold
        });
        if (ref.current) observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, [
        threshold
    ]);
    return [
        ref,
        isVisible
    ];
};
const AnimatedCounter = ({ end , suffix ="" , label , decimals =0  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [ref, isVisible] = useInView(0.3);
    const animated = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isVisible && !animated.current) {
            animated.current = true;
            const duration = 2000;
            const start = performance.now();
            const tick = (now)=>{
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 4);
                setCount(eased * end);
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }
    }, [
        isVisible,
        end
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cit-counter",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "cit-counter-num",
                children: [
                    decimals > 0 ? count.toFixed(decimals) : Math.floor(count),
                    suffix
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "cit-counter-label",
                children: label
            })
        ]
    });
};
const FadeIn = ({ children , delay =0 , direction ="up"  })=>{
    const [ref, isVisible] = useInView(0.1);
    const transform = direction === "up" ? "translateY(40px)" : direction === "left" ? "translateX(-40px)" : direction === "right" ? "translateX(40px)" : "translateY(40px)";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        style: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : transform,
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
        },
        children: children
    });
};
const CoreITSolutions = ({ digitalServices =[] , businessSolutions =[] , maintenanceServices =[]  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-c06f06797599be33" + " " + "cit-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-c06f06797599be33",
                                children: "Core IT Solutions - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Core IT Solutions - MIS Solution",
                                className: "jsx-c06f06797599be33"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Comprehensive IT solutions — digital services, enterprise infrastructure, and maintenance support.",
                                className: "jsx-c06f06797599be33"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        className: "jsx-c06f06797599be33"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-hero-particles",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-c06f06797599be33" + " " + `cit-particle cit-particle-${i}`
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-hero-inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-c06f06797599be33" + " " + "cit-hero-badge",
                                            children: "End-to-End IT Services"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.2,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "jsx-c06f06797599be33",
                                            children: [
                                                "Drive Growth with Our",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                    className: "jsx-c06f06797599be33"
                                                }),
                                                "Core IT Capabilities"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.35,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-c06f06797599be33" + " " + "cit-hero-desc",
                                            children: "From concept to deployment and beyond — we deliver complete technology solutions that transform businesses, accelerate growth, and build lasting digital infrastructure."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.5,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c06f06797599be33" + " " + "cit-hero-actions",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/request-custom-quote",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-btn cit-btn-glow",
                                                        children: "Schedule a Consultation"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-btn cit-btn-ghost",
                                                        children: "Talk to Our Experts"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-hero-stats",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedCounter, {
                                        end: 150,
                                        suffix: "+",
                                        label: "Projects Delivered"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedCounter, {
                                        end: 10,
                                        suffix: "+",
                                        label: "Years Experience"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedCounter, {
                                        end: 99,
                                        suffix: "%",
                                        label: "Client Satisfaction"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimatedCounter, {
                                        end: 50,
                                        suffix: "+",
                                        label: "Enterprise Clients"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-pillars",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c06f06797599be33" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Our Service Pillars"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Three specialized divisions covering every dimension of your IT needs."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-c06f06797599be33" + " " + "cit-pillars-grid",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: 0.1,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/digital-services",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar cit-pillar-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-img",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
                                                                    alt: "Digital Services",
                                                                    className: "jsx-c06f06797599be33"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-img-overlay"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-body",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-icon",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        className: "jsx-c06f06797599be33",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                cx: "12",
                                                                                cy: "12",
                                                                                r: "10",
                                                                                className: "jsx-c06f06797599be33"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                x1: "2",
                                                                                y1: "12",
                                                                                x2: "22",
                                                                                y2: "12",
                                                                                className: "jsx-c06f06797599be33"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
                                                                                className: "jsx-c06f06797599be33"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Digital Services"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Web development, hosting, digital marketing, and mobile apps to build your complete digital presence."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: (digitalServices.length > 0 ? digitalServices.slice(0, 4) : [
                                                                        {
                                                                            id: 1,
                                                                            name: "Website Design & Development"
                                                                        },
                                                                        {
                                                                            id: 2,
                                                                            name: "Web Domain & Hosting"
                                                                        },
                                                                        {
                                                                            id: 3,
                                                                            name: "Digital Marketing & SEO"
                                                                        },
                                                                        {
                                                                            id: 4,
                                                                            name: "Mobile App Development"
                                                                        }
                                                                    ]).map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "jsx-c06f06797599be33",
                                                                            children: s.name
                                                                        }, s.id))
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-arrow",
                                                                    children: [
                                                                        "Explore Digital Services ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "jsx-c06f06797599be33",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                                className: "jsx-c06f06797599be33"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: 0.2,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/enterprise-solutions",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-img",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
                                                                    alt: "Enterprise",
                                                                    className: "jsx-c06f06797599be33"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-img-overlay"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-body",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-icon",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        className: "jsx-c06f06797599be33",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                x: "2",
                                                                                y: "7",
                                                                                width: "20",
                                                                                height: "14",
                                                                                rx: "2",
                                                                                className: "jsx-c06f06797599be33"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                                                className: "jsx-c06f06797599be33"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Business & Corporate Solutions"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Data centers, structured cabling, CCTV, networking, and enterprise B2B deployments."
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-arrow",
                                                                    children: [
                                                                        "Explore Solutions ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "jsx-c06f06797599be33",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                                className: "jsx-c06f06797599be33"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: 0.3,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/maintenance-support",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-img",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
                                                                    alt: "Support",
                                                                    className: "jsx-c06f06797599be33"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-img-overlay"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-c06f06797599be33" + " " + "cit-pillar-body",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-icon",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        width: "24",
                                                                        height: "24",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        className: "jsx-c06f06797599be33",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                                            className: "jsx-c06f06797599be33"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Maintenance & Support"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-c06f06797599be33",
                                                                    children: "Annual IT contracts, rapid on-call repairs, and project-based installation services."
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "jsx-c06f06797599be33" + " " + "cit-pillar-arrow",
                                                                    children: [
                                                                        "Explore Support ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            className: "jsx-c06f06797599be33",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                                className: "jsx-c06f06797599be33"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-process",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c06f06797599be33" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-section-head cit-section-head-light",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Our Methodology"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-c06f06797599be33",
                                                children: "A proven framework that guarantees timely delivery of high-quality solutions."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-c06f06797599be33" + " " + "cit-process-cards",
                                    children: [
                                        {
                                            num: "01",
                                            title: "Assessment & Planning",
                                            desc: "Architecture review, risk analysis, and requirements gathering to define the perfect roadmap.",
                                            color: "#ffe4ec"
                                        },
                                        {
                                            num: "02",
                                            title: "Design & Prototyping",
                                            desc: "Wireframes, system design, and interactive prototypes for validation before development.",
                                            color: "#e4ffe8"
                                        },
                                        {
                                            num: "03",
                                            title: "Development & Deployment",
                                            desc: "Agile sprints, rigorous testing, CI/CD pipelines, and seamless go-live execution.",
                                            color: "#e4ecff"
                                        },
                                        {
                                            num: "04",
                                            title: "Support & Optimization",
                                            desc: "Ongoing monitoring, performance tuning, security patches, and continuous improvement.",
                                            color: "#f3e4ff"
                                        }, 
                                    ].map((step, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: i * 0.12,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    "--card-bg": step.color
                                                },
                                                className: "jsx-c06f06797599be33" + " " + "cit-process-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-process-num",
                                                        children: step.num
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-c06f06797599be33",
                                                        children: step.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-c06f06797599be33",
                                                        children: step.desc
                                                    })
                                                ]
                                            })
                                        }, step.num))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-industries",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c06f06797599be33" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Industries We Serve"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Deep domain expertise across diverse sectors enables tailored technology solutions."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    delay: 0.2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-industry-tags",
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
                                            "NGO & Non-Profit",
                                            "Software",
                                            "Energy & Utilities"
                                        ].map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-c06f06797599be33" + " " + "cit-tag",
                                                children: tag
                                            }, tag))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-tech",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-c06f06797599be33",
                                    children: "Technologies We Work With"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-marquee-wrap",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-c06f06797599be33" + " " + "cit-marquee-track",
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
                                    ].map((t, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-c06f06797599be33" + " " + "cit-tech-name",
                                            children: t
                                        }, i))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-why",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-c06f06797599be33" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-c06f06797599be33" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Why Enterprises Choose Us"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-c06f06797599be33",
                                                children: "Combining deep expertise with client-first philosophy to deliver measurable results."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-c06f06797599be33" + " " + "cit-why-grid",
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "26",
                                                height: "26",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-c06f06797599be33",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                    className: "jsx-c06f06797599be33"
                                                })
                                            }),
                                            title: "Proven Expertise",
                                            desc: "A decade of mission-critical IT solutions across diverse industries."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "26",
                                                height: "26",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-c06f06797599be33",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        className: "jsx-c06f06797599be33"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "12 6 12 12 16 14",
                                                        className: "jsx-c06f06797599be33"
                                                    })
                                                ]
                                            }),
                                            title: "24/7 Availability",
                                            desc: "Round-the-clock support ensures zero disruption to your operations."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "26",
                                                height: "26",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-c06f06797599be33",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                                                        className: "jsx-c06f06797599be33"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4",
                                                        className: "jsx-c06f06797599be33"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                                                        className: "jsx-c06f06797599be33"
                                                    })
                                                ]
                                            }),
                                            title: "Tailored Solutions",
                                            desc: "Every engagement is customized — no cookie-cutter approaches."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "26",
                                                height: "26",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-c06f06797599be33",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "23 6 13.5 15.5 8.5 10.5 1 18",
                                                        className: "jsx-c06f06797599be33"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "17 6 23 6 23 12",
                                                        className: "jsx-c06f06797599be33"
                                                    })
                                                ]
                                            }),
                                            title: "Scalable Architecture",
                                            desc: "Solutions designed to grow seamlessly from startup to enterprise."
                                        }, 
                                    ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: i * 0.1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-c06f06797599be33" + " " + "cit-why-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-why-icon",
                                                        children: item.icon
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-c06f06797599be33",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-c06f06797599be33",
                                                        children: item.desc
                                                    })
                                                ]
                                            })
                                        }, item.title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-c06f06797599be33" + " " + "cit-cta",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-cta-glow"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-c06f06797599be33" + " " + "cit-container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FadeIn, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-c06f06797599be33",
                                            children: "Ready to Transform Your IT?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-c06f06797599be33",
                                            children: "Let's discuss how our solutions can accelerate your business goals."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-c06f06797599be33" + " " + "cit-cta-btns",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/request-custom-quote",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-btn cit-btn-glow",
                                                        children: "Request a Quote"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-c06f06797599be33" + " " + "cit-btn cit-btn-ghost-dark",
                                                        children: "Contact Us"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c06f06797599be33",
                children: '.cit-page.jsx-c06f06797599be33{--accent:#f7e500;--dark:#0a101b;--dark2:#141c2b;width:100%}.cit-container.jsx-c06f06797599be33{max-width:1180px;margin:0 auto;padding:0 24px}.cit-section-head.jsx-c06f06797599be33{text-align:center;margin-bottom:48px}.cit-section-head.jsx-c06f06797599be33 h2.jsx-c06f06797599be33{margin:0;font-size:clamp(28px,4vw,40px);font-weight:800;color:#111827}.cit-section-head.jsx-c06f06797599be33 p.jsx-c06f06797599be33{margin:12px auto 0;font-size:16px;color:#6b7280;max-width:540px}.cit-section-head-light.jsx-c06f06797599be33 h2.jsx-c06f06797599be33{color:#fff}.cit-section-head-light.jsx-c06f06797599be33 p.jsx-c06f06797599be33{color:rgba(255,255,255,.6)}.cit-hero.jsx-c06f06797599be33{position:relative;min-height:640px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.cit-hero-bg.jsx-c06f06797599be33{position:absolute;inset:0}.cit-hero-bg.jsx-c06f06797599be33 img.jsx-c06f06797599be33{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-filter:brightness(.4);filter:brightness(.4)}.cit-hero-overlay.jsx-c06f06797599be33{position:absolute;inset:0;background:-webkit-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:-moz-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:-o-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:linear-gradient(160deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%)}.cit-hero-particles.jsx-c06f06797599be33{position:absolute;inset:0;pointer-events:none;overflow:hidden}.cit-particle.jsx-c06f06797599be33{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:var(--accent);opacity:.12;-webkit-animation:particleFloat 8s ease-in-out infinite;-moz-animation:particleFloat 8s ease-in-out infinite;-o-animation:particleFloat 8s ease-in-out infinite;animation:particleFloat 8s ease-in-out infinite}.cit-particle-0.jsx-c06f06797599be33{width:200px;height:200px;top:-40px;right:10%;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.cit-particle-1.jsx-c06f06797599be33{width:120px;height:120px;bottom:20%;right:25%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.cit-particle-2.jsx-c06f06797599be33{width:80px;height:80px;top:30%;left:5%;-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.cit-particle-3.jsx-c06f06797599be33{width:150px;height:150px;bottom:-30px;left:20%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s;opacity:.08}.cit-particle-4.jsx-c06f06797599be33{width:60px;height:60px;top:15%;right:40%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.cit-particle-5.jsx-c06f06797599be33{width:100px;height:100px;bottom:10%;right:5%;-webkit-animation-delay:5s;-moz-animation-delay:5s;-o-animation-delay:5s;animation-delay:5s;opacity:.06}@-webkit-keyframes particleFloat{0%,100%{-webkit-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@-moz-keyframes particleFloat{0%,100%{-moz-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-moz-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@-o-keyframes particleFloat{0%,100%{-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-o-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@keyframes particleFloat{0%,100%{-webkit-transform:translateY(0)scale(1);-moz-transform:translateY(0)scale(1);-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-20px)scale(1.05);-moz-transform:translateY(-20px)scale(1.05);-o-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}.cit-hero-inner.jsx-c06f06797599be33{position:relative;z-index:2;max-width:680px;padding:140px 32px 60px}.cit-hero-badge.jsx-c06f06797599be33{display:inline-block;padding:7px 18px;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:rgba(247,229,0,.1);border:1px solid rgba(247,229,0,.35);color:var(--accent);font-size:13px;font-weight:700;letter-spacing:.03em;margin-bottom:18px}.cit-hero-inner.jsx-c06f06797599be33 h1.jsx-c06f06797599be33{margin:0;font-size:clamp(36px,5.5vw,56px);font-weight:800;color:#fff;line-height:1.1;letter-spacing:-.02em}.cit-hero-desc.jsx-c06f06797599be33{margin:20px 0 0;font-size:17px;color:rgba(255,255,255,.65);line-height:1.75}.cit-hero-actions.jsx-c06f06797599be33{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;margin-top:32px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-btn.jsx-c06f06797599be33{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:15px 30px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.cit-btn-glow.jsx-c06f06797599be33{background:var(--accent);color:var(--dark);-webkit-box-shadow:0 4px 20px rgba(247,229,0,.25);-moz-box-shadow:0 4px 20px rgba(247,229,0,.25);box-shadow:0 4px 20px rgba(247,229,0,.25)}.cit-btn-glow.jsx-c06f06797599be33:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 32px rgba(247,229,0,.4);-moz-box-shadow:0 8px 32px rgba(247,229,0,.4);box-shadow:0 8px 32px rgba(247,229,0,.4)}.cit-btn-ghost.jsx-c06f06797599be33{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.25)}.cit-btn-ghost.jsx-c06f06797599be33:hover{border-color:var(--accent);color:var(--accent);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-btn-ghost-dark.jsx-c06f06797599be33{background:transparent;color:var(--dark);border:2px solid var(--dark)}.cit-btn-ghost-dark.jsx-c06f06797599be33:hover{background:var(--dark);color:var(--accent);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-hero-stats.jsx-c06f06797599be33{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);background:rgba(10,16,27,.8);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-top:1px solid rgba(247,229,0,.12);padding:28px 32px}.cit-counter.jsx-c06f06797599be33{text-align:center}.cit-counter-num.jsx-c06f06797599be33{display:block;font-size:32px;font-weight:800;color:var(--accent)}.cit-counter-label.jsx-c06f06797599be33{font-size:11px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;margin-top:2px;display:block}.cit-pillars.jsx-c06f06797599be33{padding:90px 0;background:#f8fafc}.cit-pillars-grid.jsx-c06f06797599be33{display:grid;grid-template-columns:1.3fr 1fr;grid-template-rows:1fr 1fr;gap:20px}.cit-pillar-lg.jsx-c06f06797599be33{grid-row:1/3}.cit-pillar.jsx-c06f06797599be33{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden;text-decoration:none;color:inherit;background:#fff;border:1px solid#e5e7eb;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.04);-moz-box-shadow:0 2px 8px rgba(0,0,0,.04);box-shadow:0 2px 8px rgba(0,0,0,.04)}.cit-pillar.jsx-c06f06797599be33:hover{-webkit-transform:translateY(-6px);-moz-transform:translateY(-6px);-ms-transform:translateY(-6px);-o-transform:translateY(-6px);transform:translateY(-6px);-webkit-box-shadow:0 20px 60px rgba(0,0,0,.1);-moz-box-shadow:0 20px 60px rgba(0,0,0,.1);box-shadow:0 20px 60px rgba(0,0,0,.1);border-color:var(--accent)}.cit-pillar-img.jsx-c06f06797599be33{position:relative;height:180px;overflow:hidden}.cit-pillar-lg.jsx-c06f06797599be33 .cit-pillar-img.jsx-c06f06797599be33{height:240px}.cit-pillar-img.jsx-c06f06797599be33 img.jsx-c06f06797599be33{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-transition:-webkit-transform.5s;-moz-transition:-moz-transform.5s;-o-transition:-o-transform.5s;transition:-webkit-transform.5s;transition:-moz-transform.5s;transition:-o-transform.5s;transition:transform.5s}.cit-pillar.jsx-c06f06797599be33:hover .cit-pillar-img.jsx-c06f06797599be33 img.jsx-c06f06797599be33{-webkit-transform:scale(1.08);-moz-transform:scale(1.08);-ms-transform:scale(1.08);-o-transform:scale(1.08);transform:scale(1.08)}.cit-pillar-img-overlay.jsx-c06f06797599be33{position:absolute;inset:0;background:-webkit-linear-gradient(top,transparent 40%,rgba(10,16,27,.3)100%);background:-moz-linear-gradient(top,transparent 40%,rgba(10,16,27,.3)100%);background:-o-linear-gradient(top,transparent 40%,rgba(10,16,27,.3)100%);background:linear-gradient(to bottom,transparent 40%,rgba(10,16,27,.3)100%)}.cit-pillar-body.jsx-c06f06797599be33{padding:24px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cit-pillar-icon.jsx-c06f06797599be33{width:44px;height:44px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:var(--dark);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);margin-bottom:12px}.cit-pillar-body.jsx-c06f06797599be33 h3.jsx-c06f06797599be33{margin:0 0 8px;font-size:19px;font-weight:700;color:#111827}.cit-pillar-body.jsx-c06f06797599be33 p.jsx-c06f06797599be33{margin:0;font-size:14px;color:#6b7280;line-height:1.65}.cit-pillar-body.jsx-c06f06797599be33 ul.jsx-c06f06797599be33{list-style:none;padding:0;margin:12px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:5px}.cit-pillar-body.jsx-c06f06797599be33 ul.jsx-c06f06797599be33 li.jsx-c06f06797599be33{font-size:13px;color:#4b5563;padding-left:14px;position:relative}.cit-pillar-body.jsx-c06f06797599be33 ul.jsx-c06f06797599be33 li.jsx-c06f06797599be33::before{content:"";position:absolute;left:0;top:7px;width:6px;height:6px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:var(--accent)}.cit-pillar-arrow.jsx-c06f06797599be33{margin-top:auto;padding-top:14px;font-size:14px;font-weight:700;color:var(--dark);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px}.cit-pillar.jsx-c06f06797599be33:hover .cit-pillar-arrow.jsx-c06f06797599be33{color:#b8860b}.cit-process.jsx-c06f06797599be33{padding:90px 0;background:var(--dark)}.cit-process-cards.jsx-c06f06797599be33{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.cit-process-card.jsx-c06f06797599be33{padding:28px 22px;-webkit-border-radius:18px;-moz-border-radius:18px;border-radius:18px;background:var(--card-bg);min-height:220px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;overflow:hidden;-webkit-transition:-webkit-transform.25s;-moz-transition:-moz-transform.25s;-o-transition:-o-transform.25s;transition:-webkit-transform.25s;transition:-moz-transform.25s;transition:-o-transform.25s;transition:transform.25s}.cit-process-card.jsx-c06f06797599be33:hover{-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px)}.cit-process-num.jsx-c06f06797599be33{font-size:64px;font-weight:900;color:rgba(10,16,27,.06);position:absolute;top:10px;right:16px;line-height:1}.cit-process-card.jsx-c06f06797599be33 h3.jsx-c06f06797599be33{margin:0 0 10px;font-size:17px;font-weight:700;color:var(--dark)}.cit-process-card.jsx-c06f06797599be33 p.jsx-c06f06797599be33{margin:0;font-size:13px;color:#4b5563;line-height:1.65}.cit-industries.jsx-c06f06797599be33{padding:80px 0;background:#f8fafc}.cit-industry-tags.jsx-c06f06797599be33{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px}.cit-tag.jsx-c06f06797599be33{padding:11px 22px;-webkit-border-radius:28px;-moz-border-radius:28px;border-radius:28px;font-size:14px;font-weight:600;color:var(--dark);background:#fff;border:1px solid#e5e7eb;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s;cursor:default}.cit-tag.jsx-c06f06797599be33:hover{background:var(--accent);border-color:var(--accent);color:var(--dark);-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 20px rgba(247,229,0,.2);-moz-box-shadow:0 8px 20px rgba(247,229,0,.2);box-shadow:0 8px 20px rgba(247,229,0,.2)}.cit-tech.jsx-c06f06797599be33{padding:64px 0;background:#fff;text-align:center;overflow:hidden}.cit-tech.jsx-c06f06797599be33 h2.jsx-c06f06797599be33{margin:0 0 32px;font-size:clamp(22px,3vw,30px);font-weight:800;color:#111827}.cit-marquee-wrap.jsx-c06f06797599be33{overflow:hidden;mask-image:-webkit-linear-gradient(left,transparent,black 10%,black 90%,transparent);mask-image:-moz-linear-gradient(left,transparent,black 10%,black 90%,transparent);mask-image:-o-linear-gradient(left,transparent,black 10%,black 90%,transparent);mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);-webkit-mask-image:-webkit-linear-gradient(left,transparent,black 10%,black 90%,transparent);-webkit-mask-image:-moz-linear-gradient(left,transparent,black 10%,black 90%,transparent);-webkit-mask-image:-o-linear-gradient(left,transparent,black 10%,black 90%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}.cit-marquee-track.jsx-c06f06797599be33{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:56px;-webkit-animation:marquee 35s linear infinite;-moz-animation:marquee 35s linear infinite;-o-animation:marquee 35s linear infinite;animation:marquee 35s linear infinite;width:-webkit-max-content;width:-moz-max-content;width:max-content}.cit-tech-name.jsx-c06f06797599be33{font-size:clamp(22px,3vw,36px);font-weight:700;color:#e2e8f0;white-space:nowrap;-webkit-transition:color.2s;-moz-transition:color.2s;-o-transition:color.2s;transition:color.2s}.cit-tech-name.jsx-c06f06797599be33:hover{color:var(--dark)}@-webkit-keyframes marquee{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);transform:translateX(-50%)}}@-moz-keyframes marquee{0%{-moz-transform:translateX(0);transform:translateX(0)}100%{-moz-transform:translateX(-50%);transform:translateX(-50%)}}@-o-keyframes marquee{0%{-o-transform:translateX(0);transform:translateX(0)}100%{-o-transform:translateX(-50%);transform:translateX(-50%)}}@keyframes marquee{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}}.cit-why.jsx-c06f06797599be33{padding:90px 0;background:#f8fafc}.cit-why-grid.jsx-c06f06797599be33{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.cit-why-card.jsx-c06f06797599be33{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;border:1px solid#e5e7eb;-webkit-transition:all.25s;-moz-transition:all.25s;-o-transition:all.25s;transition:all.25s}.cit-why-card.jsx-c06f06797599be33:hover{border-color:var(--accent);-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px);-webkit-box-shadow:0 16px 40px rgba(0,0,0,.06);-moz-box-shadow:0 16px 40px rgba(0,0,0,.06);box-shadow:0 16px 40px rgba(0,0,0,.06)}.cit-why-icon.jsx-c06f06797599be33{width:48px;height:48px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:var(--dark);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);margin-bottom:16px}.cit-why-card.jsx-c06f06797599be33 h3.jsx-c06f06797599be33{margin:0 0 8px;font-size:17px;font-weight:700;color:#111827}.cit-why-card.jsx-c06f06797599be33 p.jsx-c06f06797599be33{margin:0;font-size:14px;color:#6b7280;line-height:1.65}.cit-cta.jsx-c06f06797599be33{position:relative;padding:90px 24px;background:var(--accent);text-align:center;overflow:hidden}.cit-cta-glow.jsx-c06f06797599be33{position:absolute;width:400px;height:400px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(255,255,255,.2);top:-100px;right:-80px;-webkit-filter:blur(60px);filter:blur(60px)}.cit-cta.jsx-c06f06797599be33 h2.jsx-c06f06797599be33{margin:0;font-size:clamp(26px,4vw,38px);font-weight:800;color:var(--dark);position:relative}.cit-cta.jsx-c06f06797599be33 p.jsx-c06f06797599be33{margin:12px 0 0;font-size:16px;color:rgba(10,16,27,.65);position:relative}.cit-cta-btns.jsx-c06f06797599be33{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;position:relative}@media(max-width:900px){.cit-pillars-grid.jsx-c06f06797599be33{grid-template-columns:1fr}.cit-pillar-lg.jsx-c06f06797599be33{grid-row:auto}.cit-process-cards.jsx-c06f06797599be33{grid-template-columns:repeat(2,1fr)}.cit-why-grid.jsx-c06f06797599be33{grid-template-columns:repeat(2,1fr)}.cit-hero-stats.jsx-c06f06797599be33{grid-template-columns:repeat(2,1fr);gap:16px}}@media(max-width:600px){.cit-hero-inner.jsx-c06f06797599be33{padding:110px 20px 40px}.cit-hero-inner.jsx-c06f06797599be33 h1.jsx-c06f06797599be33{font-size:30px}.cit-process-cards.jsx-c06f06797599be33{grid-template-columns:1fr}.cit-why-grid.jsx-c06f06797599be33{grid-template-columns:1fr}.cit-hero-stats.jsx-c06f06797599be33{grid-template-columns:repeat(2,1fr)}.cit-counter-num.jsx-c06f06797599be33{font-size:26px}.cit-industry-tags.jsx-c06f06797599be33{gap:8px}.cit-tag.jsx-c06f06797599be33{padding:9px 16px;font-size:12px}}'
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