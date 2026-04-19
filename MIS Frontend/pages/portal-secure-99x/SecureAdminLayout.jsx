import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { managedTableConfig } from '../../lib/admin/managed-tables'

const coreNavigationItems = [
  { href: '/portal-secure-99x', label: 'Dashboard' },
]

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

  const tableGroups = useMemo(() => buildTableGroups(), [])

  const handleForceLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
      })
    } catch (error) {
      // Keep client redirect even if logout API fails.
    }

    router.push('/portal-secure-99x/access?reason=session')
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="brand">MIS Admin</div>

        <nav className="menu-block" aria-label="Core admin navigation">
          {coreNavigationItems.map((item) => {
            const isActive = router.pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <a className={`menu-link ${isActive ? 'is-active' : ''}`}>{item.label}</a>
              </Link>
            )
          })}
        </nav>

        {tableGroups.map(([groupName, rows]) => (
          <div key={groupName} className="menu-group">
            <p>{groupName}</p>
            {rows.map((row) => {
              const href = `/portal-secure-99x/tables/${row.name}`
              const isActive = router.asPath === href
              return (
                <Link key={row.name} href={href}>
                  <a className={`menu-link ${isActive ? 'is-active' : ''}`}>{row.label}</a>
                </Link>
              )}
            )}
          </div>
        ))}
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-title">Database Control Panel</div>
          <button type="button" onClick={handleForceLogout} className="logout-btn">
            Sign out
          </button>
        </header>

        <main className="admin-content">{children}</main>
      </section>

      <style jsx>{`
        .admin-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          background: #f2f1f8;
          color: #2b2a3c;
          font-family: 'Segoe UI', 'Inter', Arial, sans-serif;
        }

        .admin-sidebar {
          border-right: 1px solid #e2dff1;
          background: #ffffff;
          padding: 16px 14px 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
        }

        .brand {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 0.01em;
          color: #9b61ff;
          padding: 8px 10px 12px;
        }

        .menu-block,
        .menu-group {
          display: grid;
          gap: 4px;
        }

        .menu-group p {
          margin: 12px 10px 4px;
          font-size: 11px;
          font-weight: 700;
          color: #8683a2;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .menu-link {
          text-decoration: none;
          color: #4a4864;
          border-radius: 10px;
          padding: 8px 10px;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .menu-link:hover {
          background: #f1ebff;
          color: #6a37d6;
        }

        .menu-link.is-active {
          background: linear-gradient(90deg, #b873ff 0%, #9956f7 100%);
          color: #ffffff;
        }

        .admin-main {
          min-width: 0;
          display: grid;
          grid-template-rows: auto 1fr;
        }

        .admin-topbar {
          height: 66px;
          border-bottom: 1px solid #e3dff2;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 18px;
        }

        .topbar-title {
          font-size: 20px;
          font-weight: 700;
          color: #3b3956;
        }

        .logout-btn {
          border: 1px solid #e3d6fd;
          border-radius: 10px;
          padding: 9px 12px;
          background: #fff;
          color: #7c49dc;
          cursor: pointer;
          font-weight: 700;
        }

        .admin-content {
          padding: 20px;
        }

        @media (max-width: 1080px) {
          .admin-shell {
            grid-template-columns: 1fr;
          }

          .admin-sidebar {
            border-right: 0;
            border-bottom: 1px solid #e2dff1;
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  )
}

export default SecureAdminLayout
