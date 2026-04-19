import { requireAdminApiAuth } from '../../../../../lib/auth/require-admin'
import {
  createTableRow,
  getTableColumns,
  getTableRows,
  MANAGED_TABLES,
} from '../../../../../lib/server/admin/tables'

const toJsonSafe = (value) => {
  if (typeof value === 'bigint') return value.toString()
  if (Array.isArray(value)) return value.map(toJsonSafe)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, toJsonSafe(nestedValue)])
    )
  }
  return value
}

export default async function handler(req, res) {
  try {
    const auth = await requireAdminApiAuth(req)
    if (!auth.ok) {
      return res.status(auth.status).json({ success: false, error: auth.error })
    }

    const table = String(req.query?.table || '').toLowerCase()

    if (!MANAGED_TABLES.includes(table)) {
      return res.status(404).json({ success: false, error: 'Unknown managed table.' })
    }

    if (req.method === 'GET') {
      const limit = Number(req.query?.limit || 50)
      const offset = Number(req.query?.offset || 0)
      const [columns, rows] = await Promise.all([
        getTableColumns(table),
        getTableRows({ table, limit, offset }),
      ])

      return res.status(200).json({
        success: true,
        table,
        columns: toJsonSafe(columns),
        rows: toJsonSafe(rows),
      })
    }

    if (req.method === 'POST') {
      const values = req.body?.values || {}
      const insertedId = await createTableRow({ table, values })

      return res.status(200).json({
        success: true,
        insertedId,
      })
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  } catch (error) {
    if (res.headersSent) {
      return
    }

    return res.status(400).json({
      success: false,
      error: 'Table operation failed.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
