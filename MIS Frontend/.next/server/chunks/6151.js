"use strict";
exports.id = 6151;
exports.ids = [6151];
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

/***/ })

};
;