/** @type {import('tailwindcss').Config} */
export default {
  // purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        cursive: ['Berkshire Swash', 'cursive'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'arrow': 'arrow-down 1.5s ease infinite',
      },
      keyframes: {
        'arrow-down': {
          '0%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}