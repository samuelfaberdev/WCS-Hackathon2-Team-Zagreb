/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
      },
      backgroundImage: {
        main: "url('/assets/background/main.png')",
        connect: "url('/assets/background/connect.png')",
      },
    },
  },
  plugins: [],
};
