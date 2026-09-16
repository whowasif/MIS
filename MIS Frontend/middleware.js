import { NextResponse } from 'next/server'

const ADMIN_SESSION_COOKIE = 'mis_admin_session'
const ADMIN_ROLE_COOKIE = 'mis_admin_role'
const VALID_ADMIN_ROLES = ['super_admin', 'senior_admin', 'junior_admin']

const ACCESS_ROUTE = '/portal-secure-99x/access'

const getCookieValue = (request, name) => {
  if (!request?.cookies || !name) return null

  const cookieSource = request.cookies

  if (typeof cookieSource.get === 'function') {
    const cookieValue = cookieSource.get(name)
    if (!cookieValue) return null
    if (typeof cookieValue === 'string') return cookieValue
    if (typeof cookieValue.value === 'string') return cookieValue.value
  }

  if (typeof cookieSource[name] === 'string') {
    return cookieSource[name]
  }

  return null
}

// Build a redirect URL that uses the PUBLIC host the browser actually reached,
// not the internal origin Next sees behind the Passenger/cPanel proxy (which is
// localhost:3000). We prefer the forwarded headers set by the proxy; if absent
// we fall back to the request's own host header, and only then to nextUrl.
const buildRedirectUrl = (request, pathname, params = {}) => {
  const fwdHost = request.headers.get('x-forwarded-host')
  const hostHeader = request.headers.get('host')
  const fwdProto = request.headers.get('x-forwarded-proto')
  const publicHost = fwdHost || hostHeader || request.nextUrl.host
  const publicProto = fwdProto || (publicHost.includes('localhost') ? 'http' : 'https')

  const url = new URL(`${publicProto}://${publicHost}`)
  url.pathname = pathname
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value))
  return url
}

export async function middleware(request) {
  const { pathname, search } = request.nextUrl

  // Allow access to these pages without auth
  if (pathname === ACCESS_ROUTE || pathname === '/portal-secure-99x/forgot-password' || pathname === '/portal-secure-99x/reset-password') {
    return NextResponse.next()
  }

  const sessionToken = getCookieValue(request, ADMIN_SESSION_COOKIE)
  const roleCookie = getCookieValue(request, ADMIN_ROLE_COOKIE)

  if (!sessionToken) {
    const redirectUrl = buildRedirectUrl(request, ACCESS_ROUTE, {
      next: `${pathname}${search || ''}`,
      reason: 'session',
    })
    return NextResponse.redirect(redirectUrl)
  }

  const resolvedRole = roleCookie

  if (!VALID_ADMIN_ROLES.includes(resolvedRole)) {
    const redirectUrl = buildRedirectUrl(request, ACCESS_ROUTE, { reason: 'role' })
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/portal-secure-99x/:path*'],
}
