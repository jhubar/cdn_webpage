import { useState } from "react";
import { Send } from "lucide-react";
import { CTAButton } from "./CTAButton";

export function PartRequestForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
    const form = e.target;
    if (form && typeof form.reset === "function") form.reset();
    window.setTimeout(() => setStatus("idle"), 4500);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-charcoal-soft/60 p-6 shadow-2xl backdrop-blur-sm sm:p-8 lg:p-10">
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="marque"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Marque du véhicule
            </label>
            <input
              id="marque"
              name="marque"
              type="text"
              required
              autoComplete="organization"
              placeholder="Ex. Peugeot"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
          <div>
            <label
              htmlFor="modele"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Modèle
            </label>
            <input
              id="modele"
              name="modele"
              type="text"
              required
              placeholder="Ex. 308"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
          <div>
            <label
              htmlFor="annee"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Année
            </label>
            <input
              id="annee"
              name="annee"
              type="text"
              inputMode="numeric"
              placeholder="Ex. 2018"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
          <div>
            <label
              htmlFor="piece"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Pièce recherchée
            </label>
            <input
              id="piece"
              name="piece"
              type="text"
              required
              placeholder="Ex. Phare avant gauche"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="vin"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Immatriculation ou VIN{" "}
              <span className="font-normal lowercase text-slate-600">
                (optionnel)
              </span>
            </label>
            <input
              id="vin"
              name="vin"
              type="text"
              placeholder="Plaque ou numéro de chassis"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
            >
              Téléphone ou e-mail
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              autoComplete="email"
              placeholder="Pour vous recontacter"
              className="w-full cursor-text rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block font-display text-xs font-semibold uppercase tracking-wider text-slate-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Précisions utiles : état souhaité, délais, etc."
            className="w-full cursor-text resize-y rounded-lg border border-white/10 bg-charcoal-deep px-4 py-3 text-slate-100 placeholder:text-slate-600 transition duration-200 focus:border-recycle/50 focus:outline-none focus:ring-2 focus:ring-recycle/30"
          />
        </div>

        <p className="text-sm text-slate-500">
          Notre équipe vérifie la disponibilité et vous recontacte rapidement.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CTAButton
            type="submit"
            variant="primary"
            className="w-full justify-center sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden />
            Envoyer ma demande
          </CTAButton>
          {status === "sent" && (
            <p
              className="font-display text-sm font-semibold text-recycle"
              role="status"
            >
              Merci — nous vous recontactons rapidement.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
