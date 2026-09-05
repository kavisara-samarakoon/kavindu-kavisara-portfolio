import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

      {project.externalLinks && <ProjectLinks project={project} />}

      {project.pipeline && <ProjectPipeline project={project} />}

      <ProjectFeatures project={project} />

      <ProjectVisuals project={project} />

      {project.validation && <ProjectValidation project={project} />}

      {project.distribution && <ProjectDistribution project={project} />}

      {(project.safetyBoundaries || project.limitations) && (
        <ProjectSafety project={project} />
      )}

      {project.gallery && <ProjectGallery project={project} />}

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

function ProjectLinks({ project }) {
  return (
    <section className="py-10 bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="flex flex-wrap gap-4">
            {project.externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-light font-dm text-sm rounded-sm hover:border-accent hover:text-accent transition-all duration-300 group"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                {link.label}
                <svg
                  className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H8M17 7v9"
                  />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectPipeline({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-10">
            <span className="tag mb-4 inline-block">Pipeline</span>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
              Detection Pipeline
            </h2>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            {project.pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="px-4 py-2 border border-accent/30 bg-accent/5 text-accent font-dm text-sm rounded-sm">
                  {step}
                </span>
                {i < project.pipeline.length - 1 && (
                  <svg
                    className="w-4 h-4 text-muted shrink-0"
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
                )}
              </div>
            ))}
          </div>
        </Reveal>
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
  // Projects with a gallery (e.g. SentinelLite AI) show their real images
  // in the Gallery section instead of the three-variant SVG preview.
  if (project.gallery) return null;

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

function ProjectValidation({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-10">
            <span className="tag tag-accent mb-4 inline-block">Validation</span>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
              Testing &amp; Validation
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.validation.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 0.05}>
              <div className="flex items-center gap-3 p-4 border border-border rounded-sm bg-border/20">
                <svg
                  className="w-4 h-4 text-accent shrink-0"
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
                <span className="font-dm text-muted text-sm">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDistribution({ project }) {
  return (
    <section className="py-10 bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="p-6 border border-border rounded-sm bg-border/20">
            <span className="font-dm text-muted text-xs uppercase tracking-widest mb-2 block">
              Distribution
            </span>
            <p className="font-dm text-accent text-sm font-medium mb-1">
              {project.distribution.status}
            </p>
            <p className="font-dm text-muted text-sm">
              {project.distribution.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectSafety({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-10">
            <span className="tag mb-4 inline-block">Transparency</span>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
              Safety Boundaries &amp; Limitations
            </h2>
          </div>
        </Reveal>

        {project.safetyBoundaries && (
          <Reveal direction="up" delay={0.05}>
            <div className="mb-8 p-5 border border-accent/20 bg-accent/5 rounded-sm">
              {project.safetyBoundaries.map((item, i) => (
                <p key={i} className="font-dm text-accent text-sm leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        )}

        {project.limitations && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.limitations.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.04}>
                <div className="flex items-start gap-3 p-4 border border-border rounded-sm bg-border/20">
                  <svg
                    className="w-4 h-4 text-muted shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="font-dm text-muted text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectGallery({ project }) {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-10">
            <span className="tag mb-4 inline-block">Gallery</span>
            <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
              Project Screenshots
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {project.gallery.map((img, i) => (
            <Reveal key={i} direction="up" delay={i * 0.1}>
              <div className="border border-border rounded-sm overflow-hidden bg-border/20">
                <div className="relative w-full aspect-video">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
                {img.caption && (
                  <div className="px-6 py-3 border-t border-border">
                    <p className="font-dm text-muted text-sm">{img.caption}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
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
