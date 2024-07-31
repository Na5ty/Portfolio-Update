import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Leave this empty unless you have specific external dependencies
      external: [],
    },
    outDir: "dist", // This is correct
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": "/src",
      "react-icons": "react-icons",
    },
  },
});
