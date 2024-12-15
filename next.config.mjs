import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${path
      .join(process.cwd(), "_mantine")
      .replace(/\\/g, "/")}" as *;`,
  },
};

export default nextConfig;
