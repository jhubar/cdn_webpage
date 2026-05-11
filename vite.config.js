import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// CI GitHub Actions : VITE_BASE=/nom-du-repo/ (site projet) ou / (repo username.github.io)
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
});
