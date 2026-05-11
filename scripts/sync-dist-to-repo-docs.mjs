/**
 * Copie dist/ vers docs/ à la racine du dépôt.
 * GitHub Pages : Settings → Deploy from a branch → main → /docs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const distDir = path.join(repoRoot, "dist");
const docsDir = path.join(repoRoot, "docs");

if (!fs.existsSync(path.join(repoRoot, ".git"))) {
  console.error(
    "[cdn-automobiles] Pas de .git à la racine du projet. Lance ce script depuis le dépôt.",
  );
  process.exit(1);
}

if (!fs.existsSync(distDir)) {
  console.error(
    "[cdn-automobiles] dist/ absent. Lance d’abord : npm run build:github-subpath (site projet github.io)",
  );
  process.exit(1);
}

fs.rmSync(docsDir, { recursive: true, force: true });
fs.mkdirSync(docsDir, { recursive: true });
fs.cpSync(distDir, docsDir, { recursive: true });

console.log("\n[cdn-automobiles] OK — contenu copié vers :");
console.log(" ", docsDir);
console.log(`
─── GitHub Pages (branche + dossier /docs)

1. Pousser docs sur main :
     git add docs && git commit -m "Publish site (docs)" && git push origin main

2. Settings → Pages
   • Source : Deploy from a branch
   • Branch : main
   • Folder : /docs

   URL type site projet :
   https://<compte>.github.io/cdn_webpage/

─── Ou branche gh-pages uniquement :
   npm run pages:deploy
   Puis Pages : Branch = gh-pages , Folder = / (root)
`);
