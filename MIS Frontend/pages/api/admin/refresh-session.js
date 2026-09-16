import { requireAdminApiAuth } from '../../../lib/auth/require-admin'
import {
  createAdminSessionToken,
  buildSessionCookie,
  buildRoleCookie,
  ADMIN_SESSION_TTL_SECONDS,
} from '../../../lib/auth/session'

// Re-issues the admin session JWT + cookie for another full TTL window and
// returns the new absolute expiry (epoch seconds) so the client timer can stay
// perfectly in sync with the real server-side session.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) return res.status(auth.status).json({ success: false, error: auth.error })

  const { sub, role, email, name } = auth.payload

  const token = await createAdminSessionToken({ id: sub, role, email, name })
  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_TTL_SECONDS

  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Set-Cookie', [buildSessionCookie(token), buildRoleCookie(role)])
  return res.status(200).json({ success: true, expiresAt })
}
