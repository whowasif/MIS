import { getToken } from 'next-auth/jwt'
import { getDbPool } from '../../../lib/server/db'

export default async function handler(req, res) {
  // Use JWT token directly — more reliable than getSession in API routes
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token?.email) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  const db = getDbPool()
  const email = token.email.toLowerCase()

  if (req.method === 'GET') {
    const [rows] = await db.execute(
      'SELECT id, full_name, email, phone_number, division, district, shipping_address, profile_image, created_at FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
      [email]
    )
    if (!rows.length) return res.status(404).json({ error: 'Customer not found' })
    return res.json({ success: true, customer: rows[0] })
  }

  if (req.method === 'PUT') {
    const { full_name, phone_number, division, district, shipping_address } = req.body || {}

    const [result] = await db.execute(
      'UPDATE customers SET full_name = ?, phone_number = ?, division = ?, district = ?, shipping_address = ? WHERE email = ? AND deleted_at IS NULL',
      [full_name || '', phone_number || '', division || '', district || '', shipping_address || '', email]
    )

    return res.json({ success: true, affected: result.affectedRows })
  }

  res.setHeader('Allow', ['GET', 'PUT'])
  return res.status(405).json({ error: 'Method not allowed' })
}
