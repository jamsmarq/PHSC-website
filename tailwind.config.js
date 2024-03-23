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
      content: {
        'icon': 'url("/icons/hero-add-arrow.png")',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

