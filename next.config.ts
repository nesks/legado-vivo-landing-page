import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de performance
  compress: true,
  
  // Configurações de imagem
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers para cache de recursos estáticos
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Configurações experimentais para melhor performance
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  // Configurações de output
  output: 'standalone',
};

export default nextConfig;
