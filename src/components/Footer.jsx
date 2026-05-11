import { Link } from "react-router-dom";
import {
  MOBILE_DISPLAY_LOCAL,
  WHATSAPP_URL,
} from "../constants/contact";
import { BrandLogo } from "./BrandLogo";

const footerServices = [
  { to: "/#pieces", label: "Pièces d’occasion" },
  { to: "/#pieces", label: "Pièces neuves" },
  { to: "/moteurs", label: "Moteurs" },
  { to: "/pare-chocs", label: "Pare-chocs" },
  { to: "/alternateurs", label: "Alternateurs" },
  { to: "/demarreurs", label: "Démarreurs" },
  { to: "/#depollution", label: "Dépollution" },
  { to: "/#services", label: "Autres pièces" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="group flex w-fit cursor-pointer items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-recycle"
            >
              <BrandLogo />
              <div>
                <span className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  Automobiles
                </span>
                <p className="text-xs uppercase tracking-wider text-steel">
                  Liège · Belgique
                </p>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Centre de pièces auto d’occasion, dépollution et services pour
              particuliers et professionnels. Qualité contrôlée, proximité et
              engagement pour une automobile plus circulaire.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border border-[#25D366]/45 bg-[#25D366]/10 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-[#dcf8c6] transition hover:border-[#25D366] hover:bg-[#25D366]/20"
              >
                WhatsApp · {MOBILE_DISPLAY_LOCAL}
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border border-white/10 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:border-recycle/40 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border border-white/10 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:border-recycle/40 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-lg border border-white/10 px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:border-recycle/40 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((item) => (
                <li key={`${item.to}-${item.label}`}>
                  <Link
                    to={item.to}
                    className="cursor-pointer text-sm text-slate-400 transition hover:text-recycle"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Verte Voie 55</li>
              <li>4000 Liège</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transition hover:text-[#25D366]"
                >
                  WhatsApp {MOBILE_DISPLAY_LOCAL}
                </a>
              </li>
              <li className="text-xs text-slate-600">
                Pas d’appels — messages WhatsApp uniquement
              </li>
              <li>
                <a
                  href="mailto:cdn@noveo.be"
                  className="cursor-pointer transition hover:text-recycle"
                >
                  cdn@noveo.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} CDN Automobiles. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="cursor-pointer transition hover:text-slate-400">
              Mentions légales
            </a>
            <a href="#" className="cursor-pointer transition hover:text-slate-400">
              Politique de confidentialité
            </a>
            <a href="#" className="cursor-pointer transition hover:text-slate-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
