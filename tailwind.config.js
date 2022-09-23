/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary':'#18191A',
        'secondary': '#242526',
        'blue':'#2374E1',
        'typography':'#2F3031',
        'fade':'#3A3B3C'
      }
    },
  },
  plugins: [],
}