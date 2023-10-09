/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      primary: "#70A4E9",
      second: "#4172DC",
    },

    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      inter: ["Epilogue", "sans-serif"],
    },
    extend: {
      container: {
        padding: "1rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "1060px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
