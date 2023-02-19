import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

const PORT = Number(process.env.PORT || 3000);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: PORT,
  },
});
