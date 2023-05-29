/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]]
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  },
  withPWA:require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,})
}

module.exports = nextConfig
