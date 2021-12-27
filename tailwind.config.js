module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'phone': {'max': '479px'},
        // => @media (max-width: 479px) { ... }

        'tablet': {'min': '480px', 'max': '960px'},
        // => @media (min-width: 480px & max-width: 960px) { ... }
  
        'desktop': '961px',
        // => @media (min-width: 961px) { ... }
      },
      backgroundColor: theme => ({
        'solid-violet-darker': '#4B4453',
        'solid-ocean': '#E6EEFF',
        'solid-gray': '#505356',
        'solid-cream': '#F4F3F3',
        'solid-cream-darker': '#ECE9E9',
        'solid-red-pastel': "#FF6161"
      }),
      inset: {
        '80-percent': '80%',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
