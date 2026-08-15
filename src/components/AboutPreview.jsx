// src/components/AboutPreview.jsx
// "About" teaser section on the homepage
// Shows a brief intro with a link to the full About page
// Split layout: left text, right decorative element
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { fadeUpVariants } from "@/lib/animations";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-bg-dark">
      <div className="container-custom">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <Reveal direction="up">
              <span className="tag tag-accent">About Me</span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-4xl md:text-5xl leading-tight">
                A developer who actually{" "}
                <span className="text-accent">understands</span> networks.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <p className="font-dm text-muted text-base leading-relaxed">
                I&apos;m Kavindu Kavisara, a second-year Computer Networking
                student at NSBM Green University, Sri Lanka. While most of my
                classmates focus purely on infrastructure, I&apos;ve been
                building a parallel skill set in web development — because I
                believe understanding both layers makes me a much better
                developer.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-dm text-muted text-base leading-relaxed">
                I&apos;ve been teaching myself React, Next.js, and backend
                development alongside my networking coursework. Every project I
                build teaches me something new — about code, about design, and
                about how the web actually works under the hood.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-dm font-medium text-sm group w-fit"
              >
                Read My Full Story
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Right: Decorative stats/info card */}
          <Reveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Background card */}
              <div className="p-8 md:p-10 border border-border rounded-sm bg-border/20">
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-accent">
                      2+
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Years of Learning
                    </p>
                  </div>
                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-text-light">
                      4+
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Projects Built
                    </p>
                  </div>
                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-text-light">
                      10+
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Technologies Used
                    </p>
                  </div>
                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-accent">
                      ∞
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Still Learning
                    </p>
                  </div>
                </div>

                {/* Currently status */}
                <div className="pt-6 border-t border-border">
                  <p className="font-dm text-muted text-xs uppercase tracking-widest mb-3">
                    Currently
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="font-dm text-text-light text-sm">
                      Open for internship opportunities
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-2 h-2 rounded-full bg-accent/40" />
                    <p className="font-dm text-muted text-sm">
                      Studying at NSBM Green University
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent opacity-40" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent opacity-40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
