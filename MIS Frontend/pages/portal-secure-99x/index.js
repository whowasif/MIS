import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import SecureAdminLayout from './SecureAdminLayout'
import { managedTableConfig } from '../../lib/admin/managed-tables'

const Dashboard = ({ summaries = [] }) => {
  const summaryMap = summaries.reduce((accumulator, row) => {
    accumulator[row.table] = row.total
    return accumulator
  }, {})

  return (
    <SecureAdminLayout>
      <Head>
        <title>Admin Dashboard | MIS Admin</title>
      </Head>

      <section className="dashboard-shell">
        <header className="dashboard-head">
          <h2>Dashboard</h2>
          <p>Live table controls and record visibility from your MIS database.</p>
        </header>

        <div className="metric-grid">
          {managedTableConfig.map((table) => (
            <Link key={table.name} href={`/portal-secure-99x/tables/${table.name}`}>
              <a className="metric-card">
                <h3>{table.label}</h3>
                <strong>{Number(summaryMap[table.name] || 0).toLocaleString()}</strong>
                <span>{table.group}</span>
              </a>
            </Link>
          ))}
        </div>
      </section>

      <style jsx>{`
        .dashboard-shell {
          display: grid;
          gap: 18px;
        }

        .dashboard-head h2 {
          margin: 0;
          font-size: 32px;
          color: #302f46;
        }

        .dashboard-head p {
          margin: 8px 0 0;
          color: #747391;
          font-size: 15px;
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        .metric-card {
          text-decoration: none;
          display: grid;
          gap: 8px;
          border-radius: 14px;
          padding: 16px;
          border: 1px solid #ece8fa;
          background: linear-gradient(135deg, #ffffff 0%, #f5f2ff 100%);
          color: #2f2f45;
        }

        .metric-card h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
        }

        .metric-card strong {
          font-size: 32px;
          color: #7a44e0;
          line-height: 1;
        }

        .metric-card span {
          font-size: 12px;
          color: #7b799b;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .metric-card:hover {
          border-color: #c5b5ed;
          box-shadow: 0 12px 25px rgba(116, 91, 184, 0.15);
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async () => {
  try {
    const { getManagedTablesSummary } = await import('../../lib/server/admin/tables')
    const summaries = await getManagedTablesSummary()

    return {
      props: {
        summaries,
      },
    }
  } catch (error) {
    return {
      props: {
        summaries: [],
      },
    }
  }
}

export default Dashboard
