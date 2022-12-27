/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  fontLoaders: [
    {
      loader: '@next/font/google',
      options: { subsets: ['latin'], display: 'swap' },
    },
  ],
};

module.exports = nextConfig;
