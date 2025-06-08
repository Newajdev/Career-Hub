/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        subtite: '#757575',
        Start: '#7E90FE',
        End: '#9873FF'
      }
    },
  },
  plugins: [],
}