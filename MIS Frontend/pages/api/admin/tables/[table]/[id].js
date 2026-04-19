import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'
import {
  deleteTableRow,
  MANAGED_TABLES,
  updateTableRow,
} from '../../../../../lib/server/admin/tables'

export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, error: auth.error })
  }

  const table = String(req.query?.table || '').toLowerCase()
  const id = String(req.query?.id || '').trim()

  if (!MANAGED_TABLES.includes(table)) {
    return res.status(404).json({ success: false, error: 'Unknown managed table.' })
  }

  if (!id) {
    return res.status(400).json({ success: false, error: 'Invalid row id.' })
  }

  try {
    if (req.method === 'PUT') {
      const values = req.body?.values || {}
      const affectedRows = await updateTableRow({ table, id, values })

      return res.status(200).json({
        success: true,
        affectedRows,
      })
    }

    if (req.method === 'DELETE') {
      const affectedRows = await deleteTableRow({ table, id })

      return res.status(200).json({
        success: true,
        affectedRows,
      })
    }

    res.setHeader('Allow', ['PUT', 'DELETE'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: 'Table row operation failed.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
