"use strict";
(() => {
var exports = {};
exports.id = 6280;
exports.ids = [6280,7174,2984];
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

/***/ 9912:
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
/* harmony import */ var _SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5912);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2984);






const STATUS_OPTIONS = [
    "new",
    "reviewed",
    "shortlisted",
    "rejected"
];
const statusColors = {
    new: {
        bg: "#dbeafe",
        color: "#1e40af"
    },
    reviewed: {
        bg: "#fef3c7",
        color: "#92400e"
    },
    shortlisted: {
        bg: "#d1fae5",
        color: "#065f46"
    },
    rejected: {
        bg: "#fee2e2",
        color: "#991b1b"
    }
};
const formatDate = (d)=>d ? new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }) : "—";
const ApplicationsPage = ({ applications =[]  })=>{
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(applications);
    const { 0: updatingId , 1: setUpdatingId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: viewApp , 1: setViewApp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: statusFilter , 1: setStatusFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const filteredItems = statusFilter ? items.filter((a)=>a.status === statusFilter) : items;
    const updateStatus = async (id, newStatus)=>{
        setUpdatingId(id);
        try {
            await fetch(`/api/admin/career-applications/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            setItems((prev)=>prev.map((a)=>{
                    if (a.id === id) return Object.assign({}, a, {
                        status: newStatus
                    });
                    return a;
                }));
            if (viewApp && viewApp.id === id) setViewApp(Object.assign({}, viewApp, {
                status: newStatus
            }));
        } catch (e) {
            console.error(e);
        } finally{
            setUpdatingId(null);
        }
    };
    const deleteApp = async (id)=>{
        if (!window.confirm("Delete this application permanently?")) return;
        try {
            await fetch(`/api/admin/career-applications/${id}`, {
                method: "DELETE"
            });
            setItems((prev)=>prev.filter((a)=>a.id !== id));
            if (viewApp?.id === id) setViewApp(null);
        } catch (e) {
            console.error(e);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-f375c0bcc1973966",
                    children: "Applications | Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f375c0bcc1973966" + " " + "apps-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                        className: "jsx-f375c0bcc1973966" + " " + "page-header",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f375c0bcc1973966",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-f375c0bcc1973966",
                                        children: "Career Applications"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "jsx-f375c0bcc1973966",
                                        children: [
                                            filteredItems.length,
                                            " of ",
                                            items.length,
                                            " application",
                                            items.length !== 1 ? "s" : ""
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                value: statusFilter,
                                onChange: (e)=>setStatusFilter(e.target.value),
                                className: "jsx-f375c0bcc1973966" + " " + "status-filter",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        className: "jsx-f375c0bcc1973966",
                                        children: "All Status"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "new",
                                        className: "jsx-f375c0bcc1973966",
                                        children: "New"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "reviewed",
                                        className: "jsx-f375c0bcc1973966",
                                        children: "Reviewed"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "shortlisted",
                                        className: "jsx-f375c0bcc1973966",
                                        children: "Shortlisted"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "rejected",
                                        className: "jsx-f375c0bcc1973966",
                                        children: "Rejected"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-f375c0bcc1973966" + " " + "apps-layout",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f375c0bcc1973966" + " " + "apps-list-panel",
                                children: [
                                    filteredItems.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-f375c0bcc1973966" + " " + "empty-msg",
                                        children: "No applications match this filter."
                                    }),
                                    filteredItems.map((app)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>setViewApp(app),
                                            className: "jsx-f375c0bcc1973966" + " " + `app-card ${viewApp?.id === app.id ? "is-active" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "app-card-top",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            className: "jsx-f375c0bcc1973966",
                                                            children: app.applicant_name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                background: statusColors[app.status]?.bg,
                                                                color: statusColors[app.status]?.color
                                                            },
                                                            className: "jsx-f375c0bcc1973966" + " " + "status-badge",
                                                            children: app.status.charAt(0).toUpperCase() + app.status.slice(1)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "app-card-position",
                                                    children: app.job_title || "General"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "app-card-date",
                                                    children: formatDate(app.created_at)
                                                })
                                            ]
                                        }, app.id))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-f375c0bcc1973966" + " " + "apps-detail-panel",
                                children: viewApp ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f375c0bcc1973966" + " " + "detail-header",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-f375c0bcc1973966",
                                                    children: viewApp.applicant_name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>setViewApp(null),
                                                    className: "jsx-f375c0bcc1973966" + " " + "close-x",
                                                    children: "✕"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f375c0bcc1973966" + " " + "detail-content",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "info-grid",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "info-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-label",
                                                                    children: "Position Applied"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-value",
                                                                    children: viewApp.job_title || "—"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "info-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-label",
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-value",
                                                                    children: viewApp.email
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "info-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-label",
                                                                    children: "Phone"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-value",
                                                                    children: viewApp.phone || "Not provided"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "info-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-label",
                                                                    children: "Applied On"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-value",
                                                                    children: formatDate(viewApp.created_at)
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "info-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "info-label",
                                                                    children: "Status"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                    value: viewApp.status,
                                                                    disabled: updatingId === viewApp.id,
                                                                    onChange: (e)=>updateStatus(viewApp.id, e.target.value),
                                                                    style: {
                                                                        background: statusColors[viewApp.status]?.bg,
                                                                        color: statusColors[viewApp.status]?.color
                                                                    },
                                                                    className: "jsx-f375c0bcc1973966" + " " + "status-select",
                                                                    children: STATUS_OPTIONS.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: s,
                                                                            className: "jsx-f375c0bcc1973966",
                                                                            children: s.charAt(0).toUpperCase() + s.slice(1)
                                                                        }, s))
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                viewApp.cover_letter && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "detail-section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-f375c0bcc1973966",
                                                            children: "Cover Letter"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "text-box",
                                                            children: viewApp.cover_letter
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "detail-section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-f375c0bcc1973966",
                                                            children: "Resume / CV"
                                                        }),
                                                        viewApp.resume_path ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "resume-viewer",
                                                            children: [
                                                                viewApp.resume_path.toLowerCase().endsWith(".pdf") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                                    src: viewApp.resume_path,
                                                                    title: "Resume",
                                                                    className: "jsx-f375c0bcc1973966" + " " + "resume-iframe"
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-f375c0bcc1973966" + " " + "resume-download",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        className: "jsx-f375c0bcc1973966",
                                                                        children: [
                                                                            "Document format: ",
                                                                            viewApp.resume_path.split(".").pop().toUpperCase()
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    href: viewApp.resume_path,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "jsx-f375c0bcc1973966" + " " + "download-btn",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                            width: "16",
                                                                            height: "16",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            className: "jsx-f375c0bcc1973966",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                                                                                    className: "jsx-f375c0bcc1973966"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                                    points: "7 10 12 15 17 10",
                                                                                    className: "jsx-f375c0bcc1973966"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                                    x1: "12",
                                                                                    y1: "15",
                                                                                    x2: "12",
                                                                                    y2: "3",
                                                                                    className: "jsx-f375c0bcc1973966"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        "Download Resume"
                                                                    ]
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f375c0bcc1973966" + " " + "no-resume",
                                                            children: "No resume uploaded."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f375c0bcc1973966" + " " + "detail-actions",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: `mailto:${viewApp.email}?subject=Regarding your application for ${viewApp.job_title || "the position"}`,
                                                            className: "jsx-f375c0bcc1973966" + " " + "action-btn email-btn",
                                                            children: "Email Applicant"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>deleteApp(viewApp.id),
                                                            className: "jsx-f375c0bcc1973966" + " " + "action-btn delete-btn",
                                                            children: "Delete Application"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f375c0bcc1973966" + " " + "empty-detail",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "48",
                                            height: "48",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#d1d5db",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "jsx-f375c0bcc1973966",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
                                                    className: "jsx-f375c0bcc1973966"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "8.5",
                                                    cy: "7",
                                                    r: "4",
                                                    className: "jsx-f375c0bcc1973966"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "20",
                                                    y1: "8",
                                                    x2: "20",
                                                    y2: "14",
                                                    className: "jsx-f375c0bcc1973966"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "23",
                                                    y1: "11",
                                                    x2: "17",
                                                    y2: "11",
                                                    className: "jsx-f375c0bcc1973966"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-f375c0bcc1973966",
                                            children: "Select an application to view details"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f375c0bcc1973966",
                children: ".apps-page.jsx-f375c0bcc1973966{display:grid;gap:16px}.page-header.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.page-header.jsx-f375c0bcc1973966 h1.jsx-f375c0bcc1973966{margin:0;font-size:24px;color:#1f2937}.page-header.jsx-f375c0bcc1973966 p.jsx-f375c0bcc1973966{margin:4px 0 0;color:#6b7280;font-size:14px}.status-filter.jsx-f375c0bcc1973966{padding:9px 14px;border:2px solid#c7d2fe;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#fafbff;font:inherit;font-size:14px;cursor:pointer}.status-filter.jsx-f375c0bcc1973966:focus{outline:none;border-color:#6366f1}.apps-layout.jsx-f375c0bcc1973966{display:grid;grid-template-columns:340px 1fr;gap:16px;height:-webkit-calc(100vh - 200px);height:-moz-calc(100vh - 200px);height:calc(100vh - 200px);overflow:hidden}.apps-list-panel.jsx-f375c0bcc1973966{overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding-right:4px}.empty-msg.jsx-f375c0bcc1973966{color:#9ca3af;text-align:center;padding:40px 16px}.app-card.jsx-f375c0bcc1973966{border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:14px 16px;background:#fff;cursor:pointer;-webkit-transition:border-color.15s,box-shadow.15s;-moz-transition:border-color.15s,box-shadow.15s;-o-transition:border-color.15s,box-shadow.15s;transition:border-color.15s,box-shadow.15s}.app-card.jsx-f375c0bcc1973966:hover{border-color:#a5b4fc;-webkit-box-shadow:0 2px 8px rgba(99,102,241,.06);-moz-box-shadow:0 2px 8px rgba(99,102,241,.06);box-shadow:0 2px 8px rgba(99,102,241,.06)}.app-card.is-active.jsx-f375c0bcc1973966{border-color:#6366f1;background:#f5f3ff}.app-card-top.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.app-card-top.jsx-f375c0bcc1973966 strong.jsx-f375c0bcc1973966{font-size:14px;color:#111827}.status-badge.jsx-f375c0bcc1973966{font-size:11px;font-weight:700;padding:3px 8px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.app-card-position.jsx-f375c0bcc1973966{margin:4px 0 0;font-size:13px;color:#6b7280}.app-card-date.jsx-f375c0bcc1973966{display:block;margin-top:4px;font-size:11px;color:#9ca3af}.apps-detail-panel.jsx-f375c0bcc1973966{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.detail-header.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 24px;border-bottom:1px solid#f3f4f6}.detail-header.jsx-f375c0bcc1973966 h2.jsx-f375c0bcc1973966{margin:0;font-size:20px;color:#111827}.close-x.jsx-f375c0bcc1973966{border:none;background:transparent;font-size:22px;cursor:pointer;color:#9ca3af}.detail-content.jsx-f375c0bcc1973966{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:24px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.info-grid.jsx-f375c0bcc1973966{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;padding:18px;background:#f9fafb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;border:1px solid#f3f4f6}.info-item.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:3px}.info-label.jsx-f375c0bcc1973966{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280;font-weight:600}.info-value.jsx-f375c0bcc1973966{font-size:14px;color:#111827;font-weight:600}.status-select.jsx-f375c0bcc1973966{border:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:4px 10px;font-weight:700;font-size:12px;cursor:pointer}.detail-section.jsx-f375c0bcc1973966 h4.jsx-f375c0bcc1973966{margin:0 0 10px;font-size:13px;color:#374151;text-transform:uppercase;letter-spacing:.04em;font-weight:700}.text-box.jsx-f375c0bcc1973966{padding:14px 16px;border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f9fafb;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap}.resume-viewer.jsx-f375c0bcc1973966{display:grid;gap:12px}.resume-iframe.jsx-f375c0bcc1973966{width:100%;height:400px;border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.resume-download.jsx-f375c0bcc1973966{padding:24px;border:1px dashed#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;text-align:center;color:#6b7280}.download-btn.jsx-f375c0bcc1973966{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:10px 18px;border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#fff;color:#374151;font-size:14px;font-weight:600;text-decoration:none}.download-btn.jsx-f375c0bcc1973966:hover{background:#f3f4f6}.no-resume.jsx-f375c0bcc1973966{color:#9ca3af;font-size:14px}.detail-actions.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;padding-top:16px;border-top:1px solid#f3f4f6;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.action-btn.jsx-f375c0bcc1973966{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:9px 16px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;text-decoration:none}.email-btn.jsx-f375c0bcc1973966{border:1px solid#d1d5db;background:#fff;color:#374151}.email-btn.jsx-f375c0bcc1973966:hover{background:#f3f4f6}.delete-btn.jsx-f375c0bcc1973966{border:1px solid#fecaca;background:#fff;color:#dc2626}.delete-btn.jsx-f375c0bcc1973966:hover{background:#fef2f2}.empty-detail.jsx-f375c0bcc1973966{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;gap:12px;color:#9ca3af;font-size:14px}@media(max-width:900px){.apps-layout.jsx-f375c0bcc1973966{grid-template-columns:1fr;grid-template-rows:280px 1fr}}"
            })
        ]
    });
};
const getServerSideProps = async ({ req  })=>{
    try {
        const { verifyAdminSessionToken , ROLE_RESTRICTIONS  } = await __webpack_require__.e(/* import() */ 3164).then(__webpack_require__.bind(__webpack_require__, 3164));
        const cookieStr = req.headers?.cookie || "";
        const match = cookieStr.match(/mis_admin_session=([^;]+)/);
        if (match) {
            const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]));
            if (payload) {
                const restrictions = ROLE_RESTRICTIONS[payload.role] || [];
                if (restrictions.includes("applications")) {
                    return {
                        redirect: {
                            destination: "/portal-secure-99x",
                            permanent: false
                        }
                    };
                }
            }
        }
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_5__.getDbPool)();
        const [rows] = await db.query(`
      SELECT ca.*, cp.title AS job_title
      FROM career_applications ca
      LEFT JOIN career_posts cp ON cp.id = ca.career_post_id
      ORDER BY
        CASE ca.status WHEN 'new' THEN 0 WHEN 'reviewed' THEN 1 WHEN 'shortlisted' THEN 2 ELSE 3 END,
        ca.created_at DESC
      LIMIT 200
    `);
        return {
            props: {
                applications: JSON.parse(JSON.stringify(rows))
            }
        };
    } catch (e) {
        return {
            props: {
                applications: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationsPage);


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

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(9912)));
module.exports = __webpack_exports__;

})();