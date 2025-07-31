import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, mode }) => {
  if (typeof window !== "undefined") {
    throw new Error(
      "vite.config.js should not run in a browser-like environment."
    );
  }

  return {
    plugins: [react(), tailwindcss()],
  };
});
