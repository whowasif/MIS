import { getDbPool } from '../../../../lib/server/db'
import { requireAdminApiAuth } from '../../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const { id } = req.query

  if (req.method === 'PUT') {
    const { status, adminReply } = req.body || {}

    const updates = []
    const values = []

    if (status) {
      const validStatuses = ['new', 'in_progress', 'closed']
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ error: 'Invalid status.' })
      }
      updates.push('status = ?')
      values.push(status)
    }

    if (adminReply !== undefined) {
      updates.push('admin_reply = ?')
      values.push(String(adminReply).trim())
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'Nothing to update.' })
    }

    values.push(id)

    try {
      const db = getDbPool()
      await db.execute(`UPDATE quotes SET ${updates.join(', ')} WHERE id = ?`, values)
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update quote.' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const db = getDbPool()
      await db.execute('DELETE FROM quotes WHERE id = ?', [id])
      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete quote.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
