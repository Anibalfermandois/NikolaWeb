/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f9ad06",
          44: "#f7ac06",
        },
        orangeNik: "#f76f2b",
        secondary: {
          100: "#0b2a3f",
          80: "#0b2a3f",
        },

        whiteNik: "#e6e6e6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
