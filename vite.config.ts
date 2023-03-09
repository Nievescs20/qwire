import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Task Manager",
        short_name: "Task Manager",
        description: "Tello Clone build using typescript tailwind drag n drop",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/favicon/android-chrome-256x256.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/favicon/android-chrome-256x256.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
