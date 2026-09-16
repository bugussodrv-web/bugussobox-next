/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bugussobox.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;