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
          100: '#E0F5FF',
          200: '#B3E5FF',
          300: '#80D4FF',
          400: '#4DC3FF',
          500: '#1FB6FF',
          600: '#1A9EDB',
          700: '#1476B7',
          800: '#0E4E93',
          900: '#08266F',
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

// Step 2: Update the primary color variable to the desired blue hex code, e.g. '#1fb6ff'.
// I have updated the primary color palette to a blue color scheme based on the provided hex code.