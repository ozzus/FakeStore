import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FakeStore/' // важно для корректного деплоя на GitHub Pages
})