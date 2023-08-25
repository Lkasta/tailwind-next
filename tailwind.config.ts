import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        diego: '#ccc3',
      },
    },
  },
  plugins: [],
}
export default config
