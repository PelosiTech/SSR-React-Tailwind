/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#00704A',    // Green
        'secondary': '#ffffff',  // White
        'dark': '#000000',       // Black
        'light': '#f5f5f5'       // Light grey for backgrounds, if needed
      }      
    },
  },
  plugins: [],
}