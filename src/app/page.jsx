// src/app/page.jsx
// Homepage — assembles all homepage sections in order
// This is a Server Component (no "use client" needed here)
// Each imported component handles its own client-side interactivity

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Page-level SEO metadata
export const metadata = {
  title: "Kavindu Kavisara — Cybersecurity & Network Engineering Portfolio",
  description:
    "Portfolio of Kavindu Kavisara — Computer Networks student focused on cybersecurity, network security, systems, cloud, and secure full-stack development.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-screen intro */}
      <Hero />

      {/* 2. Services — what I offer */}
      <Services />

      {/* 3. Selected Work — featured 2 projects */}
      <SelectedWork />

      {/* 4. Skills — tools & technologies */}
      <Skills />

      {/* 5. About preview — brief intro with link to full about page */}
      <AboutPreview />

      {/* 6. CTA — contact prompt */}
      <CTA />

      {/* 7. Footer */}
      <Footer />
    </>
  );
}
