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

const toCategoryKey = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const getProductImage = (row) => {
  if (row.thumbnail_1) return row.thumbnail_1
  if (row.thumbnail_2) return row.thumbnail_2

  if (!row.photos) return null

  try {
    const parsedPhotos =
      typeof row.photos === 'string' ? JSON.parse(row.photos) : row.photos
    if (Array.isArray(parsedPhotos) && parsedPhotos.length > 0) {
      return parsedPhotos[0]
    }
  } catch (error) {
    return null
  }

  return null
}

const getProductImages = (row) => {
  const images = []

  if (row.thumbnail_1) images.push(row.thumbnail_1)
  if (row.thumbnail_2) images.push(row.thumbnail_2)

  if (row.photos) {
    try {
      const parsedPhotos =
        typeof row.photos === 'string' ? JSON.parse(row.photos) : row.photos
      if (Array.isArray(parsedPhotos)) {
        parsedPhotos.forEach((photo) => {
          if (photo && !images.includes(photo)) images.push(photo)
        })
      }
    } catch (error) {
      return images
    }
  }

  return images
}

const mapProductRow = (row) => ({
  id: row.id,
  name: row.name,
  description: row.short_desc || 'No description available.',
  price: Number(row.price || 0),
  type: row.type || 'Hardware',
  stockQty: Number(row.stock_qty || 0),
  image: getProductImage(row),
  images: getProductImages(row),
  categoryName: row.category_name || row.type || 'General',
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
  categoryName: row.category_name || 'General',
  filterCategory: toCategoryKey(row.category_name || 'General') || 'general',
})

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
      p.id,
      p.name,
      p.short_desc,
      p.long_desc,
      p.price,
      p.type,
      p.stock_qty,
      p.thumbnail_1,
      p.thumbnail_2,
      p.photos,
      c.name AS category_name
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
      p.id,
      p.name,
      p.short_desc,
      p.price,
      p.type,
      p.stock_qty,
      p.thumbnail_1,
      p.thumbnail_2,
      p.photos,
      c.name AS category_name
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

export const getCatalogProductById = async (id) => {
  const db = getDbPool()
  const safeId = Number(id)
  const inClause = buildInClause(RETAIL_CATEGORY_NAMES)

  if (!Number.isInteger(safeId) || safeId <= 0) {
    return null
  }

  const [rows] = await db.execute(
    `SELECT
      p.id,
      p.name,
      p.short_desc,
      p.price,
      p.type,
      p.stock_qty,
      p.thumbnail_1,
      p.thumbnail_2,
      p.photos,
      c.name AS category_name
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    WHERE p.id = ?
      AND p.deleted_at IS NULL
      AND p.is_active = 1
      AND c.name IN (${inClause})
    LIMIT 1`,
    [safeId, ...RETAIL_CATEGORY_NAMES]
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
