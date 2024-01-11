import withPlaiceholder from '@plaiceholder/next'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    // ppr: true,
    webpackBuildWorker: true,
    useLightningcss: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withPlaiceholder(nextConfig)
