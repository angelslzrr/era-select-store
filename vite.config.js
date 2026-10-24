import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Vite ya minifica JS y CSS en producción; se deja explícito para que no cambie por accidente.
    minify: true,
    cssMinify: true,
    sourcemap: false,
    // Netlify aplica gzip/brotli automáticamente sobre estos assets.
    reportCompressedSize: true,
  },
})
