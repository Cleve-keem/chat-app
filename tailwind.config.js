/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx, js, ts, tsx}"],
  theme: {
    extend: {
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
      },
      backdropFilter: {
        
      }
    },
  },
  plugins: [],
}