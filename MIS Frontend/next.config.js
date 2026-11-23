const withTM = require('next-transpile-modules')(['motion', 'framer-motion'])

module.exports = withTM({
  i18n: {
    locales: ['en'],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        // Legacy TeleportHQ catalog — permanently retired. Use /categories.
        source: '/product-catalog',
        destination: '/categories',
        permanent: true,
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
})