const React = require('react')

const extensionPattern = /\.(png|jpe?g|webp)$/i

const localUploadsPath = (url) => {
  if (url.startsWith('/uploads/')) return url
  if (!/^https?:\/\//i.test(url)) return ''
  try {
    const parsed = new URL(url)
    if (!parsed.pathname.startsWith('/uploads/')) return ''
    return `${parsed.pathname}${parsed.search}${parsed.hash}`
  } catch (error) {
    return ''
  }
}

const siblingUrl = (url, kind) => {
  if (typeof url !== 'string') return ''
  const trimmed = url.trim()
  const source = localUploadsPath(trimmed) || (trimmed.startsWith('/') ? trimmed : '')
  if (!source) return trimmed

  const splitAt = source.search(/[?#]/)
  const pathPart = splitAt >= 0 ? source.slice(0, splitAt) : source
  const suffix = splitAt >= 0 ? source.slice(splitAt) : ''

  let decoded = pathPart
  try {
    decoded = decodeURI(pathPart)
  } catch (error) {
    decoded = pathPart
  }

  if (/\.(card|detail)\.webp$/i.test(decoded) || !extensionPattern.test(decoded)) return trimmed

  const stem = decoded.replace(extensionPattern, '')
  const encoded = `${stem}.${kind}.webp`
    .split('/')
    .map((part, index) => (index === 0 ? part : encodeURIComponent(part)))
    .join('/')
  return `${encoded}${suffix}`
}

const cardImageUrl = (url) => siblingUrl(url, 'card')

const detailImageUrl = (url) => siblingUrl(url, 'detail')

const revealOriginalImage = (event) => {
  const img = event.currentTarget
  if (!img || img.dataset.fellBack === '1') return
  const fallback = img.dataset.fallback
  if (!fallback || img.getAttribute('src') === fallback) return
  img.dataset.fellBack = '1'
  img.src = fallback
}

const markHighPriority = (node) => {
  if (node) node.setAttribute('fetchpriority', 'high')
}

const useDisplaySrc = (src) => ({
  displaySrc: src || '',
  onError: () => {},
})

const DisplayImage = ({ src, kind = 'card', priority = false, ...rest }) => {
  const { displaySrc, onError } = useDisplaySrc(src, kind)
  return React.createElement('img', {
    ...rest,
    src: displaySrc,
    ref: priority ? markHighPriority : undefined,
    onError,
  })
}

module.exports = {
  cardImageUrl,
  detailImageUrl,
  revealOriginalImage,
  markHighPriority,
  useDisplaySrc,
  DisplayImage,
}
