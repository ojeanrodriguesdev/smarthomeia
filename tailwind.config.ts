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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: {
          herosection: '#0035324D',
          buttonhero: '#007943',
          feature: '#385650',
          star: '#1F724D',
        },
        blue: {
          eclipse: '#84EEF5',
        },
      },
      boxShadow: {
        'blue-layer': '0px 0px 200px rgba(0, 150, 255, 0.5)',
      },
      fontFamily: {
        opensans: '"Open Sans", sans-serif',
      }
    },
  },
  plugins: [],
}
export default config
