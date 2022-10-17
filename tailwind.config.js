/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    backgroundImage:{
      'bg-1': "url(../public/images/background2.png)",
      'bg-2': "url(../public/images/background3.png)",
      'bg-3': "url(../public/images/background.jfif)"
    },
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
      'white': '#ffffff',
      'slate-900': '#0f172a',
      'black': '#000000',
      'green': '#328726',
      'gold': '#D6A419',
      'gradient-from-main': '#071E3D',
      'gradient-via-blue' : '#32918C',
      'gradient-to-lightBlue': '#DCF6F4',
      'highlighter': '#0095FA',
      'linkHighlight': '#EEE8A9',
      'linkActiveHighlight': '#EBFDFE',
      'name1': '#0eeb8f',
      'name2': '#00e5ff'
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio')
  ],
}
