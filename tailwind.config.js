/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    clipPath: {
      "vertical-hide": `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
      "vertical-show": `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    },
    screens: {
      desktop: "1200px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary": "#FDB836",
        "secondary": "#aaa",
        "app-white": "#ffffff",
        "light-brown": "#4A453F",
        "dark-brown": "#444240",
        "dark-brown-fade": "#444240a8",
        "cream": "#FAF8F0"
      },
      backgroundImage: {
        "wood-pattern": "url('assets/bg_header.jpg')"
      },
      maxWidth: {
        "app-width": "95rem"
      }

    },
  },
  plugins: [require('tailwind-clip-path')],
}
