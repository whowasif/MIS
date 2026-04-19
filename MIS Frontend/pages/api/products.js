import { listCatalogProducts } from '../../lib/server/products'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const limit = req.query.limit ? Number(req.query.limit) : 100
    const products = await listCatalogProducts(limit)

    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load catalog products from database',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
