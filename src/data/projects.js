export const projects = [
  {
    id: 6,
    slug: "sentinellite-ai",
    title: "SentinelLite AI",
    type: "Cybersecurity CLI",
    context: "Cybersecurity Project",
    status: "v1.2.0-beta",
    year: "2026",
    shortDescription:
      "A beta-stage defensive Linux endpoint observation and report-review CLI that generates local JSON alert reports and static dashboard views for security learning.",
    overview:
      "SentinelLite AI is a beta-stage defensive Linux endpoint observation and report-review CLI that generates local JSON alert reports and static dashboard views for security learning. The v1.2.0-beta release adds the local static dashboard milestone, package artifacts, validation workflow, and stronger documentation around safe local usage.",
    detailedDescription:
      "SentinelLite AI is a beta-stage defensive Linux endpoint observation and report-review CLI that generates local JSON alert reports and static dashboard views for security learning. The v1.2.0-beta release adds the local static dashboard milestone, package artifacts, validation workflow, and stronger documentation around safe local usage.",
    challenge:
      "The main challenge was building a transparent, deterministic detection and scoring pipeline that produces meaningful security insights without relying on external services, cloud APIs, or AI/LLM models. Every detection rule, risk score calculation, and report output needed to be fully explainable and reproducible locally. The v1.2.0-beta release added static dashboard generation and package artifact workflows while preserving this deterministic foundation.",
    myRole:
      "I designed, developed, tested, validated, and released the entire project independently — including the CLI architecture, detection pipeline, scoring engine, report system, static dashboard export, package artifacts, CI/CD workflows, cross-platform validation, and public GitHub pre-release.",
    tech: [
      "Python",
      "Linux",
      "Cybersecurity",
      "Blue Team",
      "CLI",
      "JSON Reports",
      "Static Dashboard",
      "Rule-Based Detection",
      "Risk Scoring",
    ],
    features: [
      "Local on-demand Linux endpoint observation CLI",
      "Authentication log analysis",
      "Process and active network connection observation",
      "Selected file integrity checks",
      "Baseline-backed file integrity comparison",
      "Rule-based detection and deterministic risk scoring",
      "Local JSON alert reports",
      "Local report history and review workflow",
      "Deterministic local alert explanations",
      "Static local dashboard export",
      "TOML config/module gating",
      "Package artifacts with SHA256 hashes",
      "GitHub Actions CI with Python 3.11 and 3.14 validation",
      "652 automated tests passed",
    ],
    result:
      "SentinelLite AI reached its v1.2.0-beta public pre-release with 652 automated tests passing, full CI/CD validation on Python 3.11 and Python 3.14, static dashboard export, package artifacts with SHA-256 checksums, and a clean GitHub pre-release. It demonstrates practical defensive security engineering concepts, detection pipeline design, static dashboard generation, and disciplined software release practices.",
    featured: true,
    ctaLabel: "Read Case Study",
    mainImage: "/images/projects/sentinellite-ai/cover.png",
    externalLinks: [
      {
        label: "GitHub Repository",
        href: "https://github.com/kavisara-samarakoon/sentinellite-ai",
      },
      {
        label: "v1.2.0-beta Release",
        href: "https://github.com/kavisara-samarakoon/sentinellite-ai/releases/tag/v1.2.0-beta",
      },
    ],
    pipeline: [
      "Observe",
      "Normalize",
      "Detect",
      "Score",
      "Explain",
      "Report",
      "Review",
      "Dashboard",
    ],
    validation: [
      "652 automated tests passed",
      "Ruff linting passed",
      "pip check passed",
      "GitHub Actions CI passed",
      "Python 3.11 and Python 3.14 CI validation",
      "macOS Apple Silicon validation",
      "Ubuntu ARM64 validation",
      "Package artifacts rebuilt and validated",
      "SHA-256 checksums generated",
      "Public GitHub pre-release v1.2.0-beta",
    ],
    distribution: {
      status: "v1.2.0-beta • Public GitHub Pre-release",
      note: "Not yet published to PyPI. Install from GitHub release artifacts.",
    },
    safetyBoundaries: [
      "SentinelLite AI is beta-stage software for local defensive security learning. It is not a production EDR, antivirus, SIEM/SOC platform, malware remover, real AI/LLM-powered system, public scanner, background monitor, exploit tool, or automatic remediation tool.",
    ],
    limitations: [
      "Not a production EDR, antivirus, malware remover, SIEM, SOC platform, or enterprise-ready product",
      "Not real AI/LLM-powered",
      "Not PyPI-published yet",
      "Not an automatic protection system",
      "Does not run as a daemon or background service",
      "Does not perform active network scanning or probing",
      "Does not send packets or exploit systems",
      "Does not perform automatic remediation",
      "Does not terminate processes, block IPs, modify firewall rules, or delete/repair files",
      "Does not send external notifications",
    ],
    gallery: [
      {
        src: "/images/projects/sentinellite-ai/sentinellite-v120-journey.png",
        alt: "SentinelLite AI project journey from v0.1.0-alpha to v1.2.0-beta",
        caption: "Project Journey — Alpha to v1.2.0-beta",
      },
      {
        src: "/images/projects/sentinellite-ai/sentinellite-v120-validation.png",
        alt: "SentinelLite AI v1.2.0-beta validation — 652 tests passed, CI success",
        caption: "v1.2.0-beta Validation Summary",
      },
      {
        src: "/images/projects/sentinellite-ai/sentinellite-dashboard-workflow.png",
        alt: "SentinelLite AI static dashboard export workflow",
        caption: "Static Dashboard Export Workflow",
      },
    ],
  },
  {
    id: 7,
    slug: "arm-secnet",
    title: "ARM-SecNet",
    type: "Cybersecurity Lab Framework",
    context: "Cybersecurity Project",
    status: "V1.1.0 Release",
    year: "2026",
    shortDescription:
      "An ARM64-first defensive cybersecurity lab framework for Apple Silicon learners, focused on UTM-based Linux lab setup, safe defensive exercises, evidence documentation, and validation checks.",
    overview:
      "ARM-SecNet is a public ARM64-first defensive cybersecurity lab framework for Apple Silicon users, providing UTM-based Linux lab setup, defensive exercises, screenshot-backed evidence, and validation workflows. The V1.1.0 release expands the framework with a SentinelLite AI Local CLI and Static Dashboard lab while preserving its defensive-only education scope.",
    detailedDescription:
      "ARM-SecNet is a public ARM64-first defensive cybersecurity lab framework for Apple Silicon users, providing UTM-based Linux lab setup, defensive exercises, screenshot-backed evidence, and validation workflows. The V1.1.0 release expands the framework with a SentinelLite AI Local CLI and Static Dashboard lab while preserving its defensive-only education scope.",
    challenge:
      "The main challenge was designing a structured lab framework that works reliably on ARM64 Apple Silicon hardware using UTM virtualization, while ensuring every lab exercise produces verifiable screenshot-backed evidence and passes automated validation checks. The framework needed to remain strictly defensive in scope and provide clear documentation for each lab workflow.",
    myRole:
      "I designed, developed, documented, validated, and released the entire project independently — including the lab framework structure, UTM-based VM workflow, defensive lab exercises, screenshot evidence process, validation scripts, GitHub Actions CI, and the public V1.1.0 release.",
    tech: [
      "ARM64",
      "Apple Silicon",
      "UTM",
      "Ubuntu ARM64",
      "Linux",
      "Cybersecurity",
      "Defensive Labs",
      "Documentation",
      "Validation",
    ],
    features: [
      "ARM64-first lab setup for Apple Silicon learners",
      "UTM-based Ubuntu ARM64 VM workflow",
      "Three documented defensive labs",
      "Screenshot-backed evidence process",
      "Local validation script with 29 passed checks",
      "GitHub Actions validation workflow",
      "Optional SentinelLite AI Local CLI and Static Dashboard lab",
      "Defensive-only education and documentation scope",
    ],
    result:
      "ARM-SecNet reached its V1.1.0 public release with 29 validation checks passing, zero warnings, zero failures, a clean GitHub Actions CI run, and three fully documented defensive labs. It demonstrates practical ARM64 defensive cybersecurity lab design, structured evidence documentation, and disciplined validation practices for Apple Silicon learners.",
    featured: true,
    ctaLabel: "Read Case Study",
    mainImage: "/images/projects/arm-secnet/cover.png",
    externalLinks: [
      {
        label: "GitHub Repository",
        href: "https://github.com/kavisara-samarakoon/arm-secnet",
      },
      {
        label: "V1.1.0 Release",
        href: "https://github.com/kavisara-samarakoon/arm-secnet/releases/tag/v1.1.0-sentinellite-dashboard-lab",
      },
    ],
    validation: [
      "29 validation checks passed",
      "0 warnings, 0 failures",
      "git diff --check passed",
      "GitHub Actions ARM-SecNet Validation CI passed",
      "Lab 01 — Linux Baseline Investigation documented",
      "Lab 02 — Authentication Log Analysis documented",
      "Lab 03 — SentinelLite AI Local CLI and Static Dashboard documented",
      "Screenshot-backed evidence verified",
    ],
    distribution: {
      status: "V1.1.0 • Public GitHub Release",
      note: "ARM-SecNet V1.1.0 SentinelLite Dashboard Lab — public release on GitHub.",
    },
    safetyBoundaries: [
      "Defensive-only, education-focused, ARM64 Apple Silicon lab framework — not a production security product",
      "The V1.1.0 Lab 03 evidence was recorded on one Ubuntu 26.04 LTS aarch64 VM using a specific SentinelLite source commit. The existing screenshots do not validate the exact SentinelLite v1.2.0-beta wheel. Future exact-release VM validation should be recorded separately.",
    ],
    limitations: [
      "Not a production EDR, antivirus, malware remover, SIEM, or SOC platform",
      "Not real AI/LLM-powered",
      "Not a public scanner or offensive toolkit",
      "Not an automatic remediation system",
      "Not a universal ARM64 compatibility proof",
      "Does not provide enterprise-grade security monitoring",
      "Does not perform active network scanning or probing",
      "Does not send packets or exploit systems",
    ],
    gallery: [
      {
        src: "/images/projects/arm-secnet/arm-secnet-v110-overview.png",
        alt: "ARM-SecNet V1.1.0 SentinelLite Dashboard Lab overview",
        caption: "V1.1.0 Release Overview",
      },
      {
        src: "/images/projects/arm-secnet/arm-secnet-lab-workflow.png",
        alt: "ARM-SecNet ARM64 defensive lab workflow on Apple Silicon",
        caption: "Lab Workflow — UTM to Validation",
      },
      {
        src: "/images/projects/arm-secnet/arm-secnet-validation-summary.png",
        alt: "ARM-SecNet validation summary — 29 passed, 0 warnings, 0 failures",
        caption: "Validation Summary — 29 Passed",
      },
    ],
  },
  {
    id: 8,
    slug: "ghost",
    title: "GHOST",
    type: "Local-first Workflow Assistant",
    context: "Personal Software Product",
    status: "Public Alpha",
    year: "2026",
    shortDescription:
      "A secure desktop + CLI workflow assistant for organizing project sessions, memory, handoffs, outputs, and artifacts with a safety-first local architecture.",
    overview:
      "GHOST (GitHub, Handoff, Operations, Search, and Tracking) is a secure local-first workflow assistant I built to manage project continuity across my development work. It combines a Python CLI workflow engine with a Tauri-based macOS desktop cockpit, allowing projects, sessions, notes, outputs, handoffs, memory, and generated artifacts to stay organized locally.",
    detailedDescription:
      "The current public release, v0.3.0-alpha, focuses on the Local MVP Desktop Checkpoint. It includes a polished desktop interface with Command, Projects, Sessions, Memory, and Artifacts pages, plus safe Open/Reveal actions for approved local artifacts. The CLI handles controlled workflow creation, including project registration, session tracking, context packs, handoff drafts, next-step drafts, and update packs. A key design goal of GHOST is safety — the desktop does not run shell commands, execute the CLI, call AI APIs, use network services, or perform GitHub/release actions automatically. The latest main branch introduces a Safe Desktop Action Request Bridge, where the desktop can prepare reviewed local action requests without directly mutating workflow state.",
    challenge:
      "The main challenge was building a workflow tool that keeps project data local and structured while maintaining strict safety boundaries. The desktop cockpit needed to surface workflow information without automatically executing risky actions. Coordinating the Python CLI engine with the Rust/Tauri desktop required careful architecture to keep the write path explicit and controlled.",
    myRole:
      "I designed, developed, tested, validated, and released the entire project independently — including the CLI workflow engine, Tauri desktop cockpit, React UI, safety model, project/session/memory architecture, GitHub Actions CI, and the public v0.3.0-alpha release.",
    tech: [
      "Tauri",
      "React",
      "TypeScript",
      "Rust",
      "Python",
      "Vite",
      "macOS",
      "Local-first",
      "Workflow",
      "GitHub Actions",
    ],
    features: [
      "Local-first desktop + CLI workflow system",
      "macOS desktop Command Space cockpit",
      "Projects, Sessions, Memory, and Artifacts pages",
      "Safe project/session tracking",
      "Explicit-submit local memory search",
      "Context packs and AI handoff drafts",
      "Update pack generation",
      "Memory and artifact review cockpit",
      "Safe Open / Reveal actions for approved artifacts",
      "Python CLI workflow engine",
      "Desktop action request bridge on latest main branch",
      "GitHub Actions CI and public release workflow",
    ],
    result:
      "GHOST reached its v0.3.0-alpha public release as a Local MVP Desktop Checkpoint with a working desktop cockpit, CLI workflow engine, safe action model, and structured project/session/memory architecture. It demonstrates secure local-first software design, desktop application development with Tauri, workflow automation architecture, and disciplined release engineering. The project is moving toward v0.4.0-alpha with planned features including safe desktop action request review and approval, confirmed desktop write actions, AI-assisted project context suggestions, and GitHub/developer workflow integrations.",
    featured: true,
    ctaLabel: "Read Case Study",
    mainImage: "/images/projects/ghost/cover.png",
    externalLinks: [
      {
        label: "GitHub Repository",
        href: "https://github.com/kavisara-samarakoon/ghost",
      },
      {
        label: "v0.3.0-alpha Release",
        href: "https://github.com/kavisara-samarakoon/ghost/releases/tag/v0.3.0-alpha",
      },
    ],
    validation: [
      "v0.3.0-alpha public release published",
      "Desktop cockpit builds and launches on macOS",
      "CLI workflow engine functional",
      "GitHub Actions CI passed",
      "Safe action model enforced",
      "Desktop does not execute shell commands or CLI",
      "Desktop does not call AI APIs or network services",
      "Latest main includes Safe Desktop Action Request Bridge (M29)",
    ],
    distribution: {
      status: "v0.3.0-alpha • Public GitHub Release",
      note: "Local MVP Desktop Checkpoint. macOS app is unsigned and not notarized. Install from GitHub release artifacts.",
    },
    safetyBoundaries: [
      "GHOST is a public alpha and local MVP, not production-ready. The desktop does not run shell commands, invoke the Python CLI, call AI APIs, call network services, or automatically publish, deploy, merge, push, tag, or release. CLI remains the controlled write path. Users must review generated drafts before sharing. Users should not store secrets in GHOST notes, requests, or outputs.",
    ],
    limitations: [
      "Public alpha — not production-ready",
      "macOS app is unsigned and not notarized",
      "Desktop does not run shell commands",
      "Desktop does not invoke the Python CLI directly",
      "Desktop does not call AI APIs or network services",
      "Does not automatically publish, deploy, merge, push, tag, or release",
      "AI-assisted workflows are planned roadmap, not yet implemented",
      "Voice-command workflow control is planned roadmap, not yet implemented",
      "Users should not store secrets in GHOST notes or outputs",
    ],
    gallery: [
      {
        src: "/images/projects/ghost/ghost-workflow.png",
        alt: "GHOST local-first workflow assistant architecture and workflow overview",
        caption: "Local-first Workflow Assistant Overview",
      },
      {
        src: "/images/projects/ghost/ghost-inside.png",
        alt: "Inside GHOST — desktop cockpit interface with Command, Projects, Sessions, and Memory pages",
        caption: "Inside GHOST — Desktop Cockpit",
      },
      {
        src: "/images/projects/ghost/ghost-safe-local-first.png",
        alt: "GHOST safe local-first architecture — no shell execution, no AI API calls, no automatic actions",
        caption: "Safe Local-first Architecture",
      },
    ],
  },
  {
    id: 1,
    slug: "nexora",
    title: "NEXORA",
    type: "Network-Aware Full-Stack Platform",
    context: "Full-Stack Platform",
    status: "In Development",
    year: "2026",
    shortDescription:
      "A game deals and giveaways platform focused on performance, clean UI, backend API structure, and network-aware thinking.",
    overview:
      "NEXORA is my main full-stack project. The idea is to build a clean platform for discovering game deals and giveaways while applying good frontend structure, backend API design, database planning, and performance-focused development. It connects my web development skills with my interest in networking and system-aware application design.",
    challenge:
      "The main challenge is building the project in a professional way instead of making only a simple frontend. I need to plan the frontend, backend, database, API flow, error handling, and future scalability carefully. Since the project is still under development, I am focusing on building it step by step with a clean structure.",
    myRole:
      "I am building the project as a personal full-stack portfolio project. My work includes frontend development, backend planning, database structure, API design, UI improvements, and project documentation.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Game deals and giveaways listing concept",
      "Modern responsive frontend interface",
      "Backend API planning with Spring Boot",
      "Database planning with PostgreSQL",
      "Network-aware platform direction",
      "Future-ready structure for authentication and persistence",
    ],
    result:
      "This project is still in progress, but it is becoming one of my strongest portfolio projects because it shows both full-stack development ability and my interest in building scalable, practical systems.",
    featured: true,
    mainImage: "/images/projects/nexora/cover.png",
    gallery: [
      {
        src: "/images/projects/nexora/nexora-main.png",
        alt: "NEXORA full-stack game deals intelligence MVP showcase",
        caption: "NEXORA — Full-Stack Game Deals Intelligence MVP",
      },
      {
        src: "/images/projects/nexora/nexora-showcase-1.png",
        alt: "NEXORA authentication and dashboard showcase",
        caption: "Authentication & Dashboard",
      },
      {
        src: "/images/projects/nexora/nexora-showcase-2.png",
        alt: "NEXORA deals and alert workflow showcase",
        caption: "Deals & Alert Workflow",
      },
      {
        src: "/images/projects/nexora/nexora-showcase-3.png",
        alt: "NEXORA wishlist, security, and Sentinel interface showcase",
        caption: "Wishlist, Security & Sentinel Interface",
      },
    ],
  },
  {
    id: 2,
    slug: "pfsense-firewall-lab",
    title: "pfSense Firewall & Network Security Lab",
    type: "Networking / Security Lab",
    context: "Network Security Lab",
    status: "Lab Project",
    year: "2026",
    shortDescription:
      "A practical network security lab focused on firewall configuration, traffic filtering, NAT, and secure network design.",
    overview:
      "This project is based on practical network security lab work using pfSense. The goal is to understand how firewalls protect networks, how rules are created, and how traffic can be filtered between different network segments.",
    challenge:
      "The main challenge was understanding how firewall rules affect real network traffic. Rule order, NAT behavior, interface configuration, and troubleshooting all require careful testing. This project helped me connect theory with real security configuration practice.",
    myRole:
      "I worked on the firewall configuration, network setup, rule testing, troubleshooting, documentation, and explanation of the security logic used in the lab.",
    tech: [
      "pfSense",
      "Firewall Rules",
      "NAT",
      "DHCP",
      "Network Security",
      "Virtualization",
    ],
    features: [
      "Firewall rule configuration",
      "Network traffic filtering",
      "NAT and interface setup",
      "Basic secure network segmentation",
      "Troubleshooting and testing",
      "Lab documentation",
    ],
    result:
      "This project strengthened my understanding of practical network security and gave me hands-on experience with firewall-based protection, which is directly related to my cybersecurity and network engineering career path.",
    featured: true,
    mainImage: "/images/projects/pfsense-firewall-lab/cover.png",
    gallery: [
      {
        src: "/images/projects/pfsense-firewall-lab/pfsense-main.png",
        alt: "Network Security Lab portfolio showcase with pfSense and cybersecurity lab documentation",
        caption: "pfSense Firewall & Network Security Lab — Portfolio Showcase",
      },
      {
        src: "/images/projects/pfsense-firewall-lab/pfsense-readme-overview.png",
        alt: "pfSense firewall and network security lab README overview",
        caption: "README Overview — Project Summary & Documentation",
      },
      {
        src: "/images/projects/pfsense-firewall-lab/pfsense-readme-evidence-tools.png",
        alt: "pfSense lab evidence, tools and technologies, and repository structure screenshot",
        caption: "Lab Evidence, Tools & Repository Structure",
      },
    ],
  },
  {
    id: 3,
    slug: "freebsd-asterisk-voip",
    title: "FreeBSD & Asterisk VoIP Configuration",
    type: "Networking / System Administration Lab",
    context: "System Administration Lab",
    status: "Lab Project",
    year: "2026",
    shortDescription:
      "A VoIP lab project using FreeBSD and Asterisk to understand SIP-based communication and server configuration.",
    overview:
      "This project focuses on configuring a VoIP environment using FreeBSD and Asterisk. It helped me understand how voice communication works over IP networks and how server-side communication services are configured.",
    challenge:
      "The main challenge was configuring the environment correctly and understanding how SIP accounts, extensions, and network connectivity work together. VoIP configuration requires attention to both system administration and networking concepts.",
    myRole:
      "I worked on the FreeBSD environment setup, Asterisk configuration, extension setup, testing, troubleshooting, and documentation of the VoIP lab process.",
    tech: [
      "FreeBSD",
      "Asterisk",
      "VoIP",
      "SIP",
      "Networking",
      "System Administration",
    ],
    features: [
      "FreeBSD-based server environment",
      "Asterisk VoIP configuration",
      "SIP extension setup",
      "Internal call testing",
      "Network connectivity troubleshooting",
      "Technical documentation",
    ],
    result:
      "This project improved my understanding of VoIP systems, server configuration, and real network services. It is useful evidence for both network engineering and system administration skills.",
    featured: true,
    mainImage: "/images/projects/freebsd-asterisk-voip/cover.png",
    gallery: [
      {
        src: "/images/projects/freebsd-asterisk-voip/freebsd-asterisk-showcase-1.png",
        alt: "FreeBSD and Asterisk VoIP lab documentation showcase",
        caption: "FreeBSD & Asterisk VoIP Lab — Documentation Showcase",
      },
      {
        src: "/images/projects/freebsd-asterisk-voip/freebsd-asterisk-showcase-2.png",
        alt: "FreeBSD and Asterisk VoIP lab repository and configuration evidence showcase",
        caption: "Repository & Configuration Evidence",
      },
    ],
  },
  {
    id: 4,
    slug: "unimatelk",
    title: "UniMateLK",
    type: "Academic Full-Stack Web Application",
    context: "Academic Full-Stack Project",
    status: "Completed",
    year: "2026",
    shortDescription:
      "A roommate matching and chat platform built as an academic group project using Spring Boot, MySQL, Google OAuth, and real-time WebSocket communication.",
    overview:
      "UniMateLK is an academic group project for the DEA module. The platform helps users find suitable roommates by creating profiles, setting preferences, viewing suggested matches, sending match requests, and chatting after a match is accepted.",
    challenge:
      "The main challenge was building a complete full-stack application with authentication, profile management, matching logic, request handling, and real-time chat. The project also required proper backend structure, database integration, and API testing.",
    myRole:
      "I contributed to the development and documentation of the project as part of the academic group work. The project helped me improve my backend, database, API, authentication, and full-stack development skills.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "OAuth2",
      "MySQL",
      "Flyway",
      "JPA",
      "Hibernate",
      "WebSocket",
      "STOMP",
      "SockJS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Google OAuth login",
      "Profile creation and update",
      "Preferences creation and update",
      "Preference-based roommate match suggestions",
      "Match request send, accept, reject, and cancel flow",
      "Chat rooms unlocked after accepted matches",
      "Real-time text chat using WebSockets",
      "Image sharing in chat",
      "Postman collection for API testing",
    ],
    result:
      "This project is stronger than a basic student management system because it shows real full-stack application features such as authentication, matching, request workflows, database-backed logic, API testing, and real-time communication.",
    featured: false,
    mainImage: "/images/projects/unimatelk/cover.png",
  },
  {
    id: 5,
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    type: "Portfolio / Frontend Project",
    context: "Personal Project",
    status: "Active",
    year: "2026",
    shortDescription:
      "A personal portfolio website built to present my projects, skills, education, and career direction professionally.",
    overview:
      "This portfolio website is designed to present my academic background, technical skills, projects, and career direction as an aspiring Cybersecurity Analyst and Network Engineer. It is currently being improved before final GitHub polishing and future deployment.",
    challenge:
      "The main challenge is making the portfolio look visually strong while keeping the content honest, student-friendly, and aligned with my networking and cybersecurity career path.",
    myRole:
      "I am improving the content, structure, visual presentation, responsiveness, project details, and GitHub readiness of the portfolio.",
    tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis"],
    features: [
      "Animated hero section",
      "Responsive portfolio layout",
      "Project detail pages",
      "Skills and tools section",
      "About and education content",
      "GitHub-ready project structure",
    ],
    result:
      "This project is being improved step by step. The goal is to make it professional enough for GitHub, LinkedIn, internship applications, and future deployment.",
    featured: false,
    mainImage: "/images/projects/personal-portfolio/cover.png",
    gallery: [
      {
        src: "/images/projects/personal-portfolio/portfolio-main.png",
        alt: "Personal portfolio website homepage hero section",
        caption: "Portfolio Homepage — Hero Section",
      },
      {
        src: "/images/projects/personal-portfolio/portfolio-showcase-desktop.png",
        alt: "Personal portfolio website multi-section desktop showcase",
        caption: "Desktop Showcase — Multi-Section Layout",
      },
      {
        src: "/images/projects/personal-portfolio/portfolio-showcase-mobile.png",
        alt: "Personal portfolio website mobile responsive interface",
        caption: "Mobile Responsive Interface",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
