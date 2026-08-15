"use client";

import { motion } from "framer-motion";

const visualConfigs = {
  "personal-portfolio": {
    gradient: "from-accent/20 via-accent/5 to-transparent",
    accentColor: "#D8FF3E",
    lines: true,
    dots: false,
    label: "Portfolio",
  },
  "network-security-dashboard": {
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    lines: false,
    dots: true,
    label: "Security",
  },
  "student-management-system": {
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "#8b5cf6",
    lines: true,
    dots: true,
    label: "System",
  },
  "restaurant-website": {
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "#f97316",
    lines: false,
    dots: false,
    label: "Website",
  },
};

const defaultConfig = {
  gradient: "from-accent/20 via-accent/5 to-transparent",
  accentColor: "#D8FF3E",
  lines: true,
  dots: false,
  label: "Project",
};

export default function ProjectVisual({ slug, className = "", animated = true }) {
  const config = visualConfigs[slug] || defaultConfig;

  return (
    <motion.div
      className={`relative overflow-hidden bg-border rounded-sm ${className}`}
      whileHover={animated ? { scale: 1.02 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />

      {config.lines && (
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`grid-${slug}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke={config.accentColor}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
        </svg>
      )}

      {config.dots && (
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`dots-${slug}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill={config.accentColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${slug})`} />
        </svg>
      )}

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ filter: `drop-shadow(0 0 40px ${config.accentColor}40)` }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center border"
          style={{
            borderColor: `${config.accentColor}40`,
            backgroundColor: `${config.accentColor}10`,
          }}
        >
          <span
            className="font-syne font-bold text-xs tracking-widest uppercase"
            style={{ color: config.accentColor }}
          >
            {config.label}
          </span>
        </div>
      </div>

      <div
        className="absolute top-4 right-4 w-12 h-12 border-t border-r opacity-30"
        style={{ borderColor: config.accentColor }}
      />
      <div
        className="absolute bottom-4 left-4 w-12 h-12 border-b border-l opacity-30"
        style={{ borderColor: config.accentColor }}
      />
    </motion.div>
  );
}
