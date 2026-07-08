import React, { useState } from 'react'
import Head from 'next/head'
import SecureAdminLayout from '../SecureAdminLayout'
import { getDbPool } from '../../../lib/server/db'

const CategorySpecsPage = ({ categories = [], specs = [] }) => {
  const [items, setItems] = useState(specs)
  const [filterCat, setFilterCat] = useState('')
  const [addingTo, setAddingTo] = useState(null) // category id
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ spec_name: '', spec_label: '', display_order: 0, is_filterable: 1 })
  const [saving, setSaving] = useState(false)

  const filteredItems = filterCat ? items.filter((s) => String(s.category_id) === filterCat) : items
  const groupedByCategory = {}
  filteredItems.forEach((spec) => {
    const catId = spec.category_id
    if (!groupedByCategory[catId]) groupedByCategory[catId] = []
    groupedByCategory[catId].push(spec)
  })

  const getCategoryName = (catId) => {
    const cat = categories.find((c) => c.id === catId)
    return cat ? cat.name : `Category #${catId}`
  }

  const startAdd = (catId) => {
    setAddingTo(catId)
    setEditing(null)
    setForm({ spec_name: '', spec_label: '', display_order: 0, is_filterable: 1 })
  }

  const startEdit = (spec) => {
    setEditing(spec.id)
    setAddingTo(null)
    setForm({ spec_name: spec.spec_name, spec_label: spec.spec_label, display_order: spec.display_order || 0, is_filterable: spec.is_filterable ? 1 : 0 })
  }

  const cancelForm = () => { setAddingTo(null); setEditing(null) }

  const generateSpecName = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const saveSpec = async () => {
    setSaving(true)
    try {
      if (editing) {
        const res = await fetch(`/api/admin/tables/category_specs/${editing}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ values: form }),
        })
        if (res.ok) {
          setItems((prev) => prev.map((s) => s.id === editing ? Object.assign({}, s, form) : s))
          cancelForm()
        }
      } else {
        const values = Object.assign({}, form, { category_id: addingTo })
        const res = await fetch('/api/admin/tables/category_specs', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ values }),
        })
        const data = await res.json()
        if (data.success) {
          setItems((prev) => [...prev, Object.assign({}, values, { id: data.insertedId })])
          cancelForm()
        }
      }
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const deleteSpec = async (id) => {
    if (!window.confirm('Delete this specification field?')) return
    try {
      await fetch(`/api/admin/tables/category_specs/${id}`, { method: 'DELETE' })
      setItems((prev) => prev.filter((s) => s.id !== id))
    } catch (e) { console.error(e) }
  }

  // Get all categories that have specs
  const catsWithSpecs = [...new Set(items.map((s) => s.category_id))]

  return (
    <SecureAdminLayout>
      <Head><title>Category Specs | Admin</title></Head>

      <div className="specs-page">
        <header className="specs-header">
          <div>
            <h1>Category Specifications</h1>
            <p>Manage specification fields for each product category.</p>
          </div>
        </header>

        {/* Filter */}
        <div className="filter-row">
          <label className="filter-label">Filter by Category:</label>
          <select className="filter-select" value={filterCat} onChange={(e) => setFilterCat(e.target.value)}>
            <option value="">All Categories ({items.length} specs)</option>
            {categories.filter((c) => !c.parent_id).map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name} ({items.filter((s) => s.category_id === cat.id).length})</option>
            ))}
          </select>
        </div>

        {/* Add to a category - at top */}
        {!addingTo && !editing && (
          <div className="add-section">
            <h4>Add specs to a category:</h4>
            <div className="add-cat-grid">
              {categories.filter((c) => !c.parent_id).map((cat) => (
                <button key={cat.id} className="add-cat-btn" onClick={() => startAdd(cat.id)}>
                  + {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Form */}
        {(addingTo || editing) && (
          <div className="form-card">
            <h3>{editing ? 'Edit Specification' : `Add Spec to "${getCategoryName(addingTo)}"`}</h3>
            <div className="form-grid">
              <div className="form-field">
                <label>Spec Label (Display Name)</label>
                <input value={form.spec_label} onChange={(e) => setForm((p) => Object.assign({}, p, { spec_label: e.target.value, spec_name: editing ? p.spec_name : generateSpecName(e.target.value) }))} placeholder="e.g. Processor Brand" />
              </div>
              <div className="form-field">
                <label>Spec Name (Key)</label>
                <input value={form.spec_name} onChange={(e) => setForm((p) => Object.assign({}, p, { spec_name: e.target.value }))} placeholder="e.g. processor-brand" />
              </div>
              <div className="form-field">
                <label>Order</label>
                <input type="number" value={form.display_order} onChange={(e) => setForm((p) => Object.assign({}, p, { display_order: Number(e.target.value) }))} />
              </div>
              <div className="form-field">
                <label>Filterable</label>
                <select value={form.is_filterable} onChange={(e) => setForm((p) => Object.assign({}, p, { is_filterable: Number(e.target.value) }))}>
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-save" onClick={saveSpec} disabled={saving || !form.spec_label || !form.spec_name}>{saving ? 'Saving...' : editing ? 'Update' : 'Add Spec'}</button>
              <button className="btn-cancel" onClick={cancelForm}>Cancel</button>
            </div>
          </div>
        )}

        {/* Specs grouped by category */}
        <div className="specs-list">
          {(filterCat ? [filterCat] : catsWithSpecs).map((catId) => {
            const catSpecs = (groupedByCategory[catId] || []).sort((a, b) => a.display_order - b.display_order)
            if (catSpecs.length === 0 && !filterCat) return null
            return (
              <div key={catId} className="cat-group">
                <div className="cat-group-header">
                  <h3>{getCategoryName(Number(catId))}</h3>
                  <span className="spec-count">{catSpecs.length} spec{catSpecs.length !== 1 ? 's' : ''}</span>
                  <button className="btn-add" onClick={() => startAdd(Number(catId))}>+ Add Spec</button>
                </div>
                {catSpecs.length > 0 ? (
                  <table className="spec-table">
                    <thead>
                      <tr><th>Label</th><th>Key</th><th>Order</th><th>Filterable</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                      {catSpecs.map((spec) => (
                        <tr key={spec.id}>
                          <td className="td-label">{spec.spec_label}</td>
                          <td className="td-key">{spec.spec_name}</td>
                          <td>{spec.display_order}</td>
                          <td><span className={`pill ${spec.is_filterable ? 'yes' : 'no'}`}>{spec.is_filterable ? 'Yes' : 'No'}</span></td>
                          <td className="td-actions">
                            <button className="act-btn edit" onClick={() => startEdit(spec)}>Edit</button>
                            <button className="act-btn del" onClick={() => deleteSpec(spec.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="empty-cat">No specs yet for this category.</p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .specs-page { display: grid; gap: 20px; }
        .specs-header h1 { margin: 0; font-size: 24px; color: #1f2937; }
        .specs-header p { margin: 4px 0 0; color: #6b7280; font-size: 14px; }

        .filter-row { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .filter-label { font-size: 13px; font-weight: 600; color: #374151; }
        .filter-select { padding: 10px 14px; border: 2px solid #c7d2fe; border-radius: 10px; background: #fafbff; font: inherit; font-size: 14px; min-width: 240px; cursor: pointer; }
        .filter-select:focus { outline: none; border-color: #6366f1; }

        .form-card { border: 1px solid #e5e7eb; border-radius: 14px; background: #fff; padding: 20px; }
        .form-card h3 { margin: 0 0 14px; font-size: 16px; color: #111827; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr 100px 100px; gap: 12px; }
        .form-field { display: flex; flex-direction: column; gap: 4px; }
        .form-field label { font-size: 11px; font-weight: 700; color: #374151; text-transform: uppercase; }
        .form-field input, .form-field select { height: 40px; border: 2px solid #c7d2fe; border-radius: 8px; padding: 0 12px; font: inherit; font-size: 14px; background: #fafbff; }
        .form-field input:focus, .form-field select:focus { outline: none; border-color: #6366f1; }
        .form-actions { display: flex; gap: 8px; margin-top: 14px; }
        .btn-save { border: none; border-radius: 8px; padding: 9px 18px; background: #4f46e5; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; }
        .btn-save:disabled { opacity: 0.5; }
        .btn-cancel { border: 1px solid #d1d5db; border-radius: 8px; padding: 9px 18px; background: #fff; color: #374151; font-weight: 600; font-size: 13px; cursor: pointer; }

        .specs-list { display: grid; gap: 16px; }
        .cat-group { border: 1px solid #e5e7eb; border-radius: 14px; background: #fff; overflow: hidden; }
        .cat-group-header { display: flex; align-items: center; gap: 12px; padding: 14px 18px; background: #f9fafb; border-bottom: 1px solid #e5e7eb; }
        .cat-group-header h3 { margin: 0; font-size: 15px; color: #111827; font-weight: 700; }
        .spec-count { font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 2px 10px; border-radius: 999px; }
        .btn-add { margin-left: auto; border: none; border-radius: 8px; padding: 6px 14px; background: #4f46e5; color: #fff; font-size: 12px; font-weight: 700; cursor: pointer; }
        .btn-add:hover { background: #4338ca; }

        .spec-table { width: 100%; border-collapse: collapse; }
        .spec-table th { text-align: left; padding: 10px 18px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7280; font-weight: 700; border-bottom: 1px solid #f3f4f6; }
        .spec-table td { padding: 12px 18px; border-bottom: 1px solid #f9fafb; font-size: 14px; color: #374151; }
        .spec-table tr:last-child td { border-bottom: none; }
        .spec-table tr:hover { background: #fafbff; }
        .td-label { font-weight: 600; color: #111827; }
        .td-key { font-family: monospace; font-size: 13px; color: #6366f1; }
        .td-actions { display: flex; gap: 6px; }
        .pill { padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; }
        .pill.yes { background: #d1fae5; color: #065f46; }
        .pill.no { background: #f3f4f6; color: #6b7280; }
        .act-btn { border-radius: 6px; padding: 5px 10px; font-size: 12px; font-weight: 600; cursor: pointer; }
        .act-btn.edit { border: 1px solid #c7d2fe; background: #eef2ff; color: #4338ca; }
        .act-btn.edit:hover { background: #e0e7ff; }
        .act-btn.del { border: 1px solid #fecaca; background: #fef2f2; color: #dc2626; }
        .act-btn.del:hover { background: #fee2e2; }
        .empty-cat { margin: 0; padding: 16px 18px; color: #9ca3af; font-size: 14px; }
        .empty-state { padding: 40px; text-align: center; border: 1px dashed #d1d5db; border-radius: 14px; }
        .empty-state p { margin: 0; color: #6b7280; }

        .add-section { padding: 20px; border: 1px solid #e5e7eb; border-radius: 14px; background: #fafbff; }
        .add-section h4 { margin: 0 0 12px; font-size: 14px; color: #374151; }
        .add-cat-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .add-cat-btn { border: 1px solid #d1d5db; border-radius: 8px; padding: 6px 14px; background: #fff; color: #374151; font-size: 12px; font-weight: 600; cursor: pointer; }
        .add-cat-btn:hover { border-color: #6366f1; color: #4f46e5; background: #eef2ff; }

        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr; }
          .filter-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export const getServerSideProps = async () => {
  try {
    const db = getDbPool()
    const [specs] = await db.query('SELECT * FROM category_specs ORDER BY category_id ASC, display_order ASC')
    const [cats] = await db.query('SELECT id, name, parent_id FROM categories WHERE deleted_at IS NULL ORDER BY display_order ASC, name ASC')
    return { props: { specs: JSON.parse(JSON.stringify(specs)), categories: JSON.parse(JSON.stringify(cats)) } }
  } catch (e) {
    return { props: { specs: [], categories: [] } }
  }
}

export default CategorySpecsPage
