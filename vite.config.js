import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/Natali_Nails/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  assetsInclude: ["**/*.webp"],
})
