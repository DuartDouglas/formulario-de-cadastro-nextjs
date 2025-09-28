import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // necessário para rodar no GitHub Pages
  basePath: isProd ? "/NOME-DO-REPO" : "",
  assetPrefix: isProd ? "/NOME-DO-REPO/" : "",
  images: {
    unoptimized: true, // github pages não tem suporte nativo a Image Optimization
  },
};

export default nextConfig;
