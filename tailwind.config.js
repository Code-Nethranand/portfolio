/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'scroll-mobile': 'scroll-mobile 8s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-mobile': {
          '0%': { transform: 'translateX(0)' },
          '80%': { transform: 'translateX(-66.67%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
  // Add better browser compatibility
  corePlugins: {
    preflight: true,
  },
}