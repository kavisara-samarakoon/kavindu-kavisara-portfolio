"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kavisara-samarakoon" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kavisara-samarakoon",
  },
  { label: "Email", href: "mailto:kavisaraksamarakoon@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-syne font-bold text-text-dark text-sm">
                  KK
                </span>
              </div>
              <span className="font-syne font-semibold text-text-light">
                Kavindu Kavisara
              </span>
            </Link>
            <p className="font-dm text-muted text-sm leading-relaxed">
              Aspiring Cybersecurity Analyst &amp; Network Engineer and Computer
              Networks student at NSBM Green University, Sri Lanka.
            </p>
          </div>

          <div>
            <p className="font-dm text-muted text-xs uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-dm text-muted hover:text-text-light text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-dm text-muted text-xs uppercase tracking-widest mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-dm text-muted hover:text-accent text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    {link.label}
                    {link.href.startsWith("http") && (
                      <svg
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm text-muted text-xs">
            © {year} Kavindu Kavisara. All rights reserved.
          </p>
          <p className="font-dm text-muted text-xs">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
