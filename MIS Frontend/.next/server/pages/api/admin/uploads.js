"use strict";
(() => {
var exports = {};
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6705);
/* harmony import */ var _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(322);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_3__, _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_4__]);
([formidable__WEBPACK_IMPORTED_MODULE_3__, _lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const config = {
    api: {
        bodyParser: false
    }
};
const uploadsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "public", "uploads", "admin");
const allowedMimePrefixes = [
    "image/",
    "video/"
];
const moveUploadedFile = async (sourcePath, targetPath)=>{
    try {
        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.rename(sourcePath, targetPath);
    } catch (error) {
        if (error.code !== "EXDEV") {
            throw error;
        }
        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.copyFile(sourcePath, targetPath);
        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.unlink(sourcePath);
    }
};
const parseForm = (request)=>new Promise((resolve, reject)=>{
        const form = new formidable__WEBPACK_IMPORTED_MODULE_3__.IncomingForm({
            multiples: false,
            keepExtensions: true,
            maxFileSize: 250 * 1024 * 1024
        });
        form.parse(request, (error, fields, files)=>{
            if (error) {
                reject(error);
                return;
            }
            resolve({
                fields,
                files
            });
        });
    });
async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", [
            "POST"
        ]);
        return res.status(405).json({
            success: false,
            error: "Method not allowed."
        });
    }
    const auth = await (0,_lib_auth_require_admin__WEBPACK_IMPORTED_MODULE_4__/* .requireAdminApiAuth */ .W)(req);
    if (!auth.ok) {
        return res.status(auth.status).json({
            success: false,
            error: auth.error
        });
    }
    try {
        const { files  } = await parseForm(req);
        const uploadFile = Array.isArray(files.file) ? files.file[0] : files.file;
        if (!uploadFile) {
            return res.status(400).json({
                success: false,
                error: "No file uploaded."
            });
        }
        const mimeType = String(uploadFile.mimetype || uploadFile.type || "").toLowerCase();
        const isAllowedType = allowedMimePrefixes.some((prefix)=>mimeType.startsWith(prefix));
        if (!isAllowedType) {
            return res.status(400).json({
                success: false,
                error: "Only image and video files are allowed."
            });
        }
        await fs__WEBPACK_IMPORTED_MODULE_1__.promises.mkdir(uploadsDirectory, {
            recursive: true
        });
        const originalName = String(uploadFile.originalFilename || uploadFile.name || "upload").replace(/[^a-zA-Z0-9._-]/g, "_");
        const extension = path__WEBPACK_IMPORTED_MODULE_2___default().extname(originalName) || path__WEBPACK_IMPORTED_MODULE_2___default().extname(uploadFile.filepath || "");
        const fileName = `${Date.now()}-${crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(6).toString("hex")}${extension}`;
        const destination = path__WEBPACK_IMPORTED_MODULE_2___default().join(uploadsDirectory, fileName);
        await moveUploadedFile(uploadFile.filepath, destination);
        return res.status(200).json({
            success: true,
            url: `/uploads/admin/${fileName}`,
            path: destination,
            name: originalName,
            mimeType
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Unable to upload file.",
            details:  false ? 0 : undefined
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9563,322], () => (__webpack_exec__(4410)));
module.exports = __webpack_exports__;

})();