import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/knowledge-cafe-site/',
  plugins: [react()],
})
