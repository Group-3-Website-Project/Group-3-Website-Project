/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
        sm: '0.5px',
        lg: '2px',
      },
      textStrokeColor: {
        DEFAULT: 'black',
        white: 'white',
        red: 'red',
      },
      colors:{
        "gray-bg":"#EFECEA",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'black',
        },
        '.text-outline-white': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'white',
        },
      });
    },
  ],
};