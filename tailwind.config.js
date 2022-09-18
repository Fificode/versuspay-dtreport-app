/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
      },
       keyframes:{
        scale_up_tr:{
          '0%' : { transform: 'scale(0.5)',
        'transform-origin': '100% 0%'},
'100%': {transform: 'scale(1)',
'transform-origin': '100% 0%'},
      }
      },
      animation: {
scale_up_tr: 'scale_up_tr 0.45s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
    },
     screens: {
      'large': { 'raw': '(max-width: 1050px)' },
      'medium': { 'raw': '(max-width: 768px)' },
    'small': { 'raw': '(max-width: 550px)' },
     'smaller': { 'raw': '(min-width: 400px)' },
     'xsmaller': { 'raw': '(min-width: 350px)' },
      
     sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
     colors: {
'blue' : '#3f00ff',
'white' : '#ffffff',
'green': '#32CD32',
'black': '#000000',
'grey' : 'rgba(238, 241, 246, 0.3)',
'gray' : '#808080',
'golden-yellow' : '#ffc000',
    },
  },
  plugins: [],
}
