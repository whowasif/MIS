"use strict";
(() => {
var exports = {};
exports.id = 431;
exports.ids = [431,7174];
exports.modules = {

/***/ 8438:
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
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2097);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_footer__WEBPACK_IMPORTED_MODULE_6__]);
_components_footer__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const fallbackServices = [
    {
        id: "digital-1",
        name: "Website Design & Development",
        slug: "website-design-development",
        description: "Modern business websites with responsive UI, SEO-friendly structure, and conversion-focused design."
    },
    {
        id: "digital-2",
        name: "Web Domain & Hosting",
        slug: "web-domain-hosting",
        description: "Domain setup, DNS, secure hosting, SSL, and performance optimization for reliable uptime."
    },
    {
        id: "digital-3",
        name: "Domain Registration",
        slug: "domain-registration",
        description: "Secure your brand with local and international domain registration and renewal support."
    },
    {
        id: "digital-4",
        name: "Digital Marketing",
        slug: "digital-marketing",
        description: "SEO, social campaigns, and paid ads to increase leads, visibility, and online revenue."
    },
    {
        id: "digital-5",
        name: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Custom mobile app solutions for Android and iOS integrated with your existing systems."
    }, 
];
const MetricCounter = ({ end , suffix , label  })=>{
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: hasAnimated , 1: setHasAnimated  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                const duration = 1600;
                const startTime = performance.now();
                const animate = (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.floor(eased * end));
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ds-metric",
        ref: ref,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "ds-metric-value",
                children: [
                    count,
                    suffix
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "ds-metric-label",
                children: label
            })
        ]
    });
};
const DigitalServices = ({ services =[]  })=>{
    const digitalServices = Array.isArray(services) && services.length > 0 ? services : fallbackServices;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-f762ff05ce38ec9e" + " " + "ds-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-f762ff05ce38ec9e",
                                children: "Digital Services - MIS Solution"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: "Digital Services - MIS Solution",
                                className: "jsx-f762ff05ce38ec9e"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: "Website design, web hosting, domain registration, digital marketing, and mobile app development services by MIS Solution.",
                                className: "jsx-f762ff05ce38ec9e"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-hero",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-hero-bg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1500",
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "jsx-f762ff05ce38ec9e"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-hero-overlay"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-hero-content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                        "aria-label": "Breadcrumb",
                                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-breadcrumb",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-f762ff05ce38ec9e",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-f762ff05ce38ec9e",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/core-it-solutions",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "jsx-f762ff05ce38ec9e",
                                                    children: "Core IT Solutions"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-f762ff05ce38ec9e",
                                                children: "/"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-breadcrumb-current",
                                                children: "Digital Services"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "jsx-f762ff05ce38ec9e",
                                        children: "Digital Services"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "jsx-f762ff05ce38ec9e",
                                        children: "Building your digital presence from the ground up — websites, apps, hosting, marketing, and everything in between."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-metrics-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-metrics-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 200,
                                    suffix: "+",
                                    label: "Websites Delivered"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 99,
                                    suffix: "%",
                                    label: "Uptime Guarantee"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 50,
                                    suffix: "+",
                                    label: "Active Clients"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MetricCounter, {
                                    end: 24,
                                    suffix: "/7",
                                    label: "Support Available"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-services-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-services-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-services-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-f762ff05ce38ec9e",
                                            children: "What We Offer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-f762ff05ce38ec9e",
                                            children: "Full-spectrum digital services designed to establish, grow, and maintain your online presence."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-services-grid",
                                    children: digitalServices.map((service, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: `/services/${encodeURIComponent(service.slug || service.id)}?type=digi_services`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "jsx-f762ff05ce38ec9e" + " " + `ds-service-card ${idx === 0 ? "ds-service-featured" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-service-img",
                                                        children: service.iconUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: service.iconUrl,
                                                            alt: service.name,
                                                            className: "jsx-f762ff05ce38ec9e"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-service-placeholder",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-f762ff05ce38ec9e",
                                                                children: service.name.charAt(0)
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-service-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "jsx-f762ff05ce38ec9e",
                                                                children: service.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-f762ff05ce38ec9e",
                                                                children: service.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-service-link",
                                                                children: "Learn More →"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, service.id))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "jsx-f762ff05ce38ec9e",
                                            children: "Our Digital Process"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-f762ff05ce38ec9e",
                                            children: "A proven methodology that transforms ideas into high-performing digital products."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-timeline",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-step",
                                                            children: "Step 01"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Discovery & Strategy"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Understanding your business, target audience, and goals to craft the perfect digital strategy."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-step",
                                                            children: "Step 02"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Design & Prototype"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Creating wireframes, mockups, and interactive prototypes for review before development begins."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-step",
                                                            children: "Step 03"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Development & Testing"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Building with modern technologies, rigorous testing across devices, and performance optimization."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-dot"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-content",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-process-step",
                                                            children: "Step 04"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Launch & Growth"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "jsx-f762ff05ce38ec9e",
                                                            children: "Deploying to production, SEO setup, analytics integration, and ongoing maintenance support."
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-f762ff05ce38ec9e" + " " + "ds-cta-section",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-f762ff05ce38ec9e" + " " + "ds-cta-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "jsx-f762ff05ce38ec9e",
                                    children: "Have a Digital Project in Mind?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-f762ff05ce38ec9e",
                                    children: "Let's turn your vision into a powerful digital experience."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-f762ff05ce38ec9e" + " " + "ds-cta-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/request-custom-quote",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-cta-btn ds-cta-primary",
                                                children: "Get a Free Quote"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "jsx-f762ff05ce38ec9e" + " " + "ds-cta-btn ds-cta-secondary",
                                                children: "Talk to Our Team"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f762ff05ce38ec9e",
                children: '.ds-page.jsx-f762ff05ce38ec9e{width:100%;min-height:100vh}.ds-hero.jsx-f762ff05ce38ec9e{position:relative;min-height:420px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.ds-hero-bg.jsx-f762ff05ce38ec9e{position:absolute;inset:0}.ds-hero-bg.jsx-f762ff05ce38ec9e img.jsx-f762ff05ce38ec9e{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ds-hero-overlay.jsx-f762ff05ce38ec9e{position:absolute;inset:0;background:-webkit-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-moz-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:-o-linear-gradient(bottom,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%);background:linear-gradient(to top,rgba(10,16,27,.95)0%,rgba(10,16,27,.6)50%,rgba(10,16,27,.3)100%)}.ds-hero-content.jsx-f762ff05ce38ec9e{position:relative;z-index:1;max-width:800px;padding:60px 32px 48px}.ds-breadcrumb.jsx-f762ff05ce38ec9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;font-size:13px;margin-bottom:16px}.ds-breadcrumb.jsx-f762ff05ce38ec9e a{color:rgba(255,255,255,.7);text-decoration:none;font-weight:500;-webkit-transition:color.15s;-moz-transition:color.15s;-o-transition:color.15s;transition:color.15s}.ds-breadcrumb.jsx-f762ff05ce38ec9e a:hover{color:#f7e500}.ds-breadcrumb.jsx-f762ff05ce38ec9e span.jsx-f762ff05ce38ec9e{color:rgba(255,255,255,.4)}.ds-breadcrumb-current.jsx-f762ff05ce38ec9e{color:#f7e500;font-weight:600}.ds-hero-content.jsx-f762ff05ce38ec9e h1.jsx-f762ff05ce38ec9e{margin:0;font-size:clamp(32px,5vw,48px);font-weight:800;color:#fff;line-height:1.1}.ds-hero-content.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:14px 0 0;font-size:17px;color:rgba(255,255,255,.7);line-height:1.6;max-width:600px}.ds-metrics-section.jsx-f762ff05ce38ec9e{padding:0 24px;margin-top:-1px;background:#0a101b}.ds-metrics-container.jsx-f762ff05ce38ec9e{max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:36px 0;border-top:1px solid rgba(255,255,255,.08)}.ds-metric.jsx-f762ff05ce38ec9e{text-align:center}.ds-metric-value.jsx-f762ff05ce38ec9e{display:block;font-size:28px;font-weight:800;color:#f7e500;font-family:"JetBrains Mono",monospace}.ds-metric-label.jsx-f762ff05ce38ec9e{display:block;font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;text-transform:uppercase;letter-spacing:.05em}.ds-services-section.jsx-f762ff05ce38ec9e{padding:72px 24px;background:#f8fafc}.ds-services-container.jsx-f762ff05ce38ec9e{max-width:1140px;margin:0 auto}.ds-services-header.jsx-f762ff05ce38ec9e{text-align:center;margin-bottom:40px}.ds-services-header.jsx-f762ff05ce38ec9e h2.jsx-f762ff05ce38ec9e{margin:0;font-size:clamp(26px,3.5vw,34px);font-weight:800;color:#111827}.ds-services-header.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:10px 0 0;font-size:16px;color:#6b7280}.ds-services-grid.jsx-f762ff05ce38ec9e{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}.ds-service-card.jsx-f762ff05ce38ec9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;overflow:hidden;border:1px solid#e5e7eb;background:#fff;text-decoration:none;color:inherit;-webkit-transition:box-shadow.2s,-webkit-transform.15s;-moz-transition:box-shadow.2s,-moz-transform.15s;-o-transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,-webkit-transform.15s;transition:box-shadow.2s,-moz-transform.15s;transition:box-shadow.2s,-o-transform.15s;transition:box-shadow.2s,transform.15s}.ds-service-card.jsx-f762ff05ce38ec9e:hover{-webkit-box-shadow:0 16px 48px rgba(0,0,0,.08);-moz-box-shadow:0 16px 48px rgba(0,0,0,.08);box-shadow:0 16px 48px rgba(0,0,0,.08);-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px)}.ds-service-featured.jsx-f762ff05ce38ec9e{grid-column:span 2;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ds-service-img.jsx-f762ff05ce38ec9e{height:180px;background:-webkit-linear-gradient(315deg,#0a101b,#1e293b);background:-moz-linear-gradient(315deg,#0a101b,#1e293b);background:-o-linear-gradient(315deg,#0a101b,#1e293b);background:linear-gradient(135deg,#0a101b,#1e293b);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.ds-service-featured.jsx-f762ff05ce38ec9e .ds-service-img.jsx-f762ff05ce38ec9e{width:280px;height:auto;min-height:200px}.ds-service-img.jsx-f762ff05ce38ec9e img.jsx-f762ff05ce38ec9e{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ds-service-placeholder.jsx-f762ff05ce38ec9e{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.ds-service-placeholder.jsx-f762ff05ce38ec9e span.jsx-f762ff05ce38ec9e{font-size:48px;font-weight:800;color:#f7e500;opacity:.6}.ds-service-body.jsx-f762ff05ce38ec9e{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:8px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.ds-service-body.jsx-f762ff05ce38ec9e h3.jsx-f762ff05ce38ec9e{margin:0;font-size:18px;font-weight:700;color:#111827}.ds-service-body.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.ds-service-link.jsx-f762ff05ce38ec9e{font-size:13px;font-weight:700;color:#0a101b;margin-top:auto;padding-top:8px}.ds-service-card.jsx-f762ff05ce38ec9e:hover .ds-service-link.jsx-f762ff05ce38ec9e{color:#f7e500}.ds-process-section.jsx-f762ff05ce38ec9e{padding:72px 24px;background:#fff}.ds-process-container.jsx-f762ff05ce38ec9e{max-width:800px;margin:0 auto}.ds-process-header.jsx-f762ff05ce38ec9e{text-align:center;margin-bottom:40px}.ds-process-header.jsx-f762ff05ce38ec9e h2.jsx-f762ff05ce38ec9e{margin:0;font-size:clamp(26px,3.5vw,34px);font-weight:800;color:#111827}.ds-process-header.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:10px 0 0;font-size:16px;color:#6b7280}.ds-process-timeline.jsx-f762ff05ce38ec9e{position:relative;padding-left:32px}.ds-process-timeline.jsx-f762ff05ce38ec9e::before{content:"";position:absolute;left:8px;top:12px;bottom:12px;width:2px;background:-webkit-linear-gradient(top,#f7e500,#e5e7eb);background:-moz-linear-gradient(top,#f7e500,#e5e7eb);background:-o-linear-gradient(top,#f7e500,#e5e7eb);background:linear-gradient(to bottom,#f7e500,#e5e7eb);-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.ds-process-item.jsx-f762ff05ce38ec9e{position:relative;padding:0 0 32px}.ds-process-item.jsx-f762ff05ce38ec9e:last-child{padding-bottom:0}.ds-process-dot.jsx-f762ff05ce38ec9e{position:absolute;left:-28px;top:6px;width:14px;height:14px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#f7e500;border:3px solid#fff;-webkit-box-shadow:0 0 0 2px#f7e500;-moz-box-shadow:0 0 0 2px#f7e500;box-shadow:0 0 0 2px#f7e500}.ds-process-content.jsx-f762ff05ce38ec9e{}.ds-process-step.jsx-f762ff05ce38ec9e{display:inline-block;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px}.ds-process-content.jsx-f762ff05ce38ec9e h3.jsx-f762ff05ce38ec9e{margin:0 0 6px;font-size:18px;font-weight:700;color:#111827}.ds-process-content.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:0;font-size:14px;color:#6b7280;line-height:1.7}.ds-cta-section.jsx-f762ff05ce38ec9e{padding:72px 24px;background:#0a101b;text-align:center}.ds-cta-container.jsx-f762ff05ce38ec9e{max-width:600px;margin:0 auto}.ds-cta-container.jsx-f762ff05ce38ec9e h2.jsx-f762ff05ce38ec9e{margin:0;font-size:clamp(24px,3.5vw,32px);font-weight:800;color:#fff}.ds-cta-container.jsx-f762ff05ce38ec9e p.jsx-f762ff05ce38ec9e{margin:12px 0 0;font-size:16px;color:rgba(255,255,255,.6)}.ds-cta-buttons.jsx-f762ff05ce38ec9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:14px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:28px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.ds-cta-btn.jsx-f762ff05ce38ec9e{padding:14px 28px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:-webkit-transform.15s,box-shadow.15s;-moz-transition:-moz-transform.15s,box-shadow.15s;-o-transition:-o-transform.15s,box-shadow.15s;transition:-webkit-transform.15s,box-shadow.15s;transition:-moz-transform.15s,box-shadow.15s;transition:-o-transform.15s,box-shadow.15s;transition:transform.15s,box-shadow.15s}.ds-cta-primary.jsx-f762ff05ce38ec9e{background:#f7e500;color:#0a101b}.ds-cta-primary.jsx-f762ff05ce38ec9e:hover{-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 24px rgba(247,229,0,.3);-moz-box-shadow:0 8px 24px rgba(247,229,0,.3);box-shadow:0 8px 24px rgba(247,229,0,.3)}.ds-cta-secondary.jsx-f762ff05ce38ec9e{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.3)}.ds-cta-secondary.jsx-f762ff05ce38ec9e:hover{border-color:#f7e500;color:#f7e500;-webkit-transform:translateY(-2px);-moz-transform:translateY(-2px);-ms-transform:translateY(-2px);-o-transform:translateY(-2px);transform:translateY(-2px)}@media(max-width:768px){.ds-hero.jsx-f762ff05ce38ec9e{min-height:360px}.ds-hero-content.jsx-f762ff05ce38ec9e{padding:100px 20px 36px}.ds-metrics-container.jsx-f762ff05ce38ec9e{grid-template-columns:repeat(2,1fr);gap:16px}.ds-services-grid.jsx-f762ff05ce38ec9e{grid-template-columns:1fr}.ds-service-featured.jsx-f762ff05ce38ec9e{grid-column:span 1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ds-service-featured.jsx-f762ff05ce38ec9e .ds-service-img.jsx-f762ff05ce38ec9e{width:100%;height:180px}}'
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const { listDigitalServiceEntries  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const services = await listDigitalServiceEntries(50);
        return {
            props: {
                services
            }
        };
    } catch (error) {
        return {
            props: {
                services: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitalServices);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2097,6151], () => (__webpack_exec__(8438)));
module.exports = __webpack_exports__;

})();