/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme')

const getFont = (font) => [font, 'Arial', 'sans-serif']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: '20px',
      center: true,
      screens: {
        lg: '1440px'
      },
    },
    fontFamily: {
      'roboto': getFont('Roboto'),
      'open-sans': getFont('Open Sans'),
      'yellowtail': getFont('Yellowtail'),
    },
    extend: {
      colors: {
        'organick-blue-dark': '#274C5B',
        'organick-green': '#7EB693',
        'organick-yellow': '#EFD372',
        'organick-grey': '#D4D4D4',
        'organick-white': '#F9F8F8',
        'organick-green-white': '#EFF6F1',
        'organick-dark': '#525C60',
        'organick-special-green': '#68A47F',
        'organick-line-grey': '#DEDDDD',
        'default-white': '#FFFFFF',
        'organick-price-grey': '#B8B8B8',
        'grey-menu': '#f2f0f0',
        'green-opacity': '#F1F8F4'
      },
      fontSize: {
        'organick-h1-lg': ['4.32rem', { lineHeight: '82px', fontWeight: '800' }],
        'organick-h2-lg': ['3.13rem', { lineHeight: '58px', fontWeight: '800' }],
        'organick-h3-lg': ['2.5rem', { lineHeight: '46px', fontWeight: '800' }],
        'organick-h4-lg': ['2.2rem', { lineHeight: '41px', fontWeight: '800' }],
        'organick-h5-lg': ['1.9rem', { lineHeight: '35px', fontWeight: '800' }],
        'organick-h6-lg': ['1.56rem', { lineHeight: '29px', fontWeight: '800' }],

        'organick-h1-sm': ['3.65rem', { lineHeight: '69px', fontWeight: '800' }],
        'organick-h2-sm': ['2.60rem', { lineHeight: '45px', fontWeight: '800' }],
        'organick-h3-sm': ['2.08rem', { lineHeight: '33px', fontWeight: '800' }],
        'organick-h4-sm': ['1.83rem', { lineHeight: '28px', fontWeight: '800' }],
        'organick-h5-sm': ['1.58rem', { lineHeight: '22px', fontWeight: '800' }],
        'organick-h6-sm': ['1.3rem', { lineHeight: '16px', fontWeight: '800' }],

        'organick-h1': ['2.40rem', { lineHeight: '49px', fontWeight: '800' }],
        'organick-h2': ['2.16rem', { lineHeight: '39px', fontWeight: '800' }],
        'organick-h3': ['1.73rem', { lineHeight: '32px', fontWeight: '800' }],
        'organick-h4': ['1.52rem', { lineHeight: '29px', fontWeight: '800' }],
        'organick-h5': ['1.31rem', { lineHeight: '25px', fontWeight: '800' }],
        'organick-h6': ['1.08rem', { lineHeight: '19px', fontWeight: '800' }],

        'xl': '1.25rem',
      },
      minHeight: {
        'hero': '500px',
        'hero-sm': '600px',
        'hero-xl': '898px'
      },
      width: {
        emoji: '1.1em',
        'vegetable-card-big': '335px',
      },
      maxWidth: {
        'slider-vegetable-xl': '1100px',
        'slider-vegetable-md': '690px',
        'slider-vegetable-sm': '335px',
        'slider-vegetable': '310px',
        product: '612px'
      },
      height: {
        emoji: '1.1em',
        'vegetable-card-big': '483px',
        'vegetable-card-small': '423px',
        logo: '53px',
        'product-big': '400px',
        'product-small': '300px'
      },
      zIndex: {
        full: '999'
      }
    },
  },
  plugins: [],
}