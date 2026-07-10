"use strict";
exports.id = 7053;
exports.ids = [7053,6548,8930];
exports.modules = {

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

/***/ 5333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS": () => (/* binding */ sendPasswordResetEmail),
/* harmony export */   "mN": () => (/* binding */ sendAdminPasswordResetEmail)
/* harmony export */ });
/* unused harmony export sendEmail */
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);

let transporter = null;
const getTransporter = ()=>{
    if (transporter) return transporter;
    transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
        host: process.env.SMTP_HOST || "localhost",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    return transporter;
};
const sendEmail = async ({ to , subject , html  })=>{
    const transport = getTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    return transport.sendMail({
        from,
        to,
        subject,
        html
    });
};
const sendPasswordResetEmail = async ({ to , name , resetUrl  })=>{
    const subject = "Reset Your Password - MIS Solution";
    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e293b; margin: 0;">MIS Solution</h1>
      </div>
      <h2 style="color: #1e293b;">Password Reset Request</h2>
      <p style="color: #4b5563; line-height: 1.6;">Hi ${name || "there"},</p>
      <p style="color: #4b5563; line-height: 1.6;">We received a request to reset your password. Click the button below to set a new password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background: #1e293b; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Reset Password</a>
      </div>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">If you didn't request this, you can safely ignore this email. This link expires in 1 hour.</p>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">Or copy this link: <a href="${resetUrl}" style="color: #3b82f6;">${resetUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution - missolution.com.bd</p>
    </div>
  `;
    return sendEmail({
        to,
        subject,
        html
    });
};
const sendAdminPasswordResetEmail = async ({ to , name , resetUrl  })=>{
    const subject = "Admin Password Reset - MIS Solution";
    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e293b; margin: 0;">MIS Admin Panel</h1>
      </div>
      <h2 style="color: #1e293b;">Admin Password Reset</h2>
      <p style="color: #4b5563; line-height: 1.6;">Hi ${name || "Admin"},</p>
      <p style="color: #4b5563; line-height: 1.6;">A password reset was requested for your admin account. Click below to set a new password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background: #7c3aed; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Reset Admin Password</a>
      </div>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">This link expires in 30 minutes. If you didn't request this, contact the super admin immediately.</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution Admin System</p>
    </div>
  `;
    return sendEmail({
        to,
        subject,
        html
    });
};


/***/ })

};
;