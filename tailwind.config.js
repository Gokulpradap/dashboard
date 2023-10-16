/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    {
      relative: true,
    },
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple" : "#081A51",
        "light-white": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}