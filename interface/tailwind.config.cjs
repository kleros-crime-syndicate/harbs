const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "theme-lightish": "#C61AFF",
        theme: "#AC00E6",
        "theme-darkish": "#8600B3",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
