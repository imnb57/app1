import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/app1" : "", // Add `/app1` only for GitHub Pages
  trailingSlash: true, // Required for static exports
};

export default nextConfig;
