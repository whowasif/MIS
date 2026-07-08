import { getCatalogProductBySlug } from '../../../lib/server/products'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const slug = String(req.query?.slug || '').trim()
    const product = await getCatalogProductBySlug(slug)

    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' })
    }

    return res.status(200).json({ success: true, product })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load product by slug',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
