/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vibeflow: {
          green: '#1DB954',
          hover: '#1ED760',
          black: '#121212',
          dark: '#181818',
          card: '#242424',
          text: '#FFFFFF',
          muted: '#B3B3B3',
          lightgray: '#282828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
