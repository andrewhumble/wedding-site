import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['s3.amazonaws.com'], // Add this line to allow images from s3.amazonaws.com
  },
};

export default nextConfig;
