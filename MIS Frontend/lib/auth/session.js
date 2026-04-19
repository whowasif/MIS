import { SignJWT, jwtVerify } from 'jose'

export const ADMIN_SESSION_COOKIE = 'mis_admin_session'
export const ADMIN_ROLE_COOKIE = 'mis_admin_role'
export const REQUIRED_ADMIN_ROLE = 'superadmin'
export const ADMIN_SESSION_TTL_SECONDS = 30 * 60

const getSessionSecret = () => {
  const sessionSecret = process.env.ADMIN_SESSION_SECRET

  if (!sessionSecret || sessionSecret.length < 32) {
    throw new Error('ADMIN_SESSION_SECRET must be set and at least 32 characters long.')
  }

  return new TextEncoder().encode(sessionSecret)
}

export const createAdminSessionToken = async ({ id, role, email, name }) => {
  const secret = getSessionSecret()

  return new SignJWT({
    role,
    email,
    name,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(String(id))
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_SESSION_TTL_SECONDS}s`)
    .sign(secret)
}

export const verifyAdminSessionToken = async (token) => {
  if (!token) return null

  try {
    const secret = getSessionSecret()
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch (error) {
    return null
  }
}

export const buildSessionCookie = (token) => {
  const secureAttribute = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  const sameSiteValue = process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax'
  return `${ADMIN_SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=${ADMIN_SESSION_TTL_SECONDS}${secureAttribute}`
}

export const buildRoleCookie = (role) => {
  const secureAttribute = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  const sameSiteValue = process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax'
  return `${ADMIN_ROLE_COOKIE}=${encodeURIComponent(String(role || ''))}; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=${ADMIN_SESSION_TTL_SECONDS}${secureAttribute}`
}

export const buildExpiredSessionCookie = () => {
  const secureAttribute = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  const sameSiteValue = process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax'
  return `${ADMIN_SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secureAttribute}`
}

export const buildExpiredRoleCookie = () => {
  const secureAttribute = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  const sameSiteValue = process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax'
  return `${ADMIN_ROLE_COOKIE}=; Path=/; HttpOnly; SameSite=${sameSiteValue}; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT${secureAttribute}`
}
