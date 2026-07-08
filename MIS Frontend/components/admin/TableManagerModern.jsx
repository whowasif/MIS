import React, { useEffect, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import SecureAdminLayout from '../../pages/portal-secure-99x/SecureAdminLayout'
import { managedTableConfig } from '../../lib/admin/managed-tables'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const RICH_TEXT_TABLES = ['digi_services', 'bus_corp_sol', 'service_maintenance', 'page_contents', 'career_posts']
const RICH_TEXT_COLUMN = 'full_description'

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['blockquote', 'link', 'image'],
    ['clean'],
  ],
}

const AUDIT_COLUMNS = new Set(['created_at', 'updated_at', 'deleted_at'])
const SENSITIVE_COLUMNS = new Set(['password', 'password_hash', 'token', 'access_token', 'remember_token'])
const IMAGE_MEDIA_COLUMNS = new Set(['thumbnail_1', 'thumbnail_2', 'photos'])
const SLUG_AUTOFILL_TABLES = null // Auto-slug works for all tables with name+slug columns
const IMAGE_ACCEPT = 'image/*'

// Searchable Select Component
const SearchableSelect = ({ value, onChange, options, placeholder }) => {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const wrapRef = useRef(null)

  const filtered = search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options

  const selectedLabel = options.find((o) => String(o.value) === String(value))?.label || ''

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '44px', padding: '0 14px', border: '1px solid #d0d5dd', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontSize: '14px', color: selectedLabel ? '#1d2939' : '#9ca3af' }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selectedLabel || placeholder || 'Select...'}</span>
        <span style={{ color: '#6b7280', fontSize: '12px' }}>▾</span>
      </div>
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '4px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 9999, overflow: 'hidden' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search..."
            autoFocus
            style={{ width: '100%', border: 'none', borderBottom: '1px solid #f3f4f6', padding: '10px 14px', fontSize: '13px', outline: 'none' }}
          />
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {filtered.map((opt) => (
              <div
                key={opt.value}
                onClick={() => { onChange(opt.value); setIsOpen(false); setSearch('') }}
                style={{ padding: '8px 14px', fontSize: '13px', cursor: 'pointer', color: String(opt.value) === String(value) ? '#1d4ed8' : '#374151', background: String(opt.value) === String(value) ? '#eff6ff' : 'transparent', fontWeight: String(opt.value) === String(value) ? '600' : '400' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f3f4f6' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = String(opt.value) === String(value) ? '#eff6ff' : 'transparent' }}
              >
                {opt.label}
              </div>
            ))}
            {filtered.length === 0 && <div style={{ padding: '12px 14px', fontSize: '13px', color: '#9ca3af', textAlign: 'center' }}>No results</div>}
          </div>
        </div>
      )}
    </div>
  )
}
const VIDEO_ACCEPT = 'video/*'

const toTitleCase = (value) =>
  String(value || '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase())

const FRIENDLY_LABELS = {
  name: 'Name',
  slug: 'URL Slug',
  category_id: 'Category',
  type: 'Type',
  price: 'Price',
  stock_qty: 'Stock Quantity',
  short_desc: 'Short Description',
  long_desc: 'Full Description',
  features: 'Features',
  is_active: 'Status',
  active: 'Status',
  thumbnail_1: 'Main Image',
  thumbnail_2: 'Secondary Image',
  photos: 'Gallery Images',
  video_link: 'Video',
  email: 'Email Address',
  phone: 'Phone Number',
  full_name: 'Full Name',
  branch_name: 'Branch Name',
}

const toFriendlyLabel = (columnName) => {
  const key = String(columnName || '').toLowerCase()
  return FRIENDLY_LABELS[key] || toTitleCase(columnName)
}

const safeText = (value) => {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

const toSlug = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')

const isEditableColumn = (column) => {
  if (!column) return false
  if (AUDIT_COLUMNS.has(column.columnName)) return false
  if (column.isAutoIncrement) return false
  return true
}

const isMediaColumn = (table, column) => {
  if (!column) return false

  if (table === 'products' && IMAGE_MEDIA_COLUMNS.has(column.columnName)) return true
  if (String(column.columnName || '').toLowerCase().includes('video')) return true
  if (String(column.columnName || '').toLowerCase() === 'icon_url') return true
  if (String(column.columnName || '').toLowerCase() === 'image_url') return true

  return false
}

const isBooleanishColumn = (column) => {
  const type = String(column?.dataType || '').toLowerCase()
  const name = String(column?.columnName || '').toLowerCase()

  return type === 'tinyint' && (name.startsWith('is_') || name.endsWith('_active') || name === 'active')
}

const isLongTextColumn = (column) => {
  const type = String(column?.dataType || '').toLowerCase()
  return ['text', 'mediumtext', 'longtext', 'json'].includes(type)
}

const resolveFieldControl = (table, column) => {
  const type = String(column?.dataType || '').toLowerCase()
  const columnName = String(column?.columnName || '').toLowerCase()
  const columnType = String(column?.columnType || '').toLowerCase()

  if (table === 'products' && IMAGE_MEDIA_COLUMNS.has(columnName)) {
    if (columnName === 'photos') {
      return {
        kind: 'gallery-upload',
        label: 'Gallery Images',
        hint: 'Upload multiple images from this PC or paste image URLs one per line.',
        accept: IMAGE_ACCEPT,
      }
    }

    return {
      kind: 'upload-url',
      label: columnName === 'thumbnail_1' ? 'Main Image' : 'Secondary Image',
      hint: 'Upload an image to save it locally on this PC, or paste an image URL.',
      accept: IMAGE_ACCEPT,
    }
  }

  if (columnName.includes('video')) {
    return {
      kind: 'upload-url',
      label: 'Video Link',
      hint: 'Upload a video to save it locally on this PC, or paste a video URL.',
      accept: VIDEO_ACCEPT,
    }
  }

  if (columnName === 'icon_url' || columnName === 'image_url') {
    return {
      kind: 'upload-url',
      label: columnName === 'icon_url' ? 'Icon / Image' : 'Advertisement Image',
      hint: 'Upload an image or paste an image URL.',
      accept: IMAGE_ACCEPT,
    }
  }

  if (columnName === 'status' && (type === 'enum' || columnType.includes("'active'"))) {
    return {
      kind: 'select',
      label: toFriendlyLabel(column.columnName),
      hint: 'Choose active or inactive.',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    }
  }

  if (isBooleanishColumn(column)) {
    return {
      kind: 'select',
      label: toFriendlyLabel(column.columnName),
      hint: 'Choose yes or no.',
      options: [
        { label: 'Yes', value: '1' },
        { label: 'No', value: '0' },
      ],
    }
  }

  if (['int', 'bigint', 'smallint', 'mediumint', 'tinyint', 'decimal', 'double', 'float'].includes(type)) {
    return {
      kind: 'input',
      type: 'number',
      label: toFriendlyLabel(column.columnName),
      hint: 'Enter a number.',
    }
  }

  if (type === 'date') {
    return {
      kind: 'input',
      type: 'date',
      label: toFriendlyLabel(column.columnName),
      hint: 'Pick a date.',
    }
  }

  if (type === 'datetime' || type === 'timestamp') {
    return {
      kind: 'input',
      type: 'datetime-local',
      label: toFriendlyLabel(column.columnName),
      hint: 'Pick date and time.',
    }
  }

  if (isLongTextColumn(column)) {
    return {
      kind: 'textarea',
      label: toFriendlyLabel(column.columnName),
      hint: type === 'json' ? 'You can paste JSON or a list of URLs.' : 'Write longer text here.',
    }
  }

  return {
    kind: 'input',
    type: 'text',
    label: toFriendlyLabel(column.columnName),
    hint: 'Enter a value.',
  }
}

const getPrimaryColumn = (columns) => columns.find((column) => column.isPrimary)?.columnName || 'id'

const getDisplayTitle = (row, columns, primaryColumn) => {
  const preferredColumns = ['name', 'title', 'subject', 'branch_name', 'full_name', 'email', 'phone']
  const preferredColumn = columns.find((column) =>
    preferredColumns.some((token) => String(column.columnName).toLowerCase().includes(token))
  )

  if (preferredColumn && safeText(row?.[preferredColumn.columnName])) {
    return safeText(row?.[preferredColumn.columnName])
  }

  return safeText(row?.[primaryColumn]) || `Row ${safeText(row?.[primaryColumn] || '')}`
}

const getCardColumns = (table, columns) => {
  const hiddenColumns = new Set([
    ...AUDIT_COLUMNS,
    ...SENSITIVE_COLUMNS,
    ...columns.filter((column) => isMediaColumn(table, column)).map((column) => column.columnName),
    'photos',
  ])

  const preferredNames = ['name', 'title', 'subject', 'branch_name', 'full_name', 'email', 'phone', 'price', 'stock_qty', 'type']

  const ordered = []
  preferredNames.forEach((token) => {
    const match = columns.find(
      (column) => !hiddenColumns.has(column.columnName) && String(column.columnName).toLowerCase().includes(token)
    )
    if (match && !ordered.some((column) => column.columnName === match.columnName)) {
      ordered.push(match)
    }
  })

  columns.forEach((column) => {
    if (ordered.length >= 5) return
    if (hiddenColumns.has(column.columnName)) return
    if (!isEditableColumn(column) && column.columnKey !== 'PRI') return
    if (!ordered.some((existing) => existing.columnName === column.columnName)) {
      ordered.push(column)
    }
  })

  return ordered.slice(0, 5)
}

const getDisplayColumns = (table, columns) => {
  return getCardColumns(table, columns).filter(
    (column) => !SENSITIVE_COLUMNS.has(String(column.columnName).toLowerCase())
  )
}

const stringifyMediaUrls = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean).join('\n')
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      if (Array.isArray(parsed)) return parsed.filter(Boolean).join('\n')
    } catch (error) {
      return value
    }
  }

  return safeText(value)
}

const parseStoredPhotos = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean)

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      if (Array.isArray(parsed)) return parsed.filter(Boolean)
    } catch (error) {
      return String(value || '')
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter(Boolean)
    }
  }

  return []
}

const parseMediaUrls = (value) =>
  String(value || '')
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean)

const getRowCoverCandidate = (row) => {
  const primary = row?.thumbnail_1 || row?.thumbnail_2 || row?.icon_url || row?.image_url
  if (primary) return primary

  if (!row?.photos) return ''

  if (Array.isArray(row.photos)) {
    return row.photos.find(Boolean) || ''
  }

  if (typeof row.photos === 'string') {
    try {
      const parsed = JSON.parse(row.photos)
      if (Array.isArray(parsed)) return parsed.find(Boolean) || ''
    } catch (error) {
      const fallbackList = parseMediaUrls(row.photos)
      return fallbackList[0] || ''
    }
  }

  return ''
}

const cardMediaFrameStyle = {
  position: 'relative',
  width: '100%',
  height: '148px',
  minHeight: '148px',
  maxHeight: '148px',
  flex: '0 0 148px',
  overflow: 'hidden',
  display: 'block',
  margin: 0,
  borderBottom: '1px solid #efeafd',
  background: '#f3f2fb',
}

const cardMediaImageStyle = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  minHeight: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
}

const toSafeMediaSrc = (value) => {
  const source = String(value || '').trim().replace(/\\/g, '/')
  if (!source) return ''

  if (source.startsWith('http://') || source.startsWith('https://') || source.startsWith('/')) {
    return source
  }

  const uploadsIndex = source.toLowerCase().indexOf('uploads/admin/')
  if (uploadsIndex !== -1) {
    return `/${source.slice(uploadsIndex)}`
  }

  return ''
}

const normalizeSubmitValues = (table, columns, formValues) => {
  const normalized = {}

  columns.forEach((column) => {
    if (!Object.prototype.hasOwnProperty.call(formValues, column.columnName)) return

    const control = resolveFieldControl(table, column)
    let value = formValues[column.columnName]

    if (control.kind === 'textarea' && column.columnName === 'photos') {
      normalized[column.columnName] = JSON.stringify(parseMediaUrls(value))
      return
    }

    if (control.kind === 'upload-url' && IMAGE_MEDIA_COLUMNS.has(column.columnName)) {
      normalized[column.columnName] = safeText(value)
      return
    }

    if (control.kind === 'select') {
      const values = Array.isArray(control.options) ? control.options.map((option) => String(option.value)) : []

      if (values.includes('1') && values.includes('0')) {
        normalized[column.columnName] = String(value) === '1' ? 1 : 0
      } else {
        normalized[column.columnName] = safeText(value)
      }

      return
    }

    normalized[column.columnName] = value
  })

  return normalized
}

const extractCardValue = (table, column, row) => {
  const value = row?.[column.columnName]

  if (table === 'products' && column.columnName === 'photos') {
    try {
      const parsed = typeof value === 'string' ? JSON.parse(value) : value
      if (Array.isArray(parsed)) return `${parsed.length} image${parsed.length === 1 ? '' : 's'}`
    } catch (error) {
      return safeText(value)
    }
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'
  }

  return safeText(value)
}

const ModernTableManager = () => {
  const router = useRouter()
  const table = String(router.query.table || '').toLowerCase()

  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  const [searchText, setSearchText] = useState('')
  const [viewMode, setViewMode] = useState('list')
  const [sortBy, setSortBy] = useState('default')
  const [filterCategory, setFilterCategory] = useState('')
  const [filterBrand, setFilterBrand] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [uploadingField, setUploadingField] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editRowId, setEditRowId] = useState(null)
  const [createForm, setCreateForm] = useState({})
  const [editForm, setEditForm] = useState({})
  const [createSlugEdited, setCreateSlugEdited] = useState(false)
  const [categorySpecs, setCategorySpecs] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [previewImages, setPreviewImages] = useState([])
  const uploadRefs = useRef({})
  const formSectionRef = useRef(null)

  const tableMeta = useMemo(() => managedTableConfig.find((item) => item.name === table), [table])
  const editableColumns = useMemo(() => columns.filter(isEditableColumn), [columns])
  const mediaColumns = useMemo(() => editableColumns.filter((column) => isMediaColumn(table, column)), [editableColumns, table])
  const detailColumns = useMemo(
    () => editableColumns.filter((column) => !isMediaColumn(table, column)),
    [editableColumns, table]
  )
  const orderedDetailColumns = useMemo(() => {
    const preferredOrder = [
      'name',
      'slug',
      'category_id',
      'type',
      'price',
      'stock_qty',
      'short_desc',
      'long_desc',
      'features',
      'is_active',
      'active',
    ]
    const used = new Set()
    const ordered = []

    preferredOrder.forEach((preferredName) => {
      const match = detailColumns.find((column) => String(column.columnName).toLowerCase() === preferredName)
      if (match && !used.has(match.columnName)) {
        ordered.push(match)
        used.add(match.columnName)
      }
    })

    detailColumns.forEach((column) => {
      if (!used.has(column.columnName)) {
        ordered.push(column)
        used.add(column.columnName)
      }
    })

    return ordered
  }, [detailColumns])

  const orderedMediaColumns = useMemo(() => {
    const preferredOrder = ['thumbnail_1', 'thumbnail_2', 'photos', 'video', 'video_url', 'video_link']
    const used = new Set()
    const ordered = []

    preferredOrder.forEach((preferredName) => {
      const match = mediaColumns.find((column) => String(column.columnName).toLowerCase() === preferredName)
      if (match && !used.has(match.columnName)) {
        ordered.push(match)
        used.add(match.columnName)
      }
    })

    mediaColumns.forEach((column) => {
      if (!used.has(column.columnName)) {
        ordered.push(column)
        used.add(column.columnName)
      }
    })

    return ordered
  }, [mediaColumns])
  const primaryColumn = useMemo(() => getPrimaryColumn(columns), [columns])
  const cardColumns = useMemo(() => getCardColumns(table, columns), [table, columns])
  const displayColumns = useMemo(() => getDisplayColumns(table, columns), [table, columns])

  const tableColumns = useMemo(() => {
    const nextColumns = []
    const preferredTitleColumns = ['name', 'title', 'subject', 'branch_name', 'full_name', 'email', 'phone']
    const alreadyRenderedColumnNames = new Set(['id', 'uid', ...preferredTitleColumns])
    const excludeFromTable = new Set(['description', 'full_description', 'long_desc', 'short_desc', 'features', 'specifications', 'photos', 'video', 'video_url'])

    displayColumns.forEach((column) => {
      if (nextColumns.length >= 3) return
      const columnNameLower = String(column.columnName).toLowerCase()
      if (alreadyRenderedColumnNames.has(columnNameLower)) return
      if (excludeFromTable.has(columnNameLower)) return
      if (column.dataType === 'text' || column.dataType === 'longtext' || column.dataType === 'json') return
      if (!nextColumns.some((existing) => existing.columnName === column.columnName)) {
        nextColumns.push(column)
      }
    })

    return nextColumns.slice(0, 3)
  }, [displayColumns])

  const filteredRows = useMemo(() => {
    let result = [...rows]

    // Text search
    const query = searchText.trim().toLowerCase()
    if (query) {
      result = result.filter((row) =>
        columns.some((column) => safeText(row[column.columnName]).toLowerCase().includes(query))
      )
    }

    // Category filter (filter by parent category - includes all its subcategories)
    if (filterCategory) {
      const childCatIds = allCategories.filter((c) => String(c.parent_id) === filterCategory).map((c) => c.id)
      const matchIds = [Number(filterCategory), ...childCatIds]
      result = result.filter((row) => matchIds.includes(row.category_id))
    }

    // Brand filter
    if (filterBrand) {
      result = result.filter((row) => safeText(row.brand).toLowerCase() === filterBrand.toLowerCase())
    }

    // Sorting
    if (sortBy === 'price-high') {
      result.sort((a, b) => Number(b.price || b.regular_price || 0) - Number(a.price || a.regular_price || 0))
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => Number(a.price || a.regular_price || 0) - Number(b.price || b.regular_price || 0))
    } else if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
    } else if (sortBy === 'oldest') {
      result.sort((a, b) => new Date(a.created_at || 0) - new Date(b.created_at || 0))
    }

    return result
  }, [rows, columns, searchText, sortBy, filterCategory, filterBrand])

  // Extract unique categories and brands for filter dropdowns (show parent categories)
  const availableCategories = useMemo(() => {
    const cats = new Map()
    rows.forEach((row) => {
      if (row.category_id) {
        const catMatch = allCategories.find((c) => c.id === row.category_id)
        if (catMatch) {
          // If it's a subcategory, show the parent category name
          if (catMatch.parent_id) {
            const parentCat = allCategories.find((c) => c.id === catMatch.parent_id)
            if (parentCat) {
              cats.set(String(parentCat.id), parentCat.name)
            } else {
              cats.set(String(catMatch.id), catMatch.name)
            }
          } else {
            cats.set(String(catMatch.id), catMatch.name)
          }
        }
      }
    })
    return Array.from(cats.entries()).map(([id, name]) => ({ id, name }))
  }, [rows, allCategories])

  const availableBrands = useMemo(() => {
    const brands = new Set()
    rows.forEach((row) => { if (row.brand) brands.add(row.brand) })
    return Array.from(brands).sort()
  }, [rows])

  const activeFormValues = editRowId !== null ? editForm : createForm

  const scrollToFormSection = () => {
    window.setTimeout(() => {
      requestAnimationFrame(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }, 80)
  }

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

  // Fetch all categories for dropdown (when table has category_id column)
  useEffect(() => {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((data) => { if (data.categories) setAllCategories(data.categories) })
      .catch(() => {})
    // Fetch products for product_id dropdown
    fetch('/api/admin/tables/products?limit=200')
      .then((r) => r.json())
      .then((data) => { if (data.rows) setAllProducts(data.rows) })
      .catch(() => {})
  }, [])

  const handleFormChange = (columnName, value, options = {}) => {
    const isUserInput = options?.source !== 'auto'
    const hasSlugColumn = editableColumns.some((column) => column.columnName === 'slug')
    const shouldAutoFillSlug =
      editRowId === null &&
      hasSlugColumn

    if (editRowId !== null) {
      setEditForm((current) => ({
        ...current,
        [columnName]: value,
      }))
      return
    }

    if (columnName === 'slug' && isUserInput) {
      setCreateSlugEdited(true)
    }

    setCreateForm((current) => {
      const next = {
        ...current,
        [columnName]: value,
      }

      if (columnName === 'name' && shouldAutoFillSlug && (!createSlugEdited || !safeText(current.slug).trim())) {
        next.slug = toSlug(value)
      }

      return next
    })

    // Fetch category specs when category_id changes (for products table)
    if (columnName === 'category_id' && table === 'products' && value) {
      fetchCategorySpecs(value)
    }
  }

  const fetchCategorySpecs = async (categoryId) => {
    if (!categoryId) { setCategorySpecs([]); return }
    try {
      const res = await fetch(`/api/admin/category-specs?category_id=${categoryId}`)
      const data = await res.json()
      if (data.success && data.specs) {
        setCategorySpecs(data.specs)
      } else {
        setCategorySpecs([])
      }
    } catch (e) {
      setCategorySpecs([])
    }
  }

  const openCreateForm = () => {
    setEditRowId(null)
    setEditForm({})
    setCreateForm({})
    setCreateSlugEdited(false)
    setPreviewImages([])
    setShowForm(true)
    setError('')
    setSuccess('')
    scrollToFormSection()
  }

  const openEditForm = (row) => {
    const nextForm = {}
    const nextPreviews = []

    editableColumns.forEach((column) => {
      const control = resolveFieldControl(table, column)
      const rowValue = row[column.columnName]

      if (table === 'products' && column.columnName === 'photos') {
        nextForm[column.columnName] = stringifyMediaUrls(rowValue)
        nextPreviews.push(...parseStoredPhotos(rowValue))
        return
      }

      if (control.kind === 'select') {
        nextForm[column.columnName] = safeText(rowValue || control.options?.[0]?.value || '')
        return
      }

      if (isMediaColumn(table, column)) {
        nextForm[column.columnName] = safeText(rowValue)
        return
      }

      nextForm[column.columnName] = safeText(rowValue)
    })

    setEditRowId(row[primaryColumn])
    setEditForm(nextForm)
    setPreviewImages(nextPreviews)
    setShowForm(true)
    setError('')
    setSuccess('')
    scrollToFormSection()

    // Load category specs if editing a product with category_id
    if (table === 'products' && row.category_id) {
      fetchCategorySpecs(row.category_id)
    }
  }

  const closeForm = () => {
    setEditRowId(null)
    setEditForm({})
    setCreateForm({})
    setCreateSlugEdited(false)
    setCategorySpecs([])
    setPreviewImages([])
    setShowForm(false)
    setUploadingField('')
  }

  const submitRecord = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSubmitting(true)

    try {
      const values = normalizeSubmitValues(table, editableColumns, activeFormValues)
      const endpoint = editRowId !== null ? `/api/admin/tables/${table}/${encodeURIComponent(String(editRowId))}` : `/api/admin/tables/${table}`
      const method = editRowId !== null ? 'PUT' : 'POST'

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }),
      })
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Unable to save record.')
      }

      setSuccess(editRowId !== null ? 'Record updated successfully.' : 'New record created successfully.')
      await loadTableData()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteRow = async (rowId) => {
    const confirmed = window.confirm('Delete this row? This cannot be undone.')
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

  const uploadFieldFile = async (columnName, file) => {
    if (!file) return

    setUploadingField(columnName)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/admin/uploads', {
        method: 'POST',
        body: formData,
      })
      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.details || payload?.error || 'Upload failed.')
      }

      if (columnName === 'photos') {
        setEditForm((current) => {
          if (editRowId === null) return current
          const currentList = parseMediaUrls(current[columnName])
          return {
            ...current,
            [columnName]: [...currentList, payload.url].join('\n'),
          }
        })

        setCreateForm((current) => {
          if (editRowId !== null) return current
          const currentList = parseMediaUrls(current[columnName])
          return {
            ...current,
            [columnName]: [...currentList, payload.url].join('\n'),
          }
        })

        setPreviewImages((current) => [...current, payload.url])
      } else {
        handleFormChange(columnName, payload.url)
      }

      setSuccess('File uploaded successfully.')
    } catch (uploadError) {
      setError(uploadError.message)
    } finally {
      setUploadingField('')
    }
  }

  const triggerUpload = (columnName) => {
    uploadRefs.current[columnName]?.click()
  }

  const onFilePick = (columnName, event) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    uploadFieldFile(columnName, file)
  }

  const onGalleryPick = async (event) => {
    const files = Array.from(event.target.files || [])
    event.target.value = ''

    for (const file of files) {
      // Upload one by one so the stored gallery order matches the chosen files.
      await uploadFieldFile('photos', file)
    }
  }

  const removeGalleryImage = (url) => {
    const nextList = parseMediaUrls(activeFormValues.photos).filter((item) => item !== url)

    if (editRowId !== null) {
      setEditForm((current) => ({
        ...current,
        photos: nextList.join('\n'),
      }))
    } else {
      setCreateForm((current) => ({
        ...current,
        photos: nextList.join('\n'),
      }))
    }

    setPreviewImages((current) => current.filter((item) => item !== url))
  }

  const getInputPlaceholder = (column) => {
    const name = String(column?.columnName || '').toLowerCase()

    if (name === 'name') return 'Enter product name'
    if (name === 'slug') return 'product-url-slug'
    if (name === 'category_id') return 'Enter category id'
    if (name === 'type') return 'Hardware, Software, Service...'
    if (name === 'price') return '0.00'
    if (name === 'stock_qty') return '0'
    if (name.includes('short')) return 'Write a short product summary'
    if (name.includes('long')) return 'Write the full product description'
    if (name.includes('feature')) return 'List product features or paste JSON'

    const control = resolveFieldControl(table, column)
    return control.hint || `Enter ${toTitleCase(column?.columnName || 'value').toLowerCase()}`
  }

  const renderInput = (column) => {
    const control = resolveFieldControl(table, column)
    const value = activeFormValues[column.columnName] || ''
    const columnNameLower = String(column.columnName).toLowerCase()

    // Rich text editor for full_description in specific tables
    if (columnNameLower === RICH_TEXT_COLUMN && RICH_TEXT_TABLES.includes(table)) {
      return (
        <div className="rich-editor-wrap">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(content) => handleFormChange(column.columnName, content)}
            modules={quillModules}
            placeholder="Write detailed content with formatting..."
          />
        </div>
      )
    }

    // Category dropdown for category_id and parent_id columns
    if ((columnNameLower === 'category_id' || columnNameLower === 'parent_id') && allCategories.length > 0) {
      const parents = allCategories.filter((c) => !c.parent_id)
      return (
        <SearchableSelect
          value={value || ''}
          onChange={(val) => handleFormChange(column.columnName, val)}
          placeholder="Search & select category..."
          options={(() => {
            const opts = [{ value: '', label: '— Select Category —' }]
            parents.forEach((parent) => {
              opts.push({ value: String(parent.id), label: `${parent.name}` })
              const children = allCategories.filter((c) => c.parent_id === parent.id)
              children.forEach((child) => {
                opts.push({ value: String(child.id), label: `  └ ${child.name}` })
              })
            })
            return opts
          })()}
        />
      )
    }

    // Product dropdown for product_id column
    if (columnNameLower === 'product_id' && allProducts.length > 0) {
      return (
        <SearchableSelect
          value={value || ''}
          onChange={(val) => handleFormChange(column.columnName, val)}
          placeholder="Search & select product..."
          options={[
            { value: '', label: '— Select Product (optional) —' },
            ...allProducts.map((p) => ({ value: String(p.id), label: `${p.name} (#${p.id})` }))
          ]}
        />
      )
    }

    if (control.kind === 'select') {
      return (
        <select
          className="form-input-styled"
          style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit', cursor: 'pointer' }}
          value={value || control.options?.[0]?.value || ''}
          onChange={(event) => handleFormChange(column.columnName, event.target.value)}
        >
          {control.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )
    }

    if (control.kind === 'textarea') {
      const isShort = columnNameLower.includes('short')
      const isLong = columnNameLower.includes('long')
      const isFeature = columnNameLower.includes('feature')

      return (
        <textarea
          className="form-input-styled"
          style={{ width: '100%', minHeight: isShort ? '80px' : '120px', padding: '12px 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', lineHeight: '1.6' }}
          rows={isShort ? 3 : isLong || isFeature ? 5 : 4}
          value={value}
          onChange={(event) => handleFormChange(column.columnName, event.target.value)}
          placeholder={getInputPlaceholder(column)}
        />
      )
    }

    return (
      <input
        className="form-input-styled"
        style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }}
        type={control.type || 'text'}
        value={value}
        onChange={(event) => handleFormChange(column.columnName, event.target.value)}
        placeholder={getInputPlaceholder(column)}
      />
    )
  }

  // Inline style constants for media fields (styled-jsx won't scope to helper-rendered elements)
  const mediaFieldBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '16px',
    border: '2px solid #c7d2fe',
    borderRadius: '14px',
    background: '#ffffff',
  }

  const mediaPreviewFixedStyle = {
    position: 'relative',
    width: '100%',
    height: '150px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #e0e7ff',
    background: '#f1f5f9',
    flexShrink: 0,
  }

  const mediaPreviewImgStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
    background: '#f8fafc',
  }

  const mediaPreviewRemoveStyle = {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '24px',
    height: '24px',
    border: 'none',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.55)',
    color: '#fff',
    fontSize: '16px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const mediaThumbBoxStyle = {
    position: 'relative',
    width: '80px',
    height: '80px',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #c7d2fe',
    flexShrink: 0,
    background: '#f8fafc',
  }

  const mediaThumbImgStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    display: 'block',
  }

  const mediaThumbRemoveStyle = {
    position: 'absolute',
    top: '4px',
    right: '4px',
    width: '20px',
    height: '20px',
    border: 'none',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    fontSize: '14px',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }

  const mediaThumbRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 80px)',
    gap: '10px',
  }

  const mediaFileNameRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
  }

  const renderMediaField = (column) => {
    const control = resolveFieldControl(table, column)
    const value = activeFormValues[column.columnName] || ''
    const columnNameLower = String(column.columnName).toLowerCase()
    const isGallery = columnNameLower === 'photos'
    const isVideo = columnNameLower.includes('video')
    const galleryItems = isGallery ? parseMediaUrls(value) : []
    const previewSrc = !isGallery && value ? toSafeMediaSrc(value) : ''

    const onDragOver = (e) => { e.preventDefault(); e.currentTarget.classList.add('drag-over') }
    const onDragLeave = (e) => { e.preventDefault(); e.currentTarget.classList.remove('drag-over') }
    const onDropSingle = (e) => {
      e.preventDefault()
      e.currentTarget.classList.remove('drag-over')
      const file = e.dataTransfer?.files?.[0]
      if (file) {
        const fakeEvent = { target: { files: [file] } }
        onFilePick(column.columnName, fakeEvent)
      }
    }
    const onDropGallery = (e) => {
      e.preventDefault()
      e.currentTarget.classList.remove('drag-over')
      const files = e.dataTransfer?.files
      if (files?.length) {
        const fakeEvent = { target: { files } }
        onGalleryPick(fakeEvent)
      }
    }

    if (isGallery) {
      return (
        <div style={mediaFieldBoxStyle}>
          <div className="media-field-label-row">
            <h5 className="media-field-label">{control.label}</h5>
            <span className="media-badge">{galleryItems.length}</span>
          </div>

          {galleryItems.length > 0 && (
            <div style={mediaThumbRowStyle}>
              {galleryItems.map((url) => (
                <div key={url} style={mediaThumbBoxStyle}>
                  <img src={url} alt="" style={mediaThumbImgStyle} />
                  <button type="button" style={mediaThumbRemoveStyle} onClick={() => removeGalleryImage(url)}>×</button>
                </div>
              ))}
            </div>
          )}

          <div className="media-drop-box" onClick={() => uploadRefs.current[column.columnName]?.click()} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDropGallery}>
            <div className="media-drop-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#4f46e5" stroke="none"><path d="M20 6h-4l-2-2H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6z"/></svg>
            </div>
            <p className="media-drop-text">Drag your photos here to start uploading.</p>
            <div className="media-drop-or"><span>OR</span></div>
            <button type="button" className="media-browse-btn">{uploadingField === column.columnName ? 'Uploading...' : 'Browse files'}</button>
          </div>

          <input ref={(node) => { uploadRefs.current[column.columnName] = node }} type="file" accept={control.accept} multiple style={{ display: 'none' }} onChange={onGalleryPick} />
        </div>
      )
    }

    return (
      <div style={mediaFieldBoxStyle}>
        <div className="media-field-label-row">
          <h5 className="media-field-label">{control.label}</h5>
          {value && <span className="media-status-dot" />}
        </div>

        {previewSrc && !isVideo ? (
          <div style={mediaPreviewFixedStyle}>
            <img src={previewSrc} alt="" style={mediaPreviewImgStyle} />
            <button type="button" style={mediaPreviewRemoveStyle} onClick={() => handleFormChange(column.columnName, '')}>×</button>
          </div>
        ) : value && isVideo ? (
          <div style={{ ...mediaPreviewFixedStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eef2ff' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            <button type="button" style={mediaPreviewRemoveStyle} onClick={() => handleFormChange(column.columnName, '')}>×</button>
          </div>
        ) : null}

        {previewSrc && !isVideo && (
          <div style={mediaFileNameRowStyle}>
            <span className="media-current-name">{value.split('/').pop()}</span>
            <button type="button" className="media-remove-file" onClick={() => handleFormChange(column.columnName, '')}>Remove</button>
          </div>
        )}
        {value && isVideo && (
          <div style={mediaFileNameRowStyle}>
            <span className="media-current-name">{value.split('/').pop()}</span>
            <button type="button" className="media-remove-file" onClick={() => handleFormChange(column.columnName, '')}>Remove</button>
          </div>
        )}

        <div className="media-drop-box" onClick={() => triggerUpload(column.columnName)} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDropSingle}>
          <div className="media-drop-icon">
            {isVideo ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#4f46e5" stroke="none"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" fill="#4f46e5"/></svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#4f46e5" stroke="none"><path d="M20 6h-4l-2-2H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6z"/></svg>
            )}
          </div>
          <p className="media-drop-text">{isVideo ? 'Drag your video here to start uploading.' : 'Drag your image here to start uploading.'}</p>
          <div className="media-drop-or"><span>OR</span></div>
          <button type="button" className="media-browse-btn">{uploadingField === column.columnName ? 'Uploading...' : 'Browse files'}</button>
        </div>

        <input ref={(node) => { uploadRefs.current[column.columnName] = node }} type="file" accept={control.accept} style={{ display: 'none' }} onChange={(event) => onFilePick(column.columnName, event)} />
      </div>
    )
  }

  const renderCardMedia = (row) => {
    const cover = toSafeMediaSrc(getRowCoverCandidate(row))

    if (!cover) {
      return (
        <figure className="record-card-figure row-media is-empty" aria-hidden="true" style={cardMediaFrameStyle}>
          <span className="row-media-placeholder">No image</span>
        </figure>
      )
    }

    return (
      <figure
        className="record-card-figure row-media"
        role="img"
        aria-label={safeText(row?.[primaryColumn]) || 'Record media'}
        style={cardMediaFrameStyle}
      >
        <img
          src={cover}
          alt={safeText(row?.[primaryColumn]) || 'Record media'}
          loading="lazy"
          style={cardMediaImageStyle}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            const wrapper = event.currentTarget.closest('.row-media')
            const placeholder = wrapper?.querySelector('.row-media-placeholder')
            if (placeholder) placeholder.style.display = 'inline-flex'
          }}
        />
        <span className="row-media-placeholder">Image unavailable</span>
      </figure>
    )
  }

  const renderTablePreview = (row, size = 'small') => {
    const cover = toSafeMediaSrc(getRowCoverCandidate(row))
    const isGrid = size === 'large'
    const previewContainerStyle = isGrid ? {
      width: '100%',
      height: '140px',
      borderRadius: '0',
      overflow: 'hidden',
      backgroundColor: '#f2f5fb',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#7d8399',
      fontSize: '14px',
      fontWeight: '700',
    } : {
      width: '54px',
      height: '54px',
      minWidth: '54px',
      maxWidth: '54px',
      flex: '0 0 54px',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#f2f5fb',
      border: '1px solid #e0e6f1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#7d8399',
      fontSize: '11px',
      fontWeight: '700',
    }
    const imageStyle = isGrid ? {
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block',
    } : {
      width: '54px',
      height: '54px',
      maxWidth: '54px',
      maxHeight: '54px',
      objectFit: 'contain',
      objectPosition: 'center',
      display: 'block',
      flexShrink: 0,
    }

    return (
      <div style={previewContainerStyle} className={`table-preview ${cover ? '' : 'empty'}`}>
        {cover ? (
          <img style={imageStyle} src={cover} alt={safeText(row?.[primaryColumn]) || 'Record preview'} loading="lazy" />
        ) : (
          <span>No image</span>
        )}
      </div>
    )
  }

  const renderTableCellValue = (row, column) => {
    if (!column) return '-'

    const value = extractCardValue(table, column, row)

    if (value === 'Yes' || value === 'No') {
      return <span className={`status-pill ${value === 'Yes' ? 'is-yes' : 'is-no'}`}>{value}</span>
    }

    return value || '-'
  }

  return (
    <SecureAdminLayout>
      <Head>
        <title>{tableMeta ? `${tableMeta.label} | MIS Admin` : 'Table Manager | MIS Admin'}</title>
      </Head>

      <section className="manager-shell">
        <header className="manager-head">
          <div>
            <p className="kicker">Managed Database Table</p>
            <h2>{tableMeta ? tableMeta.label : 'Table'}</h2>
            <p className="subline">Modern, form-first control for {table || 'selected table'}.</p>
          </div>

          <div className="head-actions">
            <button type="button" className="refresh-btn" onClick={loadTableData} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </button>
            <button type="button" className="create-btn" onClick={openCreateForm}>
              Add New Record
            </button>
          </div>
        </header>

        {error ? <div className="alert error">{error}</div> : null}
        {success ? <div className="alert success">{success}</div> : null}

        <section className="card inventory-card">
          <div className="inventory-toolbar">
            <div>
              <h3>Records</h3>
              <p>
                {filteredRows.length} of {rows.length} records
              </p>
            </div>
            <div className="inventory-filters">
              <label className="search-field">
                <span>Search</span>
                <input
                  type="search"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder="Search records..."
                />
              </label>
              <div className="view-toggle-group">
                <button type="button" className={`view-toggle-btn ${viewMode === 'list' ? 'is-active' : ''}`} onClick={() => setViewMode('list')} aria-label="List view">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                </button>
                <button type="button" className={`view-toggle-btn ${viewMode === 'grid' ? 'is-active' : ''}`} onClick={() => setViewMode('grid')} aria-label="Grid view">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filter Bar - Products only */}
          {table === 'products' && (
          <div className="filter-bar">
            <label className="filter-select">
              <span>Sort By</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
              </select>
            </label>
            {availableCategories.length > 0 && (
              <label className="filter-select">
                <span>Category</span>
                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                  <option value="">All Categories</option>
                  {availableCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </label>
            )}
            {availableBrands.length > 0 && (
              <label className="filter-select">
                <span>Brand</span>
                <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
                  <option value="">All Brands</option>
                  {availableBrands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </label>
            )}
            {(sortBy !== 'default' || filterCategory || filterBrand) && (
              <button type="button" className="ghost-btn" onClick={() => { setSortBy('default'); setFilterCategory(''); setFilterBrand('') }} style={{ alignSelf: 'flex-end', marginBottom: '2px' }}>
                Clear Filters
              </button>
            )}
          </div>
          )}

          {viewMode === 'grid' ? (
            <div className="records-grid">
              {filteredRows.length ? (
                filteredRows.map((row, index) => {
                  const rowId = row[primaryColumn]
                  const title = getDisplayTitle(row, columns, primaryColumn)
                  return (
                    <div key={String(rowId ?? index)} className="record-grid-card">
                      <div className="rgc-preview">{renderTablePreview(row, 'large')}</div>
                      <div className="rgc-body">
                        <strong className="rgc-title">{title}</strong>
                        <span className="rgc-id">ID: {safeText(rowId)}</span>
                        {tableColumns.slice(0, 2).map((col) => (
                          <span key={col.columnName} className="rgc-meta">{toTitleCase(col.columnName)}: {renderTableCellValue(row, col)}</span>
                        ))}
                      </div>
                      <div className="rgc-actions">
                        <button type="button" className="action-btn" onClick={() => openEditForm(row)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                          Edit
                        </button>
                        <button type="button" className="action-btn danger" onClick={() => handleDeleteRow(rowId)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                  <p>No records match your search.</p>
                  <button type="button" className="ghost-btn" onClick={() => setSearchText('')}>Clear Search</button>
                </div>
              )}
            </div>
          ) : (
          <div className="table-shell">
            <table className="inventory-table">
              <colgroup>
                <col style={{ width: '80px' }} />
                <col style={{ width: '84px' }} />
                <col style={{ width: 'auto' }} />
                {tableColumns.map((column) => (
                  <col key={column.columnName} style={{ width: 'auto' }} />
                ))}
                <col style={{ width: '140px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>{tableMeta?.label ? 'Name' : 'Record'}</th>
                  {tableColumns.map((column) => (
                    <th key={column.columnName}>{toTitleCase(column.columnName)}</th>
                  ))}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.length ? (
                  filteredRows.map((row, index) => {
                    const rowId = row[primaryColumn]
                    const title = getDisplayTitle(row, columns, primaryColumn)

                    return (
                      <tr key={String(rowId ?? index)}>
                        <td className="id-cell">{safeText(rowId)}</td>
                        <td className="image-cell" style={{ width: '84px', minWidth: '84px', maxWidth: '84px', padding: '12px 12px', boxSizing: 'border-box' }}>{renderTablePreview(row)}</td>
                        <td className="name-cell">
                          <strong>{title}</strong>
                          <span>{tableMeta?.label || 'Record'}</span>
                        </td>
                        {tableColumns.map((column) => (
                          <td key={column.columnName}>{renderTableCellValue(row, column)}</td>
                        ))}
                        <td>
                          <div className="table-actions">
                            <button type="button" className="action-btn" onClick={() => openEditForm(row)}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                              </svg>
                              Edit
                            </button>
                            <button
                              type="button"
                              className="action-btn danger"
                              onClick={() => handleDeleteRow(rowId)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M3 6h18" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                              </svg>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={4 + tableColumns.length}>
                      <div className="empty-state">
                        <p>No records match your search.</p>
                        <button type="button" className="ghost-btn" onClick={() => setSearchText('')}>
                          Clear Search
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          )}
        </section>

        {showForm ? (
          <section ref={formSectionRef} className="form-section">
            <div className="form-modal-overlay">
              <div className="modern-form-shell">
              {/* Form Header */}
              <div className="modern-form-topbar">
                <h3>{editRowId !== null ? `Edit ${tableMeta?.label || 'Record'}` : `Add ${tableMeta?.label || 'Record'}`}</h3>
                <div className="modern-form-topbar-actions">
                  <button type="button" className="cancel-btn" onClick={closeForm}>Cancel</button>
                  <button type="button" className="submit-btn" disabled={submitting} onClick={(e) => { const form = e.target.closest('.modern-form-shell').querySelector('form'); if (form) form.requestSubmit(); }}>
                    {submitting ? 'Saving...' : editRowId !== null ? 'Save Changes' : 'Create Record'}
                  </button>
                </div>
              </div>

              <form onSubmit={submitRecord} className="modern-form-layout">
                {/* Left Main Area */}
                <div className="modern-form-main">
                  {/* General Section */}
                  <div className="modern-form-card">
                    <h4 className="modern-card-title">General</h4>
                    <div className="modern-fields">
                      {orderedDetailColumns.filter((col) => {
                        const n = col.columnName.toLowerCase()
                        return !['is_active', 'active', 'status', 'category_id', 'type'].includes(n) && !n.includes('desc') && !n.includes('feature') && n !== 'full_description'
                      }).map((column) => (
                        <div key={column.columnName} className="modern-field">
                          <label className="modern-field-label">{resolveFieldControl(table, column).label}</label>
                          {renderInput(column)}
                          <span className="modern-field-hint">Enter the {resolveFieldControl(table, column).label.toLowerCase()}.</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Settings Section (Category, Status, Type) - right after General */}
                  {orderedDetailColumns.some((col) => ['is_active', 'active', 'status', 'category_id', 'type'].includes(col.columnName.toLowerCase())) && (
                    <div className="modern-form-card">
                      <h4 className="modern-card-title">Settings</h4>
                      <div className="modern-fields">
                        {orderedDetailColumns.filter((col) => ['category_id', 'type', 'is_active', 'active', 'status'].includes(col.columnName.toLowerCase())).map((column) => (
                          <div key={column.columnName} className="modern-field">
                            <label className="modern-field-label">{resolveFieldControl(table, column).label}</label>
                            {renderInput(column)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description Section */}
                  {orderedDetailColumns.some((col) => col.columnName.toLowerCase().includes('desc') || col.columnName.toLowerCase() === 'full_description' || col.columnName.toLowerCase().includes('feature')) && (
                    <div className="modern-form-card">
                      <h4 className="modern-card-title">Description</h4>
                      <div className="modern-fields">
                        {orderedDetailColumns.filter((col) => {
                          const n = col.columnName.toLowerCase()
                          return n.includes('desc') || n === 'full_description' || n.includes('feature')
                        }).map((column) => (
                          <div key={column.columnName} className="modern-field">
                            <label className="modern-field-label">{resolveFieldControl(table, column).label}</label>
                            {renderInput(column)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications Section (for products with category_id selected) */}
                  {table === 'products' && categorySpecs.length > 0 && (
                    <div className="modern-form-card">
                      <h4 className="modern-card-title">Specifications</h4>
                      <p className="modern-card-subtitle">Fill in the specs for this product category.</p>
                      <div className="modern-fields specs-grid">
                        {categorySpecs.map((spec) => {
                          const specsObj = (() => {
                            try { return JSON.parse(activeFormValues.specifications || '{}') } catch (e) { return {} }
                          })()
                          return (
                            <div key={spec.id} className="modern-field">
                              <label className="modern-field-label">{spec.spec_label}</label>
                              <input
                                type="text"
                                style={{ width: '100%', height: '48px', padding: '0 14px', border: '2px solid #c7d2fe', borderRadius: '10px', background: '#fafbff', color: '#0f172a', fontSize: '14px', fontFamily: 'inherit' }}
                                value={specsObj[spec.spec_name] || ''}
                                onChange={(e) => {
                                  const updated = { ...specsObj, [spec.spec_name]: e.target.value }
                                  handleFormChange('specifications', JSON.stringify(updated))
                                }}
                                placeholder={`Enter ${spec.spec_label.toLowerCase()}`}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Media Section */}
                  {orderedMediaColumns.length > 0 && (
                    <div className="modern-form-card modern-media-card">
                      <h4 className="modern-card-title media-card-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        Media
                      </h4>
                      <div className="modern-media-fields">
                        {orderedMediaColumns.map((column) => {
                          const columnNameLower = String(column.columnName).toLowerCase()
                          const isGallery = columnNameLower === 'photos'
                          const isVideo = columnNameLower.includes('video')
                          return (
                            <div key={column.columnName} className={`modern-media-item ${isGallery || isVideo ? 'full-width' : ''}`}>
                              {renderMediaField(column)}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Sidebar - hidden, fields moved to main */}
                <div className="modern-form-sidebar"></div>
              </form>
            </div>
            </div>
          </section>
        ) : null}
      </section>

      <style jsx>{`
        .manager-shell {
          display: grid;
          gap: 18px;
          max-width: 100%;
          overflow-x: hidden;
        }

        .manager-head {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .kicker,
        .form-kicker {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7f7f95;
          font-weight: 800;
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

        .head-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .refresh-btn,
        .create-btn,
        .primary-btn,
        .ghost-btn,
        .cancel-btn,
        .submit-btn,
        .close-form-btn,
        .upload-trigger,
        .mini-btn {
          border: 0;
          border-radius: 12px;
          padding: 10px 14px;
          cursor: pointer;
          font-weight: 700;
          font: inherit;
        }

        .refresh-btn {
          background: #8a5dff;
          color: #ffffff;
        }

        .create-btn,
        .primary-btn,
        .submit-btn {
          background: #2f3d7a;
          color: #ffffff;
        }

        .ghost-btn,
        .cancel-btn,
        .close-form-btn {
          background: #ffffff;
          color: #393657;
          border: 1px solid #d8d3ef;
        }

        /* Compact, color-coded row action buttons */
        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          cursor: pointer;
          font-family: inherit;
          border: 1px solid transparent;
          transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }

        .action-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* Edit = subtle primary (blue) */
        .action-btn:not(.danger) {
          background: #eef2ff;
          color: #2f3d7a;
          border-color: #c7d2fe;
        }

        /* Delete = clear danger (red) */
        .action-btn.danger {
          background: #fef2f2;
          color: #c0344f;
          border-color: #f7c4cf;
        }

        .refresh-btn:disabled,
        .primary-btn:disabled,
        .submit-btn:disabled,
        .upload-trigger:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .alert {
          border-radius: 12px;
          padding: 12px 14px;
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
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid #e6e3f5;
          box-shadow: 0 10px 30px rgba(34, 27, 72, 0.06);
        }

        .inventory-card {
          padding: 18px;
        }

        .inventory-toolbar {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-end;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .inventory-toolbar h3 {
          margin: 0;
          color: #2e2d3f;
        }

        .inventory-toolbar p {
          margin: 0;
          color: #747391;
        }

        .inventory-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: flex-end;
        }

        .search-field {
          display: grid;
          gap: 6px;
          min-width: 180px;
          flex: 1 1 220px;
        }

        .search-field span {
          font-size: 12px;
          font-weight: 700;
          color: #666283;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .search-field input,
        .search-field select {
          width: 100%;
          border: 1px solid #d6d2eb;
          border-radius: 12px;
          padding: 11px 12px;
          background: #fbfaff;
          color: #29293d;
          font: inherit;
        }

        .table-shell {
          width: 100%;
          overflow-x: auto;
        }

        .view-toggle-group {
          display: flex;
          border: 1px solid #d6d2eb;
          border-radius: 10px;
          overflow: hidden;
        }

        .view-toggle-btn {
          border: none;
          background: #fff;
          padding: 9px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: all 0.15s;
        }

        .view-toggle-btn.is-active {
          background: #7c3aed;
          color: #fff;
        }

        .view-toggle-btn:not(.is-active):hover {
          background: #f5f3ff;
        }

        .filter-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: flex-end;
          margin-bottom: 16px;
          padding: 12px 14px;
          background: #faf9ff;
          border: 1px solid #ede9fe;
          border-radius: 12px;
        }

        .filter-select {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 140px;
          flex: 1;
          max-width: 200px;
        }

        .filter-select span {
          font-size: 11px;
          font-weight: 700;
          color: #6b21a8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .filter-select select {
          width: 100%;
          border: 1px solid #d6d2eb;
          border-radius: 8px;
          padding: 8px 10px;
          background: #fff;
          color: #29293d;
          font: inherit;
          font-size: 13px;
          cursor: pointer;
        }

        .filter-select select:focus {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);
        }

        .records-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 14px;
        }

        .record-grid-card {
          border: 1px solid #e6e3f5;
          border-radius: 14px;
          background: #fff;
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.15s;
          display: flex;
          flex-direction: column;
        }

        .record-grid-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        .rgc-preview {
          height: 140px;
          background: #f4f1ff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .rgc-body {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .rgc-title {
          font-size: 14px;
          font-weight: 700;
          color: #1e1b4b;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rgc-id {
          font-size: 11px;
          color: #7c3aed;
          font-weight: 600;
        }

        .rgc-meta {
          font-size: 12px;
          color: #6b7280;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .rgc-actions {
          padding: 10px 16px;
          border-top: 1px solid #f1eef8;
          display: flex;
          gap: 8px;
        }

        .inventory-table {
          width: 100%;
          min-width: 0;
          table-layout: auto;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e6e3f5;
        }

        .inventory-table thead th {
          text-align: left;
          padding: 14px 16px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #5e6480;
          background: #eef4f8;
          border-bottom: 1px solid #dde4ef;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .inventory-table tbody td {
          padding: 14px 16px;
          border-bottom: 1px solid #edf0f7;
          color: #2f3146;
          vertical-align: middle;
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .inventory-table tbody tr:hover {
          background: #fafbff;
        }

        .inventory-table thead th:nth-child(1) {
          width: 80px;
        }

        .inventory-table thead th:nth-child(2),
        .inventory-table tbody td.image-cell {
          width: 84px !important;
          min-width: 84px !important;
          max-width: 84px !important;
          box-sizing: border-box !important;
          padding-left: 12px;
          padding-right: 12px;
        }

        .inventory-table thead th:last-child {
          width: 180px;
        }

        .id-cell {
          white-space: nowrap;
          font-weight: 700;
          color: #2d3a60;
          width: 84px;
        }

        .table-preview {
          width: 54px;
          height: 54px;
          min-width: 54px;
          max-width: 54px;
          border-radius: 12px;
          overflow: hidden;
          background: #f2f5fb;
          border: 1px solid #e0e6f1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7d8399;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .table-preview img {
          width: 54px;
          height: 54px;
          max-width: 54px;
          max-height: 54px;
          object-fit: contain;
          display: block;
        }

        .rgc-preview .table-preview {
          width: 100%;
          height: 140px;
          max-width: 100%;
          min-width: 100%;
          border-radius: 0;
          border: none;
        }

        .rgc-preview .table-preview img {
          width: 100%;
          height: 140px;
          max-width: 100%;
          max-height: 140px;
          object-fit: cover;
        }

        .rgc-preview .table-preview.empty {
          height: 140px;
          font-size: 14px;
        }

        .table-preview.empty {
          padding: 8px;
          text-align: center;
        }

        .table-preview.empty span {
          display: block;
          line-height: 1.1;
        }

        .name-cell strong {
          display: block;
          font-size: 15px;
          line-height: 1.35;
          color: #28304d;
        }

        .name-cell,
        .inventory-table tbody td:not(.id-cell):not(.image-cell):not(:last-child) {
          min-width: 0;
        }

        .name-cell span,
        .table-muted {
          display: block;
          color: #7d8399;
          font-size: 12px;
          margin-top: 2px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
        }

        .status-pill.is-yes {
          background: #dff5e8;
          color: #157347;
        }

        .status-pill.is-no {
          background: #ffe1e1;
          color: #b03030;
        }

        .table-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
          justify-content: flex-start;
        }

        .empty-state {
          border: 1px dashed #cfcae8;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          background: #ffffff;
        }

        .form-section {
          padding: 0;
          scroll-margin-top: 110px;
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: 40px 20px;
        }

        .form-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          overflow-y: auto;
          padding: 40px 16px;
        }

        /* Modern Two-Column Form Layout */
        .modern-form-shell {
          width: 100%;
          max-width: 920px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);
        }

        .modern-form-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: #fff;
          border-bottom: 1px solid #e2e8f0;
        }

        .modern-form-topbar h3 {
          margin: 0;
          font-size: 18px;
          color: #1e293b;
          font-weight: 700;
        }

        .modern-form-topbar-actions {
          display: flex;
          gap: 8px;
        }

        .modern-form-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 20px;
          align-items: start;
          max-height: calc(100vh - 140px);
          overflow-y: auto;
        }

        .modern-form-main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modern-form-sidebar {
          display: none;
        }

        .modern-form-card,
        .modern-sidebar-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
        }

        .modern-card-title {
          margin: 0 0 16px;
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          padding-bottom: 12px;
          border-bottom: 2px solid #e2e8f0;
        }

        .modern-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modern-fields.specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .modern-card-subtitle {
          margin: -8px 0 14px;
          font-size: 12px;
          color: #94a3b8;
        }

        .modern-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .modern-field input,
        .modern-field textarea,
        .modern-field select {
          width: 100%;
          border: 1.5px solid #cbd5e1;
          border-radius: 10px;
          background: #f8fafc;
          color: #0f172a;
          font: inherit;
          font-size: 14px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }

        .modern-field input,
        .modern-field select {
          height: 46px;
          padding: 0 14px;
        }

        .modern-field select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .modern-field textarea {
          min-height: 110px;
          padding: 12px 14px;
          resize: vertical;
          line-height: 1.6;
        }

        .modern-field input::placeholder,
        .modern-field textarea::placeholder {
          color: #94a3b8;
        }

        .modern-field input:focus,
        .modern-field select:focus,
        .modern-field textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }

        .modern-field input:hover:not(:focus),
        .modern-field select:hover:not(:focus),
        .modern-field textarea:hover:not(:focus) {
          border-color: #94a3b8;
        }

        .modern-field-label {
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: 0.01em;
        }

        .modern-field-hint {
          font-size: 11px;
          color: #64748b;
          font-style: italic;
        }

        .form-input-styled {
          width: 100%;
          border: 2px solid #c7d2fe;
          border-radius: 10px;
          background: #fafbff;
          color: #0f172a;
          font: inherit;
          font-size: 14px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }

        input.form-input-styled,
        select.form-input-styled {
          height: 48px;
          padding: 0 14px;
        }

        select.form-input-styled {
          cursor: pointer;
        }

        textarea.form-input-styled {
          min-height: 110px;
          padding: 12px 14px;
          resize: vertical;
          line-height: 1.6;
        }

        .form-input-styled::placeholder {
          color: #94a3b8;
        }

        .form-input-styled:focus {
          outline: none;
          border-color: #6366f1;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
        }

        .form-input-styled:hover:not(:focus) {
          border-color: #a5b4fc;
        }

        /* Searchable Select */
        .searchable-select { position: relative; width: 100%; }
        .ss-display { display: flex; align-items: center; justify-content: space-between; height: 44px; padding: 0 14px; border: 1px solid #d0d5dd; border-radius: 8px; background: #fff; cursor: pointer; font-size: 14px; color: #1d2939; }
        .ss-display:hover { border-color: #9ca3af; }
        .ss-placeholder { color: #9ca3af; }
        .ss-arrow { color: #6b7280; font-size: 12px; }
        .ss-dropdown { position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.12); z-index: 50; overflow: hidden; max-height: 280px; display: flex; flex-direction: column; }
        .ss-search { width: 100%; border: none; border-bottom: 1px solid #f3f4f6; padding: 10px 14px; font-size: 13px; outline: none; flex-shrink: 0; }
        .ss-options { max-height: 220px; overflow-y: auto; flex: 1; }
        .ss-option { padding: 8px 14px; font-size: 13px; cursor: pointer; color: #374151; }
        .ss-option:hover { background: #f3f4f6; }
        .ss-option.is-selected { background: #eff6ff; color: #1d4ed8; font-weight: 600; }
        .ss-no-results { padding: 12px 14px; font-size: 13px; color: #9ca3af; text-align: center; }

        /* Modern Media Card */
        .modern-media-card {
          border: 2px solid #c7d2fe;
          background: linear-gradient(135deg, #faf5ff 0%, #eef2ff 100%);
        }

        .media-card-title {
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom-color: #c7d2fe;
        }

        .modern-media-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .modern-media-item.full-width {
          grid-column: auto;
        }

        /* Individual media field box */
        .media-field-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 16px;
          border: 2px solid #c7d2fe;
          border-radius: 14px;
          background: #ffffff;
        }

        /* Fixed-size image preview — always 140px tall, full width, image cover */
        .media-preview-fixed {
          position: relative;
          width: 100%;
          height: 140px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #e0e7ff;
          background: #f1f5f9;
          flex-shrink: 0;
        }

        .media-preview-fixed img {
          width: 100%;
          height: 140px;
          object-fit: contain;
          object-position: center;
          display: block;
          background: #f8fafc;
        }

        .media-preview-video {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef2ff;
        }

        .media-preview-remove {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 16px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s;
        }

        .media-preview-remove:hover {
          background: rgba(220, 38, 38, 0.85);
        }

        .media-file-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        /* Thumbnail preview — keep Thumbnail Preview */
        .modern-thumbnail-preview {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 160px;
          border: 1px dashed #d1d5db;
          border-radius: 10px;
          background: #f9fafb;
          overflow: hidden;
        }

        .modern-thumb-img {
          width: 100%;
          max-height: 200px;
          object-fit: contain;
          border-radius: 8px;
        }

        .modern-thumb-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 24px;
          color: #9ca3af;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .modern-form-layout {
            grid-template-columns: 1fr;
          }

          .modern-form-sidebar {
            position: static;
          }

          .modern-media-fields {
            grid-template-columns: 1fr;
          }

          .modern-media-item.full-width {
            grid-column: auto;
          }
        }

        .block-head {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f3f9;
        }

        .block-number {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef1ff;
          color: #4252a6;
          font-size: 12px;
          font-weight: 800;
          flex: 0 0 auto;
        }

        .block-head h4 {
          margin: 0;
          font-size: 15px;
          color: #1f2638;
          letter-spacing: -0.01em;
          font-weight: 700;
        }

        .block-head p {
          margin: 3px 0 0;
          color: #74809a;
          font-size: 12.5px;
          line-height: 1.45;
        }

        .field-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 20px 18px;
        }

        .field-group {
          grid-column: span 4;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .field-group.span-3 {
          grid-column: span 3;
        }

        .field-group.span-4 {
          grid-column: span 4;
        }

        .field-group.span-6 {
          grid-column: span 6;
        }

        .field-group.span-12 {
          grid-column: span 12;
        }

        .field-group.status-field {
          max-width: 260px;
        }

        .field-label {
          display: block;
          color: #344054;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .field-group > span {
          color: #475467;
          font-size: 12.5px;
          line-height: 1.2;
          font-weight: 600;
        }

        .field-group input,
        .field-group select,
        .field-group textarea {
          width: 100%;
          border: 1px solid #d0d5dd;
          border-radius: 8px;
          background: #ffffff;
          color: #1d2939;
          font: inherit;
          font-size: 14px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .field-group input,
        .field-group select {
          height: 44px;
          padding: 0 14px;
        }

        .field-group select {
          cursor: pointer;
        }

        .field-group textarea {
          min-height: 110px;
          padding: 10px 14px;
          resize: vertical;
          line-height: 1.6;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #98a2b3;
        }

        .field-group input:focus,
        .field-group select:focus,
        .field-group textarea:focus {
          outline: none;
          border-color: #5b6abf;
          box-shadow: 0 0 0 3px rgba(91, 106, 191, 0.12);
        }

        /* Rich Text Editor */
        .rich-editor-wrap {
          width: 100%;
          min-height: 300px;
        }

        .rich-editor-wrap :global(.ql-container) {
          min-height: 250px;
          font-size: 14px;
          border-radius: 0 0 8px 8px;
        }

        .rich-editor-wrap :global(.ql-toolbar) {
          border-radius: 8px 8px 0 0;
          background: #f9fafb;
        }

        .rich-editor-wrap :global(.ql-editor) {
          min-height: 250px;
        }

        /* Media Section */
        .media-section-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .media-section-item {
          min-width: 0;
        }

        .media-full-width {
          grid-column: auto;
        }

        .media-field-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .media-field-label {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
        }

        .media-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          border-radius: 999px;
          background: #eef2ff;
          color: #4f46e5;
          font-size: 11px;
          font-weight: 700;
        }

        .media-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
        }

        /* Drop box - modern with visible borders */
        .media-drop-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 28px 20px;
          border: 2px dashed #818cf8;
          border-radius: 16px;
          background: #ffffff;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.06);
        }

        .media-drop-box:hover,
        .media-drop-box.drag-over {
          border-color: #4f46e5;
          background: #eef2ff;
          box-shadow: 0 4px 16px rgba(79, 70, 229, 0.15);
        }

        .media-drop-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .media-drop-text {
          margin: 0;
          font-size: 14px;
          color: #475569;
          text-align: center;
          line-height: 1.5;
        }

        .media-drop-or {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 180px;
        }

        .media-drop-or::before,
        .media-drop-or::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .media-drop-or span {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .media-browse-btn {
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          background: #4f46e5;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
        }

        .media-browse-btn:hover {
          background: #4338ca;
          transform: translateY(-1px);
        }

        /* Thumbnail row for gallery - fixed size previews */
        .media-thumb-row {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(80px, 80px));
          gap: 10px;
        }

        .media-thumb {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #c7d2fe;
          flex-shrink: 0;
          background: #f8fafc;
        }

        .media-thumb img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          display: block;
        }

        .media-thumb-remove {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 20px;
          height: 20px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          font-size: 14px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.15s;
        }

        .media-thumb:hover .media-thumb-remove {
          opacity: 1;
        }

        .media-current-name {
          font-size: 12px;
          color: #475569;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
        }

        .media-remove-file {
          border: none;
          background: none;
          color: #ef4444;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .media-remove-file:hover {
          background: #fef2f2;
        }

        .media-field-card {
          display: none;
        }

        .media-field-header,
        .media-field-title-row,
        .media-title-icon,
        .media-field-title,
        .media-status-active,
        .media-field-body,
        .media-upload-area,
        .media-dropzone,
        .media-dropzone-icon,
        .media-dropzone-text,
        .media-dropzone-compact,
        .media-inline-preview,
        .media-preview-overlay,
        .media-file-info,
        .media-file-name,
        .media-clear-btn {
          /* legacy classes - no longer used */
        }

        .media-input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .media-input-label {
          font-size: 12px;
          font-weight: 600;
          color: #667085;
        }

        .media-url-input,
        .media-textarea {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #f9fafb;
          color: #0f172a;
          font: inherit;
          font-size: 13px;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .media-textarea {
          min-height: 64px;
          padding: 10px 14px;
          resize: vertical;
          line-height: 1.6;
        }

        .media-textarea::placeholder {
          color: #94a3b8;
        }

        .media-textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .media-or-divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .media-or-divider::before,
        .media-or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e4e7ec;
        }

        .media-or-divider span {
          font-size: 12px;
          color: #98a2b3;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .media-upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 42px;
          padding: 0 18px;
          border: 1px solid #d0d5dd;
          border-radius: 8px;
          background: #ffffff;
          color: #344054;
          font: inherit;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }

        .media-upload-btn:hover {
          border-color: #98a2b3;
          background: #f9fafb;
          box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
        }

        .media-upload-btn:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .media-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 10px;
        }

        .media-preview-item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          aspect-ratio: 1;
        }

        .media-preview-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .media-remove-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          color: #ffffff;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.15s ease;
        }

        .media-preview-item:hover .media-remove-btn {
          opacity: 1;
        }

        .hidden-file-input {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          padding-top: 22px;
          border-top: 1px solid #edf1f7;
        }

        .cancel-btn,
        .submit-btn {
          height: 44px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .submit-btn {
          box-shadow: 0 1px 3px rgba(47, 61, 122, 0.15);
        }

        .submit-btn:hover,
        .create-btn:hover,
        .refresh-btn:hover {
          filter: brightness(1.04);
        }

        .cancel-btn:hover,
        .close-form-btn:hover,
        .ghost-btn:hover {
          border-color: #bfc7dd;
          background: #f9fafb;
        }

        .action-btn:not(.danger):hover {
          background: #2f3d7a;
          color: #ffffff;
          border-color: #2f3d7a;
        }

        .action-btn.danger:hover {
          background: #c0344f;
          color: #ffffff;
          border-color: #c0344f;
        }

        /* Form controls override */
        .product-form-card .field-group select {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          padding-right: 40px !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 14px center !important;
          cursor: pointer !important;
        }

        @media (max-width: 1080px) {
          .field-group,
          .field-group.span-3 {
            grid-column: span 4;
          }

          .field-group.span-6 {
            grid-column: span 6;
          }

          .field-group.span-12 {
            grid-column: span 12;
          }

          .field-group.status-field {
            max-width: none;
          }
        }

        @media (max-width: 840px) {
          .inventory-toolbar,
          .empty-state {
            flex-direction: column;
            align-items: flex-start;
          }

          .inventory-filters {
            width: 100%;
          }

          .search-field {
            width: 100%;
            min-width: 0;
          }

          .table-actions {
            justify-content: flex-start;
          }

          .inventory-table thead th:nth-child(n + 5):not(:last-child),
          .inventory-table tbody td:nth-child(n + 5):not(:last-child) {
            display: none;
          }

          .product-form-header {
            flex-direction: column;
          }

          .product-entry-form,
          .product-form-header {
            padding-left: 20px;
            padding-right: 20px;
          }

          .form-block {
            padding: 18px;
          }

          .field-group,
          .field-group.span-3,
          .field-group.span-4,
          .field-group.span-6,
          .field-group.span-12 {
            grid-column: span 12;
          }

          .media-section-grid {
            grid-template-columns: 1fr;
          }

          .media-full-width {
            grid-column: auto;
          }
        }

        @media (max-width: 560px) {
          .inventory-card,
          .admin-content {
            padding-left: 12px;
            padding-right: 12px;
          }

          .inventory-table thead th:nth-child(3),
          .inventory-table tbody td:nth-child(3) {
            width: auto;
          }

          .inventory-table thead th:nth-child(n + 4):not(:last-child),
          .inventory-table tbody td:nth-child(n + 4):not(:last-child) {
            display: none;
          }

          .product-form-card {
            border-radius: 16px;
          }

          .product-entry-form,
          .product-form-header {
            padding: 16px;
          }

          .product-form-header h3 {
            font-size: 20px;
          }

          .block-head {
            gap: 10px;
          }

          .form-actions {
            flex-direction: column-reverse;
            align-items: stretch;
          }

          .cancel-btn,
          .submit-btn,
          .close-form-btn {
            width: 100%;
          }
        }
      `}</style>
    </SecureAdminLayout>
  )
}

export default ModernTableManager
