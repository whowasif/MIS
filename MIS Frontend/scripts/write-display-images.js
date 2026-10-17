/**
 * Write sharp display copies next to public images.
 * The original file is never overwritten or deleted.
 *
 *   node scripts/write-display-images.js
 *   node scripts/write-display-images.js --root ~/mis-app/mis-frontend
 *
 * Card copies are named photo.card.webp (800px, for grids).
 * Detail copies are named photo.detail.webp (1600px, for the product photo and zoom).
 * Logos keep a near-lossless copy. The homepage video is not re-encoded.
 * A still poster is written beside it when ffmpeg is available.
 */
const fs = require('fs')
const path = require('path')

const { writeDisplayDerivatives, writeVideoPoster } = require('../lib/server/optimize-media')

const rootFlag = process.argv.indexOf('--root')
const scriptAppRoot = path.join(__dirname, '..')
const siblingLiveRoot = path.join(scriptAppRoot, '..', 'mis-frontend')
const hasLiveApp = (directory) =>
  fs.existsSync(path.join(directory, 'public')) && fs.existsSync(path.join(directory, '.env.local'))

const appRoot = rootFlag >= 0 && process.argv[rootFlag + 1]
  ? path.resolve(process.argv[rootFlag + 1])
  : (hasLiveApp(siblingLiveRoot) ? siblingLiveRoot : scriptAppRoot)
const publicRoot = path.join(appRoot, 'public')
const imagePattern = /\.(png|jpe?g|webp)$/i

const walkImages = (directory, found = []) => {
  if (!fs.existsSync(directory)) return found
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.next') continue
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) walkImages(fullPath, found)
    else if (
      imagePattern.test(entry.name)
      && !/\.(card|detail)\.webp$/i.test(entry.name)
      && !entry.name.includes('.tmp.')
      && entry.name !== 'home-video-poster.jpg'
    ) found.push(fullPath)
  }
  return found
}

const main = async () => {
  const images = walkImages(publicRoot)
  let written = 0
  let skipped = 0
  let failed = 0

  console.log(`Media folder: ${publicRoot}`)
  console.log(`Images: ${images.length}`)

  for (const filePath of images) {
    const result = await writeDisplayDerivatives(filePath)
    const relative = path.relative(publicRoot, filePath)
    if (!result.ok) {
      failed += 1
      console.log(`failed  ${relative}: ${result.error}`)
      continue
    }
    if (result.reason === 'no-image-tool') {
      console.log('ImageMagick was not found. Original pictures were left unchanged.')
      skipped = images.length
      break
    }
    const cardWrote = result.card && result.card.bytes
    const detailWrote = result.detail && result.detail.bytes
    if (cardWrote || detailWrote) {
      written += 1
      const cardNote = cardWrote ? `card ${Math.round(cardWrote / 1024)}KB` : 'card kept'
      const detailNote = detailWrote ? `detail ${Math.round(detailWrote / 1024)}KB` : 'detail kept'
      console.log(`wrote   ${relative} (${cardNote}, ${detailNote})`)
    } else {
      skipped += 1
    }
  }

  const poster = await writeVideoPoster(
    path.join(publicRoot, 'home video.mp4'),
    path.join(publicRoot, 'home-video-poster.jpg')
  )
  if (poster.bytes) console.log(`wrote   home-video-poster.jpg (${Math.round(poster.bytes / 1024)}KB)`)
  else if (poster.skipped) console.log('poster  skipped (home video.mp4 is not in this folder)')
  else console.log(`poster  failed: ${poster.error}`)

  console.log(`Done. wrote ${written}, skipped ${skipped}, failed ${failed}`)
  if (failed > 0) process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
