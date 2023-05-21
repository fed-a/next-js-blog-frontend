const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1rem',
        lg: '3rem',
        xl: '3rem',
        xxl: '3rem',
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
    boxShadow: {
      sm: '0px -0.25px 1px 0.75px rgba(255, 255, 255, 0.25), 0px 8px 20px rgba(0, 0, 0, 0.23), 0px 2px 9px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.09)',
      md: '0px -0.5px 1px 1.5px rgba(255, 255, 255, 0.25), 0px 16px 80px rgba(0, 0, 0, 0.23), 0px 4px 18px rgba(0, 0, 0, 0.14), 0px 1px 6px rgba(0, 0, 0, 0.09)',
    },
    extend: {},
  },
  plugins: [],
};
