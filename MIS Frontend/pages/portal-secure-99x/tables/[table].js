import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import SecureAdminLayout from '../SecureAdminLayout'
import { managedTableConfig } from '../../../lib/admin/managed-tables'

const getPrimaryColumn = (columns) =>
  columns.find((column) => column.isPrimary)?.columnName || 'id'

const isEditableColumn = (column) => {
  const blocked = ['created_at', 'updated_at', 'deleted_at']
  if (blocked.includes(column.columnName)) return false
  if (column.isAutoIncrement) return false
  return true
}

const toDisplayValue = (value) => {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

const formatFieldLabel = (name) =>
  String(name || '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())

const resolveInputType = (column) => {
  const type = String(column?.dataType || '').toLowerCase()

  if (
    ['int', 'bigint', 'smallint', 'mediumint', 'tinyint', 'decimal', 'double', 'float'].includes(
      type
    )
  ) {
    return 'number'
  }

  if (type === 'date') return 'date'
  if (type === 'datetime' || type === 'timestamp') return 'datetime-local'
  if (type === 'text' || type === 'longtext' || type === 'json') return 'textarea'

  return 'text'
}

const TableManagerPage = () => {
  const router = useRouter()
  const table = String(router.query.table || '').toLowerCase()

  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [searchText, setSearchText] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [createForm, setCreateForm] = useState({})
  const [editRowId, setEditRowId] = useState(null)
  const [editForm, setEditForm] = useState({})

  const tableMeta = useMemo(() => managedTableConfig.find((item) => item.name === table), [table])

  const editableColumns = useMemo(() => columns.filter(isEditableColumn), [columns])
  const primaryColumn = useMemo(() => getPrimaryColumn(columns), [columns])

  const filteredRows = useMemo(() => {
    const query = searchText.trim().toLowerCase()
    if (!query) return rows

    return rows.filter((row) =>
      columns.some((column) => toDisplayValue(row[column.columnName]).toLowerCase().includes(query))
    )
  }, [rows, columns, searchText])

  const loadTableData = async () => {
    if (!table) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin/tables/${table}`)
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Unable to load table data.')
      }

      setColumns(payload.columns || [])
      setRows(payload.rows || [])
      setCreateForm({})
      setEditRowId(null)
      setEditForm({})
      setShowForm(false)
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTableData()
  }, [table])

  const handleCreateChange = (columnName, value) => {
    setCreateForm((current) => ({
      ...current,
      [columnName]: value,
    }))
  }

  const handleEditChange = (columnName, value) => {
    setEditForm((current) => ({
      ...current,
      [columnName]: value,
    }))
  }

  const handleCreateSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      const response = await fetch(`/api/admin/tables/${table}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: createForm }),
      })
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Unable to create row.')
      }

      setSuccess('New record created successfully.')
      await loadTableData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSubmitting(false)
    }
  }

  const startEditRow = (row) => {
    const nextForm = {}
    editableColumns.forEach((column) => {
      nextForm[column.columnName] = toDisplayValue(row[column.columnName])
    })

    setEditRowId(row[primaryColumn])
    setEditForm(nextForm)
    setShowForm(true)
    setError('')
    setSuccess('')
  }

  const startCreate = () => {
    setEditRowId(null)
    setEditForm({})
    setCreateForm({})
    setShowForm(true)
    setError('')
    setSuccess('')
  }

  const closeForm = () => {
    setEditRowId(null)
    setEditForm({})
    setCreateForm({})
    setShowForm(false)
  }

  const handleUpdateRow = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      const response = await fetch(
        `/api/admin/tables/${table}/${encodeURIComponent(String(editRowId))}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ values: editForm }),
        }
      )
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Unable to update row.')
      }

      setSuccess('Row updated successfully.')
      await loadTableData()
    } catch (updateError) {
      setError(updateError.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteRow = async (rowId) => {
    const confirmed = window.confirm('Delete this row? This operation cannot be undone.')
    if (!confirmed) return

    setError('')
    setSuccess('')

    try {
      const response = await fetch(`/api/admin/tables/${table}/${encodeURIComponent(String(rowId))}`, {
        method: 'DELETE',
      })
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Unable to delete row.')
      }

      setSuccess('Row deleted successfully.')
      await loadTableData()
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  const activeFormValues = editRowId !== null ? editForm : createForm

  const handleFormChange = (columnName, value) => {
    if (editRowId !== null) {
      handleEditChange(columnName, value)
      return
    }

    handleCreateChange(columnName, value)
  }

  const rowCountLabel = `${filteredRows.length} of ${rows.length} rows`

  return (
    <SecureAdminLayout>
      <Head>
        <title>{tableMeta ? `${tableMeta.label} | MIS Admin` : 'Table Manager | MIS Admin'}</title>
      </Head>

      <section className="table-manager-shell">
        <header className="table-manager-head">
          <div>
            <p className="kicker">Managed Database Table</p>
            <h2>{tableMeta ? tableMeta.label : 'Table'}</h2>
            <p className="subline">Clean and guided CRUD interface for {table || 'selected table'}.</p>
          </div>
          <div className="head-actions">
            <button type="button" className="refresh-btn" onClick={loadTableData} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </button>
            <button type="button" className="create-btn" onClick={startCreate}>
              Add New Record
            </button>
          </div>
        </header>

        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}

        <section className="panel card rows-card">
          <div className="rows-header">
            <h3>Records</h3>
            <div className="rows-tools">
              <span className="row-count">{rowCountLabel}</span>
              <input
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search in current rows..."
              />
            </div>
          </div>

          {!filteredRows.length ? (
            <div className="empty-state">
              <p>No records match your search.</p>
              <button type="button" className="action-btn" onClick={() => setSearchText('')}>
                Clear Search
              </button>
            </div>
          ) : null}

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.columnName}>{formatFieldLabel(column.columnName)}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => {
                  const rowId = row[primaryColumn]
                  const safeRowId = rowId ?? `row-${index}`

                  return (
                    <tr key={safeRowId}>
                      {columns.map((column) => (
                        <td key={`${safeRowId}-${column.columnName}`}>
                          <span>{toDisplayValue(row[column.columnName])}</span>
                        </td>
                      ))}
                      <td className="actions">
                        <button type="button" className="action-btn" onClick={() => startEditRow(row)}>
                          Edit
                        </button>
                        <button
                          type="button"
                          className="action-btn danger"
                          onClick={() => handleDeleteRow(rowId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {showForm && (
          <section className="modal-backdrop" onClick={closeForm}>
            <div className="modal-card" onClick={(event) => event.stopPropagation()}>
              <div className="modal-head">
                <div>
                  <p className="kicker">{editRowId !== null ? 'Update Record' : 'Create Record'}</p>
                  <h3>{editRowId !== null ? 'Edit Existing Row' : 'Add New Row'}</h3>
                  {editRowId !== null && <p className="subline">Primary key: {String(editRowId)}</p>}
                </div>
                <button type="button" className="close-btn" onClick={closeForm}>
                  Close
                </button>
              </div>

              <form
                className="record-form"
                onSubmit={editRowId !== null ? handleUpdateRow : handleCreateSubmit}
              >
                <div className="form-grid">
                  {editableColumns.map((column) => {
                    const inputType = resolveInputType(column)
                    const currentValue = activeFormValues[column.columnName] || ''

                    return (
                      <label key={column.columnName} className="field">
                        <span>{formatFieldLabel(column.columnName)}</span>
                        <small>{column.columnType}</small>

                        {inputType === 'textarea' ? (
                          <textarea
                            rows="3"
                            value={currentValue}
                            onChange={(event) => handleFormChange(column.columnName, event.target.value)}
                            placeholder={column.columnType}
                          ></textarea>
                        ) : (
                          <input
                            type={inputType}
                            value={currentValue}
                            onChange={(event) => handleFormChange(column.columnName, event.target.value)}
                            placeholder={column.columnType}
                          />
                        )}
                      </label>
                    )
                  })}
                </div>

                <div className="form-actions">
                  <button type="button" className="action-btn muted" onClick={closeForm}>
                    Cancel
                  </button>
                  <button type="submit" className="action-btn primary" disabled={submitting}>
                    {submitting
                      ? 'Saving...'
                      : editRowId !== null
                      ? 'Save Changes'
                      : 'Create Record'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}
      </section>

      <style jsx>{`
        .table-manager-shell {
          display: grid;
          gap: 16px;
        }

        .table-manager-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .head-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .kicker {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7f7f95;
        }

        h2 {
          margin: 6px 0 4px;
          font-size: 30px;
          color: #2e2d3f;
        }

        .subline {
          margin: 0;
          color: #73728f;
        }

        .refresh-btn {
          border: 0;
          border-radius: 10px;
          padding: 10px 14px;
          background: #8a5dff;
          color: #ffffff;
          cursor: pointer;
          font-weight: 700;
        }

        .create-btn {
          border: 0;
          border-radius: 10px;
          padding: 10px 14px;
          background: #2f3d7a;
          color: #ffffff;
          cursor: pointer;
          font-weight: 700;
        }

        .refresh-btn:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .alert {
          border-radius: 10px;
          padding: 10px 12px;
          font-weight: 600;
        }

        .alert.error {
          background: #ffe3e7;
          color: #ab2d44;
        }

        .alert.success {
          background: #dbffe8;
          color: #1f8a52;
        }

        .card {
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e6e3f5;
          padding: 16px;
          box-shadow: 0 8px 24px rgba(34, 27, 72, 0.05);
        }

        h3 {
          margin: 0 0 12px;
          color: #2e2d3f;
        }

        .rows-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 10px;
        }

        .rows-tools {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .row-count {
          color: #68678a;
          font-size: 13px;
          font-weight: 700;
        }

        .rows-tools input {
          width: 260px;
          border: 1px solid #d6d2eb;
          border-radius: 10px;
          padding: 9px 10px;
          background: #fcfcff;
          color: #29293d;
          font: inherit;
        }

        .empty-state {
          border: 1px dashed #cfcae8;
          border-radius: 10px;
          padding: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .empty-state p {
          margin: 0;
          color: #666585;
        }

        .record-form {
          display: grid;
          gap: 12px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .field {
          display: grid;
          gap: 6px;
        }

        .field span {
          font-size: 12px;
          font-weight: 700;
          color: #626280;
        }

        .field small {
          margin-top: -3px;
          color: #8b89a8;
          font-size: 11px;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #d6d2eb;
          border-radius: 8px;
          padding: 8px;
          background: #fbfaff;
          color: #29293d;
          font: inherit;
          resize: vertical;
        }

        .table-wrap {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 920px;
        }

        th,
        td {
          border-bottom: 1px solid #f0eef8;
          padding: 10px;
          text-align: left;
          vertical-align: top;
          font-size: 13px;
        }

        th {
          background: #f4f1ff;
          color: #565273;
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 0.06em;
          position: sticky;
          top: 0;
        }

        .actions {
          display: flex;
          gap: 6px;
          min-width: 170px;
        }

        .action-btn {
          border: 1px solid #d8d3ef;
          border-radius: 8px;
          padding: 7px 10px;
          background: #ffffff;
          color: #393657;
          cursor: pointer;
          font-weight: 700;
        }

        .action-btn.primary {
          width: fit-content;
          border-color: #8a5dff;
          background: #8a5dff;
          color: #ffffff;
        }

        .action-btn.danger {
          border-color: #d64666;
          color: #d64666;
        }

        .action-btn.muted {
          border-color: #bcc1d8;
          color: #626d89;
        }

        .action-btn:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(26, 21, 45, 0.36);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 80;
        }

        .modal-card {
          width: min(960px, 100%);
          max-height: 90vh;
          overflow: auto;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #e8e3fb;
          box-shadow: 0 24px 60px rgba(34, 27, 72, 0.24);
          padding: 16px;
        }

        .modal-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .close-btn {
          border: 1px solid #d8d3ef;
          border-radius: 8px;
          padding: 8px 10px;
          background: #ffffff;
          color: #393657;
          cursor: pointer;
          font-weight: 700;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 8px;
        }

        @media (max-width: 1100px) {
          .form-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rows-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .rows-tools {
            width: 100%;
          }

          .rows-tools input {
            width: 100%;
          }
        }

        @media (max-width: 760px) {
          .table-manager-head {
            flex-direction: column;
          }

          .head-actions {
            width: 100%;
          }

          .refresh-btn,
          .create-btn {
            flex: 1;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .empty-state {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export default TableManagerPage
