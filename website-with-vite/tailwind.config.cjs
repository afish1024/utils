const typography = require('@tailwindcss/typography')
// const scrollbar = require('tailwind-scrollbar')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // screens: {
    //   lg: '1024px',
    //   md: '768px',
    //   sm: '640px',
    // },

    // container: {
    //   center: true,
    //   padding: '1.5rem',
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        // Wild Strawberry
        primary: '#F92D8E',
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
      },
    },
  },

  plugins: [
    typography,
    // scrollbar
  ],
}
