/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      sm: "850px",
      md: "1060px",
      lg: "1200px",
    },
  },
  plugins: [],
};
