module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontSize: {
        "8xl": "14rem",
        "9xl": "18.75rem",
      },
      colors: {
        primary: {
          DEFAULT: "#B3CBE4",
          100: "#E5F4FC",
          200: "#446B80", // text
          300: "#223540", // dark
        },
        secondary: {
          DEFAULT: "#ECC7C1",
          100: "#FDF6EF",
          200: "#F3DBD7",
          300: "#d48073",
        },
      },
    },
    fontFamily: {
      balsamiq: ["Balsamiq Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
