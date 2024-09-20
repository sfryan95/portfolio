import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { robots } from 'vite-plugin-robots';

export default defineConfig({
  plugins: [
    react(),
    robots({
      sitemap: 'https://yourwebsite.com/sitemap.xml',
      host: 'https://yourwebsite.com',
      policy: [{ userAgent: '*', allow: '/', disallow: '/private/' }],
    }),
  ],
  base: './', // Keeping your base configuration
});
