/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind where to find class names so unused ones get removed
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette — matches our design system
      colors: {
        "bg-dark": "#080808",
        "bg-light": "#F4F1EA",
        "text-dark": "#111111",
        "text-light": "#F5F5F5",
        muted: "#8A8A8A",
        accent: "#D8FF3E",
        border: "#1A1A1A",
        "border-light": "#E0DDD6",
      },
      // Custom font families loaded via Google Fonts in layout.jsx
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      // Custom screen sizes for fine-grained control
      screens: {
        xs: "480px",
      },
      // Custom keyframe animations
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.5s ease forwards",
        "scale-up": "scaleUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
