import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/contact",
  build: {
    outDir: "../src/contact/js/",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `form.js`,
      },
    },
  },
});
