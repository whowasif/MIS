import React, { useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from './SecureAdminLayout'
import { getDbPool } from '../../lib/server/db'

const STATUS_OPTIONS = ['new', 'reviewed', 'shortlisted', 'rejected']
const statusColors = {
  new: { bg: '#dbeafe', color: '#1e40af' },
  reviewed: { bg: '#fef3c7', color: '#92400e' },
  shortlisted: { bg: '#d1fae5', color: '#065f46' },
  rejected: { bg: '#fee2e2', color: '#991b1b' },
}

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'

const ApplicationsPage = ({ applications = [] }) => {
  const [items, setItems] = useState(applications)
  const [updatingId, setUpdatingId] = useState(null)
  const [viewApp, setViewApp] = useState(null)
  const [statusFilter, setStatusFilter] = useState('')

  const filteredItems = statusFilter ? items.filter((a) => a.status === statusFilter) : items

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id)
    try {
      await fetch(`/api/admin/career-applications/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      setItems((prev) => prev.map((a) => {
        if (a.id === id) return Object.assign({}, a, { status: newStatus })
        return a
      }))
      if (viewApp && viewApp.id === id) setViewApp(Object.assign({}, viewApp, { status: newStatus }))
    } catch (e) { console.error(e) }
    finally { setUpdatingId(null) }
  }

  const deleteApp = async (id) => {
    if (!window.confirm('Delete this application permanently?')) return
    try {
      await fetch(`/api/admin/career-applications/${id}`, { method: 'DELETE' })
      setItems((prev) => prev.filter((a) => a.id !== id))
      if (viewApp?.id === id) setViewApp(null)
    } catch (e) { console.error(e) }
  }

  return (
    <SecureAdminLayout>
      <Head><title>Applications | Admin</title></Head>

      <div className="apps-page">
        <header className="page-header">
          <div>
            <h1>Career Applications</h1>
            <p>{filteredItems.length} of {items.length} application{items.length !== 1 ? 's' : ''}</p>
          </div>
          <select className="status-filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="reviewed">Reviewed</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
          </select>
        </header>

        <div className="apps-layout">
          {/* List */}
          <div className="apps-list-panel">
            {filteredItems.length === 0 && <p className="empty-msg">No applications match this filter.</p>}
            {filteredItems.map((app) => (
              <div
                key={app.id}
                className={`app-card ${viewApp?.id === app.id ? 'is-active' : ''}`}
                onClick={() => setViewApp(app)}
              >
                <div className="app-card-top">
                  <strong>{app.applicant_name}</strong>
                  <span className="status-badge" style={{ background: statusColors[app.status]?.bg, color: statusColors[app.status]?.color }}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>
                <p className="app-card-position">{app.job_title || 'General'}</p>
                <span className="app-card-date">{formatDate(app.created_at)}</span>
              </div>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="apps-detail-panel">
            {viewApp ? (
              <>
                <div className="detail-header">
                  <h2>{viewApp.applicant_name}</h2>
                  <button className="close-x" onClick={() => setViewApp(null)}>✕</button>
                </div>

                <div className="detail-content">
                  {/* Info Grid */}
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Position Applied</span>
                      <span className="info-value">{viewApp.job_title || '—'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <span className="info-value">{viewApp.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Phone</span>
                      <span className="info-value">{viewApp.phone || 'Not provided'}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Applied On</span>
                      <span className="info-value">{formatDate(viewApp.created_at)}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Status</span>
                      <select
                        className="status-select"
                        value={viewApp.status}
                        disabled={updatingId === viewApp.id}
                        onChange={(e) => updateStatus(viewApp.id, e.target.value)}
                        style={{ background: statusColors[viewApp.status]?.bg, color: statusColors[viewApp.status]?.color }}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  {viewApp.cover_letter && (
                    <div className="detail-section">
                      <h4>Cover Letter</h4>
                      <div className="text-box">{viewApp.cover_letter}</div>
                    </div>
                  )}

                  {/* Resume Viewer */}
                  <div className="detail-section">
                    <h4>Resume / CV</h4>
                    {viewApp.resume_path ? (
                      <div className="resume-viewer">
                        {viewApp.resume_path.toLowerCase().endsWith('.pdf') ? (
                          <iframe src={viewApp.resume_path} className="resume-iframe" title="Resume" />
                        ) : (
                          <div className="resume-download">
                            <p>Document format: {viewApp.resume_path.split('.').pop().toUpperCase()}</p>
                          </div>
                        )}
                        <a href={viewApp.resume_path} target="_blank" rel="noopener noreferrer" className="download-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Download Resume
                        </a>
                      </div>
                    ) : (
                      <p className="no-resume">No resume uploaded.</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="detail-actions">
                    <a href={`mailto:${viewApp.email}?subject=Regarding your application for ${viewApp.job_title || 'the position'}`} className="action-btn email-btn">
                      Email Applicant
                    </a>
                    <button className="action-btn delete-btn" onClick={() => deleteApp(viewApp.id)}>Delete Application</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-detail">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                <p>Select an application to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .apps-page { display: grid; gap: 16px; }
        .page-header { display: flex; justify-content: space-between; align-items: center; }
        .page-header h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .page-header p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
        .status-filter { padding: 9px 14px; border: 2px solid #c7d2fe; border-radius: 10px; background: #fafbff; font: inherit; font-size: 14px; cursor: pointer; }
        .status-filter:focus { outline: none; border-color: #6366f1; }

        .apps-layout { display: grid; grid-template-columns: 340px 1fr; gap: 16px; height: calc(100vh - 200px); overflow: hidden; }

        /* List Panel */
        .apps-list-panel { overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px; }
        .empty-msg { color: #9ca3af; text-align: center; padding: 40px 16px; }

        .app-card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; background: #fff; cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s; }
        .app-card:hover { border-color: #a5b4fc; box-shadow: 0 2px 8px rgba(99,102,241,0.06); }
        .app-card.is-active { border-color: #6366f1; background: #f5f3ff; }

        .app-card-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
        .app-card-top strong { font-size: 14px; color: #111827; }
        .status-badge { font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; }
        .app-card-position { margin: 4px 0 0; font-size: 13px; color: #6b7280; }
        .app-card-date { display: block; margin-top: 4px; font-size: 11px; color: #9ca3af; }

        /* Detail Panel */
        .apps-detail-panel { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; overflow-y: auto; display: flex; flex-direction: column; }

        .detail-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #f3f4f6; }
        .detail-header h2 { margin: 0; font-size: 20px; color: #111827; }
        .close-x { border: none; background: transparent; font-size: 22px; cursor: pointer; color: #9ca3af; }

        .detail-content { padding: 24px; display: flex; flex-direction: column; gap: 24px; flex: 1; }

        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; padding: 18px; background: #f9fafb; border-radius: 12px; border: 1px solid #f3f4f6; }
        .info-item { display: flex; flex-direction: column; gap: 3px; }
        .info-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7280; font-weight: 600; }
        .info-value { font-size: 14px; color: #111827; font-weight: 600; }

        .status-select { border: none; border-radius: 6px; padding: 4px 10px; font-weight: 700; font-size: 12px; cursor: pointer; }

        .detail-section h4 { margin: 0 0 10px; font-size: 13px; color: #374151; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 700; }
        .text-box { padding: 14px 16px; border: 1px solid #e5e7eb; border-radius: 10px; background: #f9fafb; font-size: 14px; color: #374151; line-height: 1.7; white-space: pre-wrap; }

        /* Resume Viewer */
        .resume-viewer { display: grid; gap: 12px; }
        .resume-iframe { width: 100%; height: 400px; border: 1px solid #e5e7eb; border-radius: 10px; }
        .resume-download { padding: 24px; border: 1px dashed #d1d5db; border-radius: 10px; text-align: center; color: #6b7280; }
        .download-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-size: 14px; font-weight: 600; text-decoration: none; }
        .download-btn:hover { background: #f3f4f6; }
        .no-resume { color: #9ca3af; font-size: 14px; }

        /* Actions */
        .detail-actions { display: flex; gap: 10px; padding-top: 16px; border-top: 1px solid #f3f4f6; flex-wrap: wrap; }
        .action-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; text-decoration: none; }
        .email-btn { border: 1px solid #d1d5db; background: #fff; color: #374151; }
        .email-btn:hover { background: #f3f4f6; }
        .delete-btn { border: 1px solid #fecaca; background: #fff; color: #dc2626; }
        .delete-btn:hover { background: #fef2f2; }

        .empty-detail { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 12px; color: #9ca3af; font-size: 14px; }

        @media (max-width: 900px) {
          .apps-layout { grid-template-columns: 1fr; grid-template-rows: 280px 1fr; }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async ({ req }) => {
  try {
    const { verifyAdminSessionToken, ROLE_RESTRICTIONS } = await import('../../lib/auth/session')
    const cookieStr = req.headers?.cookie || ''
    const match = cookieStr.match(/mis_admin_session=([^;]+)/)
    if (match) {
      const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]))
      if (payload) {
        const restrictions = ROLE_RESTRICTIONS[payload.role] || []
        if (restrictions.includes('applications')) {
          return { redirect: { destination: '/portal-secure-99x', permanent: false } }
        }
      }
    }

    const db = getDbPool()
    const [rows] = await db.query(`
      SELECT ca.*, cp.title AS job_title
      FROM career_applications ca
      LEFT JOIN career_posts cp ON cp.id = ca.career_post_id
      ORDER BY
        CASE ca.status WHEN 'new' THEN 0 WHEN 'reviewed' THEN 1 WHEN 'shortlisted' THEN 2 ELSE 3 END,
        ca.created_at DESC
      LIMIT 200
    `)
    return { props: { applications: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { applications: [] } }
  }
}

export default ApplicationsPage
