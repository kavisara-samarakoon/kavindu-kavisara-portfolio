// src/components/CTA.jsx
// Reusable CTA (Call to Action) section
// Used at the bottom of pages to prompt contact or next action
// The "light" prop switches it to the off-white background variant
"use client";

import Link from "next/link";
import Reveal from "./Reveal";

/**
 * CTA Props:
 * @param {boolean} light  — If true, uses off-white bg (for dark pages). Default: false (uses dark bg)
 */
export default function CTA({ light = false }) {
  const bgClass = light ? "light-section" : "bg-bg-dark";
  const headingClass = light ? "text-text-dark" : "text-text-light";
  const mutedClass = light ? "text-text-dark/60" : "text-muted";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          {/* Pre-heading label */}
          <Reveal direction="up">
            <span className="tag">Get In Touch</span>
          </Reveal>

          {/* Main heading */}
          <Reveal direction="up" delay={0.1}>
            <h2
              className={`font-syne font-bold ${headingClass} text-4xl md:text-5xl lg:text-6xl leading-tight`}
            >
              Have an idea or{" "}
              <span className="text-accent">opportunity?</span>
              {" "}Let&apos;s talk.
            </h2>
          </Reveal>

          {/* Subtext */}
          <Reveal direction="up" delay={0.15}>
            <p className={`font-dm ${mutedClass} text-base md:text-lg leading-relaxed max-w-xl`}>
              Whether you have a project in mind, want to collaborate on
              something interesting, or just want to say hi — I&apos;d love to
              hear from you.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kavindukavisara@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-dark font-dm font-semibold text-sm rounded-full hover:bg-accent/80 transition-colors duration-300 group"
              >
                Send Me an Email
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text-light font-dm text-sm rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Subtle email display */}
          <Reveal direction="up" delay={0.25}>
            <p className={`font-dm ${mutedClass} text-sm`}>
              Or reach me directly at{" "}
              <a
                href="mailto:kavindukavisara@gmail.com"
                className="text-accent hover:underline"
              >
                kavindukavisara@gmail.com
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
