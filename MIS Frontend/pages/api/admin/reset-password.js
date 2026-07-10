import bcrypt from 'bcryptjs'
import { getDbPool } from '../../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token, password } = req.body || {}

  if (!token || !password) {
    return res.status(400).json({ error: 'Token and new password are required.' })
  }

  if (password.length < 10) {
    return res.status(400).json({ error: 'Admin password must be at least 10 characters with uppercase, lowercase, number, and symbol.' })
  }

  try {
    const db = getDbPool()

    const [tokens] = await db.execute(
      'SELECT id, customer_id, expires_at FROM password_reset_tokens WHERE token = ? AND used = 0 LIMIT 1',
      [token]
    )

    if (!tokens.length) {
      return res.status(400).json({ error: 'Invalid or expired reset link.' })
    }

    const resetToken = tokens[0]
    const adminId = resetToken.customer_id - 1000000

    if (adminId <= 0) {
      return res.status(400).json({ error: 'Invalid reset token.' })
    }

    if (new Date(resetToken.expires_at) < new Date()) {
      await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE id = ?', [resetToken.id])
      return res.status(400).json({ error: 'This reset link has expired.' })
    }

    const passwordHash = await bcrypt.hash(password, 12)

    await db.execute('UPDATE admin_users SET password_hash = ?, failed_login_attempts = 0 WHERE id = ?', [passwordHash, adminId])
    await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE id = ?', [resetToken.id])

    return res.status(200).json({ success: true, message: 'Admin password reset successfully.' })
  } catch (error) {
    console.error('Admin reset password error:', error)
    return res.status(500).json({ error: 'Unable to reset password.' })
  }
}
