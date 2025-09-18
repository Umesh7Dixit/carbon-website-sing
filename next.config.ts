import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images: {
    domains: ["images.pexels.com"], // allow Pexels images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
