import crypto from 'crypto'
import { getDbPool } from '../../../lib/server/db'
import { sendAdminPasswordResetEmail } from '../../../lib/server/mailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const identifier = String(req.body?.identifier || '').trim().toLowerCase()

  if (!identifier) {
    return res.status(400).json({ error: 'Email or username is required.' })
  }

  try {
    const db = getDbPool()

    const [admins] = await db.execute(
      'SELECT id, name, email FROM admin_users WHERE (LOWER(email) = ? OR LOWER(username) = ?) AND deleted_at IS NULL LIMIT 1',
      [identifier, identifier]
    )

    if (!admins.length) {
      return res.status(200).json({ success: true, message: 'If an admin account exists, a reset link has been sent.' })
    }

    const admin = admins[0]
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes

    // Invalidate existing tokens for this admin
    await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE customer_id = ? AND used = 0', [admin.id + 1000000])

    // Store token (use customer_id + 1000000 offset to distinguish admin tokens)
    await db.execute(
      'INSERT INTO password_reset_tokens (customer_id, token, expires_at) VALUES (?, ?, ?)',
      [admin.id + 1000000, token, expiresAt]
    )

    const baseUrl = process.env.NEXTAUTH_URL || 'https://missolution.com.bd'
    const resetUrl = `${baseUrl}/portal-secure-99x/reset-password?token=${token}`

    await sendAdminPasswordResetEmail({
      to: admin.email,
      name: admin.name,
      resetUrl,
    })

    return res.status(200).json({ success: true, message: 'If an admin account exists, a reset link has been sent.' })
  } catch (error) {
    console.error('Admin forgot password error:', error)
    return res.status(500).json({ error: 'Unable to process request.' })
  }
}
