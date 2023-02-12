import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  path  from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  server: {
    port: 3000,
    open: true,
    base: './',
      // host: '127.0.0.1',
      proxy: {
        '^/api': {
          target: 'http://localhost:7001/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
})
