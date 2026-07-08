import { getDbPool } from '../../../lib/server/db'
import { requireAdminApiAuth } from '../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const db = getDbPool()

  if (req.method === 'POST') {
    const { name, slug, status, parentId, icon_url } = req.body || {}
    if (!name || !slug) return res.status(400).json({ error: 'Name and slug required.' })

    try {
      const [result] = await db.execute(
        'INSERT INTO categories (parent_id, name, slug, status, icon_url, display_order) VALUES (?, ?, ?, ?, ?, 99)',
        [parentId || null, name.trim(), slug.trim(), status || 'active', icon_url || null]
      )
      return res.status(201).json({ success: true, id: result.insertId })
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Slug already exists.' })
      return res.status(500).json({ error: 'Failed to create category.' })
    }
  }

  if (req.method === 'PUT') {
    const { id, name, slug, status, icon_url } = req.body || {}
    if (!id || !name || !slug) return res.status(400).json({ error: 'ID, name, and slug required.' })

    try {
      await db.execute(
        'UPDATE categories SET name = ?, slug = ?, status = ?, icon_url = ? WHERE id = ?',
        [name.trim(), slug.trim(), status || 'active', icon_url || null, id]
      )
      return res.status(200).json({ success: true })
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ error: 'Slug already exists.' })
      return res.status(500).json({ error: 'Failed to update category.' })
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body || {}
    if (!id) return res.status(400).json({ error: 'ID required.' })

    try {
      // Delete children first
      await db.execute('DELETE FROM categories WHERE parent_id = ?', [id])
      await db.execute('DELETE FROM categories WHERE id = ?', [id])
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to delete category.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
