/** @type {import('next').NextConfig} */
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: '@use "_mantine" as *;',
  },
};

export default withPayload(nextConfig);
