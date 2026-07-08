import { getDbPool } from './db'

const RETAIL_CATEGORY_NAMES = [
  'Hardware',
  'Software',
  'Components',
  'Accessories',
  'Office Equipment',
  'Power Solution',
]

const BUSINESS_CATEGORY_NAMES = [
  'Enterprise Solution',
  'Networking',
  'Security Solution',
  'Printing Solution',
]

const DIGITAL_SERVICE_CATEGORY_NAMES = ['MIS Digital Services']
const MAINTENANCE_CATEGORY_NAMES = ['Service & Maintenance']

const STRUCTURED_CONTENT_TABLES = new Set([
  'categories',
  'digi_services',
  'bus_corp_sol',
  'service_maintenance',
])

const toCategoryKey = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const normalizeMediaUrl = (value) => {
  if (!value) return null

  const rawValue = String(value).trim().replace(/\\/g, '/')
  if (!rawValue) return null

  if (rawValue.startsWith('http://') || rawValue.startsWith('https://')) {
    return rawValue
  }

  if (rawValue.startsWith('file:///')) {
    const filePath = rawValue.replace(/^file:\/\//i, '')
    const uploadsIndex = filePath.toLowerCase().lastIndexOf('/uploads/admin/')
    if (uploadsIndex !== -1) {
      return filePath.slice(uploadsIndex)
    }
  }

  const uploadsIndex = rawValue.toLowerCase().lastIndexOf('/uploads/admin/')
  if (uploadsIndex !== -1) {
    return rawValue.slice(uploadsIndex)
  }

  const publicUploadsIndex = rawValue.toLowerCase().lastIndexOf('/public/uploads/admin/')
  if (publicUploadsIndex !== -1) {
    return rawValue.slice(publicUploadsIndex + '/public'.length)
  }

  if (rawValue.includes('uploads/admin/')) {
    return `/${rawValue.slice(rawValue.toLowerCase().indexOf('uploads/admin/'))}`
  }

  if (rawValue.startsWith('/')) {
    return rawValue
  }

  return rawValue
}

const getProductImage = (row) => {
  const thumbnail1 = normalizeMediaUrl(row.thumbnail_1)
  const thumbnail2 = normalizeMediaUrl(row.thumbnail_2)

  if (thumbnail1) return thumbnail1
  if (thumbnail2) return thumbnail2

  if (!row.photos) return null

  try {
    const parsedPhotos =
      typeof row.photos === 'string' ? JSON.parse(row.photos) : row.photos
    if (Array.isArray(parsedPhotos) && parsedPhotos.length > 0) {
      return normalizeMediaUrl(parsedPhotos[0])
    }
  } catch (error) {
    return null
  }

  return null
}

const getProductImages = (row) => {
  const images = []

  const thumbnail1 = normalizeMediaUrl(row.thumbnail_1)
  const thumbnail2 = normalizeMediaUrl(row.thumbnail_2)

  if (thumbnail1) images.push(thumbnail1)
  if (thumbnail2) images.push(thumbnail2)

  if (row.photos) {
    try {
      const parsedPhotos =
        typeof row.photos === 'string' ? JSON.parse(row.photos) : row.photos
      if (Array.isArray(parsedPhotos)) {
        parsedPhotos.forEach((photo) => {
          const normalizedPhoto = normalizeMediaUrl(photo)
          if (normalizedPhoto && !images.includes(normalizedPhoto)) images.push(normalizedPhoto)
        })
      }
    } catch (error) {
      return images
    }
  }

  return images
}

const getProductVideoUrl = (row) => {
  if (!row || typeof row !== 'object') return null

  const preferredKeys = ['video_url', 'video_link', 'video', 'product_video', 'promo_video']

  for (const key of preferredKeys) {
    const normalized = normalizeMediaUrl(row[key])
    if (normalized) return normalized
  }

  const dynamicVideoKey = Object.keys(row).find((key) => {
    const lower = String(key || '').toLowerCase()
    if (!lower.includes('video')) return false
    return typeof row[key] === 'string' && row[key].trim().length > 0
  })

  if (!dynamicVideoKey) return null
  return normalizeMediaUrl(row[dynamicVideoKey])
}

const mapProductRow = (row) => ({
  id: row.id,
  slug: row.slug,
  name: row.name,
  description: row.short_desc || row.long_desc || 'No description available.',
  shortDesc: row.short_desc || '',
  longDesc: row.long_desc || '',
  features: row.features || '',
  specifications: row.specifications || null,
  brand: row.brand || '',
  model: row.model || '',
  regularPrice: Number(row.regular_price || 0),
  price: Number(row.price || 0),
  type: row.type || 'Hardware',
  stockQty: Number(row.stock_qty || 0),
  image: getProductImage(row),
  images: getProductImages(row),
  videoUrl: getProductVideoUrl(row),
  categoryName: row.category_name || row.type || 'General',
  categorySlug: row.category_slug || toCategoryKey(row.category_name || row.type || 'General') || 'general',
  filterCategory: toCategoryKey(row.category_name || row.type || 'General') || 'general',
})

const mapServiceRow = (row) => ({
  id: row.id,
  name: row.name,
  description: row.short_desc || row.long_desc || 'No description available.',
  type: row.type || 'Service',
  stockQty: Number(row.stock_qty || 0),
  image: getProductImage(row),
  images: getProductImages(row),
  videoUrl: getProductVideoUrl(row),
  categoryName: row.category_name || 'General',
  filterCategory: toCategoryKey(row.category_name || 'General') || 'general',
})

const normalizeStructuredContentRow = (row) => ({
  id: row.id,
  name: row.name,
  slug: row.slug,
  description: row.description || '',
  iconUrl: normalizeMediaUrl(row.icon_url),
  status: row.status || '',
  displayOrder: Number(row.display_order || 0),
  deletedAt: row.deleted_at || null,
})

const getStructuredContentTable = (tableName) => {
  const normalized = String(tableName || '').trim().toLowerCase()

  if (!STRUCTURED_CONTENT_TABLES.has(normalized)) {
    throw new Error(`Unsupported content table: ${tableName}`)
  }

  return normalized
}

export const listStructuredContent = async (tableName, limit = 100) => {
  const db = getDbPool()
  const safeTable = getStructuredContentTable(tableName)
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(300, Number(limit))) : 100

  const [rows] = await db.query(
    `SELECT
      id,
      name,
      slug,
      description,
      icon_url,
      status,
      display_order,
      deleted_at
    FROM ${safeTable}
    WHERE deleted_at IS NULL
      AND status = 'active'
    ORDER BY display_order ASC, id ASC
    LIMIT ${safeLimit}`
  )

  return rows.map(normalizeStructuredContentRow)
}

export const getStructuredContentBySlug = async (tableName, slug) => {
  const db = getDbPool()
  const safeTable = getStructuredContentTable(tableName)
  const safeSlug = String(slug || '').trim().toLowerCase()

  if (!safeSlug) return null

  const [rows] = await db.execute(
    `SELECT
      id,
      name,
      slug,
      description,
      icon_url,
      status,
      display_order,
      deleted_at
    FROM ${safeTable}
    WHERE deleted_at IS NULL
      AND LOWER(COALESCE(slug, '')) = ?
    LIMIT 1`,
    [safeSlug]
  )

  if (!rows.length) return null
  return normalizeStructuredContentRow(rows[0])
}

export const listCatalogCategories = async (limit = 50) => {
  const rows = await listStructuredContent('categories', limit)

  return rows.map((row) => ({
    key: row.slug || toCategoryKey(row.name),
    label: row.name,
    iconUrl: row.iconUrl,
  }))
}

export const listDigitalServiceEntries = async (limit = 100) => listStructuredContent('digi_services', limit)

export const listBusinessSolutionEntries = async (limit = 100) =>
  listStructuredContent('bus_corp_sol', limit)

export const listMaintenanceSupportEntries = async (limit = 100) =>
  listStructuredContent('service_maintenance', limit)

const buildInClause = (items) => items.map(() => '?').join(', ')

const listProductsByCategoryNames = async (categoryNames, limit = 100) => {
  const db = getDbPool()
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(300, Number(limit))) : 100
  const safeCategoryNames = Array.isArray(categoryNames)
    ? categoryNames.filter(Boolean)
    : []

  if (!safeCategoryNames.length) return []

  const inClause = buildInClause(safeCategoryNames)

  const [rows] = await db.execute(
    `SELECT
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.deleted_at IS NULL
      AND p.is_active = 1
      AND c.name IN (${inClause})
    ORDER BY c.name ASC, p.updated_at DESC
    LIMIT ${safeLimit}`,
    safeCategoryNames
  )

  return rows.map(mapServiceRow)
}

export const listCatalogProducts = async (limit = 100) => {
  const db = getDbPool()
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(200, Number(limit))) : 100
  const inClause = buildInClause(RETAIL_CATEGORY_NAMES)

  const [rows] = await db.execute(
    `SELECT
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.deleted_at IS NULL
      AND p.is_active = 1
      AND c.name IN (${inClause})
    ORDER BY p.updated_at DESC
    LIMIT ${safeLimit}`,
    RETAIL_CATEGORY_NAMES
  )

  return rows.map(mapProductRow)
}

export const listCatalogProductsByCategorySlug = async (categorySlug, limit = 100) => {
  const db = getDbPool()
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(200, Number(limit))) : 100
  const safeSlug = String(categorySlug || '').trim().toLowerCase()
  const inClause = buildInClause(RETAIL_CATEGORY_NAMES)

  if (!safeSlug) return []

  const [rows] = await db.execute(
    `SELECT
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.deleted_at IS NULL
      AND p.is_active = 1
      AND LOWER(COALESCE(c.slug, '')) = ?
      AND c.name IN (${inClause})
    ORDER BY p.updated_at DESC
    LIMIT ${safeLimit}`,
    [safeSlug, ...RETAIL_CATEGORY_NAMES]
  )

  return rows.map(mapProductRow)
}

export const getCatalogProductBySlug = async (slug) => {
  const db = getDbPool()
  const safeSlug = String(slug || '').trim().toLowerCase()

  if (!safeSlug) {
    return null
  }

  const [rows] = await db.execute(
    `SELECT
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE (LOWER(COALESCE(p.slug, '')) = ? OR p.id = ?)
      AND p.deleted_at IS NULL
      AND p.is_active = 1
    LIMIT 1`,
    [safeSlug, safeSlug]
  )

  if (!rows.length) return null

  return mapProductRow(rows[0])
}

export const listBusinessSolutionProducts = async (limit = 100) =>
  listProductsByCategoryNames(BUSINESS_CATEGORY_NAMES, limit)

export const listDigitalServiceProducts = async (limit = 100) =>
  listProductsByCategoryNames(DIGITAL_SERVICE_CATEGORY_NAMES, limit)

export const listMaintenanceSupportProducts = async (limit = 100) =>
  listProductsByCategoryNames(MAINTENANCE_CATEGORY_NAMES, limit)

export const listFeaturedProducts = async (limit = 10) => {
  const db = getDbPool()
  const safeLimit = Number.isFinite(limit) ? Math.max(1, Math.min(50, Number(limit))) : 10

  const [rows] = await db.query(
    `SELECT
      p.*,
      c.name AS category_name,
      c.slug AS category_slug
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.deleted_at IS NULL
      AND p.is_active = 1
      AND p.is_featured = 1
    ORDER BY p.updated_at DESC
    LIMIT ${safeLimit}`
  )

  return rows.map(mapProductRow)
}
