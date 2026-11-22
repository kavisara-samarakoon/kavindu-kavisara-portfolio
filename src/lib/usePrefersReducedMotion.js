import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange) {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(query).matches;
}

export default function usePrefersReducedMotion() {
  // Match the server markup during hydration. CSS covers the first paint.
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
