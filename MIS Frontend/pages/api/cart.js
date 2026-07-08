import { getToken } from 'next-auth/jwt'
import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token?.email) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  const db = getDbPool()

  // Get customer ID
  const [customers] = await db.execute(
    'SELECT id FROM customers WHERE email = ? AND deleted_at IS NULL LIMIT 1',
    [token.email.toLowerCase()]
  )

  if (!customers.length) {
    return res.status(404).json({ error: 'Customer not found' })
  }

  const customerId = customers[0].id

  // GET - fetch saved cart
  if (req.method === 'GET') {
    try {
      const [items] = await db.execute(
        'SELECT product_slug, product_name, product_image, product_id, price, quantity FROM customer_cart WHERE customer_id = ? ORDER BY created_at ASC',
        [customerId]
      )

      const cart = items.map((item) => ({
        id: item.product_slug,
        productId: item.product_id,
        name: item.product_name,
        image: item.product_image || '',
        price: Number(item.price),
        quantity: Number(item.quantity),
      }))

      return res.status(200).json({ cart })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to load cart.' })
    }
  }

  // PUT - save/sync entire cart
  if (req.method === 'PUT') {
    const { items } = req.body || {}

    if (!Array.isArray(items)) {
      return res.status(400).json({ error: 'Items array required.' })
    }

    try {
      // Clear existing cart
      await db.execute('DELETE FROM customer_cart WHERE customer_id = ?', [customerId])

      // Insert new items
      for (const item of items) {
        if (!item.id || !item.name) continue
        await db.execute(
          `INSERT INTO customer_cart (customer_id, product_slug, product_name, product_image, product_id, price, quantity)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            customerId,
            String(item.id),
            String(item.name),
            String(item.image || ''),
            item.productId || null,
            Number(item.price || 0),
            Number(item.quantity || 1),
          ]
        )
      }

      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to save cart.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
