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
      xl: '1024px',
      xxl: '1400px',
    },
    colors: {
      black: 'var(--black)',
      white: 'var(--white)',
      purple: 'var(--purple)',
      'lighter-purple': 'var(--lighter-purple)',
      'darker-gray': 'var(--darker-gray)',
      gray: 'var(--gray)',
      border: 'var(--border)',
      input: 'var(--input)',
      ring: 'var(--ring)',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      primary: {
        DEFAULT: 'var(--primary)',
        foreground: 'var(--primary-foreground)',
      },
      secondary: {
        DEFAULT: 'var(--secondary)',
        foreground: 'var(--secondary-foreground)',
      },
      destructive: {
        DEFAULT: 'var(--destructive)',
        foreground: 'var(--destructive-foreground)',
      },
      muted: {
        DEFAULT: 'var(--muted)',
        foreground: 'var(--muted-foreground)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        foreground: 'var(--accent-foreground)',
      },
      popover: {
        DEFAULT: 'var(--popover)',
        foreground: 'var(--popover-foreground)',
      },
      card: {
        DEFAULT: 'var(--card)',
        foreground: 'var(--card-foreground)',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
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
      sm: '0px -0.25px 1px 0.75px rgba(var(--shadow-color-border), 0.25), 0px 8px 20px rgba(var(--shadow-color-main), 0.23), 0px 2px 9px rgba(var(--shadow-color-main), 0.14), 0px 1px 3px rgba(var(--shadow-color-main), 0.09)',
      md: '0px -0.5px 1px 1.5px rgba(var(--shadow-color-border), 0.25), 0px 16px 80px rgba(var(--shadow-color-main), 0.23), 0px 4px 18px rgba(var(--shadow-color-main), 0.14), 0px 1px 6px rgba(var(--shadow-color-main), 0.09)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
