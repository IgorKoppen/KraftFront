import type { Config } from 'tailwindcss'



const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'MainColor': '#00386F',
        'SecondColor': '#FF2120'
      }
    },
  },
  plugins: [require("daisyui")],
}

export default config
