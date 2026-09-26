"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748,6548];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ 7618:
/***/ ((module) => {

module.exports = import("bcryptjs");;

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

/***/ 3696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3598);
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7618);
/* harmony import */ var _lib_server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bcryptjs__WEBPACK_IMPORTED_MODULE_3__]);
bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/signin"
    },
    providers: [
        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({
            name: "Email & Password",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_4__/* .getDbPool */ .z)();
                const [rows] = await db.execute("SELECT id, full_name, email, password_hash, profile_image FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
                    credentials.email.trim().toLowerCase()
                ]);
                if (!rows.length) return null;
                const user = rows[0];
                if (!user.password_hash) return null // Google-only user, can't login with password
                ;
                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__["default"].compare(credentials.password, user.password_hash);
                if (!isValid) return null;
                return {
                    id: String(user.id),
                    name: user.full_name,
                    email: user.email,
                    image: user.profile_image
                };
            }
        }), 
    ],
    callbacks: {
        async signIn ({ user , account  }) {
            if (account?.provider === "google") {
                const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_4__/* .getDbPool */ .z)();
                const email = user.email?.toLowerCase();
                const [existing] = await db.execute("SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
                    email
                ]);
                if (existing.length > 0) {
                    // Update google_id and profile image
                    await db.execute("UPDATE customers SET google_id = ?, profile_image = ?, full_name = ? WHERE email = ?", [
                        account.providerAccountId,
                        user.image || null,
                        user.name || "",
                        email
                    ]);
                } else {
                    // Create new customer
                    await db.execute("INSERT INTO customers (full_name, email, google_id, profile_image, is_email_verified) VALUES (?, ?, ?, ?, 1)", [
                        user.name || "",
                        email,
                        account.providerAccountId,
                        user.image || null
                    ]);
                }
            }
            return true;
        },
        async jwt ({ token , user  }) {
            if (user) {
                const db = (0,_lib_server_db__WEBPACK_IMPORTED_MODULE_4__/* .getDbPool */ .z)();
                const [rows] = await db.execute("SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1", [
                    user.email?.toLowerCase()
                ]);
                if (rows.length > 0) {
                    token.customerId = rows[0].id;
                }
            }
            return token;
        },
        async session ({ session , token  }) {
            if (token.customerId) {
                session.user.customerId = token.customerId;
            }
            return session;
        }
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3696));
module.exports = __webpack_exports__;

})();