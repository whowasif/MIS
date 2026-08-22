import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'
import {
  deleteTableRow,
  MANAGED_TABLES,
  updateTableRow,
} from '../../../../../lib/server/admin/tables'
import { logAdminActivity } from '../../../../../lib/server/activity-log'

export default async function handler(req, res) {
  const table = String(req.query?.table || '').toLowerCase()
  const auth = await requireAdminApiAuth(req, { resource: table })
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, error: auth.error })
  }

  const id = String(req.query?.id || '').trim()

  if (!MANAGED_TABLES.includes(table)) {
    return res.status(404).json({ success: false, error: 'Unknown managed table.' })
  }

  if (!id) {
    return res.status(400).json({ success: false, error: 'Invalid row id.' })
  }

  const ipAddress = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || null

  try {
    if (req.method === 'PUT') {
      const values = req.body?.values || {}

      // Hash password for admin_users table
      if (table === 'admin_users' && values.password) {
        const bcrypt = await import('bcryptjs')
        values.password_hash = await bcrypt.default.hash(values.password, 12)
        delete values.password
      }

      const affectedRows = await updateTableRow({ table, id, values })

      await logAdminActivity({
        adminId: auth.payload?.id,
        adminEmail: auth.payload?.email,
        action: 'update',
        resource: table,
        resourceId: id,
        details: JSON.stringify({ fields: Object.keys(values) }),
        ipAddress,
      })

      return res.status(200).json({
        success: true,
        affectedRows,
      })
    }

    if (req.method === 'DELETE') {
      const affectedRows = await deleteTableRow({ table, id })

      await logAdminActivity({
        adminId: auth.payload?.id,
        adminEmail: auth.payload?.email,
        action: 'delete',
        resource: table,
        resourceId: id,
        ipAddress,
      })

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
