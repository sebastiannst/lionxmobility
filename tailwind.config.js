/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Build/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary:    "#ef4444",
        secondary:  "#3b82f6",
        success:    "#10b981",
        danger:     "#dc2626",
        warning:    "#f59e0b",
        info:       "#6366f1",
        light:      "#f4f4f5",
        dark:       "#1f2937",

        pastelPink:    "#ffd6e0",
        pastelBlue:    "#dbeafe",
        pastelGreen:   "#d1fae5",
        pastelPurple:  "#ede9fe",

        metalGold:     "#d4af37",
        metalSilver:   "#c0c0c0",
        metalBronze:   "#cd7f32",

        rose: {
          100: "#ffe4e6",
          300: "#fda4af",
          500: "#f43f5e",
          700: "#be123c",
          900: "#881337"
        },
        amber: {
          100: "#fef3c7",
          500: "#f59e0b",
          700: "#b45309"
        }
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 }
        },
        scaleIn: {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" }
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        scaleIn: "scaleIn 0.4s ease-in-out forwards",
        pulse: "pulse 1.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
