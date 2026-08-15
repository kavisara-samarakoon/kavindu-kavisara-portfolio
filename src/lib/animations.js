// src/lib/animations.js
// Shared animation configurations for Framer Motion and GSAP
// Import these in components to keep animation code DRY and consistent

// ----------------------------------------------------------------
// Framer Motion Variants
// Use these as props: variants={fadeUpVariants} initial="hidden" whileInView="visible"
// ----------------------------------------------------------------

// Simple fade + slide up
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in only (no movement)
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide in from left
export const slideLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide in from right
export const slideRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Scale up from slightly smaller
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container variant — triggers children stagger
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// For staggered children
export const staggerChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ----------------------------------------------------------------
// GSAP Default Settings
// Use these in useEffect() hooks with gsap.fromTo() or gsap.to()
// ----------------------------------------------------------------

// Standard scroll reveal — most elements use this
export const gsapScrollReveal = (element, options = {}) => {
  return {
    from: {
      opacity: 0,
      y: options.y ?? 50,
      ...options.from,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 1,
      ease: options.ease ?? "power3.out",
      delay: options.delay ?? 0,
      scrollTrigger: {
        trigger: element,
        start: options.start ?? "top 85%",
        toggleActions: "play none none none",
        ...options.scrollTrigger,
      },
    },
  };
};

// Horizontal line/bar animation (width 0 → 100%)
export const gsapLineReveal = (element, delay = 0) => ({
  from: { scaleX: 0, transformOrigin: "left center" },
  to: {
    scaleX: 1,
    duration: 0.8,
    ease: "power3.out",
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  },
});

// ----------------------------------------------------------------
// Transition presets for page/route transitions
// ----------------------------------------------------------------

// Standard page enter
export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
