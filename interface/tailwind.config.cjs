const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {},
      fontSize: {},
      fontFamily: {},
      keyframes: {},
    },
  },
  plugins: [],
};
