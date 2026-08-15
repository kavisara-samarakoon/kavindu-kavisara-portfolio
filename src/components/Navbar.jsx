"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-bg-dark/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Home"
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

            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-dm text-sm tracking-wide transition-colors duration-300 relative group ${pathname === link.href
                        ? "text-accent"
                        : "text-muted hover:text-text-light"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${pathname === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="mailto:kavisaraksamarakoon@gmail.com"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-accent text-accent font-dm text-sm font-medium rounded-full hover:bg-accent hover:text-text-dark transition-all duration-300"
              >
                Let&apos;s Talk
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none group"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
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

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}