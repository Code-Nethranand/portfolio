import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2015', // Better compatibility with older browsers
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          lenis: ['lenis']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'gsap', 'lenis']
  }
})
