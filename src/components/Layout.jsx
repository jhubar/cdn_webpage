import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  useLayoutEffect(() => {
    const raw = location.hash.replace(/^#/, "");

    if (prevPathnameRef.current !== location.pathname) {
      prevPathnameRef.current = location.pathname;
      if (!raw) {
        window.scrollTo(0, 0);
        return;
      }
      queueMicrotask(() => {
        document.getElementById(raw)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return;
    }

    if (raw) {
      requestAnimationFrame(() => {
        document.getElementById(raw)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
