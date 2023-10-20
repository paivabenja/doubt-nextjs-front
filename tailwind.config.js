/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'doubt-green': '#0b3a00',
        'doubt-green-light': '#a4b59f',
        'doubt-green-lighter': '#e2ebdf',
      }
    },
  },
  plugins: [],
}
