import { Link, useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { PartRequestForm } from "../components/PartRequestForm";
import { ServiceCard } from "../components/ServiceCard";
import { TrustBadge } from "../components/TrustBadge";
import { ContactCard } from "../components/ContactCard";
import { useScrollToHash } from "../hooks/useScrollToHash";
import { publicAsset } from "../utils/publicAsset";
import {
  Car,
  CarFront,
  Cog,
  PlugZap,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Moteurs",
    description:
      "Moteurs complets ou pièces associées, issus de démontage contrôlé — indiquez marque, cylindrée et référence si vous la possédez.",
    image: publicAsset("/moteur.jpg"),
    alt: "Moteur automobile d’occasion — CDN Automobiles",
    to: "/moteurs",
    ctaLabel: "Voir le stock →",
  },
  {
    icon: CarFront,
    title: "Pare-chocs",
    description:
      "Avant, arrière et éléments de face avant — disponibilité selon arrivages ; nous vérifions couleur et fixations avec vous.",
    image: publicAsset("/parechocs.jpeg"),
    alt: "Pare-chocs automobile — CDN Automobiles",
    to: "/pare-chocs",
    ctaLabel: "Voir le stock →",
  },
  {
    icon: Zap,
    title: "Alternateurs",
    description:
      "Alternateurs d’occasion contrôlés selon nos protocoles — pour une recharge batterie fiable au quotidien.",
    image: publicAsset("/alternateur.jpeg"),
    alt: "Alternateur automobile d’occasion — CDN Automobiles",
    to: "/alternateurs",
    ctaLabel: "Voir le stock →",
  },
  {
    icon: PlugZap,
    title: "Démarreurs",
    description:
      "Pour une large gamme de marques — précisez votre immatriculation ou votre type moteur pour une recherche rapide.",
    image: publicAsset("/demarreur.jpg.webp"),
    alt: "Démarreur automobile d’occasion — CDN Automobiles",
    to: "/demarreurs",
    ctaLabel: "Voir le stock →",
  },
];

const trustItems = [
  "Centre de dépollution agréé",
  "Pièces garanties",
  "Vente aux particuliers et professionnels",
  "Toutes marques",
  "Service local à Liège",
];

const stats = [
  { label: "Pièces réemployées", value: "+ XX" },
  { label: "Véhicules valorisés", value: "+ XX" },
  { label: "Déchets maîtrisés", value: "+ XX" },
  { label: "Économie circulaire", value: "+ XX" },
];

export function HomePage() {
  const { hash } = useLocation();
  useScrollToHash(hash);

  return (
    <>
      <Hero />
      <section
        id="pieces"
        className="scroll-mt-24 bg-charcoal-deep px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-recycle">
              Demande express
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vous cherchez une pièce ?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Notre équipe vérifie la disponibilité et vous recontacte
              rapidement.
            </p>
          </div>
          <PartRequestForm />
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-charcoal px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                Pièces & expertises
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Le stock que vous cherchez, avec un accent sur l’essentiel
              </h2>
            </div>
            <p className="max-w-lg text-slate-400">
              Quatre stocks dédiés avec recherche par{" "}
              <span className="font-medium text-slate-300">
                marque, modèle et référence / code
              </span>{" "}
              : moteurs, pare-chocs, alternateurs et démarreurs. Pour le reste
              du catalogue, utilisez le formulaire ci-dessus — nous consultons
              le parc à Liège.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500 sm:mx-auto">
            Besoin de{" "}
            <span className="text-slate-400">pièces neuves</span>, d’un{" "}
            <Link
              to="/#depollution"
              className="font-medium text-recycle underline-offset-2 transition hover:text-recycle-glow hover:underline"
            >
              véhicule à dépolluer
            </Link>{" "}
            ou d’un{" "}
            <Link
              to="/#contact"
              className="font-medium text-recycle underline-offset-2 transition hover:text-recycle-glow hover:underline"
            >
              accompagnement mécanique
            </Link>{" "}
            ? Contactez-nous — nous vous orientons vers le bon interlocuteur.
          </p>
        </div>
      </section>

      <section
        id="depollution"
        className="scroll-mt-24 border-y border-white/5 bg-charcoal-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=70"
              alt="Installations de recyclage automobile — placeholder"
              className="h-full min-h-[280px] w-full object-cover transition duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-lg bg-charcoal-deep/80 px-3 py-2 backdrop-blur-sm">
              <Car className="h-5 w-5 shrink-0 text-recycle" aria-hidden />
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Recyclage & valorisation
              </span>
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-recycle">
              Économie circulaire
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Donner une seconde vie aux véhicules
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Chez CDN Automobiles, chaque véhicule est une opportunité de
              réemploi. Les pièces encore utiles sont récupérées, contrôlées et
              remises en circulation afin de réduire le gaspillage et favoriser
              une automobile plus responsable.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="cursor-pointer rounded-xl border border-white/10 bg-charcoal-deep/50 p-4 transition duration-200 hover:border-recycle/40 hover:bg-charcoal-deep"
                >
                  <p className="font-display text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal-deep px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              Confiance
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Des engagements visibles
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {trustItems.map((label) => (
              <TrustBadge key={label} icon={ShieldCheck} label={label} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="a-propos"
        className="scroll-mt-24 bg-charcoal px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-recycle">
              À propos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              CDN Automobiles, votre partenaire automobile à Liège
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Basé à Liège, CDN Automobiles accompagne les particuliers et les
              professionnels dans la recherche de pièces auto, la dépollution de
              véhicules et les services automobiles. Notre approche combine
              expertise terrain, réemploi et service client de proximité.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-white/10 lg:order-2">
            <img
              src={publicAsset("/equipe.jpg")}
              alt="Équipe CDN Automobiles — Liège"
              className="h-full min-h-[260px] w-full object-cover transition duration-300 hover:opacity-95"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/5 bg-charcoal-soft px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <ContactCard />
        </div>
      </section>
    </>
  );
}
