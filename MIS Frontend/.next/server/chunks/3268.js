"use strict";
exports.id = 3268;
exports.ids = [3268];
exports.modules = {

/***/ 3268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
const { cardImageUrl , detailImageUrl  } = __webpack_require__(459);
const resolveDisplayUrl = (url, kind = "card")=>{
    if (typeof url !== "string" || !url.trim()) return url || "";
    const preferred = kind === "detail" ? detailImageUrl(url) : cardImageUrl(url);
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
    const file = path.join(process.cwd(), "public", decoded.replace(/^\/+/, ""));
    try {
        if (fs.statSync(file).size > 0) return preferred;
    } catch (error1) {
        return url;
    }
    return url;
};
module.exports = {
    resolveDisplayUrl
};


/***/ })

};
;