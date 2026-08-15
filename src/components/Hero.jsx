// src/components/Hero.jsx
// Full-screen hero section — first impression of the portfolio
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const lineRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        nameRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          roleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 1.2 },
          "-=0.8"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-20 pt-32 overflow-hidden"
    >
      {/* Background decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(to right, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top-right label */}
      <div className="absolute top-24 right-6 md:right-16 flex flex-col items-end gap-1">
        <span className="text-muted text-xs font-dm tracking-widest uppercase">
          Based in Sri Lanka
        </span>
        <span className="text-muted text-xs font-dm tracking-widest uppercase">
          Open to Cybersecurity & Networking Opportunities
        </span>
      </div>

      {/* Main content */}
      <div className="container-custom flex flex-col gap-8">
        {/* Role badge */}
        <div ref={roleRef} className="opacity-0">
          <span className="tag tag-accent">
            Aspiring Cybersecurity Analyst & Network Engineer
          </span>
        </div>

        {/* Name */}
        <div ref={nameRef} className="opacity-0">
          <h1 className="font-syne font-bold text-text-light leading-[0.9] tracking-tight">
            <span className="block text-[clamp(3.5rem,12vw,11rem)]">
              Kavindu
            </span>
            <span className="block text-[clamp(3.5rem,12vw,11rem)] text-accent">
              Kavisara
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div ref={lineRef} className="divider" style={{ scaleX: 0 }} />

        {/* Description + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            ref={descRef}
            className="opacity-0 font-dm text-muted text-base md:text-lg max-w-xl leading-relaxed"
          >
            Computer Networks student at{" "}
            <span className="text-text-light">NSBM Green University</span> and
            BIT External undergraduate at the{" "}
            <span className="text-text-light">University of Moratuwa</span>.
            Focused on network security, system administration, cloud
            technologies, and secure full-stack development.
          </p>

          <div
            ref={ctaRef}
            className="opacity-0 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-text-dark font-dm font-semibold text-sm rounded-full hover:bg-accent/80 transition-colors duration-300 group"
            >
              View Projects
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-light font-dm text-sm rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs font-dm tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-accent animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}