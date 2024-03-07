/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'satoshi': ['Satoshi', 'Inter', 'sans-serif',],
    },
    extend: {
      colors: {
        'davy-gray': '#585858',
        'eerie-black': '#1E1E1E',
      },
      backgroundSize: {
        'full': '100%',
      },
    },
  },
  plugins: [],
}

