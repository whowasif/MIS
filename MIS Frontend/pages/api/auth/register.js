import bcrypt from 'bcryptjs'
import { getDbPool } from '../../../lib/server/db'
import { createNotification, VISIBILITY } from '../../../lib/server/notifications'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName, email, password } = req.body || {}

  if (!fullName || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' })
  }

  const cleanEmail = String(email).trim().toLowerCase()
  const cleanName = String(fullName).trim()

  const db = getDbPool()

  // Check if email exists
  const [existing] = await db.execute(
    'SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
    [cleanEmail]
  )

  if (existing.length > 0) {
    return res.status(409).json({ error: 'An account with this email already exists. Please sign in.' })
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 12)

  // Create customer
  try {
    const [regResult] = await db.execute(
      'INSERT INTO customers (full_name, email, password_hash, is_email_verified) VALUES (?, ?, ?, 0)',
      [cleanName, cleanEmail, passwordHash]
    )

    // Notify (super admin only): a new customer registered.
    createNotification({
      type: 'new_customer',
      title: 'New customer joined',
      message: `${cleanName} (${cleanEmail})`,
      resource: 'customers',
      resourceId: regResult?.insertId || null,
      minRoleRank: VISIBILITY.SUPER_ONLY,
    }).catch(() => {})

    return res.status(201).json({ success: true, message: 'Account created successfully.' })
  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ error: 'Unable to create account. Please try again.' })
  }
}
