/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: [process.env.STRAPI_HOSTNAME, 'localhost'],
    loader: 'default',
    deviceSizes: [480, 768, 976, 1440, 1600],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
