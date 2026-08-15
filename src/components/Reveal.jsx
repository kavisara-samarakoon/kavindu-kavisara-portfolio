// src/components/Reveal.jsx
// GSAP ScrollTrigger scroll-reveal wrapper
// Wrap any element in <Reveal> to make it animate in when scrolled into view
// Supports: fade-up, fade-in, slide-left, slide-right
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP ScrollTrigger plugin (required before using it)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reveal Props:
 * @param {ReactNode} children    — Content to animate
 * @param {string} direction      — "up" | "down" | "left" | "right" (default: "up")
 * @param {number} distance       — How far to move before revealing (px, default: 40)
 * @param {number} duration       — Animation duration in seconds (default: 0.9)
 * @param {number} delay          — Delay before animation starts (seconds, default: 0)
 * @param {string} className      — Extra CSS classes for the wrapper div
 */
export default function Reveal({
  children,
  direction = "up",
  distance = 40,
  duration = 0.9,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Determine initial transform based on direction
    const fromVars = { opacity: 0 };
    if (direction === "up") fromVars.y = distance;
    if (direction === "down") fromVars.y = -distance;
    if (direction === "left") fromVars.x = distance;
    if (direction === "right") fromVars.x = -distance;

    const toVars = {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",   // Trigger when element is 88% from top of viewport
        toggleActions: "play none none none",
      },
    };

    // Create the GSAP tween
    const tween = gsap.fromTo(ref.current, fromVars, toVars);

    // Cleanup: kill the tween and ScrollTrigger on unmount
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [direction, distance, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
