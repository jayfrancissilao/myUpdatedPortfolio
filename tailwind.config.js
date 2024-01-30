/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // if we use this font || font-roboto
    fontFamily:{
      'roboto' : "'Roboto', 'sans-serif'"
    },
    extend: {
      colors : {
        'primary' : "#5E3BEE",
        'headingColor' : '#282938',
        'bgShade' : '#F5FCFF',
        'driblle' : '#E62872',
        'body' : '#1C1E53'

      }
    },
  },
  plugins: [],
}

