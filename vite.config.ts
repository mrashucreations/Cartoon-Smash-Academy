import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const publicDir = path.resolve(__dirname, 'public');
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        // Copy index.html to 404.html for GitHub Pages / static hosting SPA fallback
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

        // Generate static entry folders for requested routes: /course and /academy
        const routes = ['course', 'academy'];
        routes.forEach((route) => {
          const routeDir = path.join(distDir, route);
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
        });
      }

      // Guarantee critical GitHub Pages & SEO root files exist in dist/
      const criticalFiles = ['sitemap.xml', 'robots.txt', 'CNAME', '.nojekyll'];
      criticalFiles.forEach((file) => {
        const destPath = path.join(distDir, file);
        const srcPath = path.join(publicDir, file);
        if (!fs.existsSync(destPath) && fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), spaFallbackPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
