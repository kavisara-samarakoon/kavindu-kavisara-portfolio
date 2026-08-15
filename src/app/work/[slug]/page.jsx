import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/data/projects";
import Reveal from "@/components/Reveal";
import ProjectVisual from "@/components/ProjectVisual";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <ProjectHero project={project} />

      <ProjectDetails project={project} />

      <ProjectFeatures project={project} />

      <ProjectVisuals project={project} />

      <ProjectResult project={project} />

      <NextProjectSection currentProject={project} nextProject={nextProject} />

      <Footer />
    </>
  );
}

function ProjectHero({ project }) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/work"
              className="font-dm text-muted text-sm hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Work
            </Link>
            <span className="text-border font-dm text-sm">/</span>
            <span className="font-dm text-muted text-sm">{project.title}</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <div className="flex items-center gap-4 mb-6">
            <span className="tag tag-accent">{project.type}</span>
            <span className="tag">{project.year}</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h1 className="font-syne font-bold text-text-light text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8">
            {project.title}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="font-dm text-muted text-base md:text-xl max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((tech) => (
              <span key={tech} className="tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectDetails({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <Reveal direction="up" delay={0.05} className="md:col-span-2">
            <div>
              <span className="font-dm text-muted text-xs uppercase tracking-widest mb-4 block">
                Overview
              </span>
              <h2 className="font-syne font-bold text-text-light text-2xl md:text-3xl mb-5 leading-tight">
                What is this project?
              </h2>
              <p className="font-dm text-muted text-base leading-relaxed">
                {project.overview}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-dm text-muted text-xs uppercase tracking-widest mb-2 block">
                  Project Type
                </span>
                <p className="font-dm text-text-light text-sm">{project.type}</p>
              </div>
              <div>
                <span className="font-dm text-muted text-xs uppercase tracking-widest mb-2 block">
                  Year
                </span>
                <p className="font-dm text-text-light text-sm">{project.year}</p>
              </div>
              {project.status && (
                <div>
                  <span className="font-dm text-muted text-xs uppercase tracking-widest mb-2 block">
                    Status
                  </span>
                  <p className="font-dm text-accent text-sm">{project.status}</p>
                </div>
              )}
              <div>
                <span className="font-dm text-muted text-xs uppercase tracking-widest mb-2 block">
                  My Role
                </span>
                <p className="font-dm text-muted text-sm leading-relaxed">
                  {project.myRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal direction="up" className="md:col-span-4">
              <span className="font-dm text-muted text-xs uppercase tracking-widest mb-4 block">
                The Challenge
              </span>
              <h2 className="font-syne font-bold text-text-light text-2xl md:text-3xl leading-tight">
                What made this difficult?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1} className="md:col-span-8">
              <p className="font-dm text-muted text-base leading-relaxed pt-8 md:pt-0">
                {project.challenge}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFeatures({ project }) {
  return (
    <section className="section-padding light-section">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-12">
            <span
              className="tag mb-4 inline-block"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--muted)",
              }}
            >
              Features
            </span>
            <h2 className="font-syne font-bold text-text-dark text-3xl md:text-4xl leading-tight">
              What I Built
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.features.map((feature, i) => (
            <Reveal key={i} direction="up" delay={i * 0.07}>
              <div className="flex items-start gap-4 p-6 border border-border-light rounded-sm bg-white/30">
                <div className="w-6 h-6 rounded-full bg-text-dark flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-dm text-text-dark text-sm leading-relaxed">
                  {feature}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisuals({ project }) {
  return (
    <section className="section-padding bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-10">
            <span className="tag mb-4 inline-block">Visual</span>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
              Project Preview
            </h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <ProjectVisual slug={project.slug} variant="overview" className="w-full h-72 md:h-96" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Reveal direction="up" delay={0.15}>
            <ProjectVisual slug={project.slug} variant="architecture" className="w-full h-40 md:h-52" />
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <ProjectVisual slug={project.slug} variant="detail" className="w-full h-40 md:h-52" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectResult({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="max-w-3xl">
          <Reveal direction="up">
            <span className="tag tag-accent mb-6 inline-block">Outcome</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight mb-8">
              What I Learned
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="font-dm text-muted text-base md:text-lg leading-relaxed">
              {project.result}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NextProjectSection({ currentProject, nextProject }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted hover:text-accent font-dm text-sm transition-colors duration-300 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Work
          </Link>

          {nextProject && nextProject.slug !== currentProject.slug && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1"
            >
              <span className="font-dm text-muted text-xs uppercase tracking-widest">
                Next Project
              </span>
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-text-light text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
                  {nextProject.title}
                </span>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1"
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
          )}
        </div>
      </div>
    </section>
  );
}
