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
        "background-position-spin": "background-position-spin 3s infinite alternate",
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
        "background-position-spin": {
          "0%": { "background-position": "top center" },
          "100%": { "background-position": "bottom center" },
        },
      },
    },
  },
  plugins: [],
};

export default config