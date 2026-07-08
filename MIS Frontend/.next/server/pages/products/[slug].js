"use strict";
(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905,7174];
exports.modules = {

/***/ 7019:
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







const detailFallbacks = [
    "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1500",
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500",
    "https://images.pexels.com/photos/159235/computer-technology-pc-electronics-159235.jpeg?auto=compress&cs=tinysrgb&w=1500", 
];
const formatCurrency = (value)=>`৳${Number(value || 0).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const getVideoEmbedUrl = (rawValue)=>{
    const source = String(rawValue || "").trim();
    if (!source) return null;
    if (/^https?:\/\/(www\.)?youtu\.be\//i.test(source)) {
        const id = source.split("youtu.be/")[1]?.split(/[?&#]/)[0];
        return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (/^https?:\/\/(www\.)?youtube\.com\/watch\?/i.test(source)) {
        try {
            const url = new URL(source);
            const id1 = url.searchParams.get("v");
            return id1 ? `https://www.youtube.com/embed/${id1}` : null;
        } catch (error) {
            return null;
        }
    }
    if (/^https?:\/\/(www\.)?youtube\.com\/embed\//i.test(source)) {
        return source;
    }
    if (/^https?:\/\/(player\.)?vimeo\.com\/video\//i.test(source)) {
        return source;
    }
    if (/^https?:\/\/(www\.)?vimeo\.com\//i.test(source)) {
        const id2 = source.split("vimeo.com/")[1]?.split(/[?&#/]/)[0];
        return id2 ? `https://player.vimeo.com/video/${id2}` : null;
    }
    return null;
};
const isDirectVideoFile = (value)=>/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(String(value || ""));
const ProductDetailPage = ({ product  })=>{
    const videoUrl = String(product?.videoUrl || "").trim();
    const videoEmbedUrl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>getVideoEmbedUrl(videoUrl), [
        videoUrl
    ]);
    const showDirectVideo = videoUrl && !videoEmbedUrl && (videoUrl.startsWith("/") || isDirectVideoFile(videoUrl));
    const galleryImages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const fromProduct = Array.isArray(product?.images) ? product.images.filter(Boolean) : [];
        if (fromProduct.length > 0) return fromProduct;
        if (product?.image) return [
            product.image,
            ...detailFallbacks
        ];
        return detailFallbacks;
    }, [
        product
    ]);
    const { 0: activeImage , 1: setActiveImage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(galleryImages[0]);
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const stockQty = Number(product?.stockQty || 0);
    const price = Number(product?.price || 0);
    const hasPrice = price > 0;
    const stockLabel = stockQty > 0 ? "In Stock" : "Contact for availability";
    // Parse features
    const featuresList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const raw = product?.features || "";
        if (!raw) return [];
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed.filter(Boolean);
        } catch (e) {
        // Not JSON, split by newlines
        }
        return raw.split(/\n|,/).map((s)=>s.trim()).filter(Boolean);
    }, [
        product
    ]);
    // Parse specifications
    const specsList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const raw = product?.specifications;
        if (!raw) return [];
        try {
            const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
            if (parsed && typeof parsed === "object") {
                return Object.entries(parsed).filter(([k, v])=>v).map(([key, value])=>({
                        key: key.replace(/_/g, " ").replace(/\b\w/g, (c)=>c.toUpperCase()),
                        value
                    }));
            }
        } catch (e) {}
        return [];
    }, [
        product
    ]);
    // Zoom feature state
    const zoomContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: isZooming , 1: setIsZooming  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: zoomPosition , 1: setZoomPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        x: 50,
        y: 50
    });
    const handleZoomMove = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        const container = zoomContainerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        setZoomPosition({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y))
        });
    }, []);
    const handleZoomEnter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>setIsZooming(true), []);
    const handleZoomLeave = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>setIsZooming(false), []);
    const adjustQuantity = (delta)=>{
        setQuantity((prev)=>{
            const next = prev + delta;
            if (next < 1) return 1;
            if (stockQty > 0) return Math.min(next, stockQty);
            return Math.min(next, 99);
        });
    };
    const addToCart = ()=>{
        if (true) return;
        const cartKey = "misCart";
        const image = activeImage || galleryImages[0] || "";
        try {
            const stored = window.localStorage.getItem(cartKey);
            const cart = stored ? JSON.parse(stored) : [];
            const id = String(product.slug || product.id);
            const existing = cart.find((item)=>String(item.id) === id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push({
                    id,
                    productId: product.id,
                    name: product.name,
                    price,
                    image,
                    quantity
                });
            }
            window.localStorage.setItem(cartKey, JSON.stringify(cart));
            window.dispatchEvent(new Event("mis-cart-updated"));
            window.dispatchEvent(new Event("open-mis-cart"));
        } catch (error) {
            console.error("Unable to add item to cart", error);
        }
    };
    const shortDesc = product?.shortDesc || "";
    const longDesc = product?.longDesc || "";
    const displayDescription = longDesc || shortDesc || "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-23497b001dc120c9" + " " + "product-detail-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                className: "jsx-23497b001dc120c9",
                                children: `${product.name} - MIS Solution`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "description",
                                content: shortDesc || product.name,
                                className: "jsx-23497b001dc120c9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-23497b001dc120c9" + " " + "product-detail-shell",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-23497b001dc120c9" + " " + "product-detail-topline",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/product-catalog",
                                    className: "jsx-23497b001dc120c9" + " " + "catalog-back-link",
                                    children: "← Back to Catalog"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-23497b001dc120c9" + " " + "product-detail-grid",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-23497b001dc120c9" + " " + "gallery-panel",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                ref: zoomContainerRef,
                                                onMouseMove: handleZoomMove,
                                                onMouseEnter: handleZoomEnter,
                                                onMouseLeave: handleZoomLeave,
                                                className: "jsx-23497b001dc120c9" + " " + `hero-image-wrap ${isZooming ? "is-zooming" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: activeImage,
                                                        alt: product.name,
                                                        className: "jsx-23497b001dc120c9" + " " + "hero-img"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            backgroundImage: `url(${activeImage})`,
                                                            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                                                        },
                                                        className: "jsx-23497b001dc120c9" + " " + "zoom-overlay"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-23497b001dc120c9" + " " + "zoom-hint",
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
                                                                "aria-hidden": "true",
                                                                className: "jsx-23497b001dc120c9",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                        cx: "11",
                                                                        cy: "11",
                                                                        r: "8",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                        x1: "21",
                                                                        y1: "21",
                                                                        x2: "16.65",
                                                                        y2: "16.65",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                        x1: "11",
                                                                        y1: "8",
                                                                        x2: "11",
                                                                        y2: "14",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                                                                        x1: "8",
                                                                        y1: "11",
                                                                        x2: "14",
                                                                        y2: "11",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-23497b001dc120c9",
                                                                children: "Hover to zoom"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            galleryImages.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "thumb-row",
                                                children: galleryImages.slice(0, 5).map((img)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>setActiveImage(img),
                                                        type: "button",
                                                        "aria-label": "Switch product image",
                                                        className: "jsx-23497b001dc120c9" + " " + `thumb-btn ${activeImage === img ? "is-active" : ""}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: img,
                                                            alt: `${product.name} preview`,
                                                            className: "jsx-23497b001dc120c9"
                                                        })
                                                    }, img))
                                            }),
                                            videoUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "video-panel",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-23497b001dc120c9",
                                                        children: "Product Video"
                                                    }),
                                                    videoEmbedUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-23497b001dc120c9" + " " + "video-frame",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                            src: videoEmbedUrl,
                                                            title: `${product.name} video`,
                                                            loading: "lazy",
                                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                                            allowFullScreen: true,
                                                            className: "jsx-23497b001dc120c9"
                                                        })
                                                    }) : null,
                                                    showDirectVideo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-23497b001dc120c9" + " " + "video-frame",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                            controls: true,
                                                            preload: "metadata",
                                                            playsInline: true,
                                                            className: "jsx-23497b001dc120c9",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                src: videoUrl,
                                                                type: "video/mp4",
                                                                className: "jsx-23497b001dc120c9"
                                                            })
                                                        })
                                                    }) : null,
                                                    !videoEmbedUrl && !showDirectVideo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-23497b001dc120c9" + " " + "video-note",
                                                        children: "Video link saved but format is not embeddable."
                                                    }) : null
                                                ]
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-23497b001dc120c9" + " " + "info-panel",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "badge-row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-23497b001dc120c9" + " " + "type-chip",
                                                        children: product.type
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: `/categories/${encodeURIComponent(product.categorySlug || product.filterCategory || "general")}`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "jsx-23497b001dc120c9" + " " + "category-chip",
                                                            children: product.categoryName
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "jsx-23497b001dc120c9",
                                                children: product.name
                                            }),
                                            shortDesc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "jsx-23497b001dc120c9" + " " + "product-summary",
                                                children: shortDesc
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "price-stock-section",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jsx-23497b001dc120c9" + " " + "price-block",
                                                        children: hasPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-23497b001dc120c9" + " " + "price-value",
                                                            children: formatCurrency(price)
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-23497b001dc120c9" + " " + "price-value price-contact",
                                                            children: "Request a Quote"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-23497b001dc120c9" + " " + "stock-block",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-23497b001dc120c9" + " " + `stock-indicator ${stockQty > 0 ? "in-stock" : "out-stock"}`
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-23497b001dc120c9" + " " + "stock-text",
                                                                children: stockLabel
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            hasPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "purchase-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        "aria-label": "Quantity selector",
                                                        className: "jsx-23497b001dc120c9" + " " + "qty-control",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustQuantity(-1),
                                                                "aria-label": "Decrease quantity",
                                                                className: "jsx-23497b001dc120c9",
                                                                children: "−"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-23497b001dc120c9",
                                                                children: quantity
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                type: "button",
                                                                onClick: ()=>adjustQuantity(1),
                                                                "aria-label": "Increase quantity",
                                                                className: "jsx-23497b001dc120c9",
                                                                children: "+"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        type: "button",
                                                        onClick: addToCart,
                                                        className: "jsx-23497b001dc120c9" + " " + "add-to-cart-btn",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                "aria-hidden": "true",
                                                                className: "jsx-23497b001dc120c9",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                        cx: "9",
                                                                        cy: "21",
                                                                        r: "1",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                                        cx: "20",
                                                                        cy: "21",
                                                                        r: "1",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
                                                                        className: "jsx-23497b001dc120c9"
                                                                    })
                                                                ]
                                                            }),
                                                            "Add to Cart"
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "purchase-row",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/contact",
                                                    className: "jsx-23497b001dc120c9" + " " + "contact-btn",
                                                    children: "Contact Sales for Pricing"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "details-table",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-23497b001dc120c9" + " " + "section-title",
                                                        children: "Product Details"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                        className: "jsx-23497b001dc120c9",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                            className: "jsx-23497b001dc120c9",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: "jsx-23497b001dc120c9",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-label",
                                                                            children: "Category"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-value",
                                                                            children: product.categoryName
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: "jsx-23497b001dc120c9",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-label",
                                                                            children: "Type"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-value",
                                                                            children: product.type
                                                                        })
                                                                    ]
                                                                }),
                                                                product.brand && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: "jsx-23497b001dc120c9",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-label",
                                                                            children: "Brand"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-value",
                                                                            children: product.brand
                                                                        })
                                                                    ]
                                                                }),
                                                                product.model && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: "jsx-23497b001dc120c9",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-label",
                                                                            children: "Model"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-value",
                                                                            children: product.model
                                                                        })
                                                                    ]
                                                                }),
                                                                hasPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    className: "jsx-23497b001dc120c9",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-label",
                                                                            children: "Unit Price"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: "jsx-23497b001dc120c9" + " " + "dt-value",
                                                                            children: formatCurrency(price)
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            featuresList.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-23497b001dc120c9" + " " + "features-section",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "jsx-23497b001dc120c9" + " " + "section-title",
                                                        children: "Key Features"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "jsx-23497b001dc120c9" + " " + "features-list",
                                                        children: featuresList.map((feature, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "jsx-23497b001dc120c9",
                                                                children: feature
                                                            }, idx))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            specsList.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-23497b001dc120c9" + " " + "description-section",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-23497b001dc120c9",
                                        children: "Specifications"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-23497b001dc120c9" + " " + "description-content",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                            className: "jsx-23497b001dc120c9" + " " + "specs-table",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                className: "jsx-23497b001dc120c9",
                                                children: specsList.map((spec, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        className: "jsx-23497b001dc120c9",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-23497b001dc120c9" + " " + "spec-label",
                                                                children: spec.key
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: "jsx-23497b001dc120c9" + " " + "spec-value",
                                                                children: spec.value
                                                            })
                                                        ]
                                                    }, idx))
                                            })
                                        })
                                    })
                                ]
                            }),
                            displayDescription && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "jsx-23497b001dc120c9" + " " + "description-section",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "jsx-23497b001dc120c9",
                                        children: "Description"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-23497b001dc120c9" + " " + "description-content",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "jsx-23497b001dc120c9",
                                            children: displayDescription
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "23497b001dc120c9",
                children: '.product-detail-page.jsx-23497b001dc120c9{min-height:100vh;background:#f8fafe}.product-detail-shell.jsx-23497b001dc120c9{max-width:1200px;margin:0 auto;padding:32px 20px 64px}.product-detail-topline.jsx-23497b001dc120c9{margin-bottom:20px}.catalog-back-link.jsx-23497b001dc120c9{color:#1a5276;font-size:14px;font-weight:600;text-decoration:none;-webkit-transition:color.15s ease;-moz-transition:color.15s ease;-o-transition:color.15s ease;transition:color.15s ease}.catalog-back-link.jsx-23497b001dc120c9:hover{color:#0d3b5e;text-decoration:underline}.product-detail-grid.jsx-23497b001dc120c9{display:grid;grid-template-columns:1fr 1fr;gap:32px;-webkit-box-align:start;-webkit-align-items:start;-moz-box-align:start;-ms-flex-align:start;align-items:start}.gallery-panel.jsx-23497b001dc120c9{position:-webkit-sticky;position:sticky;top:24px;border:1px solid#e2eaf3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;padding:16px;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.04);-moz-box-shadow:0 4px 20px rgba(0,0,0,.04);box-shadow:0 4px 20px rgba(0,0,0,.04)}.hero-image-wrap.jsx-23497b001dc120c9{position:relative;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;overflow:hidden;background:#f0f4f9;aspect-ratio:4/3;cursor:crosshair}.hero-image-wrap.jsx-23497b001dc120c9 .hero-img.jsx-23497b001dc120c9{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block;-webkit-transition:opacity.3s ease;-moz-transition:opacity.3s ease;-o-transition:opacity.3s ease;transition:opacity.3s ease}.hero-image-wrap.is-zooming.jsx-23497b001dc120c9 .hero-img.jsx-23497b001dc120c9{opacity:0}.zoom-overlay.jsx-23497b001dc120c9{position:absolute;inset:0;-webkit-background-size:250%;-moz-background-size:250%;-o-background-size:250%;background-size:250%;background-repeat:no-repeat;opacity:0;-webkit-transition:opacity.25s ease;-moz-transition:opacity.25s ease;-o-transition:opacity.25s ease;transition:opacity.25s ease;pointer-events:none}.hero-image-wrap.is-zooming.jsx-23497b001dc120c9 .zoom-overlay.jsx-23497b001dc120c9{opacity:1}.zoom-hint.jsx-23497b001dc120c9{position:absolute;bottom:12px;right:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:6px;padding:6px 12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);color:#fff;font-size:12px;font-weight:500;pointer-events:none;opacity:1;-webkit-transition:opacity.25s ease;-moz-transition:opacity.25s ease;-o-transition:opacity.25s ease;transition:opacity.25s ease}.hero-image-wrap.is-zooming.jsx-23497b001dc120c9 .zoom-hint.jsx-23497b001dc120c9{opacity:0}.thumb-row.jsx-23497b001dc120c9{margin-top:12px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}.thumb-btn.jsx-23497b001dc120c9{border:2px solid transparent;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:0;overflow:hidden;cursor:pointer;background:#f5f8fc;aspect-ratio:1;-webkit-transition:border-color.15s ease,-webkit-transform.15s ease;-moz-transition:border-color.15s ease,-moz-transform.15s ease;-o-transition:border-color.15s ease,-o-transform.15s ease;transition:border-color.15s ease,-webkit-transform.15s ease;transition:border-color.15s ease,-moz-transform.15s ease;transition:border-color.15s ease,-o-transform.15s ease;transition:border-color.15s ease,transform.15s ease}.thumb-btn.jsx-23497b001dc120c9:hover{-webkit-transform:scale(1.04);-moz-transform:scale(1.04);-ms-transform:scale(1.04);-o-transform:scale(1.04);transform:scale(1.04)}.thumb-btn.jsx-23497b001dc120c9 img.jsx-23497b001dc120c9{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.thumb-btn.is-active.jsx-23497b001dc120c9{border-color:#1a5276}.video-panel.jsx-23497b001dc120c9{margin-top:16px;border:1px solid#e8eff7;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;padding:14px;background:#f9fbfe}.video-panel.jsx-23497b001dc120c9 h3.jsx-23497b001dc120c9{margin:0 0 10px;color:#1a3a55;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}.video-frame.jsx-23497b001dc120c9{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;background:#0f2235;aspect-ratio:16/9}.video-frame.jsx-23497b001dc120c9 iframe.jsx-23497b001dc120c9,.video-frame.jsx-23497b001dc120c9 video.jsx-23497b001dc120c9{width:100%;height:100%;border:0;display:block}.video-note.jsx-23497b001dc120c9{margin:8px 0 0;color:#5c7a94;font-size:13px}.info-panel.jsx-23497b001dc120c9{border:1px solid#e2eaf3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;padding:28px;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.04);-moz-box-shadow:0 4px 20px rgba(0,0,0,.04);box-shadow:0 4px 20px rgba(0,0,0,.04)}.badge-row.jsx-23497b001dc120c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-bottom:16px}.type-chip.jsx-23497b001dc120c9,.category-chip.jsx-23497b001dc120c9{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:5px 10px;font-size:12px;font-weight:600;text-decoration:none}.type-chip.jsx-23497b001dc120c9{background:#e8f4fd;color:#0d4a7a}.category-chip.jsx-23497b001dc120c9{background:#fef6e8;color:#8a5200}.category-chip.jsx-23497b001dc120c9:hover{background:#fdefd3}h1.jsx-23497b001dc120c9{margin:0;color:#111827;font-size:clamp(22px,3.5vw,32px);font-weight:800;line-height:1.2}.product-summary.jsx-23497b001dc120c9{margin:12px 0 0;color:#4b5563;font-size:15px;line-height:1.7}.price-stock-section.jsx-23497b001dc120c9{margin-top:24px;padding:18px 20px;border:1px solid#e5e7eb;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:#f9fafb;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:16px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.price-value.jsx-23497b001dc120c9{font-size:28px;font-weight:800;color:#111827;line-height:1}.price-contact.jsx-23497b001dc120c9{font-size:18px;color:#1a5276}.stock-block.jsx-23497b001dc120c9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px}.stock-indicator.jsx-23497b001dc120c9{width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.stock-indicator.in-stock.jsx-23497b001dc120c9{background:#10b981;-webkit-box-shadow:0 0 0 3px rgba(16,185,129,.2);-moz-box-shadow:0 0 0 3px rgba(16,185,129,.2);box-shadow:0 0 0 3px rgba(16,185,129,.2)}.stock-indicator.out-stock.jsx-23497b001dc120c9{background:#f59e0b;-webkit-box-shadow:0 0 0 3px rgba(245,158,11,.2);-moz-box-shadow:0 0 0 3px rgba(245,158,11,.2);box-shadow:0 0 0 3px rgba(245,158,11,.2)}.stock-text.jsx-23497b001dc120c9{font-size:14px;font-weight:600;color:#374151}.purchase-row.jsx-23497b001dc120c9{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.qty-control.jsx-23497b001dc120c9{border:1px solid#d1d5db;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;background:#fff}.qty-control.jsx-23497b001dc120c9 button.jsx-23497b001dc120c9{border:0;background:#f3f4f6;color:#1f2937;width:40px;height:44px;cursor:pointer;font-size:18px;font-weight:600;-webkit-transition:background.15s ease;-moz-transition:background.15s ease;-o-transition:background.15s ease;transition:background.15s ease}.qty-control.jsx-23497b001dc120c9 button.jsx-23497b001dc120c9:hover{background:#e5e7eb}.qty-control.jsx-23497b001dc120c9 span.jsx-23497b001dc120c9{width:48px;text-align:center;font-weight:700;font-size:15px;color:#111827}.add-to-cart-btn.jsx-23497b001dc120c9{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;height:44px;padding:0 24px;border:0;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#1a5276;color:#fff;font:inherit;font-size:15px;font-weight:700;cursor:pointer;-webkit-transition:background.15s ease,-webkit-transform.1s ease;-moz-transition:background.15s ease,-moz-transform.1s ease;-o-transition:background.15s ease,-o-transform.1s ease;transition:background.15s ease,-webkit-transform.1s ease;transition:background.15s ease,-moz-transform.1s ease;transition:background.15s ease,-o-transform.1s ease;transition:background.15s ease,transform.1s ease}.add-to-cart-btn.jsx-23497b001dc120c9:hover{background:#123d5a}.add-to-cart-btn.jsx-23497b001dc120c9:active{-webkit-transform:scale(.97);-moz-transform:scale(.97);-ms-transform:scale(.97);-o-transform:scale(.97);transform:scale(.97)}.contact-btn.jsx-23497b001dc120c9{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:44px;padding:0 24px;border:2px solid#1a5276;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:transparent;color:#1a5276;font:inherit;font-size:15px;font-weight:700;text-decoration:none;-webkit-transition:background.15s ease,color.15s ease;-moz-transition:background.15s ease,color.15s ease;-o-transition:background.15s ease,color.15s ease;transition:background.15s ease,color.15s ease}.contact-btn.jsx-23497b001dc120c9:hover{background:#1a5276;color:#fff}.details-table.jsx-23497b001dc120c9{margin-top:28px}.section-title.jsx-23497b001dc120c9{margin:0 0 14px;font-size:14px;font-weight:700;color:#111827;text-transform:uppercase;letter-spacing:.03em}.details-table.jsx-23497b001dc120c9 table.jsx-23497b001dc120c9{width:100%;border-collapse:collapse}.details-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9{border-bottom:1px solid#f3f4f6}.details-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9:last-child{border-bottom:none}.dt-label.jsx-23497b001dc120c9{padding:10px 12px 10px 0;color:#6b7280;font-size:14px;font-weight:500;width:40%;vertical-align:top}.dt-value.jsx-23497b001dc120c9{padding:10px 0;color:#111827;font-size:14px;font-weight:600}.features-section.jsx-23497b001dc120c9{margin-top:24px;padding-top:24px;border-top:1px solid#f3f4f6}.features-list.jsx-23497b001dc120c9{margin:0;padding:0;list-style:none}.features-list.jsx-23497b001dc120c9 li.jsx-23497b001dc120c9{position:relative;padding:6px 0 6px 22px;color:#374151;font-size:14px;line-height:1.5}.features-list.jsx-23497b001dc120c9 li.jsx-23497b001dc120c9::before{content:"";position:absolute;left:0;top:13px;width:8px;height:8px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#1a5276;opacity:.6}.description-section.jsx-23497b001dc120c9{margin-top:40px;padding:28px;border:1px solid#e2eaf3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.04);-moz-box-shadow:0 4px 20px rgba(0,0,0,.04);box-shadow:0 4px 20px rgba(0,0,0,.04)}.description-section.jsx-23497b001dc120c9 h2.jsx-23497b001dc120c9{margin:0 0 16px;font-size:18px;font-weight:700;color:#111827}.description-content.jsx-23497b001dc120c9 p.jsx-23497b001dc120c9{margin:0;color:#4b5563;font-size:15px;line-height:1.8;white-space:pre-wrap}@media(max-width:960px){.product-detail-grid.jsx-23497b001dc120c9{grid-template-columns:1fr}.gallery-panel.jsx-23497b001dc120c9{position:static}}.specs-section.jsx-23497b001dc120c9{margin-top:24px;padding-top:24px;border-top:1px solid#f3f4f6}.specs-table.jsx-23497b001dc120c9{width:100%;border-collapse:collapse}.specs-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9{border-bottom:1px solid#f3f4f6}.specs-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9:last-child{border-bottom:none}.spec-label.jsx-23497b001dc120c9{padding:10px 12px 10px 0;color:#6b7280;font-size:14px;font-weight:500;width:40%;text-transform:capitalize}.spec-value.jsx-23497b001dc120c9{padding:10px 0;color:#111827;font-size:14px;font-weight:600}@media(max-width:600px){.product-detail-shell.jsx-23497b001dc120c9{padding-top:20px}.info-panel.jsx-23497b001dc120c9{padding:20px}.thumb-row.jsx-23497b001dc120c9{grid-template-columns:repeat(4,minmax(0,1fr))}.price-stock-section.jsx-23497b001dc120c9{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.purchase-row.jsx-23497b001dc120c9{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-moz-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.add-to-cart-btn.jsx-23497b001dc120c9,.contact-btn.jsx-23497b001dc120c9{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.description-section.jsx-23497b001dc120c9{padding:20px}}.specs-section.jsx-23497b001dc120c9{margin-top:32px;padding:28px;border:1px solid#e2eaf3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;background:#fff;-webkit-box-shadow:0 4px 20px rgba(0,0,0,.04);-moz-box-shadow:0 4px 20px rgba(0,0,0,.04);box-shadow:0 4px 20px rgba(0,0,0,.04)}.specs-section.jsx-23497b001dc120c9 h2.jsx-23497b001dc120c9{margin:0 0 16px;font-size:18px;font-weight:700;color:#111827}.specs-table.jsx-23497b001dc120c9{width:100%;border-collapse:collapse}.specs-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9{border-bottom:1px solid#f3f4f6}.specs-table.jsx-23497b001dc120c9 tr.jsx-23497b001dc120c9:last-child{border-bottom:none}.spec-key.jsx-23497b001dc120c9{padding:10px 12px;font-size:14px;color:#6b7280;font-weight:500;width:40%;text-transform:capitalize}.spec-val.jsx-23497b001dc120c9{padding:10px 12px;font-size:14px;color:#111827;font-weight:600}'
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const { slug  } = context.params || {};
    try {
        const { getCatalogProductBySlug  } = await __webpack_require__.e(/* import() */ 5021).then(__webpack_require__.bind(__webpack_require__, 5021));
        const product = await getCatalogProductBySlug(slug);
        if (!product) {
            return {
                notFound: true
            };
        }
        return {
            props: {
                product
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetailPage);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,9733], () => (__webpack_exec__(7019)));
module.exports = __webpack_exports__;

})();