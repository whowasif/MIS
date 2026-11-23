"use strict";
(() => {
var exports = {};
exports.id = 8207;
exports.ids = [8207];
exports.modules = {

/***/ 1595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCatalogRedirect),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/**
 * Legacy TeleportHQ catalog route — permanently retired.
 * Keep this file only as a redirect so old bookmarks/links do not 404.
 */ const getServerSideProps = async ({ query  })=>{
    const search = String(query.search || query.q || "").trim();
    if (search) {
        return {
            redirect: {
                destination: `/search?q=${encodeURIComponent(search)}`,
                permanent: true
            }
        };
    }
    return {
        redirect: {
            destination: "/categories",
            permanent: true
        }
    };
};
function ProductCatalogRedirect() {
    return null;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1595));
module.exports = __webpack_exports__;

})();