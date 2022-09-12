/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
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
