import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { CTAButton } from "./CTAButton";
import {
  MOBILE_DISPLAY_LOCAL,
  MOBILE_DISPLAY_INTL,
  WHATSAPP_URL,
} from "../constants/contact";

const ADDRESS = "Verte Voie 55, 4000 Liège, Belgium";
const MAP_QUERY = encodeURIComponent("Verte Voie 55, 4000 Liège");
/** Carte intégrée type Google Maps (iframe classique) — remplacez par une clé Maps Embed API si besoin. */
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&hl=fr&z=15&output=embed`;

export function ContactCard() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-recycle">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Venez nous voir à Liège
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Écrivez-nous sur WhatsApp ou passez au centre — nous répondons vite aux
          demandes de pièces et aux questions dépollution.{" "}
          <span className="font-medium text-slate-300">
            Nous ne répondons pas aux appels téléphoniques.
          </span>
        </p>

        <ul className="mt-8 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-charcoal-deep">
              <MapPin className="h-5 w-5 text-recycle" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-steel">
                Adresse
              </p>
              <address className="mt-1 not-italic text-slate-200">
                {ADDRESS}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block cursor-pointer font-display text-sm font-semibold text-recycle transition hover:text-white"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#25D366]/35 bg-[#25D366]/10">
              <MessageCircle className="h-5 w-5 text-[#25D366]" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-steel">
                WhatsApp
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block cursor-pointer font-display text-lg font-semibold text-white transition hover:text-[#25D366]"
              >
                {MOBILE_DISPLAY_LOCAL}{" "}
                <span className="text-sm font-normal text-slate-500">
                  ({MOBILE_DISPLAY_INTL})
                </span>
              </a>
              <p className="mt-2 text-sm text-slate-500">
                Messages uniquement — ouvre directement une conversation avec
                nous.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-charcoal-deep">
              <Mail className="h-5 w-5 text-recycle" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-steel">
                E-mail
              </p>
              <a
                href="mailto:cdn@noveo.be"
                className="mt-1 block cursor-pointer font-display text-lg font-semibold text-white transition hover:text-recycle"
              >
                cdn@noveo.be
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-charcoal-deep">
              <Clock className="h-5 w-5 text-recycle" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-steel">
                Horaires
              </p>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>Lundi au vendredi : 09h00 – 12h00 / 13h00 – 18h00</li>
                <li>Samedi : 09h00 – 13h00</li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CTAButton
            href={WHATSAPP_URL}
            variant="primary"
            className="border-0 bg-[#25D366] text-charcoal-deep shadow-[#25D366]/30 hover:bg-[#20BD5A] hover:text-charcoal-deep active:bg-[#1da851]"
          >
            <MessageCircle className="h-5 w-5 text-charcoal-deep" aria-hidden />
            Écrire sur WhatsApp
          </CTAButton>
          <CTAButton href="mailto:cdn@noveo.be" variant="secondary">
            Envoyer un e-mail
          </CTAButton>
          <CTAButton to="/#pieces" variant="outlineGreen">
            Demander une pièce
          </CTAButton>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-charcoal-soft shadow-2xl">
        <div className="aspect-[4/3] w-full bg-steel-bg lg:min-h-[320px]">
          <iframe
            title="Carte — CDN Automobiles, Liège (placeholder)"
            src={MAP_EMBED}
            className="h-full min-h-[280px] w-full grayscale-[30%] contrast-[1.05] transition hover:grayscale-0 lg:min-h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="border-t border-white/5 px-4 py-3 text-center text-xs text-slate-500">
          Carte indicative — remplacez par une intégration Google Maps avec votre
          repère exact.
        </p>
      </div>
    </div>
  );
}
