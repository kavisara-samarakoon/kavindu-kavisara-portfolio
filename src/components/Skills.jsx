"use client";

import { skillCategories, techTags } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section-padding light-section">
      <div className="container-custom">
        {/* ── Section header ── */}
        <Reveal direction="up">
          <div className="mb-16 md:mb-20">
            <span
              className="tag mb-4 inline-block"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--muted)",
              }}
            >
              Technical Skills
            </span>

            <h2 className="font-syne font-bold text-text-dark text-4xl md:text-5xl lg:text-6xl leading-tight">
              Skills &amp; Technical Focus
            </h2>

            <p className="font-dm text-muted text-base md:text-lg max-w-2xl leading-relaxed mt-6">
              A practical overview of the tools, technologies, and technical
              areas I am actively building through coursework, labs, and
              portfolio projects.
            </p>
          </div>
        </Reveal>

        {/* ── Skill category cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-20 items-stretch">
          {skillCategories.map((category, i) => (
            <SkillCategory key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* ── Tag cloud ── */}
        <div className="divider-light mb-16" />

        <Reveal direction="up" delay={0.1}>
          <div>
            <p className="font-dm text-muted text-sm uppercase tracking-widest mb-8">
              All Tools & Technologies
            </p>

            <div className="flex flex-wrap gap-2.5">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-border-light text-text-dark/80 font-dm text-sm rounded-full hover:border-text-dark/40 hover:text-text-dark transition-all duration-300 cursor-default"
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

function SkillCategory({ category, index }) {
  const number = String(category.id).padStart(2, "0");

  return (
    <Reveal direction="up" delay={index * 0.1} className="flex">
      <div className="group relative h-full rounded-2xl border border-border-light bg-white/60 p-6 sm:p-8 flex flex-col gap-5 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(216,255,62,0.06)] transition-all duration-300 overflow-hidden">
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)", opacity: 0.35 }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)" }}
        />

        {/* Header — number + title + description */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-dm font-semibold tracking-wider transition-colors duration-300"
              style={{
                backgroundColor: "rgba(216, 255, 62, 0.10)",
                color: "var(--text-dark)",
                border: "1px solid rgba(216, 255, 62, 0.25)",
              }}
            >
              {number}
            </span>
            <h3 className="font-syne font-bold text-text-dark text-lg leading-tight">
              {category.category}
            </h3>
          </div>
          {category.description && (
            <p className="font-dm text-muted text-sm leading-relaxed">
              {category.description}
            </p>
          )}
        </div>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 pt-1 mt-auto">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1.5 rounded-full text-[13px] font-dm text-text-dark/75 bg-border-light/40 border border-border-light hover:border-accent/50 hover:text-text-dark hover:bg-accent/[0.06] transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
