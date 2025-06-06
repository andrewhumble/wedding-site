import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#58373E", // Default color (light mode)
          dark: "#FFFFFF", // Dark mode variant
        },
        secondary: {
          DEFAULT: "#FAF5F1", // Default color (light mode)
          dark: "#71717A", // Dark mode variant
        },
        tertiary: {
          DEFAULT: "#4b5563", // Default color (light mode)
          dark: "#9ca3af", // Dark mode variant
        },
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;