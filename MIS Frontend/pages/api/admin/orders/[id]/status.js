import { getDbPool } from '../../../../../lib/server/db'
import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const { id } = req.query

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { status } = req.body || {}
  const validStatuses = ['pending', 'paid', 'shipped', 'cancelled']

  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' })
  }

  try {
    const db = getDbPool()
    await db.execute('UPDATE orders SET status = ? WHERE id = ?', [status, id])
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update order status.' })
  }
}
