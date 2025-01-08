/** @type {import('next').NextConfig} */
const nextConfig = {
  module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
        port: '',
        search: '',
      },
    ],
  },
}
};

export default nextConfig;