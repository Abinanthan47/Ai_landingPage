/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kanit":[ "Kanit", 'sans-serif']
      },
      colors: {
        'primary': '#a3e635',
        'gradient' : 'bg-gradient-to-b from-blue-500 to-blue-600 '
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

