import { publicAsset } from "../utils/publicAsset";

/**
 * Logo depuis /public/logo.svg (fichier large — cadre contrôlé pour le header / footer).
 */
export function BrandLogo() {
  return (
    <div className="flex h-12 max-w-[172px] shrink-0 items-center justify-center rounded-lg border border-white/10 bg-charcoal-soft px-2.5 transition duration-200 group-hover:border-recycle/40 hover:border-recycle/40 sm:h-14 sm:max-w-[196px] sm:px-3">
      <img
        src={publicAsset("/logo.svg")}
        alt="CDN Automobiles"
        className="h-9 w-full object-contain object-center sm:h-11"
        width={196}
        height={56}
        decoding="async"
      />
    </div>
  );
}
