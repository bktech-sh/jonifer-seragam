import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
      new URL("https://ik.imagekit.io/**"),
    ],
  },
};

export default nextConfig;
