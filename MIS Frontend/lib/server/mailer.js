import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

let transporter = null

// Load the logo once and embed it in every email as an inline (CID) attachment.
// Remote <img src> URLs are often blocked/hidden by mail clients (e.g. Gmail proxy),
// so shipping the image inside the message is the reliable approach.
const LOGO_CID = 'mislogo'
let logoAttachment = null
const getLogoAttachment = () => {
  if (logoAttachment !== null) return logoAttachment || undefined
  try {
    const logoPath = path.join(process.cwd(), 'public', 'mis_logo_cut-w.png')
    const content = fs.readFileSync(logoPath)
    logoAttachment = {
      filename: 'mis_logo_cut-w.png',
      content,
      cid: LOGO_CID,
      contentType: 'image/png',
    }
  } catch (err) {
    console.error('[mailer] could not load logo for embedding:', err?.message || err)
    logoAttachment = false // remember failure; fall back to no logo attachment
  }
  return logoAttachment || undefined
}

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

  const logo = getLogoAttachment()
  const attachments = logo ? [logo] : []

  return transport.sendMail({ from, to, subject, html, attachments })
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

// Company logo referenced via the inline CID attachment added in sendEmail().
const LOGO_SRC = `cid:${LOGO_CID}`

// Shared branded shell so every email looks consistent.
const layout = ({ heading, bodyHtml, accent = '#1e293b' }) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px; background: #1e293b; border-radius: 12px; padding: 24px 20px;">
      <img src="${LOGO_SRC}" alt="MIS Solution" width="180" style="display: inline-block; max-width: 180px; height: auto;" />
    </div>
    <h2 style="color: ${accent};">${heading}</h2>
    ${bodyHtml}
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
    <div style="text-align: center;">
      <img src="${LOGO_SRC}" alt="MIS Solution" width="90" style="display: inline-block; max-width: 90px; height: auto; opacity: 0.85; margin-bottom: 8px;" />
      <p style="color: #9ca3af; font-size: 12px; margin: 4px 0 0;">MIS Solution - ${DOMAIN}</p>
    </div>
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
      ${paragraph('Welcome to MIS Solution.')}
      ${paragraph('Your account has been successfully created. You can now sign in to explore our products, submit quote requests, place orders, and manage your account.')}
      ${paragraph('We\u2019re glad to have you with us.')}
      <div style="text-align: center; margin: 30px 0;">
        <a href="${SITE_URL}/login" style="background: #1e293b; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Sign In</a>
      </div>
      ${paragraph('If you did not create this account, please disregard this email.')}
    `,
  })
  return sendEmail({ to, subject: 'Welcome to MIS Solution', html })
}

// --- Career application: confirmation to applicant ---
export const sendApplicationReceivedEmail = async ({ to, name }) => {
  const html = layout({
    heading: 'Application Received',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Thank you for your interest in joining MIS Solution.')}
      ${paragraph('We have successfully received your application for the position you applied for. Our HR team will review your application and qualifications.')}
      ${paragraph('If your profile is shortlisted, a member of our team will contact you regarding the next steps.')}
      ${paragraph('We appreciate the time and effort you put into your application and wish you the best.')}
      ${paragraph('Regards,<br/>HR<br/>MIS Solution')}
    `,
  })
  return sendEmail({ to, subject: 'Application Received - MIS Solution', html })
}

// --- Career application: alert to HR ---
export const sendApplicationAlertToAdmin = async ({ applicantName, email, phone, careerPostId }) => {
  const html = layout({
    heading: 'New Career Application Received',
    accent: '#7c3aed',
    bodyHtml: `
      ${paragraph('A new career application has been submitted through the MIS Solution website.')}
      ${paragraph(`<strong>Applicant:</strong> ${escapeHtml(applicantName) || '—'}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Phone:</strong> ${escapeHtml(phone) || '—'}`)}
      ${paragraph(`<strong>Position ID:</strong> ${escapeHtml(careerPostId)}`)}
      ${paragraph('Please review the application in the admin panel.')}
      <div style="text-align: center; margin: 30px 0;">
        <a href="${SITE_URL}/admin" style="background: #7c3aed; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Open Admin Panel</a>
      </div>
    `,
  })
  return sendEmail({ to: ALERT_RECIPIENTS.applications, subject: 'New Career Application Received', html })
}

// --- Quote / inquiry: confirmation to client ---
export const sendQuoteReceivedEmail = async ({ to, name }) => {
  const html = layout({
    heading: 'Request Received',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Thank you for contacting MIS Solution.')}
      ${paragraph('We have received your inquiry and our team will review your requirements. A member of our team will get in touch with you soon to discuss your request and provide the necessary information.')}
      ${paragraph('We appreciate your interest in MIS Solution and look forward to assisting you.')}
      ${paragraph('Regards,<br/>MIS Solution')}
    `,
  })
  return sendEmail({ to, subject: 'Request Received - MIS Solution', html })
}

// --- Quote / inquiry: alert to sales ---
export const sendQuoteAlertToAdmin = async ({ clientName, companyName, email, projectType, requirements }) => {
  const html = layout({
    heading: 'New Quote / Inquiry Received',
    accent: '#7c3aed',
    bodyHtml: `
      ${paragraph('A new quote or business inquiry has been submitted through the MIS Solution website.')}
      ${paragraph(`<strong>Client:</strong> ${escapeHtml(clientName) || '—'}`)}
      ${paragraph(`<strong>Company:</strong> ${escapeHtml(companyName) || '—'}`)}
      ${paragraph(`<strong>Email:</strong> ${escapeHtml(email)}`)}
      ${paragraph(`<strong>Project Type:</strong> ${escapeHtml(projectType) || 'general'}`)}
      ${paragraph(`<strong>Requirements:</strong><br/>${escapeHtml(requirements).replace(/\n/g, '<br/>')}`)}
      ${paragraph('Please review the inquiry in the admin panel and follow up with the client as appropriate.')}
      <div style="text-align: center; margin: 30px 0;">
        <a href="${SITE_URL}/admin" style="background: #7c3aed; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; display: inline-block;">Open Admin Panel</a>
      </div>
    `,
  })
  return sendEmail({ to: ALERT_RECIPIENTS.quotes, subject: 'New Quote / Inquiry Received', html })
}

// --- Newsletter: welcome to subscriber ---
export const sendNewsletterWelcomeEmail = async ({ to }) => {
  const html = layout({
    heading: 'Welcome to the MIS Solution Newsletter',
    bodyHtml: `
      ${paragraph('Dear User,')}
      ${paragraph('Thank you for subscribing to the MIS Solution newsletter.')}
      ${paragraph('You\u2019ll now receive updates about our latest products, services, offers, announcements, and other relevant news from MIS Solution.')}
      ${paragraph('We\u2019re pleased to have you with us.')}
      ${paragraph('If you did not subscribe to our newsletter, you can safely disregard this email.')}
    `,
  })
  return sendEmail({ to, subject: 'Welcome to the MIS Solution Newsletter', html })
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
    heading: 'Order Confirmation',
    bodyHtml: `
      ${paragraph(`Hi ${escapeHtml(name) || 'there'},`)}
      ${paragraph('Thank you for your order with MIS Solution.')}
      ${paragraph('Your order has been successfully received.')}
      ${paragraph(`<strong>Order Number:</strong> ${escapeHtml(orderNo)}`)}
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
      ${paragraph('Our team will contact you shortly to confirm your order and arrange the next steps for delivery.')}
      ${paragraph('If you have any questions regarding your order, please feel free to contact us.')}
      ${paragraph('Thank you for choosing MIS Solution.')}
      ${paragraph('Regards,<br/>MIS Solution')}
    `,
  })
  return sendEmail({ to, subject: 'Order Confirmation - MIS Solution', html })
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
