/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gowunDodum: ["var(--font-gowunDodum)"],
        electrolize: ["var(--font-electrolize)"],
        iceland: ["var(--font-iceland)"],
        iconsolata: ["var(--font-iconsolata)"],
      }
    },
  },
  plugins: [],
}

