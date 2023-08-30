/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gun-metal': '#283141',
        'gold-metallic': '#D9B861',
        'persian-green': '#01A78F',
        'blue-munsell': '#3487A3',
        'tea-rose-red': '#DDAFB3',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        josefin: ['Josefin Sans', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
