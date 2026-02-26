/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'villascroatia.com',
      },
    ],
  },
};

export default nextConfig;