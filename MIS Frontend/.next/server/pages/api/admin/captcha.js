"use strict";
(() => {
var exports = {};
exports.id = 7919;
exports.ids = [7919];
exports.modules = {

/***/ 1758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_auth_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);

async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", [
            "GET"
        ]);
        return res.status(405).json({
            success: false,
            error: "Method not allowed"
        });
    }
    try {
        const challenge = await (0,_lib_auth_captcha__WEBPACK_IMPORTED_MODULE_0__.createCaptchaChallenge)();
        return res.status(200).json({
            success: true,
            captcha: {
                prompt: challenge.prompt,
                token: challenge.token,
                expiresIn: challenge.expiresIn
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Unable to generate captcha challenge.",
            details:  false ? 0 : undefined
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [554], () => (__webpack_exec__(1758)));
module.exports = __webpack_exports__;

})();