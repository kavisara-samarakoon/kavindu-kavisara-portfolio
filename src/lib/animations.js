export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};


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


export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
