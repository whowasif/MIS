(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,7174];
exports.modules = {

/***/ 3490:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 3490;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 8632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6274);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9754);



const INK = "#f3f4f6";
const GLITCH_YELLOW = "#f7e500";
const GLITCH_CYAN = "#00c2e0";
const GLITCH_MAGENTA = "#e11d74";
const ROB_X = [
    1,
    0.9986,
    0.9954,
    0.99,
    0.9822,
    0.973,
    0.96,
    0.9427,
    0.9216,
    0.8962,
    0.8679,
    0.835,
    0.7986,
    0.7597,
    0.7186,
    0.6732,
    0.6213,
    0.5722,
    0.5322
];
const ROB_Y = [
    0,
    0.062,
    0.124,
    0.186,
    0.248,
    0.31,
    0.372,
    0.434,
    0.4958,
    0.5571,
    0.6176,
    0.6769,
    0.7346,
    0.7903,
    0.8435,
    0.8936,
    0.9394,
    0.9761,
    1
];
let landCache = null;
const decodeArc = (raw, transform, reverse)=>{
    const { scale , translate  } = transform;
    let x = 0;
    let y = 0;
    const pts = raw.map(([dx, dy])=>{
        x += dx;
        y += dy;
        return [
            x * scale[0] + translate[0],
            y * scale[1] + translate[1]
        ];
    });
    return reverse ? pts.slice().reverse() : pts;
};
const ringFromArcs = (topology, indexes)=>{
    const pts = [];
    indexes.forEach((index, i)=>{
        const reverse = index < 0;
        const decoded = decodeArc(topology.arcs[reverse ? ~index : index], topology.transform, reverse);
        pts.push(...i ? decoded.slice(1) : decoded);
    });
    return pts;
};
const robinson = (lon, lat)=>{
    const alat = Math.min(90, Math.abs(lat));
    const i = Math.min(17, Math.floor(alat / 5));
    const f = alat / 5 - i;
    const xk = ROB_X[i] + f * (ROB_X[i + 1] - ROB_X[i]);
    const yk = ROB_Y[i] + f * (ROB_Y[i + 1] - ROB_Y[i]);
    return [
        0.8487 * xk * (lon * Math.PI / 180),
        1.3523 * yk * (lat < 0 ? -1 : 1)
    ];
};
const loadLand = async ()=>{
    if (landCache) return landCache;
    const topology = await (await fetch("/land-110m.json")).json();
    const multi = topology.objects.land.geometries[0].arcs;
    landCache = multi.map((polygon)=>polygon.map((ring)=>ringFromArcs(topology, ring)));
    return landCache;
};
const toScreen = (polygons, w, h)=>{
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const projected = [];
    polygons.forEach((rings)=>{
        const next = rings.map((ring)=>{
            const pts = [];
            ring.forEach(([lon, lat])=>{
                if (lat < -58) return;
                const [x, y] = robinson(lon, lat);
                pts.push([
                    x,
                    y
                ]);
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            });
            return pts;
        }).filter((ring)=>ring.length > 3);
        if (next.length) projected.push(next);
    });
    const s = Math.min(w / (maxX - minX), h / (maxY - minY)) * 0.96;
    const ox = (w - (maxX - minX) * s) / 2 - minX * s;
    const oy = (h - (maxY - minY) * s) / 2 + maxY * s;
    return projected.map((rings)=>rings.map((ring)=>ring.map(([x, y])=>[
                    x * s + ox,
                    oy - y * s
                ])));
};
const paintMask = (polygons, w, h)=>{
    const screen = toScreen(polygons, w, h);
    const mask = document.createElement("canvas");
    mask.width = w;
    mask.height = h;
    const ctx = mask.getContext("2d");
    ctx.fillStyle = "#000";
    screen.forEach((rings)=>{
        ctx.beginPath();
        rings.forEach((ring)=>{
            let lastX = null;
            let wrapped = false;
            ring.forEach(([x, y], i)=>{
                if (i === 0 || lastX !== null && Math.abs(x - lastX) > w * 0.35) {
                    if (i) wrapped = true;
                    ctx.moveTo(x, y);
                } else ctx.lineTo(x, y);
                lastX = x;
            });
            if (!wrapped) ctx.closePath();
        });
        ctx.fill(rings.length > 1 ? "evenodd" : "nonzero");
    });
    return ctx.getImageData(0, 0, w, h).data;
};
const landAt = (data, w, h, x, y)=>{
    const px = Math.min(w - 1, Math.max(0, Math.round(x)));
    const py = Math.min(h - 1, Math.max(0, Math.round(y)));
    return data[(py * w + px) * 4 + 3] >= 40;
};
const buildCells = (polygons, cssW, cssH)=>{
    const mw = Math.round(cssW);
    const mh = Math.round(cssH);
    const data = paintMask(polygons, mw, mh);
    const compact = cssW < 420;
    const colW = compact ? 4.05 : 4.35;
    const rowH = compact ? 4.85 : 5.15;
    const cols = Math.floor(cssW / colW);
    const rows = Math.floor(cssH / rowH);
    const cells = [];
    for(let r = 0; r < rows; r += 1){
        for(let c = 0; c < cols; c += 1){
            const x = (c + 0.5) * colW;
            const y = (r + 0.5) * rowH;
            if (!landAt(data, mw, mh, x, y) && !landAt(data, mw, mh, x + 1.1, y) && !landAt(data, mw, mh, x, y + 1.1)) continue;
            const i = cells.length;
            cells.push({
                x,
                y,
                bit: (i * 7 + 3) % 2,
                hot: 0
            });
        }
    }
    return {
        cells,
        compact
    };
};
const paintFrame = (canvas, model, glitch, now)=>{
    const { cells , compact , cssW , cssH , dpr  } = model;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.font = `700 ${compact ? 7.4 : 8.2}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for(let i = 0; i < cells.length; i += 1){
        const cell = cells[i];
        let x = cell.x;
        let color = INK;
        if (glitch && cell.y >= glitch.y && cell.y <= glitch.y + glitch.h) {
            x += glitch.dx;
            color = i % 5 === 0 ? GLITCH_CYAN : GLITCH_YELLOW;
        } else if (glitch && glitch.tear && Math.abs(cell.y - glitch.tearY) < 4) {
            x -= glitch.dx;
            color = GLITCH_MAGENTA;
        } else if (cell.hot > now) {
            color = GLITCH_YELLOW;
        }
        ctx.fillStyle = color;
        ctx.fillText(cell.bit ? "1" : "0", x, cell.y);
    }
};
const HeroWorldMap = ()=>{
    const wrap = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const inView = (0,motion_react__WEBPACK_IMPORTED_MODULE_2__/* .useInView */ .Y)(wrap, {
        amount: 0.2
    });
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_3__/* .useReducedMotion */ .J)();
    const live = Boolean(inView && reduce === false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const node = canvas.current;
        if (!node) return undefined;
        let dead = false;
        let raf = 0;
        let resizeTimer = 0;
        let lastFlip = 0;
        let nextGlitch = 900;
        let glitch = null;
        const sizeCanvas = ()=>{
            const cssW = node.clientWidth || 640;
            const cssH = node.clientHeight || Math.round(cssW * 0.5);
            if (cssW < 40 || cssH < 40) return null;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            node.width = Math.round(cssW * dpr);
            node.height = Math.round(cssH * dpr);
            return {
                cssW,
                cssH,
                dpr
            };
        };
        const rebuild = ()=>{
            const sized = sizeCanvas();
            if (!sized) return Promise.resolve();
            return loadLand().then((polygons)=>{
                if (dead) return;
                model.current = {
                    ...buildCells(polygons, sized.cssW, sized.cssH),
                    ...sized
                };
                paintFrame(node, model.current, null, 0);
            });
        };
        const tick = (now)=>{
            if (dead) return;
            const current = model.current;
            if (current && live) {
                if (now - lastFlip > 70) {
                    lastFlip = now;
                    const flips = Math.max(10, Math.round(current.cells.length * 0.03));
                    for(let n = 0; n < flips; n += 1){
                        const i = Math.floor(Math.random() * current.cells.length);
                        current.cells[i].bit ^= 1;
                        if (n < 9) current.cells[i].hot = now + 180;
                    }
                }
                if (!glitch && now > nextGlitch) {
                    glitch = {
                        y: 18 + Math.random() * (current.cssH - 48),
                        h: 10 + Math.random() * 16,
                        dx: (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * 9),
                        tear: Math.random() > 0.4,
                        tearY: 18 + Math.random() * (current.cssH - 36),
                        until: now + 90 + Math.random() * 70
                    };
                    nextGlitch = now + 1100 + Math.random() * 1600;
                }
                if (glitch && now > glitch.until) glitch = null;
                paintFrame(node, current, glitch, now);
            }
            raf = window.requestAnimationFrame(tick);
        };
        rebuild().then(()=>{
            if (!dead && live) raf = window.requestAnimationFrame(tick);
        }).catch(()=>{});
        const ro = new ResizeObserver(()=>{
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(()=>{
                rebuild().catch(()=>{});
            }, 60);
        });
        ro.observe(node);
        if (wrap.current) ro.observe(wrap.current);
        return ()=>{
            dead = true;
            window.clearTimeout(resizeTimer);
            window.cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, [
        live
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "hero-world",
        "aria-hidden": "true",
        ref: wrap,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
            className: "hero-world-canvas",
            ref: canvas
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroWorldMap);


/***/ }),

/***/ 1910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8023);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8411);





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
        })
};
const PILLARS = [
    {
        key: "digital",
        type: "digi_services",
        index: "01",
        title: "Digital Services",
        tagline: "Web, software, apps, and security for teams that ship.",
        href: "/digital-services",
        Icon: Icon.browser,
        fallback: [
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
        type: "bus_corp_sol",
        index: "02",
        title: "Business & Corporate",
        tagline: "Hardware, networking, and site infrastructure at scale.",
        href: "/enterprise-solutions",
        Icon: Icon.crown,
        fallback: [
            "IT Equipment",
            "Security Systems",
            "Office Equipment",
            "Networking",
            "Server Setup",
            "Power Solutions"
        ]
    },
    {
        key: "maintenance",
        type: "service_maintenance",
        index: "03",
        title: "Maintenance & Support",
        tagline: "Contracts, repair, install, and remote response.",
        href: "/maintenance-support",
        Icon: Icon.wrench,
        fallback: [
            "AMC Contracts",
            "On-call Repair",
            "Installation",
            "Troubleshooting",
            "Remote Support"
        ]
    }, 
];
const truncate = (text, max = 96)=>{
    const value = String(text || "").trim();
    if (value.length <= max) return value;
    return `${value.slice(0, max - 1).trim()}…`;
};
const CapabilityMap = ({ featuredServices =[]  })=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_4__/* .useReducedMotion */ .J)();
    const { 0: openKey , 1: setOpenKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(PILLARS[0].key);
    const item = (0,_homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .motionState */ .RK)(reduce);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-caps",
        id: "core-services",
        "aria-labelledby": "hm-caps-title",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.div */ .E.div, {
            className: "hm-caps-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .fadeUp */ .pB,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "hm-section-head hm-section-head-left hm-caps-head",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hm-eyebrow",
                            children: "What we offer"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            id: "hm-caps-title",
                            className: "hm-section-title",
                            children: [
                                "Core IT ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Solutions"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "hm-section-sub",
                            children: "Three specialized divisions — pick a lane, then go deeper."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.div */ .E.div, {
                    className: "hm-caps-grid",
                    variants: reduce ? undefined : _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .staggerContainer */ .Jm,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .homeViewport */ .lX,
                    children: PILLARS.map((pillar)=>{
                        const rows = featuredServices.filter((s)=>s.type === pillar.type);
                        const isOpen = openKey === pillar.key;
                        const HeadIcon = pillar.Icon;
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.article */ .E.article, {
                            className: `hm-cap${isOpen ? " is-open" : ""}`,
                            variants: item,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: "hm-cap-toggle",
                                    "aria-expanded": isOpen,
                                    onClick: ()=>setOpenKey(pillar.key),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "hm-cap-mark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-cap-index",
                                                    children: pillar.index
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-cap-icon",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeadIcon, {
                                                        width: "22",
                                                        height: "22"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "hm-cap-head",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: pillar.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: pillar.tagline
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "hm-cap-chevron",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hm-cap-body",
                                    children: [
                                        rows.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "hm-cap-list",
                                            children: rows.map((service)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `/services/${encodeURIComponent(service.slug)}?type=${service.type}`,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                    children: service.name
                                                                }),
                                                                service.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: truncate(service.description)
                                                                }) : null
                                                            ]
                                                        })
                                                    })
                                                }, `${service.type}-${service.slug}`))
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "hm-cap-lines",
                                            children: pillar.fallback.map((label)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: pillar.href,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: label
                                                        })
                                                    })
                                                }, label))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: pillar.href,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "hm-cap-explore",
                                                children: "Explore division →"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, pillar.key);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CapabilityMap);


/***/ }),

/***/ 5752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8023);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(459);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8411);






const formatPrice = (price)=>`৳${Number(price).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const FeaturedCatalog = ({ products =[]  })=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_5__/* .useReducedMotion */ .J)();
    if (!products.length) return null;
    const item = (0,_homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .motionState */ .RK)(reduce);
    const list = products.slice(0, 5);
    const hero = list[0];
    const rest = list.slice(1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-catalog",
        "aria-labelledby": "hm-catalog-title",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
            className: "hm-catalog-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .fadeUp */ .pB,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "hm-section-head hm-section-head-split",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hm-eyebrow",
                                    children: "Hardware"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    id: "hm-catalog-title",
                                    className: "hm-section-title",
                                    children: "Featured kit"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "hm-section-sub",
                                    children: "Enterprise hardware we’re actively supplying."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/categories",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hm-text-link",
                                children: "Browse categories →"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
                    className: "hm-kit",
                    variants: reduce ? undefined : _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .homeViewport */ .lX,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
                            className: "hm-kit-hero",
                            variants: item,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/products/${encodeURIComponent(hero.slug || hero.id)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hm-kit-plate",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__.DisplayImage, {
                                                src: hero.image,
                                                alt: hero.name,
                                                loading: "eager",
                                                decoding: "async"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hm-kit-copy",
                                            children: [
                                                hero.categoryName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-product-cat",
                                                    children: hero.categoryName
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: hero.name
                                                }),
                                                hero.price > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-product-price",
                                                    children: formatPrice(hero.price)
                                                }) : null
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hm-kit-rail",
                            children: rest.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
                                    className: "hm-kit-item",
                                    variants: item,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: `/products/${encodeURIComponent(product.slug || product.id)}`,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "hm-kit-plate",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__.DisplayImage, {
                                                        src: product.image,
                                                        alt: product.name,
                                                        loading: "lazy",
                                                        decoding: "async"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "hm-kit-copy",
                                                    children: [
                                                        product.categoryName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "hm-product-cat",
                                                            children: product.categoryName
                                                        }) : null,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: product.name
                                                        }),
                                                        product.price > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "hm-product-price",
                                                            children: formatPrice(product.price)
                                                        }) : null
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, product.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedCatalog);


/***/ }),

/***/ 957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8023);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8411);





const FindAndAct = ()=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_4__/* .useReducedMotion */ .J)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-act",
        "aria-labelledby": "hm-act-title",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.div */ .E.div, {
            className: "hm-act-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .fadeUp */ .pB,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hm-act-panels",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hm-act-panel hm-act-panel-search",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hm-eyebrow hm-eyebrow-on-dark",
                                children: "Catalog"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                id: "hm-act-title",
                                className: "hm-act-panel-title",
                                children: "Find hardware"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hm-act-panel-sub",
                                children: "Search by SKU, model, or product name across the live catalog."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "/search",
                                method: "GET",
                                className: "hm-act-search",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "hm-catalog-search",
                                        className: "hm-sr-only",
                                        children: "Search catalog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: "hm-catalog-search",
                                        type: "text",
                                        name: "q",
                                        required: true,
                                        minLength: 2,
                                        placeholder: "SKU, model, or product name…",
                                        className: "hm-act-input"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "submit",
                                        className: "hm-act-submit",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "m21 21-4.3-4.3"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Search"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hm-act-panel hm-act-panel-talk",
                        "aria-label": "Contact",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "hm-eyebrow hm-eyebrow-on-dark",
                                children: "Talk to us"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "hm-act-panel-title",
                                children: "Need a scoped quote?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "hm-act-panel-sub",
                                children: "Enterprise supply, install, and support — same team on the line."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hm-act-hotline",
                                href: "tel:0241021991",
                                children: "02-41021991"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "hm-act-email",
                                href: "mailto:info@missolution.com.bd",
                                children: "info@missolution.com.bd"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/request-custom-quote",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "hm-act-quote",
                                    children: "Request a quote"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindAndAct);


/***/ }),

/***/ 5311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8023);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(459);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8411);






const OfferBand = ({ advertisements =[]  })=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_5__/* .useReducedMotion */ .J)();
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: paused , 1: setPaused  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: progress , 1: setProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const startRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const rafRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const total = advertisements.length;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (total <= 1 || reduce || paused) {
            setProgress(reduce || total <= 1 ? 1 : 0);
            return undefined;
        }
        const duration = 5500;
        startRef.current = performance.now();
        const tick = (now)=>{
            const elapsed = now - startRef.current;
            const p = Math.min(elapsed / duration, 1);
            setProgress(p);
            if (p >= 1) {
                setIndex((prev)=>(prev + 1) % total);
                startRef.current = performance.now();
                setProgress(0);
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [
        total,
        reduce,
        paused,
        index
    ]);
    if (!total) return null;
    const offer = advertisements[index];
    const href = offer.product_slug ? `/products/${offer.product_slug}` : offer.link_url || "#";
    const go = (dir)=>{
        setIndex((prev)=>(prev + dir + total) % total);
        setProgress(0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-offer",
        "aria-label": "Current offers",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onFocusCapture: ()=>setPaused(true),
        onBlurCapture: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
            className: "hm-offer-stage",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .fadeUp */ .pB,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: href,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "hm-offer-primary",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hm-offer-media",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__.DisplayImage, {
                                        src: offer.image_url,
                                        kind: "detail",
                                        priority: true,
                                        alt: offer.title || "Offer",
                                        loading: "eager",
                                        decoding: "async"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hm-offer-scrim",
                                        "aria-hidden": "true"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hm-offer-copy",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hm-offer-kicker",
                                        children: "Offer"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "hm-offer-title",
                                        children: offer.title
                                    }),
                                    offer.ad_details ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "hm-offer-details",
                                        children: offer.ad_details
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "hm-offer-cta",
                                        children: "Shop now"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                total > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hm-offer-progress",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    transform: `scaleX(${progress})`
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hm-offer-frame-meta",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "hm-offer-count",
                                children: [
                                    String(index + 1).padStart(2, "0"),
                                    " — ",
                                    String(total).padStart(2, "0")
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "hm-offer-nav hm-offer-nav-prev",
                            onClick: ()=>go(-1),
                            "aria-label": "Previous offer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                    points: "15 18 9 12 15 6"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "hm-offer-nav hm-offer-nav-next",
                            onClick: ()=>go(1),
                            "aria-label": "Next offer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                    points: "9 18 15 12 9 6"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfferBand);


/***/ }),

/***/ 6089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8023);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8411);





const PATHS = [
    {
        index: "01",
        title: "Shop Hardware",
        line: "Laptops, desktops, networking, and office gear — ready to configure.",
        href: "/categories",
        image: "/core-it-black.jpg"
    },
    {
        index: "02",
        title: "Enterprise Services",
        line: "Digital, corporate infrastructure, and maintenance under one roof.",
        href: "/core-it-solutions",
        image: "/digital services.webp"
    },
    {
        index: "03",
        title: "Solar",
        line: "Commercial and residential solar design, supply, and install.",
        href: "/solar",
        image: "/solar-pro-field.jpg"
    }, 
];
const PathChooser = ()=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_4__/* .useReducedMotion */ .J)();
    const item = (0,_homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .motionState */ .RK)(reduce);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-paths",
        "aria-label": "Choose your path",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.div */ .E.div, {
            className: "hm-paths-grid",
            variants: reduce ? undefined : _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .staggerContainer */ .Jm,
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_3__/* .homeViewport */ .lX,
            children: PATHS.map((path)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_5__/* .motion.div */ .E.div, {
                    className: "hm-path",
                    variants: item,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: path.href,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "hm-path-link",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hm-path-media",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: path.image,
                                            alt: "",
                                            loading: "lazy",
                                            decoding: "async"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "hm-path-scrim"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hm-path-copy",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "hm-path-index",
                                            children: path.index
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "hm-path-title",
                                            children: path.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "hm-path-line",
                                            children: path.line
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }, path.href))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PathChooser);


/***/ }),

/***/ 3814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8023);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8411);




const CountUp = ({ end , label , reduce  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(reduce ? end : 0);
    const { 0: done , 1: setDone  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!reduce);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (reduce) {
            setCount(end);
            setDone(true);
            return undefined;
        }
        const node = ref.current;
        if (!node) return undefined;
        const observer = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting || done) return;
            setDone(true);
            const duration = 1400;
            const start = performance.now();
            const tick = (now)=>{
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                setCount(Math.round(eased * end));
                if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, {
            threshold: 0.35
        });
        observer.observe(node);
        return ()=>observer.disconnect();
    }, [
        end,
        reduce,
        done
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hm-proof-item",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hm-proof-number",
                children: [
                    count.toLocaleString(),
                    end > 0 ? "+" : ""
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hm-proof-label",
                children: label
            })
        ]
    });
};
const ProofStrip = ({ proof ={}  })=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_3__/* .useReducedMotion */ .J)();
    const { projectCount =0 , categoryCount =0 , serviceCount =0 , productCount =0 ,  } = proof;
    const metrics = [
        {
            end: projectCount,
            label: "Projects delivered"
        },
        {
            end: categoryCount,
            label: "Product categories"
        },
        {
            end: serviceCount,
            label: "Active service lines"
        }, 
    ];
    if (productCount > 0) {
        metrics.push({
            end: productCount,
            label: "Catalog products"
        });
    }
    if (metrics.every((m)=>m.end === 0)) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-proof",
        "aria-label": "Company metrics",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_4__/* .motion.div */ .E.div, {
            className: "hm-proof-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .fadeUp */ .pB,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `hm-proof-grid hm-proof-cols-${metrics.length}`,
                children: metrics.map((m)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CountUp, {
                        end: m.end,
                        label: m.label,
                        reduce: !!reduce
                    }, m.label))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProofStrip);


/***/ }),

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8023);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8411);




const QUOTES = [
    {
        text: "MIS Solution has been a dependable technology partner for our institutional procurement and support needs — responsive, transparent, and precise.",
        name: "Pro-Vice Chancellor",
        role: "University of Dhaka"
    },
    {
        text: "From hardware supply to ongoing support, MIS delivers with the discipline an investment firm expects — clear timelines and accountable service.",
        name: "Mohammad Emran Hasan",
        role: "Managing Director & CEO, Investit Asset Management Limited"
    }, 
];
const Quotes = ()=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_3__/* .useReducedMotion */ .J)();
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (reduce || QUOTES.length <= 1) return undefined;
        const timer = setInterval(()=>{
            setIndex((prev)=>(prev + 1) % QUOTES.length);
        }, 6000);
        return ()=>clearInterval(timer);
    }, [
        reduce
    ]);
    const quote = QUOTES[index];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-quotes",
        "aria-labelledby": "hm-quotes-title",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_4__/* .motion.div */ .E.div, {
            className: "hm-quotes-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_2__/* .fadeUp */ .pB,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "hm-section-head hm-section-head-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hm-eyebrow",
                            children: "Client voice"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            id: "hm-quotes-title",
                            className: "hm-section-title",
                            children: "What partners say"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                    className: "hm-quote",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "“",
                                    quote.text,
                                    "”"
                                ]
                            }, index)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figcaption", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: quote.name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: quote.role
                                })
                            ]
                        })
                    ]
                }),
                QUOTES.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hm-quote-dots",
                    role: "tablist",
                    "aria-label": "Testimonials",
                    children: QUOTES.map((q, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            role: "tab",
                            "aria-selected": i === index,
                            className: `hm-quote-dot${i === index ? " is-active" : ""}`,
                            onClick: ()=>setIndex(i),
                            "aria-label": `${q.name}`
                        }, q.name))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quotes);


/***/ }),

/***/ 3211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9754);
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8023);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(459);
/* harmony import */ var _lib_display_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _homeMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8411);






const truncate = (text, max = 110)=>{
    const value = String(text || "").trim();
    if (!value) return "";
    if (value.length <= max) return value;
    return `${value.slice(0, max - 1).trim()}…`;
};
const layoutClass = (count)=>{
    if (count <= 1) return "hm-work-grid is-1";
    if (count === 2) return "hm-work-grid is-2";
    if (count === 3) return "hm-work-grid is-3";
    if (count === 4) return "hm-work-grid is-4";
    return "hm-work-grid is-6";
};
const WorkGallery = ({ projects =[]  })=>{
    const reduce = (0,motion_react__WEBPACK_IMPORTED_MODULE_5__/* .useReducedMotion */ .J)();
    if (!projects.length) return null;
    const item = (0,_homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .motionState */ .RK)(reduce);
    const items = projects.slice(0, 6);
    const useFeature = items.length === 3;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "hm-work",
        "aria-labelledby": "hm-work-title",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
            className: "hm-work-inner",
            initial: "hidden",
            whileInView: "show",
            viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .homeViewport */ .lX,
            variants: reduce ? _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .reducedFade */ .UP : _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .fadeUp */ .pB,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "hm-section-head hm-section-head-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hm-eyebrow",
                            children: "Proof of work"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            id: "hm-work-title",
                            className: "hm-section-title",
                            children: "Client projects"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "hm-section-sub",
                            children: "Selected deployments and integrations delivered for enterprises."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
                    className: layoutClass(items.length),
                    variants: reduce ? undefined : _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .staggerContainer */ .Jm,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: _homeMotion__WEBPACK_IMPORTED_MODULE_4__/* .homeViewport */ .lX,
                    children: items.map((project, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(motion_react__WEBPACK_IMPORTED_MODULE_6__/* .motion.div */ .E.div, {
                            className: `hm-work-card${useFeature && idx === 0 ? " is-feature" : ""}`,
                            variants: item,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/projects/${encodeURIComponent(project.slug || project.id)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "hm-work-media",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_display_image__WEBPACK_IMPORTED_MODULE_3__.DisplayImage, {
                                                src: project.icon_url,
                                                alt: project.name,
                                                loading: "lazy",
                                                decoding: "async"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "hm-work-copy",
                                            children: [
                                                project.client_name ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-work-client",
                                                    children: project.client_name
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: project.name
                                                }),
                                                project.description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: truncate(project.description)
                                                }) : null,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "hm-work-link",
                                                    children: "View story"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, project.id))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkGallery);


/***/ }),

/***/ 8411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jm": () => (/* binding */ staggerContainer),
/* harmony export */   "RK": () => (/* binding */ motionState),
/* harmony export */   "UP": () => (/* binding */ reducedFade),
/* harmony export */   "lX": () => (/* binding */ homeViewport),
/* harmony export */   "pB": () => (/* binding */ fadeUp)
/* harmony export */ });
const homeViewport = {
    once: true,
    amount: 0.2
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 18
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.04
        }
    }
};
const reducedFade = {
    hidden: {
        opacity: 1,
        y: 0
    },
    show: {
        opacity: 1,
        y: 0
    }
};
const motionState = (reduce)=>reduce ? reducedFade : fadeUp;


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6151);
/* harmony import */ var _components_HeroWorldMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8632);
/* harmony import */ var _components_home_PathChooser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6089);
/* harmony import */ var _components_home_OfferBand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5311);
/* harmony import */ var _components_home_CapabilityMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1910);
/* harmony import */ var _components_home_ProofStrip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3814);
/* harmony import */ var _components_home_WorkGallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3211);
/* harmony import */ var _components_home_FeaturedCatalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5752);
/* harmony import */ var _components_home_Quotes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9948);
/* harmony import */ var _components_home_FindAndAct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(957);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_5__]);
_components_footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const HERO_SUBTITLE = "Enterprise IT, hardware supply, and on-call support for teams that need technology that just works.";
const HeroTypewriter = ({ text  })=>{
    const { 0: shown , 1: setShown  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: reduceMotion , 1: setReduceMotion  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setReduceMotion(true);
            setShown(text);
            return undefined;
        }
        let index = 0;
        let deleting = false;
        let timer;
        const tick = ()=>{
            if (!deleting) {
                index += 1;
                setShown(text.slice(0, index));
                if (index >= text.length) {
                    deleting = true;
                    timer = setTimeout(tick, 2200);
                    return;
                }
                timer = setTimeout(tick, 36);
                return;
            }
            index -= 1;
            setShown(text.slice(0, index));
            if (index <= 0) {
                deleting = false;
                timer = setTimeout(tick, 480);
                return;
            }
            timer = setTimeout(tick, 20);
        };
        timer = setTimeout(tick, 520);
        return ()=>clearTimeout(timer);
    }, [
        text
    ]);
    if (reduceMotion) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "home-hero-subtitle",
            children: text
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        className: "home-hero-subtitle home-hero-subtitle-typed",
        "aria-label": text,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "home-hero-subtitle-ghost",
                "aria-hidden": "true",
                children: text
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "home-hero-subtitle-live",
                "aria-hidden": "true",
                children: [
                    shown,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "home-hero-caret"
                    })
                ]
            })
        ]
    });
};
const HighlighterMark = ({ id , path , wash  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: "home-hero-highlight",
        viewBox: "0 0 220 48",
        preserveAspectRatio: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: `${id}-ink`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "0.22",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0%",
                                stopColor: "#fff8c4",
                                stopOpacity: "0.38"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "12%",
                                stopColor: "#ffe56a",
                                stopOpacity: "0.7"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "27%",
                                stopColor: "#fff4b0",
                                stopOpacity: "0.34"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "44%",
                                stopColor: "#ffd84a",
                                stopOpacity: "0.78"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "61%",
                                stopColor: "#fff1a0",
                                stopOpacity: "0.42"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "78%",
                                stopColor: "#ffe27c",
                                stopOpacity: "0.66"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "100%",
                                stopColor: "#fff7d2",
                                stopOpacity: "0.36"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: `${id}-wash`,
                        x1: "0.15",
                        y1: "1",
                        x2: "0.85",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0%",
                                stopColor: "#fffce8",
                                stopOpacity: "0.18"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "38%",
                                stopColor: "#ffe98a",
                                stopOpacity: "0.4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "72%",
                                stopColor: "#fff8c8",
                                stopOpacity: "0.16"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "100%",
                                stopColor: "#ffe56a",
                                stopOpacity: "0.32"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: `url(#${id}-ink)`,
                d: path
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: `url(#${id}-wash)`,
                d: wash
            })
        ]
    });
const HeroMotto = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: highlighted , 1: setHighlighted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const node = ref.current;
        if (!node) return undefined;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                if (reduceMotion) {
                    setHighlighted(true);
                    return;
                }
                setHighlighted(false);
                requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>setHighlighted(true));
                });
                return;
            }
            setHighlighted(false);
        }, {
            threshold: 0.5
        });
        observer.observe(node);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        className: `home-hero-title home-hero-motto${highlighted ? " is-highlighted" : ""}`,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "home-hero-motto-line",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlighterMark, {
                        id: "hero-hl-1",
                        path: "M3 5 C 42 1, 86 9, 128 3 S 188 10, 217 4 L 217 44 C 176 48, 132 40, 90 46 S 32 39, 3 43 Z",
                        wash: "M8 8 C 50 4, 92 13, 136 7 S 186 14, 210 8 L 208 40 C 166 44, 124 36, 82 42 S 24 35, 8 39 Z"
                    }),
                    "Commited to"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "home-hero-motto-line",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlighterMark, {
                        id: "hero-hl-2",
                        path: "M4 6 C 48 2, 90 10, 134 4 S 190 11, 216 5 L 216 43 C 174 47, 128 39, 86 45 S 28 38, 4 42 Z",
                        wash: "M10 9 C 54 5, 98 14, 140 8 S 188 15, 208 9 L 206 39 C 164 43, 118 35, 78 41 S 22 34, 10 38 Z"
                    }),
                    "Service..."
                ]
            })
        ]
    });
};
const emptyProof = {
    projectCount: 0,
    categoryCount: 0,
    serviceCount: 0,
    productCount: 0
};
const Home = (props)=>{
    const { featuredProducts =[] , advertisements =[] , homeCategories =[] , featuredServices =[] , clientProjects =[] , proof =emptyProof ,  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-400a974db96a906a" + " " + "home-container1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-400a974db96a906a",
                                children: "MIS Solution - IT Products & Enterprise Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "MIS Solution - IT Products & Enterprise Services",
                                className: "jsx-400a974db96a906a"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "preload",
                                as: "image",
                                href: "/hero-skyline-1920.jpg",
                                imageSrcSet: "/hero-skyline-1280.jpg 1280w, /hero-skyline-1920.jpg 1920w",
                                imageSizes: "100vw",
                                className: "jsx-400a974db96a906a"
                            }),
                            featuredProducts.slice(0, 4).map((product)=>product.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "preload",
                                    as: "image",
                                    href: product.image,
                                    className: "jsx-400a974db96a906a"
                                }, product.id) : null)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-400a974db96a906a" + " " + "hero-section",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "aria-hidden": "true",
                                className: "jsx-400a974db96a906a" + " " + "hero-media-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/hero-skyline-1920.jpg",
                                        srcSet: "/hero-skyline-1280.jpg 1280w, /hero-skyline-1920.jpg 1920w",
                                        sizes: "100vw",
                                        alt: "",
                                        decoding: "async",
                                        fetchPriority: "high",
                                        className: "jsx-400a974db96a906a" + " " + "hero-bg-image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-400a974db96a906a" + " " + "home-hero-scrim"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-400a974db96a906a" + " " + "hero-content-wrapper",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-400a974db96a906a" + " " + "hero-copy",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-400a974db96a906a" + " " + "hero-text-block",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroMotto, {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroTypewriter, {
                                                        text: HERO_SUBTITLE
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-400a974db96a906a" + " " + "hero-cta-group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/core-it-solutions",
                                                        className: "jsx-400a974db96a906a" + " " + "hero-feature-link",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-index",
                                                                children: "01"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-label",
                                                                children: "Explore Services"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-arrow",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-400a974db96a906a",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M5 12h12M13 6l6 6-6 6",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.8",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        className: "jsx-400a974db96a906a"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "/categories/desktop",
                                                        className: "jsx-400a974db96a906a" + " " + "hero-feature-link",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-index",
                                                                children: "02"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-label",
                                                                children: "Shop Hardware"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "aria-hidden": "true",
                                                                className: "jsx-400a974db96a906a" + " " + "hero-feature-arrow",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-400a974db96a906a",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M5 12h12M13 6l6 6-6 6",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.8",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        className: "jsx-400a974db96a906a"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeroWorldMap__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-400a974db96a906a" + " " + "home-mid",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_PathChooser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_OfferBand__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                advertisements: advertisements
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_CapabilityMap__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                featuredServices: featuredServices
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_ProofStrip__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                proof: proof
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_WorkGallery__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                projects: clientProjects
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_Quotes__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FeaturedCatalog__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                products: featuredProducts
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_home_FindAndAct__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "400a974db96a906a",
                children: ".home-container1.jsx-400a974db96a906a{width:100%;min-height:100vh}"
            })
        ]
    });
};
async function loadPublicProps() {
    try {
        const { listFeaturedProducts  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const db = getDbPool();
        const [featuredProducts, [ads], [cats], [featDigi], [featBiz], [featMaint], [clientProjectRows], [[{ projectCount  }]], [[{ categoryCount  }]], [[{ digiCount  }]], [[{ bizCount  }]], [[{ maintCount  }]], [[{ productCount  }]], ] = await Promise.all([
            listFeaturedProducts(10),
            db.query(`SELECT a.id, a.title, a.ad_details, a.image_url, a.link_url, a.product_id, p.slug AS product_slug FROM advertisements a LEFT JOIN products p ON p.id = a.product_id WHERE a.is_active = 1 ORDER BY a.display_order ASC, a.created_at DESC LIMIT 10`),
            db.query(`SELECT id, name, slug, icon_url FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC LIMIT 15`),
            db.query(`SELECT name, slug, description, icon_url, 'digi_services' as type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
            db.query(`SELECT name, slug, description, icon_url, 'bus_corp_sol' as type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
            db.query(`SELECT name, slug, description, icon_url, 'service_maintenance' as type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
            db.query(`SELECT id, name, slug, description, icon_url, client_name FROM client_projects WHERE deleted_at IS NULL AND status = 'active' ORDER BY is_featured DESC, display_order ASC, created_at DESC LIMIT 10`),
            db.query(`SELECT COUNT(*) AS projectCount FROM client_projects WHERE deleted_at IS NULL AND status = 'active'`),
            db.query(`SELECT COUNT(*) AS categoryCount FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active'`),
            db.query(`SELECT COUNT(*) AS digiCount FROM digi_services WHERE deleted_at IS NULL AND status = 'active'`),
            db.query(`SELECT COUNT(*) AS bizCount FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active'`),
            db.query(`SELECT COUNT(*) AS maintCount FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active'`),
            db.query(`SELECT COUNT(*) AS productCount FROM products WHERE deleted_at IS NULL AND is_active = 1`), 
        ]);
        const featuredServices = [
            ...featDigi,
            ...featBiz,
            ...featMaint
        ];
        const { resolveDisplayUrl  } = await __webpack_require__.e(/* import() */ 3268).then(__webpack_require__.t.bind(__webpack_require__, 3268, 23));
        const withCard = (url)=>resolveDisplayUrl(url, "card");
        const withDetail = (url)=>resolveDisplayUrl(url, "detail");
        const toNum = (value)=>Number(value) || 0;
        return {
            props: {
                featuredProducts: featuredProducts.map((product)=>({
                        ...product,
                        image: withCard(product.image)
                    })),
                advertisements: JSON.parse(JSON.stringify(ads)).map((ad)=>({
                        ...ad,
                        image_url: withDetail(ad.image_url)
                    })),
                homeCategories: JSON.parse(JSON.stringify(cats)).map((cat)=>({
                        ...cat,
                        icon_url: withCard(cat.icon_url)
                    })),
                featuredServices: JSON.parse(JSON.stringify(featuredServices)).map((service)=>({
                        ...service,
                        icon_url: withCard(service.icon_url)
                    })),
                clientProjects: JSON.parse(JSON.stringify(clientProjectRows)).map((project)=>({
                        ...project,
                        icon_url: withCard(project.icon_url)
                    })),
                proof: {
                    projectCount: toNum(projectCount),
                    categoryCount: toNum(categoryCount),
                    serviceCount: toNum(digiCount) + toNum(bizCount) + toNum(maintCount),
                    productCount: toNum(productCount)
                },
                messages: (await __webpack_require__.e(/* import() */ 9748).then(__webpack_require__.t.bind(__webpack_require__, 3567, 19))).default
            }
        };
    } catch (error) {
        throw error;
    }
}
const getServerSideProps = async ({ res  })=>{
    const { servePublicCache  } = await __webpack_require__.e(/* import() */ 3868).then(__webpack_require__.t.bind(__webpack_require__, 3868, 23));
    return servePublicCache(res, "page:home", loadPublicProps, async ()=>({
            props: {
                featuredProducts: [],
                advertisements: [],
                homeCategories: [],
                featuredServices: [],
                clientProjects: [],
                proof: emptyProof,
                messages: (await __webpack_require__.e(/* import() */ 9748).then(__webpack_require__.t.bind(__webpack_require__, 3567, 19))).default
            }
        }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2418:
/***/ ((module) => {

"use strict";
module.exports = require("mysql2/promise");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 503:
/***/ ((module) => {

"use strict";
module.exports = require("next-intl");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 7027:
/***/ ((module) => {

"use strict";
module.exports = import("dangerous-html/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5816,6274,2097,6151], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();