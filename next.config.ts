import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['s3.amazonaws.com', 'www.opentoall.com'], // Allow images from s3.amazonaws.com and images.ctfassets.net
  },
};

export default nextConfig;
