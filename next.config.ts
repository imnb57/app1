import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  basePath:'',
  trailingSlash: true, // Required for static exports
};

export default nextConfig;
