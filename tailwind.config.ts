import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["Inter", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // MEP Custom Colors
        "mep-blue": {
          dark: "hsl(var(--mep-blue-dark))",
          deep: "hsl(var(--mep-blue-deep))",
          light: "hsl(var(--mep-blue-light))",
        },
        "mep-orange": {
          DEFAULT: "hsl(var(--mep-orange))",
          hover: "hsl(var(--mep-orange-hover))",
        },
        "mep-gray": {
          DEFAULT: "hsl(var(--mep-gray))",
          light: "hsl(var(--mep-gray-light))",
        },
        // Team Page Colors
        "team-bg": "hsl(var(--team-bg))",
        "team-heading": "hsl(var(--team-heading))",
        "team-subtitle": "hsl(var(--team-subtitle))",
        "team-hero": "hsl(var(--team-hero))",
        "accent-blue": "hsl(var(--accent-blue))",
        // Apple-style neutrals
        ink: {
          DEFAULT: "hsl(var(--ink))",
          deep: "hsl(var(--ink-deep-gray))",
          mid: "hsl(var(--ink-mid-gray))",
          quiet: "hsl(var(--quiet-dot))",
        },
        hairline: "hsl(var(--hairline))",
        "cool-wash": "hsl(var(--cool-wash))",
        canvas: "hsl(var(--canvas))",
        "faded-surface": "hsl(var(--faded-surface))",
        paper: "hsl(var(--paper))",
        // Product finish swatches
        finish: {
          sky: "hsl(var(--finish-sky))",
          citrus: "hsl(var(--finish-citrus))",
          starlight: "hsl(var(--finish-starlight))",
          silver: "hsl(var(--finish-silver))",
          blush: "hsl(var(--finish-blush))",
          indigo: "hsl(var(--finish-indigo))",
          midnight: "hsl(var(--finish-midnight))",
        },
      },

      boxShadow: {
        "team": "0 4px 20px -4px rgba(0, 0, 0, 0.3)",
        "team-hover": "0 20px 40px -8px rgba(0, 0, 0, 0.4), 0 0 30px -5px hsl(40 85% 55% / 0.2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
