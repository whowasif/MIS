"use strict";
(() => {
var exports = {};
exports.id = 8216;
exports.ids = [8216,7174,2984];
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

/***/ 5258:
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
    "in_progress",
    "closed"
];
const statusLabels = {
    new: "New",
    in_progress: "In Progress",
    closed: "Closed"
};
const statusColors = {
    new: {
        bg: "#dbeafe",
        color: "#1e40af"
    },
    in_progress: {
        bg: "#fef3c7",
        color: "#92400e"
    },
    closed: {
        bg: "#d1fae5",
        color: "#065f46"
    }
};
const formatDate = (d)=>d ? new Date(d).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }) : "—";
const QuotesManagerPage = ({ initialQuotes =[]  })=>{
    const { 0: quotes , 1: setQuotes  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialQuotes);
    const { 0: activeQuote , 1: setActiveQuote  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: replyText , 1: setReplyText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: saving , 1: setSaving  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: statusFilter , 1: setStatusFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    const filteredQuotes = statusFilter === "all" ? quotes : quotes.filter((q)=>q.status === statusFilter);
    const openQuote = (quote)=>{
        setActiveQuote(quote);
        setReplyText(quote.admin_reply || "");
    };
    const closePanel = ()=>{
        setActiveQuote(null);
        setReplyText("");
    };
    const updateQuote = async (quoteId, data)=>{
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/quotes/${quoteId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const stateUpdate = {};
                if (data.status) stateUpdate.status = data.status;
                if (data.adminReply !== undefined) stateUpdate.admin_reply = data.adminReply;
                setQuotes((prev)=>prev.map((q)=>q.id === quoteId ? {
                            ...q,
                            ...stateUpdate
                        } : q));
                if (activeQuote?.id === quoteId) {
                    setActiveQuote((prev)=>({
                            ...prev,
                            ...stateUpdate
                        }));
                }
            } else {
                const err = await res.json();
                alert(err.error || "Failed to save.");
            }
        } catch (e) {
            console.error("Update failed", e);
            alert("Network error. Please try again.");
        } finally{
            setSaving(false);
        }
    };
    const saveReply = async ()=>{
        if (!activeQuote || !replyText.trim()) return;
        await updateQuote(activeQuote.id, {
            adminReply: replyText.trim(),
            status: "in_progress"
        });
    };
    const changeStatus = async (quoteId, newStatus)=>{
        await updateQuote(quoteId, {
            status: newStatus
        });
    };
    const deleteQuote = async (quoteId)=>{
        if (!window.confirm("Delete this quote permanently?")) return;
        try {
            await fetch(`/api/admin/quotes/${quoteId}`, {
                method: "DELETE"
            });
            setQuotes((prev)=>prev.filter((q)=>q.id !== quoteId));
            if (activeQuote?.id === quoteId) closePanel();
        } catch (e) {
            console.error("Delete failed", e);
        }
    };
    const sendViaEmail = ()=>{
        if (!activeQuote || !replyText.trim()) return;
        const subject = encodeURIComponent(`Re: Quote Request - ${activeQuote.project_type || "Project Inquiry"}`);
        const body = encodeURIComponent(`Dear ${activeQuote.client_name},\n\nThank you for your inquiry regarding "${activeQuote.project_type || "your project"}".\n\n${replyText}\n\nBest regards,\nMIS Solution Team`);
        window.location.href = `mailto:${activeQuote.email}?subject=${subject}&body=${body}`;
    };
    const sendViaWhatsApp = ()=>{
        if (!activeQuote || !replyText.trim()) return;
        const message = encodeURIComponent(`Dear ${activeQuote.client_name},\n\nRegarding your quote request for "${activeQuote.project_type || "your project"}":\n\n${replyText}\n\n— MIS Solution`);
        window.location.href = `https://api.whatsapp.com/send?text=${message}`;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_SecureAdminLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: "jsx-778b706394c29f2b",
                    children: "Quotes | Admin"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-778b706394c29f2b" + " " + "quotes-page",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: "jsx-778b706394c29f2b" + " " + "page-header",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-778b706394c29f2b" + " " + "header-top",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-778b706394c29f2b",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-778b706394c29f2b",
                                            children: "Quote Requests"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "jsx-778b706394c29f2b",
                                            children: [
                                                filteredQuotes.length,
                                                " of ",
                                                quotes.length,
                                                " quotes"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-778b706394c29f2b" + " " + "filter-group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: "status-filter",
                                            className: "jsx-778b706394c29f2b",
                                            children: "Status:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            id: "status-filter",
                                            value: statusFilter,
                                            onChange: (e)=>setStatusFilter(e.target.value),
                                            className: "jsx-778b706394c29f2b" + " " + "filter-select",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "all",
                                                    className: "jsx-778b706394c29f2b",
                                                    children: "All"
                                                }),
                                                STATUS_OPTIONS.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: s,
                                                        className: "jsx-778b706394c29f2b",
                                                        children: statusLabels[s]
                                                    }, s))
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-778b706394c29f2b" + " " + "quotes-layout",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-778b706394c29f2b" + " " + "list-panel",
                                children: [
                                    filteredQuotes.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-778b706394c29f2b" + " " + "empty-msg",
                                        children: "No quote requests found."
                                    }),
                                    filteredQuotes.map((quote)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            onClick: ()=>openQuote(quote),
                                            className: "jsx-778b706394c29f2b" + " " + `quote-card ${activeQuote?.id === quote.id ? "is-active" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "card-top",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            className: "jsx-778b706394c29f2b",
                                                            children: quote.client_name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                background: statusColors[quote.status]?.bg,
                                                                color: statusColors[quote.status]?.color
                                                            },
                                                            className: "jsx-778b706394c29f2b" + " " + "badge",
                                                            children: statusLabels[quote.status] || quote.status
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-778b706394c29f2b" + " " + "card-company",
                                                    children: quote.company_name || "—"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-778b706394c29f2b" + " " + "card-type",
                                                    children: quote.project_type || "General"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-778b706394c29f2b" + " " + "card-date",
                                                    children: formatDate(quote.created_at)
                                                })
                                            ]
                                        }, quote.id))
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-778b706394c29f2b" + " " + "detail-panel",
                                children: activeQuote ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-778b706394c29f2b" + " " + "detail-head",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            className: "jsx-778b706394c29f2b",
                                                            children: activeQuote.client_name
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "jsx-778b706394c29f2b" + " " + "head-sub",
                                                            children: [
                                                                activeQuote.company_name || "",
                                                                " • ",
                                                                activeQuote.email
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: closePanel,
                                                    className: "jsx-778b706394c29f2b" + " " + "close-x",
                                                    children: "✕"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-778b706394c29f2b" + " " + "detail-content",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "meta-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "meta-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-778b706394c29f2b" + " " + "meta-label",
                                                                    children: "Project Type"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-778b706394c29f2b" + " " + "meta-val",
                                                                    children: activeQuote.project_type || "—"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "meta-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-778b706394c29f2b" + " " + "meta-label",
                                                                    children: "Status"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                                    value: activeQuote.status,
                                                                    onChange: (e)=>changeStatus(activeQuote.id, e.target.value),
                                                                    style: {
                                                                        background: statusColors[activeQuote.status]?.bg,
                                                                        color: statusColors[activeQuote.status]?.color
                                                                    },
                                                                    className: "jsx-778b706394c29f2b" + " " + "status-select",
                                                                    children: STATUS_OPTIONS.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: s,
                                                                            className: "jsx-778b706394c29f2b",
                                                                            children: statusLabels[s]
                                                                        }, s))
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "meta-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-778b706394c29f2b" + " " + "meta-label",
                                                                    children: "Received"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-778b706394c29f2b" + " " + "meta-val",
                                                                    children: formatDate(activeQuote.created_at)
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-778b706394c29f2b",
                                                            children: "Client Requirements"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "req-box",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-778b706394c29f2b",
                                                                children: activeQuote.requirements_text
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-778b706394c29f2b",
                                                            children: "Your Reply"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            rows: "5",
                                                            value: replyText,
                                                            onChange: (e)=>setReplyText(e.target.value),
                                                            placeholder: "Write your response — pricing, timeline, clarifications...",
                                                            className: "jsx-778b706394c29f2b" + " " + "reply-input"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "action-row",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    onClick: saveReply,
                                                                    disabled: saving || !replyText.trim(),
                                                                    className: "jsx-778b706394c29f2b" + " " + "btn-save",
                                                                    children: saving ? "Saving..." : "Save Draft"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    onClick: sendViaEmail,
                                                                    disabled: !replyText.trim(),
                                                                    className: "jsx-778b706394c29f2b" + " " + "btn-email",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                            width: "15",
                                                                            height: "15",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            className: "jsx-778b706394c29f2b",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                                                    className: "jsx-778b706394c29f2b"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                                                    points: "22,6 12,13 2,6",
                                                                                    className: "jsx-778b706394c29f2b"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        "Send via Email"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                    onClick: sendViaWhatsApp,
                                                                    disabled: !replyText.trim(),
                                                                    className: "jsx-778b706394c29f2b" + " " + "btn-whatsapp",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "15",
                                                                            height: "15",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "currentColor",
                                                                            className: "jsx-778b706394c29f2b",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                                                                                className: "jsx-778b706394c29f2b"
                                                                            })
                                                                        }),
                                                                        "Send via WhatsApp"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                activeQuote.admin_reply && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "section",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "jsx-778b706394c29f2b",
                                                            children: "Saved Reply"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-778b706394c29f2b" + " " + "saved-box",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-778b706394c29f2b",
                                                                children: activeQuote.admin_reply
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-778b706394c29f2b" + " " + "danger-zone",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>deleteQuote(activeQuote.id),
                                                        className: "jsx-778b706394c29f2b" + " " + "btn-delete",
                                                        children: "Delete Quote"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-778b706394c29f2b" + " " + "empty-detail",
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
                                            className: "jsx-778b706394c29f2b",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                    className: "jsx-778b706394c29f2b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
                                                    points: "14 2 14 8 20 8",
                                                    className: "jsx-778b706394c29f2b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "16",
                                                    y1: "13",
                                                    x2: "8",
                                                    y2: "13",
                                                    className: "jsx-778b706394c29f2b"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                    x1: "16",
                                                    y1: "17",
                                                    x2: "8",
                                                    y2: "17",
                                                    className: "jsx-778b706394c29f2b"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-778b706394c29f2b",
                                            children: "Select a quote from the list to view details and reply."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "778b706394c29f2b",
                children: ".quotes-page.jsx-778b706394c29f2b{display:grid;gap:16px}.page-header.jsx-778b706394c29f2b h1.jsx-778b706394c29f2b{margin:0;font-size:24px;color:#1f2937}.page-header.jsx-778b706394c29f2b p.jsx-778b706394c29f2b{margin:4px 0 0;color:#6b7280;font-size:14px}.header-top.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px}.filter-group.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.filter-group.jsx-778b706394c29f2b label.jsx-778b706394c29f2b{font-size:13px;font-weight:600;color:#374151}.filter-select.jsx-778b706394c29f2b{border:1px solid#d1d5db;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:7px 12px;font-size:13px;font-weight:600;color:#1f2937;background:#fff;cursor:pointer;min-width:130px}.filter-select.jsx-778b706394c29f2b:focus{outline:none;border-color:#6366f1;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.quotes-layout.jsx-778b706394c29f2b{display:grid;grid-template-columns:320px 1fr;gap:16px;height:-webkit-calc(100vh - 200px);height:-moz-calc(100vh - 200px);height:calc(100vh - 200px);overflow:hidden}.list-panel.jsx-778b706394c29f2b{overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;padding-right:4px}.empty-msg.jsx-778b706394c29f2b{color:#9ca3af;text-align:center;padding:40px 16px}.quote-card.jsx-778b706394c29f2b{border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:12px 14px;background:#fff;cursor:pointer;-webkit-transition:border-color.15s,box-shadow.15s;-moz-transition:border-color.15s,box-shadow.15s;-o-transition:border-color.15s,box-shadow.15s;transition:border-color.15s,box-shadow.15s}.quote-card.jsx-778b706394c29f2b:hover{border-color:#a5b4fc;-webkit-box-shadow:0 2px 8px rgba(99,102,241,.08);-moz-box-shadow:0 2px 8px rgba(99,102,241,.08);box-shadow:0 2px 8px rgba(99,102,241,.08)}.quote-card.is-active.jsx-778b706394c29f2b{border-color:#6366f1;background:#f5f3ff}.card-top.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.card-top.jsx-778b706394c29f2b strong.jsx-778b706394c29f2b{font-size:14px;color:#111827}.badge.jsx-778b706394c29f2b{font-size:11px;font-weight:700;padding:3px 8px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.card-company.jsx-778b706394c29f2b{margin:4px 0 0;font-size:13px;color:#6b7280}.card-type.jsx-778b706394c29f2b{margin:2px 0 0;font-size:12px;color:#9ca3af;text-transform:capitalize}.card-date.jsx-778b706394c29f2b{display:block;margin-top:6px;font-size:11px;color:#9ca3af}.detail-panel.jsx-778b706394c29f2b{border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#fff;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.detail-head.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:20px 24px;border-bottom:1px solid#f3f4f6}.detail-head.jsx-778b706394c29f2b h2.jsx-778b706394c29f2b{margin:0;font-size:18px;color:#111827}.head-sub.jsx-778b706394c29f2b{margin:4px 0 0;font-size:13px;color:#6b7280}.close-x.jsx-778b706394c29f2b{border:none;background:transparent;font-size:20px;cursor:pointer;color:#9ca3af;padding:4px 8px}.detail-content.jsx-778b706394c29f2b{padding:20px 24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.meta-row.jsx-778b706394c29f2b{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.meta-item.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.meta-label.jsx-778b706394c29f2b{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280;font-weight:600}.meta-val.jsx-778b706394c29f2b{font-size:14px;color:#111827;font-weight:600}.status-select.jsx-778b706394c29f2b{border:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:5px 10px;font-weight:700;font-size:12px;cursor:pointer}.section.jsx-778b706394c29f2b h4.jsx-778b706394c29f2b{margin:0 0 10px;font-size:12px;color:#374151;text-transform:uppercase;letter-spacing:.05em;font-weight:700}.req-box.jsx-778b706394c29f2b{padding:14px 16px;border:1px solid#e5e7eb;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#f9fafb}.req-box.jsx-778b706394c29f2b p.jsx-778b706394c29f2b{margin:0;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap}.reply-input.jsx-778b706394c29f2b{width:100%;border:1px solid#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:12px 14px;font:inherit;font-size:14px;color:#1f2937;line-height:1.6;resize:vertical;min-height:100px}.reply-input.jsx-778b706394c29f2b:focus{outline:none;border-color:#6366f1;-webkit-box-shadow:0 0 0 3px rgba(99,102,241,.1);-moz-box-shadow:0 0 0 3px rgba(99,102,241,.1);box-shadow:0 0 0 3px rgba(99,102,241,.1)}.reply-input.jsx-778b706394c29f2b::-webkit-input-placeholder{color:#9ca3af}.reply-input.jsx-778b706394c29f2b:-moz-placeholder{color:#9ca3af}.reply-input.jsx-778b706394c29f2b::-moz-placeholder{color:#9ca3af}.reply-input.jsx-778b706394c29f2b:-ms-input-placeholder{color:#9ca3af}.reply-input.jsx-778b706394c29f2b::-ms-input-placeholder{color:#9ca3af}.reply-input.jsx-778b706394c29f2b::placeholder{color:#9ca3af}.action-row.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:8px;margin-top:10px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.btn-save.jsx-778b706394c29f2b,.btn-email.jsx-778b706394c29f2b,.btn-whatsapp.jsx-778b706394c29f2b{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:9px 16px;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap}.btn-save.jsx-778b706394c29f2b{background:#4f46e5;color:#fff}.btn-save.jsx-778b706394c29f2b:disabled{opacity:.5;cursor:not-allowed}.btn-save.jsx-778b706394c29f2b:hover:not(:disabled){background:#4338ca}.btn-email.jsx-778b706394c29f2b{background:#f3f4f6;color:#374151;border:1px solid#d1d5db}.btn-email.jsx-778b706394c29f2b:hover:not(:disabled){background:#e5e7eb}.btn-email.jsx-778b706394c29f2b:disabled{opacity:.5;cursor:not-allowed}.btn-whatsapp.jsx-778b706394c29f2b{background:#22c55e;color:#fff}.btn-whatsapp.jsx-778b706394c29f2b:hover:not(:disabled){background:#16a34a}.btn-whatsapp.jsx-778b706394c29f2b:disabled{opacity:.5;cursor:not-allowed}.saved-box.jsx-778b706394c29f2b{padding:14px 16px;border:1px solid#d1fae5;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#ecfdf5}.saved-box.jsx-778b706394c29f2b p.jsx-778b706394c29f2b{margin:0;font-size:14px;color:#065f46;line-height:1.7;white-space:pre-wrap}.danger-zone.jsx-778b706394c29f2b{border-top:1px solid#f3f4f6;padding-top:16px}.btn-delete.jsx-778b706394c29f2b{border:1px solid#fecaca;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 16px;background:#fff;color:#dc2626;font-size:13px;font-weight:600;cursor:pointer}.btn-delete.jsx-778b706394c29f2b:hover{background:#fef2f2}.empty-detail.jsx-778b706394c29f2b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;gap:12px;color:#9ca3af;font-size:14px}@media(max-width:900px){.quotes-layout.jsx-778b706394c29f2b{grid-template-columns:1fr;grid-template-rows:280px 1fr}}"
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
                if (restrictions.includes("quotes-manager")) {
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
      SELECT * FROM quotes
      WHERE deleted_at IS NULL
      ORDER BY
        CASE status WHEN 'new' THEN 0 WHEN 'in_progress' THEN 1 ELSE 2 END,
        created_at DESC
      LIMIT 200
    `);
        return {
            props: {
                initialQuotes: JSON.parse(JSON.stringify(rows))
            }
        };
    } catch (e) {
        return {
            props: {
                initialQuotes: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuotesManagerPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5912], () => (__webpack_exec__(5258)));
module.exports = __webpack_exports__;

})();