"use client";

import { useEffect, useLayoutEffect, ViewTransition } from "react";
import { usePathname } from "next/navigation";

function restoreViewportCapture() {
  document.documentElement.style.viewTransitionName = "root";
  document.querySelector("[data-site-header]")?.style.removeProperty("view-transition-name");
}

export default function RouteTransition() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const viewport = document.documentElement;

    // The outgoing snapshots are already captured. Keep the incoming page and
    // header live so another navigation can still reach their links.
    if (CSS.supports("selector(:active-view-transition)") && viewport.matches(":active-view-transition")) {
      viewport.style.viewTransitionName = "none";
      document.querySelector("[data-site-header]")?.style.setProperty("view-transition-name", "none");
    }
  }, [pathname]);

  // Also restore on commits for which the browser skips the animation.
  useEffect(() => {
    if (document.documentElement.style.viewTransitionName === "none") {
      restoreViewportCapture();
    }
  }, [pathname]);

  return (
    <ViewTransition default="none" update="portfolio-route-marker" onUpdate={restoreViewportCapture}>
      <span aria-hidden="true" className="portfolio-route-marker" data-pathname={pathname} />
    </ViewTransition>
  );
}
