import type { Config } from 'tailwindcss';

export default {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [],
} satisfies Config

