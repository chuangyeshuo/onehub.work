/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chuangyeshuo.github.io/onehub.work',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: './dist',
  // since the site is a static export with basePath, we don't need extra paths
};