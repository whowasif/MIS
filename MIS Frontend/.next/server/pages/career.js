"use strict";
(() => {
var exports = {};
exports.id = 5065;
exports.ids = [5065,7174,2984];
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

/***/ 7365:
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
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6151);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_5__]);
_components_footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useInView = (threshold = 0.1)=>{
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
const FadeIn = ({ children , delay =0  })=>{
    const [ref, isVisible] = useInView(0.08);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        style: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(30px)",
            transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`
        },
        children: children
    });
};
const CareerPage = ({ jobs =[]  })=>{
    const { 0: viewJob , 1: setViewJob  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: applyJob , 1: setApplyJob  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: form , 1: setForm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: "",
        email: "",
        phone: "",
        coverLetter: ""
    });
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: submitted , 1: setSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleApply = async (e)=>{
        e.preventDefault();
        if (!file) {
            setError("Please upload your resume.");
            return;
        }
        setError("");
        setSubmitting(true);
        const formData = new FormData();
        formData.append("careerPostId", applyJob.id);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("coverLetter", form.coverLetter);
        formData.append("resume", file);
        try {
            const res = await fetch("/api/career/apply", {
                method: "POST",
                body: formData
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                const data = await res.json();
                setError(data.error || "Submission failed.");
            }
        } catch  {
            setError("Network error. Please try again.");
        } finally{
            setSubmitting(false);
        }
    };
    const closeApply = ()=>{
        setApplyJob(null);
        setSubmitted(false);
        setForm({
            name: "",
            email: "",
            phone: "",
            coverLetter: ""
        });
        setFile(null);
        setError("");
    };
    const openApplyFromDetail = ()=>{
        const job = viewJob;
        setViewJob(null);
        setApplyJob(job);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: "jsx-f6ab171064fd29f0",
                        children: "Careers | MIS Solution"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Join MIS Solution — explore open positions and build your career with Bangladesh's leading IT company.",
                        className: "jsx-f6ab171064fd29f0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png",
                        className: "jsx-f6ab171064fd29f0"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f6ab171064fd29f0" + " " + "career-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-f6ab171064fd29f0" + " " + "career-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f6ab171064fd29f0" + " " + "hero-bg-wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/career.jpg",
                                        alt: "Join MIS Solution",
                                        className: "jsx-f6ab171064fd29f0" + " " + "hero-bg-img"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-f6ab171064fd29f0" + " " + "hero-particles",
                                children: [
                                    ...Array(5)
                                ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + `hero-particle hero-particle-${i}`
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f6ab171064fd29f0" + " " + "hero-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.1,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-f6ab171064fd29f0" + " " + "hero-badge",
                                            children: "We're Hiring"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.2,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "jsx-f6ab171064fd29f0",
                                            children: [
                                                "Build Your Career",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                    className: "jsx-f6ab171064fd29f0"
                                                }),
                                                "at MIS Solution"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.35,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-f6ab171064fd29f0" + " " + "hero-desc",
                                            children: "Join a team that's powering Bangladesh's digital transformation. We build products that matter — and we need great people to do it."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                        delay: 0.45,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f6ab171064fd29f0" + " " + "hero-meta",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "hero-meta-item",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                    cx: "12",
                                                                    cy: "10",
                                                                    r: "3",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                })
                                                            ]
                                                        }),
                                                        "Dhaka, Bangladesh"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "hero-meta-item",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                    x: "2",
                                                                    y: "7",
                                                                    width: "20",
                                                                    height: "14",
                                                                    rx: "2",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                })
                                                            ]
                                                        }),
                                                        jobs.length,
                                                        " Open Position",
                                                        jobs.length !== 1 ? "s" : ""
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "hero-meta-item",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                    points: "22,6 12,13 2,6",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                })
                                                            ]
                                                        }),
                                                        "hr@missolution.com.bd"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f6ab171064fd29f0" + " " + "why-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f6ab171064fd29f0" + " " + "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "section-head",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: "Why Join MIS Solution?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: "A workplace where talent thrives and careers grow."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f6ab171064fd29f0" + " " + "why-grid",
                                    children: [
                                        {
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-f6ab171064fd29f0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                                                    className: "jsx-f6ab171064fd29f0"
                                                })
                                            }),
                                            title: "Growth Culture",
                                            desc: "Continuous learning, mentorship, and clear paths for career advancement."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    })
                                                ]
                                            }),
                                            title: "Collaborative Team",
                                            desc: "Work with experts across design, engineering, sales, and operations."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "12 6 12 12 16 14",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    })
                                                ]
                                            }),
                                            title: "Real Impact",
                                            desc: "Your work directly contributes to solutions used by 50+ enterprise clients."
                                        },
                                        {
                                            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "23 6 13.5 15.5 8.5 10.5 1 18",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "17 6 23 6 23 12",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    })
                                                ]
                                            }),
                                            title: "Competitive Benefits",
                                            desc: "Competitive salary, performance bonuses, and professional development support."
                                        }, 
                                    ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: i * 0.1,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "why-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "why-icon",
                                                        children: item.icon
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-f6ab171064fd29f0",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-f6ab171064fd29f0",
                                                        children: item.desc
                                                    })
                                                ]
                                            })
                                        }, item.title))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f6ab171064fd29f0" + " " + "jobs-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f6ab171064fd29f0" + " " + "container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "section-head",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    "Open Positions ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "count-badge",
                                                        children: jobs.length
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: "Find a role that matches your skills and ambitions."
                                            })
                                        ]
                                    })
                                }),
                                jobs.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "empty-jobs",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "empty-icon",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "48",
                                                    height: "48",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1",
                                                    className: "jsx-f6ab171064fd29f0",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                            x: "2",
                                                            y: "7",
                                                            width: "20",
                                                            height: "14",
                                                            rx: "2",
                                                            className: "jsx-f6ab171064fd29f0"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
                                                            className: "jsx-f6ab171064fd29f0"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: "No Active Openings"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    "We're not hiring right now, but we'd love to hear from talented people. Send your CV to ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "mailto:hr@missolution.com.bd",
                                                        className: "jsx-f6ab171064fd29f0",
                                                        children: "hr@missolution.com.bd"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f6ab171064fd29f0" + " " + "jobs-grid",
                                    children: jobs.map((job, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                            delay: i * 0.08,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "job-card",
                                                children: [
                                                    job.icon_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "job-card-cover",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: job.icon_url,
                                                            alt: job.name,
                                                            className: "jsx-f6ab171064fd29f0"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "job-card-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "job-card-top",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f6ab171064fd29f0" + " " + "job-status-badge",
                                                                    children: job.status || "Open"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "job-title",
                                                                children: job.name
                                                            }),
                                                            job.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "job-desc",
                                                                children: [
                                                                    job.description.substring(0, 120),
                                                                    job.description.length > 120 ? "..." : ""
                                                                ]
                                                            }),
                                                            job.deadline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "job-deadline",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        width: "13",
                                                                        height: "13",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-f6ab171064fd29f0",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                x: "3",
                                                                                y: "4",
                                                                                width: "18",
                                                                                height: "18",
                                                                                rx: "2",
                                                                                className: "jsx-f6ab171064fd29f0"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                x1: "16",
                                                                                y1: "2",
                                                                                x2: "16",
                                                                                y2: "6",
                                                                                className: "jsx-f6ab171064fd29f0"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                x1: "8",
                                                                                y1: "2",
                                                                                x2: "8",
                                                                                y2: "6",
                                                                                className: "jsx-f6ab171064fd29f0"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                x1: "3",
                                                                                y1: "10",
                                                                                x2: "21",
                                                                                y2: "10",
                                                                                className: "jsx-f6ab171064fd29f0"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    "Deadline: ",
                                                                    new Date(job.deadline).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "short",
                                                                        year: "numeric"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "job-card-actions",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        onClick: ()=>setViewJob(job),
                                                                        className: "jsx-f6ab171064fd29f0" + " " + "btn-ghost-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "14",
                                                                                height: "14",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                className: "jsx-f6ab171064fd29f0",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
                                                                                        className: "jsx-f6ab171064fd29f0"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                        cx: "12",
                                                                                        cy: "12",
                                                                                        r: "3",
                                                                                        className: "jsx-f6ab171064fd29f0"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            "View Details"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        onClick: ()=>setApplyJob(job),
                                                                        className: "jsx-f6ab171064fd29f0" + " " + "btn-primary-sm",
                                                                        children: [
                                                                            "Apply Now",
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                width: "14",
                                                                                height: "14",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                className: "jsx-f6ab171064fd29f0",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M5 12h14M12 5l7 7-7 7",
                                                                                    className: "jsx-f6ab171064fd29f0"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, job.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f6ab171064fd29f0" + " " + "cta-band",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-f6ab171064fd29f0" + " " + "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeIn, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f6ab171064fd29f0" + " " + "cta-band-inner",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f6ab171064fd29f0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-f6ab171064fd29f0",
                                                    children: "Don't see your role?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-f6ab171064fd29f0",
                                                    children: "We're always open to exceptional talent. Send us your CV and we'll reach out when the right opportunity comes up."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "mailto:hr@missolution.com.bd",
                                            className: "jsx-f6ab171064fd29f0" + " " + "cta-btn",
                                            children: [
                                                "Send Your CV",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-f6ab171064fd29f0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M5 12h14M12 5l7 7-7 7",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    viewJob && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setViewJob(null),
                        className: "jsx-f6ab171064fd29f0" + " " + "modal-backdrop",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: (e)=>e.stopPropagation(),
                            className: "jsx-f6ab171064fd29f0" + " " + "modal-panel",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setViewJob(null),
                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-close",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "jsx-f6ab171064fd29f0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18",
                                                className: "jsx-f6ab171064fd29f0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18",
                                                className: "jsx-f6ab171064fd29f0"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-scroll",
                                    children: [
                                        viewJob.icon_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-f6ab171064fd29f0" + " " + "modal-cover",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: viewJob.icon_url,
                                                alt: viewJob.name,
                                                className: "jsx-f6ab171064fd29f0"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f6ab171064fd29f0" + " " + "modal-body",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "job-status-badge",
                                                    children: viewJob.status || "Open"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-title",
                                                    children: viewJob.name
                                                }),
                                                viewJob.deadline && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-deadline",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                    x: "3",
                                                                    y: "4",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "16",
                                                                    y1: "2",
                                                                    x2: "16",
                                                                    y2: "6",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "8",
                                                                    y1: "2",
                                                                    x2: "8",
                                                                    y2: "6",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                    x1: "3",
                                                                    y1: "10",
                                                                    x2: "21",
                                                                    y2: "10",
                                                                    className: "jsx-f6ab171064fd29f0"
                                                                })
                                                            ]
                                                        }),
                                                        "Application Deadline: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: new Date(viewJob.deadline).toLocaleDateString("en-GB", {
                                                                day: "2-digit",
                                                                month: "short",
                                                                year: "numeric"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                viewJob.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: "About this Role"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: viewJob.description
                                                        })
                                                    ]
                                                }),
                                                viewJob.full_description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: "Full Details"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: viewJob.full_description
                                                            },
                                                            className: "jsx-f6ab171064fd29f0" + " " + "modal-html"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: openApplyFromDetail,
                                                    className: "jsx-f6ab171064fd29f0" + " " + "btn-primary-full",
                                                    children: [
                                                        "Apply for this Position",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            className: "jsx-f6ab171064fd29f0",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M5 12h14M12 5l7 7-7 7",
                                                                className: "jsx-f6ab171064fd29f0"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    applyJob && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>!submitting && closeApply(),
                        className: "jsx-f6ab171064fd29f0" + " " + "modal-backdrop",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: (e)=>e.stopPropagation(),
                            className: "jsx-f6ab171064fd29f0" + " " + "modal-panel",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: closeApply,
                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-close",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        className: "jsx-f6ab171064fd29f0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18",
                                                className: "jsx-f6ab171064fd29f0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18",
                                                className: "jsx-f6ab171064fd29f0"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f6ab171064fd29f0" + " " + "modal-scroll",
                                    children: submitted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "success-state",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "success-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    width: "36",
                                                    height: "36",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-f6ab171064fd29f0",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                        points: "20 6 9 17 4 12",
                                                        className: "jsx-f6ab171064fd29f0"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: "Application Submitted!"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "jsx-f6ab171064fd29f0",
                                                children: [
                                                    "Thank you for applying to ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "jsx-f6ab171064fd29f0",
                                                        children: applyJob.name
                                                    }),
                                                    ". Our HR team will review your application and be in touch soon."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: closeApply,
                                                className: "jsx-f6ab171064fd29f0" + " " + "btn-primary-full",
                                                children: "Close"
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-f6ab171064fd29f0" + " " + "modal-body",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "modal-title",
                                                children: [
                                                    "Apply: ",
                                                    applyJob.name
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-f6ab171064fd29f0" + " " + "modal-subtitle",
                                                children: "Fill in the form below and attach your resume."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                onSubmit: handleApply,
                                                className: "jsx-f6ab171064fd29f0" + " " + "apply-form",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "form-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f6ab171064fd29f0",
                                                                children: "Full Name *"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: form.name,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            name: e.target.value
                                                                        })),
                                                                placeholder: "Your full name",
                                                                required: true,
                                                                className: "jsx-f6ab171064fd29f0"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "form-row",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "form-field",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        className: "jsx-f6ab171064fd29f0",
                                                                        children: "Email *"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "email",
                                                                        value: form.email,
                                                                        onChange: (e)=>setForm((p)=>({
                                                                                    ...p,
                                                                                    email: e.target.value
                                                                                })),
                                                                        placeholder: "your@email.com",
                                                                        required: true,
                                                                        className: "jsx-f6ab171064fd29f0"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "form-field",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        className: "jsx-f6ab171064fd29f0",
                                                                        children: "Phone"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "tel",
                                                                        value: form.phone,
                                                                        onChange: (e)=>setForm((p)=>({
                                                                                    ...p,
                                                                                    phone: e.target.value
                                                                                })),
                                                                        placeholder: "+880...",
                                                                        className: "jsx-f6ab171064fd29f0"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "form-field",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "jsx-f6ab171064fd29f0",
                                                                children: "Cover Letter"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                rows: "4",
                                                                value: form.coverLetter,
                                                                onChange: (e)=>setForm((p)=>({
                                                                            ...p,
                                                                            coverLetter: e.target.value
                                                                        })),
                                                                placeholder: "Why are you a great fit for this role?",
                                                                className: "jsx-f6ab171064fd29f0"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                className: "jsx-f6ab171064fd29f0",
                                                                children: [
                                                                    "Resume / CV * ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-f6ab171064fd29f0" + " " + "field-hint",
                                                                        children: "(PDF or DOCX, max 5MB)"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-f6ab171064fd29f0" + " " + "file-upload-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "file",
                                                                        id: "resume-file",
                                                                        accept: ".pdf,.doc,.docx",
                                                                        onChange: (e)=>setFile(e.target.files[0] || null),
                                                                        required: true,
                                                                        style: {
                                                                            display: "none"
                                                                        },
                                                                        className: "jsx-f6ab171064fd29f0"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                        htmlFor: "resume-file",
                                                                        className: "jsx-f6ab171064fd29f0" + " " + "file-upload-btn",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "16",
                                                                                height: "16",
                                                                                viewBox: "0 0 24 24",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                className: "jsx-f6ab171064fd29f0",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4",
                                                                                        className: "jsx-f6ab171064fd29f0"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                                        points: "17 8 12 3 7 8",
                                                                                        className: "jsx-f6ab171064fd29f0"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                        x1: "12",
                                                                                        y1: "3",
                                                                                        x2: "12",
                                                                                        y2: "15",
                                                                                        className: "jsx-f6ab171064fd29f0"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            file ? file.name : "Choose File"
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-f6ab171064fd29f0" + " " + "form-error",
                                                        children: error
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        disabled: submitting,
                                                        className: "jsx-f6ab171064fd29f0" + " " + "btn-primary-full",
                                                        children: submitting ? "Submitting..." : "Submit Application"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f6ab171064fd29f0",
                children: ".career-page.jsx-f6ab171064fd29f0{--accent:#f7e500;--dark:#0a101b;min-height:100vh;background:#f8fafe}.container.jsx-f6ab171064fd29f0{max-width:1180px;margin:0 auto;padding:0 24px}.section-head.jsx-f6ab171064fd29f0{text-align:center;margin-bottom:48px}.section-head.jsx-f6ab171064fd29f0 h2.jsx-f6ab171064fd29f0{margin:0;font-size:clamp(26px,4vw,38px);font-weight:800;color:#111827;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:12px}.section-head.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:10px auto 0;font-size:16px;color:#6b7280;max-width:500px}.count-badge.jsx-f6ab171064fd29f0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:var(--accent);color:#111;font-size:14px;font-weight:800}.career-hero.jsx-f6ab171064fd29f0{position:relative;min-height:580px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden}.hero-bg-wrap.jsx-f6ab171064fd29f0{position:absolute;inset:0}.hero-bg-img.jsx-f6ab171064fd29f0{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.hero-overlay.jsx-f6ab171064fd29f0{position:absolute;inset:0;background:-webkit-linear-gradient(290deg,rgba(10,16,27,.95)0%,rgba(10,16,27,.7)60%,rgba(247,229,0,.04)100%);background:-moz-linear-gradient(290deg,rgba(10,16,27,.95)0%,rgba(10,16,27,.7)60%,rgba(247,229,0,.04)100%);background:-o-linear-gradient(290deg,rgba(10,16,27,.95)0%,rgba(10,16,27,.7)60%,rgba(247,229,0,.04)100%);background:linear-gradient(160deg,rgba(10,16,27,.95)0%,rgba(10,16,27,.7)60%,rgba(247,229,0,.04)100%)}.hero-particles.jsx-f6ab171064fd29f0{position:absolute;inset:0;pointer-events:none;overflow:hidden}.hero-particle.jsx-f6ab171064fd29f0{position:absolute;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:var(--accent);opacity:.1;-webkit-animation:pFloat 9s ease-in-out infinite;-moz-animation:pFloat 9s ease-in-out infinite;-o-animation:pFloat 9s ease-in-out infinite;animation:pFloat 9s ease-in-out infinite}.hero-particle-0.jsx-f6ab171064fd29f0{width:220px;height:220px;top:-50px;right:8%;-webkit-animation-delay:0s;-moz-animation-delay:0s;-o-animation-delay:0s;animation-delay:0s}.hero-particle-1.jsx-f6ab171064fd29f0{width:100px;height:100px;bottom:25%;right:22%;-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}.hero-particle-2.jsx-f6ab171064fd29f0{width:70px;height:70px;top:35%;left:4%;-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}.hero-particle-3.jsx-f6ab171064fd29f0{width:160px;height:160px;bottom:-30px;left:18%;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s;opacity:.06}.hero-particle-4.jsx-f6ab171064fd29f0{width:55px;height:55px;top:18%;right:38%;-webkit-animation-delay:3s;-moz-animation-delay:3s;-o-animation-delay:3s;animation-delay:3s}@-webkit-keyframes pFloat{0%,100%{-webkit-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-18px)scale(1.04);transform:translateY(-18px)scale(1.04)}}@-moz-keyframes pFloat{0%,100%{-moz-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-moz-transform:translateY(-18px)scale(1.04);transform:translateY(-18px)scale(1.04)}}@-o-keyframes pFloat{0%,100%{-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-o-transform:translateY(-18px)scale(1.04);transform:translateY(-18px)scale(1.04)}}@keyframes pFloat{0%,100%{-webkit-transform:translateY(0)scale(1);-moz-transform:translateY(0)scale(1);-o-transform:translateY(0)scale(1);transform:translateY(0)scale(1)}50%{-webkit-transform:translateY(-18px)scale(1.04);-moz-transform:translateY(-18px)scale(1.04);-o-transform:translateY(-18px)scale(1.04);transform:translateY(-18px)scale(1.04)}}.hero-content.jsx-f6ab171064fd29f0{position:relative;z-index:2;max-width:680px;padding:140px 32px 80px}.hero-badge.jsx-f6ab171064fd29f0{display:inline-block;padding:6px 16px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:rgba(247,229,0,.12);border:1px solid rgba(247,229,0,.35);color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-bottom:18px}.hero-content.jsx-f6ab171064fd29f0 h1.jsx-f6ab171064fd29f0{margin:0;font-size:clamp(34px,5.5vw,54px);font-weight:800;color:#fff;line-height:1.1;letter-spacing:-.02em}.hero-desc.jsx-f6ab171064fd29f0{margin:18px 0 0;font-size:17px;color:rgba(255,255,255,.65);line-height:1.7}.hero-meta.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:20px;margin-top:28px}.hero-meta-item.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;color:rgba(255,255,255,.7);font-size:14px;font-weight:500}.hero-meta-item.jsx-f6ab171064fd29f0 svg.jsx-f6ab171064fd29f0{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.why-section.jsx-f6ab171064fd29f0{padding:80px 0;background:#fff}.why-grid.jsx-f6ab171064fd29f0{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}.why-card.jsx-f6ab171064fd29f0{padding:28px;border:1px solid#e5e7eb;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#f9fafb;-webkit-transition:border-color.2s,box-shadow.2s;-moz-transition:border-color.2s,box-shadow.2s;-o-transition:border-color.2s,box-shadow.2s;transition:border-color.2s,box-shadow.2s}.why-card.jsx-f6ab171064fd29f0:hover{border-color:#c7d2fe;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.06);-moz-box-shadow:0 4px 20px rgba(0,0,0,.06);box-shadow:0 4px 20px rgba(0,0,0,.06)}.why-icon.jsx-f6ab171064fd29f0{width:48px;height:48px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#1e293b;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--accent);margin-bottom:16px}.why-card.jsx-f6ab171064fd29f0 h3.jsx-f6ab171064fd29f0{margin:0 0 8px;font-size:16px;font-weight:700;color:#111827}.why-card.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:0;font-size:14px;color:#6b7280;line-height:1.6}.jobs-section.jsx-f6ab171064fd29f0{padding:80px 0}.jobs-grid.jsx-f6ab171064fd29f0{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}.job-card.jsx-f6ab171064fd29f0{border:1px solid#e5e7eb;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;overflow:hidden;-webkit-transition:border-color.2s,box-shadow.2s,-webkit-transform.2s;-moz-transition:border-color.2s,box-shadow.2s,-moz-transform.2s;-o-transition:border-color.2s,box-shadow.2s,-o-transform.2s;transition:border-color.2s,box-shadow.2s,-webkit-transform.2s;transition:border-color.2s,box-shadow.2s,-moz-transform.2s;transition:border-color.2s,box-shadow.2s,-o-transform.2s;transition:border-color.2s,box-shadow.2s,transform.2s}.job-card.jsx-f6ab171064fd29f0:hover{border-color:#a5b4fc;-webkit-box-shadow:0 8px 28px rgba(0,0,0,.08);-moz-box-shadow:0 8px 28px rgba(0,0,0,.08);box-shadow:0 8px 28px rgba(0,0,0,.08);-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px)}.job-card-cover.jsx-f6ab171064fd29f0{width:100%;height:200px;overflow:hidden}.job-card-cover.jsx-f6ab171064fd29f0 img.jsx-f6ab171064fd29f0{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.job-card-body.jsx-f6ab171064fd29f0{padding:22px}.job-card-top.jsx-f6ab171064fd29f0{margin-bottom:10px}.job-status-badge.jsx-f6ab171064fd29f0{display:inline-block;padding:4px 12px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;background:rgba(247,229,0,.15);border:1px solid rgba(180,160,0,.3);color:#856c00;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}.job-title.jsx-f6ab171064fd29f0{margin:0 0 10px;font-size:18px;font-weight:700;color:#111827;line-height:1.3}.job-desc.jsx-f6ab171064fd29f0{margin:0 0 10px;font-size:14px;color:#6b7280;line-height:1.6}.job-deadline.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#dc2626;margin:0 0 14px}.modal-deadline.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;font-size:13px;color:#dc2626;margin:8px 0 16px;padding:8px 12px;background:#fef2f2;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:1px solid#fecaca}.modal-deadline.jsx-f6ab171064fd29f0 strong.jsx-f6ab171064fd29f0{font-weight:700}.job-card-actions.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px}.btn-ghost-sm.jsx-f6ab171064fd29f0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:9px 16px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;color:#374151;font-size:13px;font-weight:600;cursor:pointer;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s}.btn-ghost-sm.jsx-f6ab171064fd29f0:hover{background:#f3f4f6;border-color:#9ca3af}.btn-primary-sm.jsx-f6ab171064fd29f0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:9px 18px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#1e293b;color:#f7e500;font-size:13px;font-weight:700;cursor:pointer;-webkit-transition:all.15s;-moz-transition:all.15s;-o-transition:all.15s;transition:all.15s;margin-left:auto}.btn-primary-sm.jsx-f6ab171064fd29f0:hover{background:#0f172a}.empty-jobs.jsx-f6ab171064fd29f0{text-align:center;padding:64px 24px;border:2px dashed#e5e7eb;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px}.empty-icon.jsx-f6ab171064fd29f0{width:80px;height:80px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f3f4f6;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto 20px;color:#9ca3af}.empty-jobs.jsx-f6ab171064fd29f0 h3.jsx-f6ab171064fd29f0{margin:0 0 10px;font-size:20px;color:#374151}.empty-jobs.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:0;color:#6b7280;font-size:15px}.empty-jobs.jsx-f6ab171064fd29f0 a.jsx-f6ab171064fd29f0{color:#4f46e5;font-weight:600;text-decoration:none}.cta-band.jsx-f6ab171064fd29f0{padding:60px 0;background:#1e293b}.cta-band-inner.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;gap:32px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.cta-band-inner.jsx-f6ab171064fd29f0 h2.jsx-f6ab171064fd29f0{margin:0 0 8px;font-size:26px;font-weight:800;color:#fff}.cta-band-inner.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:0;font-size:15px;color:rgba(255,255,255,.65)}.cta-btn.jsx-f6ab171064fd29f0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;padding:15px 28px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:var(--accent);color:#0a101b;font-size:15px;font-weight:700;text-decoration:none;white-space:nowrap;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cta-btn.jsx-f6ab171064fd29f0:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 6px 24px rgba(247,229,0,.3);-moz-box-shadow:0 6px 24px rgba(247,229,0,.3);box-shadow:0 6px 24px rgba(247,229,0,.3)}.modal-backdrop.jsx-f6ab171064fd29f0{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1200;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:20px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.modal-panel.jsx-f6ab171064fd29f0{position:relative;width:100%;max-width:640px;max-height:90vh;background:#fff;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;overflow:hidden;-webkit-box-shadow:0 24px 80px rgba(0,0,0,.2);-moz-box-shadow:0 24px 80px rgba(0,0,0,.2);box-shadow:0 24px 80px rgba(0,0,0,.2)}.modal-close.jsx-f6ab171064fd29f0{position:absolute;top:16px;right:16px;width:36px;height:36px;border:none;background:#f3f4f6;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:#6b7280;z-index:2}.modal-close.jsx-f6ab171064fd29f0:hover{background:#e5e7eb;color:#111}.modal-scroll.jsx-f6ab171064fd29f0{overflow-y:auto;max-height:90vh}.modal-cover.jsx-f6ab171064fd29f0{width:100%;height:220px;overflow:hidden}.modal-cover.jsx-f6ab171064fd29f0 img.jsx-f6ab171064fd29f0{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.modal-body.jsx-f6ab171064fd29f0{padding:28px}.modal-title.jsx-f6ab171064fd29f0{margin:12px 0 20px;font-size:22px;font-weight:800;color:#111827;line-height:1.3}.modal-subtitle.jsx-f6ab171064fd29f0{margin:-10px 0 20px;font-size:14px;color:#6b7280}.modal-section.jsx-f6ab171064fd29f0{margin-bottom:20px}.modal-section.jsx-f6ab171064fd29f0 h4.jsx-f6ab171064fd29f0{margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#6b7280;font-weight:700}.modal-section.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap}.modal-html.jsx-f6ab171064fd29f0{font-size:15px;color:#374151;line-height:1.7}.modal-html.jsx-f6ab171064fd29f0 h1.jsx-f6ab171064fd29f0,.modal-html.jsx-f6ab171064fd29f0 h2.jsx-f6ab171064fd29f0,.modal-html.jsx-f6ab171064fd29f0 h3.jsx-f6ab171064fd29f0{color:#111827;margin:16px 0 8px}.modal-html.jsx-f6ab171064fd29f0 ul.jsx-f6ab171064fd29f0,.modal-html.jsx-f6ab171064fd29f0 ol.jsx-f6ab171064fd29f0{padding-left:20px;margin:8px 0}.modal-html.jsx-f6ab171064fd29f0 li.jsx-f6ab171064fd29f0{margin-bottom:4px}.btn-primary-full.jsx-f6ab171064fd29f0{width:100%;height:50px;border:none;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#1e293b;color:var(--accent);font-size:15px;font-weight:700;cursor:pointer;margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:8px;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.btn-primary-full.jsx-f6ab171064fd29f0:hover:not(:disabled){background:#0f172a}.btn-primary-full.jsx-f6ab171064fd29f0:disabled{opacity:.6;cursor:wait}.apply-form.jsx-f6ab171064fd29f0{display:grid;gap:16px;margin-top:20px}.form-row.jsx-f6ab171064fd29f0{display:grid;grid-template-columns:1fr 1fr;gap:12px}.form-field.jsx-f6ab171064fd29f0{display:grid;gap:6px}.form-field.jsx-f6ab171064fd29f0 label.jsx-f6ab171064fd29f0{font-size:13px;font-weight:600;color:#374151}.field-hint.jsx-f6ab171064fd29f0{font-weight:400;color:#9ca3af}.form-field.jsx-f6ab171064fd29f0 input.jsx-f6ab171064fd29f0,.form-field.jsx-f6ab171064fd29f0 textarea.jsx-f6ab171064fd29f0{width:100%;border:1.5px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:11px 14px;font:inherit;font-size:14px;color:#111;background:#fafafa;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.form-field.jsx-f6ab171064fd29f0 input.jsx-f6ab171064fd29f0:focus,.form-field.jsx-f6ab171064fd29f0 textarea.jsx-f6ab171064fd29f0:focus{outline:none;border-color:#6366f1;background:#fff;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.file-upload-wrap.jsx-f6ab171064fd29f0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.file-upload-btn.jsx-f6ab171064fd29f0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:11px 18px;border:1.5px dashed#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f9fafb;color:#374151;font-size:14px;font-weight:500;cursor:pointer;width:100%;-webkit-transition:border-color.15s;-moz-transition:border-color.15s;-o-transition:border-color.15s;transition:border-color.15s}.file-upload-btn.jsx-f6ab171064fd29f0:hover{border-color:#6366f1;color:#4f46e5}.form-error.jsx-f6ab171064fd29f0{margin:0;padding:10px 14px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fef2f2;border:1px solid#fecaca;color:#dc2626;font-size:13px;font-weight:600}.success-state.jsx-f6ab171064fd29f0{text-align:center;padding:48px 28px}.success-icon.jsx-f6ab171064fd29f0{width:72px;height:72px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#d1fae5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto 20px;color:#059669}.success-state.jsx-f6ab171064fd29f0 h2.jsx-f6ab171064fd29f0{margin:0 0 10px;font-size:22px;font-weight:800;color:#111827}.success-state.jsx-f6ab171064fd29f0 p.jsx-f6ab171064fd29f0{margin:0 0 24px;color:#6b7280;font-size:15px;line-height:1.6}@media(max-width:640px){.hero-content.jsx-f6ab171064fd29f0{padding:120px 20px 60px}.form-row.jsx-f6ab171064fd29f0{grid-template-columns:1fr}.jobs-grid.jsx-f6ab171064fd29f0{grid-template-columns:1fr}.cta-band-inner.jsx-f6ab171064fd29f0{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:center}.why-grid.jsx-f6ab171064fd29f0{grid-template-columns:1fr 1fr}.job-card-actions.jsx-f6ab171064fd29f0{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.btn-primary-sm.jsx-f6ab171064fd29f0{margin-left:0}}@media(max-width:400px){.why-grid.jsx-f6ab171064fd29f0{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_6__.getDbPool)();
        const [rows] = await db.query(`
      SELECT * FROM career_posts
      WHERE is_active = 1 AND deleted_at IS NULL
      ORDER BY display_order ASC, created_at DESC
    `);
        return {
            props: {
                jobs: JSON.parse(JSON.stringify(rows))
            }
        };
    } catch (e) {
        return {
            props: {
                jobs: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CareerPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(7365)));
module.exports = __webpack_exports__;

})();