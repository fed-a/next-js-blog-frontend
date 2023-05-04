const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1600px',
    },
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      purple: 'var(--purple)',
      'lighter-purple': 'var(--lighter-purple)',
      'darker-gray': 'var(--darker-gray)',
      gray: 'var(--gray)',
    },
    fontSize: {
      xs: '0.75rem',
      s: '0.875rem',
      m: '1rem',
      l: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
    },
    borderRadius: {
      DEFAULT: '0.25rem',
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '1rem',
      xl: '2rem',
      full: '99rem',
    },
    extend: {},
  },
  plugins: [],
};
