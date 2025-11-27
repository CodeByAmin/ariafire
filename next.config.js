module.exports = {
  experimental: {
    turbopack: {
      // اگر لازم بود PostCSS رو غیرفعال کن
      loaders: {
        '.css': ['postcss'],
      },
    },
  },
}