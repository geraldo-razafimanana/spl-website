import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ base: '/spl-website/', plugins: [react(), tailwindcss()] })
