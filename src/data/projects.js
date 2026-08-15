// src/data/projects.js
// Central data store for all portfolio projects
// Keeping data here (not in components) makes it easy to add/edit projects later

export const projects = [
  {
    id: 1,
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    type: "Web Design & Frontend Development",
    year: "2024",
    shortDescription:
      "A premium animated personal portfolio website built with Next.js, GSAP, and Framer Motion.",
    overview:
      "This is the very website you're looking at right now. I built it from scratch as a personal project to showcase my web development skills and give potential employers or clients a sense of how I work. The goal was to create something that felt both polished and personal — not just a generic template, but a site that represents who I am as a developer.",
    challenge:
      "The biggest challenge was finding the right balance between impressive animations and performance. It's easy to over-animate and make things feel heavy. I had to be intentional about which animations actually add value and which ones are just noise. Getting GSAP ScrollTrigger and Lenis smooth scroll to work together smoothly in Next.js App Router also required some research.",
    myRole:
      "I handled everything — design direction, frontend development, animations, responsive layout, and deployment. This was a solo project.",
    tech: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis", "Vercel"],
    features: [
      "Smooth Lenis scroll experience",
      "GSAP ScrollTrigger reveal animations",
      "Framer Motion page transitions",
      "Fully responsive across all screen sizes",
      "Dynamic project detail pages",
      "SEO metadata with Next.js",
      "Mobile-friendly navigation",
    ],
    result:
      "The project pushed me to get comfortable with advanced animation libraries in a React/Next.js environment. It also gave me a real appreciation for how much small design details — spacing, typography, micro-interactions — affect the overall feel of a product.",
    featured: true,
  },
  {
    id: 2,
    slug: "network-security-dashboard",
    title: "Network Security Dashboard",
    type: "UI Design / Cybersecurity Concept",
    year: "2024",
    shortDescription:
      "A dashboard UI concept for monitoring network security alerts, traffic patterns, and system health.",
    overview:
      "This project started as a concept for one of my networking assignments. I wanted to explore what a real-world network security monitoring tool might look like from the front-end side. The dashboard shows real-time-style network traffic, active alerts, connected devices, and system health metrics.",
    challenge:
      "Designing for data-heavy dashboards is tricky. There's a lot of information to display, and you need to make it readable at a glance without overwhelming the user. I also had to think about which data points are actually useful in a security context versus which ones just look impressive on screen.",
    myRole:
      "I designed the UI, created the component structure in React, and implemented the data visualization using CSS and JavaScript. This was a solo conceptual project.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Chart.js (concept)", "CSS Animations"],
    features: [
      "Real-time alert panel with severity levels",
      "Network traffic visualization",
      "Connected devices list",
      "System health status indicators",
      "Responsive dashboard layout",
      "Dark mode optimized design",
    ],
    result:
      "This project helped me connect my networking coursework with practical UI development. Understanding what data security professionals actually need helped me make better design decisions. It's also a good example of applying domain knowledge to frontend work.",
    featured: true,
  },
  {
    id: 3,
    slug: "student-management-system",
    title: "Student Management System",
    type: "Full-Stack Academic Project",
    year: "2024",
    shortDescription:
      "A full-stack system for managing student records, course enrollments, and academic information.",
    overview:
      "This was a semester project for one of my academic modules. The system allows administrators to manage student records, handle course enrollments, track grades, and generate basic reports. It covers the typical CRUD operations you'd find in a real student information system.",
    challenge:
      "Handling the relationships between students, courses, and enrollments in a relational database required careful planning. I also had to think about basic security — making sure only authorized users could access certain data, and validating input to prevent obvious vulnerabilities.",
    myRole:
      "I built the backend REST API with Spring Boot and Java, designed the MySQL database schema, and built the frontend with HTML, CSS, and JavaScript. Full-stack, front to back.",
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "REST API"],
    features: [
      "Student CRUD operations (create, read, update, delete)",
      "Course enrollment management",
      "Grade entry and GPA calculation",
      "Search and filter functionality",
      "Role-based access control",
      "RESTful API with proper HTTP methods",
    ],
    result:
      "This was probably my most technically comprehensive project so far. Building a full-stack application end-to-end gave me a much clearer picture of how frontend and backend communicate, and how important clean API design is for maintainability.",
    featured: false,
  },
  {
    id: 4,
    slug: "restaurant-website",
    title: "Restaurant Website",
    type: "Responsive Website",
    year: "2023",
    shortDescription:
      "A modern restaurant website with an animated menu, photo gallery, and contact/reservation section.",
    overview:
      "One of my earlier projects — I built this as a freelance-style practice project for a fictional restaurant. The goal was to create something visually appealing, fast-loading, and easy to navigate on both desktop and mobile. Real restaurants need websites that look great and convert visitors into customers.",
    challenge:
      "The main challenge was working with a lot of visual content (menu items, food photos, gallery) while keeping the site fast. I had to optimize layout and keep things clean so the food is the hero, not the UI.",
    myRole:
      "Designed and developed the entire website independently, including layout, animations, mobile responsiveness, and the contact form.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    features: [
      "Animated hero section",
      "Interactive menu with category filters",
      "Photo gallery with hover effects",
      "Contact and reservation form",
      "Fully responsive mobile layout",
      "Smooth scroll navigation",
    ],
    result:
      "A good early project that taught me the fundamentals of responsive design and thinking from the customer's perspective. It also showed me how much layout and visual hierarchy matters in real-world client websites.",
    featured: false,
  },
];

// Helper: get a project by its slug
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

// Helper: get all project slugs (used for static generation)
export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

// Helper: get featured projects only
export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
