import type { Config } from 'tailwindcss';

// TODO: Add custom animation for slow spinning
export default {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
} satisfies Config

