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
    host: '127.0.0.1',
    port: 3000,
    proxy: {
      'api/': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
