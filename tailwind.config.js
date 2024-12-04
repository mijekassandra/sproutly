/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#52b788", // Main green
        mainGreenHover: "#74C69D", // Darker shade for hover
        lightGreen: "#85CEA8", // Light green
        lightGreenHover: "#9ed9b8", // Slightly darker for hover
        darkGreen: "#40916C", // Dark green
        darkGreenHover: "#2D6A4F", // Slightly darker for hover
      },
      height: {
        '128': '34rem',
      }
    },
    fontFamily: {
      openSans: ['"Open Sans"', "sans-serif"], // Default sans-serif font
      montserrat: ['"Montserrat"', "sans-serif"], // Montserrat font
    },
  },
  plugins: [],
};
