import React, { useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from './SecureAdminLayout'
import { getDbPool } from '../../lib/server/db'

const CategoryManager = ({ categories = [] }) => {
  const [items, setItems] = useState(categories)
  const [expanded, setExpanded] = useState({})
  const [editing, setEditing] = useState(null)
  const [adding, setAdding] = useState(null) // null or { parentId: null } or { parentId: 3 }
  const [formData, setFormData] = useState({ name: '', slug: '', status: 'active' })
  const [saving, setSaving] = useState(false)

  const parents = items.filter((c) => !c.parent_id)
  const getChildren = (parentId) => items.filter((c) => c.parent_id === parentId).sort((a, b) => a.display_order - b.display_order)

  const toggleExpand = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }))

  const generateSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const startAdd = (parentId) => {
    setAdding({ parentId })
    setEditing(null)
    setFormData({ name: '', slug: '', status: 'active', icon_url: '' })
  }

  const startEdit = (cat) => {
    setEditing(cat.id)
    setAdding(null)
    setFormData({ name: cat.name, slug: cat.slug, status: cat.status || 'active', icon_url: cat.icon_url || '' })
  }

  const cancelForm = () => { setAdding(null); setEditing(null); setFormData({ name: '', slug: '', status: 'active', icon_url: '' }) }

  const saveCategory = async () => {
    setSaving(true)
    const method = editing ? 'PUT' : 'POST'
    const body = { ...formData, parentId: adding?.parentId || null, id: editing || undefined }

    try {
      const res = await fetch('/api/admin/category-manage', { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (res.ok) {
        const data = await res.json()
        if (editing) {
          setItems((prev) => prev.map((c) => c.id === editing ? { ...c, ...formData } : c))
        } else {
          setItems((prev) => [...prev, { id: data.id, parent_id: adding?.parentId || null, ...formData, display_order: 99 }])
        }
        cancelForm()
      }
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/admin/uploads', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) setFormData((p) => ({ ...p, icon_url: data.url }))
    } catch (err) { console.error(err) }
  }

  const deleteCategory = async (id) => {
    const children = getChildren(id)
    const msg = children.length > 0
      ? `This category has ${children.length} subcategories. Delete all?`
      : 'Delete this category?'
    if (!window.confirm(msg)) return

    try {
      await fetch('/api/admin/category-manage', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
      setItems((prev) => prev.filter((c) => c.id !== id && c.parent_id !== id))
    } catch (e) { console.error(e) }
  }

  return (
    <SecureAdminLayout>
      <Head><title>Category Manager | Admin</title></Head>

      <div className="cat-mgr">
        <div className="mgr-header">
          <div>
            <h1>Category Manager</h1>
            <p>{parents.length} main categories, {items.length - parents.length} subcategories</p>
          </div>
          <button className="add-main-btn" onClick={() => startAdd(null)}>+ Add Main Category</button>
        </div>

        {/* Add/Edit Form */}
        {(adding || editing) && (
          <div className="form-card">
            <h3>{editing ? 'Edit Category' : adding?.parentId ? `Add Subcategory under "${parents.find(p => p.id === adding.parentId)?.name || 'Parent'}"` : 'Add Main Category'}</h3>
            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input value={formData.name} onChange={(e) => { setFormData((p) => ({ ...p, name: e.target.value, slug: editing ? p.slug : generateSlug(e.target.value) })) }} placeholder="Category name" />
              </div>
              <div className="form-field">
                <label>Slug</label>
                <input value={formData.slug} onChange={(e) => setFormData((p) => ({ ...p, slug: e.target.value }))} placeholder="url-slug" />
              </div>
              <div className="form-field">
                <label>Status</label>
                <select value={formData.status} onChange={(e) => setFormData((p) => ({ ...p, status: e.target.value }))}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            {/* Logo / Icon */}
            {(!adding?.parentId) && (
              <div className="logo-field">
                <label>Category Logo / Icon</label>
                <div className="logo-row">
                  {formData.icon_url && <img src={formData.icon_url} alt="Logo" className="logo-preview" />}
                  <input type="text" value={formData.icon_url} onChange={(e) => setFormData((p) => ({ ...p, icon_url: e.target.value }))} placeholder="Paste image URL or upload" className="logo-url-input" />
                  <label className="upload-label">
                    Upload
                    <input type="file" accept="image/*" onChange={handleLogoUpload} hidden />
                  </label>
                  {formData.icon_url && <button type="button" className="remove-logo" onClick={() => setFormData((p) => ({ ...p, icon_url: '' }))}>✕</button>}
                </div>
              </div>
            )}
            <div className="form-actions">
              <button className="save-btn" onClick={saveCategory} disabled={saving || !formData.name}>{saving ? 'Saving...' : editing ? 'Update' : 'Create'}</button>
              <button className="cancel-btn" onClick={cancelForm}>Cancel</button>
            </div>
          </div>
        )}

        {/* Category Tree */}
        <div className="cat-tree">
          {parents.sort((a, b) => a.display_order - b.display_order).map((parent) => {
            const children = getChildren(parent.id)
            const isOpen = expanded[parent.id]
            return (
              <div key={parent.id} className="tree-parent">
                <div className="tree-row parent-row">
                  <button className="expand-btn" onClick={() => toggleExpand(parent.id)}>
                    {children.length > 0 ? (isOpen ? '▼' : '▶') : '•'}
                  </button>
                  {parent.icon_url && <img src={parent.icon_url} alt="" className="tree-icon" />}
                  <span className="cat-name">{parent.name}</span>
                  <span className="cat-slug">/{parent.slug}</span>
                  <span className="cat-count">{children.length} sub</span>
                  <span className={`status-dot ${parent.status === 'active' ? 'active' : 'inactive'}`} />
                  <div className="row-actions">
                    <button className="action-sm" onClick={() => startAdd(parent.id)}>+ Sub</button>
                    <button className="action-sm" onClick={() => startEdit(parent)}>Edit</button>
                    <button className="action-sm danger" onClick={() => deleteCategory(parent.id)}>Delete</button>
                  </div>
                </div>
                {isOpen && children.length > 0 && (
                  <div className="tree-children">
                    {children.map((child) => (
                      <div key={child.id} className="tree-row child-row">
                        <span className="child-indent">└</span>
                        <span className="cat-name">{child.name}</span>
                        <span className="cat-slug">/{child.slug}</span>
                        <span className={`status-dot ${child.status === 'active' ? 'active' : 'inactive'}`} />
                        <div className="row-actions">
                          <button className="action-sm" onClick={() => startEdit(child)}>Edit</button>
                          <button className="action-sm danger" onClick={() => deleteCategory(child.id)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .cat-mgr { display: grid; gap: 20px; }
        .mgr-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .mgr-header h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .mgr-header p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }
        .add-main-btn { border: none; border-radius: 8px; padding: 10px 18px; background: #4f46e5; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
        .add-main-btn:hover { background: #4338ca; }

        .form-card { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; padding: 20px; }
        .form-card h3 { margin: 0 0 14px; font-size: 16px; color: #111827; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr auto; gap: 12px; }
        .form-field { display: flex; flex-direction: column; gap: 4px; }
        .form-field label { font-size: 12px; font-weight: 600; color: #374151; }
        .form-field input, .form-field select { height: 38px; border: 1px solid #d1d5db; border-radius: 8px; padding: 0 12px; font: inherit; font-size: 14px; }
        .form-field input:focus, .form-field select:focus { outline: none; border-color: #4f46e5; }
        .form-actions { display: flex; gap: 8px; margin-top: 14px; }

        .logo-field { margin-top: 12px; }
        .logo-field > label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 6px; }
        .logo-row { display: flex; align-items: center; gap: 10px; }
        .logo-preview { width: 40px; height: 40px; border-radius: 8px; object-fit: contain; border: 1px solid #e5e7eb; background: #f9fafb; }
        .logo-url-input { flex: 1; height: 38px; border: 1px solid #d1d5db; border-radius: 8px; padding: 0 12px; font-size: 13px; }
        .logo-url-input:focus { outline: none; border-color: #4f46e5; }
        .upload-label { padding: 8px 14px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; font-size: 12px; font-weight: 600; cursor: pointer; white-space: nowrap; }
        .upload-label:hover { background: #f3f4f6; }
        .remove-logo { border: none; background: transparent; color: #dc2626; font-size: 16px; cursor: pointer; padding: 4px; }

        .tree-icon { width: 28px; height: 28px; border-radius: 6px; object-fit: contain; border: 1px solid #e5e7eb; flex-shrink: 0; }
        .save-btn { border: none; border-radius: 8px; padding: 8px 18px; background: #4f46e5; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; }
        .save-btn:disabled { opacity: 0.5; }
        .cancel-btn { border: 1px solid #d1d5db; border-radius: 8px; padding: 8px 18px; background: #fff; color: #374151; font-weight: 600; font-size: 13px; cursor: pointer; }

        .cat-tree { border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; overflow: hidden; }
        .tree-parent { border-bottom: 1px solid #f3f4f6; }
        .tree-parent:last-child { border-bottom: none; }

        .tree-row { display: flex; align-items: center; gap: 10px; padding: 12px 16px; }
        .parent-row { background: #f9fafb; }
        .parent-row:hover { background: #f3f4f6; }
        .child-row { padding-left: 40px; }
        .child-row:hover { background: #fafbfe; }

        .expand-btn { border: none; background: transparent; cursor: pointer; font-size: 12px; color: #6b7280; width: 20px; }
        .child-indent { color: #d1d5db; font-size: 14px; width: 20px; }
        .cat-name { font-size: 14px; font-weight: 600; color: #111827; }
        .cat-slug { font-size: 12px; color: #9ca3af; }
        .cat-count { font-size: 11px; color: #6b7280; background: #f3f4f6; padding: 2px 8px; border-radius: 10px; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .status-dot.active { background: #10b981; }
        .status-dot.inactive { background: #ef4444; }

        .row-actions { margin-left: auto; display: flex; gap: 6px; }
        .action-sm { border: 1px solid #e5e7eb; border-radius: 6px; padding: 4px 10px; background: #fff; font-size: 11px; font-weight: 600; cursor: pointer; color: #374151; }
        .action-sm:hover { background: #f3f4f6; }
        .action-sm.danger { color: #dc2626; border-color: #fecaca; }
        .action-sm.danger:hover { background: #fef2f2; }

        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr; }
          .tree-row { flex-wrap: wrap; }
          .row-actions { width: 100%; margin-top: 6px; margin-left: 30px; }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async () => {
  try {
    const db = getDbPool()
    const [rows] = await db.query('SELECT id, parent_id, name, slug, icon_url, status, display_order FROM categories WHERE deleted_at IS NULL ORDER BY display_order ASC, name ASC')
    return { props: { categories: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { categories: [] } }
  }
}

export default CategoryManager
