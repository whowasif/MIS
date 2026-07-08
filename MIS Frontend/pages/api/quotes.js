import { getDbPool } from '../../lib/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { clientName, companyName, email, projectType, requirements } = req.body || {}

  if (!clientName || !email || !requirements) {
    return res.status(400).json({ error: 'Client name, email, and requirements are required.' })
  }

  const db = getDbPool()

  try {
    const [result] = await db.execute(
      `INSERT INTO quotes (client_name, company_name, email, project_type, requirements_text, status)
       VALUES (?, ?, ?, ?, ?, 'new')`,
      [
        String(clientName).trim(),
        String(companyName || '').trim(),
        String(email).trim(),
        String(projectType || '').trim(),
        String(requirements).trim(),
      ]
    )

    return res.status(201).json({
      success: true,
      quoteId: result.insertId,
      message: 'Quote request submitted successfully.',
    })
  } catch (error) {
    console.error('Quote submission error:', error)
    return res.status(500).json({ error: 'Unable to submit quote request. Please try again.' })
  }
}
