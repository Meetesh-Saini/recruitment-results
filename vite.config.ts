import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: "/recruitment-results/",
  plugins: [react(),],
  css: {
    postcss: {
      plugins: [
        tailwindcss("./tailwind.config.ts"),
        autoprefixer
      ],
    },
  }
})
