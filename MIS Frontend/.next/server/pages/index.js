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
 * CoreSolutionsSignposts
 * Four rustic wooden sign-posts standing in a row. Each post has a header
 * board (the division) mounted at top, and beneath it the sub-services hang
 * as wooden planks — each tied to the one above by two ropes, forming a
 * vertical hanging chain (per the client's drawing).
 *
 * On scroll into view: header boards settle, then each plank drops and swings
 * down its chain (staggered). Idle: gentle rope sway.
 *
 * Pure CSS/SVG wood + rope. No images. Respects prefers-reduced-motion.
 */ const COLUMNS = [
    {
        key: "digital",
        title: "Digital Services",
        href: "/digital-services",
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
// small SVG for a pair of ropes connecting two boards
const RopePair = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "cs-rope",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            viewBox: "0 0 60 26",
            preserveAspectRatio: "none",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "ropeG",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0%",
                                stopColor: "#d8b26a"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "50%",
                                stopColor: "#b8894a"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "100%",
                                stopColor: "#d8b26a"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M10,1 C7,10 7,16 10,25",
                    fill: "none",
                    stroke: "url(#ropeG)",
                    strokeWidth: "3",
                    strokeLinecap: "round"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M50,1 C53,10 53,16 50,25",
                    fill: "none",
                    stroke: "url(#ropeG)",
                    strokeWidth: "3",
                    strokeLinecap: "round"
                })
            ]
        })
    });
const CoreSolutionsSignposts = ()=>{
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
            threshold: 0.18
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: wrapRef,
        className: "jsx-3d775d6f2c16690f" + " " + `cs-wrap ${on ? "on" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-3d775d6f2c16690f" + " " + "cs-row",
                children: COLUMNS.map((col, ci)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-3d775d6f2c16690f" + " " + "cs-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                className: "jsx-3d775d6f2c16690f" + " " + "cs-post"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                className: "jsx-3d775d6f2c16690f" + " " + "cs-beam"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                className: "jsx-3d775d6f2c16690f" + " " + "cs-rope cs-rope-head",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    viewBox: "0 0 120 22",
                                    preserveAspectRatio: "none",
                                    className: "jsx-3d775d6f2c16690f",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M28,1 C25,9 25,14 28,21",
                                            fill: "none",
                                            stroke: "#c99a54",
                                            strokeWidth: "3.2",
                                            strokeLinecap: "round",
                                            className: "jsx-3d775d6f2c16690f"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M92,1 C95,9 95,14 92,21",
                                            fill: "none",
                                            stroke: "#c99a54",
                                            strokeWidth: "3.2",
                                            strokeLinecap: "round",
                                            className: "jsx-3d775d6f2c16690f"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: col.href,
                                style: {
                                    "--i": 0,
                                    "--delay": `${ci * 0.12}s`
                                },
                                className: "jsx-3d775d6f2c16690f" + " " + "cs-board cs-header",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-3d775d6f2c16690f" + " " + "cs-board-face",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-3d775d6f2c16690f" + " " + "cs-header-title",
                                        children: col.title
                                    })
                                })
                            }),
                            col.leaves.map((leaf, li)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RopePair, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: col.href,
                                            style: {
                                                "--i": li + 1,
                                                "--delay": `${ci * 0.12 + (li + 1) * 0.14}s`
                                            },
                                            className: "jsx-3d775d6f2c16690f" + " " + "cs-board cs-plank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-3d775d6f2c16690f" + " " + "cs-board-face",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-3d775d6f2c16690f" + " " + "cs-plank-text",
                                                    children: leaf
                                                })
                                            })
                                        })
                                    ]
                                }, leaf))
                        ]
                    }, col.key))
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3d775d6f2c16690f",
                children: '.cs-wrap.jsx-3d775d6f2c16690f{width:100%;padding:8px 0 10px}.cs-row.jsx-3d775d6f2c16690f{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;max-width:1080px;margin:0 auto;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.cs-col.jsx-3d775d6f2c16690f{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:14px}.cs-post.jsx-3d775d6f2c16690f{position:absolute;top:0;bottom:26px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);width:16px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:-webkit-linear-gradient(left,rgba(0,0,0,.35),rgba(255,255,255,.08)35%,rgba(0,0,0,.3)),-webkit-linear-gradient(top,#6b4a29,#4d3418);background:-moz-linear-gradient(left,rgba(0,0,0,.35),rgba(255,255,255,.08)35%,rgba(0,0,0,.3)),-moz-linear-gradient(top,#6b4a29,#4d3418);background:-o-linear-gradient(left,rgba(0,0,0,.35),rgba(255,255,255,.08)35%,rgba(0,0,0,.3)),-o-linear-gradient(top,#6b4a29,#4d3418);background:linear-gradient(90deg,rgba(0,0,0,.35),rgba(255,255,255,.08)35%,rgba(0,0,0,.3)),linear-gradient(180deg,#6b4a29,#4d3418);-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.3),2px 0 6px rgba(0,0,0,.4);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.3),2px 0 6px rgba(0,0,0,.4);box-shadow:0 0 0 1px rgba(0,0,0,.3),2px 0 6px rgba(0,0,0,.4);z-index:0}.cs-post.jsx-3d775d6f2c16690f::after{content:"";position:absolute;inset:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:-webkit-repeating-linear-gradient(top,rgba(0,0,0,.12)0 2px,transparent 2px 9px);background:-moz-repeating-linear-gradient(top,rgba(0,0,0,.12)0 2px,transparent 2px 9px);background:-o-repeating-linear-gradient(top,rgba(0,0,0,.12)0 2px,transparent 2px 9px);background:repeating-linear-gradient(180deg,rgba(0,0,0,.12)0 2px,transparent 2px 9px);opacity:.5}.cs-beam.jsx-3d775d6f2c16690f{position:relative;z-index:1;width:82%;height:16px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background:-webkit-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.28)),-webkit-linear-gradient(left,#7a5330,#6b4a29);background:-moz-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.28)),-moz-linear-gradient(left,#7a5330,#6b4a29);background:-o-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.28)),-o-linear-gradient(left,#7a5330,#6b4a29);background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(0,0,0,.28)),linear-gradient(90deg,#7a5330,#6b4a29);-webkit-box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.15);-moz-box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.15);box-shadow:0 3px 8px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.15);margin-bottom:-2px}.cs-rope.jsx-3d775d6f2c16690f{position:relative;z-index:1;width:100%;height:22px;display:block}.cs-rope.jsx-3d775d6f2c16690f svg.jsx-3d775d6f2c16690f{width:100%;height:100%;overflow:visible}.cs-rope-head.jsx-3d775d6f2c16690f{height:20px}.cs-board.jsx-3d775d6f2c16690f{position:relative;z-index:2;width:100%;text-decoration:none;display:block;-webkit-transform-origin:top center;-moz-transform-origin:top center;-ms-transform-origin:top center;-o-transform-origin:top center;transform-origin:top center;opacity:0;-webkit-transform:translateY(-22px)rotate(0deg);-moz-transform:translateY(-22px)rotate(0deg);-ms-transform:translateY(-22px)rotate(0deg);-o-transform:translateY(-22px)rotate(0deg);transform:translateY(-22px)rotate(0deg)}.cs-board-face.jsx-3d775d6f2c16690f{position:relative;display:block;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:10px 12px;text-align:center;background:-webkit-linear-gradient(top,rgba(255,255,255,.1),rgba(0,0,0,.18)),-webkit-repeating-linear-gradient(left,#7a5836 0 14px,#6f4f30 14px 28px);background:-moz-linear-gradient(top,rgba(255,255,255,.1),rgba(0,0,0,.18)),-moz-repeating-linear-gradient(left,#7a5836 0 14px,#6f4f30 14px 28px);background:-o-linear-gradient(top,rgba(255,255,255,.1),rgba(0,0,0,.18)),-o-repeating-linear-gradient(left,#7a5836 0 14px,#6f4f30 14px 28px);background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(0,0,0,.18)),repeating-linear-gradient(90deg,#7a5836 0 14px,#6f4f30 14px 28px);border:1px solid#3f2c17;-webkit-box-shadow:0 6px 16px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 4px rgba(0,0,0,.3);-moz-box-shadow:0 6px 16px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 4px rgba(0,0,0,.3);box-shadow:0 6px 16px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.12),inset 0 -2px 4px rgba(0,0,0,.3)}.cs-board-face.jsx-3d775d6f2c16690f::before,.cs-board-face.jsx-3d775d6f2c16690f::after{content:"";position:absolute;top:6px;width:5px;height:5px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-radial-gradient(35%30%,circle,#c7ced6,#5b636c);background:-moz-radial-gradient(35%30%,circle,#c7ced6,#5b636c);background:-o-radial-gradient(35%30%,circle,#c7ced6,#5b636c);background:radial-gradient(circle at 35%30%,#c7ced6,#5b636c);-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.4);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.4);box-shadow:0 0 0 1px rgba(0,0,0,.4)}.cs-board-face.jsx-3d775d6f2c16690f::before{left:8px}.cs-board-face.jsx-3d775d6f2c16690f::after{right:8px}.cs-header.jsx-3d775d6f2c16690f .cs-board-face.jsx-3d775d6f2c16690f{background:-webkit-linear-gradient(top,rgba(255,255,255,.12),rgba(0,0,0,.2)),-webkit-repeating-linear-gradient(left,#86633c 0 16px,#78562f 16px 32px);background:-moz-linear-gradient(top,rgba(255,255,255,.12),rgba(0,0,0,.2)),-moz-repeating-linear-gradient(left,#86633c 0 16px,#78562f 16px 32px);background:-o-linear-gradient(top,rgba(255,255,255,.12),rgba(0,0,0,.2)),-o-repeating-linear-gradient(left,#86633c 0 16px,#78562f 16px 32px);background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(0,0,0,.2)),repeating-linear-gradient(90deg,#86633c 0 16px,#78562f 16px 32px);border:2px solid#f7e500;-webkit-box-shadow:0 8px 20px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15);-moz-box-shadow:0 8px 20px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15);box-shadow:0 8px 20px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15);padding:13px 12px}.cs-header-title.jsx-3d775d6f2c16690f{color:#fff;font-weight:900;font-size:15px;line-height:1.2;text-shadow:0 1px 2px rgba(0,0,0,.6);letter-spacing:.2px}.cs-plank-text.jsx-3d775d6f2c16690f{color:#f8ecd0;font-weight:700;font-size:12.5px;text-shadow:0 1px 2px rgba(0,0,0,.55)}.cs-board.jsx-3d775d6f2c16690f:hover .cs-board-face.jsx-3d775d6f2c16690f{-webkit-filter:brightness(1.08);filter:brightness(1.08);-webkit-box-shadow:0 10px 24px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.28);-moz-box-shadow:0 10px 24px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.28);box-shadow:0 10px 24px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.28)}.on.jsx-3d775d6f2c16690f .cs-board.jsx-3d775d6f2c16690f{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity.45s ease var(--delay),-webkit-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);-moz-transition:opacity.45s ease var(--delay),-moz-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);-o-transition:opacity.45s ease var(--delay),-o-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);transition:opacity.45s ease var(--delay),-webkit-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);transition:opacity.45s ease var(--delay),-moz-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);transition:opacity.45s ease var(--delay),-o-transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay);transition:opacity.45s ease var(--delay),transform.75s cubic-bezier(.34,1.5,.5,1)var(--delay)}.on.jsx-3d775d6f2c16690f .cs-board-face.jsx-3d775d6f2c16690f{-webkit-animation:cs-sway 5s ease-in-out infinite;-moz-animation:cs-sway 5s ease-in-out infinite;-o-animation:cs-sway 5s ease-in-out infinite;animation:cs-sway 5s ease-in-out infinite;-webkit-animation-delay:-webkit-calc(var(--delay) + .75s);-moz-animation-delay:-moz-calc(var(--delay) + .75s);-o-animation-delay:calc(var(--delay) + .75s);animation-delay:-webkit-calc(var(--delay) + .75s);animation-delay:-moz-calc(var(--delay) + .75s);animation-delay:calc(var(--delay) + .75s);-webkit-transform-origin:top center;-moz-transform-origin:top center;-ms-transform-origin:top center;-o-transform-origin:top center;transform-origin:top center}.on.jsx-3d775d6f2c16690f .cs-board.jsx-3d775d6f2c16690f:nth-child(4n+1) .cs-board-face.jsx-3d775d6f2c16690f{-webkit-animation-name:cs-sway-alt;-moz-animation-name:cs-sway-alt;-o-animation-name:cs-sway-alt;animation-name:cs-sway-alt}@-webkit-keyframes cs-sway{0%,100%{-webkit-transform:rotate(-1deg);transform:rotate(-1deg)}50%{-webkit-transform:rotate(1deg);transform:rotate(1deg)}}@-moz-keyframes cs-sway{0%,100%{-moz-transform:rotate(-1deg);transform:rotate(-1deg)}50%{-moz-transform:rotate(1deg);transform:rotate(1deg)}}@-o-keyframes cs-sway{0%,100%{-o-transform:rotate(-1deg);transform:rotate(-1deg)}50%{-o-transform:rotate(1deg);transform:rotate(1deg)}}@keyframes cs-sway{0%,100%{-webkit-transform:rotate(-1deg);-moz-transform:rotate(-1deg);-o-transform:rotate(-1deg);transform:rotate(-1deg)}50%{-webkit-transform:rotate(1deg);-moz-transform:rotate(1deg);-o-transform:rotate(1deg);transform:rotate(1deg)}}@-webkit-keyframes cs-sway-alt{0%,100%{-webkit-transform:rotate(1deg);transform:rotate(1deg)}50%{-webkit-transform:rotate(-1deg);transform:rotate(-1deg)}}@-moz-keyframes cs-sway-alt{0%,100%{-moz-transform:rotate(1deg);transform:rotate(1deg)}50%{-moz-transform:rotate(-1deg);transform:rotate(-1deg)}}@-o-keyframes cs-sway-alt{0%,100%{-o-transform:rotate(1deg);transform:rotate(1deg)}50%{-o-transform:rotate(-1deg);transform:rotate(-1deg)}}@keyframes cs-sway-alt{0%,100%{-webkit-transform:rotate(1deg);-moz-transform:rotate(1deg);-o-transform:rotate(1deg);transform:rotate(1deg)}50%{-webkit-transform:rotate(-1deg);-moz-transform:rotate(-1deg);-o-transform:rotate(-1deg);transform:rotate(-1deg)}}.cs-rope.jsx-3d775d6f2c16690f{opacity:0}.on.jsx-3d775d6f2c16690f .cs-rope.jsx-3d775d6f2c16690f{opacity:1;-webkit-transition:opacity.4s ease;-moz-transition:opacity.4s ease;-o-transition:opacity.4s ease;transition:opacity.4s ease}@media(max-width:900px){.cs-row.jsx-3d775d6f2c16690f{grid-template-columns:repeat(2,1fr);gap:18px}}@media(max-width:520px){.cs-row.jsx-3d775d6f2c16690f{grid-template-columns:1fr;gap:16px;max-width:320px}}@media(prefers-reduced-motion:reduce){.cs-board.jsx-3d775d6f2c16690f{opacity:1!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;transform:none!important;-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important;-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}.cs-rope.jsx-3d775d6f2c16690f{opacity:1!important}}'
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoreSolutionsSignposts);


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
                                            children: "Four divisions, every capability on the board — explore what we offer."
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