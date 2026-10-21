/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#03101f',
        navy: '#052d56',
        blueglow: '#1769aa',
        coral: '#ff765b',
        lilac: '#b66cff'
      },
      fontFamily: { sans: ['Manrope', 'sans-serif'] }
    }
  },
  plugins: []
}