import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SecureAdminLayout from './SecureAdminLayout'
import { getDbPool } from '../../lib/server/db'

const AnimNum = ({ target, prefix = '', suffix = '' }) => {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true
        const dur = 1400, start = performance.now()
        const go = (now) => { const p = Math.min((now - start) / dur, 1); setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(go) }
        requestAnimationFrame(go)
      }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>
}

const Dashboard = ({ stats = {} }) => {
  return (
    <SecureAdminLayout>
      <Head><title>Dashboard | MIS Admin</title></Head>

      <div className="dash">
        {/* KPI Cards */}
        <div className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: '#fef3c7' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="kpi-body">
              <span className="kpi-label">Total Sales</span>
              <strong className="kpi-value"><AnimNum target={stats.totalRevenue || 0} prefix="৳" /></strong>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: '#dbeafe' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
            </div>
            <div className="kpi-body">
              <span className="kpi-label">Total Orders</span>
              <strong className="kpi-value"><AnimNum target={stats.totalOrders || 0} /></strong>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: '#d1fae5' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="kpi-body">
              <span className="kpi-label">Customers</span>
              <strong className="kpi-value"><AnimNum target={stats.totalCustomers || 0} /></strong>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon" style={{ background: '#ede9fe' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            <div className="kpi-body">
              <span className="kpi-label">Products</span>
              <strong className="kpi-value"><AnimNum target={stats.totalProducts || 0} /></strong>
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="mid-row">
          {/* Revenue Chart */}
          <div className="card chart-card">
            <div className="card-head"><h3>Sales (Last 6 Months)</h3></div>
            <div className="bar-chart">
              {(stats.monthlyRevenue || []).map((m, i) => {
                const maxVal = Math.max(...(stats.monthlyRevenue || []).map(x => x.revenue), 1)
                const height = Math.max((m.revenue / maxVal) * 100, 4)
                return (
                  <div key={i} className="bar-col">
                    <div className="bar-fill" style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }} />
                    <span className="bar-label">{m.month}</span>
                    <span className="bar-val">৳{(m.revenue / 1000).toFixed(0)}k</span>
                  </div>
                )
              })}
              {(!stats.monthlyRevenue || stats.monthlyRevenue.length === 0) && <p className="empty-text">No revenue data yet.</p>}
            </div>
          </div>

          {/* Category Donut */}
          <div className="card donut-card">
            <div className="card-head"><h3>Products by Category</h3></div>
            <div className="donut-wrap">
              <svg viewBox="0 0 120 120" className="donut-svg">
                {(() => {
                  const cats = stats.topCategories || []
                  const total = cats.reduce((s, c) => s + c.count, 0) || 1
                  const colors = ['#f7e500', '#7c3aed', '#059669', '#2563eb', '#ec4899']
                  let offset = 0
                  return cats.map((cat, i) => {
                    const pct = (cat.count / total) * 100
                    const dashArray = `${pct * 3.14} ${314 - pct * 3.14}`
                    const el = <circle key={i} cx="60" cy="60" r="50" fill="none" stroke={colors[i % 5]} strokeWidth="18" strokeDasharray={dashArray} strokeDashoffset={-offset * 3.14} className="donut-ring" style={{ animationDelay: `${i * 0.15}s` }} />
                    offset += pct
                    return el
                  })
                })()}
                <text x="60" y="56" textAnchor="middle" className="donut-center-num">{stats.totalProducts || 0}</text>
                <text x="60" y="72" textAnchor="middle" className="donut-center-label">Products</text>
              </svg>
              <div className="donut-legend">
                {(stats.topCategories || []).map((cat, i) => (
                  <div key={i} className="legend-item">
                    <span className="legend-dot" style={{ background: ['#f7e500','#7c3aed','#059669','#2563eb','#ec4899'][i % 5] }} />
                    <span className="legend-name">{cat.name}</span>
                    <strong>{cat.count}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Mid Row - Orders + Quotes */}
        <div className="mid-row">
          {/* Recent Orders */}
          <div className="card recent-orders">
            <div className="card-head"><h3>Recent Orders</h3><Link href="/portal-secure-99x/orders"><a className="see-all">See All →</a></Link></div>
            <div className="orders-list">
              {(stats.recentOrders || []).length === 0 && <p className="empty-text">No orders yet.</p>}
              {(stats.recentOrders || []).map((o) => (
                <Link key={o.id} href="/portal-secure-99x/orders">
                  <a className="order-row">
                    <div><strong>#{o.order_no}</strong><span>{o.customer_name || 'Customer'}</span></div>
                    <div className="order-right">
                      <strong>৳{Number(o.total_amount).toLocaleString()}</strong>
                      <span className={`status-pill st-${o.status}`}>{o.status}</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Quotes */}
          <div className="card recent-quotes">
            <div className="card-head"><h3>Recent Quotes</h3><Link href="/portal-secure-99x/quotes-manager"><a className="see-all">See All →</a></Link></div>
            <div className="quotes-list">
              {(stats.recentQuotes || []).length === 0 && <p className="empty-text">No quotes yet.</p>}
              {(stats.recentQuotes || []).map((q) => (
                <Link key={q.id} href="/portal-secure-99x/quotes-manager">
                  <a className="quote-row">
                    <div><strong>{q.client_name}</strong><span>{q.project_type || 'General'}</span></div>
                    <span className={`status-pill st-${q.status}`}>{q.status}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bot-row">
          {/* Quick Stats */}
          <div className="card quick-stats">
            <div className="card-head"><h3>Quick Overview</h3></div>
            <div className="stats-grid">
              <div className="stat-item"><span>Pending Orders</span><strong>{stats.pendingOrders || 0}</strong></div>
              <div className="stat-item"><span>Active Quotes</span><strong>{stats.activeQuotes || 0}</strong></div>
              <div className="stat-item"><span>Digital Services</span><strong>{stats.digiCount || 0}</strong></div>
              <div className="stat-item"><span>B2B Solutions</span><strong>{stats.bizCount || 0}</strong></div>
              <div className="stat-item"><span>Maintenance</span><strong>{stats.maintCount || 0}</strong></div>
              <div className="stat-item"><span>Client Projects</span><strong>{stats.projectsCount || 0}</strong></div>
            </div>
          </div>

          {/* Order Status Breakdown */}
          <div className="card">
            <div className="card-head"><h3>Order Status</h3></div>
            <div className="status-bars">
              {(stats.orderStatusBreakdown || []).map((s, i) => {
                const maxCount = Math.max(...(stats.orderStatusBreakdown || []).map(x => x.count), 1)
                return (
                  <div key={i} className="status-bar-row">
                    <span className="sb-label">{s.status}</span>
                    <div className="sb-track">
                      <div className="sb-fill" style={{ width: `${(s.count / maxCount) * 100}%`, background: s.status === 'pending' ? '#f59e0b' : s.status === 'shipped' ? '#10b981' : s.status === 'paid' ? '#3b82f6' : '#ef4444', animationDelay: `${i * 0.1}s` }} />
                    </div>
                    <strong className="sb-count">{s.count}</strong>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="card">
          <div className="card-head"><h3>Top Selling Products</h3></div>
          <div className="top-products-chart">
            {(stats.topProducts || []).length === 0 && <p className="empty-text">No sales data yet.</p>}
            {(stats.topProducts || []).map((p, i) => {
              const maxSales = Math.max(...(stats.topProducts || []).map(x => Number(x.total_sales)), 1)
              const pct = (Number(p.total_sales) / maxSales) * 100
              const colors = ['#f7e500', '#7c3aed', '#059669', '#2563eb', '#ec4899']
              return (
                <div key={i} className="tpc-row">
                  <div className="tpc-label">
                    <span className="tpc-rank" style={{ background: colors[i % 5] + '22', color: colors[i % 5] }}>#{i + 1}</span>
                    <span className="tpc-name">{p.name}</span>
                  </div>
                  <div className="tpc-bar-wrap">
                    <div className="tpc-bar" style={{ width: `${Math.max(pct, 4)}%`, background: `linear-gradient(90deg, ${colors[i % 5]}, ${colors[i % 5]}cc)`, animationDelay: `${i * 0.12}s` }} />
                  </div>
                  <div className="tpc-stats">
                    <strong>{p.qty_sold} sold</strong>
                    <span>৳{Number(p.total_sales).toLocaleString()}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


      </div>

      <style jsx>{`
        .dash { display: grid; gap: 18px; animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

        .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .kpi-card { display: flex; align-items: center; gap: 14px; padding: 20px 22px; border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; animation: slideUp 0.5s ease-out backwards; transition: transform 0.2s, box-shadow 0.2s; }
        .kpi-card:nth-child(1) { animation-delay: 0.05s; }
        .kpi-card:nth-child(2) { animation-delay: 0.1s; }
        .kpi-card:nth-child(3) { animation-delay: 0.15s; }
        .kpi-card:nth-child(4) { animation-delay: 0.2s; }
        .kpi-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .kpi-icon { width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s; }
        .kpi-card:hover .kpi-icon { transform: scale(1.1); }
        .kpi-body { display: flex; flex-direction: column; gap: 2px; }
        .kpi-label { font-size: 12px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.03em; }
        .kpi-value { font-size: 24px; font-weight: 800; color: #111827; }

        .mid-row { display: grid; grid-template-columns: 1.5fr 1fr; gap: 14px; }
        .bot-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .card { border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; padding: 20px 22px; animation: slideUp 0.6s ease-out backwards; animation-delay: 0.25s; transition: box-shadow 0.2s; }
        .card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.05); }
        .card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .card-head h3 { margin: 0; font-size: 16px; color: #111827; font-weight: 700; }
        .see-all { font-size: 12px; color: #7c3aed; font-weight: 700; text-decoration: none; transition: color 0.15s; }
        .see-all:hover { color: #5b21b6; }

        .orders-list, .quotes-list { display: flex; flex-direction: column; gap: 8px; max-height: 300px; overflow-y: auto; }
        .order-row, .quote-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border: 1px solid #f3f4f6; border-radius: 10px; transition: background 0.15s, border-color 0.15s; text-decoration: none; color: inherit; cursor: pointer; }
        .order-row:hover, .quote-row:hover { background: #fafbff; border-color: #e0e7ff; }
        .order-row strong, .quote-row strong { font-size: 13px; color: #111827; display: block; }
        .order-row span, .quote-row span { font-size: 12px; color: #6b7280; }
        .order-right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }

        .status-pill { display: inline-block; padding: 3px 9px; border-radius: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; }
        .st-pending { background: #fef3c7; color: #92400e; }
        .st-paid, .st-shipped { background: #d1fae5; color: #065f46; }
        .st-cancelled { background: #fee2e2; color: #991b1b; }
        .st-new { background: #dbeafe; color: #1e40af; }
        .st-in_progress { background: #fef3c7; color: #92400e; }
        .st-closed { background: #d1fae5; color: #065f46; }

        .cats-list { display: flex; flex-direction: column; gap: 12px; }
        .cat-row { display: flex; align-items: center; gap: 10px; transition: transform 0.15s; }
        .cat-row:hover { transform: translateX(4px); }
        .cat-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .cat-name { flex: 1; font-size: 13px; color: #374151; font-weight: 500; }
        .cat-row strong { font-size: 13px; color: #111827; }

        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .stat-item { padding: 14px 16px; border: 1px solid #f3f4f6; border-radius: 12px; display: flex; flex-direction: column; gap: 4px; transition: border-color 0.2s, background 0.2s; }
        .stat-item:hover { border-color: #c7d2fe; background: #fafbff; }
        .stat-item span { font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; }
        .stat-item strong { font-size: 22px; color: #111827; font-weight: 800; }

        .empty-text { color: #9ca3af; font-size: 13px; text-align: center; padding: 20px; }

        /* Bar Chart */
        .bar-chart { display: flex; align-items: flex-end; gap: 8px; height: 180px; padding-top: 20px; }
        .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; gap: 6px; }
        .bar-fill { width: 100%; max-width: 40px; border-radius: 6px 6px 0 0; background: linear-gradient(180deg, #f7e500, #e6a800); animation: growUp 0.8s ease-out backwards; }
        @keyframes growUp { from { height: 0 !important; } }
        .bar-label { font-size: 10px; color: #6b7280; font-weight: 600; }
        .bar-val { font-size: 10px; color: #111827; font-weight: 700; }

        /* Donut Chart */
        .donut-wrap { display: flex; align-items: center; gap: 24px; }
        .donut-svg { width: 140px; height: 140px; flex-shrink: 0; transform: rotate(-90deg); }
        .donut-ring { animation: ringGrow 1s ease-out backwards; }
        @keyframes ringGrow { from { stroke-dasharray: 0 314; } }
        .donut-center-num { font-size: 22px; font-weight: 800; fill: #111827; transform: rotate(90deg); transform-origin: 60px 60px; }
        .donut-center-label { font-size: 10px; fill: #6b7280; transform: rotate(90deg); transform-origin: 60px 60px; }
        .donut-legend { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .legend-item { display: flex; align-items: center; gap: 8px; }
        .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .legend-name { flex: 1; font-size: 13px; color: #374151; }
        .legend-item strong { font-size: 13px; color: #111827; }

        /* Status Bars */
        .status-bars { display: flex; flex-direction: column; gap: 12px; }
        .status-bar-row { display: flex; align-items: center; gap: 10px; }
        .sb-label { font-size: 12px; color: #6b7280; width: 70px; text-transform: capitalize; font-weight: 600; }
        .sb-track { flex: 1; height: 10px; background: #f3f4f6; border-radius: 999px; overflow: hidden; }
        .sb-fill { height: 100%; border-radius: 999px; animation: barGrow 0.8s ease-out backwards; }
        @keyframes barGrow { from { width: 0 !important; } }
        .sb-count { font-size: 13px; font-weight: 700; color: #111827; width: 30px; text-align: right; }

        /* Top Products Chart */
        .top-products-chart { display: flex; flex-direction: column; gap: 14px; }
        .tpc-row { display: grid; grid-template-columns: 200px 1fr 120px; align-items: center; gap: 14px; }
        .tpc-label { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .tpc-rank { width: 28px; height: 28px; border-radius: 8px; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .tpc-name { font-size: 13px; font-weight: 600; color: #1f2937; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .tpc-bar-wrap { height: 24px; background: #f3f4f6; border-radius: 8px; overflow: hidden; position: relative; }
        .tpc-bar { height: 100%; border-radius: 8px; animation: barGrow 0.8s ease-out backwards; }
        .tpc-stats { text-align: right; }
        .tpc-stats strong { display: block; font-size: 13px; color: #111827; }
        .tpc-stats span { font-size: 11px; color: #6b7280; }

        @media (max-width: 1024px) { .kpi-row { grid-template-columns: repeat(2, 1fr); } .mid-row, .bot-row { grid-template-columns: 1fr; } .tpc-row { grid-template-columns: 140px 1fr 100px; } }
        @media (max-width: 640px) { .kpi-row { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: repeat(2, 1fr); } .tpc-row { grid-template-columns: 1fr; gap: 6px; } .tpc-bar-wrap { height: 18px; } }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async () => {
  try {
    const db = getDbPool()

    const [[revRow]] = await db.query('SELECT COALESCE(SUM(total_amount), 0) as total FROM orders WHERE deleted_at IS NULL')
    const [[ordRow]] = await db.query('SELECT COUNT(*) as total FROM orders WHERE deleted_at IS NULL')
    const [[custRow]] = await db.query('SELECT COUNT(*) as total FROM customers WHERE deleted_at IS NULL')
    const [[prodRow]] = await db.query('SELECT COUNT(*) as total FROM products WHERE deleted_at IS NULL AND is_active = 1')
    const [[pendRow]] = await db.query("SELECT COUNT(*) as total FROM orders WHERE status = 'pending' AND deleted_at IS NULL")
    const [[quoteRow]] = await db.query("SELECT COUNT(*) as total FROM quotes WHERE status IN ('new','in_progress') AND deleted_at IS NULL")
    const [[digiRow]] = await db.query("SELECT COUNT(*) as total FROM digi_services WHERE deleted_at IS NULL AND status = 'active'")
    const [[bizRow]] = await db.query("SELECT COUNT(*) as total FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active'")
    const [[maintRow]] = await db.query("SELECT COUNT(*) as total FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active'")
    const [[projRow]] = await db.query("SELECT COUNT(*) as total FROM client_projects WHERE deleted_at IS NULL AND status = 'active'")

    const [recentOrders] = await db.query(`SELECT o.id, o.order_no, o.total_amount, o.status, c.full_name as customer_name FROM orders o LEFT JOIN customers c ON c.id = o.customer_id WHERE o.deleted_at IS NULL ORDER BY o.created_at DESC LIMIT 5`)
    const [recentQuotes] = await db.query(`SELECT id, client_name, project_type, status FROM quotes WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT 5`)
    const [topCategories] = await db.query(`SELECT c.name, (SELECT COUNT(*) FROM products p INNER JOIN categories sub ON sub.id = p.category_id WHERE (sub.parent_id = c.id OR sub.id = c.id) AND p.deleted_at IS NULL AND p.is_active = 1) as count FROM categories c WHERE c.parent_id IS NULL AND c.deleted_at IS NULL ORDER BY count DESC LIMIT 5`)

    // Monthly revenue for last 6 months
    const [monthlyRevenue] = await db.query(`
      SELECT DATE_FORMAT(created_at, '%b') as month, COALESCE(SUM(total_amount), 0) as revenue
      FROM orders WHERE deleted_at IS NULL AND created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
      GROUP BY YEAR(created_at), MONTH(created_at), DATE_FORMAT(created_at, '%b')
      ORDER BY YEAR(created_at), MONTH(created_at)
    `)

    // Order status breakdown
    const [orderStatusBreakdown] = await db.query(`SELECT status, COUNT(*) as count FROM orders WHERE deleted_at IS NULL GROUP BY status ORDER BY count DESC`)

    // Top selling products
    let topProducts = []
    try {
      const [tpRows] = await db.query(`
        SELECT p.name, SUM(oi.quantity) as qty_sold, SUM(oi.quantity * oi.price_at_purchase) as total_sales
        FROM order_items oi
        INNER JOIN products p ON p.id = oi.product_id
        INNER JOIN orders o ON o.id = oi.order_id AND o.deleted_at IS NULL
        GROUP BY oi.product_id
        ORDER BY qty_sold DESC
        LIMIT 5
      `)
      topProducts = tpRows
    } catch (e) {}

    const stats = {
      totalRevenue: Number(revRow.total),
      totalOrders: Number(ordRow.total),
      totalCustomers: Number(custRow.total),
      totalProducts: Number(prodRow.total),
      pendingOrders: Number(pendRow.total),
      activeQuotes: Number(quoteRow.total),
      digiCount: Number(digiRow.total),
      bizCount: Number(bizRow.total),
      maintCount: Number(maintRow.total),
      projectsCount: Number(projRow.total),
      recentOrders: JSON.parse(JSON.stringify(recentOrders)),
      recentQuotes: JSON.parse(JSON.stringify(recentQuotes)),
      topCategories: JSON.parse(JSON.stringify(topCategories)),
      monthlyRevenue: JSON.parse(JSON.stringify(monthlyRevenue)),
      orderStatusBreakdown: JSON.parse(JSON.stringify(orderStatusBreakdown)),
      topProducts: JSON.parse(JSON.stringify(topProducts)),
    }

    return { props: { stats } }
  } catch (e) {
    return { props: { stats: {} } }
  }
}

export default Dashboard
