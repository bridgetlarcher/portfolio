import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          100: '#9084A0',
          200: '#836EA0',
          300: '#7759A0',
          400: '#653D9D',
          500: '#57269B',
          600: '#5217A4',
          700: '#201D34',
        },
        secondary: '#13262e',
        accent: '#6CD4FF',
      },
    },
  },
  plugins: [],
}
export default config
