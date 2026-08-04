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
                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-5da0cbcb4a0f1da7",
                                children: "Core IT Solutions - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Core IT Solutions - MIS Solution",
                                className: "jsx-5da0cbcb4a0f1da7"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Comprehensive IT solutions — digital services, enterprise infrastructure, and maintenance support.",
                                className: "jsx-5da0cbcb4a0f1da7"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        className: "jsx-5da0cbcb4a0f1da7"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-particles",
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + `cit-particle cit-particle-${i}`
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-inner",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-badge",
                                            children: "End-to-End IT Services"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.2,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "jsx-5da0cbcb4a0f1da7",
                                            children: [
                                                "Drive Growth with Our",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                    className: "jsx-5da0cbcb4a0f1da7"
                                                }),
                                                "Core IT Capabilities"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.35,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-desc",
                                            children: "From concept to deployment and beyond — we deliver complete technology solutions that transform businesses, accelerate growth, and build lasting digital infrastructure."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.5,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-actions",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/request-custom-quote",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-btn cit-btn-glow",
                                                        children: "Schedule a Consultation"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-btn cit-btn-ghost",
                                                        children: "Talk to Our Experts"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-hero-stats",
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-pillars",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-pillars-title",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-5da0cbcb4a0f1da7",
                                            children: "Our Service Pillars"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-5da0cbcb4a0f1da7",
                                            children: "Three specialized divisions — each a full-spectrum capability center."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/digital-services",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-bg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                        alt: "",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-overlay cit-panel-overlay-1"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-num",
                                                        children: "01"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10",
                                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                            x1: "2",
                                                                            y1: "12",
                                                                            x2: "22",
                                                                            y2: "12",
                                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
                                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Digital Services"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Website design & development, domain & hosting, digital marketing, SEO, and custom mobile app development to build your complete digital presence."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tags",
                                                                children: (digitalServices.length > 0 ? digitalServices.slice(0, 5) : [
                                                                    {
                                                                        id: 1,
                                                                        name: "Web Development"
                                                                    },
                                                                    {
                                                                        id: 2,
                                                                        name: "Hosting & Domain"
                                                                    },
                                                                    {
                                                                        id: 3,
                                                                        name: "Digital Marketing"
                                                                    },
                                                                    {
                                                                        id: 4,
                                                                        name: "Mobile Apps"
                                                                    },
                                                                    {
                                                                        id: 5,
                                                                        name: "E-commerce"
                                                                    }
                                                                ]).map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: s.name
                                                                    }, s.id))
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-arrow",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-5da0cbcb4a0f1da7",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-5da0cbcb4a0f1da7"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/enterprise-solutions",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-bg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                        alt: "",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-overlay cit-panel-overlay-2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-num",
                                                        children: "02"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-icon",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "2",
                                                                            y: "7",
                                                                            width: "20",
                                                                            height: "14",
                                                                            rx: "2",
                                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Business & Corporate Solutions"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Enterprise-grade data centers, structured cabling, CCTV surveillance, networking infrastructure, and large-scale B2B project deployments."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tags",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "Data Centers"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "Structured Cabling"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "CCTV & Security"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "Networking"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-arrow",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-5da0cbcb4a0f1da7",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-5da0cbcb4a0f1da7"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/maintenance-support",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-bg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                        alt: "",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-overlay cit-panel-overlay-3"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-inner",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-num",
                                                        children: "03"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-icon",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "28",
                                                                    height: "28",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Maintenance & Support"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-5da0cbcb4a0f1da7",
                                                                children: "Annual IT maintenance contracts, rapid on-call repairs & troubleshooting, and project-based hardware installation and delivery services."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tags",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "AMC Contracts"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "On-call Repairs"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "Installation"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-tag",
                                                                        children: "Troubleshooting"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-panel-arrow",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-5da0cbcb4a0f1da7",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-5da0cbcb4a0f1da7"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-process",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Our Methodology"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "A proven framework that guarantees timely delivery of high-quality solutions."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-process-cards",
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
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-process-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-process-num",
                                                        children: step.num
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-5da0cbcb4a0f1da7",
                                                        children: step.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-5da0cbcb4a0f1da7",
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
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-industries",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Industries We Serve"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Deep domain expertise across diverse sectors enables tailored technology solutions."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    delay: 0.2,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-industry-grid",
                                        children: [
                                            {
                                                name: "Finance & Banking",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#22d3ee"
                                            },
                                            {
                                                name: "E-commerce",
                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                            cx: "9",
                                                            cy: "21",
                                                            r: "1",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                            cx: "20",
                                                            cy: "21",
                                                            r: "1",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        })
                                                    ]
                                                }),
                                                color: "#a78bfa"
                                            },
                                            {
                                                name: "Telecom",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#34d399"
                                            },
                                            {
                                                name: "Real Estate",
                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                            points: "9 22 9 12 15 12 15 22",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        })
                                                    ]
                                                }),
                                                color: "#fb923c"
                                            },
                                            {
                                                name: "Healthcare",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M22 12h-4l-3 9L9 3l-3 9H2",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#f472b6"
                                            },
                                            {
                                                name: "Education",
                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        })
                                                    ]
                                                }),
                                                color: "#60a5fa"
                                            },
                                            {
                                                name: "Logistics",
                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                            x: "1",
                                                            y: "3",
                                                            width: "15",
                                                            height: "13",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                            points: "16 8 20 8 23 11 23 16 16 16 16 8",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                            cx: "5.5",
                                                            cy: "18.5",
                                                            r: "2.5",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                            cx: "18.5",
                                                            cy: "18.5",
                                                            r: "2.5",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        })
                                                    ]
                                                }),
                                                color: "#f7e500"
                                            },
                                            {
                                                name: "Manufacturing",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#94a3b8"
                                            },
                                            {
                                                name: "Retail",
                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                            x1: "3",
                                                            y1: "6",
                                                            x2: "21",
                                                            y2: "6",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M16 10a4 4 0 01-8 0",
                                                            className: "jsx-5da0cbcb4a0f1da7"
                                                        })
                                                    ]
                                                }),
                                                color: "#4ade80"
                                            },
                                            {
                                                name: "Government",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#818cf8"
                                            },
                                            {
                                                name: "Startups",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polygon", {
                                                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#fbbf24"
                                            },
                                            {
                                                name: "NGO & Non-Profit",
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                }),
                                                color: "#fb7185"
                                            }, 
                                        ].map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    "--ind-color": item.color
                                                },
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-industry-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-industry-icon",
                                                        children: item.icon
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-industry-name",
                                                        children: item.name
                                                    })
                                                ]
                                            }, item.name))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-tech",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Technologies We Work With"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Modern tools and platforms to deliver scalable, future-proof solutions."
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-marquee-wrap",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-marquee-track",
                                    children: [
                                        {
                                            name: "React",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        },
                                        {
                                            name: "Next.js",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                        },
                                        {
                                            name: "Node.js",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        },
                                        {
                                            name: "Python",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        },
                                        {
                                            name: "PHP",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                        },
                                        {
                                            name: "Laravel",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                        },
                                        {
                                            name: "MySQL",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        },
                                        {
                                            name: "MongoDB",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        },
                                        {
                                            name: "AWS",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                                        },
                                        {
                                            name: "Azure",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                                        },
                                        {
                                            name: "Docker",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                        },
                                        {
                                            name: "WordPress",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                                        },
                                        {
                                            name: "Flutter",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                        },
                                        {
                                            name: "Java",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                        },
                                        {
                                            name: "TypeScript",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                        },
                                        {
                                            name: "JavaScript",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        },
                                        {
                                            name: "Linux",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                        },
                                        {
                                            name: "Git",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        },
                                        {
                                            name: "Firebase",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                        },
                                        {
                                            name: "Nginx",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                                        },
                                        {
                                            name: "Redis",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                                        },
                                        {
                                            name: "Figma",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                        },
                                        {
                                            name: "Tailwind",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                        },
                                        {
                                            name: "Bootstrap",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                        },
                                        {
                                            name: "React",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        },
                                        {
                                            name: "Next.js",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                        },
                                        {
                                            name: "Node.js",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                        },
                                        {
                                            name: "Python",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        },
                                        {
                                            name: "PHP",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                        },
                                        {
                                            name: "Laravel",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                        },
                                        {
                                            name: "MySQL",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                        },
                                        {
                                            name: "MongoDB",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                        },
                                        {
                                            name: "AWS",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                                        },
                                        {
                                            name: "Azure",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                                        },
                                        {
                                            name: "Docker",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                                        },
                                        {
                                            name: "WordPress",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                                        },
                                        {
                                            name: "Flutter",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                                        },
                                        {
                                            name: "Java",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                        },
                                        {
                                            name: "TypeScript",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                        },
                                        {
                                            name: "JavaScript",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                        },
                                        {
                                            name: "Linux",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                        },
                                        {
                                            name: "Git",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                        },
                                        {
                                            name: "Firebase",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                        },
                                        {
                                            name: "Nginx",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
                                        },
                                        {
                                            name: "Redis",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                                        },
                                        {
                                            name: "Figma",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                                        },
                                        {
                                            name: "Tailwind",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                                        },
                                        {
                                            name: "Bootstrap",
                                            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                        }, 
                                    ].map((tech, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-tech-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: tech.logo,
                                                    alt: tech.name,
                                                    width: "32",
                                                    height: "32",
                                                    className: "jsx-5da0cbcb4a0f1da7"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-5da0cbcb4a0f1da7",
                                                    children: tech.name
                                                })
                                            ]
                                        }, i))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-why",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Why Enterprises Choose Us"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: "Combining deep expertise with client-first philosophy to deliver measurable results."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-why-grid",
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "26",
                                                height: "26",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                    className: "jsx-5da0cbcb4a0f1da7"
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
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "12 6 12 12 16 14",
                                                        className: "jsx-5da0cbcb4a0f1da7"
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
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                                                        className: "jsx-5da0cbcb4a0f1da7"
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
                                                className: "jsx-5da0cbcb4a0f1da7",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "23 6 13.5 15.5 8.5 10.5 1 18",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "17 6 23 6 23 12",
                                                        className: "jsx-5da0cbcb4a0f1da7"
                                                    })
                                                ]
                                            }),
                                            title: "Scalable Architecture",
                                            desc: "Solutions designed to grow seamlessly from startup to enterprise."
                                        }, 
                                    ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: i * 0.1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-why-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-why-icon",
                                                        children: item.icon
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-5da0cbcb4a0f1da7",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-5da0cbcb4a0f1da7",
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
                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-cta",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-cta-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        className: "jsx-5da0cbcb4a0f1da7"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-cta-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2
                                },
                                className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FadeIn, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-5da0cbcb4a0f1da7",
                                            children: "Ready to Transform Your IT Infrastructure?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-5da0cbcb4a0f1da7",
                                            children: "Partner with us to build technology solutions that drive real business outcomes."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-cta-btns",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/request-custom-quote",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-btn cit-btn-glow",
                                                        children: "Request a Quote"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-5da0cbcb4a0f1da7" + " " + "cit-btn cit-btn-ghost",
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
                id: "5da0cbcb4a0f1da7",
                children: '.cit-page.jsx-5da0cbcb4a0f1da7{--accent:#f7e500;--dark:#0a101b;--dark2:#141c2b;width:100%}.cit-container.jsx-5da0cbcb4a0f1da7{max-width:1180px;margin:0 auto;padding:0 24px}.cit-section-head.jsx-5da0cbcb4a0f1da7{text-align:center;margin-bottom:48px}.cit-section-head.jsx-5da0cbcb4a0f1da7 h2.jsx-5da0cbcb4a0f1da7{margin:0;font-size:clamp(28px,4vw,40px);font-weight:800;color:#111827}.cit-section-head.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:12px auto 0;font-size:16px;color:#6b7280;max-width:540px}.cit-section-head-light.jsx-5da0cbcb4a0f1da7 h2.jsx-5da0cbcb4a0f1da7{color:#fff}.cit-section-head-light.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{color:rgba(255,255,255,.6)}.cit-hero.jsx-5da0cbcb4a0f1da7{position:relative;min-height:640px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.cit-hero-bg.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0}.cit-hero-bg.jsx-5da0cbcb4a0f1da7 img.jsx-5da0cbcb4a0f1da7{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-filter:brightness(.4);filter:brightness(.4)}.cit-hero-overlay.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0;background:-webkit-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:-moz-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:-o-linear-gradient(290deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%);background:linear-gradient(160deg,rgba(10,16,27,.93)0%,rgba(10,16,27,.6)60%,rgba(247,229,0,.05)100%)}.cit-hero-particles.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0;pointer-events:none;overflow:hidden}.cit-particle.jsx-5da0cbcb4a0f1da7{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:var(--accent);opacity:.12;-webkit-animation:particleFloat 8s ease-in-out infinite;-moz-animation:particleFloat 8s ease-in-out infinite;-o-animation:particleFloat 8s ease-in-out infinite;animation:particleFloat 8s ease-in-out infinite}.cit-particle-0.jsx-5da0cbcb4a0f1da7{width:200px;height:200px;top:-40px;right:10%;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.cit-particle-1.jsx-5da0cbcb4a0f1da7{width:120px;height:120px;bottom:20%;right:25%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.cit-particle-2.jsx-5da0cbcb4a0f1da7{width:80px;height:80px;top:30%;left:5%;-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.cit-particle-3.jsx-5da0cbcb4a0f1da7{width:150px;height:150px;bottom:-30px;left:20%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s;opacity:.08}.cit-particle-4.jsx-5da0cbcb4a0f1da7{width:60px;height:60px;top:15%;right:40%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}.cit-particle-5.jsx-5da0cbcb4a0f1da7{width:100px;height:100px;bottom:10%;right:5%;-webkit-animation-delay:5s;-moz-animation-delay:5s;-o-animation-delay:5s;animation-delay:5s;opacity:.06}@-webkit-keyframes particleFloat{0%,100%{-webkit-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@-moz-keyframes particleFloat{0%,100%{-moz-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-moz-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@-o-keyframes particleFloat{0%,100%{-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-o-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}@keyframes particleFloat{0%,100%{-webkit-transform:translateY(0)scale(1);-moz-transform:translateY(0)scale(1);-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-20px)scale(1.05);-moz-transform:translateY(-20px)scale(1.05);-o-transform:translateY(-20px)scale(1.05);transform:translateY(-20px)scale(1.05)}}.cit-hero-inner.jsx-5da0cbcb4a0f1da7{position:relative;z-index:2;max-width:680px;padding:140px 32px 60px}.cit-hero-badge.jsx-5da0cbcb4a0f1da7{display:inline-block;padding:7px 18px;-webkit-border-radius:24px;-moz-border-radius:24px;border-radius:24px;background:rgba(247,229,0,.1);border:1px solid rgba(247,229,0,.35);color:var(--accent);font-size:13px;font-weight:700;letter-spacing:.03em;margin-bottom:18px}.cit-hero-inner.jsx-5da0cbcb4a0f1da7 h1.jsx-5da0cbcb4a0f1da7{margin:0;font-size:clamp(36px,5.5vw,56px);font-weight:800;color:#fff;line-height:1.1;letter-spacing:-.02em}.cit-hero-desc.jsx-5da0cbcb4a0f1da7{margin:20px 0 0;font-size:17px;color:rgba(255,255,255,.65);line-height:1.75}.cit-hero-actions.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;margin-top:32px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cit-btn.jsx-5da0cbcb4a0f1da7{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:15px 30px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.cit-btn-glow.jsx-5da0cbcb4a0f1da7{background:var(--accent);color:var(--dark);-webkit-box-shadow:0 4px 20px rgba(247,229,0,.25);-moz-box-shadow:0 4px 20px rgba(247,229,0,.25);box-shadow:0 4px 20px rgba(247,229,0,.25)}.cit-btn-glow.jsx-5da0cbcb4a0f1da7:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 32px rgba(247,229,0,.4);-moz-box-shadow:0 8px 32px rgba(247,229,0,.4);box-shadow:0 8px 32px rgba(247,229,0,.4)}.cit-btn-ghost.jsx-5da0cbcb4a0f1da7{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.25)}.cit-btn-ghost.jsx-5da0cbcb4a0f1da7:hover{border-color:var(--accent);color:var(--accent);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-btn-ghost-dark.jsx-5da0cbcb4a0f1da7{background:transparent;color:var(--dark);border:2px solid var(--dark)}.cit-btn-ghost-dark.jsx-5da0cbcb4a0f1da7:hover{background:var(--dark);color:var(--accent);-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}.cit-hero-stats.jsx-5da0cbcb4a0f1da7{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);background:rgba(10,16,27,.8);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-top:1px solid rgba(247,229,0,.12);padding:28px 32px}.cit-counter.jsx-5da0cbcb4a0f1da7{text-align:center}.cit-counter-num.jsx-5da0cbcb4a0f1da7{display:block;font-size:32px;font-weight:800;color:var(--accent)}.cit-counter-label.jsx-5da0cbcb4a0f1da7{font-size:11px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.08em;margin-top:2px;display:block}.cit-pillars.jsx-5da0cbcb4a0f1da7{padding:80px 0 0;background:url("/our-service-pillar-bg.jpg")center/cover no-repeat fixed;position:relative}.cit-pillars.jsx-5da0cbcb4a0f1da7::before{content:"";position:absolute;inset:0;background:rgba(255,255,255,.92)}.cit-pillars.jsx-5da0cbcb4a0f1da7>*.jsx-5da0cbcb4a0f1da7{position:relative;z-index:1}.cit-pillars-title.jsx-5da0cbcb4a0f1da7{text-align:center;padding:0 24px 48px}.cit-pillars-title.jsx-5da0cbcb4a0f1da7 h2.jsx-5da0cbcb4a0f1da7{margin:0;font-size:clamp(28px,4vw,40px);font-weight:800;color:#111827}.cit-pillars-title.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:12px 0 0;font-size:16px;color:#6b7280}.cit-panel.jsx-5da0cbcb4a0f1da7{display:block;position:relative;width:100%;min-height:320px;overflow:hidden;text-decoration:none;color:#fff;-webkit-transition:all.4s;-moz-transition:all.4s;-o-transition:all.4s;transition:all.4s}.cit-panel.jsx-5da0cbcb4a0f1da7:hover{-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none}.cit-panel-bg.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0}.cit-panel-bg.jsx-5da0cbcb4a0f1da7 img.jsx-5da0cbcb4a0f1da7{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-transition:-webkit-transform.6s ease,-webkit-filter.4s;-moz-transition:-moz-transform.6s ease,filter.4s;-o-transition:-o-transform.6s ease,filter.4s;transition:-webkit-transform.6s ease,-webkit-filter.4s;transition:-moz-transform.6s ease,filter.4s;transition:-o-transform.6s ease,filter.4s;transition:transform.6s ease,filter.4s}.cit-panel.jsx-5da0cbcb4a0f1da7:hover .cit-panel-bg.jsx-5da0cbcb4a0f1da7 img.jsx-5da0cbcb4a0f1da7{-webkit-transform:scale(1.04);-moz-transform:scale(1.04);-ms-transform:scale(1.04);-o-transform:scale(1.04);transform:scale(1.04);-webkit-filter:brightness(.6);filter:brightness(.6)}.cit-panel-overlay.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0}.cit-panel-overlay-1.jsx-5da0cbcb4a0f1da7{background:-webkit-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.4)60%,rgba(247,229,0,.05)100%);background:-moz-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.4)60%,rgba(247,229,0,.05)100%);background:-o-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.4)60%,rgba(247,229,0,.05)100%);background:linear-gradient(135deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.4)60%,rgba(247,229,0,.05)100%)}.cit-panel-overlay-2.jsx-5da0cbcb4a0f1da7{background:-webkit-linear-gradient(315deg,rgba(10,16,27,.85)0%,rgba(20,28,43,.5)60%,rgba(0,100,200,.05)100%);background:-moz-linear-gradient(315deg,rgba(10,16,27,.85)0%,rgba(20,28,43,.5)60%,rgba(0,100,200,.05)100%);background:-o-linear-gradient(315deg,rgba(10,16,27,.85)0%,rgba(20,28,43,.5)60%,rgba(0,100,200,.05)100%);background:linear-gradient(135deg,rgba(10,16,27,.85)0%,rgba(20,28,43,.5)60%,rgba(0,100,200,.05)100%)}.cit-panel-overlay-3.jsx-5da0cbcb4a0f1da7{background:-webkit-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.45)60%,rgba(0,200,100,.05)100%);background:-moz-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.45)60%,rgba(0,200,100,.05)100%);background:-o-linear-gradient(315deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.45)60%,rgba(0,200,100,.05)100%);background:linear-gradient(135deg,rgba(10,16,27,.88)0%,rgba(10,16,27,.45)60%,rgba(0,200,100,.05)100%)}.cit-panel-inner.jsx-5da0cbcb4a0f1da7{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:32px;max-width:1200px;margin:0 auto;padding:56px 40px;min-height:320px}.cit-panel-num.jsx-5da0cbcb4a0f1da7{font-size:100px;font-weight:900;color:rgba(247,229,0,.08);line-height:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-family:"JetBrains Mono",monospace;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s}.cit-panel.jsx-5da0cbcb4a0f1da7:hover .cit-panel-num.jsx-5da0cbcb4a0f1da7{color:rgba(247,229,0,.15)}.cit-panel-text.jsx-5da0cbcb4a0f1da7{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.cit-panel-icon.jsx-5da0cbcb4a0f1da7{width:52px;height:52px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:rgba(247,229,0,.12);border:1px solid rgba(247,229,0,.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);margin-bottom:14px}.cit-panel-text.jsx-5da0cbcb4a0f1da7 h3.jsx-5da0cbcb4a0f1da7{margin:0 0 10px;font-size:clamp(22px,3vw,30px);font-weight:700}.cit-panel-text.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:0 0 16px;font-size:15px;color:rgba(255,255,255,.7);line-height:1.7;max-width:600px}.cit-panel-tags.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px}.cit-panel-tag.jsx-5da0cbcb4a0f1da7{padding:6px 14px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);font-size:12px;font-weight:600;color:rgba(255,255,255,.85);-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.cit-panel.jsx-5da0cbcb4a0f1da7:hover .cit-panel-tag.jsx-5da0cbcb4a0f1da7{background:rgba(247,229,0,.12);border-color:rgba(247,229,0,.3);color:var(--accent)}.cit-panel-arrow.jsx-5da0cbcb4a0f1da7{width:56px;height:56px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(247,229,0,.1);border:2px solid rgba(247,229,0,.3);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s}.cit-panel.jsx-5da0cbcb4a0f1da7:hover .cit-panel-arrow.jsx-5da0cbcb4a0f1da7{background:var(--accent);color:var(--dark);-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);-o-transform:translateX(6px);transform:translateX(6px);-webkit-box-shadow:0 0 24px rgba(247,229,0,.4);-moz-box-shadow:0 0 24px rgba(247,229,0,.4);box-shadow:0 0 24px rgba(247,229,0,.4)}.cit-process.jsx-5da0cbcb4a0f1da7{padding:90px 0;background:transparent}.cit-process-cards.jsx-5da0cbcb4a0f1da7{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.cit-process-card.jsx-5da0cbcb4a0f1da7{padding:28px 22px;-webkit-border-radius:18px;-moz-border-radius:18px;border-radius:18px;background:var(--card-bg);min-height:220px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;overflow:hidden;-webkit-transition:-webkit-transform.25s;-moz-transition:-moz-transform.25s;-o-transition:-o-transform.25s;transition:-webkit-transform.25s;transition:-moz-transform.25s;transition:-o-transform.25s;transition:transform.25s}.cit-process-card.jsx-5da0cbcb4a0f1da7:hover{-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px)}.cit-process-num.jsx-5da0cbcb4a0f1da7{font-size:64px;font-weight:900;color:rgba(10,16,27,.06);position:absolute;top:10px;right:16px;line-height:1}.cit-process-card.jsx-5da0cbcb4a0f1da7 h3.jsx-5da0cbcb4a0f1da7{margin:0 0 10px;font-size:17px;font-weight:700;color:var(--dark)}.cit-process-card.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:0;font-size:13px;color:#4b5563;line-height:1.65}.cit-industries.jsx-5da0cbcb4a0f1da7{padding:80px 0;background:transparent}.cit-industry-grid.jsx-5da0cbcb4a0f1da7{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:16px}.cit-industry-card.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:24px 14px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;border:1px solid#e5e7eb;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;cursor:default;text-align:center;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.03);-moz-box-shadow:0 2px 8px rgba(0,0,0,.03);box-shadow:0 2px 8px rgba(0,0,0,.03)}.cit-industry-card.jsx-5da0cbcb4a0f1da7:hover{border-color:var(--ind-color);-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px);-webkit-box-shadow:0 12px 32px rgba(0,0,0,.08);-moz-box-shadow:0 12px 32px rgba(0,0,0,.08);box-shadow:0 12px 32px rgba(0,0,0,.08)}.cit-industry-icon.jsx-5da0cbcb4a0f1da7{width:48px;height:48px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:color-mix(in srgb,var(--ind-color)12%,white);border:1px solid color-mix(in srgb,var(--ind-color)25%,transparent);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--ind-color);-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s}.cit-industry-card.jsx-5da0cbcb4a0f1da7:hover .cit-industry-icon.jsx-5da0cbcb4a0f1da7{background:var(--ind-color);color:#fff;border-color:var(--ind-color)}.cit-industry-name.jsx-5da0cbcb4a0f1da7{font-size:13px;font-weight:600;color:#374151;line-height:1.3}.cit-tech.jsx-5da0cbcb4a0f1da7{padding:64px 0;background:transparent;overflow:hidden}.cit-tech.jsx-5da0cbcb4a0f1da7 .cit-section-head.jsx-5da0cbcb4a0f1da7{margin-bottom:32px}.cit-marquee-wrap.jsx-5da0cbcb4a0f1da7{overflow:hidden;mask-image:-webkit-linear-gradient(left,transparent,black 5%,black 95%,transparent);mask-image:-moz-linear-gradient(left,transparent,black 5%,black 95%,transparent);mask-image:-o-linear-gradient(left,transparent,black 5%,black 95%,transparent);mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent);-webkit-mask-image:-webkit-linear-gradient(left,transparent,black 5%,black 95%,transparent);-webkit-mask-image:-moz-linear-gradient(left,transparent,black 5%,black 95%,transparent);-webkit-mask-image:-o-linear-gradient(left,transparent,black 5%,black 95%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 5%,black 95%,transparent)}.cit-marquee-track.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:40px;-webkit-animation:marquee 50s linear infinite;-moz-animation:marquee 50s linear infinite;-o-animation:marquee 50s linear infinite;animation:marquee 50s linear infinite;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cit-tech-item.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;opacity:.75;-webkit-transition:opacity.2s,-webkit-transform.2s;-moz-transition:opacity.2s,-moz-transform.2s;-o-transition:opacity.2s,-o-transform.2s;transition:opacity.2s,-webkit-transform.2s;transition:opacity.2s,-moz-transform.2s;transition:opacity.2s,-o-transform.2s;transition:opacity.2s,transform.2s}.cit-tech-item.jsx-5da0cbcb4a0f1da7:hover{opacity:1;-webkit-transform:scale(1.08);-moz-transform:scale(1.08);-ms-transform:scale(1.08);-o-transform:scale(1.08);transform:scale(1.08)}.cit-tech-item.jsx-5da0cbcb4a0f1da7 img.jsx-5da0cbcb4a0f1da7{width:32px;height:32px;-o-object-fit:contain;object-fit:contain}.cit-tech-item.jsx-5da0cbcb4a0f1da7 span.jsx-5da0cbcb4a0f1da7{font-size:15px;font-weight:600;color:#374151;white-space:nowrap}@-webkit-keyframes marquee{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);transform:translateX(-50%)}}@-moz-keyframes marquee{0%{-moz-transform:translateX(0);transform:translateX(0)}100%{-moz-transform:translateX(-50%);transform:translateX(-50%)}}@-o-keyframes marquee{0%{-o-transform:translateX(0);transform:translateX(0)}100%{-o-transform:translateX(-50%);transform:translateX(-50%)}}@keyframes marquee{0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}}.cit-why.jsx-5da0cbcb4a0f1da7{padding:90px 0;background:#f8fafc}.cit-why-grid.jsx-5da0cbcb4a0f1da7{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.cit-why-card.jsx-5da0cbcb4a0f1da7{padding:28px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;border:1px solid#e5e7eb;-webkit-transition:all.25s;-moz-transition:all.25s;-o-transition:all.25s;transition:all.25s}.cit-why-card.jsx-5da0cbcb4a0f1da7:hover{border-color:var(--accent);-webkit-transform:translateY(-4px);-moz-transform:translateY(-4px);-ms-transform:translateY(-4px);-o-transform:translateY(-4px);transform:translateY(-4px);-webkit-box-shadow:0 16px 40px rgba(0,0,0,.06);-moz-box-shadow:0 16px 40px rgba(0,0,0,.06);box-shadow:0 16px 40px rgba(0,0,0,.06)}.cit-why-icon.jsx-5da0cbcb4a0f1da7{width:48px;height:48px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:var(--dark);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);margin-bottom:16px}.cit-why-card.jsx-5da0cbcb4a0f1da7 h3.jsx-5da0cbcb4a0f1da7{margin:0 0 8px;font-size:17px;font-weight:700;color:#111827}.cit-why-card.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:0;font-size:14px;color:#6b7280;line-height:1.65}.cit-cta.jsx-5da0cbcb4a0f1da7{position:relative;padding:100px 24px;text-align:center;overflow:hidden}.cit-cta-bg.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0}.cit-cta-bg.jsx-5da0cbcb4a0f1da7 img.jsx-5da0cbcb4a0f1da7{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cit-cta-overlay.jsx-5da0cbcb4a0f1da7{position:absolute;inset:0;background:-webkit-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.85)100%);background:-moz-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.85)100%);background:-o-linear-gradient(315deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.85)100%);background:linear-gradient(135deg,rgba(10,16,27,.92)0%,rgba(10,16,27,.85)100%)}.cit-cta.jsx-5da0cbcb4a0f1da7 h2.jsx-5da0cbcb4a0f1da7{margin:0;font-size:clamp(26px,4vw,38px);font-weight:800;color:#fff}.cit-cta.jsx-5da0cbcb4a0f1da7 p.jsx-5da0cbcb4a0f1da7{margin:14px 0 0;font-size:17px;color:rgba(255,255,255,.6);max-width:500px;margin-left:auto;margin-right:auto}.cit-cta-btns.jsx-5da0cbcb4a0f1da7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:32px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media(max-width:900px){.cit-panel-inner.jsx-5da0cbcb4a0f1da7{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:20px;padding:40px 24px;min-height:280px}.cit-panel-num.jsx-5da0cbcb4a0f1da7{font-size:64px;position:absolute;top:16px;right:24px}.cit-panel-arrow.jsx-5da0cbcb4a0f1da7{display:none}.cit-process-cards.jsx-5da0cbcb4a0f1da7{grid-template-columns:repeat(2,1fr)}.cit-why-grid.jsx-5da0cbcb4a0f1da7{grid-template-columns:repeat(2,1fr)}.cit-hero-stats.jsx-5da0cbcb4a0f1da7{grid-template-columns:repeat(2,1fr);gap:16px}}@media(max-width:600px){.cit-hero-inner.jsx-5da0cbcb4a0f1da7{padding:110px 20px 40px}.cit-hero-inner.jsx-5da0cbcb4a0f1da7 h1.jsx-5da0cbcb4a0f1da7{font-size:30px}.cit-panel-inner.jsx-5da0cbcb4a0f1da7{padding:32px 20px;min-height:240px}.cit-panel-num.jsx-5da0cbcb4a0f1da7{font-size:48px}.cit-panel-text.jsx-5da0cbcb4a0f1da7 h3.jsx-5da0cbcb4a0f1da7{font-size:20px}.cit-process-cards.jsx-5da0cbcb4a0f1da7{grid-template-columns:1fr}.cit-why-grid.jsx-5da0cbcb4a0f1da7{grid-template-columns:1fr}.cit-hero-stats.jsx-5da0cbcb4a0f1da7{grid-template-columns:repeat(2,1fr)}.cit-counter-num.jsx-5da0cbcb4a0f1da7{font-size:26px}.cit-industry-tags.jsx-5da0cbcb4a0f1da7{gap:8px}.cit-tag.jsx-5da0cbcb4a0f1da7{padding:9px 16px;font-size:12px}}'
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