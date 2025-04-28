import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  experimental: { typedRoutes: true, serverActions: { allowedOrigins: [] } },

  images: { domains: ['localhost'] },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
