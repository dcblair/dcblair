import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'floatDeep 8.7s ease-in-out infinite',
        floatFast: 'floatDeeper 5.6s ease-in-out infinite',
        floatSlow: 'floatDeeper 9s ease-in-out infinite',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        '1': '0 0 0 1px black',
        '2': '0 0 0 2px black',
      },
      fontSize: {
        '2.5xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      fontFamily: {
        nunito: 'Nunito',
      },
    },
    fontFamily: {
      sans: 'Open Sans',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(1%)' },
        '50%': { transform: 'translateY(-2%)' },
      },
      floatDeep: {
        '0%, 100%': { transform: 'translateY(1.2%)' },
        '50%': { transform: 'translateY(-2.4%)' },
      },
      floatDeeper: {
        '0%, 100%': { transform: 'translateY(3%)' },
        '50%': { transform: 'translateY(-3%)' },
      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    transitionDuration: {
      '0': '0ms',
      '50': '50ms',
      '100': '1000ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '2000': '2000ms',
      '3000': '3000ms',
      '4000': '4000ms',
      '5000': '5000ms',
    },
  },
  plugins: [],
} satisfies Config;
