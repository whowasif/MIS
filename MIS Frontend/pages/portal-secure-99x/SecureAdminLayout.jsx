import React, { useMemo, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { managedTableConfig } from '../../lib/admin/managed-tables'

// Role restrictions matching server-side config
const ROLE_RESTRICTIONS = {
  senior_admin: ['admin_users'],
  junior_admin: ['admin_users', 'customers', 'company_contacts', 'orders', 'quotes', 'promo_codes', 'quotes-manager', 'applications'],
}

const ROLES = [
  { value: 'super_admin', label: 'Super Admin' },
  { value: 'senior_admin', label: 'Senior Admin' },
  { value: 'junior_admin', label: 'Junior Admin' },
]

const coreNavigationItems = [
  { href: '/portal-secure-99x', label: 'Dashboard', resource: null, icon: 'dashboard' },
  { href: '/portal-secure-99x/category-manager', label: 'Category Manager', resource: null, icon: 'category' },
  { href: '/portal-secure-99x/orders', label: 'Orders', resource: 'orders', icon: 'orders' },
  { href: '/portal-secure-99x/quotes-manager', label: 'Quotes', resource: 'quotes-manager', icon: 'quotes' },
  { href: '/portal-secure-99x/applications', label: 'Applications', resource: 'applications', icon: 'applications' },
]

// Icon map for table groups and items
const TABLE_ICONS = {
  admin_users: 'shield',
  customers: 'users',
  newsletter_subscribers: 'mail',
  company_contacts: 'phone',
  digi_services: 'globe',
  bus_corp_sol: 'briefcase',
  service_maintenance: 'wrench',
  page_contents: 'file',
  career_posts: 'award',
  advertisements: 'megaphone',
  client_projects: 'folder',
  category_specs: 'layers',
  products: 'box',
  orders: 'cart',
  promo_codes: 'tag',
  delivery_zones: 'truck',
}

const NavIcon = ({ name, size = 18 }) => {
  const icons = {
    dashboard: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    category: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    orders: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
    quotes: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    applications: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>,
    shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    users: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
    globe: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    briefcase: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    wrench: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
    file: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>,
    award: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
    megaphone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/></svg>,
    folder: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>,
    layers: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
    box: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    cart: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
    tag: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    truck: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  }
  return icons[name] || <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/></svg>
}

const buildTableGroups = () => {
  const groups = {}
  managedTableConfig.forEach((item) => {
    const key = item.group || 'General'
    if (!groups[key]) groups[key] = []
    groups[key].push(item)
  })
  return Object.entries(groups)
}

const SecureAdminLayout = ({ children }) => {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [adminRole, setAdminRole] = useState('super_admin')
  const [adminInfo, setAdminInfo] = useState({ name: '', email: '', role: '', profileImage: '' })
  const [clock, setClock] = useState('')
  const [sessionRemaining, setSessionRemaining] = useState(null)
  const tableGroups = useMemo(() => buildTableGroups(), [])

  // Clock
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  // Session Timer - 30 min TTL, resets on admin API activity
  useEffect(() => {
    const SESSION_TTL = 30 * 60 // 30 minutes in seconds
    const STORAGE_KEY = 'mis_admin_session_start'

    const initSession = () => {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (!stored) {
        sessionStorage.setItem(STORAGE_KEY, String(Date.now()))
      }
    }

    const getRemaining = () => {
      const start = Number(sessionStorage.getItem(STORAGE_KEY) || Date.now())
      const elapsed = Math.floor((Date.now() - start) / 1000)
      return Math.max(0, SESSION_TTL - elapsed)
    }

    const resetSessionTimer = () => {
      sessionStorage.setItem(STORAGE_KEY, String(Date.now()))
    }

    // Reset timer on any fetch to admin API (intercept)
    const originalFetch = window.fetch
    window.fetch = function (...args) {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || ''
      if (url.includes('/api/admin/')) {
        resetSessionTimer()
      }
      return originalFetch.apply(this, args)
    }

    initSession()

    const interval = setInterval(() => {
      const remaining = getRemaining()
      setSessionRemaining(remaining)
      if (remaining <= 0) {
        clearInterval(interval)
        router.push('/portal-secure-99x/access?reason=session')
      }
    }, 1000)

    return () => {
      clearInterval(interval)
      window.fetch = originalFetch
    }
  }, [])

  const formatSessionTime = (seconds) => {
    if (seconds === null) return '--:--'
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const sessionTimerClass = sessionRemaining !== null && sessionRemaining <= 120 ? 'session-timer is-warning' : 'session-timer'

  // Fetch admin info from server (cookies are HttpOnly so can't parse client-side)
  useEffect(() => {
    fetch('/api/admin/me')
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data) {
          setAdminInfo({ name: data.name || '', email: data.email || '', role: data.role || '', profileImage: data.profileImage || '' })
          if (data.role) setAdminRole(data.role)
        }
      })
      .catch(() => {})
  }, [])

  const restrictions = ROLE_RESTRICTIONS[adminRole] || []
  const canAccess = (resource) => !resource || !restrictions.includes(resource)

  const filteredCoreNav = coreNavigationItems.filter((item) => canAccess(item.resource))
  const filteredTableGroups = tableGroups.map(([groupName, rows]) => [
    groupName,
    rows.filter((row) => canAccess(row.name))
  ]).filter(([, rows]) => rows.length > 0)

  const handleForceLogout = async () => {
    try { await fetch('/api/admin/logout', { method: 'POST' }) } catch (e) {}
    router.push('/portal-secure-99x/access?reason=session')
  }

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar-top">
          <div className="brand">
            <img src="/footer logo.png" alt="MIS" className="brand-logo" />
            MIS Admin
          </div>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <nav className="menu-block" aria-label="Core admin navigation">
          <p className="menu-section-label">Main</p>
          {filteredCoreNav.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <a className={`menu-link ${isActive ? 'is-active' : ''}`} onClick={() => setSidebarOpen(false)}>
                  <span className="menu-icon"><NavIcon name={item.icon} size={18} /></span>
                  <span className="menu-text">{item.label}</span>
                </a>
              </Link>
            )
          })}
        </nav>

        {filteredTableGroups.map(([groupName, rows]) => (
          <div key={groupName} className="menu-group">
            <p className="menu-section-label">{groupName}</p>
            {rows.map((row) => {
              const href = `/portal-secure-99x/tables/${row.name}`
              const isActive = router.asPath === href
              return (
                <Link key={row.name} href={href}>
                  <a className={`menu-link ${isActive ? 'is-active' : ''}`} onClick={() => setSidebarOpen(false)}>
                    <span className="menu-icon"><NavIcon name={TABLE_ICONS[row.name] || 'file'} size={18} /></span>
                    <span className="menu-text">{row.label}</span>
                  </a>
                </Link>
              )
            })}
          </div>
        ))}
      </aside>

      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}

      <section className="admin-main">
        <header className="admin-topbar">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
          <div className="topbar-clock">{clock}</div>
          <div className={sessionTimerClass}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>{formatSessionTime(sessionRemaining)}</span>
          </div>
          <div className="topbar-right">
            <div className="topbar-admin-info">
              <div className="topbar-avatar">
                {adminInfo.profileImage ? (
                  <img src={adminInfo.profileImage} alt={adminInfo.name} className="topbar-avatar-img" />
                ) : (
                  <span>{(adminInfo.name || 'A').charAt(0).toUpperCase()}</span>
                )}
              </div>
              <div className="topbar-admin-text">
                <strong>{adminInfo.name || 'Admin'}</strong>
                <span>{ROLES.find(r => r.value === (adminInfo.role || adminRole))?.label || adminRole}</span>
              </div>
            </div>
            <button type="button" onClick={handleForceLogout} className="logout-btn">Sign out</button>
          </div>
        </header>
        <main className="admin-content">{children}</main>
      </section>

      <style jsx>{`
        .admin-shell { min-height: 100vh; display: grid; grid-template-columns: 270px minmax(0, 1fr); background: #f4f6fa; color: #2b2a3c; font-family: 'Segoe UI', 'Inter', Arial, sans-serif; }
        .admin-sidebar { background: linear-gradient(180deg, #1e1b4b 0%, #312e81 100%); padding: 20px 14px 24px; display: flex; flex-direction: column; gap: 6px; overflow-y: auto; }
        .admin-sidebar::-webkit-scrollbar { width: 4px; }
        .admin-sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
        .sidebar-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .sidebar-close { display: none; border: none; background: none; font-size: 20px; cursor: pointer; color: rgba(255,255,255,0.7); padding: 4px 8px; border-radius: 6px; }
        .sidebar-close:hover { background: rgba(255,255,255,0.1); }
        .sidebar-backdrop { display: none; }
        .brand { font-size: 22px; font-weight: 800; color: #ffffff; padding: 8px 10px 12px; display: flex; align-items: center; gap: 10px; }
        .brand-logo { width: 38px; height: 38px; border-radius: 10px; object-fit: contain; flex-shrink: 0; }
        .menu-block, .menu-group { display: grid; gap: 2px; }
        .menu-section-label { margin: 14px 12px 6px; font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.12em; }
        .menu-link { text-decoration: none; color: rgba(255,255,255,0.7); border-radius: 10px; padding: 9px 12px; font-weight: 500; font-size: 13px; transition: all 0.15s ease; display: flex; align-items: center; gap: 10px; }
        .menu-link:hover { background: rgba(255,255,255,0.08); color: #ffffff; }
        .menu-link.is-active { background: linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%); color: #ffffff; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3); }
        .menu-link.is-active .menu-icon { color: #ffffff; }
        .menu-icon { display: flex; align-items: center; justify-content: center; width: 20px; flex-shrink: 0; opacity: 0.85; }
        .menu-link.is-active .menu-icon { opacity: 1; }
        .menu-text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .admin-main { min-width: 0; display: grid; grid-template-rows: auto 1fr; }
        .admin-topbar { height: 66px; border-bottom: 1px solid #e5e7eb; background: #ffffff; display: flex; align-items: center; justify-content: space-between; padding: 0 24px; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); position: sticky; top: 0; z-index: 100; }
        .topbar-clock { font-size: 13px; color: #6b7280; font-weight: 500; font-family: 'JetBrains Mono', monospace; flex: 1; }
        .session-timer { display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 8px; background: #ecfdf5; border: 1px solid #a7f3d0; font-size: 13px; font-weight: 700; color: #047857; font-family: 'JetBrains Mono', monospace; white-space: nowrap; }
        .session-timer svg { flex-shrink: 0; }
        .session-timer.is-warning { background: #fef3c7; border-color: #fbbf24; color: #b45309; animation: pulse-warning 1s ease-in-out infinite; }
        @keyframes pulse-warning { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .topbar-right { display: flex; align-items: center; gap: 14px; }
        .topbar-admin-info { display: flex; align-items: center; gap: 10px; }
        .topbar-avatar { width: 38px; height: 38px; border-radius: 12px; background: linear-gradient(135deg, #7c3aed, #6d28d9); display: flex; align-items: center; justify-content: center; flex-shrink: 0; overflow: hidden; }
        .topbar-avatar span { color: #ffffff; font-size: 14px; font-weight: 800; }
        .topbar-avatar-img { width: 100%; height: 100%; object-fit: cover; }
        .topbar-admin-text { display: flex; flex-direction: column; }
        .topbar-admin-text strong { font-size: 13px; color: #1f2937; line-height: 1.2; font-weight: 700; }
        .topbar-admin-text span { font-size: 11px; color: #7c3aed; font-weight: 600; }
        .hamburger-btn { display: none; border: none; background: none; cursor: pointer; padding: 6px; border-radius: 8px; color: #4a4864; }
        .hamburger-btn:hover { background: #f1ebff; }
        .logout-btn { border: 1px solid #e5e7eb; border-radius: 10px; padding: 9px 14px; background: #fff; color: #dc2626; cursor: pointer; font-weight: 600; font-size: 13px; white-space: nowrap; transition: all 0.15s; }
        .logout-btn:hover { background: #fef2f2; border-color: #fecaca; }
        .admin-content { padding: 24px; overflow-x: auto; }

        @media (max-width: 1080px) {
          .admin-shell { grid-template-columns: 1fr; }
          .admin-sidebar { position: fixed; top: 0; left: 0; bottom: 0; width: 280px; z-index: 1200; transform: translateX(-100%); transition: transform 0.3s ease; box-shadow: none; }
          .admin-sidebar.is-open { transform: translateX(0); box-shadow: 4px 0 24px rgba(0,0,0,0.3); }
          .sidebar-close { display: block; }
          .sidebar-backdrop { display: block; position: fixed; inset: 0; z-index: 1100; background: rgba(0,0,0,0.5); }
          .hamburger-btn { display: flex; }
        }
      `}</style>
    </div>
  )
}

export default SecureAdminLayout
