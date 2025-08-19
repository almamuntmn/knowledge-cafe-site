import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if you're using React

export default defineConfig({
  base: '/knowledge-cafe-site/',
  plugins: [react()],
})
