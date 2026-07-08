import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const q = String(req.query.q || '').trim()
  if (!q || q.length < 2) {
    return res.status(200).json({ products: [], services: [] })
  }

  const searchPattern = `%${q}%`
  const db = getDbPool()

  try {
    // Search products
    const [products] = await db.execute(
      `SELECT p.id, p.name, p.slug, p.short_desc, p.price, p.type, p.thumbnail_1, p.brand, p.model,
              c.name AS category_name
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
         AND (p.name LIKE ? OR p.short_desc LIKE ? OR p.type LIKE ? OR p.brand LIKE ? OR p.model LIKE ?)
       ORDER BY p.name ASC LIMIT 20`,
      [searchPattern, searchPattern, searchPattern, searchPattern, searchPattern]
    )

    // Search digital services
    const [digiServices] = await db.execute(
      `SELECT id, name, slug, description, 'digital-services' AS page_type
       FROM digi_services
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`,
      [searchPattern, searchPattern]
    )

    // Search business & corporate solutions
    const [bizServices] = await db.execute(
      `SELECT id, name, slug, description, 'enterprise-solutions' AS page_type
       FROM bus_corp_sol
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`,
      [searchPattern, searchPattern]
    )

    // Search maintenance services
    const [maintServices] = await db.execute(
      `SELECT id, name, slug, description, 'maintenance-support' AS page_type
       FROM service_maintenance
       WHERE deleted_at IS NULL AND status = 'active'
         AND (name LIKE ? OR description LIKE ?)
       LIMIT 5`,
      [searchPattern, searchPattern]
    )

    const services = [...digiServices, ...bizServices, ...maintServices]

    return res.status(200).json({
      products: JSON.parse(JSON.stringify(products)),
      services: JSON.parse(JSON.stringify(services)),
    })
  } catch (error) {
    console.error('Search error:', error)
    return res.status(500).json({ error: 'Search failed.' })
  }
}
