"use strict";
exports.id = 7053;
exports.ids = [7053,6548];
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
/* harmony export */   "F7": () => (/* binding */ sendQuoteAlertToAdmin),
/* harmony export */   "Ky": () => (/* binding */ sendNewsletterWelcomeEmail),
/* harmony export */   "LS": () => (/* binding */ sendPasswordResetEmail),
/* harmony export */   "Pi": () => (/* binding */ sendWelcomeEmail),
/* harmony export */   "ZZ": () => (/* binding */ sendQuoteReceivedEmail),
/* harmony export */   "bn": () => (/* binding */ sendOrderConfirmationEmail),
/* harmony export */   "cg": () => (/* binding */ sendOrderAlertToAdmin),
/* harmony export */   "iV": () => (/* binding */ safeSend),
/* harmony export */   "mN": () => (/* binding */ sendAdminPasswordResetEmail),
/* harmony export */   "mm": () => (/* binding */ sendApplicationReceivedEmail),
/* harmony export */   "t3": () => (/* binding */ sendApplicationAlertToAdmin)
/* harmony export */ });
/* unused harmony exports sendEmail, ALERT_RECIPIENTS */
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
// --- Admin alert recipients (configurable via env, with sensible defaults) ---
const DOMAIN = process.env.MAIL_DOMAIN || "missolution.com.bd";
const ALERT_RECIPIENTS = {
    applications: process.env.ALERT_EMAIL_APPLICATIONS || `hr@${DOMAIN}`,
    quotes: process.env.ALERT_EMAIL_QUOTES || `sales@${DOMAIN}`,
    orders: process.env.ALERT_EMAIL_ORDERS || `sales@${DOMAIN}`,
    fallback: process.env.ALERT_EMAIL_FALLBACK || `info@${DOMAIN}`
};
const SITE_URL = "http://localhost:3000" || 0;
const escapeHtml = (value)=>String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// Shared branded shell so every email looks consistent.
const layout = ({ heading , bodyHtml , accent ="#1e293b"  })=>`
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e293b; margin: 0;">MIS Solution</h1>
    </div>
    <h2 style="color: ${accent};">${heading}</h2>
    ${bodyHtml}
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
    <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution - ${DOMAIN}</p>
  </div>
`;
const paragraph = (text)=>`<p style="color: #4b5563; line-height: 1.6;">${text}</p>`;
// Fire-and-forget helper: never let an email failure break a form submission.
const safeSend = (promiseFactory, context = "email")=>{
    try {
        Promise.resolve().then(promiseFactory).catch((err)=>console.error(`[mailer] ${context} failed:`, err?.message || err));
    } catch (err) {
        console.error(`[mailer] ${context} threw:`, err?.message || err);
    }
};
// --- New account / welcome ---
const sendWelcomeEmail = async ({ to , name  })=>{
    const html = layout({
        heading: "Welcome to MIS Solution",
        bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || "there"},`)}
      ${paragraph("Your account has been created successfully. You can now sign in to browse products, request quotes, and track your orders.")}
      <div style="text-align: center; margin: 30px 0;">
        <a href="${SITE_URL}/login" style="background: #1e293b; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Sign In</a>
      </div>
      ${paragraph("If you didn't create this account, please ignore this email.")}
    `
    });
    return sendEmail({
        to,
        subject: "Welcome to MIS Solution",
        html
    });
};
// --- Career application: confirmation to applicant ---
const sendApplicationReceivedEmail = async ({ to , name  })=>{
    const html = layout({
        heading: "We received your application",
        bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || "there"},`)}
      ${paragraph("Thank you for applying to MIS Solution. Our HR team has received your application and will review it shortly. If your profile matches, we'll reach out to you directly.")}
      ${paragraph("We appreciate your interest in joining our team.")}
    `
    });
    return sendEmail({
        to,
        subject: "Application Received - MIS Solution",
        html
    });
};
// --- Career application: alert to HR ---
const sendApplicationAlertToAdmin = async ({ applicantName , email , phone , careerPostId  })=>{
    const html = layout({
        heading: "New career application",
        accent: "#7c3aed",
        bodyHtml: `
      ${paragraph(`<strong>Applicant:</strong> ${escapeHtml(applicantName) || "—"}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Phone:</strong> ${escapeHtml(phone) || "—"}`)}
      ${paragraph(`<strong>Position ID:</strong> ${escapeHtml(careerPostId)}`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `
    });
    return sendEmail({
        to: ALERT_RECIPIENTS.applications,
        subject: `New application from ${applicantName || email}`,
        html
    });
};
// --- Quote / inquiry: confirmation to client ---
const sendQuoteReceivedEmail = async ({ to , name  })=>{
    const html = layout({
        heading: "We received your request",
        bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || "there"},`)}
      ${paragraph("Thank you for reaching out to MIS Solution. We've received your request and our team will get back to you within one business day with the details you need.")}
    `
    });
    return sendEmail({
        to,
        subject: "Request Received - MIS Solution",
        html
    });
};
// --- Quote / inquiry: alert to sales ---
const sendQuoteAlertToAdmin = async ({ clientName , companyName , email , projectType , requirements  })=>{
    const html = layout({
        heading: "New quote / inquiry",
        accent: "#7c3aed",
        bodyHtml: `
      ${paragraph(`<strong>Client:</strong> ${escapeHtml(clientName) || "—"}`)}
      ${paragraph(`<strong>Company:</strong> ${escapeHtml(companyName) || "—"}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Type:</strong> ${escapeHtml(projectType) || "general"}`)}
      ${paragraph(`<strong>Requirements:</strong><br/>${escapeHtml(requirements).replace(/\n/g, "<br/>")}`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `
    });
    return sendEmail({
        to: ALERT_RECIPIENTS.quotes,
        subject: `New quote request from ${clientName || email}`,
        html
    });
};
// --- Newsletter: welcome to subscriber ---
const sendNewsletterWelcomeEmail = async ({ to  })=>{
    const html = layout({
        heading: "You're subscribed",
        bodyHtml: `
      ${paragraph("Thanks for subscribing to the MIS Solution newsletter. You'll now receive our latest products, offers, and updates.")}
      ${paragraph("If you didn't subscribe, you can safely ignore this email.")}
    `
    });
    return sendEmail({
        to,
        subject: "Subscribed to MIS Solution Newsletter",
        html
    });
};
// --- Order: confirmation to customer ---
const sendOrderConfirmationEmail = async ({ to , name , orderNo , totalAmount , items =[]  })=>{
    const money = (n)=>new Intl.NumberFormat("en-BD").format(Number(n || 0));
    const rows = items.map((it)=>`
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${escapeHtml(it.name)}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: center;">${Number(it.quantity || 1)}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">${money(it.price)} BDT</td>
        </tr>`).join("");
    const html = layout({
        heading: "Order confirmed",
        bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || "there"},`)}
      ${paragraph(`Thank you for your order. Your order number is <strong>${escapeHtml(orderNo)}</strong>.`)}
      <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <thead>
          <tr>
            <th style="padding: 8px; text-align: left; border-bottom: 2px solid #1e293b;">Item</th>
            <th style="padding: 8px; text-align: center; border-bottom: 2px solid #1e293b;">Qty</th>
            <th style="padding: 8px; text-align: right; border-bottom: 2px solid #1e293b;">Price</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      ${paragraph(`<strong>Total: ${money(totalAmount)} BDT</strong>`)}
      ${paragraph("We'll contact you shortly to confirm delivery. Thank you for shopping with MIS Solution.")}
    `
    });
    return sendEmail({
        to,
        subject: `Order Confirmation ${orderNo} - MIS Solution`,
        html
    });
};
// --- Order: alert to sales ---
const sendOrderAlertToAdmin = async ({ orderNo , customerName , email , totalAmount  })=>{
    const money = (n)=>new Intl.NumberFormat("en-BD").format(Number(n || 0));
    const html = layout({
        heading: "New order placed",
        accent: "#7c3aed",
        bodyHtml: `
      ${paragraph(`<strong>Order:</strong> ${escapeHtml(orderNo)}`)}
      ${paragraph(`<strong>Customer:</strong> ${escapeHtml(customerName) || "—"}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Total:</strong> ${money(totalAmount)} BDT`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `
    });
    return sendEmail({
        to: ALERT_RECIPIENTS.orders,
        subject: `New order ${orderNo}`,
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