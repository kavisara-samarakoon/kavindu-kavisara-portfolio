// src/app/work/page.jsx
// Work page — lists all projects with details
// Uses a mix of list-style and card-style layout for variety

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ProjectVisual";

export const metadata = {
  title: "Work",
  description:
    "Projects built by Kavindu Kavisara — web apps, dashboards, and more.",
};

export default function WorkPage() {
  return (
    <>
      {/* Page header */}
      <WorkHero />

      {/* Projects list — detailed rows */}
      <ProjectsList />

      {/* Contact CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}

// ----------------------------------------------------------------
// Work page hero
// ----------------------------------------------------------------
function WorkHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <span className="tag mb-6 inline-block">Portfolio</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h1 className="font-syne font-bold text-text-light text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6">
            My Work
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <p className="font-dm text-muted text-base md:text-lg max-w-xl leading-relaxed">
            A collection of projects I&apos;ve built while learning web
            development and exploring the intersection of networking,
            cybersecurity, and modern UI design.
          </p>
        </Reveal>

        {/* Stats row */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-border">
            <div>
              <span className="font-syne font-bold text-3xl text-accent">
                {projects.length}
              </span>
              <p className="font-dm text-muted text-sm mt-0.5">Total Projects</p>
            </div>
            <div>
              <span className="font-syne font-bold text-3xl text-text-light">
                {projects.filter((p) => p.featured).length}
              </span>
              <p className="font-dm text-muted text-sm mt-0.5">Featured</p>
            </div>
            <div>
              <span className="font-syne font-bold text-3xl text-text-light">
                2024
              </span>
              <p className="font-dm text-muted text-sm mt-0.5">Latest Year</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Projects list — detailed row layout for each project
// ----------------------------------------------------------------
function ProjectsList() {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        {/* Desktop: detailed row list */}
        <div className="hidden md:flex flex-col">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Mobile: card grid */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// ProjectRow — desktop list item with hover visual reveal
// ----------------------------------------------------------------
function ProjectRow({ project, index }) {
  return (
    <Reveal direction="up" delay={index * 0.07}>
      <Link
        href={`/work/${project.slug}`}
        className="group flex items-start gap-8 py-10 border-b border-border hover:border-accent/30 transition-colors duration-500"
      >
        {/* Number */}
        <span className="font-syne font-bold text-muted text-sm w-10 shrink-0 mt-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + description */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-3">
            <h2 className="font-syne font-bold text-text-light text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h2>
            {project.featured && (
              <span className="tag tag-accent text-xs shrink-0">Featured</span>
            )}
          </div>
          <p className="font-dm text-muted text-sm leading-relaxed max-w-lg">
            {project.shortDescription}
          </p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 5).map((tech) => (
              <span key={tech} className="tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Type + year */}
        <div className="flex flex-col items-end gap-1 shrink-0 w-48">
          <span className="font-dm text-muted text-xs uppercase tracking-wider">
            {project.type}
          </span>
          <span className="font-dm text-muted text-xs">{project.year}</span>
        </div>

        {/* Visual placeholder — appears on hover */}
        <div className="w-32 h-24 overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
          <ProjectVisual slug={project.slug} className="w-full h-full" animated={false} />
        </div>

        {/* Arrow */}
        <div className="shrink-0 mt-1">
          <svg
            className="w-5 h-5 text-muted group-hover:text-accent transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
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
        </div>
      </Link>
    </Reveal>
  );
}
