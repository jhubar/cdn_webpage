import { Link } from "react-router-dom";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  alt,
  to = "/#pieces",
  ctaLabel = "Faire une demande →",
}) {
  return (
    <Link
      to={to}
      className="group block cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-charcoal-deep transition duration-200 hover:border-recycle/35 hover:shadow-xl hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-recycle"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/20 to-transparent" />
        <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-charcoal-deep/90 backdrop-blur-sm transition duration-200 group-hover:border-recycle/40">
          <Icon className="h-5 w-5 text-recycle" aria-hidden />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 leading-relaxed text-slate-400">{description}</p>
        <span className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-wider text-action transition group-hover:text-action-hover">
          {ctaLabel}
        </span>
      </div>
    </Link>
  );
}
