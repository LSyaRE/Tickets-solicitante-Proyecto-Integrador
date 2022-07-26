/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0D1D61",
        
"secondary": "#828DF8",
        
"accent": "#F471B5",
        
"neutral": "#1D283A",
        
"base-100": "#ffff",
        
"info": "#0CA6E9",
        
"success": "#2BD4BD",
        
"warning": "#F4C152",
        
"error": "#FB6F84",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
