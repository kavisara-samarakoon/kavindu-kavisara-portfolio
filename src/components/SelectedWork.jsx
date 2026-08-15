"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function SelectedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="tag mb-4 inline-block">Portfolio</span>
              <h2 className="font-syne font-bold text-text-light text-4xl md:text-5xl lg:text-6xl leading-tight">
                Selected Work
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-muted hover:text-accent font-dm text-sm transition-colors duration-300 group"
            >
              View All
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="flex justify-center mt-10 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-3 border border-border text-text-light font-dm text-sm rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
