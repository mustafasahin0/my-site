/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'white' : '#E6E6E6',
        'gray' : '#5F646C',
        'dark-gray': '#1a1e26',
        'dark-blue' : '#12151C',
      },
    },
  },
  plugins: [],
}

