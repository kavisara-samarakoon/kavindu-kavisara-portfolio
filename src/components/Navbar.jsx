// src/components/Navbar.jsx
// Top navigation bar — logo, links, CTA button, mobile hamburger
// Uses Framer Motion for entrance animation and scroll-based background change
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

// Navigation links used in both desktop and mobile menu
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Add a background to navbar once the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo — stylized initials */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-syne font-bold text-text-dark text-sm leading-none">
                  KK
                </span>
              </div>
              <span className="font-syne font-semibold text-text-light text-sm tracking-wide hidden sm:block">
                Kavindu
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-dm text-sm tracking-wide transition-colors duration-300 relative group ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-muted hover:text-text-light"
                    }`}
                  >
                    {link.label}
                    {/* Animated underline on hover */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                        pathname === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side — CTA + hamburger */}
            <div className="flex items-center gap-4">
              {/* Contact CTA button — desktop only */}
              <a
                href="mailto:kavindukavisara@gmail.com"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-accent text-accent font-dm text-sm font-medium rounded-full hover:bg-accent hover:text-text-dark transition-all duration-300"
              >
                Let&apos;s Talk
              </a>

              {/* Hamburger button — mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none group"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`block w-6 h-0.5 bg-text-light transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-text-light transition-all duration-300 ${
                    menuOpen ? "w-0 opacity-0" : "w-5"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-text-light transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
