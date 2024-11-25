import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: "./deploying-vite-Netflix-Clone-2024",
  plugins: [react()],
})
