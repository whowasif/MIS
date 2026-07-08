import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { code, subtotal } = req.body || {}

  if (!code) {
    return res.status(400).json({ error: 'Promo code is required.' })
  }

  try {
    const db = getDbPool()
    const [rows] = await db.execute(
      'SELECT * FROM promo_codes WHERE UPPER(code) = UPPER(?) AND is_active = 1 LIMIT 1',
      [String(code).trim()]
    )

    if (!rows.length) {
      return res.status(404).json({ valid: false, error: 'Invalid promo code.' })
    }

    const promo = rows[0]
    const now = new Date()

    // Check validity period
    if (promo.valid_from && new Date(promo.valid_from) > now) {
      return res.status(400).json({ valid: false, error: 'This promo code is not yet active.' })
    }
    if (promo.valid_until && new Date(promo.valid_until) < now) {
      return res.status(400).json({ valid: false, error: 'This promo code has expired.' })
    }

    // Check usage limit
    if (promo.max_uses > 0 && promo.used_count >= promo.max_uses) {
      return res.status(400).json({ valid: false, error: 'This promo code has been fully redeemed.' })
    }

    // Check minimum order amount
    const orderSubtotal = Number(subtotal || 0)
    if (promo.min_order_amount > 0 && orderSubtotal < promo.min_order_amount) {
      return res.status(400).json({
        valid: false,
        error: `Minimum order of ৳${promo.min_order_amount} required for this code.`,
      })
    }

    // Calculate discount
    let discountAmount = 0
    if (promo.discount_type === 'percentage') {
      discountAmount = Math.round((orderSubtotal * promo.discount_value / 100) * 100) / 100
    } else {
      discountAmount = Number(promo.discount_value)
    }

    return res.status(200).json({
      valid: true,
      code: promo.code,
      discountType: promo.discount_type,
      discountValue: Number(promo.discount_value),
      discountAmount,
      description: promo.description,
    })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to validate promo code.' })
  }
}
