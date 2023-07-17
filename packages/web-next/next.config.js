/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      fileName: true,
      meaninglessFileNames: ["index", "styles", "client", "server"],
    },
  },
  output: 'standalone'
};

module.exports = nextConfig;