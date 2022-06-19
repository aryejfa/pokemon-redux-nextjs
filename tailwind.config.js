module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5bb0ca',
        'secondary': '#ffcf00',
        'bac-gray': '#f3f4f5',
      },
      fontFamily: {
        'Roboto': ['Roboto-Regular'],
        'Roboto-Black': ['Roboto-Black'],
        'Roboto-Medium': ['Roboto-Medium'],
        'Roboto-Thin': ['Roboto-Thin'],
        'Roboto-Bold': ['Roboto-Bold'],
      },
      lineHeight: {
        '12': '3rem',
      },
    },
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px",
         screens: {
          'tablet': '360px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
