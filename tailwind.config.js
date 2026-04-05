/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-deep": "#184734",
        "green-soft": "#2d6a4f",
        gold: "#c99a3b",
        "gold-soft": "#f3e5c5",
        cream: "#faf8f2",
        "text-main": "#1e1b16",
        "text-soft": "#7b7467",
        "border-soft": "#e3ded4",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
