/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vhwfyzvbaaltberopzxr.supabase.co',
        pathname: '/account123/**',
        port: '',
        search: ''
      }
    ]
  }
}

export default nextConfig
