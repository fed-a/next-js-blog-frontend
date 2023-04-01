const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1600px',
    },
    colors: {
      black: '#0F101C',
      white: '#F0F0FF',
      purple: '#4200F5',
      'lighter-purple': '#4806FF',
      'darker-gray': '#292E3A',
      gray: '#4C515E',
    },
    extend: {},
  },
  plugins: [],
};
