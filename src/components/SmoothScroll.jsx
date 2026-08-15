// src/components/SmoothScroll.jsx
// Lenis smooth scroll wrapper — wraps the entire app
// This gives the site that silky premium scroll feel
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis with smooth scroll settings
    const lenis = new Lenis({
      duration: 1.2,          // How long the scroll animation takes (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease out
      direction: "vertical",
      smooth: true,
      smoothTouch: false,     // Disable on touch devices for native feel
      touchMultiplier: 2,
    });

    // The RAF (requestAnimationFrame) loop keeps Lenis running
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
