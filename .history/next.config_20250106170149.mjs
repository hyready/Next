/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vhwfyzvbaaltberopzxr.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
        port: '',
        search: ''
      }
    ]
  }
}

export default nextConfig
