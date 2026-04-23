import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Force restart 4
  serverExternalPackages: ['firebase-admin'],
};

export default nextConfig;
