import { ADMIN_ROLES, ROLE_RESTRICTIONS, verifyAdminSessionToken } from './session'

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

export const requireAdminApiAuth = async (req, options = {}) => {
  const cookieMap = parseCookieHeader(req.headers?.cookie)
  const token = cookieMap.mis_admin_session

  if (!token) {
    return { ok: false, status: 401, error: 'Missing admin session.' }
  }

  const payload = await verifyAdminSessionToken(token)

  if (!payload) {
    return { ok: false, status: 401, error: 'Invalid or expired admin session.' }
  }

  const role = String(payload.role || '')

  // Check if role is a valid admin role
  if (!ADMIN_ROLES.includes(role)) {
    return { ok: false, status: 403, error: 'Insufficient admin role.' }
  }

  // Check resource-level access if a resource is specified
  if (options.resource) {
    const restrictions = ROLE_RESTRICTIONS[role] || []
    if (restrictions.includes(options.resource)) {
      return { ok: false, status: 403, error: 'You do not have access to this resource.' }
    }
  }

  return { ok: true, payload, role }
}

// Helper to check if a role can access a specific resource
export const canRoleAccess = (role, resource) => {
  const restrictions = ROLE_RESTRICTIONS[role] || []
  return !restrictions.includes(resource)
}
