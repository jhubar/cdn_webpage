/** Chemin vers un fichier dans `public/`, compatible sous-chemin GitHub Pages. */
export function publicAsset(path) {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
