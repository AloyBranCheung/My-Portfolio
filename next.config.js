/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "picsum.photos",
      "i.picsum.photos",
      "localhost",
      "127.0.0.1",
      "tst-portfolio-cms.onrender.com",
      "prd-portfolio-cms.onrender.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
