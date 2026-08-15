const githubProjects = [
  {
    title: "Portfolio Repo",
    repo: "kavindu-kavisara-portfolio",
    type: "Personal Portfolio",
    href: "https://github.com/kavisara-samarakoon/kavindu-kavisara-portfolio",
  },
  {
    title: "UniMateLK",
    repo: "unimatelk",
    type: "Full-Stack Project",
    href: "https://github.com/kavisara-samarakoon/unimatelk",
  },
  {
    title: "Network Security Lab",
    repo: "network-security-lab-portfolio",
    type: "Security Lab",
    href: "https://github.com/kavisara-samarakoon/network-security-lab-portfolio",
  },
  {
    title: "GitHub Profile",
    repo: "kavisara-samarakoon",
    type: "Profile README",
    href: "https://github.com/kavisara-samarakoon/kavisara-samarakoon",
  },
];

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
              A compact set of public repositories connected to my portfolio,
              academic, and cybersecurity learning work.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {githubProjects.map((project) => (
              <a
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="group aspect-square rounded-2xl border border-border bg-border/10 p-5 flex flex-col justify-between hover:border-accent/50 hover:bg-accent/[0.03] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-11 h-11 rounded-xl border border-border bg-bg-dark/80 flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/40 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>

                  <svg
                    className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
                </div>

                <div>
                  <span className="tag text-[10px] mb-3 inline-block">
                    {project.type}
                  </span>
                  <h3 className="font-syne font-bold text-text-light text-base md:text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-dm text-muted text-xs mt-2 break-words leading-relaxed">
                    {project.repo}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
