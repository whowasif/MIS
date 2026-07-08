import { getDbPool } from '../../../../../lib/server/db'
import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const { id } = req.query

  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { discountPercent, discountAmount, deliveryCharge } = req.body || {}
  const pct = Math.max(0, Math.min(100, Number(discountPercent) || 0))
  const amt = Math.max(0, Number(discountAmount) || 0)
  const delivery = Math.max(0, Number(deliveryCharge) || 0)

  try {
    const db = getDbPool()
    await db.execute(
      'UPDATE orders SET discount_percent = ?, discount_amount = ?, delivery_charge = ? WHERE id = ?',
      [pct, amt, delivery, id]
    )
    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update pricing.' })
  }
}
