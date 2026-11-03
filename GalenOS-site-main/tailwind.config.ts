import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Segoe UI"',
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Scala tipografica definita nel Design System
        "display": ["32px", { lineHeight: "1.25", fontWeight: "700" }],
        "heading-1": ["32px", { lineHeight: "1.25", fontWeight: "700" }],
        "heading-2": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-3": ["20px", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-sm": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        // Griglia a modulo 8px
        "1": "4px",
        "2": "8px",
        "4": "16px",
        "6": "24px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
      },
      borderRadius: {
        // Border radius definito nel Design System
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "xl": "16px",
        "full": "50px",
      },
      colors: {
        // Verde Flet / Farmaceutico moderno
        brand: {
          50: "var(--brand-50, #f0fdf4)",
          100: "var(--brand-100, #dcfce7)",
          200: "var(--brand-200, #bbf7d0)",
          300: "var(--brand-300, #86efac)",
          400: "var(--brand-400, #4ade80)",
          500: "var(--brand-500, #108a64)",
          600: "var(--brand-600, #0e7052)", // Primario Flet
          700: "var(--brand-700, #0a533d)",
          800: "var(--brand-800, #083e2e)",
          900: "var(--brand-900, #063325)",
        },
        surface: {
          page: "var(--bg-page, #f8fafc)",
          card: "var(--bg-surface, #ffffff)",
          subtle: "var(--bg-surface-subtle, #f1f5f9)",
        },
        content: {
          primary: "var(--text-primary, #0f172a)",
          secondary: "var(--text-secondary, #475569)",
          muted: "var(--text-muted, #64748b)",
        },
        border: {
          subtle: "var(--border-subtle, #e2e8f0)",
          strong: "var(--border-strong, #cbd5e1)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
