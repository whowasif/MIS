import { getDbPool } from '../../../lib/server/db'
import { requireAdminApiAuth } from '../../../lib/auth/require-admin'

// Manages the manually-curated filter option values for a category's spec field.
// GET  /api/admin/spec-options?category_id=1[&spec_name=processor-brand]
//   -> { success, options: { [spec_name]: string[] } }   (grouped, deduped, ordered)
// POST /api/admin/spec-options  { category_id, spec_name, option_value }
//   -> inserts the value (ignored if it already exists for that category+spec)
export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const db = getDbPool()

  if (req.method === 'GET') {
    const categoryId = req.query.category_id
    if (!categoryId) return res.status(400).json({ error: 'category_id required' })
    const specName = req.query.spec_name

    try {
      let rows
      if (specName) {
        ;[rows] = await db.execute(
          'SELECT spec_name, option_value FROM spec_filter_options WHERE category_id = ? AND spec_name = ? ORDER BY display_order ASC, option_value ASC',
          [categoryId, specName]
        )
      } else {
        ;[rows] = await db.execute(
          'SELECT spec_name, option_value FROM spec_filter_options WHERE category_id = ? ORDER BY spec_name ASC, display_order ASC, option_value ASC',
          [categoryId]
        )
      }

      const options = {}
      rows.forEach((r) => {
        if (!options[r.spec_name]) options[r.spec_name] = []
        if (!options[r.spec_name].includes(r.option_value)) options[r.spec_name].push(r.option_value)
      })

      return res.status(200).json({ success: true, options })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to load spec options.' })
    }
  }

  if (req.method === 'POST') {
    const { category_id: categoryId, spec_name: specName } = req.body || {}
    const optionValue = typeof req.body?.option_value === 'string' ? req.body.option_value.trim() : ''

    if (!categoryId || !specName || !optionValue) {
      return res.status(400).json({ error: 'category_id, spec_name and option_value are required' })
    }
    if (optionValue.length > 255) {
      return res.status(400).json({ error: 'option_value too long (max 255)' })
    }

    try {
      // Unique key (category_id, spec_name, option_value) makes this idempotent.
      await db.execute(
        'INSERT IGNORE INTO spec_filter_options (category_id, spec_name, option_value) VALUES (?, ?, ?)',
        [categoryId, specName, optionValue]
      )
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to save spec option.' })
    }
  }

  if (req.method === 'DELETE') {
    const { category_id: categoryId, spec_name: specName, option_value: optionValue } = req.body || {}
    if (!categoryId || !specName || !optionValue) {
      return res.status(400).json({ error: 'category_id, spec_name and option_value are required' })
    }
    try {
      await db.execute(
        'DELETE FROM spec_filter_options WHERE category_id = ? AND spec_name = ? AND option_value = ?',
        [categoryId, specName, optionValue]
      )
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to delete spec option.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
