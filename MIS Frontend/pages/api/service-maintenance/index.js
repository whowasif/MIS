import { listStructuredContent } from '../../../lib/server/products'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const limit = req.query.limit ? Number(req.query.limit) : 100
    const items = await listStructuredContent('service_maintenance', limit)

    return res.status(200).json({
      success: true,
      count: items.length,
      items,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load service maintenance items',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
