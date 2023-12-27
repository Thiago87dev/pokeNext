/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: ["https://raw.githubusercontent.com/.*"],
  },
};

module.exports = nextConfig;