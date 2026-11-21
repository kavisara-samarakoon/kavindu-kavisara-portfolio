import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createMotionContext } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useScrollEntrance(enabled = true) {
  const scope = useRef(null);

  useEffect(() => {
    if (!enabled || !scope.current) return;

    const groups = scope.current.querySelectorAll("[data-scroll-entrance]");
    const entered = new WeakSet();

    return createMotionContext(scope, () => {
      const context = gsap.context();

      groups.forEach((group) => {
        // Keep restored or already visible content in its resting state.
        if (entered.has(group) || group.getBoundingClientRect().top < window.innerHeight) {
          return;
        }

        const items = group.querySelectorAll("[data-scroll-entrance-item]");
        ScrollTrigger.create({
          trigger: group,
          start: "top bottom",
          once: true,
          onEnter: () => context.add(() => {
            entered.add(group);
            gsap.fromTo(
              items.length ? items : group,
              { opacity: 0.78, y: 12 },
              {
                opacity: 1,
                y: 0,
                duration: 0.42,
                ease: "power3.out",
                stagger: 0.055,
                delay: Number(group.dataset.scrollEntranceDelay ?? 0),
                clearProps: "opacity,transform",
              }
            );
          }),
        });
      });
    }, () => {
      // Reverting the previous context restores the visible, untransformed markup.
    });
  }, [enabled]);

  return scope;
}
