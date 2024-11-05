/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        RobotoFlex: ["Roboto Flex", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        yelloWcolor: "#FCC400",
        blackColor: "#000000",
        greyColor: "#eee",
        whiteColor: "#ffffff",
      },
    },
  },
  plugins: [],
};
