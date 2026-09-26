"use strict";
(() => {
var exports = {};
exports.id = 6047;
exports.ids = [6047];
exports.modules = {

/***/ 9050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EnterpriseQuotes = ()=>null;
const getServerSideProps = async ()=>({
        redirect: {
            destination: "/portal-secure-99x/tables/quotes",
            permanent: false
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterpriseQuotes);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9050));
module.exports = __webpack_exports__;

})();