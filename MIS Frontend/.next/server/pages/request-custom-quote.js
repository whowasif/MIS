"use strict";
(() => {
var exports = {};
exports.id = 4639;
exports.ids = [4639,7174];
exports.modules = {

/***/ 8394:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_5__]);
_components_footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const RequestCustomQuote = ({ serviceOptions =[]  })=>{
    const { 0: submitting , 1: setSubmitting  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: submitted , 1: setSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSubmitting(true);
        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch("/api/quotes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    clientName: formData.get("fullName"),
                    companyName: formData.get("companyName"),
                    email: formData.get("businessEmail"),
                    projectType: formData.get("projectType"),
                    requirements: formData.get("projectRequirements")
                })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Something went wrong.");
            }
            setSubmitted(true);
        } catch (err) {
            setError(err.message);
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-da3beaeb333b2bea" + " " + "quote-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-da3beaeb333b2bea",
                                children: "Request a Custom Quote | MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Request a custom enterprise or B2B quote from MIS Solution for networking, security, data center, hardware, and maintenance projects.",
                                className: "jsx-da3beaeb333b2bea"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "jsx-da3beaeb333b2bea" + " " + "quote-main",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-da3beaeb333b2bea" + " " + "quote-hero",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-da3beaeb333b2bea" + " " + "quote-kicker",
                                        children: "Enterprise Sales"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-da3beaeb333b2bea",
                                        children: "Request a Custom Quote"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-da3beaeb333b2bea",
                                        children: "Share your business requirements and our corporate engineering team will prepare a tailored commercial proposal for your organization."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-da3beaeb333b2bea" + " " + "quote-layout",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-da3beaeb333b2bea" + " " + "quote-form-panel",
                                        children: submitted ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-da3beaeb333b2bea" + " " + "success-state",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-da3beaeb333b2bea",
                                                    children: "Quote Request Submitted!"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-da3beaeb333b2bea",
                                                    children: "Thank you. Our engineering team will review your requirements and respond within 24 hours."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    onClick: ()=>setSubmitted(false),
                                                    className: "jsx-da3beaeb333b2bea" + " " + "submit-btn",
                                                    children: "Submit Another Request"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-da3beaeb333b2bea",
                                                    children: "Project Inquiry Form"
                                                }),
                                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-da3beaeb333b2bea" + " " + "form-error",
                                                    children: error
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                    onSubmit: handleSubmit,
                                                    className: "jsx-da3beaeb333b2bea" + " " + "quote-form",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-da3beaeb333b2bea" + " " + "field-group",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "fullName",
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: "Full Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "fullName",
                                                                    name: "fullName",
                                                                    type: "text",
                                                                    placeholder: "Enter your full name",
                                                                    required: true,
                                                                    className: "jsx-da3beaeb333b2bea"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-da3beaeb333b2bea" + " " + "field-group",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "companyName",
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: "Company Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "companyName",
                                                                    name: "companyName",
                                                                    type: "text",
                                                                    placeholder: "Enter your company name",
                                                                    required: true,
                                                                    className: "jsx-da3beaeb333b2bea"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-da3beaeb333b2bea" + " " + "field-group two-col",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "businessEmail",
                                                                            className: "jsx-da3beaeb333b2bea",
                                                                            children: "Business Email"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            id: "businessEmail",
                                                                            name: "businessEmail",
                                                                            type: "email",
                                                                            placeholder: "name@company.com",
                                                                            required: true,
                                                                            className: "jsx-da3beaeb333b2bea"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: "phoneNumber",
                                                                            className: "jsx-da3beaeb333b2bea",
                                                                            children: "Phone Number"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            id: "phoneNumber",
                                                                            name: "phoneNumber",
                                                                            type: "tel",
                                                                            placeholder: "+880 1XXXXXXXXX",
                                                                            required: true,
                                                                            className: "jsx-da3beaeb333b2bea"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-da3beaeb333b2bea" + " " + "field-group",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "projectType",
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: "Project Type"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    id: "projectType",
                                                                    name: "projectType",
                                                                    required: true,
                                                                    defaultValue: "",
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            className: "jsx-da3beaeb333b2bea",
                                                                            children: "Select project type"
                                                                        }),
                                                                        serviceOptions.length > 0 ? serviceOptions.map((group)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("optgroup", {
                                                                                label: group.label,
                                                                                className: "jsx-da3beaeb333b2bea",
                                                                                children: group.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                        value: item.name,
                                                                                        className: "jsx-da3beaeb333b2bea",
                                                                                        children: item.name
                                                                                    }, item.id))
                                                                            }, group.label)) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "Enterprise Networking",
                                                                                    className: "jsx-da3beaeb333b2bea",
                                                                                    children: "Enterprise Networking"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "CCTV & Security",
                                                                                    className: "jsx-da3beaeb333b2bea",
                                                                                    children: "CCTV & Security"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "Data Center",
                                                                                    className: "jsx-da3beaeb333b2bea",
                                                                                    children: "Data Center"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "Bulk Hardware",
                                                                                    className: "jsx-da3beaeb333b2bea",
                                                                                    children: "Bulk Hardware"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                    value: "Maintenance Contract",
                                                                                    className: "jsx-da3beaeb333b2bea",
                                                                                    children: "Maintenance Contract"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-da3beaeb333b2bea" + " " + "field-group",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    htmlFor: "projectRequirements",
                                                                    className: "jsx-da3beaeb333b2bea",
                                                                    children: "Project Requirements"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    id: "projectRequirements",
                                                                    name: "projectRequirements",
                                                                    placeholder: "Please describe your scope, expected timeline, sites, quantities, and technical requirements.",
                                                                    rows: "8",
                                                                    required: true,
                                                                    className: "jsx-da3beaeb333b2bea"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            disabled: submitting,
                                                            className: "jsx-da3beaeb333b2bea" + " " + "submit-btn",
                                                            children: submitting ? "Submitting..." : "Submit Quote Request"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                                        "aria-label": "Direct Contact",
                                        className: "jsx-da3beaeb333b2bea" + " " + "quote-contact-panel",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-da3beaeb333b2bea",
                                                children: "Direct Contact"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-da3beaeb333b2bea",
                                                children: "Reach our corporate sales desk anytime for urgent enterprise tenders and project consultations."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-da3beaeb333b2bea" + " " + "contact-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-da3beaeb333b2bea" + " " + "contact-label",
                                                        children: "24/7 Corporate Sales Hotline"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "tel:+8801700000000",
                                                        className: "jsx-da3beaeb333b2bea",
                                                        children: "+880 17 0000 0000"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-da3beaeb333b2bea" + " " + "contact-item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-da3beaeb333b2bea" + " " + "contact-label",
                                                        children: "Email Address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "mailto:projects@missolution.com",
                                                        className: "jsx-da3beaeb333b2bea",
                                                        children: "projects@missolution.com"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-da3beaeb333b2bea" + " " + "response-badge",
                                                children: "Our engineers will respond within 24 hours"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "da3beaeb333b2bea",
                children: ".quote-page.jsx-da3beaeb333b2bea{min-height:100vh;background:#fff;color:#2f2f2f}.quote-main.jsx-da3beaeb333b2bea{margin:0 auto;width:100%;max-width:1200px;padding:2.5rem 1.25rem 5rem}.quote-hero.jsx-da3beaeb333b2bea{margin-bottom:2rem;padding:2.25rem;border:1px solid#1f2329;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;background:#fff}.quote-kicker.jsx-da3beaeb333b2bea{display:inline-block;margin:0 0 .75rem;padding:.2rem .7rem;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:#1f2329;border:1px solid#1f2329;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;font-weight:600}.quote-hero.jsx-da3beaeb333b2bea h1.jsx-da3beaeb333b2bea{margin:0;font-size:clamp(2rem,3.5vw,2.75rem);line-height:1.15;color:#1f2329;font-weight:700}.quote-hero.jsx-da3beaeb333b2bea p.jsx-da3beaeb333b2bea{margin:.9rem 0 0;max-width:58ch;font-size:1rem;line-height:1.75;color:#3d434b}.quote-layout.jsx-da3beaeb333b2bea{display:grid;grid-template-columns:minmax(0,1.7fr)minmax(0,1fr);gap:1.25rem}.quote-form-panel.jsx-da3beaeb333b2bea,.quote-contact-panel.jsx-da3beaeb333b2bea{-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;border:1px solid#1f2329;background:#1f2329;color:#f6f7f9;padding:1.5rem}.quote-form-panel.jsx-da3beaeb333b2bea h2.jsx-da3beaeb333b2bea,.quote-contact-panel.jsx-da3beaeb333b2bea h2.jsx-da3beaeb333b2bea{margin:0;color:#fff;font-size:1.3rem;font-weight:700}.quote-form.jsx-da3beaeb333b2bea{margin-top:1.1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:1rem}.field-group.jsx-da3beaeb333b2bea{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:.45rem}.field-group.two-col.jsx-da3beaeb333b2bea{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}.field-group.jsx-da3beaeb333b2bea label.jsx-da3beaeb333b2bea,.contact-label.jsx-da3beaeb333b2bea{font-size:.84rem;letter-spacing:.02em;color:#d9dde3;font-weight:600}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea,.field-group.jsx-da3beaeb333b2bea select.jsx-da3beaeb333b2bea,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea{width:100%;border:1px solid#474e58;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#282d34;color:#fff;font-size:.96rem;line-height:1.4;padding:.78rem .85rem}.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea{resize:vertical;min-height:170px}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea::-webkit-input-placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea::-webkit-input-placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea:-moz-placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea:-moz-placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea::-moz-placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea::-moz-placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea:-ms-input-placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea:-ms-input-placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea::-ms-input-placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea::-ms-input-placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea::placeholder,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea::placeholder{color:#a2aab6}.field-group.jsx-da3beaeb333b2bea input.jsx-da3beaeb333b2bea:focus,.field-group.jsx-da3beaeb333b2bea select.jsx-da3beaeb333b2bea:focus,.field-group.jsx-da3beaeb333b2bea textarea.jsx-da3beaeb333b2bea:focus{outline:2px solid#f7e500;outline-offset:1px;border-color:#f7e500}.submit-btn.jsx-da3beaeb333b2bea{margin-top:.35rem;border:none;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:.95rem 1rem;font-size:.98rem;font-weight:700;cursor:pointer;color:#101010;background:#f7e500;-webkit-transition:-webkit-transform.2s ease,box-shadow.2s ease;-moz-transition:-moz-transform.2s ease,box-shadow.2s ease;-o-transition:-o-transform.2s ease,box-shadow.2s ease;transition:-webkit-transform.2s ease,box-shadow.2s ease;transition:-moz-transform.2s ease,box-shadow.2s ease;transition:-o-transform.2s ease,box-shadow.2s ease;transition:transform.2s ease,box-shadow.2s ease}.submit-btn.jsx-da3beaeb333b2bea:hover{-webkit-transform:translateY(-1px);-moz-transform:translateY(-1px);-ms-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 10px 24px rgba(247,229,0,.25);-moz-box-shadow:0 10px 24px rgba(247,229,0,.25);box-shadow:0 10px 24px rgba(247,229,0,.25)}.submit-btn.jsx-da3beaeb333b2bea:disabled{opacity:.6;cursor:wait;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.form-error.jsx-da3beaeb333b2bea{margin:.5rem 0;padding:.7rem .9rem;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:rgba(220,50,50,.15);color:#ff6b6b;font-size:.9rem;font-weight:600}.success-state.jsx-da3beaeb333b2bea{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:1rem;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.success-state.jsx-da3beaeb333b2bea h2.jsx-da3beaeb333b2bea{color:#f7e500}.success-state.jsx-da3beaeb333b2bea p.jsx-da3beaeb333b2bea{color:#dce1e8;line-height:1.7}.quote-contact-panel.jsx-da3beaeb333b2bea p.jsx-da3beaeb333b2bea{margin:.9rem 0 1.25rem;color:#dce1e8;line-height:1.7}.contact-item.jsx-da3beaeb333b2bea{margin-bottom:1rem;padding:.85rem;border:1px solid#3b414b;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#282d34}.contact-item.jsx-da3beaeb333b2bea a.jsx-da3beaeb333b2bea{display:inline-block;margin-top:.35rem;color:#fff;text-decoration:none;font-weight:600}.response-badge.jsx-da3beaeb333b2bea{margin-top:.75rem;border:1px solid#f7e500;background:rgba(247,229,0,.12);color:#f7e500;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;padding:.58rem .9rem;font-size:.87rem;font-weight:700;text-align:center}@media(max-width:960px){.quote-layout.jsx-da3beaeb333b2bea{grid-template-columns:1fr}.field-group.two-col.jsx-da3beaeb333b2bea{grid-template-columns:1fr}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const db = getDbPool();
        const [digi] = await db.query("SELECT id, name FROM digi_services WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, name ASC");
        const [biz] = await db.query("SELECT id, name FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, name ASC");
        const [maint] = await db.query("SELECT id, name FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, name ASC");
        const serviceOptions = [
            {
                label: "Digital Services",
                items: JSON.parse(JSON.stringify(digi))
            },
            {
                label: "Business & Corporate Solutions",
                items: JSON.parse(JSON.stringify(biz))
            },
            {
                label: "Service & Maintenance",
                items: JSON.parse(JSON.stringify(maint))
            }, 
        ];
        return {
            props: {
                serviceOptions
            }
        };
    } catch (e) {
        return {
            props: {
                serviceOptions: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestCustomQuote);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(8394)));
module.exports = __webpack_exports__;

})();