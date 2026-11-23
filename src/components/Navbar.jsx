"use client";

import { useState, useEffect, useLayoutEffect, useRef, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls, LayoutGroup } from "framer-motion";
import usePrefersReducedMotion from "@/lib/usePrefersReducedMotion";
import DownloadCvLink from "./DownloadCvLink";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

function isLinkActive(linkHref, pathname) {
  if (linkHref === "/") {
    return pathname === "/";
  }
  return pathname === linkHref || pathname.startsWith(`${linkHref}/`);
}

const visibleHeader = { opacity: 1, y: 0 };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);
  const menuId = useId();
  const pathname = usePathname();
  const [menuPathname, setMenuPathname] = useState(pathname);
  const reducedMotion = usePrefersReducedMotion();
  const entrance = useAnimationControls();

  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      entrance.stop();
      entrance.set(visibleHeader);
    } else {
      entrance.start(visibleHeader);
    }
  }, [entrance, reducedMotion]);

  useLayoutEffect(() => {
    if (!menuOpen) return;

    const navigation = navigationRef.current;
    // Removing a classic scrollbar can switch WebKit to the desktop breakpoint.
    const keepScrollbar = window.innerWidth >= 768;
    if (keepScrollbar) navigation.setAttribute("data-menu-scroll-guard", "");
    const scrollTop = window.scrollY;
    const keepScrollPosition = () => {
      if (window.scrollY !== scrollTop) window.scrollTo({ top: scrollTop, behavior: "instant" });
    };
    if (keepScrollbar) window.addEventListener("scroll", keepScrollPosition);

    const main = document.querySelector("main");
    const wasInert = main?.inert;
    if (main) main.inert = true;
    menuButtonRef.current?.focus({ preventScroll: true });

    const desktop = window.matchMedia("(min-width: 768px)");
    const dismissOnDesktop = () => {
      if (!desktop.matches) return;
      setMenuOpen(false);
      const target = navigation.querySelector('nav a[aria-current="page"]')
        ?? navigation.querySelector('nav a[aria-label="Home"]');
      target?.focus({ preventScroll: true });
    };
    desktop.addEventListener("change", dismissOnDesktop);
    return () => {
      desktop.removeEventListener("change", dismissOnDesktop);
      if (keepScrollbar) {
        window.removeEventListener("scroll", keepScrollPosition);
        navigation.removeAttribute("data-menu-scroll-guard");
      }
      if (main) main.inert = wasInert;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus({ preventScroll: true });
  };

  const handleMenuKeys = (event) => {
    if (!menuOpen || event.defaultPrevented) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
    }
    if (event.key === "Tab" && !event.ctrlKey && !event.metaKey) {
      const controls = [...event.currentTarget.querySelectorAll("a[href], button")]
        .filter((control) => control.tabIndex >= 0 && control.getClientRects().length && !control.closest("[inert]"));
      if (!controls.length) return;
      event.preventDefault();
      const index = controls.indexOf(document.activeElement);
      const next = index < 0 ? 0 : (index + (event.shiftKey ? -1 : 1) + controls.length) % controls.length;
      controls[next].focus();
    }
  };

  return (
    <div
      ref={navigationRef}
      data-mobile-navigation
      data-lenis-prevent={menuOpen ? "" : undefined}
      role={menuOpen ? "dialog" : undefined}
      aria-modal={menuOpen ? true : undefined}
      aria-label={menuOpen ? "Mobile navigation" : undefined}
      onKeyDown={handleMenuKeys}
    >
      <motion.header
        data-site-header
        initial={{ opacity: 0, y: -20 }}
        animate={entrance}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 motion-reduce:!transform-none motion-reduce:!opacity-100 ${scrolled
            ? "bg-bg-dark/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20 lg:grid lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href="/"
              className="flex items-center gap-3 group lg:justify-self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded-xl"
              aria-label="Home"
              inert={menuOpen}
            >
              <div className="relative w-10 h-10 md:w-11 md:h-11 bg-accent rounded-xl border border-accent/60 flex items-center justify-center shadow-[0_0_24px_rgba(204,255,0,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(204,255,0,0.2)]">
                <span className="font-syne font-bold text-text-dark text-base md:text-lg leading-none tracking-tight">
                  KS
                </span>
              </div>

              <div className="hidden sm:flex flex-col">
                <span className="font-syne font-semibold text-text-light text-base leading-none tracking-wide transition-colors duration-300 group-hover:text-accent">
                  Kavisara
                </span>
                <span className="hidden md:block mt-1 font-dm text-[10px] text-muted uppercase tracking-[0.22em] leading-none">
                  Samarakoon
                </span>
              </div>
            </Link>

            <LayoutGroup id="navbar-nav">
              <ul className="hidden md:flex items-center gap-8" role="list">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.href, pathname);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`font-dm text-sm tracking-wide transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark rounded-sm ${
                          active
                            ? "text-accent"
                            : "text-muted hover:text-text-light"
                        }`}
                      >
                        {link.label}
                        {active ? (
                          reducedMotion ? (
                            <span
                              data-active-indicator="true"
                              aria-hidden="true"
                              className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full pointer-events-none"
                            />
                          ) : (
                            <motion.span
                              data-active-indicator="true"
                              layoutId="navbar-active-indicator"
                              aria-hidden="true"
                              className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full pointer-events-none"
                              transition={{
                                duration: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                            />
                          )
                        ) : (
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center pointer-events-none motion-reduce:hidden"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </LayoutGroup>

            <div className="flex items-center gap-2 lg:justify-self-end lg:gap-4">
              <DownloadCvLink className="hidden py-2 md:inline-flex" />

              <a
                href="mailto:kavisaraksamarakoon@gmail.com"
                className="hidden md:inline-flex items-center gap-2 whitespace-nowrap px-5 py-2 border border-accent text-accent font-dm text-sm font-medium rounded-full hover:bg-accent hover:text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark transition-all duration-300"
              >
                Let&apos;s Talk
              </a>

              <button
                ref={menuButtonRef}
                onClick={menuOpen ? closeMenu : () => setMenuOpen(true)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent group"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls={menuOpen ? menuId : undefined}
              >
                <span
                  className={`block w-6 h-0.5 bg-text-light transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 bg-text-light transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-5"
                    }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-text-light transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        id={menuId}
        isOpen={menuOpen}
        onClose={closeMenu}
        onDownload={closeMenu}
      />
    </div>
  );
}
