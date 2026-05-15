import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        coffee: { 50: "#fdf8f6", 100: "#f2e8e5", 200: "#eaddd7", 300: "#e0cec7", 400: "#d2bab0", 500: "#a07e6a", 600: "#8b6b5a", 700: "#6f4e37", 800: "#4a3426", 900: "#2c1e16", 950: "#1a120e" },
        cream: { 50: "#fefdfb", 100: "#fdf9f3", 200: "#faf3e7", 300: "#f5e9d6", 400: "#eddcc0", 500: "#d4b896", 600: "#b8986e" },
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
      fontFamily: { display: ["var(--font-playfair)", "serif"], body: ["var(--font-lora)", "serif"] },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-in-right": { "0%": { opacity: "0", transform: "translateX(20px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out forwards", "fade-in": "fade-in 0.4s ease-out forwards", "slide-in-right": "slide-in-right 0.5s ease-out forwards" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
