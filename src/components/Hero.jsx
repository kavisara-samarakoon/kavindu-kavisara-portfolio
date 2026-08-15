"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);
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
          imageRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1"
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
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(to right, var(--accent) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="hidden md:flex absolute top-24 right-16 flex-col items-end gap-1">
        <span className="text-muted text-xs font-dm tracking-widest uppercase">
          Based in Sri Lanka
        </span>
        <span className="text-muted text-xs font-dm tracking-widest uppercase">
          Open to Cybersecurity & Networking Opportunities
        </span>
      </div>

      <div className="container-custom flex flex-col gap-8">
        <div ref={roleRef} className="opacity-0">
          <span className="tag tag-accent max-w-full text-center leading-relaxed">
            Aspiring Cybersecurity Analyst & Network Engineer
          </span>
        </div>

        <div ref={nameRef} className="opacity-0">
          <h1 className="font-syne font-bold text-text-light leading-[0.9] tracking-tight">
            <span className="block text-[clamp(3.5rem,12vw,11rem)]">
              Kavisara
            </span>
            <span className="block text-[clamp(3rem,9vw,8rem)] text-accent">
              Samarakoon
            </span>
          </h1>
        </div>

        <div ref={lineRef} className="divider" style={{ scaleX: 0 }} />

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

          <div ref={ctaRef} className="opacity-0 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-4">
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

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kavisara-samarakoon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kavisara Samarakoon on LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/kavisara-samarakoon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kavisara Samarakoon on GitHub"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              <a
                href="mailto:kavisaraksamarakoon@gmail.com"
                aria-label="Email Kavisara Samarakoon"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        className="opacity-0 hidden xl:block absolute right-32 2xl:right-40 top-[26%] 2xl:top-[28%] w-[260px] 2xl:w-[320px] pointer-events-none"
      >
        <div className="relative border border-border rounded-2xl overflow-hidden bg-border/20">
          <Image
            src="/images/kavindu-profile.jpg"
            alt="Kavisara Samarakoon"
            width={900}
            height={1200}
            sizes="(min-width: 1536px) 320px, (min-width: 1280px) 260px, 0px"
            className="object-cover w-full h-auto"
            priority
          />
          <div
            className="absolute top-4 right-4 w-8 h-8 border-t border-r opacity-40"
            style={{ borderColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-4 left-4 w-8 h-8 border-b border-l opacity-40"
            style={{ borderColor: "var(--accent)" }}
          />
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="opacity-0 hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
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