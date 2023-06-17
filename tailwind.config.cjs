/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      dropShadow: {
        primary: ' 4px 4px 20px rgba(92, 92, 92, 0.1)',
      },
    },
  },
  plugins: [],
}
