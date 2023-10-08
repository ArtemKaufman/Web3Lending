/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mediumStyle': ['SharpGrotesk-Book25', 'sans'], 
        'fontStyle-bold': ['SharpGroteskSmBold20', 'sans'], 
      },
    },
  },
  plugins: [],
};
