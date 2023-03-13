/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    STRAPI_ENDPOINT: process.env.STRAPI_ENDPOINT,
  },
};

module.exports = nextConfig;
