const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  // Use the CDN in production and localhost for development.
  assetPrefix: '.',
  // distDir: "build",
};
