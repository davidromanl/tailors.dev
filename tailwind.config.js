/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        cal: ['"Cal Sans"', 'sans-serif'],
        paris: ['"Parisienne"', 'cursive'],
      },
    },
  },
  content: [
    'components/**/*.{vue,js}',
    'storyblok/**/*.{vue,js}',
    'pages/**/*.vue'
  ],
  
  plugins: [],
}

