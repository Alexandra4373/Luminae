/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    colors: {
      primary: "#70A4E9",
      second: "#4172DC",
      white: "#fff",
      black: "#000",
      gray: "#D1E2EB",
      secondary: "#7296AB",
      mes: "#F7DDD0",
      pinky: "#D11FB5",
      blue: "#0186C4",
      red: "#BF2E3B",
      green: "#1D5159",
    },

    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        xs: "370px",
        sm: "640px",
        md: "1060px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
