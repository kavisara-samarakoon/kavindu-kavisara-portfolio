import Image from "next/image";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Learn about Kavindu Kavisara — a Computer Networks student focused on cybersecurity, network security, system administration, cloud technologies, and secure full-stack development.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <IntroSection />
      <AcademicSection />
      <LearningSection />
      <GoalsSection />
      <CTA />
      <Footer />
    </>
  );
}

function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <span className="tag mb-6 inline-block">About Me</span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h1 className="font-syne font-bold text-text-light text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            Hi, I&apos;m <span className="text-accent">Kavindu</span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="font-dm text-muted text-base md:text-xl mt-6 max-w-3xl leading-relaxed">
            I&apos;m a Computer Networks student at{" "}
            <span className="text-text-light">NSBM Green University</span> and
            a BIT External undergraduate at the{" "}
            <span className="text-text-light">University of Moratuwa</span>. My
            career direction is cybersecurity analysis and network engineering,
            supported by practical skills in systems, cloud, and secure
            full-stack development.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-3">
            <Reveal direction="up">
              <span className="tag tag-accent">Who I Am</span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="mt-6 relative border border-border rounded-sm overflow-hidden bg-border/20">
                <Image
                  src="/images/kavindu-about.jpg"
                  alt="Kavindu Kavisara"
                  width={720}
                  height={960}
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 100vw"
                  className="object-cover w-full h-auto"
                />
                <div
                  className="absolute top-3 right-3 w-6 h-6 border-t border-r opacity-40"
                  style={{ borderColor: "var(--accent)" }}
                />
                <div
                  className="absolute bottom-3 left-3 w-6 h-6 border-b border-l opacity-40"
                  style={{ borderColor: "var(--accent)" }}
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                A networking and cybersecurity student building{" "}
                <span className="text-accent">practical technical skills.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal direction="up" delay={0.15}>
                <p className="font-dm text-muted text-base md:text-lg leading-relaxed">
                  My main interest is understanding how networks, systems, and
                  security controls work in real environments. I enjoy working
                  with topics like TCP/IP, subnetting, firewall rules, Linux
                  systems, network monitoring, and secure system design.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="font-dm text-muted text-base leading-relaxed">
                  I learn best by building and testing. My projects and labs
                  help me connect theory with practice — from pfSense firewall
                  configuration and VoIP setup to full-stack applications with
                  backend APIs, databases, authentication, and real-time
                  communication.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <p className="font-dm text-muted text-base leading-relaxed">
                  Full-stack development is still an important part of my skill
                  set, but my main career goal is to become a{" "}
                  <span className="text-text-light">
                    Cybersecurity Analyst and Network Engineer
                  </span>
                  . I want my portfolio to show both software-building ability
                  and a strong networking/security foundation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AcademicSection() {
  const educationItems = [
    {
      label: "Current",
      period: "2025 — Present",
      title: "Computer Networks Studies",
      institution: "NSBM Green University",
      location: "Sri Lanka",
      description:
        "Studying computer networks with a focus on cybersecurity, network security, systems, and practical technical project work.",
      points: [
        "Computer Networks",
        "Network Security",
        "Systems & Infrastructure",
      ],
    },
    {
      label: "External Degree",
      period: "Before 2025 — Present",
      title: "Bachelor of Information Technology External",
      institution: "University of Moratuwa",
      location: "Sri Lanka",
      description:
        "This ongoing degree began before my NSBM studies and supports my technical foundation in programming, databases, systems, web technologies, and IT fundamentals.",
      points: ["Programming", "Databases", "IT Fundamentals"],
    },
  ];

  const studyFocus = [
    "Computer Networks & TCP/IP",
    "Network Security Fundamentals",
    "Firewall Configuration",
    "Linux & System Administration",
    "Cybersecurity Monitoring Concepts",
    "Database Management",
    "Cloud & Infrastructure Basics",
    "Secure Full-Stack Development",
    "Technical Documentation",
  ];

  return (
    <section className="section-padding light-section overflow-hidden">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-14 md:mb-16">
            <span
              className="tag mb-4 inline-block"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--muted)",
              }}
            >
              Academic Background
            </span>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-syne font-bold text-text-dark text-4xl md:text-5xl leading-tight">
                Education &amp; Studies
              </h2>

              <p className="font-dm text-muted text-base max-w-md leading-relaxed">
                My academic path combines computer networks, cybersecurity,
                systems, programming, and practical project-based learning.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {educationItems.map((item, index) => (
            <Reveal key={item.title} direction="up" delay={index * 0.1}>
              <div className="group relative h-full border border-border-light rounded-sm bg-bg-light overflow-hidden hover:border-text-dark/40 transition-colors duration-300">
                <div className="absolute top-0 left-0 h-1 w-20 bg-text-dark group-hover:w-full group-hover:bg-accent transition-all duration-500" />

                <span className="absolute top-6 right-8 font-syne font-bold text-7xl text-text-dark/[0.04] group-hover:text-accent/20 transition-colors duration-300">
                  0{index + 1}
                </span>

                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6 mb-8">
                    <span
                      className="tag text-xs"
                      style={{
                        borderColor: "var(--border-light)",
                        color: "var(--muted)",
                      }}
                    >
                      {item.label}
                    </span>

                    <span className="font-dm text-muted text-xs whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-syne font-bold text-text-dark text-2xl md:text-3xl leading-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="font-dm text-text-dark/75 text-base mb-1">
                    {item.institution}
                  </p>

                  <p className="font-dm text-muted text-sm mb-6">
                    {item.location}
                  </p>

                  <div className="pt-6 border-t border-border-light">
                    <p className="font-dm text-text-dark/70 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <span
                          key={point}
                          className="px-3 py-1.5 rounded-full border border-border-light bg-white text-text-dark/75 font-dm text-xs"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div className="relative border border-border rounded-sm bg-bg-dark overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
                  linear-gradient(to right, var(--accent) 1px, transparent 1px)`,
                backgroundSize: "64px 64px",
              }}
            />

            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                <div>
                  <span className="tag tag-accent mb-4 inline-block">
                    Study Focus
                  </span>

                  <h3 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight">
                    What I&apos;m Building Toward
                  </h3>
                </div>

                <p className="font-dm text-muted text-sm max-w-md leading-relaxed">
                  These are the main areas I am developing for my cybersecurity
                  analyst and network engineering career path.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {studyFocus.map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 p-4 border border-border rounded-sm bg-border/20 hover:border-accent/40 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform duration-300" />

                    <span className="font-dm text-text-light/80 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LearningSection() {
  const milestones = [
    {
      year: "Before 2025",
      title: "Started BIT External Studies",
      description:
        "Began the ongoing BIT External degree at the University of Moratuwa before starting at NSBM, building a foundation in programming, databases, systems, and IT fundamentals.",
    },
    {
      year: "2024",
      title: "Built Web Development Foundations",
      description:
        "Practiced HTML, CSS, JavaScript, React, and Tailwind CSS through personal and academic projects. This helped me understand how applications are built from the user interface to the backend.",
    },
    {
      year: "2025",
      title: "Started Computer Networks Studies at NSBM",
      description:
        "Began studying Computer Networks at NSBM Green University, with growing emphasis on networking, cybersecurity, systems, and infrastructure.",
    },
    {
      year: "2025",
      title: "Explored Backend and Database Systems",
      description:
        "Worked with Java, Spring Boot, MySQL, REST APIs, and academic full-stack project work. This improved my understanding of application structure, backend logic, and database-backed systems.",
    },
    {
      year: "2026",
      title: "Focused More on Networking and Security Labs",
      description:
        "Started positioning my portfolio around cybersecurity and network engineering through projects such as pfSense firewall labs, FreeBSD and Asterisk VoIP configuration, and network/security-focused documentation.",
    },
    {
      year: "2026",
      title: "Improving Portfolio and GitHub Professionally",
      description:
        "Currently improving this portfolio and my GitHub presence to better reflect my career direction as an aspiring Cybersecurity Analyst and Network Engineer.",
    },
  ];

  return (
    <section className="section-padding bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-14">
            <span className="tag mb-4 inline-block">Timeline</span>

            <h2 className="font-syne font-bold text-text-light text-4xl md:text-5xl leading-tight">
              My Learning Journey
            </h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col gap-0 ml-4 md:ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {milestones.map((milestone, i) => (
            <Reveal
              key={milestone.title}
              direction="up"
              delay={i * 0.08}
              className="pl-8 pb-10 relative"
            >
              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />

              <span className="font-dm text-accent text-xs font-medium tracking-widest uppercase mb-2 block">
                {milestone.year}
              </span>

              <h3 className="font-syne font-bold text-text-light text-xl mb-3">
                {milestone.title}
              </h3>

              <p className="font-dm text-muted text-sm leading-relaxed max-w-xl">
                {milestone.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal direction="up">
              <span className="tag tag-accent mb-6 inline-block">
                My Approach
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight mb-8">
                How I Learn &amp; Build
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Start with fundamentals",
                  body: "I try to understand the core concept first — whether it is subnetting, firewall rules, API flow, authentication, or database design. A strong foundation makes troubleshooting easier.",
                },
                {
                  title: "Practice in labs and projects",
                  body: "I learn best by setting things up, testing them, breaking them, and fixing them. Practical labs help me understand how real systems behave beyond theory.",
                },
                {
                  title: "Document the process",
                  body: "I want my portfolio and GitHub to show not only finished outputs, but also the thinking behind the work — configuration steps, decisions, issues, and solutions.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} direction="up" delay={0.1 + i * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-syne font-bold text-text-light text-base mb-1">
                        {item.title}
                      </h3>

                      <p className="font-dm text-muted text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal direction="up" delay={0.15}>
              <span className="tag tag-accent mb-6 inline-block">
                Career Goals
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight mb-8">
                Where I&apos;m Headed
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="font-dm text-muted text-base leading-relaxed mb-6">
                My main goal is to become a{" "}
                <span className="text-text-light">
                  Cybersecurity Analyst and Network Engineer
                </span>
                . I am especially interested in network security, monitoring,
                firewall configuration, system administration, cloud
                infrastructure, and defensive cybersecurity.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="font-dm text-muted text-base leading-relaxed mb-8">
                I also use full-stack development as a supporting skill because
                many modern security and networking tools depend on dashboards,
                APIs, databases, automation, and clear user interfaces.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <div className="flex flex-col gap-3">
                {[
                  "Build stronger cybersecurity and networking lab projects",
                  "Improve Linux, firewall, IDS, and packet analysis skills",
                  "Document practical labs clearly on GitHub",
                  "Strengthen cloud and infrastructure fundamentals",
                  "Prepare for cybersecurity analyst and network engineering opportunities",
                ].map((goal) => (
                  <div key={goal} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />

                    <span className="font-dm text-muted text-sm">{goal}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
