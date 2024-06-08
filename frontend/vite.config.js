import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import daisyui from "daisyui"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      cors:false
      },
  },
  plugins: [
    daisyui,
    react(),
  ],
})
