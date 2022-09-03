/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'mainColor': '#071e3d',
      'mainAccent': '#205091',
      'blueAccent1': '#006186',
      'blueAccent2': '#00ADB8',
      'blueAlternate1': '#86b6fc',
      'whiteAlternate': '#F7F9FF',
      'sandAlternate': '#F1F1E6',
      'white': '#ffffff'
    },
  },
  plugins: [],
}
