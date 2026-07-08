import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const email = String(req.body?.email || '').trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  try {
    const db = getDbPool()

    // Check if already subscribed
    const [existing] = await db.execute(
      'SELECT id FROM newsletter_subscribers WHERE email = ? LIMIT 1',
      [email]
    )

    if (existing.length > 0) {
      return res.status(200).json({ success: true, message: 'You are already subscribed!' })
    }

    await db.execute(
      'INSERT INTO newsletter_subscribers (email, subscribed_at) VALUES (?, NOW())',
      [email]
    )

    return res.status(201).json({ success: true, message: 'Subscribed successfully!' })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return res.status(500).json({ error: 'Unable to subscribe. Please try again later.' })
  }
}
