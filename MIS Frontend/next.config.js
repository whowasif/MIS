// next-transpile-modules is needed at build time for motion.
// On cPanel/Passenger the package may be missing from the venv — fall back
// so production can still boot (the compiled .next already includes motion).
let withTM = (config) => config
try {
  withTM = require('next-transpile-modules')(['motion', 'framer-motion'])
} catch (err) {
  if (err && err.code !== 'MODULE_NOT_FOUND') throw err
}

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
