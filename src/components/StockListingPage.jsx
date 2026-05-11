import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, Search } from "lucide-react";
import { CTAButton } from "./CTAButton";

/**
 * Page inventaire générique : recherche marque / modèle / code-référence + tableau.
 */
export function StockListingPage({
  stock,
  eyebrow,
  title,
  intro,
  /** Clé de l'objet ligne utilisée pour le 3e filtre (ex. codeMoteur, referenceAlternateur) */
  codeKey,
  /** Libellé du champ code (ex. « Code moteur ») */
  codeLabel,
  codePlaceholder,
  modelePlaceholder = "Ex. 308 SW II",
  /** Colonnes tableau dans l'ordre ; `highlight` = style mono vert pour la ref */
  columns,
  demandButtonLabel,
  /** Mot utilisé dans le message vide (ex. « code moteur », « référence ») */
  emptySearchHint,
  datalistId,
}) {
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [code, setCode] = useState("");

  const marquesUniques = useMemo(() => {
    const s = new Set(stock.map((r) => r.marque));
    return [...s].sort((a, b) => a.localeCompare(b, "fr"));
  }, [stock]);

  const filtered = useMemo(() => {
    const m = marque.trim().toLowerCase();
    const mo = modele.trim().toLowerCase();
    const c = code.trim().toLowerCase().replace(/\s+/g, "");
    return stock.filter((row) => {
      const okM = !m || row.marque.toLowerCase().includes(m);
      const okMo = !mo || row.modele.toLowerCase().includes(mo);
      const rawCode = String(row[codeKey] ?? "").toLowerCase().replace(/\s+/g, "");
      const okC = !c || rawCode.includes(c);
      return okM && okMo && okC;
    });
  }, [stock, marque, modele, code, codeKey]);

  function resetFilters() {
    setMarque("");
    setModele("");
    setCode("");
  }

  return (
    <>
      <section className="border-b border-white/10 bg-charcoal-deep px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/#services"
            className="inline-flex cursor-pointer items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-recycle transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Retour aux pièces
          </Link>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                {eyebrow}
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-400">{intro}</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-charcoal-soft/80 px-4 py-3 font-display text-sm text-slate-400">
              <Database className="h-5 w-5 text-recycle" aria-hidden />
              <span>
                <strong className="font-semibold text-white">
                  {filtered.length}
                </strong>{" "}
                / {stock.length} ligne(s)
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/10 bg-charcoal-soft/50 p-6 backdrop-blur-sm sm:p-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Search className="h-5 w-5 text-recycle" aria-hidden />
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Recherche
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <label
                  htmlFor={`${datalistId}-marque`}
                  className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Marque
                </label>
                <input
                  id={`${datalistId}-marque`}
                  type="text"
                  list={datalistId}
                  value={marque}
                  onChange={(e) => setMarque(e.target.value)}
                  placeholder="Ex. Peugeot"
                  autoComplete="off"
                  className="w-full rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
                />
                <datalist id={datalistId}>
                  {marquesUniques.map((ma) => (
                    <option key={ma} value={ma} />
                  ))}
                </datalist>
              </div>
              <div>
                <label
                  htmlFor={`${datalistId}-modele`}
                  className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  Modèle
                </label>
                <input
                  id={`${datalistId}-modele`}
                  type="text"
                  value={modele}
                  onChange={(e) => setModele(e.target.value)}
                  placeholder={modelePlaceholder}
                  className="w-full rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
                />
              </div>
              <div>
                <label
                  htmlFor={`${datalistId}-code`}
                  className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
                >
                  {codeLabel}
                </label>
                <input
                  id={`${datalistId}-code`}
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder={codePlaceholder}
                  className="w-full rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={resetFilters}
                className="cursor-pointer rounded-lg border border-white/15 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-white/10"
              >
                Réinitialiser
              </button>
              <CTAButton to="/#pieces" variant="primary" className="text-xs">
                {demandButtonLabel}
              </CTAButton>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-charcoal-deep">
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-wider text-steel"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-white/5 bg-charcoal-soft/40 transition hover:bg-charcoal-soft/70"
                    >
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className={
                            col.key === "marque"
                              ? "px-4 py-3.5 font-medium text-white"
                              : col.key === "modele"
                                ? "px-4 py-3.5 text-slate-300"
                                : col.highlight
                                  ? "px-4 py-3.5 font-mono text-sm text-recycle"
                                  : "px-4 py-3.5 text-slate-400"
                          }
                        >
                          {row[col.key] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filtered.length === 0 && (
              <p className="bg-charcoal-deep px-6 py-12 text-center text-slate-400">
                Aucun résultat pour ces critères. Essayez une autre{" "}
                {emptySearchHint}
                {" ou "}
                <Link
                  to="/#pieces"
                  className="font-medium text-recycle underline-offset-2 hover:underline"
                >
                  envoyez une demande
                </Link>
                .
              </p>
            )}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Inventaire exemple — connectez une base de données ou un tableur pour
            afficher votre stock réel.
          </p>
        </div>
      </section>
    </>
  );
}
