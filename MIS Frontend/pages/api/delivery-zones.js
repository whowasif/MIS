import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const db = getDbPool()
    const [zones] = await db.query(
      'SELECT id, zone_name, charge, estimated_days FROM delivery_zones WHERE is_active = 1 ORDER BY charge ASC'
    )
    return res.status(200).json({ zones })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to load delivery zones.' })
  }
}
