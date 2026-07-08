import { getDbPool } from '../../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const db = getDbPool()
    const [rows] = await db.query(
      `SELECT id, parent_id, name, slug, icon_url, display_order
       FROM categories
       WHERE deleted_at IS NULL AND status = 'active'
       ORDER BY display_order ASC, name ASC`
    )

    return res.status(200).json({
      success: true,
      categories: rows,
      count: rows.length,
      items: rows, // backward compat
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load categories',
    })
  }
}
