module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Spark Foods',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://spark-client.vercel.app',
      title: 'Spark Foods',
      description: 'Healthy Food at your Door Step.',
    },
  },
  images: {
    domains: [],
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
