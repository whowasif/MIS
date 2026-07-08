import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Handle both JSON body and form-encoded body
  const body = req.body || {}
  const clientName = String(body['full-name'] || body.fullName || '').trim()
  const email = String(body['email-address'] || body.email || '').trim()
  const serviceType = String(body['service-type'] || body.service || body.serviceType || '').trim()
  const message = String(body.message || body.requirements || '').trim()

  if (!clientName || !email || !message) {
    // Redirect back with error for form submissions
    return res.redirect(302, '/contact?status=error')
  }

  const db = getDbPool()

  try {
    await db.execute(
      `INSERT INTO quotes (client_name, company_name, email, project_type, requirements_text, status)
       VALUES (?, ?, ?, ?, ?, 'new')`,
      [clientName, '', email, serviceType || 'General Inquiry', message]
    )

    // Redirect back to contact page with success
    return res.redirect(302, '/contact?status=success')
  } catch (error) {
    console.error('Inquiry submission error:', error)
    return res.redirect(302, '/contact?status=error')
  }
}
