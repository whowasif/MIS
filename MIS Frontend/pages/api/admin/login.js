import bcrypt from 'bcryptjs'

import { getDbPool } from '../../../lib/server/db'
import { verifyCaptchaAnswer } from '../../../lib/auth/captcha'
import {
  buildRoleCookie,
  buildSessionCookie,
  createAdminSessionToken,
  ADMIN_ROLES,
} from '../../../lib/auth/session'

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for']
  const directIp = req.socket?.remoteAddress
  const rawValue = Array.isArray(forwarded) ? forwarded[0] : forwarded || directIp || ''
  return String(rawValue).split(',')[0].trim().slice(0, 45)
}

const isPasswordComplexEnough = (password) => {
  const value = String(password || '')
  const lengthOk = value.length >= 10 && value.length <= 64
  const hasUpper = /[A-Z]/.test(value)
  const hasLower = /[a-z]/.test(value)
  const hasNumber = /\d/.test(value)
  const hasSymbol = /[^A-Za-z0-9]/.test(value)
  return lengthOk && hasUpper && hasLower && hasNumber && hasSymbol
}

const isBcryptHash = (value) => /^\$2[aby]\$\d{2}\$/.test(String(value || ''))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const identifier = String(req.body?.identifier || '').trim().toLowerCase()
    const password = String(req.body?.password || '')
    const turnstileToken = String(req.body?.turnstileToken || req.body?.captchaToken || '').trim()

    if (!identifier || !password) {
      return res.status(400).json({ success: false, error: 'Email or username and password are required.' })
    }

    const isCaptchaValid = await verifyCaptchaAnswer({
      token: turnstileToken,
    })

    if (!isCaptchaValid) {
      return res.status(400).json({
        success: false,
        error: 'Human verification failed. Please complete the Cloudflare challenge.',
      })
    }

    const db = getDbPool()
    const [rows] = await db.execute(
      `SELECT
        id,
        name,
        username,
        email,
        role,
        password_hash,
        failed_login_attempts
      FROM admin_users
      WHERE deleted_at IS NULL
        AND (LOWER(email) = ? OR LOWER(username) = ?)
      LIMIT 1`,
      [identifier, identifier]
    )

    if (!rows.length) {
      return res.status(401).json({ success: false, error: 'Invalid credentials.' })
    }

    const adminUser = rows[0]
    const failedAttempts = Number(adminUser.failed_login_attempts || 0)

    if (failedAttempts >= 10) {
      return res.status(423).json({ success: false, error: 'Account temporarily locked. Contact superadmin.' })
    }

    if (!isBcryptHash(adminUser.password_hash)) {
      return res.status(500).json({ success: false, error: 'Admin password hash is not configured correctly.' })
    }

    const isValidPassword = await bcrypt.compare(password, adminUser.password_hash)

    if (!isValidPassword) {
      await db.execute(
        'UPDATE admin_users SET failed_login_attempts = COALESCE(failed_login_attempts, 0) + 1, updated_at = NOW() WHERE id = ?',
        [adminUser.id]
      )
      return res.status(401).json({ success: false, error: 'Invalid credentials.' })
    }

    if (!isPasswordComplexEnough(password)) {
      return res.status(400).json({
        success: false,
        error:
          'Password policy violation. Use at least 10 characters with upper, lower, number, and symbol.',
      })
    }

    const sessionToken = await createAdminSessionToken({
      id: adminUser.id,
      role: adminUser.role,
      email: adminUser.email,
      name: adminUser.name,
    })

    await db.execute(
      `UPDATE admin_users
       SET failed_login_attempts = 0,
           last_login_ip = ?,
           updated_at = NOW()
       WHERE id = ?`,
      [getClientIp(req), adminUser.id]
    )

    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('Set-Cookie', [
      buildSessionCookie(sessionToken),
      buildRoleCookie(adminUser.role),
    ])

    return res.status(200).json({
      success: true,
      user: {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role,
      },
      isSuperAdmin: adminUser.role === 'super_admin',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Unable to authenticate admin user.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
