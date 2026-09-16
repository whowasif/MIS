import { requireAdminApiAuth } from '../../../lib/auth/require-admin'
import { listNotificationsForAdmin, countUnreadForAdmin, markNotificationsSeen } from '../../../lib/server/notifications'

// GET  /api/admin/notifications            -> { success, notifications, unread }
// GET  /api/admin/notifications?count=1    -> { success, unread }   (lightweight poll)
// POST /api/admin/notifications  { ids?: number[] }  -> mark seen (this admin only)
export default async function handler(req, res) {
  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ success: false, error: auth.error })

  const adminId = auth.payload?.sub
  const role = auth.role

  if (req.method === 'GET') {
    try {
      if (req.query.count) {
        const unread = await countUnreadForAdmin({ adminId, role })
        return res.status(200).json({ success: true, unread })
      }
      const notifications = await listNotificationsForAdmin({ adminId, role, limit: 30 })
      const unread = notifications.filter((n) => !n.is_read).length
      return res.status(200).json({ success: true, notifications, unread })
    } catch (e) {
      return res.status(500).json({ success: false, error: 'Failed to load notifications.' })
    }
  }

  if (req.method === 'POST') {
    try {
      const ids = Array.isArray(req.body?.ids) ? req.body.ids : null
      await markNotificationsSeen({ adminId, role, ids })
      const unread = await countUnreadForAdmin({ adminId, role })
      return res.status(200).json({ success: true, unread })
    } catch (e) {
      return res.status(500).json({ success: false, error: 'Failed to update notifications.' })
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' })
}
