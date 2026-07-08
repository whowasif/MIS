"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-intl"
var external_next_intl_ = __webpack_require__(503);
;// CONCATENATED MODULE: ./global-context.js



const GlobalContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const GlobalProvider = ({ initialLocales , children  })=>{
    const localeValue = (0,external_next_intl_.useLocale)();
    const { 0: locales , 1: setLocales  } = (0,external_react_.useState)(initialLocales ?? [
        {
            "name": "English",
            "short": "en"
        }
    ]);
    const { 0: locale , 1: setLocale  } = (0,external_react_.useState)({
        "name": "English",
        "short": "en"
    });
    (0,external_react_.useEffect)(()=>{
        if (!locales) {
            return;
        }
        const currentLangValue = locales.find((el)=>el.short === localeValue);
        setLocale(currentLangValue);
    }, [
        locales,
        localeValue
    ]);
    const value = (0,external_react_.useMemo)(()=>{
        return {
            locales,
            locale,
            setLocales,
            setLocale
        };
    }, [
        locales,
        locale
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(GlobalContext.Provider, {
        value: value,
        children: children
    });
};
const useGlobalContext = ()=>{
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return {
        ...context
    };
};

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/footer%20logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
                session: session,
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_intl_.NextIntlProvider, {
                    messages: pageProps?.messages,
                    locale: pageProps?.locale,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GlobalProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = require("next-intl");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1304));
module.exports = __webpack_exports__;

})();