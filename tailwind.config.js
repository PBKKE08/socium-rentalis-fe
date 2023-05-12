/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFDCED",
        "primary-200": "#FF007A",
        "primary-300": "#C90060",
        "primary-400": "#870041",
        "primary-500": "#531F38",
        heading: "#20000F",
        "font-primary-400": "#999CA0",
        "font-primary-300": "#D9D9D9",
        "font-primary-200": "#EBEBEB",
        "font-primary-100": "#F5F5F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1536px",
    },
  },
  plugins: [],
};
