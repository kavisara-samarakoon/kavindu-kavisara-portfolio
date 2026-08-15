// src/components/Skills.jsx
// Skills section — shows tech stack categories with animated level bars
// and a flat list of all tools/technologies as tags
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories, techTags } from "@/data/skills";
import Reveal from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  return (
    <section className="section-padding light-section">
      <div className="container-custom">
        {/* Section header */}
        <Reveal direction="up">
          <div className="mb-16 md:mb-20">
            <span className="tag mb-4 inline-block" style={{ borderColor: "var(--border-light)", color: "var(--muted)" }}>
              Technical Skills
            </span>
            <h2 className="font-syne font-bold text-text-dark text-4xl md:text-5xl lg:text-6xl leading-tight">
              Tools &amp; Technologies
            </h2>
          </div>
        </Reveal>

        {/* Skills categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="divider-light mb-16" />

        {/* Tech tags — flat list of all tools */}
        <Reveal direction="up" delay={0.1}>
          <div>
            <p className="font-dm text-muted text-sm uppercase tracking-widest mb-8">
              All Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-3">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-border-light text-text-dark font-dm text-sm rounded-full hover:border-text-dark transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Individual skill category with animated bars
function SkillCategory({ category, index }) {
  const barsRef = useRef([]);

  useEffect(() => {
    if (!barsRef.current.length) return;

    // Animate each bar's width from 0 to the skill level %
    barsRef.current.forEach((bar, i) => {
      if (!bar) return;
      const level = category.skills[i]?.level ?? 0;

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [category.skills]);

  return (
    <Reveal direction="up" delay={index * 0.1}>
      <div>
        <h3 className="font-syne font-bold text-text-dark text-lg mb-6">
          {category.category}
        </h3>
        <div className="flex flex-col gap-4">
          {category.skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-dm text-sm text-text-dark/80">
                  {skill.name}
                </span>
                <span className="font-dm text-xs text-muted">{skill.level}%</span>
              </div>
              {/* Bar track */}
              <div className="w-full h-1 bg-border-light rounded-full overflow-hidden">
                {/* Animated fill bar */}
                <div
                  ref={(el) => (barsRef.current[i] = el)}
                  className="h-full rounded-full"
                  style={{
                    width: "0%",
                    backgroundColor:
                      skill.level >= 80
                        ? "var(--accent)"
                        : skill.level >= 65
                        ? "#111111"
                        : "var(--muted)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
