import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para SEO y rendimiento
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'fontawesome': ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons'],
        },
      },
    },
    // Genera reportes de tamaño para optimización
    reportCompressedSize: true,
    // Chunk size warning
    chunkSizeWarningLimit: 600,
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preload de recursos críticos para SEO
  optimizeDeps: {
    include: ['react', 'react-dom', '@fortawesome/react-fontawesome'],
  },
})
