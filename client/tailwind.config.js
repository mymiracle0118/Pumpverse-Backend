/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
      },
    },
    screens: {
      xs: "375px",
      ss: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    },
  },
  plugins: [],
};
