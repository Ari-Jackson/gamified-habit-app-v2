/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3d3d3d",
        secondary: "#e1e1e1",
      },
    },
  },
  plugins: [],
};
