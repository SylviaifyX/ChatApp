/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "font":["Roboto", 'serif']
      },
      height: {
        'calc-messages': 'calc(100% - 116px)',
    },
    },
  },
  plugins: [],
}
