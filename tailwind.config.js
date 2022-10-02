/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#473BF0",
        "secondary": "#161C2D",
        "warning": '#FAE02B',
        "danger": '#FF5252',
        "success": '#28a745'
      }
    },
  },
  plugins: [],
}
