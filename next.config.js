// next.config.
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dafbhjsmx/**', // Adjust the pathname as needed
      },
    ],
  },
};

module.exports = nextConfig;