/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'hoverBlue': "#1a73e8",
      'pBlue' : '#1967d2',
      'heading': '#5f6368',
      'googleColor': '#80868b',
    },
  theme: {
    screens: {
      'phone': '400px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1365px',
      // => @media (min-width: 1280px) { ... }
      'monitors': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
