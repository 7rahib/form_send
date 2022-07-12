/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bff1fc",

          "secondary": "#5b72c6",

          "accent": "#69c946",

          "neutral": "#2B1C2C",

          "base-100": "#FCFCFD",

          "info": "#86A1E4",

          "success": "#177D47",

          "warning": "#FCB131",

          "error": "#F17476",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
