/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../index.html', './*.{js,jsx}', './**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        hadventuretheme: {
          primary: '#3d3d3d',
          secondary: '#e1e1e1',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
    logs: true,
    darkTheme: 'dark',
  },
};
