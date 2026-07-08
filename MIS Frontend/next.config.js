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
  }
}