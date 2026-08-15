// src/data/skills.js
// Skills and tools list for the Skills section

export const skillCategories = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      { name: "Java", level: 70 },
      { name: "Spring Boot", level: 65 },
      { name: "PHP", level: 60 },
      { name: "REST APIs", level: 72 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    id: 3,
    category: "Networking & Security",
    skills: [
      { name: "Computer Networking", level: 70 },
      { name: "Cybersecurity Fundamentals", level: 60 },
      { name: "TCP/IP Protocols", level: 65 },
      { name: "Network Security Concepts", level: 58 },
    ],
  },
  {
    id: 4,
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 78 },
      { name: "VS Code / IntelliJ", level: 85 },
      { name: "Figma (basic)", level: 60 },
      { name: "Vercel", level: 75 },
      { name: "Postman", level: 70 },
    ],
  },
];

// Flat list of all tool/tech tags — for the compact tags display
export const techTags = [
  "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS",
  "Java", "Spring Boot", "PHP", "MySQL", "REST API",
  "GSAP", "Framer Motion", "Git", "GitHub", "Vercel",
  "Figma", "Postman", "Networking", "Cybersecurity",
];
