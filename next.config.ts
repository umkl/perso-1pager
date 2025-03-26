import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    AW_API_KEY: process.env.AW_API_KEY,
    AW_PROJECT_ID: process.env.AW_PROJECT_ID,
    AW_DB_ID: process.env.AW_DB_ID,
    AW_COLLECTION_GYMNASION_ID: process.env.AW_COLLECTION_GYMNASION_ID,
    AW_COLLECTION_MOBILITIES_ID: process.env.AW_COLLECTION_MOBILITIES_ID,
    AW_COLLECTION_ATHLETIC_ID: process.env.AW_COLLECTION_ATHLETIC_ID,
    AW_BASE_URL: process.env.AW_BASE_URL,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  reactStrictMode: true,
};

export default nextConfig;
