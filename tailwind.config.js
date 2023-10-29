/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      'h1': ['4.38rem', { lineHeight: '82px', fontWeight: '800' }],
      'h2': ['3.13rem', { lineHeight: '58px', fontWeight: '800' }],
      'h3': ['2.5rem', { lineHeight: '46px', fontWeight: '800' }],
      'h4': ['2.2rem', { lineHeight: '41px', fontWeight: '800' }],
      'h5': ['1.9rem', { lineHeight: '35px', fontWeight: '800' }],
      'h6': ['1.56rem', { lineHeight: '29px', fontWeight: '800' }],
    },
    colors: {
      'organick-blue-dark': '#274C5B',
      'organick-green': '#7EB693',
      'organick-yellow': '#EFD372',
      'organick-grey': '#D4D4D4',
      'organick-white': '#F9F8F8',
      'organick-green-white': '#EFF6F1',
      'organick-dark': '#525C60',
    },
    fontFamily: {
      'roboto': ['Roboto', 'Arial', 'sans-serif'],
      'open-sans': ['Open Sans', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}