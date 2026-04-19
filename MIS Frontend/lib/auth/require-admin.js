import { REQUIRED_ADMIN_ROLE, verifyAdminSessionToken } from './session'

const parseCookieHeader = (rawCookie) => {
  const source = String(rawCookie || '')
  return source.split(';').reduce((accumulator, pair) => {
    const index = pair.indexOf('=')
    if (index < 0) return accumulator
    const key = pair.slice(0, index).trim()
    const value = pair.slice(index + 1).trim()
    if (!key) return accumulator
    accumulator[key] = decodeURIComponent(value)
    return accumulator
  }, {})
}

export const requireAdminApiAuth = async (req) => {
  const cookieMap = parseCookieHeader(req.headers?.cookie)
  const token = cookieMap.mis_admin_session

  if (!token) {
    return {
      ok: false,
      status: 401,
      error: 'Missing admin session.',
    }
  }

  const payload = await verifyAdminSessionToken(token)

  if (!payload) {
    return {
      ok: false,
      status: 401,
      error: 'Invalid or expired admin session.',
    }
  }

  if (String(payload.role || '') !== REQUIRED_ADMIN_ROLE) {
    return {
      ok: false,
      status: 403,
      error: 'Insufficient admin role.',
    }
  }

  return {
    ok: true,
    payload,
  }
}
