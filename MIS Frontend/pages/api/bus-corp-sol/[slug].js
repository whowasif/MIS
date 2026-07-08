import { getStructuredContentBySlug } from '../../../lib/server/products'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const slug = String(req.query?.slug || '').trim()
    const item = await getStructuredContentBySlug('bus_corp_sol', slug)

    if (!item) {
      return res.status(404).json({ success: false, error: 'Business/corporate solution not found' })
    }

    return res.status(200).json({ success: true, item })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load business/corporate solution by slug',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
