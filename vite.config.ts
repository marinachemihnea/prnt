import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite config: replaced the unavailable @asdasd.dev package
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
