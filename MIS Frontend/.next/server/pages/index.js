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
 * Adapted from a Framer design: four hanging wooden signboard installations
 * scattered around a centered title. Each install = a wooden post + crossbeam,
 * a header board hanging by ropes, and a vertical chain of plank sub-services.
 * On scroll in: boards drop in, then gently swing like pendulums (per-plank
 * stagger). Pure CSS + IntersectionObserver (no framer-motion dependency).
 * Respects prefers-reduced-motion.
 */ const GROUPS = [
    {
        key: "digital",
        title: "Digital Services",
        href: "/digital-services",
        x: "0%",
        y: "2%",
        scale: 0.92,
        rotate: -3,
        dir: -1,
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
        x: "17%",
        y: "34%",
        scale: 0.8,
        rotate: 2,
        dir: 1,
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
        x: "65%",
        y: "34%",
        scale: 0.8,
        rotate: 2,
        dir: 1,
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
        x: "82%",
        y: "2%",
        scale: 0.92,
        rotate: -2,
        dir: -1,
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
const SignAssembly = ({ group , index , mobile  })=>{
    const dirClass = group.dir === 1 ? "pos" : "neg";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sa",
        style: {
            "--gi": index
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sa-post",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sa-beam",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: group.href,
                className: "sa-drop sa-headwrap",
                style: {
                    "--delay": `${index * 0.12}s`
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: `sa-swing sa-swing-head ${dirClass}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sa-rope sa-rope-l"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sa-rope sa-rope-r"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sa-board sa-header",
                            children: group.title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sa-planks",
                children: group.leaves.map((leaf, li)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: group.href,
                        className: "sa-drop sa-plankwrap",
                        style: {
                            "--delay": `${index * 0.12 + (li + 1) * 0.13}s`
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: `sa-swing sa-swing-plank ${li % 2 === 0 ? "pos" : "neg"}`,
                            style: {
                                "--sd": `${li * 0.09}s`,
                                "--dur": `${4.6 + li * 0.25}s`
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sa-rope sa-rope-l small"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sa-rope sa-rope-r small"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sa-board sa-plank",
                                    children: leaf
                                })
                            ]
                        })
                    }, leaf))
            })
        ]
    });
};
const CoreSolutionsSignposts = ()=>{
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
        const obs = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    setOn(true);
                    obs.disconnect();
                }
            });
        }, {
            threshold: 0.15
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: "jsx-3a69433632ac6e1d" + " " + `csx ${on ? "on" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-3a69433632ac6e1d" + " " + "csx-scene",
                children: [
                    GROUPS.map((g, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-group": g.key,
                            style: {
                                left: g.x,
                                top: g.y,
                                transform: `scale(${g.scale}) rotate(${g.rotate}deg)`
                            },
                            className: "jsx-3a69433632ac6e1d" + " " + "csx-group",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignAssembly, {
                                group: g,
                                index: i
                            })
                        }, g.key)),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-3a69433632ac6e1d" + " " + "csx-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-eyebrow",
                                children: "What We Offer"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-title",
                                children: "Core IT Solutions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-sub",
                                children: "Four divisions, every capability on the board — explore what we offer."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-3a69433632ac6e1d" + " " + "csx-mobile",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-3a69433632ac6e1d" + " " + "csx-center csx-center-m",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-eyebrow",
                                children: "What We Offer"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-title",
                                children: "Core IT Solutions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-3a69433632ac6e1d" + " " + "csx-sub",
                                children: "Four divisions, every capability on the board — explore what we offer."
                            })
                        ]
                    }),
                    GROUPS.map((g, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-3a69433632ac6e1d" + " " + "csx-mgroup",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SignAssembly, {
                                group: g,
                                index: i,
                                mobile: true
                            })
                        }, `m-${g.key}`))
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3a69433632ac6e1d",
                children: '.csx.jsx-3a69433632ac6e1d{position:relative;width:100%}.csx-scene.jsx-3a69433632ac6e1d{position:relative;width:100%;max-width:1200px;margin:0 auto;height:780px}.csx-group.jsx-3a69433632ac6e1d{position:absolute;-webkit-transform-origin:top center;-moz-transform-origin:top center;-ms-transform-origin:top center;-o-transform-origin:top center;transform-origin:top center}.csx-center.jsx-3a69433632ac6e1d{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:min(560px,42%);text-align:center;z-index:3;pointer-events:none}.csx-eyebrow.jsx-3a69433632ac6e1d{display:inline-block;color:#f7e500;font-weight:800;font-size:13px;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px}.csx-title.jsx-3a69433632ac6e1d{margin:0;color:#fff;font-size:clamp(30px,4vw,46px);font-weight:900;line-height:1.05;text-shadow:0 0 26px rgba(247,229,0,.25)}.csx-sub.jsx-3a69433632ac6e1d{margin:14px auto 0;max-width:42ch;color:#b9c1cf;font-size:15px;line-height:1.5}.csx-center-m.jsx-3a69433632ac6e1d{position:static;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;width:100%;margin-bottom:8px}.sa.jsx-3a69433632ac6e1d{position:relative;width:200px}.sa-post.jsx-3a69433632ac6e1d{position:absolute;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);top:0;width:16px;height:240px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:-webkit-linear-gradient(left,rgba(0,0,0,.4),rgba(255,255,255,.1)40%,rgba(0,0,0,.35)),-webkit-repeating-linear-gradient(top,rgba(0,0,0,.1)0 3px,transparent 3px 11px),-webkit-linear-gradient(top,#7a5330,#513718);background:-moz-linear-gradient(left,rgba(0,0,0,.4),rgba(255,255,255,.1)40%,rgba(0,0,0,.35)),-moz-repeating-linear-gradient(top,rgba(0,0,0,.1)0 3px,transparent 3px 11px),-moz-linear-gradient(top,#7a5330,#513718);background:-o-linear-gradient(left,rgba(0,0,0,.4),rgba(255,255,255,.1)40%,rgba(0,0,0,.35)),-o-repeating-linear-gradient(top,rgba(0,0,0,.1)0 3px,transparent 3px 11px),-o-linear-gradient(top,#7a5330,#513718);background:linear-gradient(90deg,rgba(0,0,0,.4),rgba(255,255,255,.1)40%,rgba(0,0,0,.35)),repeating-linear-gradient(180deg,rgba(0,0,0,.1)0 3px,transparent 3px 11px),linear-gradient(180deg,#7a5330,#513718);-webkit-box-shadow:inset 0 0 8px rgba(0,0,0,.4),2px 0 6px rgba(0,0,0,.35);-moz-box-shadow:inset 0 0 8px rgba(0,0,0,.4),2px 0 6px rgba(0,0,0,.35);box-shadow:inset 0 0 8px rgba(0,0,0,.4),2px 0 6px rgba(0,0,0,.35);z-index:0}.sa-beam.jsx-3a69433632ac6e1d{position:absolute;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);top:40px;width:178px;height:15px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:-webkit-linear-gradient(top,rgba(255,255,255,.16),rgba(0,0,0,.3)),-webkit-repeating-linear-gradient(left,rgba(0,0,0,.08)0 6px,transparent 6px 16px),-webkit-linear-gradient(left,#86633c,#6b4a29);background:-moz-linear-gradient(top,rgba(255,255,255,.16),rgba(0,0,0,.3)),-moz-repeating-linear-gradient(left,rgba(0,0,0,.08)0 6px,transparent 6px 16px),-moz-linear-gradient(left,#86633c,#6b4a29);background:-o-linear-gradient(top,rgba(255,255,255,.16),rgba(0,0,0,.3)),-o-repeating-linear-gradient(left,rgba(0,0,0,.08)0 6px,transparent 6px 16px),-o-linear-gradient(left,#86633c,#6b4a29);background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(0,0,0,.3)),repeating-linear-gradient(90deg,rgba(0,0,0,.08)0 6px,transparent 6px 16px),linear-gradient(90deg,#86633c,#6b4a29);-webkit-box-shadow:0 5px 10px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.18);-moz-box-shadow:0 5px 10px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.18);box-shadow:0 5px 10px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.18);z-index:1}.sa-drop.jsx-3a69433632ac6e1d{position:relative;z-index:2;display:block;text-decoration:none;opacity:0;-webkit-transform:translateY(-16px);-moz-transform:translateY(-16px);-ms-transform:translateY(-16px);-o-transform:translateY(-16px);transform:translateY(-16px)}.sa-headwrap.jsx-3a69433632ac6e1d{margin-top:54px}.sa-plankwrap.jsx-3a69433632ac6e1d{margin-top:22px}.on.jsx-3a69433632ac6e1d .sa-drop.jsx-3a69433632ac6e1d{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-webkit-transition:opacity.45s ease var(--delay),-webkit-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);-moz-transition:opacity.45s ease var(--delay),-moz-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);-o-transition:opacity.45s ease var(--delay),-o-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);transition:opacity.45s ease var(--delay),-webkit-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);transition:opacity.45s ease var(--delay),-moz-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);transition:opacity.45s ease var(--delay),-o-transform.8s cubic-bezier(.22,1,.36,1)var(--delay);transition:opacity.45s ease var(--delay),transform.8s cubic-bezier(.22,1,.36,1)var(--delay)}.sa-swing.jsx-3a69433632ac6e1d{position:relative;display:block;width:150px;margin:0 auto;-webkit-transform-origin:50%-10px;-moz-transform-origin:50%-10px;-ms-transform-origin:50%-10px;-o-transform-origin:50%-10px;transform-origin:50%-10px}.sa-swing-plank.jsx-3a69433632ac6e1d{width:132px}.on.jsx-3a69433632ac6e1d .sa-swing.jsx-3a69433632ac6e1d{-webkit-animation:swingPos var(--dur,5s)ease-in-out infinite;-moz-animation:swingPos var(--dur,5s)ease-in-out infinite;-o-animation:swingPos var(--dur,5s)ease-in-out infinite;animation:swingPos var(--dur,5s)ease-in-out infinite;-webkit-animation-delay:-webkit-calc(var(--delay) + .8s + var(--sd,0s));-moz-animation-delay:-moz-calc(var(--delay) + .8s + var(--sd,0s));-o-animation-delay:calc(var(--delay) + .8s + var(--sd,0s));animation-delay:-webkit-calc(var(--delay) + .8s + var(--sd,0s));animation-delay:-moz-calc(var(--delay) + .8s + var(--sd,0s));animation-delay:calc(var(--delay) + .8s + var(--sd,0s))}.on.jsx-3a69433632ac6e1d .sa-swing.neg.jsx-3a69433632ac6e1d{-webkit-animation-name:swingNeg;-moz-animation-name:swingNeg;-o-animation-name:swingNeg;animation-name:swingNeg}.on.jsx-3a69433632ac6e1d .sa-swing-head.jsx-3a69433632ac6e1d{-webkit-animation-duration:5.4s;-moz-animation-duration:5.4s;-o-animation-duration:5.4s;animation-duration:5.4s}@-webkit-keyframes swingPos{0%,100%{-webkit-transform:rotate(1.4deg);transform:rotate(1.4deg)}50%{-webkit-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}}@-moz-keyframes swingPos{0%,100%{-moz-transform:rotate(1.4deg);transform:rotate(1.4deg)}50%{-moz-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}}@-o-keyframes swingPos{0%,100%{-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}50%{-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}}@keyframes swingPos{0%,100%{-webkit-transform:rotate(1.4deg);-moz-transform:rotate(1.4deg);-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}50%{-webkit-transform:rotate(-1.4deg);-moz-transform:rotate(-1.4deg);-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}}@-webkit-keyframes swingNeg{0%,100%{-webkit-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-webkit-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@-moz-keyframes swingNeg{0%,100%{-moz-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-moz-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@-o-keyframes swingNeg{0%,100%{-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}}@keyframes swingNeg{0%,100%{-webkit-transform:rotate(-1.4deg);-moz-transform:rotate(-1.4deg);-o-transform:rotate(-1.4deg);transform:rotate(-1.4deg)}50%{-webkit-transform:rotate(1.4deg);-moz-transform:rotate(1.4deg);-o-transform:rotate(1.4deg);transform:rotate(1.4deg)}}.sa-rope.jsx-3a69433632ac6e1d{position:absolute;top:-20px;width:4px;height:22px;-webkit-border-radius:99px;-moz-border-radius:99px;border-radius:99px;background:-webkit-linear-gradient(top,#e4d29a,#9b7c45);background:-moz-linear-gradient(top,#e4d29a,#9b7c45);background:-o-linear-gradient(top,#e4d29a,#9b7c45);background:linear-gradient(180deg,#e4d29a,#9b7c45);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.35);-moz-box-shadow:0 1px 2px rgba(0,0,0,.35);box-shadow:0 1px 2px rgba(0,0,0,.35);z-index:3}.sa-rope.small.jsx-3a69433632ac6e1d{height:16px;top:-14px;width:3px}.sa-rope-l.jsx-3a69433632ac6e1d{left:26px}.sa-rope-r.jsx-3a69433632ac6e1d{right:26px}.sa-swing-plank.jsx-3a69433632ac6e1d .sa-rope-l.jsx-3a69433632ac6e1d{left:22px}.sa-swing-plank.jsx-3a69433632ac6e1d .sa-rope-r.jsx-3a69433632ac6e1d{right:22px}.sa-board.jsx-3a69433632ac6e1d{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px;background:-webkit-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.22)),-webkit-repeating-linear-gradient(79deg,rgba(255,255,255,.06)0 2px,rgba(0,0,0,.05)2px 4px),-webkit-linear-gradient(330deg,#8a5a2b,#6e4521 50%,#553515);background:-moz-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.22)),-moz-repeating-linear-gradient(79deg,rgba(255,255,255,.06)0 2px,rgba(0,0,0,.05)2px 4px),-moz-linear-gradient(330deg,#8a5a2b,#6e4521 50%,#553515);background:-o-linear-gradient(top,rgba(255,255,255,.14),rgba(0,0,0,.22)),-o-repeating-linear-gradient(79deg,rgba(255,255,255,.06)0 2px,rgba(0,0,0,.05)2px 4px),-o-linear-gradient(330deg,#8a5a2b,#6e4521 50%,#553515);background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(0,0,0,.22)),repeating-linear-gradient(11deg,rgba(255,255,255,.06)0 2px,rgba(0,0,0,.05)2px 4px),linear-gradient(120deg,#8a5a2b,#6e4521 50%,#553515);-webkit-box-shadow:0 9px 18px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.3);-moz-box-shadow:0 9px 18px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.3);box-shadow:0 9px 18px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.14),inset 0 -3px 6px rgba(0,0,0,.3)}.sa-board.jsx-3a69433632ac6e1d::before,.sa-board.jsx-3a69433632ac6e1d::after{content:"";position:absolute;top:7px;width:5px;height:5px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-radial-gradient(35%30%,circle,#cfd6de,#5b636c);background:-moz-radial-gradient(35%30%,circle,#cfd6de,#5b636c);background:-o-radial-gradient(35%30%,circle,#cfd6de,#5b636c);background:radial-gradient(circle at 35%30%,#cfd6de,#5b636c);-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.4);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.4);box-shadow:0 0 0 1px rgba(0,0,0,.4)}.sa-board.jsx-3a69433632ac6e1d::before{left:8px}.sa-board.jsx-3a69433632ac6e1d::after{right:8px}.sa-header.jsx-3a69433632ac6e1d{height:62px;padding:6px 10px;color:#fff;font-weight:800;font-size:14px;line-height:1.15;text-shadow:0 1px 2px rgba(0,0,0,.6);border:2px solid rgba(247,229,0,.85);-webkit-box-shadow:0 10px 22px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15);-moz-box-shadow:0 10px 22px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15);box-shadow:0 10px 22px rgba(0,0,0,.5),0 0 18px rgba(247,229,0,.18),inset 0 1px 0 rgba(255,255,255,.15)}.sa-plank.jsx-3a69433632ac6e1d{height:40px;padding:4px 8px;color:#f6ead0;font-weight:700;font-size:11.5px;letter-spacing:.02em;text-shadow:0 1px 2px rgba(0,0,0,.55);border:1px solid rgba(247,229,0,.4)}.sa-drop.jsx-3a69433632ac6e1d:hover .sa-board.jsx-3a69433632ac6e1d{-webkit-filter:brightness(1.08);filter:brightness(1.08);-webkit-box-shadow:0 12px 26px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.3);-moz-box-shadow:0 12px 26px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.3);box-shadow:0 12px 26px rgba(0,0,0,.5),0 0 20px rgba(247,229,0,.3)}.csx-mobile.jsx-3a69433632ac6e1d{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:30px}.csx-mgroup.jsx-3a69433632ac6e1d{-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9);transform:scale(.9)}@media(max-width:1199px){.csx-scene.jsx-3a69433632ac6e1d{height:760px}.csx-group[data-group="digital"].jsx-3a69433632ac6e1d{left:0%!important;top:8%!important;-webkit-transform:scale(.86)rotate(-2deg)!important;-moz-transform:scale(.86)rotate(-2deg)!important;-ms-transform:scale(.86)rotate(-2deg)!important;-o-transform:scale(.86)rotate(-2deg)!important;transform:scale(.86)rotate(-2deg)!important}.csx-group[data-group="corporate"].jsx-3a69433632ac6e1d{left:4%!important;top:54%!important;-webkit-transform:scale(.8)rotate(1deg)!important;-moz-transform:scale(.8)rotate(1deg)!important;-ms-transform:scale(.8)rotate(1deg)!important;-o-transform:scale(.8)rotate(1deg)!important;transform:scale(.8)rotate(1deg)!important}.csx-group[data-group="maintenance"].jsx-3a69433632ac6e1d{left:70%!important;top:8%!important;-webkit-transform:scale(.86)rotate(2deg)!important;-moz-transform:scale(.86)rotate(2deg)!important;-ms-transform:scale(.86)rotate(2deg)!important;-o-transform:scale(.86)rotate(2deg)!important;transform:scale(.86)rotate(2deg)!important}.csx-group[data-group="procurement"].jsx-3a69433632ac6e1d{left:72%!important;top:56%!important;-webkit-transform:scale(.8)rotate(-1deg)!important;-moz-transform:scale(.8)rotate(-1deg)!important;-ms-transform:scale(.8)rotate(-1deg)!important;-o-transform:scale(.8)rotate(-1deg)!important;transform:scale(.8)rotate(-1deg)!important}}@media(max-width:900px){.csx-scene.jsx-3a69433632ac6e1d{display:none}.csx-mobile.jsx-3a69433632ac6e1d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}@media(prefers-reduced-motion:reduce){.sa-drop.jsx-3a69433632ac6e1d{opacity:1!important;-webkit-transform:none!important;-moz-transform:none!important;-ms-transform:none!important;-o-transform:none!important;transform:none!important;-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;transition:none!important}.on.jsx-3a69433632ac6e1d .sa-swing.jsx-3a69433632ac6e1d{-webkit-animation:none!important;-moz-animation:none!important;-o-animation:none!important;animation:none!important}}'
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