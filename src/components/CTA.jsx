"use client";

import Reveal from "./Reveal";

export default function CTA({ light = false }) {
  const bgClass = light ? "light-section" : "bg-bg-dark";
  const headingClass = light ? "text-text-dark" : "text-text-light";
  const mutedClass = light ? "text-text-dark/65" : "text-muted";
  const secondaryButtonClass = light
    ? "border-text-dark/30 text-text-dark hover:border-text-dark hover:bg-text-dark hover:text-text-light"
    : "border-border text-text-light hover:border-accent hover:text-accent";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <Reveal direction="up">
            <span
              className="tag"
              style={
                light
                  ? {
                    borderColor: "var(--border-light)",
                    color: "var(--muted)",
                  }
                  : undefined
              }
            >
              Get In Touch
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2
              className={`font-syne font-bold ${headingClass} text-4xl md:text-5xl lg:text-6xl leading-tight`}
            >
              Let&apos;s connect about{" "}
              <span className="text-accent">networking, security,</span> or
              tech opportunities.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p
              className={`font-dm ${mutedClass} text-base md:text-lg leading-relaxed max-w-2xl`}
            >
              I&apos;m open to internship opportunities, project collaboration,
              technical discussions, and connections related to cybersecurity,
              network engineering, system administration, cloud, and full-stack
              development.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kavisaraksamarakoon@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-dark font-dm font-semibold text-sm rounded-full hover:bg-accent/80 transition-colors duration-300 group"
              >
                Send Me an Email
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
              </a>

              <a
                href="https://www.linkedin.com/in/kavisara-samarakoon"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-4 border font-dm font-medium text-sm rounded-full transition-all duration-300 ${secondaryButtonClass}`}
              >
                View LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-dm text-sm">
              <span className={mutedClass}>Or reach me directly at</span>

              <a
                href="mailto:kavisaraksamarakoon@gmail.com"
                className="text-accent hover:underline"
              >
                kavisaraksamarakoon@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
