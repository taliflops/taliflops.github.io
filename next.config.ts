import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    outputStyle: "compressed",
    styles: "scss",
    loadPaths: ["src/styles"],
  },
};

export default nextConfig;
