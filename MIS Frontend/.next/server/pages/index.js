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
 * CoreSolutionsTree
 * A realistic, growing "solutions tree" that animates into view when the
 * section scrolls onto screen. The trunk grows, splits into 4 branches
 * (3 service pillars + a Hardware/Products branch), and leaves (sub-categories)
 * sprout at the branch tips with a staggered, organic animation.
 *
 * Pure SVG + CSS. No external animation libs. Respects prefers-reduced-motion.
 */ const BRANCHES = [
    {
        key: "digital",
        title: "Digital Services",
        href: "/digital-services",
        // path is drawn from trunk-top toward the tip; tip is where leaves cluster
        path: "M500,470 C420,400 360,360 300,300 C255,255 225,220 205,180",
        twigs: [
            "M300,300 C285,285 275,270 288,250",
            "M360,360 C350,340 345,325 335,312"
        ],
        tip: {
            x: 205,
            y: 175
        },
        labelSide: "left",
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
        path: "M500,470 C455,395 435,345 420,285 C407,235 402,195 400,150",
        twigs: [
            "M420,285 C405,272 395,258 408,242",
            "M435,345 C422,332 415,318 425,305"
        ],
        tip: {
            x: 400,
            y: 145
        },
        labelSide: "left",
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
        path: "M500,470 C545,395 565,345 580,285 C593,235 598,195 600,150",
        twigs: [
            "M580,285 C595,272 605,258 592,242",
            "M565,345 C578,332 585,318 575,305"
        ],
        tip: {
            x: 600,
            y: 145
        },
        labelSide: "right",
        leaves: [
            "AMC Contracts",
            "On-call Repair",
            "Installation",
            "Troubleshooting",
            "Remote Solution"
        ]
    },
    {
        key: "hardware",
        title: "Hardware & Products",
        href: "/categories/desktop",
        path: "M500,470 C580,400 640,360 700,300 C745,255 775,220 795,180",
        twigs: [
            "M700,300 C715,285 725,270 712,250",
            "M640,360 C650,340 655,325 665,312"
        ],
        tip: {
            x: 795,
            y: 175
        },
        labelSide: "right",
        leaves: [
            "Desktops",
            "Laptops",
            "Components",
            "Monitors",
            "Networking",
            "Accessories"
        ]
    }, 
];
// deterministic offsets producing a FULL, organic canopy at each branch tip.
// We render more leaves than sub-categories (some are decorative filler) so the
// tips look like real foliage. Each leaf carries a scale + rotation.
const buildCanopy = (count)=>{
    const leaves = [];
    // compact cluster: leaves fan out and up around the tip, not scattered wide
    const total = Math.max(count + 4, 10);
    for(let i = 0; i < total; i++){
        const t = i / (total - 1);
        const angle = (-150 + t * 300) * (Math.PI / 180 // fan left→right, biased upward
        );
        const ring = i % 3;
        const r = 14 + ring * 11 + i % 2 * 5 // tight radius
        ;
        const dx = Math.cos(angle) * r;
        const dy = Math.sin(angle) * r * 0.7 - 8 // lift the cluster slightly above tip
        ;
        // leaves point outward from cluster center for a natural spray
        const rot = angle * 180 / Math.PI + 90 + (i % 2 ? 10 : -10);
        const scale = ring === 0 ? 0.72 : ring === 1 ? 0.92 : 1.1;
        leaves.push({
            dx,
            dy,
            rot,
            scale
        });
    }
    return leaves;
};
const CoreSolutionsTree = ()=>{
    const wrapRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: grown , 1: setGrown  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const el = wrapRef.current;
        if (!el) return;
        const reduce =  false && 0;
        if (reduce) {
            setGrown(true);
            return;
        }
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    setGrown(true);
                    obs.disconnect();
                }
            });
        }, {
            threshold: 0.25
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: wrapRef,
        className: "jsx-61cca3b3e60ff6c1" + " " + `cst-wrap ${grown ? "grown" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                "aria-hidden": "true",
                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-tree",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        viewBox: "0 0 1000 720",
                        preserveAspectRatio: "xMidYMax meet",
                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-svg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                                className: "jsx-61cca3b3e60ff6c1",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "bark",
                                        x1: "0",
                                        y1: "1",
                                        x2: "0",
                                        y2: "0",
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "#3a2a17",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "45%",
                                                stopColor: "#5a3d21",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "#7a5330",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "barkThin",
                                        x1: "0",
                                        y1: "1",
                                        x2: "0",
                                        y2: "0",
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "#5a3d21",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "#8a5f36",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                                        id: "leafGrad",
                                        cx: "35%",
                                        cy: "30%",
                                        r: "80%",
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "#fff59a",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "45%",
                                                stopColor: "#f7e500",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "#d8ab12",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", {
                                        id: "glow",
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%",
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "rgba(247,229,0,0.35)",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "rgba(247,229,0,0)",
                                                className: "jsx-61cca3b3e60ff6c1"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("filter", {
                                        id: "soft",
                                        x: "-30%",
                                        y: "-30%",
                                        width: "160%",
                                        height: "160%",
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                            stdDeviation: "2",
                                            className: "jsx-61cca3b3e60ff6c1"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                                cx: "500",
                                cy: "690",
                                rx: "260",
                                ry: "26",
                                fill: "rgba(0,0,0,0.45)",
                                filter: "url(#soft)",
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-ground"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                cx: "500",
                                cy: "220",
                                r: "300",
                                fill: "url(#glow)",
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-ambient"
                            }),
                            [
                                ...Array(9)
                            ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                    r: 1.6 + i % 3 * 0.7,
                                    cx: 300 + i * 55,
                                    cy: 640,
                                    fill: "#f7e500",
                                    opacity: "0",
                                    className: "jsx-61cca3b3e60ff6c1" + " " + `cst-spore s${i}`
                                }, i)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M500,700 C492,620 488,560 496,500 C500,486 500,480 500,470",
                                fill: "none",
                                stroke: "url(#bark)",
                                strokeWidth: "34",
                                strokeLinecap: "round",
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-trunk"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M470,700 Q500,660 530,700 Z",
                                fill: "url(#bark)",
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-flare"
                            }),
                            BRANCHES.map((b, bi)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: b.path,
                                    fill: "none",
                                    stroke: "url(#barkThin)",
                                    strokeWidth: "16",
                                    strokeLinecap: "round",
                                    className: "jsx-61cca3b3e60ff6c1" + " " + `cst-branch cst-branch-${bi}`
                                }, b.key)),
                            BRANCHES.map((b, bi)=>b.twigs?.map((tw, ti)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: tw,
                                        fill: "none",
                                        stroke: "url(#barkThin)",
                                        strokeWidth: "6",
                                        strokeLinecap: "round",
                                        className: "jsx-61cca3b3e60ff6c1" + " " + `cst-branch cst-branch-${bi}`
                                    }, `${b.key}-tw-${ti}`))),
                            BRANCHES.map((b, bi)=>{
                                const canopy = buildCanopy(b.leaves.length);
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                    className: "jsx-61cca3b3e60ff6c1",
                                    children: canopy.map((o, li)=>{
                                        const cx = b.tip.x + o.dx;
                                        const cy = b.tip.y + o.dy;
                                        const delay = 0.95 + bi * 0.16 + li * 0.05;
                                        const s = o.scale;
                                        // Leaf drawn from base point (cx,cy) upward; width w, height h scaled.
                                        const w = 15 * s;
                                        const h = 38 * s;
                                        const rib = 34 * s;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                            style: {
                                                transformOrigin: `${cx}px ${cy}px`,
                                                transitionDelay: `${delay}s`,
                                                animationDelay: `${delay + 1.2}s`
                                            },
                                            transform: `rotate(${o.rot} ${cx} ${cy})`,
                                            className: "jsx-61cca3b3e60ff6c1" + " " + "cst-leaf",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: `M${cx},${cy} C${cx - w},${cy - h * 0.24} ${cx - w},${cy - h * 0.74} ${cx},${cy - h} C${cx + w},${cy - h * 0.74} ${cx + w},${cy - h * 0.24} ${cx},${cy} Z`,
                                                    fill: "url(#leafGrad)",
                                                    stroke: "#c99a0a",
                                                    strokeWidth: "0.7",
                                                    className: "jsx-61cca3b3e60ff6c1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: cx,
                                                    y1: cy - 2,
                                                    x2: cx,
                                                    y2: cy - rib,
                                                    stroke: "#b8890a",
                                                    strokeWidth: "0.7",
                                                    opacity: "0.65",
                                                    className: "jsx-61cca3b3e60ff6c1"
                                                })
                                            ]
                                        }, li);
                                    })
                                }, `leaves-${b.key}`);
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-labels",
                        children: BRANCHES.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: b.href,
                                style: {
                                    left: `${b.tip.x / 1000 * 100}%`,
                                    top: `${b.tip.y / 720 * 100}%`,
                                    transitionDelay: `${1.5 + bi * 0.18}s`
                                },
                                className: "jsx-61cca3b3e60ff6c1" + " " + `cst-label ${b.labelSide}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-label-title",
                                        children: b.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-label-tags",
                                        children: b.leaves.join(" \xb7 ")
                                    })
                                ]
                            }, b.key))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-mobile",
                children: BRANCHES.map((b, bi)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: b.href,
                        style: {
                            transitionDelay: `${0.2 + bi * 0.14}s`
                        },
                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-m-branch",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-m-stem"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-m-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "jsx-61cca3b3e60ff6c1",
                                        children: b.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-61cca3b3e60ff6c1" + " " + "cst-m-leaves",
                                        children: b.leaves.map((l, li)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    transitionDelay: `${0.5 + bi * 0.14 + li * 0.05}s`
                                                },
                                                className: "jsx-61cca3b3e60ff6c1" + " " + "cst-m-leaf",
                                                children: l
                                            }, l))
                                    })
                                ]
                            })
                        ]
                    }, b.key))
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "61cca3b3e60ff6c1",
                children: ".cst-wrap.jsx-61cca3b3e60ff6c1{position:relative;width:100%}.cst-tree.jsx-61cca3b3e60ff6c1{position:relative;width:100%;max-width:1e3px;margin:0 auto;aspect-ratio:1000/720}.cst-svg.jsx-61cca3b3e60ff6c1{width:100%;height:100%;display:block;overflow:visible}.cst-trunk.jsx-61cca3b3e60ff6c1{stroke-dasharray:300;stroke-dashoffset:300;-webkit-transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);-moz-transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);-o-transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1)}.cst-flare.jsx-61cca3b3e60ff6c1{opacity:0;-webkit-transition:opacity.5s ease.3s;-moz-transition:opacity.5s ease.3s;-o-transition:opacity.5s ease.3s;transition:opacity.5s ease.3s}.cst-branch.jsx-61cca3b3e60ff6c1{stroke-dasharray:500;stroke-dashoffset:500}.cst-branch-0.jsx-61cca3b3e60ff6c1{-webkit-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).75s;-moz-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).75s;-o-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).75s;transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).75s}.cst-branch-1.jsx-61cca3b3e60ff6c1{-webkit-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).9s;-moz-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).9s;-o-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).9s;transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1).9s}.cst-branch-2.jsx-61cca3b3e60ff6c1{-webkit-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1s;-moz-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1s;-o-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1s;transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1s}.cst-branch-3.jsx-61cca3b3e60ff6c1{-webkit-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1.15s;-moz-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1.15s;-o-transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1.15s;transition:stroke-dashoffset.9s cubic-bezier(.4,0,.2,1)1.15s}.cst-ground.jsx-61cca3b3e60ff6c1{opacity:0;-webkit-transform:scaleX(.4);-moz-transform:scaleX(.4);-ms-transform:scaleX(.4);-o-transform:scaleX(.4);transform:scaleX(.4);-webkit-transform-origin:500px 690px;-moz-transform-origin:500px 690px;-ms-transform-origin:500px 690px;-o-transform-origin:500px 690px;transform-origin:500px 690px;-webkit-transition:opacity.6s ease,-webkit-transform.8s ease;-moz-transition:opacity.6s ease,-moz-transform.8s ease;-o-transition:opacity.6s ease,-o-transform.8s ease;transition:opacity.6s ease,-webkit-transform.8s ease;transition:opacity.6s ease,-moz-transform.8s ease;transition:opacity.6s ease,-o-transform.8s ease;transition:opacity.6s ease,transform.8s ease}.cst-ambient.jsx-61cca3b3e60ff6c1{opacity:0;-webkit-transition:opacity 1.4s ease.8s;-moz-transition:opacity 1.4s ease.8s;-o-transition:opacity 1.4s ease.8s;transition:opacity 1.4s ease.8s}.cst-leaf.jsx-61cca3b3e60ff6c1{opacity:0;-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transition:opacity.5s ease,-webkit-transform.55s cubic-bezier(.34,1.56,.64,1);-moz-transition:opacity.5s ease,-moz-transform.55s cubic-bezier(.34,1.56,.64,1);-o-transition:opacity.5s ease,-o-transform.55s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-webkit-transform.55s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-moz-transform.55s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,-o-transform.55s cubic-bezier(.34,1.56,.64,1);transition:opacity.5s ease,transform.55s cubic-bezier(.34,1.56,.64,1)}.cst-spore.jsx-61cca3b3e60ff6c1{-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}.cst-labels.jsx-61cca3b3e60ff6c1{position:absolute;inset:0;pointer-events:none}.cst-label.jsx-61cca3b3e60ff6c1{position:absolute;-webkit-transform:translate(-50%,-140%);-moz-transform:translate(-50%,-140%);-ms-transform:translate(-50%,-140%);-o-transform:translate(-50%,-140%);transform:translate(-50%,-140%);pointer-events:auto;text-decoration:none;background:rgba(10,16,27,.72);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(247,229,0,.35);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:8px 12px;min-width:150px;max-width:210px;opacity:0;-webkit-transition:opacity.6s ease,-webkit-transform.6s cubic-bezier(.34,1.56,.64,1);-moz-transition:opacity.6s ease,-moz-transform.6s cubic-bezier(.34,1.56,.64,1);-o-transition:opacity.6s ease,-o-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-webkit-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-moz-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-o-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,transform.6s cubic-bezier(.34,1.56,.64,1);-webkit-box-shadow:0 8px 24px rgba(0,0,0,.35);-moz-box-shadow:0 8px 24px rgba(0,0,0,.35);box-shadow:0 8px 24px rgba(0,0,0,.35)}.cst-label.left.jsx-61cca3b3e60ff6c1{-webkit-transform:translate(-92%,-120%);-moz-transform:translate(-92%,-120%);-ms-transform:translate(-92%,-120%);-o-transform:translate(-92%,-120%);transform:translate(-92%,-120%)}.cst-label.right.jsx-61cca3b3e60ff6c1{-webkit-transform:translate(-8%,-120%);-moz-transform:translate(-8%,-120%);-ms-transform:translate(-8%,-120%);-o-transform:translate(-8%,-120%);transform:translate(-8%,-120%)}.cst-label.jsx-61cca3b3e60ff6c1:hover{border-color:#f7e500;-webkit-box-shadow:0 10px 30px rgba(247,229,0,.25);-moz-box-shadow:0 10px 30px rgba(247,229,0,.25);box-shadow:0 10px 30px rgba(247,229,0,.25)}.cst-label-title.jsx-61cca3b3e60ff6c1{display:block;color:#fff;font-weight:800;font-size:14px;line-height:1.2}.cst-label-tags.jsx-61cca3b3e60ff6c1{display:block;color:#b9c1cf;font-size:10.5px;margin-top:4px;line-height:1.35}.grown.jsx-61cca3b3e60ff6c1 .cst-trunk.jsx-61cca3b3e60ff6c1{stroke-dashoffset:0}.grown.jsx-61cca3b3e60ff6c1 .cst-flare.jsx-61cca3b3e60ff6c1{opacity:1}.grown.jsx-61cca3b3e60ff6c1 .cst-branch.jsx-61cca3b3e60ff6c1{stroke-dashoffset:0}.grown.jsx-61cca3b3e60ff6c1 .cst-ground.jsx-61cca3b3e60ff6c1{opacity:1;-webkit-transform:scaleX(1);-moz-transform:scaleX(1);-ms-transform:scaleX(1);-o-transform:scaleX(1);transform:scaleX(1)}.grown.jsx-61cca3b3e60ff6c1 .cst-ambient.jsx-61cca3b3e60ff6c1{opacity:1}.grown.jsx-61cca3b3e60ff6c1 .cst-leaf.jsx-61cca3b3e60ff6c1{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-animation:sway 4.5s ease-in-out infinite;-moz-animation:sway 4.5s ease-in-out infinite;-o-animation:sway 4.5s ease-in-out infinite;animation:sway 4.5s ease-in-out infinite}.grown.jsx-61cca3b3e60ff6c1 .cst-label.jsx-61cca3b3e60ff6c1{opacity:1}.grown.jsx-61cca3b3e60ff6c1 .cst-label.left.jsx-61cca3b3e60ff6c1{-webkit-transform:translate(-92%,-100%);-moz-transform:translate(-92%,-100%);-ms-transform:translate(-92%,-100%);-o-transform:translate(-92%,-100%);transform:translate(-92%,-100%)}.grown.jsx-61cca3b3e60ff6c1 .cst-label.right.jsx-61cca3b3e60ff6c1{-webkit-transform:translate(-8%,-100%);-moz-transform:translate(-8%,-100%);-ms-transform:translate(-8%,-100%);-o-transform:translate(-8%,-100%);transform:translate(-8%,-100%)}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.jsx-61cca3b3e60ff6c1{-webkit-animation:rise 6s linear infinite;-moz-animation:rise 6s linear infinite;-o-animation:rise 6s linear infinite;animation:rise 6s linear infinite}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s1.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s2.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:1.6s;-moz-animation-delay:1.6s;-o-animation-delay:1.6s;animation-delay:1.6s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s3.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:2.4s;-moz-animation-delay:2.4s;-o-animation-delay:2.4s;animation-delay:2.4s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s4.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:3.2s;-moz-animation-delay:3.2s;-o-animation-delay:3.2s;animation-delay:3.2s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s5.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s6.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s7.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:2.8s;-moz-animation-delay:2.8s;-o-animation-delay:2.8s;animation-delay:2.8s}.grown.jsx-61cca3b3e60ff6c1 .cst-spore.s8.jsx-61cca3b3e60ff6c1{-webkit-animation-delay:3.6s;-moz-animation-delay:3.6s;-o-animation-delay:3.6s;animation-delay:3.6s}@-webkit-keyframes sway{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(2.5deg);transform:rotate(2.5deg)}}@-moz-keyframes sway{0%,100%{-moz-transform:rotate(0deg);transform:rotate(0deg)}50%{-moz-transform:rotate(2.5deg);transform:rotate(2.5deg)}}@-o-keyframes sway{0%,100%{-o-transform:rotate(0deg);transform:rotate(0deg)}50%{-o-transform:rotate(2.5deg);transform:rotate(2.5deg)}}@keyframes sway{0%,100%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(2.5deg);-moz-transform:rotate(2.5deg);-o-transform:rotate(2.5deg);transform:rotate(2.5deg)}}@-webkit-keyframes rise{0%{opacity:0;-webkit-transform:translateY(0)translateX(0);transform:translateY(0)translateX(0)}15%{opacity:.9}100%{opacity:0;-webkit-transform:translateY(-520px)translateX(30px);transform:translateY(-520px)translateX(30px)}}@-moz-keyframes rise{0%{opacity:0;-moz-transform:translateY(0)translateX(0);transform:translateY(0)translateX(0)}15%{opacity:.9}100%{opacity:0;-moz-transform:translateY(-520px)translateX(30px);transform:translateY(-520px)translateX(30px)}}@-o-keyframes rise{0%{opacity:0;-o-transform:translateY(0)translateX(0);transform:translateY(0)translateX(0)}15%{opacity:.9}100%{opacity:0;-o-transform:translateY(-520px)translateX(30px);transform:translateY(-520px)translateX(30px)}}@keyframes rise{0%{opacity:0;-webkit-transform:translateY(0)translateX(0);-moz-transform:translateY(0)translateX(0);-o-transform:translateY(0)translateX(0);transform:translateY(0)translateX(0)}15%{opacity:.9}100%{opacity:0;-webkit-transform:translateY(-520px)translateX(30px);-moz-transform:translateY(-520px)translateX(30px);-o-transform:translateY(-520px)translateX(30px);transform:translateY(-520px)translateX(30px)}}.cst-mobile.jsx-61cca3b3e60ff6c1{display:none}.cst-m-branch.jsx-61cca3b3e60ff6c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;text-decoration:none;opacity:0;-webkit-transform:translateY(24px);-moz-transform:translateY(24px);-ms-transform:translateY(24px);-o-transform:translateY(24px);transform:translateY(24px);-webkit-transition:opacity.6s ease,-webkit-transform.6s cubic-bezier(.34,1.56,.64,1);-moz-transition:opacity.6s ease,-moz-transform.6s cubic-bezier(.34,1.56,.64,1);-o-transition:opacity.6s ease,-o-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-webkit-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-moz-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,-o-transform.6s cubic-bezier(.34,1.56,.64,1);transition:opacity.6s ease,transform.6s cubic-bezier(.34,1.56,.64,1)}.grown.jsx-61cca3b3e60ff6c1 .cst-m-branch.jsx-61cca3b3e60ff6c1{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}.cst-m-stem.jsx-61cca3b3e60ff6c1{width:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:-webkit-linear-gradient(#7a5330,#f7e500);background:-moz-linear-gradient(#7a5330,#f7e500);background:-o-linear-gradient(#7a5330,#f7e500);background:linear-gradient(#7a5330,#f7e500);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cst-m-card.jsx-61cca3b3e60ff6c1{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;background:rgba(255,255,255,.03);border:1px solid rgba(247,229,0,.25);-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;padding:14px 16px;margin-bottom:14px}.cst-m-card.jsx-61cca3b3e60ff6c1 h3.jsx-61cca3b3e60ff6c1{margin:0 0 10px;color:#fff;font-size:16px;font-weight:800}.cst-m-leaves.jsx-61cca3b3e60ff6c1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px}.cst-m-leaf.jsx-61cca3b3e60ff6c1{background:-webkit-linear-gradient(315deg,#f7e500,#d8ab12);background:-moz-linear-gradient(315deg,#f7e500,#d8ab12);background:-o-linear-gradient(315deg,#f7e500,#d8ab12);background:linear-gradient(135deg,#f7e500,#d8ab12);color:#0a101b;font-size:12px;font-weight:700;padding:5px 11px;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;opacity:0;-webkit-transform:scale(.6);-moz-transform:scale(.6);-ms-transform:scale(.6);-o-transform:scale(.6);transform:scale(.6);-webkit-transition:opacity.4s ease,-webkit-transform.45s cubic-bezier(.34,1.56,.64,1);-moz-transition:opacity.4s ease,-moz-transform.45s cubic-bezier(.34,1.56,.64,1);-o-transition:opacity.4s ease,-o-transform.45s cubic-bezier(.34,1.56,.64,1);transition:opacity.4s ease,-webkit-transform.45s cubic-bezier(.34,1.56,.64,1);transition:opacity.4s ease,-moz-transform.45s cubic-bezier(.34,1.56,.64,1);transition:opacity.4s ease,-o-transform.45s cubic-bezier(.34,1.56,.64,1);transition:opacity.4s ease,transform.45s cubic-bezier(.34,1.56,.64,1)}.grown.jsx-61cca3b3e60ff6c1 .cst-m-leaf.jsx-61cca3b3e60ff6c1{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}@media(max-width:820px){.cst-tree.jsx-61cca3b3e60ff6c1{display:none}.cst-mobile.jsx-61cca3b3e60ff6c1{display:block}}@media(prefers-reduced-motion:reduce){.cst-trunk.jsx-61cca3b3e60ff6c1,.cst-branch.jsx-61cca3b3e60ff6c1,.cst-leaf.jsx-61cca3b3e60ff6c1,.cst-label.jsx-61cca3b3e60ff6c1,.cst-m-branch.jsx-61cca3b3e60ff6c1,.cst-m-leaf.jsx-61cca3b3e60ff6c1,.cst-ground.jsx-61cca3b3e60ff6c1,.cst-ambient.jsx-61cca3b3e60ff6c1{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important;-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreSolutionsTree);


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
                                            children: "Three specialized divisions plus a full hardware lineup — watch our capabilities branch out."
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