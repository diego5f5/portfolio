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
        primary: "#7084B2",
        hover: "#4E5E83",
        background: "#f7f7f7",
      },
      gridTemplateColumns: {
        skills: "repeat(auto-fill, minmax(160px, 1fr))",
      },
    },
  },
  plugins: [],
};
