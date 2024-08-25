/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"], 
  // content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        'darkDes-blue': '#23303E',
        'grayish-blue': '#6C645A'
      },
    },
  },
  plugins: [],
}

