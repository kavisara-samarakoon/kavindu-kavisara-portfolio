"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // How long the scroll animation takes (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease out
      direction: "vertical",
      smooth: true,
      smoothTouch: false,     // Disable on touch devices for native feel
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
