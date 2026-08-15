"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

    const tween = gsap.fromTo(ref.current, fromVars, toVars);

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
