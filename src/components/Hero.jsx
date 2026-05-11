import { MapPin, MessageCircle, Shield, Sparkles, Truck } from "lucide-react";
import { CTAButton } from "./CTAButton";
import {
  MOBILE_DISPLAY_LOCAL,
  WHATSAPP_URL,
} from "../constants/contact";

const trustChips = [
  { icon: Shield, label: "Pièces contrôlées" },
  { icon: Truck, label: "Toutes marques" },
  { icon: Sparkles, label: "Centre agréé" },
  { icon: MapPin, label: "À Liège" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal-deep"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1920&q=75"
          alt="Centre automobile et pièces — image hero placeholder"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/95 to-charcoal-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-recycle">
            Centre agréé · Réemploi automobile
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Votre centre de pièces auto d’occasion à Liège
          </h1>
          <p className="mt-2 font-display text-lg font-medium text-slate-300 sm:text-xl">
            Pièces auto d’occasion, dépollution et recyclage automobile à Liège
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            CDN Automobiles vous accompagne pour trouver des pièces auto
            garanties, recycler votre véhicule et bénéficier d’un service local
            rapide et professionnel.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton to="/#pieces" variant="primary" className="sm:min-w-[200px]">
              Demander une pièce
            </CTAButton>
            <CTAButton
              href={WHATSAPP_URL}
              variant="whatsapp"
              className="sm:min-w-[220px]"
            >
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
              WhatsApp · {MOBILE_DISPLAY_LOCAL}
            </CTAButton>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3">
            {trustChips.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-charcoal-soft/80 px-4 py-2 backdrop-blur-sm transition duration-200 hover:border-recycle/35"
              >
                <Icon className="h-4 w-4 text-recycle" aria-hidden />
                <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
