/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'xl': '1440px'
      },
      colors: {
        'pinky': 'hsl(322, 100%, 66%)',
        'veryPaleCyan': 'hsl(193, 100%, 96%)',
        'veryDarkCyan': 'hsl(192, 100%, 9%)',
        'grayishBlue': 'hsl(208, 11%, 55%)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
