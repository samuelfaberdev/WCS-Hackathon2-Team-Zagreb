/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
      },
    },
    colors: {
      primary: "#202020",
      secondary: "#FFFFFF",
      tertiary: "#e4c467",
    },
  },
  plugins: [],
};
