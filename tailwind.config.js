module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#FFF6EB',
          200: '#FFE2C1',
          300: '#FFCFA1',
          400: '#FFA05A',
          500: '#E77A2E',
          600: '#CF7027',
          700: '#8C4B1A',
          800: '#663611',
          900: '#402108',
        },
        // Update the primary color to the desired blue hex code
        blue: {
          100: '#1fb6ff',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};

// After updating the code, follow the steps in the proposed solution to rebuild the Tailwind CSS and check the landing page for the updated color scheme.