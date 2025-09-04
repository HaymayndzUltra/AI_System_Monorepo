import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving the monorepo-root design tokens
      allow: ['..', '/workspace', '/workspace/design']
    }
  },
  resolve: {
    alias: {
      '@design': resolve(fileURLToPath(new URL('.', import.meta.url)), '../../..', 'design')
    }
  },
})
