import React, { useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from '../SecureAdminLayout'
import { getDbPool } from '../../../lib/server/db'

const ROLES = [
  { value: 'super_admin', label: 'Super Admin' },
  { value: 'senior_admin', label: 'Senior Admin' },
  { value: 'junior_admin', label: 'Junior Admin' },
]

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'

const AdminUsersPage = ({ users = [], currentAdminId = null }) => {
  const [items, setItems] = useState(users)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '', role: 'junior_admin', profile_image: '' })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const openAdd = () => {
    setEditing(null)
    setForm({ name: '', username: '', email: '', password: '', role: 'junior_admin', profile_image: '' })
    setShowForm(true)
    setError('')
  }

  const openEdit = (user) => {
    setEditing(user.id)
    setForm({ name: user.name, username: user.username || '', email: user.email, password: '', role: user.role, profile_image: user.profile_image || '' })
    setShowForm(true)
    setError('')
  }

  const closeForm = () => { setShowForm(false); setEditing(null); setError('') }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/admin/uploads', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) setForm((p) => Object.assign({}, p, { profile_image: data.url }))
    } catch (err) { console.error(err) }
  }

  const handleSave = async () => {
    setSaving(true)
    setError('')

    // Password policy: min 10 chars, upper, lower, number, symbol
    if (form.password) {
      const pwd = form.password
      if (pwd.length < 10) { setError('Password must be at least 10 characters.'); setSaving(false); return }
      if (!/[A-Z]/.test(pwd)) { setError('Password must contain an uppercase letter.'); setSaving(false); return }
      if (!/[a-z]/.test(pwd)) { setError('Password must contain a lowercase letter.'); setSaving(false); return }
      if (!/[0-9]/.test(pwd)) { setError('Password must contain a number.'); setSaving(false); return }
      if (!/[^A-Za-z0-9]/.test(pwd)) { setError('Password must contain a special character.'); setSaving(false); return }
    }

    try {
      if (editing) {
        // Update - don't send password if empty
        const values = { name: form.name, username: form.username, email: form.email, role: form.role, profile_image: form.profile_image }
        if (form.password) values.password = form.password
        const res = await fetch(`/api/admin/tables/admin_users/${editing}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ values }) })
        const data = await res.json()
        if (data.success) {
          setItems((prev) => prev.map((u) => u.id === editing ? Object.assign({}, u, values) : u))
          closeForm()
        } else { setError(data.error || 'Update failed') }
      } else {
        // Create
        if (!form.password) { setError('Password is required for new admin'); setSaving(false); return }
        const values = { name: form.name, username: form.username, email: form.email, password: form.password, role: form.role, profile_image: form.profile_image }
        const res = await fetch('/api/admin/tables/admin_users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ values }) })
        const data = await res.json()
        if (data.success) {
          setItems((prev) => [...prev, Object.assign({}, values, { id: data.insertedId, created_at: new Date().toISOString() })])
          closeForm()
        } else { setError(data.error || 'Create failed') }
      }
    } catch (e) { setError('Network error') }
    finally { setSaving(false) }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this admin user?')) return
    try {
      await fetch(`/api/admin/tables/admin_users/${id}`, { method: 'DELETE' })
      setItems((prev) => prev.filter((u) => u.id !== id))
    } catch (e) { console.error(e) }
  }

  return (
    <SecureAdminLayout>
      <Head><title>Admin Users | MIS Admin</title></Head>

      <div className="admin-users-page">
        <header className="page-head">
          <div>
            <h1>Admin Users</h1>
            <p>{items.length} admin{items.length !== 1 ? 's' : ''} registered</p>
          </div>
          <button className="btn-add" onClick={openAdd}>+ Add Admin</button>
        </header>

        {/* Users Grid */}
        <div className="users-grid">
          {items.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.profile_image ? <img src={user.profile_image} alt={user.name} /> : <span>{(user.name || 'A').charAt(0).toUpperCase()}</span>}
              </div>
              <div className="user-info">
                <strong>{user.name}</strong>
                <p className="user-email">{user.email}</p>
                <span className={`role-badge role-${user.role}`}>{ROLES.find(r => r.value === user.role)?.label || user.role}</span>
              </div>
              <div className="user-meta">
                <span>Joined: {formatDate(user.created_at)}</span>
                {user.last_login_ip && <span>Last IP: {user.last_login_ip}</span>}
              </div>
              <div className="user-actions">
                <button className="act-btn edit" onClick={() => openEdit(user)}>Edit</button>
                {user.id !== currentAdminId && <button className="act-btn del" onClick={() => handleDelete(user.id)}>Delete</button>}
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Modal */}
        {showForm && (
          <div className="modal-overlay" onClick={closeForm}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{editing ? 'Edit Admin User' : 'Add New Admin'}</h2>
                <button className="close-x" onClick={closeForm}>✕</button>
              </div>
              <div className="modal-body">
                {error && <p className="form-error">{error}</p>}

                <div className="avatar-upload">
                  <div className="avatar-preview">
                    {form.profile_image ? <img src={form.profile_image} alt="Profile" /> : <span>{(form.name || 'A').charAt(0).toUpperCase()}</span>}
                  </div>
                  <label className="upload-btn">
                    Upload Photo
                    <input type="file" accept="image/*" onChange={handleUpload} hidden />
                  </label>
                  {form.profile_image && <button type="button" className="remove-btn" onClick={() => setForm((p) => Object.assign({}, p, { profile_image: '' }))}>Remove</button>}
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }} value={form.name} onChange={(e) => setForm((p) => Object.assign({}, p, { name: e.target.value }))} placeholder="Enter full name" required />
                  </div>
                  <div className="form-field">
                    <label>Username</label>
                    <input style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }} value={form.username} onChange={(e) => setForm((p) => Object.assign({}, p, { username: e.target.value }))} placeholder="Optional username" />
                  </div>
                  <div className="form-field">
                    <label>Email Address *</label>
                    <input style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }} type="email" value={form.email} onChange={(e) => setForm((p) => Object.assign({}, p, { email: e.target.value }))} placeholder="admin@company.com" required />
                  </div>
                  <div className="form-field">
                    <label>{editing ? 'New Password (leave blank to keep)' : 'Password *'}</label>
                    <input style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }} type="password" value={form.password} onChange={(e) => setForm((p) => Object.assign({}, p, { password: e.target.value }))} placeholder={editing ? 'Leave blank to keep current' : 'Min 8 characters'} />
                  </div>
                  <div className="form-field full-width">
                    <label>Role *</label>
                    <select style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit', cursor: 'pointer' }} value={form.role} onChange={(e) => setForm((p) => Object.assign({}, p, { role: e.target.value }))}>
                      {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn-cancel" onClick={closeForm}>Cancel</button>
                <button className="btn-save" onClick={handleSave} disabled={saving || !form.name || !form.email}>
                  {saving ? 'Saving...' : editing ? 'Save Changes' : 'Create Admin'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-users-page { display: grid; gap: 20px; }
        .page-head { display: flex; justify-content: space-between; align-items: center; }
        .page-head h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .page-head p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
        .btn-add { border: none; border-radius: 10px; padding: 10px 20px; background: #4f46e5; color: #fff; font-weight: 700; font-size: 14px; cursor: pointer; }
        .btn-add:hover { background: #4338ca; }

        .users-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px; }
        .user-card { border: 1px solid #e5e7eb; border-radius: 14px; background: #fff; padding: 20px; display: flex; flex-direction: column; gap: 12px; transition: box-shadow 0.2s; }
        .user-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .user-avatar { width: 56px; height: 56px; border-radius: 50%; overflow: hidden; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; }
        .user-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .user-avatar span { color: #fff; font-size: 22px; font-weight: 800; }
        .user-info strong { display: block; font-size: 16px; color: #111827; }
        .user-email { margin: 2px 0 6px; font-size: 13px; color: #6b7280; }
        .role-badge { display: inline-block; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; text-transform: uppercase; }
        .role-super_admin { background: #fef3c7; color: #92400e; }
        .role-senior_admin { background: #dbeafe; color: #1e40af; }
        .role-junior_admin { background: #f3f4f6; color: #374151; }
        .user-meta { font-size: 12px; color: #9ca3af; display: flex; flex-direction: column; gap: 2px; }
        .user-actions { display: flex; gap: 8px; margin-top: auto; }
        .act-btn { border-radius: 8px; padding: 6px 14px; font-size: 12px; font-weight: 600; cursor: pointer; }
        .act-btn.edit { border: 1px solid #c7d2fe; background: #eef2ff; color: #4338ca; }
        .act-btn.edit:hover { background: #e0e7ff; }
        .act-btn.del { border: 1px solid #fecaca; background: #fef2f2; color: #dc2626; }
        .act-btn.del:hover { background: #fee2e2; }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-card { width: 100%; max-width: 560px; background: #fff; border-radius: 16px; box-shadow: 0 24px 48px rgba(0,0,0,0.15); overflow: hidden; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; border-bottom: 1px solid #f1f5f9; }
        .modal-header h2 { margin: 0; font-size: 18px; color: #111827; }
        .close-x { border: none; background: none; font-size: 20px; cursor: pointer; color: #9ca3af; }
        .modal-body { padding: 24px; display: flex; flex-direction: column; gap: 20px; max-height: 70vh; overflow-y: auto; }
        .modal-footer { display: flex; justify-content: flex-end; gap: 10px; padding: 16px 24px; border-top: 1px solid #f1f5f9; }

        .form-error { margin: 0; padding: 10px 14px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #dc2626; font-size: 13px; font-weight: 600; }

        .avatar-upload { display: flex; align-items: center; gap: 14px; }
        .avatar-preview { width: 64px; height: 64px; border-radius: 50%; overflow: hidden; background: linear-gradient(135deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .avatar-preview img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-preview span { color: #fff; font-size: 26px; font-weight: 800; }
        .upload-btn { padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 13px; font-weight: 600; cursor: pointer; }
        .upload-btn:hover { background: #f3f4f6; }
        .remove-btn { border: none; background: none; color: #dc2626; font-size: 12px; font-weight: 600; cursor: pointer; }

        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-field { display: flex; flex-direction: column; gap: 5px; }
        .form-field.full-width { grid-column: span 2; }
        .form-field label { font-size: 12px; font-weight: 700; color: #374151; }

        .btn-cancel { padding: 10px 20px; border: 1px solid #d1d5db; border-radius: 10px; background: #fff; color: #374151; font-weight: 600; cursor: pointer; font-size: 14px; }
        .btn-save { padding: 10px 20px; border: none; border-radius: 10px; background: #4f46e5; color: #fff; font-weight: 700; cursor: pointer; font-size: 14px; }
        .btn-save:disabled { opacity: 0.5; }
        .btn-save:hover:not(:disabled) { background: #4338ca; }

        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr; } .form-field.full-width { grid-column: auto; } .users-grid { grid-template-columns: 1fr; } }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async ({ req }) => {
  try {
    const { verifyAdminSessionToken, ROLE_RESTRICTIONS } = await import('../../../lib/auth/session')
    const db = getDbPool()

    // Check role access
    const cookieStr = req.headers?.cookie || ''
    const match = cookieStr.match(/mis_admin_session=([^;]+)/)
    let currentAdminId = null
    let role = 'junior_admin'

    if (match) {
      const payload = await verifyAdminSessionToken(decodeURIComponent(match[1]))
      if (payload) {
        currentAdminId = Number(payload.sub)
        role = payload.role || 'junior_admin'
      }
    }

    // Block access if role is restricted from admin_users
    const restrictions = ROLE_RESTRICTIONS[role] || []
    if (restrictions.includes('admin_users')) {
      return { redirect: { destination: '/portal-secure-99x', permanent: false } }
    }

    const [rows] = await db.query('SELECT id, name, username, email, role, profile_image, last_login_ip, created_at FROM admin_users WHERE deleted_at IS NULL ORDER BY id ASC')
    return { props: { users: JSON.parse(JSON.stringify(rows)), currentAdminId } }
  } catch (e) {
    return { props: { users: [], currentAdminId: null } }
  }
}

export default AdminUsersPage
