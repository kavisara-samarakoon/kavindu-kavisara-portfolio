// src/app/about/page.jsx
// About page — full personal introduction, background, skills, and career goals
// Mix of Server Component wrapper + Client components for animations

import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";

export const metadata = {
  title: "About",
  description:
    "Learn about Kavindu Kavisara — a Computer Networking student and self-taught web developer from Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <AboutHero />

      {/* Personal intro section */}
      <IntroSection />

      {/* Academic background */}
      <AcademicSection />

      {/* Learning journey */}
      <LearningSection />

      {/* Skills & tools */}
      <Skills />

      {/* Career goals + approach */}
      <GoalsSection />

      {/* Contact CTA */}
      <CTA light />

      {/* Footer */}
      <Footer />
    </>
  );
}

// ----------------------------------------------------------------
// About page hero header
// ----------------------------------------------------------------
function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg-dark">
      <div className="container-custom">
        <Reveal direction="up">
          <span className="tag mb-6 inline-block">About Me</span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h1 className="font-syne font-bold text-text-light text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-accent">Kavindu</span>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="font-dm text-muted text-base md:text-xl mt-6 max-w-2xl leading-relaxed">
            A second-year Computer Networking student who got obsessed with
            building things on the web. I&apos;m based in Sri Lanka, studying
            at NSBM Green University, and working on becoming a well-rounded
            developer who understands both the network layer and the UI layer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Personal Introduction section
// ----------------------------------------------------------------
function IntroSection() {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Section label */}
          <div className="lg:col-span-3">
            <Reveal direction="up">
              <span className="tag tag-accent">Who I Am</span>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                A developer who builds things with{" "}
                <span className="text-accent">purpose</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal direction="up" delay={0.15}>
                <p className="font-dm text-muted text-base md:text-lg leading-relaxed">
                  I started getting into web development out of curiosity — I
                  wanted to understand how the web actually works beyond just
                  the network protocols we study in class. That curiosity turned
                  into a genuine passion for building clean, functional user
                  interfaces.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="font-dm text-muted text-base leading-relaxed">
                  My approach is practical. I learn best by building real
                  things, breaking them, and figuring out why. Every project in
                  my portfolio started as a problem I genuinely wanted to solve,
                  or a skill I needed to practice. I don&apos;t just follow
                  tutorials — I try to build things from scratch and make
                  mistakes I can actually learn from.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.25}>
                <p className="font-dm text-muted text-base leading-relaxed">
                  Outside of code, I&apos;m deeply interested in how networks
                  and systems work — topics like network security, TCP/IP
                  protocols, and how data travels across the internet. I think
                  having that foundational knowledge makes me a better web
                  developer, not just a better networking student.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Academic Background section
// ----------------------------------------------------------------
function AcademicSection() {
  return (
    <section className="section-padding light-section">
      <div className="container-custom">
        <Reveal direction="up">
          <div className="mb-14">
            <span
              className="tag mb-4 inline-block"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--muted)",
              }}
            >
              Academic Background
            </span>
            <h2 className="font-syne font-bold text-text-dark text-4xl md:text-5xl leading-tight">
              Education &amp; Studies
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Current education */}
          <Reveal direction="up" delay={0.1}>
            <div className="p-8 border border-border-light rounded-sm bg-white/40">
              <div className="flex items-start justify-between mb-4">
                <span
                  className="tag text-xs"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--muted)",
                  }}
                >
                  Current
                </span>
                <span className="font-dm text-muted text-xs">2023 — Present</span>
              </div>
              <h3 className="font-syne font-bold text-text-dark text-xl mb-2">
                Bachelor of Science in Computer Networking
              </h3>
              <p className="font-dm text-muted text-sm mb-1">
                NSBM Green University
              </p>
              <p className="font-dm text-muted text-xs">Sri Lanka</p>
              <div className="mt-4 pt-4 border-t border-border-light">
                <p className="font-dm text-text-dark/70 text-sm leading-relaxed">
                  Currently in my second year, second semester. Core modules
                  include Computer Networks, Network Security, Data
                  Communications, and Operating Systems.
                </p>
              </div>
            </div>
          </Reveal>

          {/* What I study */}
          <Reveal direction="up" delay={0.15}>
            <div className="p-8 border border-border-light rounded-sm bg-white/40">
              <span
                className="tag text-xs mb-4 inline-block"
                style={{
                  borderColor: "var(--border-light)",
                  color: "var(--muted)",
                }}
              >
                Focus Areas
              </span>
              <h3 className="font-syne font-bold text-text-dark text-xl mb-4">
                What I&apos;m Studying
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Computer Networks & Protocols",
                  "Network Security Fundamentals",
                  "Web Development (self-taught, parallel to degree)",
                  "Data Structures & Algorithms",
                  "Operating Systems",
                  "Database Management",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-dm text-sm text-text-dark/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-text-dark/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Learning Journey section
// ----------------------------------------------------------------
function LearningSection() {
  const milestones = [
    {
      year: "2023",
      title: "Started University",
      description:
        "Began my Computer Networking degree at NSBM. Got my first proper introduction to TCP/IP, networking concepts, and programming fundamentals.",
    },
    {
      year: "2023",
      title: "First Web Projects",
      description:
        "Started teaching myself HTML, CSS, and JavaScript outside of class. Built my first restaurant website — messy code, but it worked and I was proud of it.",
    },
    {
      year: "2024",
      title: "React & Modern JS",
      description:
        "Jumped into React and immediately understood why everyone loves it. Component-based thinking changed how I approach building UIs. Started using Tailwind CSS too.",
    },
    {
      year: "2024",
      title: "Full-Stack Exploration",
      description:
        "Built my Student Management System using Java and Spring Boot for the backend. Connected it all with a REST API — my most complex project to date.",
    },
    {
      year: "2024",
      title: "Next.js & This Portfolio",
      description:
        "Discovered Next.js and got into server-side rendering, routing, and performance optimization. Built this portfolio as a way to tie everything together.",
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

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 ml-4 md:ml-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {milestones.map((milestone, i) => (
            <Reveal key={i} direction="up" delay={i * 0.08} className="pl-8 pb-10 relative">
              {/* Timeline dot */}
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

// ----------------------------------------------------------------
// Career Goals section
// ----------------------------------------------------------------
function GoalsSection() {
  return (
    <section className="section-padding bg-bg-dark border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Approach */}
          <div>
            <Reveal direction="up">
              <span className="tag tag-accent mb-6 inline-block">My Approach</span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight mb-8">
                How I Build
              </h2>
            </Reveal>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Start Simple",
                  body: "I always start with the simplest version that works. Then I iterate. Over-engineering at the start is how projects never get finished.",
                },
                {
                  title: "Think in Layers",
                  body: "My networking background helps me think about full-stack systems as interconnected layers — data at the bottom, presentation at the top, and lots happening in between.",
                },
                {
                  title: "Clean Code Matters",
                  body: "If I come back to my own code 3 months later and can't read it, it's not good code. I try to write things I'd be comfortable showing to someone else.",
                },
              ].map((item, i) => (
                <Reveal key={i} direction="up" delay={0.1 + i * 0.08}>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent text-xs font-bold">{i + 1}</span>
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

          {/* Right: Career goals */}
          <div>
            <Reveal direction="up" delay={0.15}>
              <span className="tag tag-accent mb-6 inline-block">Career Goals</span>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <h2 className="font-syne font-bold text-text-light text-3xl md:text-4xl leading-tight mb-8">
                Where I&apos;m Headed
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.25}>
              <p className="font-dm text-muted text-base leading-relaxed mb-6">
                My goal is to work as a full-stack web developer or in a role
                that bridges web development with network/security concepts.
                I&apos;m genuinely interested in how modern web applications
                handle security, API design, and infrastructure.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <p className="font-dm text-muted text-base leading-relaxed mb-8">
                In the near term, I&apos;m actively looking for internship
                opportunities where I can work alongside experienced developers,
                contribute to real projects, and grow much faster than I can on
                my own. I&apos;m open to freelance work too, especially building
                websites for small businesses or startups.
              </p>
            </Reveal>

            {/* Goals list */}
            <Reveal direction="up" delay={0.35}>
              <div className="flex flex-col gap-3">
                {[
                  "Land a software development internship",
                  "Build 2–3 more production-ready projects",
                  "Get comfortable with cloud platforms (AWS / GCP)",
                  "Contribute to an open-source project",
                  "Graduate and work on impactful tech products",
                ].map((goal, i) => (
                  <div key={i} className="flex items-center gap-3">
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
