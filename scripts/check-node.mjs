const major = Number(process.version.slice(1).split(".")[0]);
if (major < 18 || Number.isNaN(major)) {
  console.error(
    "\n[cdn-automobiles] Node.js 18+ est requis (Vite 6). Version actuelle :",
    process.version,
    "\n\n→ Utilisez nvm ou installez Node 18+ puis relancez la commande.\n",
  );
  process.exit(1);
}
