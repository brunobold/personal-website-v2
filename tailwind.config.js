/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',
        '2xl': '1536px',
        '4xl': '1843px',
        '8xl': '2150px',
      },
      backgroundImage: {
        'spotify': "url('../svg/spotify.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
