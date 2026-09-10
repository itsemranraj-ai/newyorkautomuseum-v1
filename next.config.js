/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // output: 'export', // Can be enabled for pure static export to cPanel public_html if desired
};

module.exports = nextConfig;
