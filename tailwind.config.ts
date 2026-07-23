import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 34px rgba(108, 212, 255, 0.13)',
        lift: '0 14px 36px rgba(0, 0, 0, 0.4)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          50: '#F8F6FE',
          100: '#EFEAFC',
          200: '#E3D9FA',
          300: '#CEBBF5',
          400: '#B291ED',
          500: '#996AE1',
          600: '#8650D1',
          700: '#7340B7',
          800: '#653D9D',
          900: '#57269B',
          950: '#201D34',
        },
        accent: {
          50: '#EFFAFF',
          100: '#DCF3FE',
          200: '#B4E7FF',
          300: '#6CD4FF',
          400: '#04C0F7',
          500: '#00A9D9',
          600: '#0289B1',
          700: '#026D8E',
          800: '#015C78',
          900: '#004D65',
          950: '#13262E',
        },
        surface: {
          card: 'rgba(255, 255, 255, 0.04)',
          'card-hover': 'rgba(255, 255, 255, 0.06)',
        },
        hairline: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
export default config
