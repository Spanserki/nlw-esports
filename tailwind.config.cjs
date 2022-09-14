/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/fundo.png')"
      }
    },
  },
  plugins: [],
}
