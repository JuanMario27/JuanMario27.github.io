/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        darkblue: {
          100: '#2237D1',
          200: '#182691',
          300: '#090F37',
        },
      },
      fontFamily: {
        vietnam_pro: ['Be Vietnam Pro'],
      },
    },
  },
  plugins: [],
};
