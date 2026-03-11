import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts",
  },
};

export default nextConfig;
