"use strict";
exports.id = 9733;
exports.ids = [9733];
exports.modules = {

/***/ 6151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7027);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__]);
dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const defaultCompanyContact = {
    fullAddress: "Address not available",
    primaryEmail: "support@missolution.com",
    supportEmail: null,
    hotlinePhone: "N/A",
    whatsappNumber: null,
    facebookUrl: "#",
    linkedinUrl: "#"
};
const sanitizePhoneForTel = (phoneValue)=>String(phoneValue || "").replace(/\s+/g, "").replace(/(?!^\+)\D/g, "");
const Footer = (props)=>{
    const { 0: companyContact , 1: setCompanyContact  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultCompanyContact);
    const { 0: newsletterEmail , 1: setNewsletterEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: newsletterStatus , 1: setNewsletterStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("") // '', 'loading', 'success', 'error'
    ;
    const { 0: newsletterMsg , 1: setNewsletterMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let isMounted = true;
        const loadCompanyContact = async ()=>{
            try {
                const response = await fetch("/api/company-contact");
                const payload = await response.json();
                if (!isMounted) return;
                if (payload?.success && payload.contact) {
                    setCompanyContact((previousContact)=>({
                            ...previousContact,
                            ...payload.contact,
                            facebookUrl: payload.contact.facebookUrl || "#",
                            linkedinUrl: payload.contact.linkedinUrl || "#"
                        }));
                }
            } catch (error) {
            // Ignore contact API failures and keep fallback content.
            }
        };
        loadCompanyContact();
        return ()=>{
            isMounted = false;
        };
    }, []);
    const supportEmail = companyContact.supportEmail || companyContact.primaryEmail;
    const hotlineTel = sanitizePhoneForTel(companyContact.hotlinePhone);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-65823db792a277" + " " + "footer-container1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "jsx-65823db792a277" + " " + "footer-mega",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-65823db792a277" + " " + "footer-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-65823db792a277" + " " + "footer-top-grid",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-65823db792a277" + " " + "footer-brand-column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        "aria-label": "MIS Solution Home",
                                                        className: "jsx-65823db792a277" + " " + "footer-brand-mark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/footer%20logo.png",
                                                            alt: "MIS Solution",
                                                            className: "jsx-65823db792a277" + " " + "footer-brand-logo"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-65823db792a277" + " " + "footer-brand-tagline",
                                                    children: "commited to service..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-65823db792a277" + " " + "footer-brand-description section-content",
                                                    children: "Your premier destination for comprehensive e-commerce and corporate IT services. Empowering businesses through innovative technology solutions and unparalleled support."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-65823db792a277" + " " + "footer-social-group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: companyContact.facebookUrl || "#",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                "aria-label": "Facebook",
                                                                className: "jsx-65823db792a277" + " " + "footer-social-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z",
                                                                        className: "jsx-65823db792a277"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: companyContact.linkedinUrl || "#",
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                "aria-label": "LinkedIn",
                                                                className: "jsx-65823db792a277" + " " + "footer-social-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-65823db792a277",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0",
                                                                                className: "jsx-65823db792a277"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z",
                                                                                className: "jsx-65823db792a277"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                "aria-label": "Twitter",
                                                                className: "jsx-65823db792a277" + " " + "footer-social-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z",
                                                                        className: "jsx-65823db792a277"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                "aria-label": "Instagram",
                                                                className: "jsx-65823db792a277" + " " + "footer-social-link",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "24",
                                                                    height: "24",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        className: "jsx-65823db792a277",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z",
                                                                                className: "jsx-65823db792a277"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01",
                                                                                className: "jsx-65823db792a277"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                            "aria-labelledby": "footer-hardware-title",
                                            className: "jsx-65823db792a277" + " " + "footer-nav-column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    id: "footer-hardware-title",
                                                    className: "jsx-65823db792a277" + " " + "footer-column-title",
                                                    children: "Hardware Essentials"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "jsx-65823db792a277" + " " + "footer-link-list",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Laptops & Desktops"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Servers & Storage"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Motherboards & CPUs"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Graphics Cards"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Printers & Scanners"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                            "aria-labelledby": "footer-services-title",
                                            className: "jsx-65823db792a277" + " " + "footer-nav-column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    id: "footer-services-title",
                                                    className: "jsx-65823db792a277" + " " + "footer-column-title",
                                                    children: "Corporate Solutions"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    className: "jsx-65823db792a277" + " " + "footer-link-list",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Enterprise Networking"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Data Center Setup"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "CCTV & Security"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Digital Marketing"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#",
                                                                className: "jsx-65823db792a277",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-link section-content",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277",
                                                                        children: "Web Development"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-65823db792a277" + " " + "footer-nav-column",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "jsx-65823db792a277" + " " + "footer-column-title",
                                                    children: "Contact & Support"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-65823db792a277" + " " + "footer-contact-info",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-65823db792a277" + " " + "footer-contact-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-contact-icon-wrapper",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-65823db792a277",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            className: "jsx-65823db792a277",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                                                                                    className: "jsx-65823db792a277"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                                    cx: "12",
                                                                                    cy: "10",
                                                                                    r: "3",
                                                                                    className: "jsx-65823db792a277"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-65823db792a277" + " " + "section-content",
                                                                    children: companyContact.fullAddress
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-65823db792a277" + " " + "footer-contact-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-contact-icon-wrapper",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-65823db792a277",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384",
                                                                            className: "jsx-65823db792a277"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: hotlineTel ? `tel:${hotlineTel}` : "#",
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "jsx-65823db792a277" + " " + "section-content",
                                                                        children: [
                                                                            "24/7 Hotline: ",
                                                                            companyContact.hotlinePhone
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-65823db792a277" + " " + "footer-contact-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-contact-icon-wrapper",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-65823db792a277",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: "2",
                                                                            className: "jsx-65823db792a277",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                                                                                    className: "jsx-65823db792a277"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                    width: "20",
                                                                                    height: "16",
                                                                                    x: "2",
                                                                                    y: "4",
                                                                                    rx: "2",
                                                                                    className: "jsx-65823db792a277"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: `mailto:${supportEmail}`,
                                                                    className: "jsx-65823db792a277",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "jsx-65823db792a277" + " " + "section-content",
                                                                        children: supportEmail
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-65823db792a277" + " " + "footer-newsletter",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-65823db792a277" + " " + "footer-newsletter-title section-subtitle",
                                                            children: "Stay Updated"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                            onSubmit: async (e)=>{
                                                                e.preventDefault();
                                                                if (!newsletterEmail.trim()) return;
                                                                setNewsletterStatus("loading");
                                                                try {
                                                                    const res = await fetch("/api/newsletter-subscribe", {
                                                                        method: "POST",
                                                                        headers: {
                                                                            "Content-Type": "application/json"
                                                                        },
                                                                        body: JSON.stringify({
                                                                            email: newsletterEmail.trim()
                                                                        })
                                                                    });
                                                                    const data = await res.json();
                                                                    if (res.ok) {
                                                                        setNewsletterStatus("success");
                                                                        setNewsletterMsg(data.message || "Subscribed!");
                                                                        setNewsletterEmail("");
                                                                    } else {
                                                                        setNewsletterStatus("error");
                                                                        setNewsletterMsg(data.error || "Failed to subscribe.");
                                                                    }
                                                                } catch (err) {
                                                                    setNewsletterStatus("error");
                                                                    setNewsletterMsg("Network error. Please try again.");
                                                                }
                                                                setTimeout(()=>{
                                                                    setNewsletterStatus("");
                                                                    setNewsletterMsg("");
                                                                }, 4000);
                                                            },
                                                            className: "jsx-65823db792a277" + " " + "footer-newsletter-form",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "jsx-65823db792a277" + " " + "footer-input-wrapper",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "email",
                                                                            placeholder: newsletterStatus === "success" ? "Thanks for subscribing!" : "Enter your email",
                                                                            required: true,
                                                                            "aria-label": "Newsletter email",
                                                                            value: newsletterEmail,
                                                                            onChange: (e)=>setNewsletterEmail(e.target.value),
                                                                            disabled: newsletterStatus === "loading" || newsletterStatus === "success",
                                                                            className: "jsx-65823db792a277" + " " + "footer-newsletter-input"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            type: "submit",
                                                                            "aria-label": "Subscribe",
                                                                            disabled: newsletterStatus === "loading" || newsletterStatus === "success",
                                                                            style: newsletterStatus === "success" ? {
                                                                                backgroundColor: "#2ecc71",
                                                                                color: "#fff"
                                                                            } : {},
                                                                            className: "jsx-65823db792a277" + " " + "footer-newsletter-btn",
                                                                            children: newsletterStatus === "success" ? "✓" : newsletterStatus === "loading" ? "..." : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                width: "20",
                                                                                height: "20",
                                                                                viewBox: "0 0 24 24",
                                                                                className: "jsx-65823db792a277",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "2",
                                                                                    d: "M5 12h14m-7-7l7 7l-7 7",
                                                                                    className: "jsx-65823db792a277"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                newsletterMsg && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        marginTop: "6px",
                                                                        color: newsletterStatus === "error" ? "#ef4444" : "#2ecc71"
                                                                    },
                                                                    className: "jsx-65823db792a277",
                                                                    children: newsletterMsg
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-65823db792a277" + " " + "footer-bottom-bar",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-65823db792a277" + " " + "footer-legal-group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-65823db792a277" + " " + "footer-copyright section-content",
                                                    children: "&copy; 2026 MIS Solution. All rights reserved."
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-65823db792a277" + " " + "footer-legal-links",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-65823db792a277" + " " + "footer-legal-link section-content",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-65823db792a277",
                                                                    children: "Privacy Policy"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-65823db792a277" + " " + "footer-legal-link section-content",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-65823db792a277",
                                                                    children: "Terms of Service"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: "jsx-65823db792a277",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "jsx-65823db792a277" + " " + "footer-legal-link section-content",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "jsx-65823db792a277",
                                                                    children: "Warranty Info"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-65823db792a277" + " " + "footer-payment-badges",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    title: "EMI Options Available",
                                                    className: "jsx-65823db792a277" + " " + "footer-payment-badge",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-65823db792a277",
                                                        children: "EMI Available"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    title: "Secure Payment",
                                                    className: "jsx-65823db792a277" + " " + "footer-payment-badge",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-65823db792a277",
                                                        children: "100% Secure"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-65823db792a277" + " " + "footer-container2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-65823db792a277" + " " + "footer-container3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(dangerous_html_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                html: `<script defer data-name="footer-logic">
(function(){
  // Newsletter form is now handled by React state
})()
</script>`
                            })
                        })
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "65823db792a277",
                children: ".footer-container1.jsx-65823db792a277{display:contents}.footer-container2.jsx-65823db792a277{display:none}.footer-container3.jsx-65823db792a277{display:contents}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2097:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);






const menuItems = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/company-information-policies",
        label: "About Us"
    },
    {
        href: "/categories/desktop",
        label: "Products"
    },
    {
        href: "/digital-services",
        label: "Digital Services"
    },
    {
        href: "/enterprise-solutions",
        label: "Business & Corporate Solutions"
    },
    {
        href: "/maintenance-support",
        label: "Maintenance Support"
    },
    {
        href: "/career",
        label: "Career"
    },
    {
        href: "/contact",
        label: "Contact"
    }, 
];
const defaultSocialLinks = {
    facebookUrl: "#",
    instagramUrl: "#",
    linkedinUrl: "#",
    youtubeUrl: "#"
};
// Category nav item with hover dropdown (uses inline styles to avoid styled-jsx scoping issues)
const CatNavItem = ({ cat , subs  })=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        onMouseEnter: ()=>setOpen(true),
        onMouseLeave: ()=>setOpen(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: `/categories/${cat.slug}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    style: {
                        display: "block",
                        padding: "10px 14px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#e2e8f0",
                        textDecoration: "none",
                        whiteSpace: "nowrap"
                    },
                    children: cat.name
                })
            }),
            subs.length > 0 && open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    minWidth: "200px",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    zIndex: 9999,
                    padding: "6px 0"
                },
                children: subs.map((sub)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: `/categories/${sub.slug}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            style: {
                                display: "block",
                                padding: "8px 16px",
                                fontSize: "13px",
                                color: "#374151",
                                textDecoration: "none"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = "#f1f5f9";
                                e.currentTarget.style.color = "#1e40af";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#374151";
                            },
                            children: sub.name
                        })
                    }, sub.id))
            })
        ]
    });
};
const Navigation = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: isSearchOpen , 1: setIsSearchOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: cartCount , 1: setCartCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: socialLinks , 1: setSocialLinks  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSocialLinks);
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // Load categories for the nav bar
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch("/api/categories").then((r)=>r.json()).then((data)=>{
            if (data.categories) setCategories(data.categories);
        }).catch(()=>{});
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        isMenuOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const syncCartCount = ()=>{
            try {
                const parsed = JSON.parse(window.localStorage.getItem("misCart") || "[]");
                const count = parsed.reduce((sum, item)=>sum + (item.quantity || 0), 0);
                setCartCount(count);
            } catch (error) {
                setCartCount(0);
            }
        };
        // Load saved cart from DB if signed in
        const loadCartFromDB = async ()=>{
            if (!session?.user) return;
            try {
                const res = await fetch("/api/cart");
                if (!res.ok) return;
                const data = await res.json();
                if (data.cart && data.cart.length > 0) {
                    const localCart = JSON.parse(window.localStorage.getItem("misCart") || "[]");
                    // Merge: DB items + any local items not already in DB
                    const merged = [
                        ...data.cart
                    ];
                    localCart.forEach((localItem)=>{
                        if (!merged.find((m)=>m.id === localItem.id)) {
                            merged.push(localItem);
                        }
                    });
                    window.localStorage.setItem("misCart", JSON.stringify(merged));
                    syncCartCount();
                    window.dispatchEvent(new Event("mis-cart-updated"));
                    // Save merged back to DB
                    saveCartToDB(merged);
                }
            } catch (e) {}
        };
        const saveCartToDB = async (items)=>{
            if (!session?.user) return;
            try {
                await fetch("/api/cart", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        items
                    })
                });
            } catch (e) {}
        };
        // On cart update, save to DB
        const handleCartUpdate = ()=>{
            syncCartCount();
            if (session?.user) {
                try {
                    const items = JSON.parse(window.localStorage.getItem("misCart") || "[]");
                    saveCartToDB(items);
                } catch (e) {}
            }
        };
        syncCartCount();
        loadCartFromDB();
        const handleStorage = (event)=>{
            if (!event || event.key === "misCart") {
                handleCartUpdate();
            }
        };
        window.addEventListener("storage", handleStorage);
        window.addEventListener("mis-cart-updated", handleCartUpdate);
        return ()=>{
            window.removeEventListener("storage", handleStorage);
            window.removeEventListener("mis-cart-updated", handleCartUpdate);
        };
    }, [
        session
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let isMounted = true;
        const loadSocialLinks = async ()=>{
            try {
                const response = await fetch("/api/company-contact");
                const payload = await response.json();
                if (!isMounted) return;
                if (payload?.success && payload.contact) {
                    setSocialLinks((prev)=>({
                            ...prev,
                            facebookUrl: payload.contact.facebookUrl || "#",
                            linkedinUrl: payload.contact.linkedinUrl || "#"
                        }));
                }
            } catch (error) {
            // Ignore API failures, keep default links
            }
        };
        loadSocialLinks();
        return ()=>{
            isMounted = false;
        };
    }, []);
    const closeMenu = ()=>setIsMenuOpen(false);
    const handleMenuNavigation = (href)=>{
        closeMenu();
        router.push(href);
    };
    const handleSearchSubmit = (e)=>{
        e.preventDefault();
        const query = searchTerm.trim();
        if (!query) {
            setIsSearchOpen(false);
            return;
        }
        router.push({
            pathname: "/search",
            query: {
                q: query
            }
        });
        setIsSearchOpen(false);
        setSearchTerm("");
    };
    const { 0: cartOpen , 1: setCartOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: cartItems , 1: setCartItems  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const handleCartClick = ()=>{
        try {
            const items = JSON.parse(window.localStorage.getItem("misCart") || "[]");
            setCartItems(items);
        } catch (e) {
            setCartItems([]);
        }
        setCartOpen(true);
    };
    // Listen for open-mis-cart event
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const openCart = ()=>{
            try {
                setCartItems(JSON.parse(window.localStorage.getItem("misCart") || "[]"));
            } catch (e) {
                setCartItems([]);
            }
            setCartOpen(true);
        };
        window.addEventListener("open-mis-cart", openCart);
        return ()=>window.removeEventListener("open-mis-cart", openCart);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                "aria-label": "Open menu",
                                "aria-expanded": isMenuOpen,
                                onClick: ()=>{
                                    setIsSearchOpen(false);
                                    setIsMenuOpen(true);
                                },
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-toggle",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "20",
                                    height: "20",
                                    "aria-hidden": "true",
                                    className: "jsx-479e6c882174b5f8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M4 7h16M4 12h16M4 17h16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        className: "jsx-479e6c882174b5f8"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "aria-label": "Social media links",
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-socials",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: socialLinks.facebookUrl,
                                        "aria-label": "Facebook",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-social-link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            "aria-hidden": "true",
                                            className: "jsx-479e6c882174b5f8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1",
                                                fill: "currentColor",
                                                className: "jsx-479e6c882174b5f8"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        "aria-label": "Instagram",
                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-social-link",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            "aria-hidden": "true",
                                            className: "jsx-479e6c882174b5f8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                    x: "3",
                                                    y: "3",
                                                    width: "18",
                                                    height: "18",
                                                    rx: "5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-479e6c882174b5f8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    className: "jsx-479e6c882174b5f8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "17",
                                                    cy: "7",
                                                    r: "1.2",
                                                    fill: "currentColor",
                                                    className: "jsx-479e6c882174b5f8"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: socialLinks.linkedinUrl,
                                        "aria-label": "LinkedIn",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-social-link",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            "aria-hidden": "true",
                                            className: "jsx-479e6c882174b5f8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                    x: "3",
                                                    y: "9",
                                                    width: "4",
                                                    height: "11",
                                                    fill: "currentColor",
                                                    className: "jsx-479e6c882174b5f8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                    cx: "5",
                                                    cy: "5",
                                                    r: "2",
                                                    fill: "currentColor",
                                                    className: "jsx-479e6c882174b5f8"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M11 9h4v1.7A4.3 4.3 0 0 1 19 8.8C22 8.8 22 11.5 22 15v5h-4v-4.5c0-2.1-.1-3.8-2.3-3.8c-2.3 0-2.7 1.7-2.7 3.6V20h-4z",
                                                    fill: "currentColor",
                                                    className: "jsx-479e6c882174b5f8"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        "aria-label": "YouTube",
                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-social-link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            "aria-hidden": "true",
                                            className: "jsx-479e6c882174b5f8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M21.8 8.2s-.2-1.6-.9-2.2c-.9-.9-1.8-.9-2.3-1C15.3 4.8 12 4.8 12 4.8h0s-3.3 0-6.6.2c-.5.1-1.4.1-2.3 1c-.7.6-.9 2.2-.9 2.2S2 10 2 11.8v.4c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.2c.9.9 2.1.9 2.7 1c1.9.2 6.2.2 6.2.2s3.3 0 6.6-.2c.5-.1 1.4-.1 2.3-1c.7-.6.9-2.2.9-2.2s.2-1.8.2-3.6v-.4c0-1.8-.2-3.6-.2-3.6M10 15.2V8.8l5.5 3.2z",
                                                fill: "currentColor",
                                                className: "jsx-479e6c882174b5f8"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: closeMenu,
                            className: "jsx-479e6c882174b5f8" + " " + "menu-nav-logo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/mis_logo_cut-w.png",
                                alt: "MIS Solution logo",
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-logo-image"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-right",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                onSubmit: handleSearchSubmit,
                                className: "jsx-479e6c882174b5f8" + " " + `menu-nav-search-inline ${isSearchOpen ? "is-open" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "search",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    placeholder: "Search products, services, or SKUs",
                                    "aria-label": "Search products and services",
                                    className: "jsx-479e6c882174b5f8" + " " + "menu-nav-search-input"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                "aria-label": "Toggle site search",
                                "aria-expanded": isSearchOpen,
                                onClick: ()=>setIsSearchOpen((prev)=>!prev),
                                className: "jsx-479e6c882174b5f8" + " " + `menu-nav-icon-btn ${isSearchOpen ? "is-active" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "20",
                                    height: "20",
                                    "aria-hidden": "true",
                                    className: "jsx-479e6c882174b5f8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "m21 21-4.3-4.3M11 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "jsx-479e6c882174b5f8"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                "aria-label": session ? "Go to profile" : "Sign in",
                                onClick: ()=>session ? router.push("/profile") : (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(undefined, {
                                        callbackUrl: router.asPath
                                    }),
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-icon-link",
                                children: session?.user?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: session.user.image,
                                    alt: "",
                                    style: {
                                        width: 24,
                                        height: 24,
                                        borderRadius: "50%",
                                        objectFit: "cover"
                                    },
                                    className: "jsx-479e6c882174b5f8"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "20",
                                    height: "20",
                                    className: "jsx-479e6c882174b5f8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4m-7 8a7 7 0 0 1 14 0",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "jsx-479e6c882174b5f8"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                "aria-label": "Open cart",
                                onClick: handleCartClick,
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-icon-link menu-nav-cart-link",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "20",
                                        height: "20",
                                        className: "jsx-479e6c882174b5f8",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M6 6h15l-1.2 7.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.6L5.7 4.7A1 1 0 0 0 4.7 4H3m6 16a1.2 1.2 0 1 1 0-2.4A1.2 1.2 0 0 1 9 20m8 0a1.2 1.2 0 1 1 0-2.4A1.2 1.2 0 0 1 17 20",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "jsx-479e6c882174b5f8"
                                        })
                                    }),
                                    cartCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-cart-count",
                                        children: cartCount
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            categories.length > 0 && (router.pathname.startsWith("/categories") || router.pathname.startsWith("/products") || router.pathname === "/product-catalog") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                "aria-label": "Product categories",
                className: "jsx-479e6c882174b5f8" + " " + "cat-nav-bar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-479e6c882174b5f8" + " " + "cat-nav-inner",
                    children: categories.filter((c)=>!c.parent_id).map((cat)=>{
                        const subs = categories.filter((c)=>Number(c.parent_id) === Number(cat.id));
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CatNavItem, {
                            cat: cat,
                            subs: subs
                        }, cat.id);
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-spacer"
            }),
            categories.length > 0 && (router.pathname.startsWith("/categories") || router.pathname.startsWith("/products") || router.pathname === "/product-catalog") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-479e6c882174b5f8" + " " + "cat-nav-spacer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: closeMenu,
                className: "jsx-479e6c882174b5f8" + " " + `menu-nav-overlay ${isMenuOpen ? "is-active" : ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-479e6c882174b5f8" + " " + `menu-nav-drawer ${isMenuOpen ? "is-active" : ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-479e6c882174b5f8" + " " + "menu-nav-drawer-head",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                "aria-label": "Close menu",
                                onClick: closeMenu,
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-close",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    width: "18",
                                    height: "18",
                                    "aria-hidden": "true",
                                    className: "jsx-479e6c882174b5f8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M6 6l12 12M18 6l-12 12",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        className: "jsx-479e6c882174b5f8"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-label": "Main Navigation",
                            className: "jsx-479e6c882174b5f8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-list",
                                children: menuItems.map((item)=>{
                                    const isProducts = item.label === "Products";
                                    if (isProducts && categories.length > 0) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "jsx-479e6c882174b5f8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-products-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("summary", {
                                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-link menu-nav-link-btn",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-479e6c882174b5f8",
                                                                children: "Products"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-chevron",
                                                                children: "›"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-sub-list",
                                                        children: categories.filter((c)=>!c.parent_id).map((cat)=>{
                                                            const subs = categories.filter((c)=>c.parent_id === cat.id);
                                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-cat-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("summary", {
                                                                        onClick: (e)=>{
                                                                            if (subs.length === 0) {
                                                                                e.preventDefault();
                                                                                handleMenuNavigation(`/categories/${cat.slug}`);
                                                                            }
                                                                        },
                                                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-cat-link",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "jsx-479e6c882174b5f8",
                                                                                children: cat.name
                                                                            }),
                                                                            subs.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-chevron",
                                                                                children: "›"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    subs.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "jsx-479e6c882174b5f8" + " " + "menu-nav-sub-subs",
                                                                        children: subs.map((sub)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleMenuNavigation(`/categories/${sub.slug}`),
                                                                                className: "jsx-479e6c882174b5f8" + " " + "menu-nav-sub-link",
                                                                                children: sub.name
                                                                            }, sub.id))
                                                                    })
                                                                ]
                                                            }, cat.id);
                                                        })
                                                    })
                                                ]
                                            })
                                        }, item.href);
                                    }
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-479e6c882174b5f8",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>handleMenuNavigation(item.href),
                                            className: "jsx-479e6c882174b5f8" + " " + "menu-nav-link menu-nav-link-btn",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-479e6c882174b5f8",
                                                children: item.label
                                            })
                                        })
                                    }, item.href);
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-479e6c882174b5f8" + " " + "menu-nav-drawer-footer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/request-custom-quote",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: closeMenu,
                                    className: "jsx-479e6c882174b5f8" + " " + "btn btn-primary menu-nav-cta",
                                    children: "Request Quote"
                                })
                            })
                        })
                    ]
                })
            }),
            cartOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setCartOpen(false),
                className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-overlay",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-479e6c882174b5f8" + " " + "cart-drawer",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-head",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "jsx-479e6c882174b5f8",
                                    children: "Your Cart"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setCartOpen(false),
                                    className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-close",
                                    children: "✕"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-body",
                            children: cartItems.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-479e6c882174b5f8" + " " + "cart-empty",
                                children: "Your cart is empty."
                            }) : cartItems.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-item",
                                    children: [
                                        item.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item.image,
                                            alt: item.name,
                                            className: "jsx-479e6c882174b5f8" + " " + "cart-item-img"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-479e6c882174b5f8" + " " + "cart-item-info",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "jsx-479e6c882174b5f8",
                                                    children: item.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "jsx-479e6c882174b5f8",
                                                    children: [
                                                        "৳",
                                                        Number(item.price || 0).toLocaleString(),
                                                        " \xd7 ",
                                                        item.quantity
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                const updated = cartItems.filter((_, i)=>i !== idx);
                                                setCartItems(updated);
                                                window.localStorage.setItem("misCart", JSON.stringify(updated));
                                                window.dispatchEvent(new Event("mis-cart-updated"));
                                            },
                                            className: "jsx-479e6c882174b5f8" + " " + "cart-item-remove",
                                            children: "✕"
                                        })
                                    ]
                                }, idx))
                        }),
                        cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-footer",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-479e6c882174b5f8" + " " + "cart-drawer-total",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-479e6c882174b5f8",
                                            children: "Subtotal"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                            className: "jsx-479e6c882174b5f8",
                                            children: [
                                                "৳",
                                                cartItems.reduce((s, i)=>s + i.price * i.quantity, 0).toLocaleString()
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/confirm-order",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        onClick: ()=>setCartOpen(false),
                                        className: "jsx-479e6c882174b5f8" + " " + "cart-checkout-btn",
                                        children: "Proceed to Checkout"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "479e6c882174b5f8",
                children: ".menu-nav-header.jsx-479e6c882174b5f8{top:0;left:0;width:100%;height:72px;display:grid;z-index:1200;position:fixed;padding:0 20px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;grid-template-columns:1fr auto 1fr;color:#111;border-bottom:1px solid rgba(0,0,0,.14);background:var(--color-primary)}.menu-nav-left.jsx-479e6c882174b5f8,.menu-nav-right.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px}.menu-nav-right.jsx-479e6c882174b5f8{-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:#111;position:relative}.menu-nav-search-inline.jsx-479e6c882174b5f8{position:absolute;right:140px;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);max-width:0;opacity:0;overflow:hidden;pointer-events:none;-webkit-transition:max-width.25s ease,opacity.2s ease;-moz-transition:max-width.25s ease,opacity.2s ease;-o-transition:max-width.25s ease,opacity.2s ease;transition:max-width.25s ease,opacity.2s ease;z-index:10}.menu-nav-search-inline.is-open.jsx-479e6c882174b5f8{opacity:1;max-width:min(50vw,480px);pointer-events:auto}.menu-nav-icon-btn.jsx-479e6c882174b5f8{border:0;width:32px;height:32px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:rgba(0,0,0,.08);color:#111;-webkit-transition:background-color.2s ease,-webkit-transform.2s ease;-moz-transition:background-color.2s ease,-moz-transform.2s ease;-o-transition:background-color.2s ease,-o-transform.2s ease;transition:background-color.2s ease,-webkit-transform.2s ease;transition:background-color.2s ease,-moz-transform.2s ease;transition:background-color.2s ease,-o-transform.2s ease;transition:background-color.2s ease,transform.2s ease}.menu-nav-icon-link.jsx-479e6c882174b5f8{border:0;width:32px;height:32px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:transparent;color:#111;-webkit-transition:background-color.2s ease,-webkit-transform.2s ease;-moz-transition:background-color.2s ease,-moz-transform.2s ease;-o-transition:background-color.2s ease,-o-transform.2s ease;transition:background-color.2s ease,-webkit-transform.2s ease;transition:background-color.2s ease,-moz-transform.2s ease;transition:background-color.2s ease,-o-transform.2s ease;transition:background-color.2s ease,transform.2s ease}.menu-nav-icon-link.jsx-479e6c882174b5f8:hover{-webkit-transform:translateY(-1px);-moz-transform:translateY(-1px);-ms-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px);background:rgba(0,0,0,.11)}.menu-nav-cart-link.jsx-479e6c882174b5f8{position:relative}.menu-nav-cart-count.jsx-479e6c882174b5f8{top:-5px;right:-5px;color:#fff;width:17px;height:17px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:absolute;font-size:.62rem;font-weight:700;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:999px;-moz-border-radius:999px;border-radius:999px;background:#14161b}.menu-nav-icon-btn.jsx-479e6c882174b5f8:hover{-webkit-transform:translateY(-1px);-moz-transform:translateY(-1px);-ms-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px);background:rgba(0,0,0,.16)}.menu-nav-icon-btn.is-active.jsx-479e6c882174b5f8{background:#111;color:#f7e500}.menu-nav-toggle.jsx-479e6c882174b5f8,.menu-nav-close.jsx-479e6c882174b5f8{border:0;width:32px;height:32px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background:rgba(0,0,0,.1);color:#111}.menu-nav-socials.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}.menu-nav-social-link.jsx-479e6c882174b5f8{width:22px;height:22px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#111;text-decoration:none;-webkit-transition:color.2s ease,-webkit-transform.2s ease;-moz-transition:color.2s ease,-moz-transform.2s ease;-o-transition:color.2s ease,-o-transform.2s ease;transition:color.2s ease,-webkit-transform.2s ease;transition:color.2s ease,-moz-transform.2s ease;transition:color.2s ease,-o-transform.2s ease;transition:color.2s ease,transform.2s ease}.menu-nav-social-link.jsx-479e6c882174b5f8:hover{color:#0a0a0a;-webkit-transform:translateY(-1px);-moz-transform:translateY(-1px);-ms-transform:translateY(-1px);-o-transform:translateY(-1px);transform:translateY(-1px)}.menu-nav-logo.jsx-479e6c882174b5f8{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px;justify-self:center;text-decoration:none;color:#111;font-weight:800;white-space:nowrap}.menu-nav-logo-image.jsx-479e6c882174b5f8{height:42px;width:auto;display:block;-o-object-fit:contain;object-fit:contain}.menu-nav-logo-text.jsx-479e6c882174b5f8{font-size:clamp(1rem,1.1vw,1.85rem);letter-spacing:.03em}.menu-nav-overlay.jsx-479e6c882174b5f8{inset:0;opacity:0;z-index:1300;position:fixed;pointer-events:none;-webkit-transition:opacity.25s ease;-moz-transition:opacity.25s ease;-o-transition:opacity.25s ease;transition:opacity.25s ease;background:-webkit-linear-gradient(left,rgba(0,0,0,.62)0%,rgba(0,0,0,.22)45%,rgba(0,0,0,.06)100%);background:-moz-linear-gradient(left,rgba(0,0,0,.62)0%,rgba(0,0,0,.22)45%,rgba(0,0,0,.06)100%);background:-o-linear-gradient(left,rgba(0,0,0,.62)0%,rgba(0,0,0,.22)45%,rgba(0,0,0,.06)100%);background:linear-gradient(90deg,rgba(0,0,0,.62)0%,rgba(0,0,0,.22)45%,rgba(0,0,0,.06)100%)}.menu-nav-search-input.jsx-479e6c882174b5f8{width:min(50vw,480px);min-width:240px;height:38px;border:2px solid#f7e500;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:0 14px;background:#fff;color:#111;font-size:.9rem;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.1);-moz-box-shadow:0 4px 16px rgba(0,0,0,.1);box-shadow:0 4px 16px rgba(0,0,0,.1)}.menu-nav-search-input.jsx-479e6c882174b5f8:focus{outline:none;border-color:#111;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.15);-moz-box-shadow:0 4px 20px rgba(0,0,0,.15);box-shadow:0 4px 20px rgba(0,0,0,.15)}.menu-nav-overlay.is-active.jsx-479e6c882174b5f8{opacity:1;pointer-events:auto}.menu-nav-drawer.jsx-479e6c882174b5f8{top:0;left:0;width:min(310px,90vw);height:100%;color:#f7f7f7;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform.25s ease;-moz-transition:-moz-transform.25s ease;-o-transition:-o-transform.25s ease;transition:-webkit-transform.25s ease;transition:-moz-transform.25s ease;transition:-o-transform.25s ease;transition:transform.25s ease;background:rgba(10,16,27,.72);border-right:1px solid rgba(255,255,255,.08);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);padding:16px 16px 24px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.15)transparent}.menu-nav-drawer.jsx-479e6c882174b5f8::-webkit-scrollbar{width:4px}.menu-nav-drawer.jsx-479e6c882174b5f8::-webkit-scrollbar-track{background:transparent}.menu-nav-drawer.jsx-479e6c882174b5f8::-webkit-scrollbar-thumb{background:rgba(255,255,255,.15);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.menu-nav-drawer.jsx-479e6c882174b5f8::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.3)}.menu-nav-drawer.is-active.jsx-479e6c882174b5f8{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}.menu-nav-drawer-head.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:16px}.menu-nav-close.jsx-479e6c882174b5f8{color:#f5f5f5;background:rgba(255,255,255,.09)}.menu-nav-list.jsx-479e6c882174b5f8{margin:0;padding:0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:4px}.menu-nav-link.jsx-479e6c882174b5f8{color:#f3f3f3;display:block;text-decoration:none;padding:10px 6px;font-size:1.12rem;font-weight:500;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-transition:background-color.2s ease,color.2s ease;-moz-transition:background-color.2s ease,color.2s ease;-o-transition:background-color.2s ease,color.2s ease;transition:background-color.2s ease,color.2s ease}.menu-nav-link-btn.jsx-479e6c882174b5f8{width:100%;border:0;background:transparent;text-align:left;cursor:pointer;font:inherit}.menu-nav-link.jsx-479e6c882174b5f8:hover{color:var(--color-primary);background:rgba(255,255,255,.06)}.menu-nav-drawer-footer.jsx-479e6c882174b5f8{margin-top:auto;padding-top:18px;border-top:1px solid rgba(255,255,255,.1)}.menu-nav-products-dropdown.jsx-479e6c882174b5f8{margin:0}.menu-nav-products-dropdown.jsx-479e6c882174b5f8>summary.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.menu-nav-products-dropdown.jsx-479e6c882174b5f8>summary.jsx-479e6c882174b5f8::-webkit-details-marker{display:none}.menu-nav-chevron.jsx-479e6c882174b5f8{font-size:16px;opacity:.5;-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s}details[open].jsx-479e6c882174b5f8>summary.jsx-479e6c882174b5f8>.menu-nav-chevron.jsx-479e6c882174b5f8{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg)}.menu-nav-sub-list.jsx-479e6c882174b5f8{padding:4px 0 8px 12px;border-left:2px solid rgba(255,255,255,.08);margin-left:8px}.menu-nav-cat-item.jsx-479e6c882174b5f8{margin-bottom:1px}.menu-nav-cat-item.jsx-479e6c882174b5f8>summary.jsx-479e6c882174b5f8::-webkit-details-marker{display:none}.menu-nav-cat-link.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:7px 8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;font-size:13px;color:#cbd5e1;cursor:pointer;list-style:none;-webkit-transition:background.12s,color.12s;-moz-transition:background.12s,color.12s;-o-transition:background.12s,color.12s;transition:background.12s,color.12s}.menu-nav-cat-link.jsx-479e6c882174b5f8:hover{background:rgba(255,255,255,.06);color:#fff}.menu-nav-sub-subs.jsx-479e6c882174b5f8{padding:2px 0 4px 14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.menu-nav-sub-link.jsx-479e6c882174b5f8{border:none;background:transparent;text-align:left;font:inherit;font-size:12px;color:#94a3b8;padding:5px 8px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;cursor:pointer;-webkit-transition:color.12s,background.12s;-moz-transition:color.12s,background.12s;-o-transition:color.12s,background.12s;transition:color.12s,background.12s}.menu-nav-sub-link.jsx-479e6c882174b5f8:hover{color:#fff;background:rgba(255,255,255,.05)}.menu-nav-cta.jsx-479e6c882174b5f8{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.menu-nav-spacer.jsx-479e6c882174b5f8{height:72px;width:100%}.cat-nav-spacer.jsx-479e6c882174b5f8{height:40px;width:100%}.cat-nav-bar.jsx-479e6c882174b5f8{position:fixed;top:72px;left:0;right:0;z-index:1100;background:#1e293b;border-bottom:1px solid#334155;overflow:visible}.cat-nav-bar.jsx-479e6c882174b5f8::-webkit-scrollbar{display:none}.cat-nav-inner.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:1320px;margin:0 auto;padding:0 16px;gap:0;white-space:nowrap;overflow-x:auto;overflow-y:visible;scrollbar-width:none;-webkit-overflow-scrolling:touch}.cat-nav-inner.jsx-479e6c882174b5f8::-webkit-scrollbar{display:none}@media(max-width:1100px){.cat-nav-inner.jsx-479e6c882174b5f8{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}.cat-nav-item.jsx-479e6c882174b5f8{position:relative}.cat-nav-link.jsx-479e6c882174b5f8{display:block;padding:10px 14px;font-size:13px;font-weight:500;color:#e2e8f0;text-decoration:none;white-space:nowrap;-webkit-transition:color.12s,background.12s;-moz-transition:color.12s,background.12s;-o-transition:color.12s,background.12s;transition:color.12s,background.12s}.cat-nav-link.jsx-479e6c882174b5f8:hover{color:#fff;background:#334155}.cat-nav-dropdown.jsx-479e6c882174b5f8{position:absolute;top:100%;left:0;min-width:200px;background:#fff;border:1px solid#e2e8f0;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 8px 24px rgba(0,0,0,.12);-moz-box-shadow:0 8px 24px rgba(0,0,0,.12);box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:1200;padding:6px 0}.cat-nav-item.jsx-479e6c882174b5f8:hover .cat-nav-dropdown.jsx-479e6c882174b5f8{display:block}.cat-nav-sub.jsx-479e6c882174b5f8{display:block;padding:8px 16px;font-size:13px;color:#374151;text-decoration:none;-webkit-transition:background.12s;-moz-transition:background.12s;-o-transition:background.12s;transition:background.12s}.cat-nav-sub.jsx-479e6c882174b5f8:hover{background:#f1f5f9;color:#1e40af}@media(max-width:767px){.menu-nav-header.jsx-479e6c882174b5f8{height:64px;padding:0 14px}.menu-nav-logo-image.jsx-479e6c882174b5f8{height:34px}.menu-nav-logo-text.jsx-479e6c882174b5f8{font-size:.95rem}.menu-nav-socials.jsx-479e6c882174b5f8{display:none}.menu-nav-spacer.jsx-479e6c882174b5f8{height:64px}.cat-nav-bar.jsx-479e6c882174b5f8{top:64px}.menu-nav-search-inline.is-open.jsx-479e6c882174b5f8{max-width:min(60vw,260px)}.menu-nav-search-input.jsx-479e6c882174b5f8{width:min(60vw,260px);min-width:140px}}.cart-drawer-overlay.jsx-479e6c882174b5f8{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:2000}.cart-drawer.jsx-479e6c882174b5f8{position:fixed;top:0;right:0;width:min(400px,90vw);height:100vh;background:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-shadow:-8px 0 24px rgba(0,0,0,.15);-moz-box-shadow:-8px 0 24px rgba(0,0,0,.15);box-shadow:-8px 0 24px rgba(0,0,0,.15)}.cart-drawer-head.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:18px 20px;border-bottom:1px solid#e5e7eb}.cart-drawer-head.jsx-479e6c882174b5f8 h3.jsx-479e6c882174b5f8{margin:0;font-size:18px;color:#111827}.cart-drawer-close.jsx-479e6c882174b5f8{border:none;background:transparent;font-size:22px;cursor:pointer;color:#6b7280}.cart-drawer-body.jsx-479e6c882174b5f8{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;padding:16px 20px}.cart-empty.jsx-479e6c882174b5f8{color:#9ca3af;text-align:center;padding:40px 0}.cart-drawer-item.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid#f3f4f6}.cart-item-img.jsx-479e6c882174b5f8{width:50px;height:50px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-o-object-fit:cover;object-fit:cover;background:#f3f4f6}.cart-item-info.jsx-479e6c882174b5f8{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.cart-item-info.jsx-479e6c882174b5f8 strong.jsx-479e6c882174b5f8{display:block;font-size:13px;color:#111827;line-height:1.3}.cart-item-info.jsx-479e6c882174b5f8 span.jsx-479e6c882174b5f8{font-size:12px;color:#6b7280}.cart-item-remove.jsx-479e6c882174b5f8{border:none;background:transparent;color:#dc2626;font-size:16px;cursor:pointer}.cart-drawer-footer.jsx-479e6c882174b5f8{padding:16px 20px;border-top:1px solid#e5e7eb}.cart-drawer-total.jsx-479e6c882174b5f8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:12px;font-size:15px;color:#111827}.cart-checkout-btn.jsx-479e6c882174b5f8{display:block;text-align:center;padding:12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#111827;color:#fff;font-weight:700;font-size:14px;text-decoration:none}.cart-checkout-btn.jsx-479e6c882174b5f8:hover{background:#1f2937}"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ })

};
;