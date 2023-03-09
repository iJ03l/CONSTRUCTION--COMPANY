/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
    themes: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      monserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
