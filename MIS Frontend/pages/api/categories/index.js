import { getDbPool } from '../../../lib/server/db'
import { getOrLoad, setPrivateNoStore, setPublicPageCache } from '../../../lib/server/ttl-cache'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    setPrivateNoStore(res)
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const payload = await getOrLoad('api:categories', async () => {
      const db = getDbPool()
      const [rows] = await db.query(
        `SELECT id, parent_id, name, slug, icon_url, display_order
         FROM categories
         WHERE deleted_at IS NULL AND status = 'active'
         ORDER BY display_order ASC, name ASC`
      )
      return {
        categories: rows,
        count: rows.length,
        items: rows,
      }
    })

    setPublicPageCache(res)
    return res.status(200).json({ success: true, ...payload })
  } catch (error) {
    setPrivateNoStore(res)
    return res.status(500).json({
      success: false,
      error: 'Failed to load categories',
    })
  }
}
