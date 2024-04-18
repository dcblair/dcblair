import type { Config } from 'tailwindcss';

// TODO: Add custom animation for slow spinning
export default {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        '1': '0 0 0 1px black',
        '2': '0 0 0 2px black',
      },
      fontSize: {
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
  },
  plugins: [],
} satisfies Config;
