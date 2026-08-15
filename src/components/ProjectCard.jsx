"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="flex flex-col gap-6 p-6 md:p-8 border border-border hover:border-accent/30 rounded-sm transition-all duration-500 bg-border/20 hover:bg-border/40">
          <div className="flex items-center justify-between">
            <span className="font-syne font-bold text-muted text-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-4">
              <span className="tag">{project.type}</span>
              <span className="text-muted font-dm text-xs">{project.year}</span>
            </div>
          </div>

          <ProjectVisual
            slug={project.slug}
            className="w-full h-48 md:h-56"
            animated={false}
          />

          <div className="flex flex-col gap-3">
            <h3 className="font-syne font-bold text-text-light text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-dm text-muted text-sm leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="tag text-xs">
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="tag text-xs">+{project.tech.length - 4} more</span>
            )}
          </div>

          <div className="flex items-center gap-2 text-accent font-dm text-sm font-medium group/link">
            <span>View Project</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
        </div>
      </Link>
    </motion.div>
  );
}
