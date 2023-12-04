/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: true, // Enables all DaisyUI themes
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables Tailwind's dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(43, 45, 66, 0.5)',
        background: '#2b2d42',
        button: '#f8f32b',
        headline: '#ffffff',
        paragraph: '#8d99ae',
        buttonText: '#2b2d42',
        stroke: '#8d99ae',
        main: '#f8f32b',
        highlight: '#f8f32b',
        secondary: '#8d99ae',
        tertiary: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')], // Includes DaisyUI plugin
};
