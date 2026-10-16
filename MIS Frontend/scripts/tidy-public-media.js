/**
 * Shrink oversized public images and videos in place, and delete media that
 * nothing references.
 *
 * A file is deleted only when the database lookup succeeds AND neither the
 * database nor the source code mentions its filename. If the database cannot
 * be read, nothing is deleted.
 *
 * Dry run (default):
 *   node scripts/tidy-public-media.js
 * Shrink the live site files only:
 *   node scripts/tidy-public-media.js --shrink-only
 * On the server the live files are in ~/mis-app/mis-frontend, next to this repo folder.
 * Apply deletes as well:
 *   node scripts/tidy-public-media.js --apply
 */
const fs = require('fs')
const path = require('path')

const { optimizeImageFile, optimizeVideoFile } = require('../lib/server/optimize-media')

const apply = process.argv.includes('--apply')
const shrinkOnly = process.argv.includes('--shrink-only')
const rootFlag = process.argv.indexOf('--root')
const scriptAppRoot = path.join(__dirname, '..')
const siblingLiveRoot = path.join(scriptAppRoot, '..', 'mis-frontend')
const hasLiveApp = (directory) =>
  fs.existsSync(path.join(directory, 'public')) && fs.existsSync(path.join(directory, '.env.local'))

const appRoot = rootFlag >= 0 && process.argv[rootFlag + 1]
  ? path.resolve(process.argv[rootFlag + 1])
  : (hasLiveApp(siblingLiveRoot) ? siblingLiveRoot : scriptAppRoot)
const publicRoot = path.join(appRoot, 'public')
const mediaPattern = /\.(png|jpe?g|gif|webp|svg|ico|mp4|webm|mov)$/i
const imagePattern = /\.(png|jpe?g|gif|webp)$/i

const loadEnvFile = (filePath) => {
  if (!fs.existsSync(filePath)) return
  for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (!match || match[1].startsWith('#')) continue
    let value = match[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!process.env[match[1]]) process.env[match[1]] = value
  }
}

const safeIdentifier = (value) => /^[A-Za-z0-9_]+$/.test(value)

const walkFiles = (directory, found = []) => {
  if (!fs.existsSync(directory)) return found
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.next') continue
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) walkFiles(fullPath, found)
    else if (mediaPattern.test(entry.name)) found.push(fullPath)
  }
  return found
}

const walkSourceText = (directory, chunks = []) => {
  if (!fs.existsSync(directory)) return chunks
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'public', 'uploads'].includes(entry.name)) continue
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) walkSourceText(fullPath, chunks)
    else if (/\.(js|jsx|css|json|md|html|svg)$/i.test(entry.name)) {
      chunks.push(fs.readFileSync(fullPath, 'utf8'))
    }
  }
  return chunks
}

const loadDatabaseText = async () => {
  loadEnvFile(path.join(appRoot, '.env.local'))
  loadEnvFile(path.join(appRoot, '.env'))
  if (!process.env.DB_USER || !process.env.DB_NAME) {
    throw new Error('Database environment is missing')
  }

  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  try {
    const [columns] = await connection.query(
      `SELECT TABLE_NAME AS tableName, COLUMN_NAME AS columnName
       FROM information_schema.COLUMNS
       WHERE TABLE_SCHEMA = DATABASE()
         AND DATA_TYPE IN ('varchar','char','text','tinytext','mediumtext','longtext','json')`
    )

    const chunks = []
    for (const column of columns) {
      if (!safeIdentifier(column.tableName) || !safeIdentifier(column.columnName)) continue
      const [rows] = await connection.query(
        `SELECT \`${column.columnName}\` AS value FROM \`${column.tableName}\` WHERE \`${column.columnName}\` IS NOT NULL`
      )
      for (const row of rows) {
        if (row.value == null) continue
        chunks.push(typeof row.value === 'string' ? row.value : JSON.stringify(row.value))
      }
    }
    return chunks.join('\n')
  } finally {
    await connection.end()
  }
}

const isReferenced = (filePath, haystack) => {
  const baseName = path.basename(filePath).toLowerCase()
  if (baseName.length < 5) return true
  const encoded = encodeURIComponent(path.basename(filePath)).toLowerCase()
  return haystack.includes(baseName) || haystack.includes(encoded)
}

const main = async () => {
  const files = walkFiles(publicRoot)
  console.log(`Media folder: ${publicRoot}`)
  console.log(`Found ${files.length} media files in public`)
  console.log(shrinkOnly ? 'Mode: shrink only' : apply ? 'Mode: apply' : 'Mode: dry run (pass --shrink-only or --apply)')

  const sourceRoots = appRoot === scriptAppRoot ? [scriptAppRoot] : [scriptAppRoot, appRoot]
  let haystack = sourceRoots.flatMap((directory) => walkSourceText(directory)).join('\n').toLowerCase()
  let databaseReady = false
  try {
    const databaseText = await loadDatabaseText()
    haystack += `\n${databaseText.toLowerCase()}`
    databaseReady = true
    console.log('Database references loaded')
  } catch (error) {
    console.log(`Database lookup failed (${error.code || error.message}). Nothing will be deleted.`)
  }

  const unused = databaseReady && !shrinkOnly ? files.filter((filePath) => !isReferenced(filePath, haystack)) : []
  console.log(`Unused files: ${unused.length}`)
  unused.forEach((filePath) => console.log(`  delete ${path.relative(publicRoot, filePath)}`))

  if (apply && unused.length) {
    for (const filePath of unused) {
      await fs.promises.unlink(filePath)
    }
    console.log(`Deleted ${unused.length} unused files`)
  }

  const unusedSet = new Set(unused)
  const remaining = files.filter((filePath) => !unusedSet.has(filePath))
  let resized = 0
  let skipped = 0
  let failed = 0

  for (const filePath of remaining) {
    const before = fs.statSync(filePath).size
    const shouldTry = (imagePattern.test(filePath) && before > 400 * 1024)
      || (filePath.toLowerCase().endsWith('.mp4') && before > 4 * 1024 * 1024)
    if (!shouldTry) {
      skipped += 1
      continue
    }

    console.log(`  shrink ${path.relative(publicRoot, filePath)} (${(before / 1024 / 1024).toFixed(1)} MB)`)
    if (!apply && !shrinkOnly) continue

    const result = imagePattern.test(filePath)
      ? await optimizeImageFile(filePath)
      : await optimizeVideoFile(filePath)
    if (!result.ok) {
      failed += 1
      console.log(`    left unchanged: ${result.error}`)
      continue
    }
    if (result.skipped) {
      skipped += 1
      console.log('    already small enough')
      continue
    }
    resized += 1
    console.log(`    now ${(result.bytes / 1024 / 1024).toFixed(2)} MB`)
  }

  console.log(`Shrink summary: resized ${resized}, skipped ${skipped}, failed ${failed}`)
}

main().catch((error) => {
  console.error(error && error.message ? error.message : error)
  process.exit(1)
})
