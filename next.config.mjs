import 'dotenv/config'

const imageDomains = (process.env.NEXT_IMAGE_DOMAINS ?? 'localhost')
  .split(',')
  .map(d => d.trim())
  .filter(Boolean)

export default {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: { allowedOrigins: [] }
  },
  images: { domains: imageDomains },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
}
