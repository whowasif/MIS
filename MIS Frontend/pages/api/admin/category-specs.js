import { getDbPool } from '../../../lib/server/db'
import { requireAdminApiAuth } from '../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const db = getDbPool()

  if (req.method === 'GET') {
    const categoryId = req.query.category_id
    if (!categoryId) return res.status(400).json({ error: 'category_id required' })

    try {
      // First try to get specs for this exact category
      let [rows] = await db.execute(
        'SELECT id, spec_name, spec_label, display_order, is_filterable FROM category_specs WHERE category_id = ? ORDER BY display_order ASC',
        [categoryId]
      )

      // If no specs found, check if this is a subcategory and get parent's specs
      if (rows.length === 0) {
        const [catRows] = await db.execute('SELECT parent_id FROM categories WHERE id = ?', [categoryId])
        if (catRows.length > 0 && catRows[0].parent_id) {
          [rows] = await db.execute(
            'SELECT id, spec_name, spec_label, display_order, is_filterable FROM category_specs WHERE category_id = ? ORDER BY display_order ASC',
            [catRows[0].parent_id]
          )
        }
      }

      return res.status(200).json({ success: true, specs: rows })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to load specs.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
