/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        grayHeading: '#696969',      // Custom gray for headings
        whiteText: '#FFFFFF',        // White for main text, icons, buttons
        backgroundBlack: '#121212',  // Deep black for background
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
