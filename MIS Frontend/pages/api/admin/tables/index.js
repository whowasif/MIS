import { requireAdminApiAuth } from '../../../../lib/auth/require-admin'
import { getManagedTablesSummary, MANAGED_TABLES } from '../../../../lib/server/admin/tables'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, error: auth.error })
  }

  try {
    const tables = await getManagedTablesSummary()

    return res.status(200).json({
      success: true,
      tables,
      managedTableNames: MANAGED_TABLES,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Unable to load managed tables.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
