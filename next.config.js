/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: [process.env.STRAPI_HOSTNAME, 'localhost'],
    loader: 'default',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

console.log({ hostname: process.env.STRAPI_HOSTNAME });

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});
module.exports = withMDX(nextConfig);
