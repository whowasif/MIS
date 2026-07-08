"use strict";
(() => {
var exports = {};
exports.id = 8463;
exports.ids = [8463,6548,8930];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getDbPool)
/* harmony export */ });
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);

const requiredEnvVars = [
    "DB_HOST",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME"
];
const getMissingEnvVars = ()=>requiredEnvVars.filter((envKey)=>!process.env[envKey] || !String(process.env[envKey]).trim());
const getDbPool = ()=>{
    if (globalThis.__misDbPool) return globalThis.__misDbPool;
    const missingEnvVars = getMissingEnvVars();
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing database environment variables: ${missingEnvVars.join(", ")}`);
    }
    const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
        namedPlaceholders: true,
        timezone: "Z"
    });
    globalThis.__misDbPool = pool;
    return pool;
};


/***/ }),

/***/ 1774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6705);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);
formidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const config = {
    api: {
        bodyParser: false
    }
};
const UPLOAD_DIR = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "public", "uploads", "resumes");
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
;
const ALLOWED_EXTENSIONS = [
    ".pdf",
    ".doc",
    ".docx"
];
const ensureUploadDir = ()=>{
    if (!fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(UPLOAD_DIR)) {
        fs__WEBPACK_IMPORTED_MODULE_1___default().mkdirSync(UPLOAD_DIR, {
            recursive: true
        });
    }
};
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    ensureUploadDir();
    const form = (0,formidable__WEBPACK_IMPORTED_MODULE_0__["default"])({
        uploadDir: UPLOAD_DIR,
        keepExtensions: true,
        maxFileSize: MAX_FILE_SIZE,
        filter: ({ mimetype , originalFilename  })=>{
            const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(originalFilename || "").toLowerCase();
            return ALLOWED_EXTENSIONS.includes(ext);
        }
    });
    try {
        const [fields, files] = await form.parse(req);
        const careerPostId = fields.careerPostId?.[0] || fields.careerPostId;
        const applicantName = String(fields.name?.[0] || fields.name || "").trim();
        const email = String(fields.email?.[0] || fields.email || "").trim();
        const phone = String(fields.phone?.[0] || fields.phone || "").trim();
        const coverLetter = String(fields.coverLetter?.[0] || fields.coverLetter || "").trim();
        const resumeFile = files.resume?.[0] || files.resume;
        if (!resumeFile) {
            return res.status(400).json({
                error: "Resume file is required."
            });
        }
        if (!careerPostId || !applicantName || !email) {
            // Clean up uploaded file
            if (resumeFile?.filepath) fs__WEBPACK_IMPORTED_MODULE_1___default().unlinkSync(resumeFile.filepath);
            return res.status(400).json({
                error: "Name, email, and job position are required."
            });
        }
        // Rename file to unique name
        const ext = path__WEBPACK_IMPORTED_MODULE_2___default().extname(resumeFile.originalFilename || resumeFile.newFilename || ".pdf");
        const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
        const finalPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(UPLOAD_DIR, uniqueName);
        fs__WEBPACK_IMPORTED_MODULE_1___default().renameSync(resumeFile.filepath, finalPath);
        const resumeUrl = `/uploads/resumes/${uniqueName}`;
        // Save to database
        const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_3__/* .getDbPool */ .z)();
        await db.execute(`INSERT INTO career_applications (career_post_id, applicant_name, email, phone, cover_letter, resume_path)
       VALUES (?, ?, ?, ?, ?, ?)`, [
            careerPostId,
            applicantName,
            email,
            phone || null,
            coverLetter || null,
            resumeUrl
        ]);
        return res.status(201).json({
            success: true,
            message: "Application submitted successfully."
        });
    } catch (error) {
        console.error("Career application error:", error);
        if (error.code === "LIMIT_FILE_SIZE" || error.httpCode === 413) {
            return res.status(413).json({
                error: "File too large. Maximum 5MB allowed."
            });
        }
        return res.status(500).json({
            error: "Failed to submit application. Please try again."
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
var __webpack_exports__ = (__webpack_exec__(1774));
module.exports = __webpack_exports__;

})();