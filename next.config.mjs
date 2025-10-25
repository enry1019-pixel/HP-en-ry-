/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像の最適化設定
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'blob.v0.app',
      },
    ],
    unoptimized: false,
  },
  
  // 静的エクスポートではなく、通常のビルド
  output: undefined,
  
  // React Strictモードを有効化
  reactStrictMode: true,
  
  // SWC minifierを使用（デフォルト）
  swcMinify: true,
  
  // 本番環境でのソースマップ生成
  productionBrowserSourceMaps: false,
  
  // ビルド時のESLintエラーを無視しない
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // TypeScriptエラーを無視しない
  typescript: {
    ignoreBuildErrors: false,
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
}

export default nextConfig
