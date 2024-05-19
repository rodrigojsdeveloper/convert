import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#080815',
          200: '#0E0F25',
          300: '#141534',
          400: '#1F2151',
          500: '#2F3279',
          600: '#2F34AB',
          700: '#4A5DCD',
          800: '#7D8DEC',
          900: '#B2B8DE',
        },
        white: {
          100: '#F1F2F6',
        },
      },
    },
  },
  plugins: [],
}

export default config
