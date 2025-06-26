/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9ad06',
          100: '#f9ad06',
          200: '#f9ad06',
          300: '#f9ad06',
          400: '#f9ad06',
          500: '#f9ad06',
          600: '#f9ad06',
          700: '#f9ad06',
          800: '#f9ad06',
          900: '#f9ad06',
        },
        secondary: {
          50: '#0b2a3f',
          100: '#0b2a3f',
          200: '#0b2a3f',
          300: '#0b2a3f',
          400: '#0b2a3f',
          500: '#0b2a3f',
          600: '#0b2a3f',
          700: '#0b2a3f',
          800: '#0b2a3f',
          900: '#0b2a3f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}