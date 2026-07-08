import React, { useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from './SecureAdminLayout'
import { getDbPool } from '../../lib/server/db'

const STATUS_OPTIONS = ['new', 'in_progress', 'closed']
const statusLabels = { new: 'New', in_progress: 'In Progress', closed: 'Closed' }
const statusColors = {
  new: { bg: '#dbeafe', color: '#1e40af' },
  in_progress: { bg: '#fef3c7', color: '#92400e' },
  closed: { bg: '#d1fae5', color: '#065f46' },
}

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'

const QuotesManagerPage = ({ initialQuotes = [] }) => {
  const [quotes, setQuotes] = useState(initialQuotes)
  const [activeQuote, setActiveQuote] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [saving, setSaving] = useState(false)
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredQuotes = statusFilter === 'all'
    ? quotes
    : quotes.filter((q) => q.status === statusFilter)

  const openQuote = (quote) => {
    setActiveQuote(quote)
    setReplyText(quote.admin_reply || '')
  }

  const closePanel = () => {
    setActiveQuote(null)
    setReplyText('')
  }

  const updateQuote = async (quoteId, data) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/quotes/${quoteId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        const stateUpdate = {}
        if (data.status) stateUpdate.status = data.status
        if (data.adminReply !== undefined) stateUpdate.admin_reply = data.adminReply

        setQuotes((prev) => prev.map((q) => (q.id === quoteId ? { ...q, ...stateUpdate } : q)))
        if (activeQuote?.id === quoteId) {
          setActiveQuote((prev) => ({ ...prev, ...stateUpdate }))
        }
      } else {
        const err = await res.json()
        alert(err.error || 'Failed to save.')
      }
    } catch (e) {
      console.error('Update failed', e)
      alert('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const saveReply = async () => {
    if (!activeQuote || !replyText.trim()) return
    await updateQuote(activeQuote.id, { adminReply: replyText.trim(), status: 'in_progress' })
  }

  const changeStatus = async (quoteId, newStatus) => {
    await updateQuote(quoteId, { status: newStatus })
  }

  const deleteQuote = async (quoteId) => {
    if (!window.confirm('Delete this quote permanently?')) return
    try {
      await fetch(`/api/admin/quotes/${quoteId}`, { method: 'DELETE' })
      setQuotes((prev) => prev.filter((q) => q.id !== quoteId))
      if (activeQuote?.id === quoteId) closePanel()
    } catch (e) {
      console.error('Delete failed', e)
    }
  }

  const sendViaEmail = () => {
    if (!activeQuote || !replyText.trim()) return
    const subject = encodeURIComponent(`Re: Quote Request - ${activeQuote.project_type || 'Project Inquiry'}`)
    const body = encodeURIComponent(`Dear ${activeQuote.client_name},\n\nThank you for your inquiry regarding "${activeQuote.project_type || 'your project'}".\n\n${replyText}\n\nBest regards,\nMIS Solution Team`)
    window.location.href = `mailto:${activeQuote.email}?subject=${subject}&body=${body}`
  }

  const sendViaWhatsApp = () => {
    if (!activeQuote || !replyText.trim()) return
    const message = encodeURIComponent(
      `Dear ${activeQuote.client_name},\n\nRegarding your quote request for "${activeQuote.project_type || 'your project'}":\n\n${replyText}\n\n— MIS Solution`
    )
    window.location.href = `https://api.whatsapp.com/send?text=${message}`
  }

  return (
    <SecureAdminLayout>
      <Head><title>Quotes | Admin</title></Head>

      <div className="quotes-page">
        <header className="page-header">
          <div className="header-top">
            <div>
              <h1>Quote Requests</h1>
              <p>{filteredQuotes.length} of {quotes.length} quotes</p>
            </div>
            <div className="filter-group">
              <label htmlFor="status-filter">Status:</label>
              <select
                id="status-filter"
                className="filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{statusLabels[s]}</option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="quotes-layout">
          {/* List */}
          <div className="list-panel">
            {filteredQuotes.length === 0 && <p className="empty-msg">No quote requests found.</p>}
            {filteredQuotes.map((quote) => (
              <div
                key={quote.id}
                className={`quote-card ${activeQuote?.id === quote.id ? 'is-active' : ''}`}
                onClick={() => openQuote(quote)}
              >
                <div className="card-top">
                  <strong>{quote.client_name}</strong>
                  <span className="badge" style={{ background: statusColors[quote.status]?.bg, color: statusColors[quote.status]?.color }}>
                    {statusLabels[quote.status] || quote.status}
                  </span>
                </div>
                <p className="card-company">{quote.company_name || '—'}</p>
                <p className="card-type">{quote.project_type || 'General'}</p>
                <span className="card-date">{formatDate(quote.created_at)}</span>
              </div>
            ))}
          </div>

          {/* Detail */}
          <div className="detail-panel">
            {activeQuote ? (
              <>
                <div className="detail-head">
                  <div>
                    <h2>{activeQuote.client_name}</h2>
                    <p className="head-sub">{activeQuote.company_name || ''} • {activeQuote.email}</p>
                  </div>
                  <button className="close-x" onClick={closePanel}>✕</button>
                </div>

                <div className="detail-content">
                  <div className="meta-row">
                    <div className="meta-item">
                      <span className="meta-label">Project Type</span>
                      <span className="meta-val">{activeQuote.project_type || '—'}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Status</span>
                      <select
                        className="status-select"
                        value={activeQuote.status}
                        onChange={(e) => changeStatus(activeQuote.id, e.target.value)}
                        style={{ background: statusColors[activeQuote.status]?.bg, color: statusColors[activeQuote.status]?.color }}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{statusLabels[s]}</option>)}
                      </select>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Received</span>
                      <span className="meta-val">{formatDate(activeQuote.created_at)}</span>
                    </div>
                  </div>

                  <div className="section">
                    <h4>Client Requirements</h4>
                    <div className="req-box"><p>{activeQuote.requirements_text}</p></div>
                  </div>

                  <div className="section">
                    <h4>Your Reply</h4>
                    <textarea
                      className="reply-input"
                      rows="5"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your response — pricing, timeline, clarifications..."
                    />
                    <div className="action-row">
                      <button className="btn-save" onClick={saveReply} disabled={saving || !replyText.trim()}>
                        {saving ? 'Saving...' : 'Save Draft'}
                      </button>
                      <button className="btn-email" onClick={sendViaEmail} disabled={!replyText.trim()}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        Send via Email
                      </button>
                      <button className="btn-whatsapp" onClick={sendViaWhatsApp} disabled={!replyText.trim()}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Send via WhatsApp
                      </button>
                    </div>
                  </div>

                  {activeQuote.admin_reply && (
                    <div className="section">
                      <h4>Saved Reply</h4>
                      <div className="saved-box"><p>{activeQuote.admin_reply}</p></div>
                    </div>
                  )}

                  <div className="danger-zone">
                    <button className="btn-delete" onClick={() => deleteQuote(activeQuote.id)}>Delete Quote</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-detail">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                <p>Select a quote from the list to view details and reply.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .quotes-page { display: grid; gap: 16px; }
        .page-header h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .page-header p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
        .header-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .filter-group { display: flex; align-items: center; gap: 8px; }
        .filter-group label { font-size: 13px; font-weight: 600; color: #374151; }
        .filter-select { border: 1px solid #d1d5db; border-radius: 8px; padding: 7px 12px; font-size: 13px; font-weight: 600; color: #1f2937; background: #fff; cursor: pointer; min-width: 130px; }
        .filter-select:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }

        .quotes-layout { display: grid; grid-template-columns: 320px 1fr; gap: 16px; height: calc(100vh - 200px); overflow: hidden; }

        .list-panel { overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px; }
        .empty-msg { color: #9ca3af; text-align: center; padding: 40px 16px; }

        .quote-card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 12px 14px; background: #fff; cursor: pointer; transition: border-color 0.15s, box-shadow 0.15s; }
        .quote-card:hover { border-color: #a5b4fc; box-shadow: 0 2px 8px rgba(99,102,241,0.08); }
        .quote-card.is-active { border-color: #6366f1; background: #f5f3ff; }
        .card-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
        .card-top strong { font-size: 14px; color: #111827; }
        .badge { font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; }
        .card-company { margin: 4px 0 0; font-size: 13px; color: #6b7280; }
        .card-type { margin: 2px 0 0; font-size: 12px; color: #9ca3af; text-transform: capitalize; }
        .card-date { display: block; margin-top: 6px; font-size: 11px; color: #9ca3af; }

        .detail-panel { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; overflow-y: auto; display: flex; flex-direction: column; }
        .detail-head { display: flex; justify-content: space-between; align-items: flex-start; padding: 20px 24px; border-bottom: 1px solid #f3f4f6; }
        .detail-head h2 { margin: 0; font-size: 18px; color: #111827; }
        .head-sub { margin: 4px 0 0; font-size: 13px; color: #6b7280; }
        .close-x { border: none; background: transparent; font-size: 20px; cursor: pointer; color: #9ca3af; padding: 4px 8px; }

        .detail-content { padding: 20px 24px; display: flex; flex-direction: column; gap: 20px; flex: 1; }

        .meta-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .meta-item { display: flex; flex-direction: column; gap: 4px; }
        .meta-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7280; font-weight: 600; }
        .meta-val { font-size: 14px; color: #111827; font-weight: 600; }
        .status-select { border: none; border-radius: 6px; padding: 5px 10px; font-weight: 700; font-size: 12px; cursor: pointer; }

        .section h4 { margin: 0 0 10px; font-size: 12px; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; }
        .req-box { padding: 14px 16px; border: 1px solid #e5e7eb; border-radius: 10px; background: #f9fafb; }
        .req-box p { margin: 0; font-size: 14px; color: #374151; line-height: 1.7; white-space: pre-wrap; }

        .reply-input { width: 100%; border: 1px solid #d1d5db; border-radius: 10px; padding: 12px 14px; font: inherit; font-size: 14px; color: #1f2937; line-height: 1.6; resize: vertical; min-height: 100px; }
        .reply-input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
        .reply-input::placeholder { color: #9ca3af; }

        .action-row { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
        .btn-save, .btn-email, .btn-whatsapp { display: inline-flex; align-items: center; gap: 6px; border: none; border-radius: 8px; padding: 9px 16px; font-size: 13px; font-weight: 700; cursor: pointer; white-space: nowrap; }
        .btn-save { background: #4f46e5; color: #fff; }
        .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-save:hover:not(:disabled) { background: #4338ca; }
        .btn-email { background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; }
        .btn-email:hover:not(:disabled) { background: #e5e7eb; }
        .btn-email:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-whatsapp { background: #22c55e; color: #fff; }
        .btn-whatsapp:hover:not(:disabled) { background: #16a34a; }
        .btn-whatsapp:disabled { opacity: 0.5; cursor: not-allowed; }

        .saved-box { padding: 14px 16px; border: 1px solid #d1fae5; border-radius: 10px; background: #ecfdf5; }
        .saved-box p { margin: 0; font-size: 14px; color: #065f46; line-height: 1.7; white-space: pre-wrap; }

        .danger-zone { border-top: 1px solid #f3f4f6; padding-top: 16px; }
        .btn-delete { border: 1px solid #fecaca; border-radius: 8px; padding: 8px 16px; background: #fff; color: #dc2626; font-size: 13px; font-weight: 600; cursor: pointer; }
        .btn-delete:hover { background: #fef2f2; }

        .empty-detail { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 12px; color: #9ca3af; font-size: 14px; }

        @media (max-width: 900px) {
          .quotes-layout { grid-template-columns: 1fr; grid-template-rows: 280px 1fr; }
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
        if (restrictions.includes('quotes-manager')) {
          return { redirect: { destination: '/portal-secure-99x', permanent: false } }
        }
      }
    }

    const db = getDbPool()
    const [rows] = await db.query(`
      SELECT * FROM quotes
      WHERE deleted_at IS NULL
      ORDER BY
        CASE status WHEN 'new' THEN 0 WHEN 'in_progress' THEN 1 ELSE 2 END,
        created_at DESC
      LIMIT 200
    `)
    return { props: { initialQuotes: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { initialQuotes: [] } }
  }
}

export default QuotesManagerPage
