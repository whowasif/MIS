import { getDbPool } from '../../../../lib/server/db'
import { requireAdminApiAuth } from '../../../../lib/auth/require-admin'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ error: auth.error })

  const { id } = req.query

  if (req.method === 'PUT') {
    const { status } = req.body || {}
    const valid = ['new', 'reviewed', 'shortlisted', 'rejected']
    if (!status || !valid.includes(status)) {
      return res.status(400).json({ error: 'Invalid status.' })
    }

    try {
      const db = getDbPool()
      await db.execute('UPDATE career_applications SET status = ? WHERE id = ?', [status, id])
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to update.' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const db = getDbPool()
      await db.execute('DELETE FROM career_applications WHERE id = ?', [id])
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(500).json({ error: 'Failed to delete.' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
