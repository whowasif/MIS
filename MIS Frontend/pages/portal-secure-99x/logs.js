import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const formatDate = (d) => d ? new Date(d).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'

const LogsPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('stats')
  const [stats, setStats] = useState(null)
  const [visitorLogs, setVisitorLogs] = useState([])
  const [adminLogs, setAdminLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(7)
  const [eventFilter, setEventFilter] = useState('')
  const [isSuperAdmin, setIsSuperAdmin] = useState(false)

  // Admin Activity filters + pagination
  const PAGE_SIZE = 50
  const [adminTotal, setAdminTotal] = useState(0)
  const [adminPage, setAdminPage] = useState(1)
  const [adminOptions, setAdminOptions] = useState({ admins: [], actions: [], resources: [] })
  const [fAdmin, setFAdmin] = useState('')
  const [fAction, setFAction] = useState('')
  const [fResource, setFResource] = useState('')
  const [fId, setFId] = useState('')
  const [fFrom, setFFrom] = useState('')
  const [fTo, setFTo] = useState('')
  // Applied filters (what the query actually uses; ID/date apply on button click)
  const [applied, setApplied] = useState({ adminEmail: '', action: '', resource: '', resourceId: '', dateFrom: '', dateTo: '' })

  useEffect(() => {
    // Check role
    fetch('/api/admin/me', { credentials: 'include' }).then(r => r.json()).then(data => {
      if (data.success === false) { router.replace('/portal-secure-99x/access'); return }
      if (data.role === 'super_admin') setIsSuperAdmin(true)
    }).catch(() => {})
    loadData()
  }, [activeTab, days, eventFilter, adminPage, applied])

  const loadData = async () => {
    setLoading(true)

    try {
      if (activeTab === 'stats') {
        const res = await fetch(`/api/admin/logs?type=stats&days=${days}`, { credentials: 'include' })
        const data = await res.json()
        if (data.success) setStats(data.stats)
      } else if (activeTab === 'visitor') {
        const url = eventFilter ? `/api/admin/logs?type=visitor&limit=200&eventType=${eventFilter}` : '/api/admin/logs?type=visitor&limit=200'
        const res = await fetch(url, { credentials: 'include' })
        const data = await res.json()
        if (data.success) setVisitorLogs(data.logs)
      } else if (activeTab === 'admin') {
        const offset = (adminPage - 1) * PAGE_SIZE
        const qs = new URLSearchParams({ type: 'admin', limit: String(PAGE_SIZE), offset: String(offset) })
        if (applied.adminEmail) qs.set('adminEmail', applied.adminEmail)
        if (applied.action) qs.set('action', applied.action)
        if (applied.resource) qs.set('resource', applied.resource)
        if (applied.resourceId) qs.set('resourceId', applied.resourceId)
        if (applied.dateFrom) qs.set('dateFrom', applied.dateFrom)
        if (applied.dateTo) qs.set('dateTo', applied.dateTo)
        const res = await fetch(`/api/admin/logs?${qs.toString()}`, { credentials: 'include' })
        const data = await res.json()
        if (data.success) {
          setAdminLogs(data.logs)
          setAdminTotal(data.total || 0)
          if (data.options) setAdminOptions(data.options)
        }
      }
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }

  const applyAdminFilters = () => {
    setAdminPage(1)
    setApplied({ adminEmail: fAdmin, action: fAction, resource: fResource, resourceId: fId.trim(), dateFrom: fFrom, dateTo: fTo })
  }
  const resetAdminFilters = () => {
    setFAdmin(''); setFAction(''); setFResource(''); setFId(''); setFFrom(''); setFTo('')
    setAdminPage(1)
    setApplied({ adminEmail: '', action: '', resource: '', resourceId: '', dateFrom: '', dateTo: '' })
  }

  const totalPages = Math.max(1, Math.ceil(adminTotal / PAGE_SIZE))
  const pageNumbers = (() => {
    const pages = []
    const span = 2 // pages on each side of current
    let start = Math.max(1, adminPage - span)
    let end = Math.min(totalPages, adminPage + span)
    if (adminPage <= span) end = Math.min(totalPages, 1 + span * 2)
    if (adminPage > totalPages - span) start = Math.max(1, totalPages - span * 2)
    for (let i = start; i <= end; i++) pages.push(i)
    return pages
  })()

  const inputStyle = { padding: '7px 10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '12px', color: '#374151', background: '#fff', minWidth: '130px' }
  const labelStyle = { fontSize: '11px', fontWeight: 600, color: '#64748b', marginBottom: '4px', display: 'block' }

  return (
    <>
      <Head><title>Activity Logs | Admin</title></Head>
      <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 800, color: '#1e293b' }}>Activity & Visitor Logs</h1>
            <button onClick={() => router.push('/portal-secure-99x')} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>← Dashboard</button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', background: '#fff', padding: '4px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            {[{ key: 'stats', label: 'Overview' }, { key: 'visitor', label: 'Visitor Logs' }, ...(isSuperAdmin ? [{ key: 'admin', label: 'Admin Activity' }] : [])].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{ flex: 1, padding: '10px 16px', borderRadius: '8px', border: 'none', background: activeTab === tab.key ? '#1e293b' : 'transparent', color: activeTab === tab.key ? '#fff' : '#64748b', fontWeight: 600, fontSize: '13px', cursor: 'pointer', transition: 'all 0.15s' }}>{tab.label}</button>
            ))}
          </div>

          {loading && activeTab !== 'admin' && <div style={{ textAlign: 'center', padding: '48px', color: '#94a3b8' }}>Loading...</div>}

          {/* Stats Overview */}
          {!loading && activeTab === 'stats' && stats && (
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Period:</span>
                {[7, 14, 30].map((d) => (
                  <button key={d} onClick={() => setDays(d)} style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid ' + (days === d ? '#3b82f6' : '#e2e8f0'), background: days === d ? '#eff6ff' : '#fff', color: days === d ? '#3b82f6' : '#64748b', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>{d} days</button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
                {[
                  { label: 'Page Views', value: stats.pageViews, color: '#3b82f6' },
                  { label: 'Unique Visitors', value: stats.uniqueVisitors, color: '#10b981' },
                  { label: 'Searches', value: stats.searches, color: '#f59e0b' },
                  { label: 'Product Views', value: stats.productViews, color: '#8b5cf6' },
                ].map((m) => (
                  <div key={m.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: m.color }}>{m.value.toLocaleString()}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                {/* Top Pages */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                  <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>Top Pages</h3>
                  {stats.topPages?.map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '12px' }}>
                      <span style={{ color: '#374151', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.page}</span>
                      <span style={{ fontWeight: 700, color: '#3b82f6' }}>{p.visits}</span>
                    </div>
                  ))}
                </div>

                {/* Top Searches */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                  <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>Top Searches</h3>
                  {stats.topSearches?.map((s, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '12px' }}>
                      <span style={{ color: '#374151' }}>{s.search_query}</span>
                      <span style={{ fontWeight: 700, color: '#f59e0b' }}>{s.count}</span>
                    </div>
                  ))}
                  {(!stats.topSearches || stats.topSearches.length === 0) && <div style={{ color: '#94a3b8', fontSize: '12px' }}>No searches yet</div>}
                </div>

                {/* Top Products */}
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                  <h3 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>Top Product Views</h3>
                  {stats.topProducts?.map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '12px' }}>
                      <span style={{ color: '#374151', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.product_name}</span>
                      <span style={{ fontWeight: 700, color: '#8b5cf6' }}>{p.views}</span>
                    </div>
                  ))}
                  {(!stats.topProducts || stats.topProducts.length === 0) && <div style={{ color: '#94a3b8', fontSize: '12px' }}>No product views yet</div>}
                </div>
              </div>
            </div>
          )}

          {/* Visitor Logs */}
          {!loading && activeTab === 'visitor' && (
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Filter:</span>
                {['', 'page_view', 'search', 'product_view'].map((f) => (
                  <button key={f} onClick={() => setEventFilter(f)} style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid ' + (eventFilter === f ? '#3b82f6' : '#e2e8f0'), background: eventFilter === f ? '#eff6ff' : '#fff', color: eventFilter === f ? '#3b82f6' : '#64748b', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>{f || 'All'}</button>
                ))}
              </div>
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Time</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Event</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Page / Query</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitorLogs.map((log, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '8px 14px', color: '#64748b', whiteSpace: 'nowrap' }}>{formatDate(log.created_at)}</td>
                        <td style={{ padding: '8px 14px' }}>
                          <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, background: log.event_type === 'search' ? '#fef3c7' : log.event_type === 'product_view' ? '#ede9fe' : '#e0f2fe', color: log.event_type === 'search' ? '#92400e' : log.event_type === 'product_view' ? '#6b21a8' : '#0369a1' }}>{log.event_type}</span>
                        </td>
                        <td style={{ padding: '8px 14px', color: '#374151', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {log.search_query || log.product_name || log.page || '—'}
                        </td>
                        <td style={{ padding: '8px 14px', color: '#94a3b8', fontFamily: 'monospace', fontSize: '11px' }}>{log.ip_address || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {visitorLogs.length === 0 && <div style={{ textAlign: 'center', padding: '32px', color: '#94a3b8' }}>No visitor logs yet. Logs will appear after deployment.</div>}
              </div>
            </div>
          )}

          {/* Admin Activity */}
          {activeTab === 'admin' && (
            <div>
              {/* Filter bar */}
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-end' }}>
                  <div>
                    <label style={labelStyle}>Admin</label>
                    <select value={fAdmin} onChange={(e) => setFAdmin(e.target.value)} style={inputStyle}>
                      <option value="">All admins</option>
                      {adminOptions.admins.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Action</label>
                    <select value={fAction} onChange={(e) => setFAction(e.target.value)} style={inputStyle}>
                      <option value="">All actions</option>
                      {adminOptions.actions.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Resource</label>
                    <select value={fResource} onChange={(e) => setFResource(e.target.value)} style={inputStyle}>
                      <option value="">All resources</option>
                      {adminOptions.resources.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>ID</label>
                    <input type="text" value={fId} onChange={(e) => setFId(e.target.value)} placeholder="Resource ID" style={{ ...inputStyle, minWidth: '110px' }} onKeyDown={(e) => { if (e.key === 'Enter') applyAdminFilters() }} />
                  </div>
                  <div>
                    <label style={labelStyle}>From date</label>
                    <input type="date" value={fFrom} onChange={(e) => setFFrom(e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>To date</label>
                    <input type="date" value={fTo} onChange={(e) => setFTo(e.target.value)} style={inputStyle} />
                  </div>
                  <button onClick={applyAdminFilters} style={{ padding: '8px 18px', borderRadius: '6px', border: 'none', background: '#1e293b', color: '#fff', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Apply</button>
                  <button onClick={resetAdminFilters} style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Reset</button>
                </div>
              </div>

              {loading && <div style={{ textAlign: 'center', padding: '48px', color: '#94a3b8' }}>Loading...</div>}

              {!loading && (
              <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Time</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Admin</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Action</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>Resource</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>ID</th>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#475569' }}>IP</th>
                  </tr>
                </thead>
                <tbody>
                  {adminLogs.map((log, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '8px 14px', color: '#64748b', whiteSpace: 'nowrap' }}>{formatDate(log.created_at)}</td>
                      <td style={{ padding: '8px 14px', color: '#374151', fontWeight: 500 }}>{log.admin_email || '—'}</td>
                      <td style={{ padding: '8px 14px' }}>
                        <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, background: log.action === 'delete' ? '#fee2e2' : log.action === 'create' ? '#d1fae5' : '#e0f2fe', color: log.action === 'delete' ? '#991b1b' : log.action === 'create' ? '#065f46' : '#0369a1' }}>{log.action}</span>
                      </td>
                      <td style={{ padding: '8px 14px', color: '#374151' }}>{log.resource}</td>
                      <td style={{ padding: '8px 14px', color: '#94a3b8', fontFamily: 'monospace' }}>{log.resource_id || '—'}</td>
                      <td style={{ padding: '8px 14px', color: '#94a3b8', fontFamily: 'monospace', fontSize: '11px' }}>{log.ip_address || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {adminLogs.length === 0 && <div style={{ textAlign: 'center', padding: '32px', color: '#94a3b8' }}>No admin activity matches your filters.</div>}
              </div>
              )}

              {/* Pagination */}
              {!loading && adminTotal > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    Showing {(adminPage - 1) * PAGE_SIZE + 1}–{Math.min(adminPage * PAGE_SIZE, adminTotal)} of {adminTotal.toLocaleString()}
                  </span>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <button onClick={() => setAdminPage(1)} disabled={adminPage === 1} style={pageBtn(adminPage === 1)}>« First</button>
                    <button onClick={() => setAdminPage((p) => Math.max(1, p - 1))} disabled={adminPage === 1} style={pageBtn(adminPage === 1)}>‹ Prev</button>
                    {pageNumbers[0] > 1 && <span style={{ color: '#94a3b8', fontSize: '12px', padding: '0 4px' }}>…</span>}
                    {pageNumbers.map((n) => (
                      <button key={n} onClick={() => setAdminPage(n)} style={pageBtn(false, n === adminPage)}>{n}</button>
                    ))}
                    {pageNumbers[pageNumbers.length - 1] < totalPages && <span style={{ color: '#94a3b8', fontSize: '12px', padding: '0 4px' }}>…</span>}
                    <button onClick={() => setAdminPage((p) => Math.min(totalPages, p + 1))} disabled={adminPage === totalPages} style={pageBtn(adminPage === totalPages)}>Next ›</button>
                    <button onClick={() => setAdminPage(totalPages)} disabled={adminPage === totalPages} style={pageBtn(adminPage === totalPages)}>Last »</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Pagination button style helper
const pageBtn = (disabled, active = false) => ({
  padding: '6px 11px',
  borderRadius: '6px',
  border: '1px solid ' + (active ? '#1e293b' : '#e2e8f0'),
  background: active ? '#1e293b' : '#fff',
  color: active ? '#fff' : (disabled ? '#cbd5e1' : '#475569'),
  fontSize: '12px',
  fontWeight: 600,
  cursor: disabled ? 'not-allowed' : 'pointer',
  minWidth: '34px',
})

export default LogsPage
