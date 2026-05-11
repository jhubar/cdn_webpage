export function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-full border border-white/10 bg-charcoal-soft/80 px-4 py-2.5 transition duration-200 hover:border-recycle/40 hover:bg-charcoal-soft">
      <Icon className="h-4 w-4 shrink-0 text-recycle" aria-hidden />
      <span className="font-display text-[11px] font-semibold uppercase tracking-wide text-slate-200">
        {label}
      </span>
    </div>
  );
}
