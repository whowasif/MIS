"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335,7174];
exports.modules = {

/***/ 8357:
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
/* harmony import */ var dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7027);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__, _components_footer__WEBPACK_IMPORTED_MODULE_7__]);
([dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__, _components_footer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const fallbackCompanyContact = {
    branchName: "Main Branch",
    fullAddress: "Address not available",
    googleMapEmbedUrl: null,
    latitude: null,
    longitude: null,
    primaryEmail: "support@missolution.com",
    supportEmail: null,
    hotlinePhone: "N/A"
};
const isValidCoordinate = (value, min, max)=>value !== null && value !== undefined && String(value).trim() !== "" && Number.isFinite(Number(value)) && Number(value) >= min && Number(value) <= max;
const buildGoogleMapEmbedUrl = (contact)=>{
    if (contact.googleMapEmbedUrl) return contact.googleMapEmbedUrl;
    const { latitude , longitude , fullAddress  } = contact;
    if (isValidCoordinate(latitude, -90, 90) && isValidCoordinate(longitude, -180, 180)) {
        return `https://www.google.com/maps?q=${Number(latitude)},${Number(longitude)}&z=16&output=embed`;
    }
    const query = encodeURIComponent(fullAddress || fallbackCompanyContact.fullAddress);
    return `https://www.google.com/maps?q=${query}&z=16&output=embed`;
};
const sanitizePhoneForTel = (phoneValue)=>String(phoneValue || "").replace(/\s+/g, "").replace(/(?!^\+)\D/g, "");
const Contact = (props)=>{
    const companyContact = props.companyContact || fallbackCompanyContact;
    const serviceOptions = props.serviceOptions || [];
    const supportEmail = companyContact.supportEmail || companyContact.primaryEmail;
    const hotlineTel = sanitizePhoneForTel(companyContact.hotlinePhone);
    const mapEmbedUrl = buildGoogleMapEmbedUrl(companyContact);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-528c56c61e0a9a8b" + " " + "contact-container1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-528c56c61e0a9a8b",
                                children: "Contact - Ideal Real Porpoise"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Contact - Ideal Real Porpoise",
                                className: "jsx-528c56c61e0a9a8b"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "canonical",
                                href: "https://ideal-real-porpoise-ox0ksz.teleporthq.app/contact",
                                className: "jsx-528c56c61e0a9a8b"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:url",
                                content: "https://ideal-real-porpoise-ox0ksz.teleporthq.app/contact",
                                className: "jsx-528c56c61e0a9a8b"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-media",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/8867261/pexels-photo-8867261.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "MIS Solution Support Center",
                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-image"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-container",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "hero-title",
                                            children: "Get in Touch with MIS Solution"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "hero-subtitle",
                                            children: "Your premier destination for comprehensive e-commerce and corporate IT services. We are here to support your journey towards technological excellence with expert solutions and dedicated support."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "contact-hero-badge",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-528c56c61e0a9a8b" + " " + "badge-icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        className: "jsx-528c56c61e0a9a8b",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            className: "jsx-528c56c61e0a9a8b",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    className: "jsx-528c56c61e0a9a8b"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M12 6v6l4 2",
                                                                    className: "jsx-528c56c61e0a9a8b"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "jsx-528c56c61e0a9a8b",
                                                    children: "Available 24/7 for you"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-details",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-528c56c61e0a9a8b" + " " + "contact-details-inner",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-528c56c61e0a9a8b" + " " + "contact-info-panel",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "section-title",
                                            children: "Visit Our Headquarters"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "section-content",
                                            children: [
                                                companyContact.branchName,
                                                " is available for immediate assistance and inquiries. Our team is ready to handle your corporate networking, security, and digital service needs."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-grid",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-card",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-528c56c61e0a9a8b",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                                                                            className: "jsx-528c56c61e0a9a8b"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                            cx: "12",
                                                                            cy: "10",
                                                                            r: "3",
                                                                            className: "jsx-528c56c61e0a9a8b"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-text",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-label",
                                                                    children: "Our Address"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("address", {
                                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-value",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: companyContact.fullAddress
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-card hotline-highlight",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-528c56c61e0a9a8b",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384",
                                                                    className: "jsx-528c56c61e0a9a8b"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-text",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-label",
                                                                    children: "24/7 Hotline"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: hotlineTel ? `tel:${hotlineTel}` : "#",
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-528c56c61e0a9a8b" + " " + "info-value hotline-number",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-528c56c61e0a9a8b",
                                                                            children: companyContact.hotlinePhone
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-card",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-528c56c61e0a9a8b",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                                                                            className: "jsx-528c56c61e0a9a8b"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            width: "20",
                                                                            height: "16",
                                                                            x: "2",
                                                                            y: "4",
                                                                            rx: "2",
                                                                            className: "jsx-528c56c61e0a9a8b"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-528c56c61e0a9a8b" + " " + "info-card-text",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-528c56c61e0a9a8b" + " " + "info-label",
                                                                    children: "Email Support"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: `mailto:${supportEmail}?subject=`,
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-528c56c61e0a9a8b" + " " + "info-value",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-528c56c61e0a9a8b",
                                                                            children: supportEmail
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "mailto:missolution2007@gmail.com",
                                                                    style: {
                                                                        marginTop: "4px",
                                                                        display: "block"
                                                                    },
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-528c56c61e0a9a8b" + " " + "info-value",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-528c56c61e0a9a8b",
                                                                            children: "missolution2007@gmail.com"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "mailto:sales@missolution.com.bd",
                                                                    style: {
                                                                        marginTop: "4px",
                                                                        display: "block"
                                                                    },
                                                                    className: "jsx-528c56c61e0a9a8b",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-528c56c61e0a9a8b" + " " + "info-value",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "jsx-528c56c61e0a9a8b",
                                                                            children: "sales@missolution.com.bd"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-528c56c61e0a9a8b" + " " + "contact-map-panel",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-528c56c61e0a9a8b" + " " + "map-placeholder",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                            src: mapEmbedUrl,
                                            width: "100%",
                                            height: "100%",
                                            allowFullScreen: "true",
                                            loading: "lazy",
                                            title: "MIS Solution Office Location",
                                            className: "jsx-528c56c61e0a9a8b" + " " + "contact-iframe"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-528c56c61e0a9a8b" + " " + "inquiry-section",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-528c56c61e0a9a8b" + " " + "inquiry-container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-528c56c61e0a9a8b" + " " + "inquiry-card",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-528c56c61e0a9a8b" + " " + "inquiry-header",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "section-title",
                                                children: "Send Us an Inquiry"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "section-content",
                                                children: "Whether you need a custom quote for enterprise networking or have questions about our IT hardware catalog, we're here to help."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        action: "/submit-inquiry",
                                        method: "POST",
                                        "data-form-id": "95ce9567-92c6-45e0-bc16-f038f4fce187",
                                        className: "jsx-528c56c61e0a9a8b" + " " + "inquiry-form",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "form-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "full-name",
                                                                className: "jsx-528c56c61e0a9a8b" + " " + "form-label",
                                                                children: "Full Name"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                id: "full-name",
                                                                name: "true",
                                                                placeholder: "John Doe",
                                                                required: "true",
                                                                "data-form-field-id": "full-name",
                                                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-input"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-group",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "email-address",
                                                                className: "jsx-528c56c61e0a9a8b" + " " + "form-label",
                                                                children: "Email Address"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "email",
                                                                id: "email-address",
                                                                name: "email",
                                                                placeholder: "john@example.com",
                                                                required: "true",
                                                                "data-form-field-id": "email-address",
                                                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-input"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "service-type",
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "form-label",
                                                        children: "Service Interest"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                        id: "service-type",
                                                        name: "service",
                                                        required: "true",
                                                        "data-form-field-id": "service-type",
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-input",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "",
                                                                disabled: true,
                                                                selected: true,
                                                                className: "jsx-528c56c61e0a9a8b",
                                                                children: "Select a service"
                                                            }),
                                                            serviceOptions.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    ...new Set(serviceOptions.map((s)=>s.group))
                                                                ].map((group)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("optgroup", {
                                                                        label: group,
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: serviceOptions.filter((s)=>s.group === group).map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: s.name,
                                                                                className: "jsx-528c56c61e0a9a8b",
                                                                                children: s.name
                                                                            }, s.name))
                                                                    }, group))
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "E-commerce Hardware",
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: "E-commerce Hardware"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Corporate IT Solutions",
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: "Corporate IT Solutions"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Security Systems",
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: "Security Systems (CCTV/Fire)"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Digital Services",
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: "Digital Services (Web/App)"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Maintenance Contracts",
                                                                        className: "jsx-528c56c61e0a9a8b",
                                                                        children: "Maintenance Contracts"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "message",
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "form-label",
                                                        children: "Your Inquiry"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        placeholder: "How can MIS Solution help your business today?",
                                                        required: "true",
                                                        minlength: "20",
                                                        "data-form-field-id": "message",
                                                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-form-input form-textarea"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-528c56c61e0a9a8b" + " " + "form-footer",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    type: "submit",
                                                    id: "thq_button_75rR",
                                                    name: "button",
                                                    "data-form-field-id": "thq_button_75rR",
                                                    className: "jsx-528c56c61e0a9a8b" + " " + "btn btn-primary btn-lg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-528c56c61e0a9a8b",
                                                            children: "Send Inquiry"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-528c56c61e0a9a8b",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939",
                                                                className: "jsx-528c56c61e0a9a8b"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-528c56c61e0a9a8b" + " " + "contact-container2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-528c56c61e0a9a8b" + " " + "contact-container3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                html: `<script defer data-name="contact-form-handler">
(function(){
  const inquiryForm = document.querySelector(".inquiry-form")

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      const submitBtn = inquiryForm.querySelector('button[type="submit"]')

      submitBtn.style.opacity = "0.7"
      submitBtn.innerHTML = "<span>Sending...</span>"
    })

    const inputs = inquiryForm.querySelectorAll(".form-input")
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (!input.checkValidity()) {
          input.style.borderColor = "#e74c3c"
        } else {
          input.style.borderColor = "var(--color-border)"
        }
      })

      input.addEventListener("input", () => {
        if (input.checkValidity()) {
          input.style.borderColor = "var(--color-primary)"
        }
      })
    })
  }
})()
</script>`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "528c56c61e0a9a8b",
                children: ".contact-container1.jsx-528c56c61e0a9a8b{width:100%;min-height:100vh;background:#f3f5f9}.contact-hero.jsx-528c56c61e0a9a8b{position:relative;min-height:72vh;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.contact-hero-media.jsx-528c56c61e0a9a8b{position:absolute;inset:0}.contact-hero-image.jsx-528c56c61e0a9a8b{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.contact-hero-overlay.jsx-528c56c61e0a9a8b{position:absolute;inset:0;background:-webkit-linear-gradient(left,rgba(8,14,24,.78)0%,rgba(8,14,24,.44)45%,rgba(8,14,24,.24)100%);background:-moz-linear-gradient(left,rgba(8,14,24,.78)0%,rgba(8,14,24,.44)45%,rgba(8,14,24,.24)100%);background:-o-linear-gradient(left,rgba(8,14,24,.78)0%,rgba(8,14,24,.44)45%,rgba(8,14,24,.24)100%);background:linear-gradient(90deg,rgba(8,14,24,.78)0%,rgba(8,14,24,.44)45%,rgba(8,14,24,.24)100%)}.contact-hero-container.jsx-528c56c61e0a9a8b{width:100%;margin:0 auto;z-index:1;position:relative;max-width:76rem;padding:7rem 1.5rem 4rem}.contact-hero-content.jsx-528c56c61e0a9a8b{max-width:40rem}.contact-hero-content.jsx-528c56c61e0a9a8b .hero-title{color:#fff;margin:0;font-size:clamp(2rem,2.2vw,3.4rem);line-height:1.15}.contact-hero-content.jsx-528c56c61e0a9a8b .hero-subtitle{color:rgba(255,255,255,.9);margin-top:1rem;margin-bottom:0}.contact-hero-badge.jsx-528c56c61e0a9a8b{margin-top:1.5rem;color:#fff;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:.5rem;padding:.6rem .9rem;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.35)}.badge-icon.jsx-528c56c61e0a9a8b{width:1.25rem;height:1.25rem;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.badge-icon.jsx-528c56c61e0a9a8b svg{width:100%;height:100%}.contact-details.jsx-528c56c61e0a9a8b{padding:4rem 1.5rem}.contact-details-inner.jsx-528c56c61e0a9a8b{width:100%;margin:0 auto;max-width:76rem;display:grid;gap:1.5rem;grid-template-columns:minmax(0,1.15fr)minmax(0,1fr)}.contact-info-panel.jsx-528c56c61e0a9a8b,.contact-map-panel.jsx-528c56c61e0a9a8b,.inquiry-card.jsx-528c56c61e0a9a8b{background:#fff;border:1px solid#d8dfea;-webkit-border-radius:14px;-moz-border-radius:14px;border-radius:14px;-webkit-box-shadow:0 8px 30px rgba(7,16,35,.08);-moz-box-shadow:0 8px 30px rgba(7,16,35,.08);box-shadow:0 8px 30px rgba(7,16,35,.08)}.contact-info-panel.jsx-528c56c61e0a9a8b{padding:1.5rem}.contact-map-panel.jsx-528c56c61e0a9a8b{min-height:100%;overflow:hidden}.map-placeholder.jsx-528c56c61e0a9a8b{width:100%;height:100%;min-height:460px}.contact-iframe.jsx-528c56c61e0a9a8b{border:0}.info-grid.jsx-528c56c61e0a9a8b{margin-top:1.25rem;display:grid;gap:1rem}.info-card.jsx-528c56c61e0a9a8b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:.9rem;padding:.9rem;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:1px solid#d8dfea;background:#f8faff}.info-card-icon.jsx-528c56c61e0a9a8b{width:2.5rem;height:2.5rem;color:#0a7ad4;-webkit-box-flex:0;-webkit-flex:0 0 auto;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:rgba(10,122,212,.12)}.info-card-icon.jsx-528c56c61e0a9a8b svg{width:1.2rem;height:1.2rem}.info-card-text.jsx-528c56c61e0a9a8b{display:grid;gap:.25rem}.info-label.jsx-528c56c61e0a9a8b{font-weight:700;color:#0f172a}.info-value.jsx-528c56c61e0a9a8b{margin:0;font-style:normal;color:#425066}.hotline-number.jsx-528c56c61e0a9a8b{color:#0f172a;font-weight:700}.inquiry-section.jsx-528c56c61e0a9a8b{padding:0 1.5rem 4rem}.inquiry-container.jsx-528c56c61e0a9a8b{width:100%;max-width:76rem;margin:0 auto}.inquiry-card.jsx-528c56c61e0a9a8b{padding:1.5rem}.inquiry-header.jsx-528c56c61e0a9a8b{margin-bottom:1.2rem}.inquiry-form.jsx-528c56c61e0a9a8b{display:grid;gap:1rem}.form-row.jsx-528c56c61e0a9a8b{display:grid;gap:1rem;grid-template-columns:repeat(2,minmax(0,1fr))}.contact-form-group.jsx-528c56c61e0a9a8b{display:grid;gap:.45rem}.form-label.jsx-528c56c61e0a9a8b{color:#172033;font-weight:600}.contact-form-input.jsx-528c56c61e0a9a8b{width:100%;border:1px solid#ccd6e4;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:.72rem .85rem;font:inherit;background:#fff}.contact-form-input.jsx-528c56c61e0a9a8b:focus{outline:none;border-color:#2586d9;-webkit-box-shadow:0 0 0 3px rgba(37,134,217,.18);-moz-box-shadow:0 0 0 3px rgba(37,134,217,.18);box-shadow:0 0 0 3px rgba(37,134,217,.18)}.form-textarea.jsx-528c56c61e0a9a8b{min-height:140px;resize:vertical}.form-footer.jsx-528c56c61e0a9a8b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.contact-container2.jsx-528c56c61e0a9a8b{display:none}.contact-container3.jsx-528c56c61e0a9a8b{display:contents}.contact-container4.jsx-528c56c61e0a9a8b{right:50px;border:1px solid#ffffff5c;bottom:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:22;position:fixed;-webkit-box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);-moz-box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);box-shadow:5px 5px 10px 0px rgba(31,31,31,.4);min-height:auto;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-top:8px;padding-left:12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding-right:12px;padding-bottom:8px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);background-color:rgba(41,41,41,.41)}.contact-icon26.jsx-528c56c61e0a9a8b{width:24px;margin-right:4px}.contact-text6.jsx-528c56c61e0a9a8b{color:white;font-size:13px;font-style:normal;font-weight:500;line-height:24px}@media(max-width:991px){.contact-details-inner.jsx-528c56c61e0a9a8b{grid-template-columns:1fr}.map-placeholder.jsx-528c56c61e0a9a8b{min-height:320px}}@media(max-width:767px){.contact-hero-container.jsx-528c56c61e0a9a8b{padding-top:6rem}.form-row.jsx-528c56c61e0a9a8b{grid-template-columns:1fr}.contact-container4.jsx-528c56c61e0a9a8b{right:14px;bottom:14px}}"
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { getPrimaryCompanyContact  } = await __webpack_require__.e(/* import() */ 6058).then(__webpack_require__.bind(__webpack_require__, 6058));
        const { getDbPool  } = await __webpack_require__.e(/* import() */ 2984).then(__webpack_require__.bind(__webpack_require__, 2984));
        const companyContact = await getPrimaryCompanyContact();
        const db = getDbPool();
        const [digi] = await db.query("SELECT name FROM digi_services WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC");
        const [biz] = await db.query("SELECT name FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC");
        const [maint] = await db.query("SELECT name FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC");
        const serviceOptions = [
            ...digi.map((s)=>({
                    group: "Digital Services",
                    name: s.name
                })),
            ...biz.map((s)=>({
                    group: "Business & Corporate",
                    name: s.name
                })),
            ...maint.map((s)=>({
                    group: "Maintenance & Support",
                    name: s.name
                })), 
        ];
        return {
            props: {
                companyContact,
                serviceOptions: JSON.parse(JSON.stringify(serviceOptions))
            }
        };
    } catch (error) {
        return {
            props: {
                companyContact: fallbackCompanyContact,
                serviceOptions: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(8357)));
module.exports = __webpack_exports__;

})();