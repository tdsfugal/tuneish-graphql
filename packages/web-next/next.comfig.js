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
};

export default nextConfig;
