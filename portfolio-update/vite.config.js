import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // List of external dependencies if needed
      ],
    },
    // To customize the build output
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    // To customize local server options
    port: 3000,
    open: true,
  },
  define: {
    // To define global constants
    "process.env": {},
  },
  resolve: {
    // To handle specific import resolution
    alias: {
      "@": "/src",
      "react-icons": "react-icons",
    },
  },
});
