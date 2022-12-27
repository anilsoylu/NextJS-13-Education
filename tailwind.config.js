/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './page/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '375px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1140px',
          '2xl': '1140px',
        },
      },
      colors: {
        primary: '#ffbe33',
        secondary: '#222831',
        danger: '#ff0000',
        success: '#00ff00',
        facebook: '#3b5998',
        twitter: '#1da1f2',
        linkedin: '#0077b5',
        instagram: '#e1306c',
        pinterest: '#bd081c',
      },
    },
  },
};
