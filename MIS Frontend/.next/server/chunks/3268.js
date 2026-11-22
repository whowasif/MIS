"use strict";
exports.id = 3268;
exports.ids = [3268];
exports.modules = {

/***/ 3268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveDisplayUrl": () => (/* binding */ resolveDisplayUrl)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _display_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(459);



const resolveDisplayUrl = (url, kind = "card")=>{
    if (typeof url !== "string" || !url.trim()) return url || "";
    const preferred = kind === "detail" ? (0,_display_image__WEBPACK_IMPORTED_MODULE_2__/* .detailImageUrl */ .Hx)(url) : (0,_display_image__WEBPACK_IMPORTED_MODULE_2__/* .cardImageUrl */ ["do"])(url);
    if (!preferred || preferred === url) return url;
    const pathname = preferred.split(/[?#]/)[0];
    if (!pathname.startsWith("/")) return url;
    let decoded = pathname;
    try {
        decoded = decodeURI(pathname);
    } catch (error) {
        decoded = pathname;
    }
    if (decoded.includes("\0") || decoded.split("/").includes("..")) return url;
    const file = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "public", decoded.replace(/^\/+/, ""));
    try {
        if (fs__WEBPACK_IMPORTED_MODULE_0___default().statSync(file).size > 0) return preferred;
    } catch (error1) {
        return url;
    }
    return url;
};


/***/ })

};
;