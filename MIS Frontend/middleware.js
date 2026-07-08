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

export async function middleware(request) {
  const { pathname, search } = request.nextUrl

  if (pathname === ACCESS_ROUTE) {
    return NextResponse.next()
  }

  const sessionToken = getCookieValue(request, ADMIN_SESSION_COOKIE)
  const roleCookie = getCookieValue(request, ADMIN_ROLE_COOKIE)

  if (!sessionToken) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = ACCESS_ROUTE
    redirectUrl.searchParams.set('next', `${pathname}${search || ''}`)
    redirectUrl.searchParams.set('reason', 'session')
    return NextResponse.redirect(redirectUrl)
  }

  const resolvedRole = roleCookie

  if (!VALID_ADMIN_ROLES.includes(resolvedRole)) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = ACCESS_ROUTE
    redirectUrl.searchParams.set('reason', 'role')
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/portal-secure-99x/:path*'],
}
