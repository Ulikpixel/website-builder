/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    domains: ['a.storyblok.com'],
  },
}
