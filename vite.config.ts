import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const baseRoute = mode === "production" ? "/christophersnay-com/" : "/";
  return {
    base: baseRoute,
    plugins: [react()],
  };
});
