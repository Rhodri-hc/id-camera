import * as utils from './src/utils/tailwindCustomize'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  prefixer: true,
  prefix: 'tw-',
  // separator 这个参数有可能会导致 tailwind css intelligent 不生效
  // separator: ':',
  compile: false,
  globalUtility: false,
  darkMode: 'media',
  corePlugins: {
    preflight: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    space: false,
    placeholderColor: false,
    placeholderOpacity: false,
    transitionProperty: false
  },
  exclude: [/([0-9]{1,}[.][0-9]*)$/],
  theme: {
    // width: theme => ({
    //   auto: 'auto',
    //   full: '100%',
    //   screen: '100vw',
    //   ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
    //   ...theme('spacing')
    // }),
    // height: theme => ({
    //   auto: 'auto',
    //   full: '100%',
    //   screen: '100vh',
    //   ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
    //   ...theme('spacing')
    // }),
    // maxHeight: {
    //   full: '100%',
    //   screen: '100vh'
    // }
    extend: {
      colors: {
        primary: 'var(--color-primary)'
      }
    },
    spacing: utils.spacing(100, 4, [2, 6, 10, 14, 18, 22, 26, 30]),
    borderWidth: utils.borderWidth(8),
    fontSize: utils.fontSize({
      xs: { value: 10, lineHeight: 14 },
      'sm,size-caption': 12,
      'base,size-base': 14,
      'xl,lg,size-head': 16,
      '2xl,size-title': 20,
      '3xl,size-title-lg': 24,
      '4xl': 28,
      '5xl': 32,
      '6xl': 36,
      '7xl': 40,
      '8xl': 44,
      '9xl': 48
    }),
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
      ...utils.iteration(3, 10, 1, 4, 'px', [14, 18, 21, 30])
    },
    borderRadius: utils.assign({
      none: '0px',
      sm: '2px',
      'DEFAULT,base': '4px',
      md: '6px',
      'lg,card': '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
      full: '9999px',
      half: '50%'
    })
  },
  plugins: []
}
