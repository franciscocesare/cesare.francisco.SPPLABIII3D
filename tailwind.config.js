module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      },
      height: {
        '80':'20rem',
        '100': '25rem'
      }
    },
  },
  variants: {
    variants: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },
  },
  plugins: [],
}
