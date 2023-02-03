/** @type {import('tailwindcss').Config} */
module.exports = {
  dark: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'custom': ['montserrat', 'Montserrat', 'sans-serif'],
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}