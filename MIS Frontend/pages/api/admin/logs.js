import { requireAdminApiAuth } from '../../../lib/auth/require-admin'
import { getAdminActivityLogs, getVisitorLogs, getVisitorStats } from '../../../lib/server/activity-log'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const auth = await requireAdminApiAuth(req, { resource: 'logs' })
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, error: auth.error })
  }

  try {
    const { type = 'visitor', limit = 100, offset = 0, eventType, days = 7 } = req.query

    if (type === 'admin') {
      const logs = await getAdminActivityLogs(Number(limit), Number(offset))
      return res.status(200).json({ success: true, logs })
    }

    if (type === 'stats') {
      const stats = await getVisitorStats(Number(days))
      return res.status(200).json({ success: true, stats })
    }

    // Default: visitor logs
    const logs = await getVisitorLogs(Number(limit), Number(offset), eventType || null)
    return res.status(200).json({ success: true, logs })
  } catch (e) {
    return res.status(500).json({ success: false, error: 'Failed to fetch logs', details: process.env.NODE_ENV === 'development' ? e.message : undefined })
  }
}
