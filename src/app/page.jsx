import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kavisara Samarakoon — Cybersecurity & Network Engineering Portfolio",
  description:
    "Portfolio of Kavisara Samarakoon — Computer Networks student focused on cybersecurity, network security, systems, cloud, and secure full-stack development.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Services />

      <SelectedWork />

      <Skills />

      <AboutPreview />

      <CTA />

      <Footer />
    </>
  );
}
