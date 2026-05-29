/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/paso-paso-clon',
        destination: '/paso-paso-clon/index.html',
      },
    ]
  },
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig
