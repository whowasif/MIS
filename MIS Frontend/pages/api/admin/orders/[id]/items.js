import { getDbPool } from '../../../../../lib/server/db'
import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const { id } = req.query

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const db = getDbPool()
    const [items] = await db.execute(
      `SELECT oi.*, p.name AS joined_product_name,
              COALESCE(oi.product_name, p.name) AS display_name
       FROM order_items oi
       LEFT JOIN products p ON p.id = oi.product_id
       WHERE oi.order_id = ?
       ORDER BY oi.id ASC`,
      [id]
    )

    const mapped = items.map((item) => ({
      ...item,
      product_name: item.display_name || item.product_name || `Unnamed Product (৳${Number(item.price_at_purchase || 0).toFixed(2)})`,
    }))

    return res.status(200).json({ items: JSON.parse(JSON.stringify(mapped)) })
  } catch (error) {
    console.error('Order items fetch error:', error)
    return res.status(500).json({ error: 'Failed to load order items.' })
  }
}
