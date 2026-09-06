const githubProjects = [
  {
    title: "SentinelLite AI",
    repo: "sentinellite-ai",
    description:
      "Lightweight Linux endpoint observation CLI for defensive security learning, local analysis, and structured alert reporting.",
    status: "Beta pre-release",
    statusAccent: true,
    pills: ["Python", "Linux", "CLI", "Blue Team", "Security Logs"],
    highlight:
      "Rule-based detection pipeline with local JSON reporting and validation workflow.",
    href: "https://github.com/kavisara-samarakoon/sentinellite-ai",
  },
  {
    title: "ARM-SecNet",
    repo: "arm-secnet",
    description:
      "ARM64-first defensive cybersecurity and networking lab documentation for Apple Silicon learning environments.",
    status: "Documentation MVP",
    statusAccent: false,
    pills: ["ARM64", "Linux", "UTM", "Networking", "Security Lab"],
    highlight:
      "Practical lab notes, validation checks, and defensive learning workflow.",
    href: "https://github.com/kavisara-samarakoon/arm-secnet",
  },
  {
    title: "Personal Portfolio",
    repo: "kavindu-kavisara-portfolio",
    description:
      "Responsive developer portfolio built to showcase cybersecurity, networking, and full-stack projects.",
    status: "Live portfolio",
    statusAccent: true,
    pills: ["Next.js", "React", "Tailwind", "GSAP", "Vercel"],
    highlight:
      "Modern dark UI, responsive layout, project case studies, and polished deployment workflow.",
    href: "https://github.com/kavisara-samarakoon/kavindu-kavisara-portfolio",
  },
  {
    title: "NEXORA",
    repo: "nexora",
    description:
      "Game deals and giveaways platform concept with wishlist alerts, deal discovery, and full-stack product architecture.",
    status: "Private MVP",
    statusAccent: false,
    pills: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Product UI"],
    highlight:
      "Full-stack product direction with clean UI, deal tracking concepts, and scalable roadmap.",
    href: null,
  },
];

function GitHubIcon({ className }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ExternalArrowIcon({ className }) {
  return (
    <svg
      className={className}
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
  );
}

function LockIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function HighlightIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function RepoCard({ project }) {
  const isPublic = !!project.href;

  return (
    <div className="group relative rounded-xl border border-border bg-border/10 p-5 sm:p-6 flex flex-col gap-4 hover:border-accent/40 hover:bg-accent/[0.02] hover:-translate-y-0.5 transition-all duration-300">
      {/* Header — GitHub icon, repo name, status badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg border border-border bg-bg-dark/80 flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/40 transition-all duration-300 shrink-0">
            <GitHubIcon className="w-[18px] h-[18px]" />
          </div>
          <div className="min-w-0">
            <h3 className="font-syne font-bold text-text-light text-base leading-tight group-hover:text-accent transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="font-dm text-muted text-xs mt-0.5 truncate">
              {project.repo}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-dm font-medium uppercase tracking-wider border whitespace-nowrap ${
            project.statusAccent
              ? "border-accent/40 text-accent bg-accent/[0.08]"
              : "border-border text-muted bg-border/30"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="font-dm text-muted text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.pills.map((pill) => (
          <span
            key={pill}
            className="inline-block px-2.5 py-1 rounded-full text-[11px] font-dm text-muted/90 bg-border/60 border border-border/80 tracking-wide"
          >
            {pill}
          </span>
        ))}
      </div>

      {/* Highlight line */}
      <div className="flex items-start gap-2 pt-1">
        <HighlightIcon className="w-3.5 h-3.5 text-accent/60 mt-0.5 shrink-0" />
        <p className="font-dm text-muted/80 text-xs leading-relaxed italic">
          {project.highlight}
        </p>
      </div>

      {/* Bottom action */}
      <div className="pt-2 mt-auto border-t border-border/50">
        {isPublic ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} repository on GitHub (opens in new tab)`}
            className="inline-flex items-center gap-2 text-sm font-dm font-medium text-text-light hover:text-accent transition-colors duration-300"
          >
            <span>View Repository</span>
            <ExternalArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-dm text-muted/60">
            <LockIcon className="w-3.5 h-3.5" />
            <span>Private Repository</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default function GitHubHighlights() {
  return (
    <section className="bg-bg-dark pb-16 md:pb-20">
      <div className="container-custom">
        <div className="border-t border-border pt-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="tag tag-accent mb-4 inline-block">
                GitHub Highlights
              </span>
              <h2 className="font-syne font-bold text-text-light text-2xl md:text-3xl tracking-tight">
                Selected public repositories
              </h2>
            </div>

            <p className="font-dm text-muted text-sm leading-relaxed max-w-md">
              A focused selection of public repositories and technical work
              reflecting cybersecurity, networking, and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {githubProjects.map((project) => (
              <RepoCard key={project.repo} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
