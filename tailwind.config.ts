import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#0077FF',
        text: '#FFFFFF',
        'text-secondary': '#A9A9AA',
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
        "line-shadow": "line-shadow 15s linear infinite",
      },
      keyframes: {
        "gradient": {
          to: {
            "background-position": "var(--bg-size, 300%) 0",
          },
        },
        "line-shadow": {
          "0%": {
            "background-position": "0 0",
          },
          "100%": {
            "background-position": "100% -100%",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config