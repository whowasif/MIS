import crypto from 'crypto'
import { promises as fs } from 'fs'
import path from 'path'

import { IncomingForm } from 'formidable'

import { requireAdminApiAuth } from '../../../lib/auth/require-admin'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadsDirectory = path.join(process.cwd(), 'public', 'uploads', 'admin')
const allowedMimePrefixes = ['image/', 'video/']

const moveUploadedFile = async (sourcePath, targetPath) => {
  try {
    await fs.rename(sourcePath, targetPath)
  } catch (error) {
    if (error.code !== 'EXDEV') {
      throw error
    }

    await fs.copyFile(sourcePath, targetPath)
    await fs.unlink(sourcePath)
  }
}

const parseForm = (request) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({
      multiples: false,
      keepExtensions: true,
      maxFileSize: 250 * 1024 * 1024,
    })

    form.parse(request, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ fields, files })
    })
  })

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed.' })
  }

  const auth = await requireAdminApiAuth(req)
  if (!auth.ok) {
    return res.status(auth.status).json({ success: false, error: auth.error })
  }

  try {
    const { files } = await parseForm(req)
    const uploadFile = Array.isArray(files.file) ? files.file[0] : files.file

    if (!uploadFile) {
      return res.status(400).json({ success: false, error: 'No file uploaded.' })
    }

    const mimeType = String(uploadFile.mimetype || uploadFile.type || '').toLowerCase()
    const isAllowedType = allowedMimePrefixes.some((prefix) => mimeType.startsWith(prefix))

    if (!isAllowedType) {
      return res.status(400).json({
        success: false,
        error: 'Only image and video files are allowed.',
      })
    }

    await fs.mkdir(uploadsDirectory, { recursive: true })

    const originalName = String(uploadFile.originalFilename || uploadFile.name || 'upload').replace(/[^a-zA-Z0-9._-]/g, '_')
    const extension = path.extname(originalName) || path.extname(uploadFile.filepath || '')
    const fileName = `${Date.now()}-${crypto.randomBytes(6).toString('hex')}${extension}`
    const destination = path.join(uploadsDirectory, fileName)

    await moveUploadedFile(uploadFile.filepath, destination)

    return res.status(200).json({
      success: true,
      url: `/uploads/admin/${fileName}`,
      path: destination,
      name: originalName,
      mimeType,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Unable to upload file.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
