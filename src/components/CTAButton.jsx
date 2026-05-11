import { Link } from "react-router-dom";

export function CTAButton({
  children,
  href,
  to,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-action text-white shadow-lg shadow-action/25 hover:bg-action-hover active:bg-action-subtle focus-visible:outline-recycle",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:border-recycle/50 hover:bg-white/10 focus-visible:outline-recycle",
    ghost:
      "border border-transparent text-slate-200 hover:bg-white/10 hover:text-white focus-visible:outline-recycle",
    outlineGreen:
      "border border-recycle/60 bg-transparent text-recycle hover:bg-recycle/10 focus-visible:outline-recycle",
    whatsapp:
      "border border-[#25D366]/45 bg-[#25D366]/10 text-[#dcf8c6] shadow-none hover:border-[#25D366] hover:bg-[#25D366]/20 active:bg-[#25D366]/30 focus-visible:outline-recycle",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combined} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const opensInNewTab =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//");

    return (
      <a
        href={href}
        className={combined}
        {...props}
        {...(opensInNewTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combined} {...props}>
      {children}
    </button>
  );
}
