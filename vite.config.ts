import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets only
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-utils': ['framer-motion', '@emailjs/browser'],
          'vendor-icons': ['lucide-react']
        }
      }
    },
    minify: 'esbuild',
    sourcemap: false
  }
});
