/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-recu-3/',
  test: { environment: 'happy-dom', globals: true },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
})
