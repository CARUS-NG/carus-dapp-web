/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false
    }
    return config
  }
}

module.exports = nextConfig
