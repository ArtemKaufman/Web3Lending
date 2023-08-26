/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'medium': ['SharpGroteskMedium20', 'sans'], // Вказуйте назву шрифту і замініть 'SharpGroteskMedium20' на фактичну назву
        'sm-bold': ['SharpGroteskSmBold20', 'sans'], // Додайте таке саме для другого шрифту
      },
    },
  },
  plugins: [],
};
