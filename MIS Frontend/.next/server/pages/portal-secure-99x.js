"use strict";
(() => {
var exports = {};
exports.id = 9187;
exports.ids = [9187,7174,2984];
exports.modules = {

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDbPool": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 5049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _SecureAdminLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5912);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2984);







const AnimNum = ({ target , prefix ="" , suffix =""  })=>{
    const { 0: val , 1: setVal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const done = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const obs = new IntersectionObserver(([e])=>{
            if (e.isIntersecting && !done.current) {
                done.current = true;
                const dur = 1400, start = performance.now();
                const go = (now)=>{
                    const p = Math.min((now - start) / dur, 1);
                    setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
                    if (p < 1) requestAnimationFrame(go);
                };
                requestAnimationFrame(go);
            }
        }, {
            threshold: 0.2
        });
        if (ref.current) obs.observe(ref.current);
        return ()=>obs.disconnect();
    }, [
        target
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        ref: ref,
        children: [
            prefix,
            val.toLocaleString(),
            suffix
        ]
    });
};
const Dashboard = ({ stats ={}  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-4bd2f6499466ee73",
                    children: "Dashboard | MIS Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4bd2f6499466ee73" + " " + "dash",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: "#fef3c7"
                                        },
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#d97706",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            className: "jsx-4bd2f6499466ee73",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                                                className: "jsx-4bd2f6499466ee73"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-label",
                                                children: "Total Sales"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-value",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimNum, {
                                                    target: stats.totalRevenue || 0,
                                                    prefix: "৳"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: "#dbeafe"
                                        },
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-icon",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#2563eb",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            className: "jsx-4bd2f6499466ee73",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                    x: "1",
                                                    y: "4",
                                                    width: "22",
                                                    height: "16",
                                                    rx: "2",
                                                    className: "jsx-4bd2f6499466ee73"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M1 10h22",
                                                    className: "jsx-4bd2f6499466ee73"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-label",
                                                children: "Total Orders"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-value",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimNum, {
                                                    target: stats.totalOrders || 0
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: "#d1fae5"
                                        },
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-icon",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#059669",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            className: "jsx-4bd2f6499466ee73",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                                    className: "jsx-4bd2f6499466ee73"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "12",
                                                    cy: "7",
                                                    r: "4",
                                                    className: "jsx-4bd2f6499466ee73"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-label",
                                                children: "Customers"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-value",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimNum, {
                                                    target: stats.totalCustomers || 0
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            background: "#ede9fe"
                                        },
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-icon",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#7c3aed",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            className: "jsx-4bd2f6499466ee73",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
                                                className: "jsx-4bd2f6499466ee73"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "kpi-body",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-label",
                                                children: "Products"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "kpi-value",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimNum, {
                                                    target: stats.totalProducts || 0
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4bd2f6499466ee73" + " " + "mid-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card chart-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-4bd2f6499466ee73",
                                            children: "Sales (Last 6 Months)"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "bar-chart",
                                        children: [
                                            (stats.monthlyRevenue || []).map((m, i)=>{
                                                const maxVal = Math.max(...(stats.monthlyRevenue || []).map((x)=>x.revenue), 1);
                                                const height = Math.max(m.revenue / maxVal * 100, 4);
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "bar-col",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                height: `${height}%`,
                                                                animationDelay: `${i * 0.1}s`
                                                            },
                                                            className: "jsx-4bd2f6499466ee73" + " " + "bar-fill"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-4bd2f6499466ee73" + " " + "bar-label",
                                                            children: m.month
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "jsx-4bd2f6499466ee73" + " " + "bar-val",
                                                            children: [
                                                                "৳",
                                                                (m.revenue / 1000).toFixed(0),
                                                                "k"
                                                            ]
                                                        })
                                                    ]
                                                }, i);
                                            }),
                                            (!stats.monthlyRevenue || stats.monthlyRevenue.length === 0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "empty-text",
                                                children: "No revenue data yet."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card donut-card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-4bd2f6499466ee73",
                                            children: "Products by Category"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "donut-wrap",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                viewBox: "0 0 120 120",
                                                className: "jsx-4bd2f6499466ee73" + " " + "donut-svg",
                                                children: [
                                                    (()=>{
                                                        const cats = stats.topCategories || [];
                                                        const total = cats.reduce((s, c)=>s + c.count, 0) || 1;
                                                        const colors = [
                                                            "#f7e500",
                                                            "#7c3aed",
                                                            "#059669",
                                                            "#2563eb",
                                                            "#ec4899"
                                                        ];
                                                        let offset = 0;
                                                        return cats.map((cat, i)=>{
                                                            const pct = cat.count / total * 100;
                                                            const dashArray = `${pct * 3.14} ${314 - pct * 3.14}`;
                                                            const el = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                cx: "60",
                                                                cy: "60",
                                                                r: "50",
                                                                fill: "none",
                                                                stroke: colors[i % 5],
                                                                strokeWidth: "18",
                                                                strokeDasharray: dashArray,
                                                                strokeDashoffset: -offset * 3.14,
                                                                style: {
                                                                    animationDelay: `${i * 0.15}s`
                                                                },
                                                                className: "jsx-4bd2f6499466ee73" + " " + "donut-ring"
                                                            }, i);
                                                            offset += pct;
                                                            return el;
                                                        });
                                                    })(),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                        x: "60",
                                                        y: "56",
                                                        textAnchor: "middle",
                                                        className: "jsx-4bd2f6499466ee73" + " " + "donut-center-num",
                                                        children: stats.totalProducts || 0
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                                                        x: "60",
                                                        y: "72",
                                                        textAnchor: "middle",
                                                        className: "jsx-4bd2f6499466ee73" + " " + "donut-center-label",
                                                        children: "Products"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "donut-legend",
                                                children: (stats.topCategories || []).map((cat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "legend-item",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                style: {
                                                                    background: [
                                                                        "#f7e500",
                                                                        "#7c3aed",
                                                                        "#059669",
                                                                        "#2563eb",
                                                                        "#ec4899"
                                                                    ][i % 5]
                                                                },
                                                                className: "jsx-4bd2f6499466ee73" + " " + "legend-dot"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-4bd2f6499466ee73" + " " + "legend-name",
                                                                children: cat.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                className: "jsx-4bd2f6499466ee73",
                                                                children: cat.count
                                                            })
                                                        ]
                                                    }, i))
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4bd2f6499466ee73" + " " + "mid-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card recent-orders",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "jsx-4bd2f6499466ee73",
                                                children: "Recent Orders"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/portal-secure-99x/orders",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "see-all",
                                                    children: "See All →"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "orders-list",
                                        children: [
                                            (stats.recentOrders || []).length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "empty-text",
                                                children: "No orders yet."
                                            }),
                                            (stats.recentOrders || []).map((o)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/portal-secure-99x/orders",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "order-row",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-4bd2f6499466ee73",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                        className: "jsx-4bd2f6499466ee73",
                                                                        children: [
                                                                            "#",
                                                                            o.order_no
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-4bd2f6499466ee73",
                                                                        children: o.customer_name || "Customer"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-4bd2f6499466ee73" + " " + "order-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                                        className: "jsx-4bd2f6499466ee73",
                                                                        children: [
                                                                            "৳",
                                                                            Number(o.total_amount).toLocaleString()
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-4bd2f6499466ee73" + " " + `status-pill st-${o.status}`,
                                                                        children: o.status
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, o.id))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card recent-quotes",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "jsx-4bd2f6499466ee73",
                                                children: "Recent Quotes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/portal-secure-99x/quotes-manager",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "see-all",
                                                    children: "See All →"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "quotes-list",
                                        children: [
                                            (stats.recentQuotes || []).length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "empty-text",
                                                children: "No quotes yet."
                                            }),
                                            (stats.recentQuotes || []).map((q)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/portal-secure-99x/quotes-manager",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "quote-row",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-4bd2f6499466ee73",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        className: "jsx-4bd2f6499466ee73",
                                                                        children: q.client_name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-4bd2f6499466ee73",
                                                                        children: q.project_type || "General"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-4bd2f6499466ee73" + " " + `status-pill st-${q.status}`,
                                                                children: q.status
                                                            })
                                                        ]
                                                    })
                                                }, q.id))
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4bd2f6499466ee73" + " " + "bot-row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card quick-stats",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-4bd2f6499466ee73",
                                            children: "Quick Overview"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "stats-grid",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "Pending Orders"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.pendingOrders || 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "Active Quotes"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.activeQuotes || 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "Digital Services"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.digiCount || 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "B2B Solutions"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.bizCount || 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "Maintenance"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.maintCount || 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "stat-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: "Client Projects"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73",
                                                        children: stats.projectsCount || 0
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "jsx-4bd2f6499466ee73",
                                            children: "Order Status"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "status-bars",
                                        children: (stats.orderStatusBreakdown || []).map((s, i)=>{
                                            const maxCount = Math.max(...(stats.orderStatusBreakdown || []).map((x)=>x.count), 1);
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-4bd2f6499466ee73" + " " + "status-bar-row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "sb-label",
                                                        children: s.status
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "sb-track",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                width: `${s.count / maxCount * 100}%`,
                                                                background: s.status === "pending" ? "#f59e0b" : s.status === "shipped" ? "#10b981" : s.status === "paid" ? "#3b82f6" : "#ef4444",
                                                                animationDelay: `${i * 0.1}s`
                                                            },
                                                            className: "jsx-4bd2f6499466ee73" + " " + "sb-fill"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-4bd2f6499466ee73" + " " + "sb-count",
                                                        children: s.count
                                                    })
                                                ]
                                            }, i);
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-4bd2f6499466ee73" + " " + "card",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "card-head",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-4bd2f6499466ee73",
                                    children: "Top Selling Products"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-4bd2f6499466ee73" + " " + "top-products-chart",
                                children: [
                                    (stats.topProducts || []).length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-4bd2f6499466ee73" + " " + "empty-text",
                                        children: "No sales data yet."
                                    }),
                                    (stats.topProducts || []).map((p, i)=>{
                                        const maxSales = Math.max(...(stats.topProducts || []).map((x)=>Number(x.total_sales)), 1);
                                        const pct = Number(p.total_sales) / maxSales * 100;
                                        const colors = [
                                            "#f7e500",
                                            "#7c3aed",
                                            "#059669",
                                            "#2563eb",
                                            "#ec4899"
                                        ];
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-4bd2f6499466ee73" + " " + "tpc-row",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "tpc-label",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            style: {
                                                                background: colors[i % 5] + "22",
                                                                color: colors[i % 5]
                                                            },
                                                            className: "jsx-4bd2f6499466ee73" + " " + "tpc-rank",
                                                            children: [
                                                                "#",
                                                                i + 1
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-4bd2f6499466ee73" + " " + "tpc-name",
                                                            children: p.name
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "tpc-bar-wrap",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            width: `${Math.max(pct, 4)}%`,
                                                            background: `linear-gradient(90deg, ${colors[i % 5]}, ${colors[i % 5]}cc)`,
                                                            animationDelay: `${i * 0.12}s`
                                                        },
                                                        className: "jsx-4bd2f6499466ee73" + " " + "tpc-bar"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-4bd2f6499466ee73" + " " + "tpc-stats",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                            className: "jsx-4bd2f6499466ee73",
                                                            children: [
                                                                p.qty_sold,
                                                                " sold"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "jsx-4bd2f6499466ee73",
                                                            children: [
                                                                "৳",
                                                                Number(p.total_sales).toLocaleString()
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }, i);
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4bd2f6499466ee73",
                children: ".dash.jsx-4bd2f6499466ee73{display:grid;gap:18px;-webkit-animation:fadeIn.4s ease-out;-moz-animation:fadeIn.4s ease-out;-o-animation:fadeIn.4s ease-out;animation:fadeIn.4s ease-out}@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes fadeIn{from{opacity:0;-moz-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}}@-o-keyframes fadeIn{from{opacity:0;-o-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-o-transform:translateY(0);transform:translateY(0)}}@keyframes fadeIn{from{opacity:0;-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-o-transform:translateY(10px);transform:translateY(10px)}to{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideUp{from{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes slideUp{from{opacity:0;-moz-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}}@-o-keyframes slideUp{from{opacity:0;-o-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-o-transform:translateY(0);transform:translateY(0)}}@keyframes slideUp{from{opacity:0;-webkit-transform:translateY(20px);-moz-transform:translateY(20px);-o-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes pulse{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@-moz-keyframes pulse{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.05);transform:scale(1.05)}}@-o-keyframes pulse{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.05);transform:scale(1.05)}}@keyframes pulse{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}}.kpi-row.jsx-4bd2f6499466ee73{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.kpi-card.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px;padding:20px 22px;border:1px solid#e5e7eb;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;-webkit-animation:slideUp.5s ease-out backwards;-moz-animation:slideUp.5s ease-out backwards;-o-animation:slideUp.5s ease-out backwards;animation:slideUp.5s ease-out backwards;-webkit-transition:-webkit-transform.2s,box-shadow.2s;-moz-transition:-moz-transform.2s,box-shadow.2s;-o-transition:-o-transform.2s,box-shadow.2s;transition:-webkit-transform.2s,box-shadow.2s;transition:-moz-transform.2s,box-shadow.2s;transition:-o-transform.2s,box-shadow.2s;transition:transform.2s,box-shadow.2s}.kpi-card.jsx-4bd2f6499466ee73:nth-child(1){-webkit-animation-delay:.05s;-moz-animation-delay:.05s;-o-animation-delay:.05s;animation-delay:.05s}.kpi-card.jsx-4bd2f6499466ee73:nth-child(2){-webkit-animation-delay:.1s;-moz-animation-delay:.1s;-o-animation-delay:.1s;animation-delay:.1s}.kpi-card.jsx-4bd2f6499466ee73:nth-child(3){-webkit-animation-delay:.15s;-moz-animation-delay:.15s;-o-animation-delay:.15s;animation-delay:.15s}.kpi-card.jsx-4bd2f6499466ee73:nth-child(4){-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.kpi-card.jsx-4bd2f6499466ee73:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 8px 24px rgba(0,0,0,.08);-moz-box-shadow:0 8px 24px rgba(0,0,0,.08);box-shadow:0 8px 24px rgba(0,0,0,.08)}.kpi-icon.jsx-4bd2f6499466ee73{width:48px;height:48px;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-transition:-webkit-transform.3s;-moz-transition:-moz-transform.3s;-o-transition:-o-transform.3s;transition:-webkit-transform.3s;transition:-moz-transform.3s;transition:-o-transform.3s;transition:transform.3s}.kpi-card.jsx-4bd2f6499466ee73:hover .kpi-icon.jsx-4bd2f6499466ee73{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.kpi-body.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2px}.kpi-label.jsx-4bd2f6499466ee73{font-size:12px;color:#6b7280;font-weight:600;text-transform:uppercase;letter-spacing:.03em}.kpi-value.jsx-4bd2f6499466ee73{font-size:24px;font-weight:800;color:#111827}.mid-row.jsx-4bd2f6499466ee73{display:grid;grid-template-columns:1.5fr 1fr;gap:14px}.bot-row.jsx-4bd2f6499466ee73{display:grid;grid-template-columns:1fr 1fr;gap:14px}.card.jsx-4bd2f6499466ee73{border:1px solid#e5e7eb;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;padding:20px 22px;-webkit-animation:slideUp.6s ease-out backwards;-moz-animation:slideUp.6s ease-out backwards;-o-animation:slideUp.6s ease-out backwards;animation:slideUp.6s ease-out backwards;-webkit-animation-delay:.25s;-moz-animation-delay:.25s;-o-animation-delay:.25s;animation-delay:.25s;-webkit-transition:box-shadow.2s;-moz-transition:box-shadow.2s;-o-transition:box-shadow.2s;transition:box-shadow.2s}.card.jsx-4bd2f6499466ee73:hover{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.05);-moz-box-shadow:0 4px 16px rgba(0,0,0,.05);box-shadow:0 4px 16px rgba(0,0,0,.05)}.card-head.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:16px}.card-head.jsx-4bd2f6499466ee73 h3.jsx-4bd2f6499466ee73{margin:0;font-size:16px;color:#111827;font-weight:700}.see-all.jsx-4bd2f6499466ee73{font-size:12px;color:#7c3aed;font-weight:700;text-decoration:none;-webkit-transition:color.15s;-moz-transition:color.15s;-o-transition:color.15s;transition:color.15s}.see-all.jsx-4bd2f6499466ee73:hover{color:#5b21b6}.orders-list.jsx-4bd2f6499466ee73,.quotes-list.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;max-height:300px;overflow-y:auto}.order-row.jsx-4bd2f6499466ee73,.quote-row.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 14px;border:1px solid#f3f4f6;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:background.15s,border-color.15s;-moz-transition:background.15s,border-color.15s;-o-transition:background.15s,border-color.15s;transition:background.15s,border-color.15s;text-decoration:none;color:inherit;cursor:pointer}.order-row.jsx-4bd2f6499466ee73:hover,.quote-row.jsx-4bd2f6499466ee73:hover{background:#fafbff;border-color:#e0e7ff}.order-row.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73,.quote-row.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73{font-size:13px;color:#111827;display:block}.order-row.jsx-4bd2f6499466ee73 span.jsx-4bd2f6499466ee73,.quote-row.jsx-4bd2f6499466ee73 span.jsx-4bd2f6499466ee73{font-size:12px;color:#6b7280}.order-right.jsx-4bd2f6499466ee73{text-align:right;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;gap:4px}.status-pill.jsx-4bd2f6499466ee73{display:inline-block;padding:3px 9px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}.st-pending.jsx-4bd2f6499466ee73{background:#fef3c7;color:#92400e}.st-paid.jsx-4bd2f6499466ee73,.st-shipped.jsx-4bd2f6499466ee73{background:#d1fae5;color:#065f46}.st-cancelled.jsx-4bd2f6499466ee73{background:#fee2e2;color:#991b1b}.st-new.jsx-4bd2f6499466ee73{background:#dbeafe;color:#1e40af}.st-in_progress.jsx-4bd2f6499466ee73{background:#fef3c7;color:#92400e}.st-closed.jsx-4bd2f6499466ee73{background:#d1fae5;color:#065f46}.cats-list.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.cat-row.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;-webkit-transition:-webkit-transform.15s;-moz-transition:-moz-transform.15s;-o-transition:-o-transform.15s;transition:-webkit-transform.15s;transition:-moz-transform.15s;transition:-o-transform.15s;transition:transform.15s}.cat-row.jsx-4bd2f6499466ee73:hover{-webkit-transform:translateX(4px);-moz-transform:translateX(4px);-ms-transform:translateX(4px);-o-transform:translateX(4px);transform:translateX(4px)}.cat-dot.jsx-4bd2f6499466ee73{width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cat-name.jsx-4bd2f6499466ee73{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:13px;color:#374151;font-weight:500}.cat-row.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73{font-size:13px;color:#111827}.stats-grid.jsx-4bd2f6499466ee73{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.stat-item.jsx-4bd2f6499466ee73{padding:14px 16px;border:1px solid#f3f4f6;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px;-webkit-transition:border-color.2s,background.2s;-moz-transition:border-color.2s,background.2s;-o-transition:border-color.2s,background.2s;transition:border-color.2s,background.2s}.stat-item.jsx-4bd2f6499466ee73:hover{border-color:#c7d2fe;background:#fafbff}.stat-item.jsx-4bd2f6499466ee73 span.jsx-4bd2f6499466ee73{font-size:11px;color:#6b7280;font-weight:600;text-transform:uppercase}.stat-item.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73{font-size:22px;color:#111827;font-weight:800}.empty-text.jsx-4bd2f6499466ee73{color:#9ca3af;font-size:13px;text-align:center;padding:20px}.bar-chart.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;gap:8px;height:180px;padding-top:20px}.bar-col.jsx-4bd2f6499466ee73{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;gap:6px}.bar-fill.jsx-4bd2f6499466ee73{width:100%;max-width:40px;-webkit-border-radius:6px 6px 0 0;-moz-border-radius:6px 6px 0 0;border-radius:6px 6px 0 0;background:-webkit-linear-gradient(top,#f7e500,#e6a800);background:-moz-linear-gradient(top,#f7e500,#e6a800);background:-o-linear-gradient(top,#f7e500,#e6a800);background:linear-gradient(180deg,#f7e500,#e6a800);-webkit-animation:growUp.8s ease-out backwards;-moz-animation:growUp.8s ease-out backwards;-o-animation:growUp.8s ease-out backwards;animation:growUp.8s ease-out backwards}@-webkit-keyframes growUp{from{height:0!important}}@-moz-keyframes growUp{from{height:0!important}}@-o-keyframes growUp{from{height:0!important}}@keyframes growUp{from{height:0!important}}.bar-label.jsx-4bd2f6499466ee73{font-size:10px;color:#6b7280;font-weight:600}.bar-val.jsx-4bd2f6499466ee73{font-size:10px;color:#111827;font-weight:700}.donut-wrap.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:24px}.donut-svg.jsx-4bd2f6499466ee73{width:140px;height:140px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg)}.donut-ring.jsx-4bd2f6499466ee73{-webkit-animation:ringGrow 1s ease-out backwards;-moz-animation:ringGrow 1s ease-out backwards;-o-animation:ringGrow 1s ease-out backwards;animation:ringGrow 1s ease-out backwards}@-webkit-keyframes ringGrow{from{stroke-dasharray:0 314}}@-moz-keyframes ringGrow{from{stroke-dasharray:0 314}}@-o-keyframes ringGrow{from{stroke-dasharray:0 314}}@keyframes ringGrow{from{stroke-dasharray:0 314}}.donut-center-num.jsx-4bd2f6499466ee73{font-size:22px;font-weight:800;fill:#111827;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:60px 60px;-moz-transform-origin:60px 60px;-ms-transform-origin:60px 60px;-o-transform-origin:60px 60px;transform-origin:60px 60px}.donut-center-label.jsx-4bd2f6499466ee73{font-size:10px;fill:#6b7280;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:60px 60px;-moz-transform-origin:60px 60px;-ms-transform-origin:60px 60px;-o-transform-origin:60px 60px;transform-origin:60px 60px}.donut-legend.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.legend-item.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.legend-dot.jsx-4bd2f6499466ee73{width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.legend-name.jsx-4bd2f6499466ee73{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;font-size:13px;color:#374151}.legend-item.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73{font-size:13px;color:#111827}.status-bars.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}.status-bar-row.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.sb-label.jsx-4bd2f6499466ee73{font-size:12px;color:#6b7280;width:70px;text-transform:capitalize;font-weight:600}.sb-track.jsx-4bd2f6499466ee73{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:10px;background:#f3f4f6;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;overflow:hidden}.sb-fill.jsx-4bd2f6499466ee73{height:100%;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;-webkit-animation:barGrow.8s ease-out backwards;-moz-animation:barGrow.8s ease-out backwards;-o-animation:barGrow.8s ease-out backwards;animation:barGrow.8s ease-out backwards}@-webkit-keyframes barGrow{from{width:0!important}}@-moz-keyframes barGrow{from{width:0!important}}@-o-keyframes barGrow{from{width:0!important}}@keyframes barGrow{from{width:0!important}}.sb-count.jsx-4bd2f6499466ee73{font-size:13px;font-weight:700;color:#111827;width:30px;text-align:right}.top-products-chart.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:14px}.tpc-row.jsx-4bd2f6499466ee73{display:grid;grid-template-columns:200px 1fr 120px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:14px}.tpc-label.jsx-4bd2f6499466ee73{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;min-width:0}.tpc-rank.jsx-4bd2f6499466ee73{width:28px;height:28px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:11px;font-weight:800;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.tpc-name.jsx-4bd2f6499466ee73{font-size:13px;font-weight:600;color:#1f2937;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.tpc-bar-wrap.jsx-4bd2f6499466ee73{height:24px;background:#f3f4f6;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;overflow:hidden;position:relative}.tpc-bar.jsx-4bd2f6499466ee73{height:100%;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-animation:barGrow.8s ease-out backwards;-moz-animation:barGrow.8s ease-out backwards;-o-animation:barGrow.8s ease-out backwards;animation:barGrow.8s ease-out backwards}.tpc-stats.jsx-4bd2f6499466ee73{text-align:right}.tpc-stats.jsx-4bd2f6499466ee73 strong.jsx-4bd2f6499466ee73{display:block;font-size:13px;color:#111827}.tpc-stats.jsx-4bd2f6499466ee73 span.jsx-4bd2f6499466ee73{font-size:11px;color:#6b7280}@media(max-width:1024px){.kpi-row.jsx-4bd2f6499466ee73{grid-template-columns:repeat(2,1fr)}.mid-row.jsx-4bd2f6499466ee73,.bot-row.jsx-4bd2f6499466ee73{grid-template-columns:1fr}.tpc-row.jsx-4bd2f6499466ee73{grid-template-columns:140px 1fr 100px}}@media(max-width:640px){.kpi-row.jsx-4bd2f6499466ee73{grid-template-columns:1fr}.stats-grid.jsx-4bd2f6499466ee73{grid-template-columns:repeat(2,1fr)}.tpc-row.jsx-4bd2f6499466ee73{grid-template-columns:1fr;gap:6px}.tpc-bar-wrap.jsx-4bd2f6499466ee73{height:18px}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_6__.getDbPool)();
        const [[revRow]] = await db.query("SELECT COALESCE(SUM(total_amount), 0) as total FROM orders WHERE deleted_at IS NULL");
        const [[ordRow]] = await db.query("SELECT COUNT(*) as total FROM orders WHERE deleted_at IS NULL");
        const [[custRow]] = await db.query("SELECT COUNT(*) as total FROM customers WHERE deleted_at IS NULL");
        const [[prodRow]] = await db.query("SELECT COUNT(*) as total FROM products WHERE deleted_at IS NULL AND is_active = 1");
        const [[pendRow]] = await db.query("SELECT COUNT(*) as total FROM orders WHERE status = 'pending' AND deleted_at IS NULL");
        const [[quoteRow]] = await db.query("SELECT COUNT(*) as total FROM quotes WHERE status IN ('new','in_progress') AND deleted_at IS NULL");
        const [[digiRow]] = await db.query("SELECT COUNT(*) as total FROM digi_services WHERE deleted_at IS NULL AND status = 'active'");
        const [[bizRow]] = await db.query("SELECT COUNT(*) as total FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active'");
        const [[maintRow]] = await db.query("SELECT COUNT(*) as total FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active'");
        const [[projRow]] = await db.query("SELECT COUNT(*) as total FROM client_projects WHERE deleted_at IS NULL AND status = 'active'");
        const [recentOrders] = await db.query(`SELECT o.id, o.order_no, o.total_amount, o.status, c.full_name as customer_name FROM orders o LEFT JOIN customers c ON c.id = o.customer_id WHERE o.deleted_at IS NULL ORDER BY o.created_at DESC LIMIT 5`);
        const [recentQuotes] = await db.query(`SELECT id, client_name, project_type, status FROM quotes WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 5`);
        const [topCategories] = await db.query(`SELECT c.name, (SELECT COUNT(*) FROM products p INNER JOIN categories sub ON sub.id = p.category_id WHERE (sub.parent_id = c.id OR sub.id = c.id) AND p.deleted_at IS NULL AND p.is_active = 1) as count FROM categories c WHERE c.parent_id IS NULL AND c.deleted_at IS NULL ORDER BY count DESC LIMIT 5`);
        // Monthly revenue for last 6 months
        const [monthlyRevenue] = await db.query(`
      SELECT DATE_FORMAT(created_at, '%b') as month, COALESCE(SUM(total_amount), 0) as revenue
      FROM orders WHERE deleted_at IS NULL AND created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
      GROUP BY YEAR(created_at), MONTH(created_at), DATE_FORMAT(created_at, '%b')
      ORDER BY YEAR(created_at), MONTH(created_at)
    `);
        // Order status breakdown
        const [orderStatusBreakdown] = await db.query(`SELECT status, COUNT(*) as count FROM orders WHERE deleted_at IS NULL GROUP BY status ORDER BY count DESC`);
        // Top selling products
        let topProducts = [];
        try {
            const [tpRows] = await db.query(`
        SELECT p.name, SUM(oi.quantity) as qty_sold, SUM(oi.quantity * oi.price_at_purchase) as total_sales
        FROM order_items oi
        INNER JOIN products p ON p.id = oi.product_id
        INNER JOIN orders o ON o.id = oi.order_id AND o.deleted_at IS NULL
        GROUP BY oi.product_id
        ORDER BY qty_sold DESC
        LIMIT 5
      `);
            topProducts = tpRows;
        } catch (e) {}
        const stats = {
            totalRevenue: Number(revRow.total),
            totalOrders: Number(ordRow.total),
            totalCustomers: Number(custRow.total),
            totalProducts: Number(prodRow.total),
            pendingOrders: Number(pendRow.total),
            activeQuotes: Number(quoteRow.total),
            digiCount: Number(digiRow.total),
            bizCount: Number(bizRow.total),
            maintCount: Number(maintRow.total),
            projectsCount: Number(projRow.total),
            recentOrders: JSON.parse(JSON.stringify(recentOrders)),
            recentQuotes: JSON.parse(JSON.stringify(recentQuotes)),
            topCategories: JSON.parse(JSON.stringify(topCategories)),
            monthlyRevenue: JSON.parse(JSON.stringify(monthlyRevenue)),
            orderStatusBreakdown: JSON.parse(JSON.stringify(orderStatusBreakdown)),
            topProducts: JSON.parse(JSON.stringify(topProducts))
        };
        return {
            props: {
                stats
            }
        };
    } catch (e1) {
        return {
            props: {
                stats: {}
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);


/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(5049)));
module.exports = __webpack_exports__;

})();