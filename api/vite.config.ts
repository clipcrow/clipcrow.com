import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/api",
  build: {
    outDir: "../src/api/js/",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `redoc.js`,
      }
    },
  },
});
