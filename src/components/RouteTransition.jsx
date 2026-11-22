"use client";

import { useEffect, useLayoutEffect, ViewTransition } from "react";
import { usePathname } from "next/navigation";

function restoreViewportCapture() {
  document.documentElement.style.viewTransitionName = "root";
}

export default function RouteTransition() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const viewport = document.documentElement;

    // The outgoing snapshot is already captured. Keep the incoming page live
    // so a second navigation can still reach its links during the fade.
    if (CSS.supports("selector(:active-view-transition)") && viewport.matches(":active-view-transition")) {
      viewport.style.viewTransitionName = "none";
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
