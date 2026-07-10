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

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' })
  }

  try {
    const db = getDbPool()

    // Find valid token
    const [tokens] = await db.execute(
      'SELECT id, customer_id, expires_at FROM password_reset_tokens WHERE token = ? AND used = 0 LIMIT 1',
      [token]
    )

    if (!tokens.length) {
      return res.status(400).json({ error: 'Invalid or expired reset link. Please request a new one.' })
    }

    const resetToken = tokens[0]

    // Check expiry
    if (new Date(resetToken.expires_at) < new Date()) {
      await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE id = ?', [resetToken.id])
      return res.status(400).json({ error: 'This reset link has expired. Please request a new one.' })
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(password, 12)

    // Update customer password
    await db.execute('UPDATE customers SET password_hash = ? WHERE id = ?', [passwordHash, resetToken.customer_id])

    // Mark token as used
    await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE id = ?', [resetToken.id])

    return res.status(200).json({ success: true, message: 'Password has been reset successfully. You can now sign in.' })
  } catch (error) {
    console.error('Reset password error:', error)
    return res.status(500).json({ error: 'Unable to reset password. Please try again.' })
  }
}
