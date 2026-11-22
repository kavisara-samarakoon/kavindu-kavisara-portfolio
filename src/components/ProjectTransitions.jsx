"use client";

import { useEffect, useRef, useState, useSyncExternalStore, ViewTransition } from "react";
import Link from "next/link";

export function projectTitleType(slug) {
  return `project-title-${slug}`;
}

function createMediaStore(query, serverMatch) {
  function subscribe(onChange) {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }

  return function useMediaMatch() {
    return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => serverMatch);
  };
}

const useDesktopLayout = createMediaStore("(min-width: 768px)", false);
export const useProjectCardRotation = createMediaStore(
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (not (any-pointer: coarse)) and (prefers-reduced-motion: no-preference)",
  true
);

function NamedProjectTitle({ slug, compact, children }) {
  const prefix = compact ? "project-title-compact" : "project-title";
  return (
    <ViewTransition
      name={`${prefix}-${slug}`}
      default="none"
      share={{ [projectTitleType(slug)]: "portfolio-project-title" }}
    >
      {children}
    </ViewTransition>
  );
}

function ResponsiveProjectTitle({ slug, children }) {
  const desktop = useDesktopLayout();
  return <NamedProjectTitle slug={slug} compact={!desktop}>{children}</NamedProjectTitle>;
}

export function ProjectTitleTransition({ slug, layout, children }) {
  // Work mounts both lists, so their titles use separate namespaces.
  if (layout) {
    return <NamedProjectTitle slug={slug} compact={layout === "compact"}>{children}</NamedProjectTitle>;
  }

  return <ResponsiveProjectTitle slug={slug}>{children}</ResponsiveProjectTitle>;
}

export function ProjectPreviewLink({ href, slug, className, children }) {
  const linkRef = useRef(null);
  const [coverReady, setCoverReady] = useState(false);

  useEffect(() => {
    const image = linkRef.current?.querySelector(".portfolio-project-cover-image img");
    if (!image) return;

    let mounted = true;
    function enableCoverTransition() {
      image.decode().then(
        () => { if (mounted) setCoverReady(true); },
        () => {}
      );
    }

    image.addEventListener("load", enableCoverTransition, { once: true });
    if (image.complete && image.naturalWidth > 0) enableCoverTransition();

    return () => {
      mounted = false;
      image.removeEventListener("load", enableCoverTransition);
    };
  }, []);

  return (
    <Link
      ref={linkRef}
      href={href}
      className={className}
      transitionTypes={coverReady ? [projectTitleType(slug), `project-cover-${slug}`] : [projectTitleType(slug)]}
    >
      {children}
    </Link>
  );
}
