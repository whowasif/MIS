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
 * CoreSolutionsCircuit
 * A "rich" printed-circuit-board that powers up when scrolled into view.
 * A central CPU chip feeds 4 glowing gold traces (Manhattan / 45-90 routing)
 * that fork out to 4 connector nodes. From each node a glass service card
 * hangs on a connector and swings to a gentle rest. Idle state keeps a soft
 * pulse travelling along the traces + drifting data dots.
 *
 * Pure SVG + CSS. No libs. Respects prefers-reduced-motion.
 * Brand: navy #0a101b board, gold #f7e500 traces.
 */ const BRANCHES = [
    {
        key: "digital",
        title: "Digital Services",
        href: "/digital-services",
        icon: "M4 5h16v10H4z M2 19h20",
        // Manhattan-routed trace from chip (500,470) out to a widely-spaced node.
        trace: "M500,470 L500,440 L150,440 L150,300",
        node: {
            x: 150,
            y: 300
        },
        align: "edge-left",
        leaves: [
            "Web Development",
            "Custom Software",
            "Mobile Apps",
            "AI Solutions",
            "Cyber Security",
            "E-Commerce"
        ]
    },
    {
        key: "corporate",
        title: "Business & Corporate",
        href: "/enterprise-solutions",
        icon: "M4 20V8l8-5 8 5v12 M9 20v-6h6v6",
        trace: "M500,470 L500,420 L385,420 L385,220",
        node: {
            x: 385,
            y: 220
        },
        align: "center",
        leaves: [
            "IT Equipments",
            "Security System",
            "Office Equipments",
            "Networking",
            "Server Setup",
            "Power Solution"
        ]
    },
    {
        key: "maintenance",
        title: "Maintenance & Support",
        href: "/maintenance-support",
        icon: "M14 6l4 4-8 8-4-1-1-4z",
        trace: "M500,470 L500,420 L620,420 L620,220",
        node: {
            x: 620,
            y: 220
        },
        align: "center",
        leaves: [
            "AMC Contracts",
            "On-call Repair",
            "Installation",
            "Troubleshooting",
            "Remote Solution"
        ]
    },
    {
        key: "procurement",
        title: "Procurement Service",
        href: "/product-catalog",
        icon: "M6 6h15l-1.5 9h-12z M6 6 5 3H2 M9 20a1 1 0 100-2 1 1 0 000 2 M18 20a1 1 0 100-2 1 1 0 000 2",
        trace: "M500,470 L500,440 L850,440 L850,300",
        node: {
            x: 850,
            y: 300
        },
        align: "edge-right",
        leaves: [
            "Hardware Sourcing",
            "Bulk Supply",
            "Corporate Deals",
            "Vendor Management",
            "Licensing",
            "Fast Delivery"
        ]
    }, 
];
// decorative extra traces + pads to make the board look "rich"
const DECO_TRACES = [
    "M500,470 L500,560 L340,560 L340,610",
    "M500,470 L500,560 L660,560 L660,610",
    "M250,250 L180,250 L180,300",
    "M750,250 L820,250 L820,300",
    "M430,230 L430,180 L360,180",
    "M570,230 L570,180 L640,180",
    "M340,610 L340,650 L420,650",
    "M660,610 L660,650 L580,650", 
];
const DECO_PADS = [
    {
        x: 340,
        y: 610
    },
    {
        x: 660,
        y: 610
    },
    {
        x: 180,
        y: 300
    },
    {
        x: 820,
        y: 300
    },
    {
        x: 360,
        y: 180
    },
    {
        x: 640,
        y: 180
    },
    {
        x: 340,
        y: 560
    },
    {
        x: 660,
        y: 560
    },
    {
        x: 420,
        y: 650
    },
    {
        x: 580,
        y: 650
    },
    {
        x: 500,
        y: 560
    }, 
];
const CoreSolutionsCircuit = ()=>{
    const wrapRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: on , 1: setOn  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const el = wrapRef.current;
        if (!el) return;
        const reduce =  false && 0;
        if (reduce) {
            setOn(true);
            return;
        }
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    setOn(true);
                    obs.disconnect();
                }
            });
        }, {
            threshold: 0.25
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    // fire the travelling "current" pulses along each trace once powered on
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!on || !wrapRef.current) return;
        const motions = wrapRef.current.querySelectorAll(".csc-motion");
        motions.forEach((m, i)=>{
            const begin = 0.15 + i * 0.15;
            if (typeof m.beginElementAt === "function") {
                try {
                    m.beginElementAt(begin);
                } catch (_) {
                    try {
                        m.beginElement();
                    } catch (e) {}
                }
            } else if (typeof m.beginElement === "function") {
                setTimeout(()=>{
                    try {
                        m.beginElement();
                    } catch (e) {}
                }, begin * 1000);
            }
        });
    }, [
        on
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: wrapRef,
        className: "jsx-b7102f3b4e478a6b" + " " + `csc-wrap ${on ? "on" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-b7102f3b4e478a6b" + " " + "csc-board",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        viewBox: "0 0 1000 720",
                        preserveAspectRatio: "xMidYMid meet",
                        "aria-hidden": "true",
                        className: "jsx-b7102f3b4e478a6b" + " " + "csc-svg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                                className: "jsx-b7102f3b4e478a6b",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "traceGrad",
                                        x1: "0",
                                        y1: "0",
                                        x2: "1",
                                        y2: "1",
                                        className: "jsx-b7102f3b4e478a6b",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "#f7e500",
                                                className: "jsx-b7102f3b4e478a6b"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "#c99a0a",
                                                className: "jsx-b7102f3b4e478a6b"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                                        id: "boardGlow",
                                        cx: "50%",
                                        cy: "42%",
                                        r: "55%",
                                        className: "jsx-b7102f3b4e478a6b",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(247,229,0,0.14)",
                                                className: "jsx-b7102f3b4e478a6b"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(247,229,0,0)",
                                                className: "jsx-b7102f3b4e478a6b"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                                        id: "cGlow",
                                        x: "-60%",
                                        y: "-60%",
                                        width: "220%",
                                        height: "220%",
                                        className: "jsx-b7102f3b4e478a6b",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                                stdDeviation: "3.4",
                                                result: "b",
                                                className: "jsx-b7102f3b4e478a6b"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("feMerge", {
                                                className: "jsx-b7102f3b4e478a6b",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                                        in: "b",
                                                        className: "jsx-b7102f3b4e478a6b"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feMergeNode", {
                                                        in: "SourceGraphic",
                                                        className: "jsx-b7102f3b4e478a6b"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                                        id: "grid",
                                        width: "26",
                                        height: "26",
                                        patternUnits: "userSpaceOnUse",
                                        className: "jsx-b7102f3b4e478a6b",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M26 0H0V26",
                                            fill: "none",
                                            stroke: "rgba(247,229,0,0.05)",
                                            strokeWidth: "1",
                                            className: "jsx-b7102f3b4e478a6b"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                x: "0",
                                y: "0",
                                width: "1000",
                                height: "720",
                                fill: "url(#grid)",
                                className: "jsx-b7102f3b4e478a6b"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "500",
                                cy: "300",
                                r: "330",
                                fill: "url(#boardGlow)",
                                className: "jsx-b7102f3b4e478a6b" + " " + "csc-ambient"
                            }),
                            DECO_TRACES.map((d, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: d,
                                    fill: "none",
                                    stroke: "rgba(247,229,0,0.16)",
                                    strokeWidth: "2.5",
                                    strokeLinejoin: "round",
                                    strokeLinecap: "round",
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-deco"
                                }, `deco-${i}`)),
                            DECO_PADS.map((p, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    cx: p.x,
                                    cy: p.y,
                                    r: "4",
                                    fill: "none",
                                    stroke: "rgba(247,229,0,0.35)",
                                    strokeWidth: "2",
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-deco-pad"
                                }, `dpad-${i}`)),
                            BRANCHES.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    className: "jsx-b7102f3b4e478a6b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: b.trace,
                                            fill: "none",
                                            stroke: "rgba(247,229,0,0.22)",
                                            strokeWidth: "3.5",
                                            strokeLinejoin: "round",
                                            strokeLinecap: "round",
                                            className: "jsx-b7102f3b4e478a6b"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: b.trace,
                                            fill: "none",
                                            stroke: "url(#traceGrad)",
                                            strokeWidth: "3.5",
                                            strokeLinejoin: "round",
                                            strokeLinecap: "round",
                                            filter: "url(#cGlow)",
                                            className: "jsx-b7102f3b4e478a6b" + " " + `csc-trace csc-trace-${bi}`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            r: "4.5",
                                            fill: "#fff6a8",
                                            filter: "url(#cGlow)",
                                            className: "jsx-b7102f3b4e478a6b" + " " + `csc-pulse csc-pulse-${bi}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateMotion", {
                                                dur: "1.1s",
                                                begin: "indefinite",
                                                fill: "freeze",
                                                path: b.trace,
                                                className: "jsx-b7102f3b4e478a6b" + " " + "csc-motion"
                                            })
                                        })
                                    ]
                                }, `trace-${b.key}`)),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                filter: "url(#cGlow)",
                                className: "jsx-b7102f3b4e478a6b" + " " + "csc-chip",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        x: "466",
                                        y: "468",
                                        width: "68",
                                        height: "68",
                                        rx: "10",
                                        fill: "#0e1626",
                                        stroke: "url(#traceGrad)",
                                        strokeWidth: "2.5",
                                        className: "jsx-b7102f3b4e478a6b"
                                    }),
                                    [
                                        ...Array(4)
                                    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: 478 + i * 14,
                                                    y1: "460",
                                                    x2: 478 + i * 14,
                                                    y2: "468",
                                                    stroke: "#c99a0a",
                                                    strokeWidth: "2.5",
                                                    className: "jsx-b7102f3b4e478a6b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: 478 + i * 14,
                                                    y1: "536",
                                                    x2: 478 + i * 14,
                                                    y2: "544",
                                                    stroke: "#c99a0a",
                                                    strokeWidth: "2.5",
                                                    className: "jsx-b7102f3b4e478a6b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "458",
                                                    y1: 480 + i * 14,
                                                    x2: "466",
                                                    y2: 480 + i * 14,
                                                    stroke: "#c99a0a",
                                                    strokeWidth: "2.5",
                                                    className: "jsx-b7102f3b4e478a6b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "534",
                                                    y1: 480 + i * 14,
                                                    x2: "542",
                                                    y2: 480 + i * 14,
                                                    stroke: "#c99a0a",
                                                    strokeWidth: "2.5",
                                                    className: "jsx-b7102f3b4e478a6b"
                                                })
                                            ]
                                        }, i)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                        x: "484",
                                        y: "486",
                                        width: "32",
                                        height: "32",
                                        rx: "5",
                                        fill: "none",
                                        stroke: "#f7e500",
                                        strokeWidth: "2",
                                        className: "jsx-b7102f3b4e478a6b"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                        x: "500",
                                        y: "508",
                                        textAnchor: "middle",
                                        fontSize: "12",
                                        fontWeight: "800",
                                        fill: "#f7e500",
                                        fontFamily: "monospace",
                                        className: "jsx-b7102f3b4e478a6b",
                                        children: "MIS"
                                    })
                                ]
                            }),
                            BRANCHES.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    className: "jsx-b7102f3b4e478a6b" + " " + `csc-node csc-node-${bi}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            cx: b.node.x,
                                            cy: b.node.y,
                                            r: "10",
                                            fill: "#0e1626",
                                            stroke: "url(#traceGrad)",
                                            strokeWidth: "2.5",
                                            filter: "url(#cGlow)",
                                            className: "jsx-b7102f3b4e478a6b"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                            cx: b.node.x,
                                            cy: b.node.y,
                                            r: "4",
                                            fill: "#f7e500",
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-node-core"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                            x1: b.node.x,
                                            y1: b.node.y + 10,
                                            x2: b.node.x,
                                            y2: b.node.y + 34,
                                            stroke: "rgba(247,229,0,0.5)",
                                            strokeWidth: "2",
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-rope"
                                        })
                                    ]
                                }, `node-${b.key}`)),
                            on && BRANCHES.map((b, bi)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    r: "2.4",
                                    fill: "#f7e500",
                                    opacity: "0",
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-data",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animateMotion", {
                                        dur: `${3 + bi * 0.4}s`,
                                        begin: `${2.4 + bi * 0.5}s`,
                                        repeatCount: "indefinite",
                                        path: b.trace,
                                        className: "jsx-b7102f3b4e478a6b"
                                    })
                                }, `data-${b.key}`))
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-b7102f3b4e478a6b" + " " + "csc-cards",
                        children: BRANCHES.map((b, bi)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: b.href,
                                style: {
                                    left: `${b.node.x / 1000 * 100}%`,
                                    top: `${(b.node.y + 34) / 720 * 100}%`,
                                    "--drop-delay": `${1.2 + bi * 0.22}s`
                                },
                                className: "jsx-b7102f3b4e478a6b" + " " + `csc-card ${b.align || "center"}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-card-swing",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-card-top",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-card-ic",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: b.icon,
                                                        className: "jsx-b7102f3b4e478a6b"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-card-title",
                                                    children: b.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-card-tags",
                                            children: b.leaves.map((l)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-tag",
                                                    children: l
                                                }, l))
                                        })
                                    ]
                                })
                            }, b.key))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-b7102f3b4e478a6b" + " " + "csc-mobile",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-b7102f3b4e478a6b" + " " + "csc-spine"
                    }),
                    BRANCHES.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: b.href,
                            style: {
                                transitionDelay: `${0.15 + bi * 0.13}s`
                            },
                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-card",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-connector"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-node"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-body",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-title",
                                            children: b.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-tags",
                                            children: b.leaves.map((l)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-b7102f3b4e478a6b" + " " + "csc-m-tag",
                                                    children: l
                                                }, l))
                                        })
                                    ]
                                })
                            ]
                        }, b.key))
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b7102f3b4e478a6b",
                children: ".csc-wrap.jsx-b7102f3b4e478a6b{position:relative;width:100%}.csc-board.jsx-b7102f3b4e478a6b{position:relative;width:100%;max-width:1040px;margin:0 auto;aspect-ratio:1000/720}.csc-svg.jsx-b7102f3b4e478a6b{width:100%;height:100%;display:block;overflow:visible}.csc-ambient.jsx-b7102f3b4e478a6b{opacity:0;-webkit-transition:opacity 1.2s ease;-moz-transition:opacity 1.2s ease;-o-transition:opacity 1.2s ease;transition:opacity 1.2s ease}.on.jsx-b7102f3b4e478a6b .csc-ambient.jsx-b7102f3b4e478a6b{opacity:1}.csc-deco.jsx-b7102f3b4e478a6b,.csc-deco-pad.jsx-b7102f3b4e478a6b{opacity:0;-webkit-transition:opacity 1s ease.1s;-moz-transition:opacity 1s ease.1s;-o-transition:opacity 1s ease.1s;transition:opacity 1s ease.1s}.on.jsx-b7102f3b4e478a6b .csc-deco.jsx-b7102f3b4e478a6b,.on.jsx-b7102f3b4e478a6b .csc-deco-pad.jsx-b7102f3b4e478a6b{opacity:1}.csc-trace.jsx-b7102f3b4e478a6b{stroke-dasharray:620;stroke-dashoffset:620}.on.jsx-b7102f3b4e478a6b .csc-trace-0.jsx-b7102f3b4e478a6b{-webkit-transition:stroke-dashoffset 1.1s ease.15s;-moz-transition:stroke-dashoffset 1.1s ease.15s;-o-transition:stroke-dashoffset 1.1s ease.15s;transition:stroke-dashoffset 1.1s ease.15s;stroke-dashoffset:0}.on.jsx-b7102f3b4e478a6b .csc-trace-1.jsx-b7102f3b4e478a6b{-webkit-transition:stroke-dashoffset 1.1s ease.3s;-moz-transition:stroke-dashoffset 1.1s ease.3s;-o-transition:stroke-dashoffset 1.1s ease.3s;transition:stroke-dashoffset 1.1s ease.3s;stroke-dashoffset:0}.on.jsx-b7102f3b4e478a6b .csc-trace-2.jsx-b7102f3b4e478a6b{-webkit-transition:stroke-dashoffset 1.1s ease.45s;-moz-transition:stroke-dashoffset 1.1s ease.45s;-o-transition:stroke-dashoffset 1.1s ease.45s;transition:stroke-dashoffset 1.1s ease.45s;stroke-dashoffset:0}.on.jsx-b7102f3b4e478a6b .csc-trace-3.jsx-b7102f3b4e478a6b{-webkit-transition:stroke-dashoffset 1.1s ease.6s;-moz-transition:stroke-dashoffset 1.1s ease.6s;-o-transition:stroke-dashoffset 1.1s ease.6s;transition:stroke-dashoffset 1.1s ease.6s;stroke-dashoffset:0}.csc-chip.jsx-b7102f3b4e478a6b{opacity:.35;-webkit-transition:opacity.5s ease;-moz-transition:opacity.5s ease;-o-transition:opacity.5s ease;transition:opacity.5s ease}.on.jsx-b7102f3b4e478a6b .csc-chip.jsx-b7102f3b4e478a6b{opacity:1;-webkit-animation:chipPulse 3s ease-in-out 1.4s infinite;-moz-animation:chipPulse 3s ease-in-out 1.4s infinite;-o-animation:chipPulse 3s ease-in-out 1.4s infinite;animation:chipPulse 3s ease-in-out 1.4s infinite}@-webkit-keyframes chipPulse{0%,100%{-webkit-filter:drop-shadow(0 0 2px rgba(247,229,0,.4));filter:drop-shadow(0 0 2px rgba(247,229,0,.4))}50%{-webkit-filter:drop-shadow(0 0 8px rgba(247,229,0,.9));filter:drop-shadow(0 0 8px rgba(247,229,0,.9))}}@-moz-keyframes chipPulse{0%,100%{filter:drop-shadow(0 0 2px rgba(247,229,0,.4))}50%{filter:drop-shadow(0 0 8px rgba(247,229,0,.9))}}@-o-keyframes chipPulse{0%,100%{filter:drop-shadow(0 0 2px rgba(247,229,0,.4))}50%{filter:drop-shadow(0 0 8px rgba(247,229,0,.9))}}@keyframes chipPulse{0%,100%{-webkit-filter:drop-shadow(0 0 2px rgba(247,229,0,.4));filter:drop-shadow(0 0 2px rgba(247,229,0,.4))}50%{-webkit-filter:drop-shadow(0 0 8px rgba(247,229,0,.9));filter:drop-shadow(0 0 8px rgba(247,229,0,.9))}}.csc-node.jsx-b7102f3b4e478a6b{opacity:0;-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);transform-box:fill-box;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.on.jsx-b7102f3b4e478a6b .csc-node-0.jsx-b7102f3b4e478a6b{-webkit-transition:opacity.4s ease 1s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1s;-moz-transition:opacity.4s ease 1s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1s;-o-transition:opacity.4s ease 1s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1s;transition:opacity.4s ease 1s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1s;transition:opacity.4s ease 1s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1s;transition:opacity.4s ease 1s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1s;transition:opacity.4s ease 1s,transform.5s cubic-bezier(.34,1.56,.64,1)1s;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.on.jsx-b7102f3b4e478a6b .csc-node-1.jsx-b7102f3b4e478a6b{-webkit-transition:opacity.4s ease 1.15s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;-moz-transition:opacity.4s ease 1.15s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;-o-transition:opacity.4s ease 1.15s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;transition:opacity.4s ease 1.15s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;transition:opacity.4s ease 1.15s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;transition:opacity.4s ease 1.15s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;transition:opacity.4s ease 1.15s,transform.5s cubic-bezier(.34,1.56,.64,1)1.15s;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.on.jsx-b7102f3b4e478a6b .csc-node-2.jsx-b7102f3b4e478a6b{-webkit-transition:opacity.4s ease 1.3s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;-moz-transition:opacity.4s ease 1.3s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;-o-transition:opacity.4s ease 1.3s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;transition:opacity.4s ease 1.3s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;transition:opacity.4s ease 1.3s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;transition:opacity.4s ease 1.3s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;transition:opacity.4s ease 1.3s,transform.5s cubic-bezier(.34,1.56,.64,1)1.3s;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.on.jsx-b7102f3b4e478a6b .csc-node-3.jsx-b7102f3b4e478a6b{-webkit-transition:opacity.4s ease 1.45s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;-moz-transition:opacity.4s ease 1.45s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;-o-transition:opacity.4s ease 1.45s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;transition:opacity.4s ease 1.45s,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;transition:opacity.4s ease 1.45s,-moz-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;transition:opacity.4s ease 1.45s,-o-transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;transition:opacity.4s ease 1.45s,transform.5s cubic-bezier(.34,1.56,.64,1)1.45s;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.csc-node-core.jsx-b7102f3b4e478a6b{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}.on.jsx-b7102f3b4e478a6b .csc-node-core.jsx-b7102f3b4e478a6b{-webkit-animation:nodeGlow 2.4s ease-in-out infinite;-moz-animation:nodeGlow 2.4s ease-in-out infinite;-o-animation:nodeGlow 2.4s ease-in-out infinite;animation:nodeGlow 2.4s ease-in-out infinite}@-webkit-keyframes nodeGlow{0%,100%{opacity:.6}50%{opacity:1}}@-moz-keyframes nodeGlow{0%,100%{opacity:.6}50%{opacity:1}}@-o-keyframes nodeGlow{0%,100%{opacity:.6}50%{opacity:1}}@keyframes nodeGlow{0%,100%{opacity:.6}50%{opacity:1}}.csc-pulse.jsx-b7102f3b4e478a6b{opacity:0}.on.jsx-b7102f3b4e478a6b .csc-pulse.jsx-b7102f3b4e478a6b{opacity:1}.csc-data.jsx-b7102f3b4e478a6b{opacity:0}.on.jsx-b7102f3b4e478a6b .csc-data.jsx-b7102f3b4e478a6b{opacity:.9}.csc-cards.jsx-b7102f3b4e478a6b{position:absolute;inset:0;pointer-events:none}.csc-card.jsx-b7102f3b4e478a6b{position:absolute;pointer-events:auto;text-decoration:none;width:210px}.csc-card.center.jsx-b7102f3b4e478a6b{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.csc-card.edge-left.jsx-b7102f3b4e478a6b{-webkit-transform:translateX(-22%);-moz-transform:translateX(-22%);-ms-transform:translateX(-22%);-o-transform:translateX(-22%);transform:translateX(-22%)}.csc-card.edge-right.jsx-b7102f3b4e478a6b{-webkit-transform:translateX(-78%);-moz-transform:translateX(-78%);-ms-transform:translateX(-78%);-o-transform:translateX(-78%);transform:translateX(-78%)}.csc-card-swing.jsx-b7102f3b4e478a6b{display:block;background:-webkit-linear-gradient(290deg,rgba(20,28,43,.82),rgba(10,16,27,.9));background:-moz-linear-gradient(290deg,rgba(20,28,43,.82),rgba(10,16,27,.9));background:-o-linear-gradient(290deg,rgba(20,28,43,.82),rgba(10,16,27,.9));background:linear-gradient(160deg,rgba(20,28,43,.82),rgba(10,16,27,.9));-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(247,229,0,.38);-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;padding:12px 14px;-webkit-box-shadow:0 14px 34px rgba(0,0,0,.5),inset 0 0 22px rgba(247,229,0,.06);-moz-box-shadow:0 14px 34px rgba(0,0,0,.5),inset 0 0 22px rgba(247,229,0,.06);box-shadow:0 14px 34px rgba(0,0,0,.5),inset 0 0 22px rgba(247,229,0,.06);-webkit-transform-origin:top center;-moz-transform-origin:top center;-ms-transform-origin:top center;-o-transform-origin:top center;transform-origin:top center;opacity:0;-webkit-transform:translateY(-18px)scale(.96);-moz-transform:translateY(-18px)scale(.96);-ms-transform:translateY(-18px)scale(.96);-o-transform:translateY(-18px)scale(.96);transform:translateY(-18px)scale(.96)}.csc-card.edge-left.jsx-b7102f3b4e478a6b .csc-card-swing.jsx-b7102f3b4e478a6b{-webkit-transform-origin:22%top;-moz-transform-origin:22%top;-ms-transform-origin:22%top;-o-transform-origin:22%top;transform-origin:22%top}.csc-card.edge-right.jsx-b7102f3b4e478a6b .csc-card-swing.jsx-b7102f3b4e478a6b{-webkit-transform-origin:78%top;-moz-transform-origin:78%top;-ms-transform-origin:78%top;-o-transform-origin:78%top;transform-origin:78%top}.on.jsx-b7102f3b4e478a6b .csc-card.jsx-b7102f3b4e478a6b .csc-card-swing.jsx-b7102f3b4e478a6b{opacity:1;-webkit-transform:translateY(0)scale(1);-moz-transform:translateY(0)scale(1);-ms-transform:translateY(0)scale(1);-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1);-webkit-transition:opacity.5s ease var(--drop-delay),-webkit-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);-moz-transition:opacity.5s ease var(--drop-delay),-moz-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);-o-transition:opacity.5s ease var(--drop-delay),-o-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);transition:opacity.5s ease var(--drop-delay),-webkit-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);transition:opacity.5s ease var(--drop-delay),-moz-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);transition:opacity.5s ease var(--drop-delay),-o-transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);transition:opacity.5s ease var(--drop-delay),transform.7s cubic-bezier(.34,1.4,.5,1)var(--drop-delay);-webkit-animation:swing 5s ease-in-out infinite;-moz-animation:swing 5s ease-in-out infinite;-o-animation:swing 5s ease-in-out infinite;animation:swing 5s ease-in-out infinite;-webkit-animation-delay:-webkit-calc(var(--drop-delay) + .7s);-moz-animation-delay:-moz-calc(var(--drop-delay) + .7s);-o-animation-delay:calc(var(--drop-delay) + .7s);animation-delay:-webkit-calc(var(--drop-delay) + .7s);animation-delay:-moz-calc(var(--drop-delay) + .7s);animation-delay:calc(var(--drop-delay) + .7s)}@-webkit-keyframes swing{0%,100%{-webkit-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-webkit-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@-moz-keyframes swing{0%,100%{-moz-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-moz-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@-o-keyframes swing{0%,100%{-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@keyframes swing{0%,100%{-webkit-transform:rotate(-1.4deg);-moz-transform:rotate(-1.4deg);-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-webkit-transform:rotate(1.4deg);-moz-transform:rotate(1.4deg);-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}}.csc-card.jsx-b7102f3b4e478a6b:hover .csc-card-swing.jsx-b7102f3b4e478a6b{border-color:#f7e500;-webkit-box-shadow:0 16px 40px rgba(247,229,0,.22),inset 0 0 26px rgba(247,229,0,.12);-moz-box-shadow:0 16px 40px rgba(247,229,0,.22),inset 0 0 26px rgba(247,229,0,.12);box-shadow:0 16px 40px rgba(247,229,0,.22),inset 0 0 26px rgba(247,229,0,.12)}.csc-card-top.jsx-b7102f3b4e478a6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:9px}.csc-card-ic.jsx-b7102f3b4e478a6b{width:20px;height:20px;color:#f7e500;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.csc-card-title.jsx-b7102f3b4e478a6b{color:#fff;font-weight:800;font-size:14px;line-height:1.15}.csc-card-tags.jsx-b7102f3b4e478a6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:5px;margin-top:10px}.csc-tag.jsx-b7102f3b4e478a6b{font-size:10px;font-weight:600;color:#f7e500;background:rgba(247,229,0,.1);border:1px solid rgba(247,229,0,.28);padding:3px 8px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px}.csc-mobile.jsx-b7102f3b4e478a6b{display:none;position:relative;padding:10px 0 0 22px}.csc-spine.jsx-b7102f3b4e478a6b{position:absolute;left:22px;top:0;bottom:30px;width:2px;background:-webkit-linear-gradient(#f7e500,rgba(247,229,0,.2));background:-moz-linear-gradient(#f7e500,rgba(247,229,0,.2));background:-o-linear-gradient(#f7e500,rgba(247,229,0,.2));background:linear-gradient(#f7e500,rgba(247,229,0,.2))}.csc-m-card.jsx-b7102f3b4e478a6b{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;gap:0;text-decoration:none;margin-bottom:16px;opacity:0;-webkit-transform:translateX(18px);-moz-transform:translateX(18px);-ms-transform:translateX(18px);-o-transform:translateX(18px);transform:translateX(18px);-webkit-transition:opacity.5s ease,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1);-moz-transition:opacity.5s ease,-moz-transform.5s cubic-bezier(.34,1.56,.64,1);-o-transition:opacity.5s ease,-o-transform.5s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-webkit-transform.5s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-moz-transform.5s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-o-transform.5s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,transform.5s cubic-bezier(.34,1.56,.64,1)}.on.jsx-b7102f3b4e478a6b .csc-m-card.jsx-b7102f3b4e478a6b{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}.csc-m-connector.jsx-b7102f3b4e478a6b{width:26px;height:2px;background:rgba(247,229,0,.5);margin-top:22px;margin-left:0}.csc-m-node.jsx-b7102f3b4e478a6b{position:absolute;left:-6px;top:18px;width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f7e500;-webkit-box-shadow:0 0 8px rgba(247,229,0,.8);-moz-box-shadow:0 0 8px rgba(247,229,0,.8);box-shadow:0 0 8px rgba(247,229,0,.8)}.csc-m-body.jsx-b7102f3b4e478a6b{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;background:-webkit-linear-gradient(290deg,rgba(20,28,43,.85),rgba(10,16,27,.92));background:-moz-linear-gradient(290deg,rgba(20,28,43,.85),rgba(10,16,27,.92));background:-o-linear-gradient(290deg,rgba(20,28,43,.85),rgba(10,16,27,.92));background:linear-gradient(160deg,rgba(20,28,43,.85),rgba(10,16,27,.92));border:1px solid rgba(247,229,0,.35);-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;padding:12px 14px}.csc-m-title.jsx-b7102f3b4e478a6b{display:block;color:#fff;font-weight:800;font-size:15px;margin-bottom:8px}.csc-m-tags.jsx-b7102f3b4e478a6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:6px}.csc-m-tag.jsx-b7102f3b4e478a6b{font-size:11px;font-weight:700;color:#0a101b;background:-webkit-linear-gradient(315deg,#f7e500,#d8ab12);background:-moz-linear-gradient(315deg,#f7e500,#d8ab12);background:-o-linear-gradient(315deg,#f7e500,#d8ab12);background:linear-gradient(135deg,#f7e500,#d8ab12);padding:4px 10px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px}@media(max-width:900px){.csc-board.jsx-b7102f3b4e478a6b{display:none}.csc-mobile.jsx-b7102f3b4e478a6b{display:block}}@media(prefers-reduced-motion:reduce){.csc-trace.jsx-b7102f3b4e478a6b,.csc-node.jsx-b7102f3b4e478a6b,.csc-card-swing.jsx-b7102f3b4e478a6b,.csc-m-card.jsx-b7102f3b4e478a6b,.csc-deco.jsx-b7102f3b4e478a6b,.csc-deco-pad.jsx-b7102f3b4e478a6b,.csc-ambient.jsx-b7102f3b4e478a6b{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important}.csc-chip.jsx-b7102f3b4e478a6b,.csc-node-core.jsx-b7102f3b4e478a6b,.on.jsx-b7102f3b4e478a6b .csc-card.jsx-b7102f3b4e478a6b .csc-card-swing.jsx-b7102f3b4e478a6b{-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}.csc-trace.jsx-b7102f3b4e478a6b{stroke-dashoffset:0!important}.csc-card-swing.jsx-b7102f3b4e478a6b{opacity:1!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;transform:none!important}}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreSolutionsCircuit);


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
                        className: "jsx-838b1a87f6f26fd3" + " " + "services-grid-section core-tree-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-838b1a87f6f26fd3" + " " + "services-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-838b1a87f6f26fd3" + " " + "services-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "core-tree-eyebrow",
                                            children: "What We Offer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "section-title",
                                            children: "Core IT Solutions"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-838b1a87f6f26fd3" + " " + "section-subtitle",
                                            children: "Four connected divisions powering your business — watch the board come alive."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CoreSolutionsTree__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                            ]
                        })
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