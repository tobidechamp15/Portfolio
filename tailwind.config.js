/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          bg: "#0b0d14",
          deep: "#07080d",
          card: "#11141c",
          raised: "#1a1e28",
          text: "#eef0f5",
          text2: "#a3a9b8",
          muted: "#7a8296",
        },
        accent: "#4FC3F7",
      },
    },
    screens: {
      xs: { max: "639px" },
      xsm: { max: "767px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
