import { getPrimaryCompanyContact } from '../../lib/server/company-contacts'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const contact = await getPrimaryCompanyContact()
    return res.status(200).json({ success: true, contact })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to load company contact information',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
