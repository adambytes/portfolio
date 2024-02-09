import pkg from '@next/bundle-analyzer'

const withBundleAnalyzer = pkg({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
}

export default withBundleAnalyzer(nextConfig)
