import {
  buildExpiredRoleCookie,
  buildExpiredSessionCookie,
} from '../../../lib/auth/session'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Set-Cookie', [buildExpiredSessionCookie(), buildExpiredRoleCookie()])

  return res.status(200).json({ success: true })
}
