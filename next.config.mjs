import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    typedRoutes: true,
    serverActions: {
      allowedOrigins: [],
    },
  },

  images: {
    // Für Avatar-URLs o. Ä. aus deinem Auth-Flow
    domains: ['localhost'],
  },
  eslint:   { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
