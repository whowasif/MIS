import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import { getDbPool } from '../../../lib/server/db'

export const config = { api: { bodyParser: false } }

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'resumes')
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']

const ensureUploadDir = () => {
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true })
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  ensureUploadDir()

  const form = formidable({
    uploadDir: UPLOAD_DIR,
    keepExtensions: true,
    maxFileSize: MAX_FILE_SIZE,
    filter: ({ mimetype, originalFilename }) => {
      const ext = path.extname(originalFilename || '').toLowerCase()
      return ALLOWED_EXTENSIONS.includes(ext)
    },
  })

  try {
    const [fields, files] = await form.parse(req)

    const careerPostId = fields.careerPostId?.[0] || fields.careerPostId
    const applicantName = String(fields.name?.[0] || fields.name || '').trim()
    const email = String(fields.email?.[0] || fields.email || '').trim()
    const phone = String(fields.phone?.[0] || fields.phone || '').trim()
    const coverLetter = String(fields.coverLetter?.[0] || fields.coverLetter || '').trim()

    const resumeFile = files.resume?.[0] || files.resume
    if (!resumeFile) {
      return res.status(400).json({ error: 'Resume file is required.' })
    }

    if (!careerPostId || !applicantName || !email) {
      // Clean up uploaded file
      if (resumeFile?.filepath) fs.unlinkSync(resumeFile.filepath)
      return res.status(400).json({ error: 'Name, email, and job position are required.' })
    }

    // Rename file to unique name
    const ext = path.extname(resumeFile.originalFilename || resumeFile.newFilename || '.pdf')
    const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`
    const finalPath = path.join(UPLOAD_DIR, uniqueName)

    fs.renameSync(resumeFile.filepath, finalPath)

    const resumeUrl = `/uploads/resumes/${uniqueName}`

    // Save to database
    const db = getDbPool()
    await db.execute(
      `INSERT INTO career_applications (career_post_id, applicant_name, email, phone, cover_letter, resume_path)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [careerPostId, applicantName, email, phone || null, coverLetter || null, resumeUrl]
    )

    return res.status(201).json({ success: true, message: 'Application submitted successfully.' })
  } catch (error) {
    console.error('Career application error:', error)
    if (error.code === 'LIMIT_FILE_SIZE' || error.httpCode === 413) {
      return res.status(413).json({ error: 'File too large. Maximum 5MB allowed.' })
    }
    return res.status(500).json({ error: 'Failed to submit application. Please try again.' })
  }
}
