import nodemailer from 'nodemailer'

let transporter = null

const getTransporter = () => {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  })

  return transporter
}

export const sendEmail = async ({ to, subject, html }) => {
  const transport = getTransporter()
  const from = process.env.SMTP_FROM || process.env.SMTP_USER

  return transport.sendMail({ from, to, subject, html })
}

// --- Admin alert recipients (configurable via env, with sensible defaults) ---
const DOMAIN = process.env.MAIL_DOMAIN || 'missolution.com.bd'
export const ALERT_RECIPIENTS = {
  applications: process.env.ALERT_EMAIL_APPLICATIONS || `hr@${DOMAIN}`,
  quotes: process.env.ALERT_EMAIL_QUOTES || `sales@${DOMAIN}`,
  orders: process.env.ALERT_EMAIL_ORDERS || `sales@${DOMAIN}`,
  fallback: process.env.ALERT_EMAIL_FALLBACK || `info@${DOMAIN}`,
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${DOMAIN}`

const escapeHtml = (value) =>
  String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Shared branded shell so every email looks consistent.
const layout = ({ heading, bodyHtml, accent = '#1e293b' }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #1e293b; margin: 0;">MIS Solution</h1>
    </div>
    <h2 style="color: ${accent};">${heading}</h2>
    ${bodyHtml}
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
    <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution - ${DOMAIN}</p>
  </div>
`

const paragraph = (text) =>
  `<p style="color: #4b5563; line-height: 1.6;">${text}</p>`

// Fire-and-forget helper: never let an email failure break a form submission.
export const safeSend = (promiseFactory, context = 'email') => {
  try {
    Promise.resolve()
      .then(promiseFactory)
      .catch((err) => console.error(`[mailer] ${context} failed:`, err?.message || err))
  } catch (err) {
    console.error(`[mailer] ${context} threw:`, err?.message || err)
  }
}

// --- New account / welcome ---
export const sendWelcomeEmail = async ({ to, name }) => {
  const html = layout({
    heading: 'Welcome to MIS Solution',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Your account has been created successfully. You can now sign in to browse products, request quotes, and track your orders.')}
      <div style="text-align: center; margin: 30px 0;">
        <a href="${SITE_URL}/login" style="background: #1e293b; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Sign In</a>
      </div>
      ${paragraph('If you didn\'t create this account, please ignore this email.')}
    `,
  })
  return sendEmail({ to, subject: 'Welcome to MIS Solution', html })
}

// --- Career application: confirmation to applicant ---
export const sendApplicationReceivedEmail = async ({ to, name }) => {
  const html = layout({
    heading: 'We received your application',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Thank you for applying to MIS Solution. Our HR team has received your application and will review it shortly. If your profile matches, we\'ll reach out to you directly.')}
      ${paragraph('We appreciate your interest in joining our team.')}
    `,
  })
  return sendEmail({ to, subject: 'Application Received - MIS Solution', html })
}

// --- Career application: alert to HR ---
export const sendApplicationAlertToAdmin = async ({ applicantName, email, phone, careerPostId }) => {
  const html = layout({
    heading: 'New career application',
    accent: '#7c3aed',
    bodyHtml: `
      ${paragraph(`<strong>Applicant:</strong> ${escapeHtml(applicantName) || '—'}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Phone:</strong> ${escapeHtml(phone) || '—'}`)}
      ${paragraph(`<strong>Position ID:</strong> ${escapeHtml(careerPostId)}`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `,
  })
  return sendEmail({ to: ALERT_RECIPIENTS.applications, subject: `New application from ${applicantName || email}`, html })
}

// --- Quote / inquiry: confirmation to client ---
export const sendQuoteReceivedEmail = async ({ to, name }) => {
  const html = layout({
    heading: 'We received your request',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Thank you for reaching out to MIS Solution. We\'ve received your request and our team will get back to you within one business day with the details you need.')}
    `,
  })
  return sendEmail({ to, subject: 'Request Received - MIS Solution', html })
}

// --- Quote / inquiry: alert to sales ---
export const sendQuoteAlertToAdmin = async ({ clientName, companyName, email, projectType, requirements }) => {
  const html = layout({
    heading: 'New quote / inquiry',
    accent: '#7c3aed',
    bodyHtml: `
      ${paragraph(`<strong>Client:</strong> ${escapeHtml(clientName) || '—'}`)}
      ${paragraph(`<strong>Company:</strong> ${escapeHtml(companyName) || '—'}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Type:</strong> ${escapeHtml(projectType) || 'general'}`)}
      ${paragraph(`<strong>Requirements:</strong><br/>${escapeHtml(requirements).replace(/\n/g, '<br/>')}`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `,
  })
  return sendEmail({ to: ALERT_RECIPIENTS.quotes, subject: `New quote request from ${clientName || email}`, html })
}

// --- Newsletter: welcome to subscriber ---
export const sendNewsletterWelcomeEmail = async ({ to }) => {
  const html = layout({
    heading: 'You\'re subscribed',
    bodyHtml: `
      ${paragraph('Thanks for subscribing to the MIS Solution newsletter. You\'ll now receive our latest products, offers, and updates.')}
      ${paragraph('If you didn\'t subscribe, you can safely ignore this email.')}
    `,
  })
  return sendEmail({ to, subject: 'Subscribed to MIS Solution Newsletter', html })
}

// --- Order: confirmation to customer ---
export const sendOrderConfirmationEmail = async ({ to, name, orderNo, totalAmount, items = [] }) => {
  const money = (n) => new Intl.NumberFormat('en-BD').format(Number(n || 0))
  const rows = items
    .map(
      (it) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${escapeHtml(it.name)}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: center;">${Number(it.quantity || 1)}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; text-align: right;">${money(it.price)} BDT</td>
        </tr>`
    )
    .join('')
  const html = layout({
    heading: 'Order confirmed',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
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
      ${paragraph('We\'ll contact you shortly to confirm delivery. Thank you for shopping with MIS Solution.')}
    `,
  })
  return sendEmail({ to, subject: `Order Confirmation ${orderNo} - MIS Solution`, html })
}

// --- Order: alert to sales ---
export const sendOrderAlertToAdmin = async ({ orderNo, customerName, email, totalAmount }) => {
  const money = (n) => new Intl.NumberFormat('en-BD').format(Number(n || 0))
  const html = layout({
    heading: 'New order placed',
    accent: '#7c3aed',
    bodyHtml: `
      ${paragraph(`<strong>Order:</strong> ${escapeHtml(orderNo)}`)}
      ${paragraph(`<strong>Customer:</strong> ${escapeHtml(customerName) || '—'}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Total:</strong> ${money(totalAmount)} BDT`)}
      ${paragraph(`Review it in the admin panel: <a href="${SITE_URL}/admin">Open admin</a>`)}
    `,
  })
  return sendEmail({ to: ALERT_RECIPIENTS.orders, subject: `New order ${orderNo}`, html })
}

export const sendPasswordResetEmail = async ({ to, name, resetUrl }) => {
  const subject = 'Reset Your Password - MIS Solution'
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e293b; margin: 0;">MIS Solution</h1>
      </div>
      <h2 style="color: #1e293b;">Password Reset Request</h2>
      <p style="color: #4b5563; line-height: 1.6;">Hi ${name || 'there'},</p>
      <p style="color: #4b5563; line-height: 1.6;">We received a request to reset your password. Click the button below to set a new password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background: #1e293b; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Reset Password</a>
      </div>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">If you didn't request this, you can safely ignore this email. This link expires in 1 hour.</p>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">Or copy this link: <a href="${resetUrl}" style="color: #3b82f6;">${resetUrl}</a></p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution - missolution.com.bd</p>
    </div>
  `

  return sendEmail({ to, subject, html })
}

export const sendAdminPasswordResetEmail = async ({ to, name, resetUrl }) => {
  const subject = 'Admin Password Reset - MIS Solution'
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e293b; margin: 0;">MIS Admin Panel</h1>
      </div>
      <h2 style="color: #1e293b;">Admin Password Reset</h2>
      <p style="color: #4b5563; line-height: 1.6;">Hi ${name || 'Admin'},</p>
      <p style="color: #4b5563; line-height: 1.6;">A password reset was requested for your admin account. Click below to set a new password:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background: #7c3aed; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Reset Admin Password</a>
      </div>
      <p style="color: #4b5563; line-height: 1.6; font-size: 13px;">This link expires in 30 minutes. If you didn't request this, contact the super admin immediately.</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
      <p style="color: #9ca3af; font-size: 12px; text-align: center;">MIS Solution Admin System</p>
    </div>
  `

  return sendEmail({ to, subject, html })
}
