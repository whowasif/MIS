import { logVisitorEvent } from '../../lib/server/activity-log'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false })
  }

  try {
    const { eventType, page, searchQuery, productId, productName } = req.body || {}

    if (!eventType) {
      return res.status(400).json({ success: false, error: 'Missing eventType' })
    }

    const allowedTypes = ['page_view', 'search', 'product_view', 'add_to_cart']
    if (!allowedTypes.includes(eventType)) {
      return res.status(400).json({ success: false, error: 'Invalid eventType' })
    }

    const ipAddress = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || null
    const userAgent = req.headers['user-agent'] || null
    const referrer = req.headers['referer'] || null

    await logVisitorEvent({
      eventType,
      page: page || null,
      searchQuery: searchQuery || null,
      productId: productId || null,
      productName: productName || null,
      ipAddress,
      userAgent,
      referrer,
      customerId: null,
    })

    return res.status(200).json({ success: true })
  } catch (e) {
    return res.status(500).json({ success: false })
  }
}
