import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* eslint-env node */
// Optional: a simple alias so you can write "@/utils" instead of "../../utils"
const alias = {
  find: '@/',
  replacement: `${process.cwd()}/src/`,
}

/**
 * Vite configuration (JavaScript)
 */
export default defineConfig({
  plugins: [react()],          // enables JSX, Fast Refresh, etc.
  resolve: {
    alias,                    // ← remove if you don’t want path aliases
  },
  css: {
    // Vite already knows to process Tailwind via PostCSS.
    // If you ever need to add additional PostCSS plugins, put them in postcss.config.cjs.
  },
  server: {
    port: 5173,               // change if you prefer another port
    open: true,               // automatically opens the browser
  },
  build: {
    // The defaults are fine for a small shop site.
    // You can tweak chunk size limits here if you ever need to.
    sourcemap: false,
  },
})

