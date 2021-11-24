module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blu: '#2476fe',
        gren: '#EDFFE5',
      },
      fontFamily: {
        sora: '"Sora", sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
