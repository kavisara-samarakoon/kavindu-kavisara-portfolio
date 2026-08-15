// src/components/Services.jsx
// Focus Areas section — shows the main technical areas I am building toward
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";
import Reveal from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-dark">
      <div className="container-custom">
        {/* Section header */}
        <Reveal direction="up" delay={0}>
          <div className="flex items-end justify-between mb-16 md:mb-20">
            <div>
              <span className="tag mb-4 inline-block">What I’m Focused On</span>
              <h2 className="font-syne font-bold text-text-light text-4xl md:text-5xl lg:text-6xl leading-tight">
                Focus Areas
              </h2>
            </div>

            <p className="hidden md:block text-muted font-dm text-sm max-w-xs text-right leading-relaxed">
              The technical areas I am developing as an aspiring Cybersecurity
              Analyst and Network Engineer.
            </p>
          </div>
        </Reveal>

        {/* Focus areas list */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual focus-area row
function ServiceRow({ service, index }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;

    const el = rowRef.current;

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [index]);

  return (
    <div
      ref={rowRef}
      className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-7 border-b border-border hover:border-accent/30 transition-colors duration-500 cursor-default opacity-0"
    >
      {/* Number */}
      <span className="font-syne font-bold text-muted text-sm w-10 shrink-0">
        {service.number}
      </span>

      {/* Title */}
      <h3 className="font-syne font-bold text-text-light text-xl md:text-2xl group-hover:text-accent transition-colors duration-300 w-full md:w-64 shrink-0">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-dm text-muted text-sm md:text-base leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:justify-end md:w-64 shrink-0">
        {service.tags.map((tag) => (
          <span key={tag} className="tag text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}