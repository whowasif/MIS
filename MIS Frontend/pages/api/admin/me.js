import { verifyAdminSessionToken, ADMIN_SESSION_COOKIE } from '../../../lib/auth/session'
import { getDbPool } from '../../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const cookieStr = req.headers?.cookie || ''
  const match = cookieStr.match(new RegExp(`${ADMIN_SESSION_COOKIE}=([^;]+)`))

  if (!match) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]))

  if (!payload) {
    return res.status(401).json({ error: 'Invalid or expired session' })
  }

  // Fetch profile_image from database
  let profileImage = ''
  try {
    const db = getDbPool()
    const [rows] = await db.execute(
      'SELECT profile_image FROM admin_users WHERE id = ? AND deleted_at IS NULL LIMIT 1',
      [payload.sub]
    )
    if (rows.length > 0 && rows[0].profile_image) {
      profileImage = rows[0].profile_image
    }
  } catch (e) {
    // ignore DB errors, profile image is optional
  }

  return res.status(200).json({
    name: payload.name || '',
    email: payload.email || '',
    role: payload.role || '',
    profileImage,
  })
}
