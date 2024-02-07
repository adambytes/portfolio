/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
