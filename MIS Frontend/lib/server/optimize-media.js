const { execFile, spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const MAX_EDGE = 1600
const MAX_IMAGE_BYTES = Math.floor(1.5 * 1024 * 1024)
const MAX_VIDEO_BYTES = 12 * 1024 * 1024
const CARD_EDGE = 800
const CARD_QUALITY = 85
const DETAIL_EDGE = 1600
const DETAIL_QUALITY = 88
const LOGO_EDGE = 1600
const LOGO_QUALITY = 95
const LOGO_NAMES = new Set(['footer logo.png', 'mis_logo_cut-w.png'])

const commandExists = (name) => {
  const checker = process.platform === 'win32' ? 'where' : 'which'
  const result = spawnSync(checker, [name], { stdio: 'ignore', windowsHide: true })
  return result.status === 0
}

const resolveBinary = (names) => {
  for (const name of names) {
    if (name.includes('/') || name.includes('\\')) {
      if (fs.existsSync(name)) return name
      continue
    }
    if (commandExists(name)) return name
  }
  return null
}

const execFileAsync = (command, args, timeout = 180000) =>
  new Promise((resolve, reject) => {
    execFile(command, args, { timeout, windowsHide: true, maxBuffer: 8 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        error.stderr = stderr
        reject(error)
        return
      }
      resolve(String(stdout || ''))
    })
  })

const isImageMagick = (binary) => {
  const result = spawnSync(binary, ['-version'], { encoding: 'utf8', windowsHide: true })
  const text = `${result.stdout || ''}\n${result.stderr || ''}`
  return result.status === 0 && /ImageMagick/i.test(text)
}

let cachedImageTool
let imageToolChecked = false
const imageTool = () => {
  if (imageToolChecked) return cachedImageTool
  imageToolChecked = true
  for (const name of ['magick', '/usr/bin/magick', 'convert', '/usr/bin/convert']) {
    const binary = resolveBinary([name])
    if (binary && isImageMagick(binary)) {
      cachedImageTool = binary
      return cachedImageTool
    }
  }
  cachedImageTool = null
  return null
}

const videoTool = () => resolveBinary(['ffmpeg', '/usr/bin/ffmpeg', '/usr/local/bin/ffmpeg'])

const isMagick7 = (binary) => path.basename(binary).toLowerCase() === 'magick'

const identify = async (binary, filePath) => {
  const identifyBin = isMagick7(binary)
    ? binary
    : resolveBinary(['identify', '/usr/bin/identify'])
  if (!identifyBin) return null
  try {
    const output = await execFileAsync(
      identifyBin,
      isMagick7(binary) ? ['identify', '-format', '%w %h', filePath] : ['-format', '%w %h', filePath]
    )
    const [width, height] = output.trim().split(/\s+/).map((value) => Number(value))
    if (!width || !height) return null
    return { width, height }
  } catch (error) {
    return null
  }
}

const optimizeImageFile = async (filePath) => {
  const original = await fs.promises.stat(filePath)
  const binary = imageTool()

  if (!binary) {
    if (original.size <= MAX_IMAGE_BYTES) return { ok: true, skipped: true }
    return { ok: false, error: 'This image is too large, and the server has no image resizer installed.' }
  }

  const dimensions = await identify(binary, filePath)
  const alreadySmall = original.size <= MAX_IMAGE_BYTES
    && dimensions
    && dimensions.width <= MAX_EDGE
    && dimensions.height <= MAX_EDGE
  if (alreadySmall) return { ok: true, skipped: true }

  const extension = path.extname(filePath) || '.img'
  const temporaryPath = `${filePath}.opt${extension}`
  const resizeArgs = ['-auto-orient', '-resize', `${MAX_EDGE}x${MAX_EDGE}>`, '-strip']
  const lowerExtension = extension.toLowerCase()
  if (lowerExtension === '.jpg' || lowerExtension === '.jpeg') resizeArgs.push('-quality', '82')
  if (lowerExtension === '.png') resizeArgs.push('-define', 'png:compression-level=9')

  const args = isMagick7(binary)
    ? [filePath, ...resizeArgs, temporaryPath]
    : [filePath, ...resizeArgs, temporaryPath]

  try {
    await execFileAsync(binary, args)
    const verified = await identify(binary, temporaryPath)
    const nextStat = await fs.promises.stat(temporaryPath)
    if (!verified || nextStat.size <= 0 || nextStat.size >= original.size) {
      await fs.promises.unlink(temporaryPath).catch(() => {})
      if (original.size <= MAX_IMAGE_BYTES * 2) return { ok: true, skipped: true }
      return { ok: false, error: 'The image could not be made smaller.' }
    }
    await fs.promises.rename(temporaryPath, filePath)
    return { ok: true, bytes: nextStat.size }
  } catch (error) {
    await fs.promises.unlink(temporaryPath).catch(() => {})
    if (original.size <= MAX_IMAGE_BYTES) return { ok: true, skipped: true }
    return { ok: false, error: 'The image could not be resized.' }
  }
}

const optimizeVideoFile = async (filePath) => {
  const original = await fs.promises.stat(filePath)
  if (original.size <= MAX_VIDEO_BYTES) return { ok: true, skipped: true }

  const binary = videoTool()
  if (!binary) {
    return { ok: false, error: 'This video is larger than 12 MB. Upload a smaller video.' }
  }

  const temporaryPath = `${filePath}.opt.mp4`
  try {
    await execFileAsync(binary, [
      '-y',
      '-i', filePath,
      '-vf', "scale='min(1280,iw)':-2",
      '-c:v', 'libx264',
      '-preset', 'veryfast',
      '-crf', '30',
      '-an',
      '-movflags', '+faststart',
      temporaryPath,
    ], 300000)
    const nextStat = await fs.promises.stat(temporaryPath)
    if (nextStat.size <= 0 || nextStat.size >= original.size) {
      await fs.promises.unlink(temporaryPath).catch(() => {})
      return { ok: false, error: 'The video could not be made smaller.' }
    }
    await fs.promises.rename(temporaryPath, filePath)
    return { ok: true, bytes: nextStat.size }
  } catch (error) {
    await fs.promises.unlink(temporaryPath).catch(() => {})
    return { ok: false, error: 'The video could not be compressed.' }
  }
}

const derivativePath = (filePath, kind) => {
  const extension = path.extname(filePath)
  return `${filePath.slice(0, filePath.length - extension.length)}.${kind}.webp`
}

const isDerivativeName = (filePath) => /\.(card|detail)\.webp$/i.test(path.basename(filePath))

const needsWrite = async (sourcePath, targetPath) => {
  try {
    const [sourceStat, targetStat] = await Promise.all([
      fs.promises.stat(sourcePath),
      fs.promises.stat(targetPath),
    ])
    return targetStat.size <= 0 || targetStat.mtimeMs < sourceStat.mtimeMs
  } catch (error) {
    return true
  }
}

const writeOneDerivative = async (binary, filePath, targetPath, edge, quality) => {
  if (!(await needsWrite(filePath, targetPath))) return { ok: true, skipped: true }
  const temporaryPath = targetPath.replace(/\.webp$/i, '.tmp.webp')
  const args = [
    filePath,
    '-auto-orient',
    '-resize',
    `${edge}x${edge}>`,
    '-strip',
    '-quality',
    String(quality),
    temporaryPath,
  ]
  try {
    await execFileAsync(binary, args)
    const nextStat = await fs.promises.stat(temporaryPath)
    if (nextStat.size <= 0) {
      await fs.promises.unlink(temporaryPath).catch(() => {})
      return { ok: false, error: 'The display image was empty.' }
    }
    await fs.promises.rename(temporaryPath, targetPath)
    return { ok: true, bytes: nextStat.size }
  } catch (error) {
    await fs.promises.unlink(temporaryPath).catch(() => {})
    const detail = String(error.stderr || error.message || '')
      .split('\n')
      .map((line) => line.trim())
      .find(Boolean)
    return { ok: false, error: (detail || 'The display image could not be written.').slice(0, 240) }
  }
}

const writeDisplayDerivatives = async (filePath) => {
  if (isDerivativeName(filePath) || !/\.(png|jpe?g|webp)$/i.test(filePath)) {
    return { ok: true, skipped: true }
  }
  const binary = imageTool()
  if (!binary) return { ok: true, skipped: true, reason: 'no-image-tool' }

  const logo = LOGO_NAMES.has(path.basename(filePath).toLowerCase())
  const card = await writeOneDerivative(
    binary,
    filePath,
    derivativePath(filePath, 'card'),
    logo ? LOGO_EDGE : CARD_EDGE,
    logo ? LOGO_QUALITY : CARD_QUALITY
  )
  const detail = await writeOneDerivative(
    binary,
    filePath,
    derivativePath(filePath, 'detail'),
    logo ? LOGO_EDGE : DETAIL_EDGE,
    logo ? LOGO_QUALITY : DETAIL_QUALITY
  )
  if (!card.ok && !detail.ok) return { ok: false, error: card.error || detail.error }
  return { ok: true, card, detail }
}

const writeVideoPoster = async (videoPath, posterPath) => {
  if (!fs.existsSync(videoPath)) return { ok: true, skipped: true }
  const binary = videoTool()
  if (!binary) return { ok: false, error: 'ffmpeg is not installed, so the hero poster was not created.' }
  const temporaryPath = `${posterPath}.tmp.jpg`
  try {
    await execFileAsync(binary, [
      '-y',
      '-ss', '0',
      '-i', videoPath,
      '-frames:v', '1',
      '-q:v', '3',
      temporaryPath,
    ], 60000)
    const nextStat = await fs.promises.stat(temporaryPath)
    if (nextStat.size <= 0) {
      await fs.promises.unlink(temporaryPath).catch(() => {})
      return { ok: false, error: 'The hero poster was empty.' }
    }
    await fs.promises.rename(temporaryPath, posterPath)
    return { ok: true, bytes: nextStat.size }
  } catch (error) {
    await fs.promises.unlink(temporaryPath).catch(() => {})
    return { ok: false, error: 'The hero poster could not be created.' }
  }
}

const optimizeUploadedFile = async (filePath, mimeType) => {
  const type = String(mimeType || '').toLowerCase()
  if (type.startsWith('image/')) {
    const result = await optimizeImageFile(filePath)
    if (!result.ok) return result
    await writeDisplayDerivatives(filePath).catch(() => {})
    return result
  }
  if (type.startsWith('video/')) return optimizeVideoFile(filePath)
  return { ok: true, skipped: true }
}

module.exports = {
  MAX_EDGE,
  MAX_IMAGE_BYTES,
  MAX_VIDEO_BYTES,
  CARD_EDGE,
  DETAIL_EDGE,
  optimizeImageFile,
  optimizeVideoFile,
  optimizeUploadedFile,
  writeDisplayDerivatives,
  writeVideoPoster,
}
