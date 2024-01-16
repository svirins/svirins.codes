// import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  experimental: {
    // ppr: true,
    webpackBuildWorker: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default nextConfig
