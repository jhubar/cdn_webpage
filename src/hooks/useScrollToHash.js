import { useLayoutEffect } from "react";

/** Fait défiler vers l’élément `id` correspondant au hash React Router (ex. #pieces). */
export function useScrollToHash(hash) {
  useLayoutEffect(() => {
    const raw = hash?.replace(/^#/, "");
    if (!raw) return;
    requestAnimationFrame(() => {
      document.getElementById(raw)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [hash]);
}
