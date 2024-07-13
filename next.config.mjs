/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abhishekpanthee.com.np',
        port: '',
        pathname: '/assets/logo/**',
      }
    ]
  }
}

export default nextConfig
