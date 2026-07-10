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
