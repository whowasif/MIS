import crypto from 'crypto'
import { getDbPool } from '../../../lib/server/db'
import { sendPasswordResetEmail } from '../../../lib/server/mailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const email = String(req.body?.email || '').trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email address is required.' })
  }

  try {
    const db = getDbPool()

    // Find customer
    const [customers] = await db.execute(
      'SELECT id, full_name, email FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
      [email]
    )

    // Always return success to prevent email enumeration
    if (!customers.length) {
      return res.status(200).json({ success: true, message: 'If an account exists with this email, a reset link has been sent.' })
    }

    const customer = customers[0]

    // Generate token
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    // Invalidate any existing tokens
    await db.execute('UPDATE password_reset_tokens SET used = 1 WHERE customer_id = ? AND used = 0', [customer.id])

    // Store token
    await db.execute(
      'INSERT INTO password_reset_tokens (customer_id, token, expires_at) VALUES (?, ?, ?)',
      [customer.id, token, expiresAt]
    )

    // Build reset URL
    const baseUrl = process.env.NEXTAUTH_URL || 'https://missolution.com.bd'
    const resetUrl = `${baseUrl}/auth/reset-password?token=${token}`

    // Send email
    await sendPasswordResetEmail({
      to: customer.email,
      name: customer.full_name,
      resetUrl,
    })

    return res.status(200).json({ success: true, message: 'If an account exists with this email, a reset link has been sent.' })
  } catch (error) {
    console.error('Forgot password error:', error)
    return res.status(500).json({ error: 'Unable to process request. Please try again.' })
  }
}
