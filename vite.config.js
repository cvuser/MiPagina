import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Esto es crucial para GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})