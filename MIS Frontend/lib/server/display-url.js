const fs = require('fs')
const path = require('path')
const { cardImageUrl, detailImageUrl } = require('../display-image')

const resolveDisplayUrl = (url, kind = 'card') => {
  if (typeof url !== 'string' || !url.trim()) return url || ''
  const preferred = kind === 'detail' ? detailImageUrl(url) : cardImageUrl(url)
  if (!preferred || preferred === url) return url

  const pathname = preferred.split(/[?#]/)[0]
  if (!pathname.startsWith('/')) return url

  let decoded = pathname
  try {
    decoded = decodeURI(pathname)
  } catch (error) {
    decoded = pathname
  }
  if (decoded.includes('\0') || decoded.split('/').includes('..')) return url

  const file = path.join(process.cwd(), 'public', decoded.replace(/^\/+/, ''))
  try {
    if (fs.statSync(file).size > 0) return preferred
  } catch (error) {
    return url
  }
  return url
}

module.exports = { resolveDisplayUrl }
