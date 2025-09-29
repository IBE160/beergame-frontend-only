import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#005A9C",
          dark: "#003E6B",
          light: "#E6F0F7",
        },
        secondary: {
          DEFAULT: "#6C757D",
          light: "#F8F9FA",
          pale: "#DEE2E6",
        },
        accent: {
          primary: "#FFBF00",
          secondary: "#E6A200",
        },
        semantic: {
          success: "#28A745",
          warning: "#FFC107",
          error: "#DC3545",
          info: "#17A2B8",
        },
        neutral: {
          "50": "#F8F9FA",
          "100": "#F1F3F5",
          "200": "#E9ECEF",
          "300": "#DEE2E6",
          "400": "#CED4DA",
          "500": "#ADB5BD",
          "600": "#6C757D",
          "700": "#495057",
          "800": "#343A40",
          "900": "#212529",
        },
      },
      fontFamily: {
        primary: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        monospace: "'JetBrains Mono', Consolas, monospace",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        h1: "2.5rem",
        h2: "2rem",
        h3: "1.75rem",
        h4: "1.25rem",
        h5: "1rem",
        body_large: "1.125rem",
        body: "1rem",
        body_small: "0.875rem",
        caption: "0.75rem",
        label: "0.875rem",
        code: "0.9rem",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      animationDuration: {
        micro: "150ms",
        short: "250ms",
        medium: "400ms",
        long: "600ms",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
