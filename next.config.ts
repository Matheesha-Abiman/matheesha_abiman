import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'go-skill-icons.vercel.app',
        pathname: '/api/icons**',
      },
    ],
  },
};

export default nextConfig;
