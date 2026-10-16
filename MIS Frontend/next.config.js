module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/product-catalog',
        destination: '/categories/desktop',
        permanent: false,
      },
    ]
  },
  async headers() {
    const cache = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    const extensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg', 'ico', 'mp4']
    return [
      { source: '/uploads/:path*', headers: cache },
      ...extensions.map((extension) => ({ source: `/:path*.${extension}`, headers: cache })),
    ]
  },
}