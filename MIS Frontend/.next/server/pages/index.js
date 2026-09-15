"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,7174];
exports.modules = {

/***/ 8966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/*
 * CoreSolutions — modern "What We Offer" section over a dark textured
 * background image. Three division cards, monochrome (B&W) icons, and one
 * capability-per-row list with its own relevant icon. Scroll-reveal +
 * hover micro-interactions, pure CSS. Responsive; respects reduced-motion.
 */ // --- monochrome (currentColor) icons ---------------------------------------
const Icon = {
    browser: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "2.5",
                    y: "4",
                    width: "19",
                    height: "15",
                    rx: "2.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M2.5 8h19"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "5",
                    cy: "6",
                    r: ".6",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "7",
                    cy: "6",
                    r: ".6",
                    fill: "currentColor"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8 12.5h8M8 15.5h5"
                })
            ]
        }),
    crown: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 19h16"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M5 19V9l3 2 4-5 4 5 3-2v10"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "4",
                    r: "1.4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "4.6",
                    cy: "8.4",
                    r: "1.1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "19.4",
                    cy: "8.4",
                    r: "1.1"
                })
            ]
        }),
    wrench: (p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.7",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-.4-.4-2.1z"
            })
        }),
    // digital chips
    code: (p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 7l-5 5 5 5M16 7l5 5-5 5"
            })
        }),
    cube: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 2.5 20 7v10l-8 4.5L4 17V7z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 7l8 4.5L20 7M12 11.5V21"
                })
            ]
        }),
    mobile: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "7",
                    y: "2.5",
                    width: "10",
                    height: "19",
                    rx: "2.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M11 18.5h2"
                })
            ]
        }),
    ai: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "6",
                    y: "7",
                    width: "12",
                    height: "11",
                    rx: "2.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 7V4M9 2.5h6M9.5 12v0M14.5 12v0M2.5 11h1.5M20 11h1.5"
                })
            ]
        }),
    shield: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 2.5 20 6v6c0 5-3.4 8-8 9.5C7.4 20 4 17 4 12V6z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "m9 12 2 2 4-4"
                })
            ]
        }),
    cart: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "9.5",
                    cy: "20",
                    r: "1.3"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "17.5",
                    cy: "20",
                    r: "1.3"
                })
            ]
        }),
    // corporate chips
    monitor: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "12",
                    rx: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8 20h8M12 16v4"
                })
            ]
        }),
    camera: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "2.5",
                    y: "7",
                    width: "19",
                    height: "12",
                    rx: "2.5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "13",
                    r: "3.2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8 7l1.5-2.5h5L16 7"
                })
            ]
        }),
    printer: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M7 8V3h10v5"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "4",
                    y: "8",
                    width: "16",
                    height: "8",
                    rx: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "7",
                    y: "14",
                    width: "10",
                    height: "6",
                    rx: "1"
                })
            ]
        }),
    network: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "4.5",
                    r: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "5",
                    cy: "19.5",
                    r: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "19",
                    cy: "19.5",
                    r: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 6.5v5M12 11.5 5.8 17.8M12 11.5l6.2 6.3"
                })
            ]
        }),
    server: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "7",
                    rx: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "3",
                    y: "13",
                    width: "18",
                    height: "7",
                    rx: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M7 7.5v0M7 16.5v0"
                })
            ]
        }),
    power: (p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13 2 4 14h7l-1 8 9-12h-7z"
            })
        }),
    // maintenance chips
    doc: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5H6A.5.5 0 0 1 5.5 21V3A.5.5 0 0 1 6 2.5z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M14 2.5V7h4M8 12h8M8 16h5"
                })
            ]
        }),
    phone: (p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"
            })
        }),
    install: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M12 3v11M8 10l4 4 4-4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 18h16v2.5H4z"
                })
            ]
        }),
    bug: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                    x: "8",
                    y: "7",
                    width: "8",
                    height: "11",
                    rx: "4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M9 3l1.5 2.5M15 3l-1.5 2.5M8 10H4M20 10h-4M8 14H3.5M20.5 14H16M8.5 18l-2 2.5M15.5 18l2 2.5"
                })
            ]
        }),
    remote: (p)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            ...p,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M8 8a5.6 5.6 0 0 0 0 8M16 8a5.6 5.6 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"
                })
            ]
        })
};
const DIVISIONS = [
    {
        key: "digital",
        title: "Digital Services",
        tagline: "Your complete digital presence",
        href: "/digital-services",
        HeadIcon: Icon.browser,
        chips: [
            {
                label: "Web Development",
                I: Icon.code
            },
            {
                label: "Custom Software",
                I: Icon.cube
            },
            {
                label: "Mobile Apps",
                I: Icon.mobile
            },
            {
                label: "AI Solutions",
                I: Icon.ai
            },
            {
                label: "Cyber Security",
                I: Icon.shield
            },
            {
                label: "E-Commerce",
                I: Icon.cart
            }, 
        ]
    },
    {
        key: "corporate",
        title: "Business & Corporate Solutions",
        tagline: "Enterprise-grade B2B infrastructure",
        href: "/enterprise-solutions",
        HeadIcon: Icon.crown,
        chips: [
            {
                label: "IT Equipments",
                I: Icon.monitor
            },
            {
                label: "Security System",
                I: Icon.camera
            },
            {
                label: "Office Equipments",
                I: Icon.printer
            },
            {
                label: "Networking",
                I: Icon.network
            },
            {
                label: "Server Setup",
                I: Icon.server
            },
            {
                label: "Power Solution",
                I: Icon.power
            }, 
        ]
    },
    {
        key: "maintenance",
        title: "Maintenance & Support",
        tagline: "Peak performance, always",
        href: "/maintenance-support",
        HeadIcon: Icon.wrench,
        chips: [
            {
                label: "AMC Contracts",
                I: Icon.doc
            },
            {
                label: "On-call Repair",
                I: Icon.phone
            },
            {
                label: "Installation",
                I: Icon.install
            },
            {
                label: "Troubleshooting",
                I: Icon.bug
            },
            {
                label: "Remote Solution",
                I: Icon.remote
            }, 
        ]
    }, 
];
const CoreSolutions = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: on , 1: setOn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const el = ref.current;
        if (!el) return;
        const reduce =  false && 0;
        if (reduce) {
            setOn(true);
            return;
        }
        const fallback = setTimeout(()=>setOn(true), 700);
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    setOn(true);
                    clearTimeout(fallback);
                    obs.disconnect();
                }
            });
        }, {
            threshold: 0.12
        });
        obs.observe(el);
        return ()=>{
            clearTimeout(fallback);
            obs.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: "jsx-d02facc827b1232c" + " " + `cs ${on ? "on" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-d02facc827b1232c" + " " + "cs-inner",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "jsx-d02facc827b1232c" + " " + "cs-head",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-d02facc827b1232c" + " " + "cs-eyebrow",
                                children: "What We Offer"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "jsx-d02facc827b1232c" + " " + "cs-title",
                                children: [
                                    "Core IT ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-d02facc827b1232c",
                                        children: "Solutions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-d02facc827b1232c" + " " + "cs-sub",
                                children: "Three specialized divisions — each a full-spectrum capability center designed to scale with your enterprise."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-d02facc827b1232c" + " " + "cs-cards",
                        children: DIVISIONS.map((d, i)=>{
                            const HeadIcon = d.HeadIcon;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                style: {
                                    "--i": i
                                },
                                className: "jsx-d02facc827b1232c" + " " + "cs-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        "aria-hidden": "true",
                                        className: "jsx-d02facc827b1232c" + " " + "cs-card-bar"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-d02facc827b1232c" + " " + "cs-card-top",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-d02facc827b1232c" + " " + "cs-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeadIcon, {
                                                    width: "28",
                                                    height: "28",
                                                    "aria-hidden": "true",
                                                    className: "jsx-d02facc827b1232c"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-d02facc827b1232c" + " " + "cs-card-heads",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-d02facc827b1232c" + " " + "cs-card-title",
                                                        children: d.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-d02facc827b1232c" + " " + "cs-card-tag",
                                                        children: d.tagline
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "jsx-d02facc827b1232c" + " " + "cs-chips",
                                        children: d.chips.map((c, ci)=>{
                                            const ChipIcon = c.I;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                style: {
                                                    "--ci": ci
                                                },
                                                className: "jsx-d02facc827b1232c",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: d.href,
                                                    className: "jsx-d02facc827b1232c" + " " + "cs-chip",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-d02facc827b1232c" + " " + "cs-chip-ic",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChipIcon, {
                                                                width: "17",
                                                                height: "17",
                                                                "aria-hidden": "true",
                                                                className: "jsx-d02facc827b1232c"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-d02facc827b1232c" + " " + "cs-chip-txt",
                                                            children: c.label
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            viewBox: "0 0 24 24",
                                                            width: "15",
                                                            height: "15",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2.2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            "aria-hidden": "true",
                                                            className: "jsx-d02facc827b1232c" + " " + "cs-chip-arrow",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M9 6l6 6-6 6",
                                                                className: "jsx-d02facc827b1232c"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, c.label);
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: d.href,
                                        className: "jsx-d02facc827b1232c" + " " + "cs-card-link",
                                        children: [
                                            "Explore ",
                                            d.title,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                viewBox: "0 0 24 24",
                                                width: "16",
                                                height: "16",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                "aria-hidden": "true",
                                                className: "jsx-d02facc827b1232c",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M5 12h14M13 6l6 6-6 6",
                                                    className: "jsx-d02facc827b1232c"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, d.key);
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d02facc827b1232c",
                children: '.cs{position:relative;width:100%;overflow:hidden;padding:clamp(56px,7vw,96px)0;background-image:url("/core-it-black.jpg");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;background-repeat:no-repeat;color:#111318}.cs-inner{position:relative;z-index:2;max-width:1160px;margin:0 auto;padding:0 clamp(18px,4vw,40px)}.cs-head{text-align:center;max-width:720px;margin:0 auto clamp(34px,4vw,54px)}.cs-eyebrow{display:inline-block;font-weight:800;font-size:12.5px;letter-spacing:3px;text-transform:uppercase;color:#7a5a00;background:rgba(247,229,0,.85);border:1px solid rgba(180,150,0,.6);padding:6px 14px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;margin-bottom:16px;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.12);-moz-box-shadow:0 2px 10px rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.12);opacity:0;-webkit-transform:translateY(14px);-moz-transform:translateY(14px);-ms-transform:translateY(14px);-o-transform:translateY(14px);transform:translateY(14px)}.cs-title{margin:0;font-weight:900;line-height:1.05;letter-spacing:-.02em;font-size:clamp(30px,5vw,52px);color:#0e1116;text-shadow:0 1px 0 rgba(255,255,255,.6),0 2px 14px rgba(255,255,255,.5);opacity:0;-webkit-transform:translateY(16px);-moz-transform:translateY(16px);-ms-transform:translateY(16px);-o-transform:translateY(16px);transform:translateY(16px)}.cs-title span{background:-webkit-linear-gradient(350deg,#c98a00,#e0a900 55%,#c98a00);background:-moz-linear-gradient(350deg,#c98a00,#e0a900 55%,#c98a00);background:-o-linear-gradient(350deg,#c98a00,#e0a900 55%,#c98a00);background:linear-gradient(100deg,#c98a00,#e0a900 55%,#c98a00);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}.cs-sub{margin:16px auto 0;max-width:560px;color:#2a2f38;font-weight:500;font-size:clamp(15px,1.4vw,17px);line-height:1.6;text-shadow:0 1px 6px rgba(255,255,255,.55);opacity:0;-webkit-transform:translateY(16px);-moz-transform:translateY(16px);-ms-transform:translateY(16px);-o-transform:translateY(16px);transform:translateY(16px)}.cs.on .cs-eyebrow{-webkit-animation:csUp.6s cubic-bezier(.22,1,.36,1)forwards;-moz-animation:csUp.6s cubic-bezier(.22,1,.36,1)forwards;-o-animation:csUp.6s cubic-bezier(.22,1,.36,1)forwards;animation:csUp.6s cubic-bezier(.22,1,.36,1)forwards}.cs.on .cs-title{-webkit-animation:csUp.7s cubic-bezier(.22,1,.36,1).08s forwards;-moz-animation:csUp.7s cubic-bezier(.22,1,.36,1).08s forwards;-o-animation:csUp.7s cubic-bezier(.22,1,.36,1).08s forwards;animation:csUp.7s cubic-bezier(.22,1,.36,1).08s forwards}.cs.on .cs-sub{-webkit-animation:csUp.7s cubic-bezier(.22,1,.36,1).16s forwards;-moz-animation:csUp.7s cubic-bezier(.22,1,.36,1).16s forwards;-o-animation:csUp.7s cubic-bezier(.22,1,.36,1).16s forwards;animation:csUp.7s cubic-bezier(.22,1,.36,1).16s forwards}@-webkit-keyframes csUp{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes csUp{to{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}}@-o-keyframes csUp{to{opacity:1;-o-transform:translateY(0);transform:translateY(0)}}@keyframes csUp{to{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}.cs-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(18px,2vw,26px);-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.cs-card{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;background:-webkit-linear-gradient(top,rgba(255,255,255,.72),rgba(255,255,255,.6));background:-moz-linear-gradient(top,rgba(255,255,255,.72),rgba(255,255,255,.6));background:-o-linear-gradient(top,rgba(255,255,255,.72),rgba(255,255,255,.6));background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(255,255,255,.6));-webkit-backdrop-filter:blur(10px)saturate(1.2);backdrop-filter:blur(10px)saturate(1.2);border:1px solid rgba(255,255,255,.85);-webkit-border-radius:22px;-moz-border-radius:22px;border-radius:22px;padding:26px 24px 22px;-webkit-box-shadow:0 18px 44px rgba(20,30,60,.18),inset 0 1px 0 rgba(255,255,255,.9);-moz-box-shadow:0 18px 44px rgba(20,30,60,.18),inset 0 1px 0 rgba(255,255,255,.9);box-shadow:0 18px 44px rgba(20,30,60,.18),inset 0 1px 0 rgba(255,255,255,.9);overflow:hidden;opacity:0;-webkit-transform:translateY(34px);-moz-transform:translateY(34px);-ms-transform:translateY(34px);-o-transform:translateY(34px);transform:translateY(34px);-webkit-transition:-webkit-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;-moz-transition:-moz-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;-o-transition:-o-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;transition:-webkit-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;transition:-moz-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;transition:-o-transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;transition:transform.35s cubic-bezier(.22,1,.36,1),box-shadow.35s ease,border-color.35s ease,background.35s ease;will-change:transform}.cs.on .cs-card{-webkit-animation:csCardIn.7s cubic-bezier(.22,1,.36,1)-webkit-calc(.22s + var(--i)*.13s)forwards;-moz-animation:csCardIn.7s cubic-bezier(.22,1,.36,1)-moz-calc(.22s + var(--i)*.13s)forwards;-o-animation:csCardIn.7s cubic-bezier(.22,1,.36,1)calc(.22s + var(--i)*.13s)forwards;animation:csCardIn.7s cubic-bezier(.22,1,.36,1)-webkit-calc(.22s + var(--i)*.13s)forwards;animation:csCardIn.7s cubic-bezier(.22,1,.36,1)-moz-calc(.22s + var(--i)*.13s)forwards;animation:csCardIn.7s cubic-bezier(.22,1,.36,1)calc(.22s + var(--i)*.13s)forwards}@-webkit-keyframes csCardIn{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes csCardIn{to{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}}@-o-keyframes csCardIn{to{opacity:1;-o-transform:translateY(0);transform:translateY(0)}}@keyframes csCardIn{to{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}.cs-card:hover{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);-ms-transform:translateY(-8px);-o-transform:translateY(-8px);transform:translateY(-8px);background:-webkit-linear-gradient(top,rgba(255,255,255,.82),rgba(255,255,255,.72));background:-moz-linear-gradient(top,rgba(255,255,255,.82),rgba(255,255,255,.72));background:-o-linear-gradient(top,rgba(255,255,255,.82),rgba(255,255,255,.72));background:linear-gradient(180deg,rgba(255,255,255,.82),rgba(255,255,255,.72));-webkit-box-shadow:0 28px 60px rgba(20,30,60,.26);-moz-box-shadow:0 28px 60px rgba(20,30,60,.26);box-shadow:0 28px 60px rgba(20,30,60,.26);border-color:rgba(230,180,0,.8)}.cs-card-bar{position:absolute;left:0;top:22px;bottom:22px;width:5px;-webkit-border-radius:0 6px 6px 0;-moz-border-radius:0 6px 6px 0;border-radius:0 6px 6px 0;background:-webkit-linear-gradient(top,#f7e500,#f6b800);background:-moz-linear-gradient(top,#f7e500,#f6b800);background:-o-linear-gradient(top,#f7e500,#f6b800);background:linear-gradient(180deg,#f7e500,#f6b800);-webkit-transform:scaleY(0);-moz-transform:scaleY(0);-ms-transform:scaleY(0);-o-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;-o-transform-origin:top;transform-origin:top;-webkit-transition:-webkit-transform.5s cubic-bezier(.22,1,.36,1);-moz-transition:-moz-transform.5s cubic-bezier(.22,1,.36,1);-o-transition:-o-transform.5s cubic-bezier(.22,1,.36,1);transition:-webkit-transform.5s cubic-bezier(.22,1,.36,1);transition:-moz-transform.5s cubic-bezier(.22,1,.36,1);transition:-o-transform.5s cubic-bezier(.22,1,.36,1);transition:transform.5s cubic-bezier(.22,1,.36,1)}.cs.on .cs-card .cs-card-bar{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-ms-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);-webkit-transition-delay:-webkit-calc(.5s + var(--i)*.13s);-moz-transition-delay:-moz-calc(.5s + var(--i)*.13s);-o-transition-delay:calc(.5s + var(--i)*.13s);transition-delay:-webkit-calc(.5s + var(--i)*.13s);transition-delay:-moz-calc(.5s + var(--i)*.13s);transition-delay:calc(.5s + var(--i)*.13s)}.cs-card-top{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px;margin-bottom:18px}.cs-icon{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:52px;height:52px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;display:grid;place-items:center;color:#1a1d24;background:#111318;border:1px solid rgba(0,0,0,.1);-webkit-transition:-webkit-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;-moz-transition:-moz-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;-o-transition:-o-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;transition:-webkit-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;transition:-moz-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;transition:-o-transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease;transition:transform.4s cubic-bezier(.34,1.56,.64,1),color.3s ease,border-color.3s ease,background.3s ease}.cs-icon svg{color:#fff}.cs-card:hover .cs-icon{-webkit-transform:rotate(-6deg)scale(1.08);-moz-transform:rotate(-6deg)scale(1.08);-ms-transform:rotate(-6deg)scale(1.08);-o-transform:rotate(-6deg)scale(1.08);transform:rotate(-6deg)scale(1.08);background:#1a1d24}.cs-card-title{margin:0;font-size:clamp(16px,1.5vw,18px);font-weight:800;color:#14181f;line-height:1.2}.cs-card-tag{margin:4px 0 0;font-size:13px;color:#55606f;font-weight:500}.cs-chips{list-style:none;margin:0 0 4px;padding:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:9px;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.cs-chip{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:11px;width:100%;padding:11px 13px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;text-decoration:none;font-size:14px;font-weight:600;color:#262b33;background:rgba(245,247,250,.8);border:1px solid rgba(0,0,0,.08);-webkit-transition:-webkit-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;-moz-transition:-moz-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;-o-transition:-o-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;transition:-webkit-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;transition:-moz-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;transition:-o-transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease;transition:transform.2s ease,background.2s ease,color.2s ease,border-color.2s ease,box-shadow.2s ease}.cs-chips li{opacity:0;-webkit-transform:translateX(-12px);-moz-transform:translateX(-12px);-ms-transform:translateX(-12px);-o-transform:translateX(-12px);transform:translateX(-12px)}.cs.on .cs-card .cs-chips li{-webkit-animation:csChipIn.45s cubic-bezier(.22,1,.36,1)-webkit-calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards;-moz-animation:csChipIn.45s cubic-bezier(.22,1,.36,1)-moz-calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards;-o-animation:csChipIn.45s cubic-bezier(.22,1,.36,1)calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards;animation:csChipIn.45s cubic-bezier(.22,1,.36,1)-webkit-calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards;animation:csChipIn.45s cubic-bezier(.22,1,.36,1)-moz-calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards;animation:csChipIn.45s cubic-bezier(.22,1,.36,1)calc(.6s + var(--i)*.13s + var(--ci)*.06s)forwards}@-webkit-keyframes csChipIn{to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-moz-keyframes csChipIn{to{opacity:1;-moz-transform:translateX(0);transform:translateX(0)}}@-o-keyframes csChipIn{to{opacity:1;-o-transform:translateX(0);transform:translateX(0)}}@keyframes csChipIn{to{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}}.cs-chip-ic{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:30px;height:30px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px;display:grid;place-items:center;color:#8a6a00;background:rgba(247,229,0,.35);border:1px solid rgba(200,160,0,.4);-webkit-transition:-webkit-transform.2s ease,background.2s ease,color.2s ease;-moz-transition:-moz-transform.2s ease,background.2s ease,color.2s ease;-o-transition:-o-transform.2s ease,background.2s ease,color.2s ease;transition:-webkit-transform.2s ease,background.2s ease,color.2s ease;transition:-moz-transform.2s ease,background.2s ease,color.2s ease;transition:-o-transform.2s ease,background.2s ease,color.2s ease;transition:transform.2s ease,background.2s ease,color.2s ease}.cs-chip-txt{-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.cs-chip-arrow{-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;color:#9aa3b0;opacity:0;-webkit-transform:translateX(-4px);-moz-transform:translateX(-4px);-ms-transform:translateX(-4px);-o-transform:translateX(-4px);transform:translateX(-4px);-webkit-transition:opacity.2s ease,-webkit-transform.2s ease,color.2s ease;-moz-transition:opacity.2s ease,-moz-transform.2s ease,color.2s ease;-o-transition:opacity.2s ease,-o-transform.2s ease,color.2s ease;transition:opacity.2s ease,-webkit-transform.2s ease,color.2s ease;transition:opacity.2s ease,-moz-transform.2s ease,color.2s ease;transition:opacity.2s ease,-o-transform.2s ease,color.2s ease;transition:opacity.2s ease,transform.2s ease,color.2s ease}.cs-chip:hover{-webkit-transform:translateX(4px);-moz-transform:translateX(4px);-ms-transform:translateX(4px);-o-transform:translateX(4px);transform:translateX(4px);color:#0e1116;background:#fff8cc;border-color:rgba(230,180,0,.7);-webkit-box-shadow:0 8px 20px rgba(20,30,60,.14);-moz-box-shadow:0 8px 20px rgba(20,30,60,.14);box-shadow:0 8px 20px rgba(20,30,60,.14)}.cs-chip:hover .cs-chip-ic{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1);background:rgba(247,229,0,.7);color:#5c4600}.cs-chip:hover .cs-chip-arrow{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0);color:#b8860b}.cs-card-link{margin-top:auto;padding-top:16px;border-top:1px solid rgba(0,0,0,.1);display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;font-size:14px;font-weight:800;text-decoration:none;color:#a67c00;-webkit-transition:gap.25s ease,color.25s ease;-moz-transition:gap.25s ease,color.25s ease;-o-transition:gap.25s ease,color.25s ease;transition:gap.25s ease,color.25s ease}.cs-card:hover .cs-card-link{color:#7a5a00}.cs-card-link svg{-webkit-transition:-webkit-transform.25s ease;-moz-transition:-moz-transform.25s ease;-o-transition:-o-transform.25s ease;transition:-webkit-transform.25s ease;transition:-moz-transform.25s ease;transition:-o-transform.25s ease;transition:transform.25s ease}.cs-card:hover .cs-card-link{gap:11px}.cs-card:hover .cs-card-link svg{-webkit-transform:translateX(3px);-moz-transform:translateX(3px);-ms-transform:translateX(3px);-o-transform:translateX(3px);transform:translateX(3px)}@media(max-width:980px){.cs-cards{grid-template-columns:1fr;max-width:560px;margin:0 auto;gap:20px}}@media(max-width:480px){.cs-chip{font-size:13.5px;padding:10px 12px}.cs-icon{width:48px;height:48px;-webkit-border-radius:13px;-moz-border-radius:13px;border-radius:13px}}@media(prefers-reduced-motion:reduce){.cs .cs-eyebrow,.cs .cs-title,.cs .cs-sub,.cs .cs-card,.cs .cs-chips li{opacity:1!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;transform:none!important;-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}.cs .cs-card-bar{-webkit-transform:scaleY(1)!important;-moz-transform:scaleY(1)!important;-ms-transform:scaleY(1)!important;-o-transform:scaleY(1)!important;transform:scaleY(1)!important}}'
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreSolutions);


/***/ }),

/***/ 3678:
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
/* harmony import */ var dangerous_html_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7027);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6151);
/* harmony import */ var _components_CoreSolutionsTree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8966);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dangerous_html_react__WEBPACK_IMPORTED_MODULE_5__, _components_footer__WEBPACK_IMPORTED_MODULE_8__]);
([dangerous_html_react__WEBPACK_IMPORTED_MODULE_5__, _components_footer__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const fallbackProductImage = "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1500";
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
        className: "stat-card",
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "stat-number",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        displayValue,
                        suffix
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "stat-label",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: label
                })
            })
        ]
    });
};
// Turns a horizontally-scrollable rail into an auto-scrolling (right-to-left)
// carousel that the user can grab with mouse or finger and drag both ways.
// Content is expected to be duplicated (rendered twice) so the loop is seamless.
const setupDraggableAutoScroll = (rail)=>{
    if (!rail) return null;
    let rafId = null;
    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startScrollLeft = 0;
    let pos = 0 // float position we drive scrollLeft with
    ;
    const SPEED = 0.6 // px per frame (~36px/s)
    ;
    const half = ()=>rail.scrollWidth / 2;
    const step = ()=>{
        const h = half();
        if (!isDragging && h > 0) {
            pos += SPEED;
            if (pos >= h) pos -= h // seamless loop back to first copy
            ;
            else if (pos < 0) pos += h;
            rail.scrollLeft = pos // assign the accumulated float (rounded internally)
            ;
        }
        rafId = requestAnimationFrame(step);
    };
    const onPointerDown = (e)=>{
        if (e.pointerType === "mouse" && e.button !== 0) return;
        isDragging = true;
        hasMoved = false;
        startX = e.clientX;
        startScrollLeft = rail.scrollLeft;
        try {
            rail.setPointerCapture(e.pointerId);
        } catch (_) {}
    };
    const onPointerMove = (e)=>{
        if (!isDragging) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 5) {
            hasMoved = true;
            if (e.cancelable) e.preventDefault();
        }
        let next = startScrollLeft - dx;
        const h = half();
        if (h > 0) {
            if (next >= h) next -= h;
            else if (next < 0) next += h;
        }
        rail.scrollLeft = next;
    };
    const endDrag = (e)=>{
        if (!isDragging) return;
        isDragging = false;
        try {
            rail.releasePointerCapture(e.pointerId);
        } catch (_) {}
        pos = rail.scrollLeft // resume auto-scroll from where the user left off
        ;
    };
    const onClick = (e)=>{
        if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endDrag);
    rail.addEventListener("pointercancel", endDrag);
    rail.addEventListener("pointerleave", endDrag);
    rail.addEventListener("click", onClick, true);
    pos = rail.scrollLeft || 0;
    rafId = requestAnimationFrame(step);
    return ()=>{
        if (rafId) cancelAnimationFrame(rafId);
        rail.removeEventListener("pointerdown", onPointerDown);
        rail.removeEventListener("pointermove", onPointerMove);
        rail.removeEventListener("pointerup", endDrag);
        rail.removeEventListener("pointercancel", endDrag);
        rail.removeEventListener("pointerleave", endDrag);
        rail.removeEventListener("click", onClick, true);
    };
};
const Home = (props)=>{
    const { featuredProducts =[] , advertisements =[] , homeCategories =[] , featuredServices =[] , clientProjects =[]  } = props;
    const caseRailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const productsRailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: adIndex , 1: setAdIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (advertisements.length <= 1) return;
        const timer = setInterval(()=>{
            setAdIndex((prev)=>(prev + 1) % advertisements.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, [
        advertisements.length
    ]);
    // Auto-scroll (right-to-left) + drag/swipe control for all three card rails
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const cleanups = [
            setupDraggableAutoScroll(productsRailRef.current),
            setupDraggableAutoScroll(caseRailRef.current), 
        ];
        return ()=>cleanups.forEach((fn)=>fn && fn());
    }, [
        featuredProducts.length,
        clientProjects.length
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-838b1a87f6f26fd3" + " " + "home-container1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-838b1a87f6f26fd3",
                                children: "MIS Solution - IT Products & Enterprise Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "MIS Solution - IT Products & Enterprise Services",
                                className: "jsx-838b1a87f6f26fd3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "hero-section",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "hero-media-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                        autoPlay: true,
                                        controls: false,
                                        loop: true,
                                        muted: true,
                                        preload: "metadata",
                                        playsInline: true,
                                        disablePictureInPicture: true,
                                        disableRemotePlayback: true,
                                        controlsList: "nodownload nofullscreen noplaybackrate noremoteplayback",
                                        tabIndex: "-1",
                                        "aria-hidden": "true",
                                        className: "jsx-838b1a87f6f26fd3" + " " + "hero-bg-video",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            src: "/home%20video.mp4",
                                            type: "video/mp4",
                                            className: "jsx-838b1a87f6f26fd3"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "hero-content-wrapper",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-838b1a87f6f26fd3" + " " + "hero-text-block",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "home-hero-title hero-title",
                                            children: "Empowering Your Business Through Innovative Technology"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "home-hero-subtitle hero-subtitle",
                                            children: "Your premier destination for comprehensive e-commerce, corporate IT services, and enterprise solutions tailored for technological excellence."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "hero-cta-group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/core-it-solutions",
                                                    className: "jsx-838b1a87f6f26fd3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "btn btn-primary btn-lg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: "Explore Services"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/categories/desktop",
                                                    className: "jsx-838b1a87f6f26fd3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "btn btn-lg btn-outline hero-shop-btn",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: "Shop Hardware"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    homeCategories.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "home-categories-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "home-categories-grid",
                            children: homeCategories.map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: `/categories/${cat.slug}`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "home-cat-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "home-cat-icon-wrap",
                                                children: cat.icon_url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: cat.icon_url,
                                                    alt: cat.name,
                                                    className: "jsx-838b1a87f6f26fd3"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-838b1a87f6f26fd3" + " " + "home-cat-letter",
                                                    children: cat.name.charAt(0)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "home-cat-name",
                                                children: cat.name
                                            })
                                        ]
                                    })
                                }, cat.id))
                        })
                    }),
                    advertisements.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        style: {
                            padding: "0 0 32px"
                        },
                        className: "jsx-838b1a87f6f26fd3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                position: "relative",
                                width: "100%",
                                overflow: "hidden"
                            },
                            className: "jsx-838b1a87f6f26fd3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        position: "relative",
                                        height: "420px"
                                    },
                                    className: "jsx-838b1a87f6f26fd3",
                                    children: advertisements.map((ad, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: ad.product_slug ? `/products/${ad.product_slug}` : ad.link_url || "#",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                style: {
                                                    position: "absolute",
                                                    inset: 0,
                                                    opacity: idx === adIndex ? 1 : 0,
                                                    transition: "opacity 0.5s",
                                                    zIndex: idx === adIndex ? 1 : 0,
                                                    display: "block",
                                                    textDecoration: "none"
                                                },
                                                className: "jsx-838b1a87f6f26fd3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: ad.image_url,
                                                        alt: ad.title,
                                                        style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            display: "block"
                                                        },
                                                        className: "jsx-838b1a87f6f26fd3"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            position: "absolute",
                                                            inset: 0,
                                                            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
                                                            zIndex: 1
                                                        },
                                                        className: "jsx-838b1a87f6f26fd3"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            position: "absolute",
                                                            bottom: "28px",
                                                            left: "28px",
                                                            right: "28px",
                                                            zIndex: 2,
                                                            textShadow: "0 2px 8px rgba(0,0,0,0.7)"
                                                        },
                                                        className: "jsx-838b1a87f6f26fd3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    background: "#f7e500",
                                                                    color: "#0a101b",
                                                                    padding: "4px 12px",
                                                                    borderRadius: "999px",
                                                                    fontSize: "12px",
                                                                    fontWeight: 700,
                                                                    display: "inline-block"
                                                                },
                                                                className: "jsx-838b1a87f6f26fd3",
                                                                children: "Special Offer"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    margin: "8px 0 4px",
                                                                    fontSize: "22px",
                                                                    fontWeight: 800,
                                                                    color: "#ffffff",
                                                                    lineHeight: 1.3,
                                                                    display: "block"
                                                                },
                                                                className: "jsx-838b1a87f6f26fd3",
                                                                children: ad.title
                                                            }),
                                                            ad.ad_details && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                style: {
                                                                    margin: "4px 0 0",
                                                                    fontSize: "14px",
                                                                    color: "rgba(255,255,255,0.9)",
                                                                    lineHeight: 1.4,
                                                                    maxWidth: "500px"
                                                                },
                                                                className: "jsx-838b1a87f6f26fd3",
                                                                children: ad.ad_details
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    fontSize: "14px",
                                                                    fontWeight: 700,
                                                                    color: "#f7e500",
                                                                    display: "inline-block",
                                                                    marginTop: "6px"
                                                                },
                                                                className: "jsx-838b1a87f6f26fd3",
                                                                children: "Shop Now →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, ad.id))
                                }),
                                advertisements.length > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            style: {
                                                position: "absolute",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                left: "12px",
                                                zIndex: 5,
                                                background: "rgba(255,255,255,0.9)",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: "36px",
                                                height: "36px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                            },
                                            onClick: ()=>setAdIndex((p)=>(p - 1 + advertisements.length) % advertisements.length),
                                            "aria-label": "Previous",
                                            className: "jsx-838b1a87f6f26fd3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-838b1a87f6f26fd3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                    points: "15 18 9 12 15 6",
                                                    className: "jsx-838b1a87f6f26fd3"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            style: {
                                                position: "absolute",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                right: "12px",
                                                zIndex: 5,
                                                background: "rgba(255,255,255,0.9)",
                                                border: "none",
                                                borderRadius: "50%",
                                                width: "36px",
                                                height: "36px",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                            },
                                            onClick: ()=>setAdIndex((p)=>(p + 1) % advertisements.length),
                                            "aria-label": "Next",
                                            className: "jsx-838b1a87f6f26fd3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-838b1a87f6f26fd3",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                    points: "9 18 15 12 9 6",
                                                    className: "jsx-838b1a87f6f26fd3"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                position: "absolute",
                                                bottom: "12px",
                                                right: "16px",
                                                zIndex: 5,
                                                display: "flex",
                                                gap: "6px"
                                            },
                                            className: "jsx-838b1a87f6f26fd3",
                                            children: advertisements.map((_, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    style: {
                                                        width: idx === adIndex ? "20px" : "8px",
                                                        height: "8px",
                                                        borderRadius: "4px",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        background: idx === adIndex ? "#ffffff" : "rgba(255,255,255,0.5)",
                                                        transition: "all 0.3s"
                                                    },
                                                    onClick: ()=>setAdIndex(idx),
                                                    "aria-label": `Slide ${idx + 1}`,
                                                    className: "jsx-838b1a87f6f26fd3"
                                                }, idx))
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "products-carousel-section",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "products-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-title",
                                        children: "Featured Hardware & Accessories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-subtitle",
                                        children: "Top-selling essentials for your office and enterprise needs."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: productsRailRef,
                                className: "jsx-838b1a87f6f26fd3" + " " + "products-rail-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-838b1a87f6f26fd3" + " " + "products-rail",
                                    children: featuredProducts.length > 0 ? [
                                        ...featuredProducts,
                                        ...featuredProducts
                                    ].map((product, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/products/${encodeURIComponent(product.slug || product.id)}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                style: {
                                                    textDecoration: "none",
                                                    color: "inherit"
                                                },
                                                className: "jsx-838b1a87f6f26fd3" + " " + "product-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "product-image-box",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: product.image || fallbackProductImage,
                                                            alt: product.name,
                                                            className: "jsx-838b1a87f6f26fd3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "product-info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "product-category",
                                                                children: product.categoryName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "product-name",
                                                                children: product.name
                                                            }),
                                                            product.price > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "product-price-tag",
                                                                children: [
                                                                    "৳",
                                                                    Number(product.price).toLocaleString(undefined, {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, `${product.id}-${idx}`)) : [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6
                                    ].map((i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "product-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-838b1a87f6f26fd3" + " " + "product-image-box",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                        alt: "Product placeholder",
                                                        className: "jsx-838b1a87f6f26fd3"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-838b1a87f6f26fd3" + " " + "product-info",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3" + " " + "product-category",
                                                            children: "Hardware"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                            className: "jsx-838b1a87f6f26fd3" + " " + "product-name",
                                                            children: [
                                                                "Featured Product ",
                                                                i
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, i))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        id: "core-services",
                        className: "jsx-838b1a87f6f26fd3" + " " + "core-solutions-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CoreSolutionsTree__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "stats-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "stats-container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "stats-grid",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 100,
                                        suffix: "+",
                                        label: "Projects Completed"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 100,
                                        suffix: "+",
                                        label: "Enterprise Clients"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 99.9,
                                        suffix: "%",
                                        label: "Support SLA",
                                        decimals: 1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StatCounter, {
                                        end: 100,
                                        suffix: "%",
                                        label: "Warranty Coverage"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "case-studies-section",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "case-header",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-title",
                                        children: "Client Projects & Case Studies"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-subtitle",
                                        children: "See how we empower businesses through innovative technology."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: caseRailRef,
                                "aria-label": "Client projects and case studies",
                                className: "jsx-838b1a87f6f26fd3" + " " + "case-rail-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-838b1a87f6f26fd3" + " " + "case-rail",
                                    children: clientProjects.length > 0 ? [
                                        ...clientProjects,
                                        ...clientProjects
                                    ].map((project, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/projects/${encodeURIComponent(project.slug || project.id)}`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                style: {
                                                    textDecoration: "none",
                                                    color: "inherit"
                                                },
                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-image",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: project.icon_url || fallbackProductImage,
                                                            alt: project.name,
                                                            className: "jsx-838b1a87f6f26fd3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-title",
                                                                children: project.name
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "section-content",
                                                                children: [
                                                                    project.description?.substring(0, 120),
                                                                    project.description?.length > 120 ? "..." : ""
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "btn-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-838b1a87f6f26fd3",
                                                                    children: "View Full Story"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, `${project.id}-${idx}`)) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-image",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                            alt: "Data Center",
                                                            className: "jsx-838b1a87f6f26fd3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-title",
                                                                children: "Global Finance Data Center"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "section-content",
                                                                children: "Complete tier-3 data center setup including networking, security, and redundant power."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "btn-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-838b1a87f6f26fd3",
                                                                    children: "View Full Story"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-image",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                            alt: "Security",
                                                            className: "jsx-838b1a87f6f26fd3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-title",
                                                                children: "City Mall Security Overhaul"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "section-content",
                                                                children: "Advanced CCTV and access control across 50,000 sq. ft. of retail space."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "btn-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-838b1a87f6f26fd3",
                                                                    children: "View Full Story"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-image",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                                            alt: "Digital",
                                                            className: "jsx-838b1a87f6f26fd3"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "case-content",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "case-title",
                                                                children: "EduTech Digital Platform"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "section-content",
                                                                children: "Custom web application and cloud hosting for a national learning initiative."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "btn-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-838b1a87f6f26fd3",
                                                                    children: "View Full Story"
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "testimonials-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "testimonials-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    id: "testimonialCarousel",
                                    className: "jsx-838b1a87f6f26fd3" + " " + "testimonials-carousel",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-item active",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-content",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-quote",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: '"MIS Solution transformed our corporate IT infrastructure. Their support team is incredibly responsive."'
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-author",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "author-name",
                                                                children: "Sarah Jenkins"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "author-role",
                                                                children: "IT Director, Nexus Corp"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-content",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-quote",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: '"The hardware quality and warranty transparency at MIS Solution are unmatched."'
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "testimonial-author",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "author-name",
                                                                children: "David Chen"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-838b1a87f6f26fd3" + " " + "author-role",
                                                                children: "Founder, TechSprint Solutions"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-838b1a87f6f26fd3" + " " + "carousel-controls",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            "aria-label": "Slide 1",
                                            className: "jsx-838b1a87f6f26fd3" + " " + "carousel-dot active"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            "aria-label": "Slide 2",
                                            className: "jsx-838b1a87f6f26fd3" + " " + "carousel-dot"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "search-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "search-container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "search-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-title",
                                        children: "Find What You Need"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "section-content",
                                        children: "Instantly search our extensive catalog of hardware, software, and services."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                        action: "/product-catalog",
                                        method: "GET",
                                        className: "jsx-838b1a87f6f26fd3" + " " + "catalog-search-form",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "catalog-search-wrapper",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Enter SKU, Model, or Product Name...",
                                                    required: true,
                                                    name: "search",
                                                    className: "jsx-838b1a87f6f26fd3" + " " + "catalog-input"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "submit",
                                                    className: "jsx-838b1a87f6f26fd3" + " " + "btn btn-primary",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                    cx: "11",
                                                                    cy: "11",
                                                                    r: "8",
                                                                    className: "jsx-838b1a87f6f26fd3"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "m21 21-4.3-4.3",
                                                                    className: "jsx-838b1a87f6f26fd3"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-838b1a87f6f26fd3",
                                                            children: "Search"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-banner-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "cta-wrapper",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-838b1a87f6f26fd3" + " " + "cta-alert-box",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-content",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "cta-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "jsx-838b1a87f6f26fd3",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                                                        className: "jsx-838b1a87f6f26fd3"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "cta-text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-title",
                                                        children: "Need Immediate Assistance?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-hotline",
                                                        children: "24/7 Hotline: 02-41021991"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-hotline",
                                                        children: "info@missolution.com.bd"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-838b1a87f6f26fd3" + " " + "cta-buttons",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/request-custom-quote",
                                            className: "jsx-838b1a87f6f26fd3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-838b1a87f6f26fd3" + " " + "btn-on-secondary btn btn-lg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-838b1a87f6f26fd3",
                                                    children: "Request a Quote"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "home-container2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "home-container3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(dangerous_html_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                html: `<style>@keyframes fadeIn {from {opacity: 0; transform: translateY(10px);} to {opacity: 1; transform: translateY(0);}}</style>`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-838b1a87f6f26fd3" + " " + "home-container4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "home-container5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(dangerous_html_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                html: `<script defer data-name="mis-solution-logic">(function(){ const testimonials = document.querySelectorAll(".testimonial-item"); const dots = document.querySelectorAll(".carousel-dot"); let currentTestimonial = 0; function showTestimonial(index) { testimonials.forEach((item, i) => { item.classList.toggle("active", i === index) }); dots.forEach((dot, i) => { dot.classList.toggle("active", i === index) }); currentTestimonial = index; } dots.forEach((dot, index) => { dot.addEventListener("click", () => { showTestimonial(index) }) }); setInterval(() => { let next = (currentTestimonial + 1) % testimonials.length; showTestimonial(next) }, 5000) })()</script>`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "838b1a87f6f26fd3",
                children: ".home-container1.jsx-838b1a87f6f26fd3{width:100%;min-height:100vh}.home-container2.jsx-838b1a87f6f26fd3{display:none}.home-container3.jsx-838b1a87f6f26fd3{display:contents}.home-container4.jsx-838b1a87f6f26fd3{display:none}.home-container5.jsx-838b1a87f6f26fd3{display:contents}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listFeaturedProducts  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const featuredProducts = await listFeaturedProducts(10);
        const db = getDbPool();
        const [ads] = await db.query(`SELECT a.id, a.title, a.ad_details, a.image_url, a.link_url, a.product_id, p.slug AS product_slug FROM advertisements a LEFT JOIN products p ON p.id = a.product_id WHERE a.is_active = 1 ORDER BY a.display_order ASC, a.created_at DESC LIMIT 10`);
        const [cats] = await db.query(`SELECT id, name, slug, icon_url FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC LIMIT 15`);
        const [featDigi] = await db.query(`SELECT name, slug, description, icon_url, 'digi_services' as type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`);
        const [featBiz] = await db.query(`SELECT name, slug, description, icon_url, 'bus_corp_sol' as type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`);
        const [featMaint] = await db.query(`SELECT name, slug, description, icon_url, 'service_maintenance' as type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`);
        const featuredServices = [
            ...featDigi,
            ...featBiz,
            ...featMaint
        ];
        const [clientProjectRows] = await db.query(`SELECT id, name, slug, description, icon_url, client_name FROM client_projects WHERE deleted_at IS NULL AND status = 'active' ORDER BY is_featured DESC, display_order ASC, created_at DESC LIMIT 10`);
        return {
            props: {
                featuredProducts,
                advertisements: JSON.parse(JSON.stringify(ads)),
                homeCategories: JSON.parse(JSON.stringify(cats)),
                featuredServices: JSON.parse(JSON.stringify(featuredServices)),
                clientProjects: JSON.parse(JSON.stringify(clientProjectRows)),
                messages: (await __webpack_require__.e(/* import() */ 9748).then(__webpack_require__.t.bind(__webpack_require__, 9748, 19))).default
            }
        };
    } catch (error) {
        return {
            props: {
                featuredProducts: [],
                advertisements: [],
                homeCategories: [],
                featuredServices: [],
                clientProjects: [],
                messages: (await __webpack_require__.e(/* import() */ 9748).then(__webpack_require__.t.bind(__webpack_require__, 9748, 19))).default
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();