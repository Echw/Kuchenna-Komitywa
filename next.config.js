import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: '@use "_mantine" as *;',
  },
  reactStrictMode: true,
};

export default withPayload(nextConfig);
