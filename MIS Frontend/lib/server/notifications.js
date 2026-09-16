import { getDbPool } from './db'

// Role ranks: higher rank sees more. super_admin sees everything.
export const ROLE_RANK = {
  super_admin: 3,
  senior_admin: 2,
  junior_admin: 1,
}

export const roleRank = (role) => ROLE_RANK[String(role || '')] || 0

// Convenience min-rank constants for notification visibility.
export const VISIBILITY = {
  SUPER_ONLY: 3, // super_admin only
  SENIOR_UP: 2, // senior_admin and super_admin
  ALL_ADMINS: 1, // every admin role
}

/**
 * Create an admin notification. Fire-and-forget: never throws so it can't
 * break the customer-facing or admin flow that triggered it.
 */
export const createNotification = async ({
  type,
  title,
  message = null,
  resource = null,
  resourceId = null,
  ipAddress = null,
  minRoleRank = VISIBILITY.SUPER_ONLY,
}) => {
  try {
    const db = getDbPool()
    await db.execute(
      `INSERT INTO admin_notifications (type, title, message, resource, resource_id, ip_address, min_role_rank, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        type,
        String(title).slice(0, 255),
        message ? String(message).slice(0, 500) : null,
        resource || null,
        resourceId != null ? String(resourceId).slice(0, 100) : null,
        ipAddress || null,
        Number(minRoleRank) || VISIBILITY.SUPER_ONLY,
      ]
    )
  } catch (e) {
    console.error('Notification create error:', e.message)
  }
}

/**
 * List notifications visible to an admin (by role rank), newest first, each
 * annotated with whether THIS admin has seen it.
 */
export const listNotificationsForAdmin = async ({ adminId, role, limit = 30 }) => {
  const db = getDbPool()
  const rank = roleRank(role)
  const safeLimit = Math.max(1, Math.min(100, Number(limit) || 30))

  const [rows] = await db.execute(
    `SELECT n.id, n.type, n.title, n.message, n.resource, n.resource_id, n.ip_address, n.created_at,
            (r.id IS NOT NULL) AS is_read
     FROM admin_notifications n
     LEFT JOIN admin_notification_reads r
       ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ?
     ORDER BY n.created_at DESC
     LIMIT ${safeLimit}`,
    [adminId, rank]
  )
  return rows.map((r) => ({ ...r, is_read: !!r.is_read }))
}

/**
 * Count notifications this admin has NOT yet seen.
 */
export const countUnreadForAdmin = async ({ adminId, role }) => {
  const db = getDbPool()
  const rank = roleRank(role)
  const [rows] = await db.execute(
    `SELECT COUNT(*) AS unread
     FROM admin_notifications n
     LEFT JOIN admin_notification_reads r
       ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ? AND r.id IS NULL`,
    [adminId, rank]
  )
  return Number(rows[0]?.unread || 0)
}

/**
 * Mark notifications as seen for THIS admin only. Pass an array of ids, or
 * omit to mark all currently-visible notifications as seen.
 * INSERT IGNORE keeps it idempotent and per-admin (UNIQUE notification_id+admin_id).
 */
export const markNotificationsSeen = async ({ adminId, role, ids = null }) => {
  const db = getDbPool()
  const rank = roleRank(role)

  if (Array.isArray(ids) && ids.length > 0) {
    const cleanIds = ids.map((n) => Number(n)).filter((n) => Number.isInteger(n) && n > 0)
    if (cleanIds.length === 0) return
    const placeholders = cleanIds.map(() => '?').join(',')
    await db.execute(
      `INSERT IGNORE INTO admin_notification_reads (notification_id, admin_id)
       SELECT n.id, ? FROM admin_notifications n
       WHERE n.id IN (${placeholders}) AND n.min_role_rank <= ?`,
      [adminId, ...cleanIds, rank]
    )
    return
  }

  // Mark ALL visible notifications as seen for this admin.
  await db.execute(
    `INSERT IGNORE INTO admin_notification_reads (notification_id, admin_id)
     SELECT n.id, ? FROM admin_notifications n
     LEFT JOIN admin_notification_reads r ON r.notification_id = n.id AND r.admin_id = ?
     WHERE n.min_role_rank <= ? AND r.id IS NULL`,
    [adminId, adminId, rank]
  )
}
