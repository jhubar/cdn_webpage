import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

/**
 * Build GitHub Pages : définir VITE_BASE_PATH (ex. `/cdn_webpage/` pour un dépôt projet).
 * Racine du domaine : `VITE_BASE_PATH=/`
 */
const rawPath = process.env.VITE_BASE_PATH;
const base =
  rawPath != null && rawPath !== ""
    ? rawPath.endsWith("/")
      ? rawPath
      : `${rawPath}/`
    : "/";

/** Copie index → 404.html (SPA sur GitHub Pages). */
function githubPages404Fallback() {
  return {
    name: "cdn-github-pages-404",
    closeBundle() {
      if (base === "/") return;
      const outDir = path.resolve("dist");
      const indexHtml = path.join(outDir, "index.html");
      const notFoundHtml = path.join(outDir, "404.html");
      try {
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, notFoundHtml);
        }
      } catch (_) {
        // ignore
      }
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), githubPages404Fallback()],
});
