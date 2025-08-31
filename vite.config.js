import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/fem-intro-signup/',
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});
