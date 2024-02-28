/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FEFEFE",
        primary: "#000000",
        secondary: "#F57A1C",
      },

      fontFamily: {
        heading: "Montserrat",
        content: "Work Sans",
      },
    },
  },
  plugins: [],
};
