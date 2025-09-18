import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    allowedHosts: true,
    proxy: {
      // When testing serverless functions locally with `vercel dev` (default on port 3000),
      // proxy /api requests from Vite dev server to Vercel.
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
  plugins: [
    react(),
    mode === "development" &&
      process.env.LOVABLE_TAGGER === "1" &&
      componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "lucide-react",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
