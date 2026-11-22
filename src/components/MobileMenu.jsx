"use client";

import Link from "next/link";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import usePrefersReducedMotion from "@/lib/usePrefersReducedMotion";
import DownloadCvLink from "./DownloadCvLink";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

const containerVariants = {
  hidden: {},
  still: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  // Instant keyframes also replace an in-flight reveal headed to the same values.
  still: { opacity: [1, 1], y: [0, 0], transition: { duration: 0 } },
};

const panelVariants = {
  closed: { x: "100%" },
  visible: { x: "0%" },
  still: { x: ["0%", "0%"], transition: { duration: 0 } },
};

export default function MobileMenu({ isOpen, onClose, onDownload }) {
  const reducedMotion = usePrefersReducedMotion();

  // Unmount an exiting panel immediately if reduced motion is enabled.
  if (reducedMotion && !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <MobileMenuPanel key="menu" reducedMotion={reducedMotion} onClose={onClose} onDownload={onDownload} />
      )}
    </AnimatePresence>
  );
}

function MobileMenuPanel({ reducedMotion, onClose, onDownload }) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      variants={panelVariants}
      initial={reducedMotion ? false : "closed"}
      animate={reducedMotion ? "still" : "visible"}
      exit="closed"
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 bg-bg-dark flex flex-col gap-6 overflow-y-auto px-6 pt-24 pb-12 md:hidden"
      inert={!isPresent}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
      data-mobile-menu
      data-lenis-prevent
    >
      <motion.ul
        variants={containerVariants}
        initial={reducedMotion ? false : "hidden"}
        animate={reducedMotion ? "still" : "visible"}
        className="flex flex-col gap-2"
        role="list"
      >
        {navLinks.map((link) => (
          <motion.li key={link.href} variants={itemVariants} data-mobile-menu-reveal>
            <Link
              href={link.href}
              onClick={onClose}
              className="block font-syne font-bold text-5xl text-text-light hover:text-accent transition-colors duration-300 py-2 border-b border-border"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
        <li className="mt-4">
          <DownloadCvLink
            className="inline-flex min-h-11 touch-manipulation"
            onClick={onDownload}
          />
        </li>
      </motion.ul>

      <motion.div
        variants={itemVariants}
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        animate={reducedMotion ? "still" : { opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-auto flex flex-col gap-4"
        data-mobile-menu-reveal
      >
        <p className="text-muted font-dm text-sm">Get in touch</p>
        <a
          href="mailto:kavisaraksamarakoon@gmail.com"
          className="font-dm text-text-light hover:text-accent transition-colors duration-300"
        >
          kavisaraksamarakoon@gmail.com
        </a>

        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/kavisara-samarakoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent text-sm font-dm transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kavisara-samarakoon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent text-sm font-dm transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
