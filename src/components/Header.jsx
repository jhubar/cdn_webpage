import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { CTAButton } from "./CTAButton";
import {
  MOBILE_DISPLAY_LOCAL,
  WHATSAPP_URL,
} from "../constants/contact";

const piecesSubmenu = [
  { to: "/moteurs", label: "Moteurs" },
  { to: "/pare-chocs", label: "Pare-chocs" },
  { to: "/alternateurs", label: "Alternateurs" },
  { to: "/demarreurs", label: "Démarreurs" },
];

const navLinksAfterPieces = [
  { to: "/#a-propos", label: "À propos" },
  { to: "/#contact", label: "Contact" },
];

const navLinkClass =
  "cursor-pointer rounded-md px-2 py-2 font-display text-[10px] font-semibold uppercase tracking-wider text-slate-400 transition duration-200 hover:bg-white/5 hover:text-white xl:px-3 xl:text-xs";

const submenuLinkClass =
  "block cursor-pointer px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-white/10 hover:text-white";

export function Header() {
  const [open, setOpen] = useState(false);
  const [piecesMobileOpen, setPiecesMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  const [piecesDesktopOpen, setPiecesDesktopOpen] = useState(false);

  useEffect(() => {
    if (!open) setPiecesMobileOpen(false);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-charcoal-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="CDN Automobiles — Accueil"
          className="group flex cursor-pointer items-center focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-recycle"
        >
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-x-0.5 lg:flex"
          aria-label="Navigation principale"
        >
          <Link to="/" className={navLinkClass}>
            Accueil
          </Link>

          {/* Pièces auto + sous-menu (desktop) */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearCloseTimer();
              setPiecesDesktopOpen(true);
            }}
            onMouseLeave={() => {
              closeTimer.current = window.setTimeout(() => {
                setPiecesDesktopOpen(false);
              }, 120);
            }}
          >
            <div className="flex items-center">
              <Link to="/#pieces" className={`${navLinkClass} rounded-r-none pr-1`}>
                Pièces auto
              </Link>
              <button
                type="button"
                aria-expanded={piecesDesktopOpen}
                aria-haspopup="true"
                aria-controls="menu-pieces-desktop"
                id="btn-pieces-desktop"
                className={`${navLinkClass} rounded-l-none pl-1 text-slate-500 hover:text-white`}
                onClick={() => setPiecesDesktopOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setPiecesDesktopOpen(false);
                }}
              >
                <ChevronDown
                  className={`h-3.5 w-3.5 transition motion-safe:duration-200 ${piecesDesktopOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
                <span className="sr-only">
                  Ouvrir le sous-menu Pièces auto
                </span>
              </button>
            </div>

            <div
              id="menu-pieces-desktop"
              role="menu"
              aria-labelledby="btn-pieces-desktop"
              className={`absolute left-0 top-full z-50 min-w-[220px] pt-2 motion-safe:transition-opacity motion-safe:duration-150 ${
                piecesDesktopOpen
                  ? "pointer-events-auto visible opacity-100"
                  : "pointer-events-none invisible opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-lg border border-white/10 bg-charcoal-deep py-1 shadow-xl shadow-black/40">
                <Link
                  role="menuitem"
                  to="/#pieces"
                  className={`${submenuLinkClass} border-b border-white/5 text-recycle hover:text-recycle-glow`}
                  onClick={() => setPiecesDesktopOpen(false)}
                >
                  Demande express
                </Link>
                {piecesSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    role="menuitem"
                    to={item.to}
                    className={submenuLinkClass}
                    onClick={() => setPiecesDesktopOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinksAfterPieces.map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <CTAButton
            href={WHATSAPP_URL}
            variant="whatsapp"
            className="hidden px-3 py-2 text-xs xl:inline-flex"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden />
            WhatsApp · {MOBILE_DISPLAY_LOCAL}
          </CTAButton>
          <CTAButton
            to="/#pieces"
            variant="primary"
            className="hidden px-4 py-2.5 text-xs sm:inline-flex"
          >
            Demander une pièce
          </CTAButton>

          <button
            type="button"
            className="cursor-pointer rounded-lg border border-white/15 p-2.5 text-white transition duration-200 hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/5 bg-charcoal-deep lg:hidden motion-safe:transition-all motion-safe:duration-200 ${
          open ? "max-h-[720px] opacity-100" : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Navigation mobile"
        >
          <Link
            to="/"
            className="cursor-pointer rounded-lg px-3 py-3 font-display text-sm font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-white/5 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Accueil
          </Link>

          <div className="rounded-lg border border-white/10 bg-charcoal-soft/40">
            <button
              type="button"
              aria-expanded={piecesMobileOpen}
              className="flex w-full cursor-pointer items-center justify-between px-3 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/5"
              onClick={() => setPiecesMobileOpen((v) => !v)}
            >
              Pièces auto
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition motion-safe:duration-200 ${piecesMobileOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {piecesMobileOpen && (
              <div className="border-t border-white/10 pb-2 pt-1">
                <Link
                  to="/#pieces"
                  className="block px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-recycle transition hover:bg-white/5"
                  onClick={() => {
                    setOpen(false);
                    setPiecesMobileOpen(false);
                  }}
                >
                  Demande express
                </Link>
                {piecesSubmenu.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:bg-white/5 hover:text-white"
                    onClick={() => {
                      setOpen(false);
                      setPiecesMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinksAfterPieces.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="cursor-pointer rounded-lg px-3 py-3 font-display text-sm font-semibold uppercase tracking-wide text-slate-300 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <p className="mt-2 px-3 text-xs leading-snug text-slate-500">
            Réponse par WhatsApp uniquement — nous ne décrochons pas aux appels.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-charcoal-deep transition hover:bg-[#20BD5A]"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
            WhatsApp · {MOBILE_DISPLAY_LOCAL}
          </a>
          <CTAButton
            to="/#pieces"
            variant="primary"
            className="mt-2 w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Demander une pièce
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}
