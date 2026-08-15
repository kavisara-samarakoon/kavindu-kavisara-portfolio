"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
];

const containerVariants = {
  hidden: {},
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
};

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-40 bg-bg-dark flex flex-col px-6 pt-24 pb-12"
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2"
            role="list"
          >
            {navLinks.map((link) => (
              <motion.li key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-syne font-bold text-5xl text-text-light hover:text-accent transition-colors duration-300 py-2 border-b border-border"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-auto flex flex-col gap-4"
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
      )}
    </AnimatePresence>
  );
}
