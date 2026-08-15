"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <Reveal direction="up">
              <span className="tag tag-accent">About Me</span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-4xl md:text-5xl leading-tight">
                Building a strong foundation in{" "}
                <span className="text-accent">networks, security,</span> and
                modern systems.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <p className="font-dm text-muted text-base leading-relaxed">
                I&apos;m Kavindu Kavisara, a Computer Networks student at{" "}
                <span className="text-text-light">NSBM Green University</span>,
                Sri Lanka, and a BIT External undergraduate at the{" "}
                <span className="text-text-light">University of Moratuwa</span>.
                My main career direction is cybersecurity analysis and network
                engineering.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-dm text-muted text-base leading-relaxed">
                I focus on network security, system administration, firewall
                configuration, Linux environments, cloud fundamentals, and
                secure full-stack development. My goal is to build practical
                projects that show both technical understanding and real-world
                problem-solving.
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
                  aria-hidden="true"
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

          <Reveal direction="left" delay={0.2}>
            <div className="relative">
              <div className="p-8 md:p-10 border border-border rounded-sm bg-border/20">
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-accent">
                      NSBM
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Computer Networks
                    </p>
                  </div>

                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-text-light">
                      2
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Degree Pathways
                    </p>
                  </div>

                  <div>
                    <span className="font-syne font-bold text-4xl md:text-5xl text-text-light">
                      4+
                    </span>
                    <p className="font-dm text-muted text-sm mt-1">
                      Practical Projects
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

                <div className="pt-6 border-t border-border">
                  <p className="font-dm text-muted text-xs uppercase tracking-widest mb-3">
                    Currently Focused On
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="font-dm text-text-light text-sm">
                      Cybersecurity Analyst & Network Engineer career path
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-2 h-2 rounded-full bg-accent/40" />
                    <p className="font-dm text-muted text-sm">
                      Network security, systems, cloud, and secure development
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent opacity-40" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-accent opacity-40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
