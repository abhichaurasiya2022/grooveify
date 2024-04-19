import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        light: {
          primary: colors.slate[950],
          secondary: colors.slate[500],
          accent: colors.blue[300],
          bgMain: colors.slate[200],
          bgNav: colors.slate[100],
          bgActivity: colors.slate[50],
          bgBody: colors.slate[50]


        },
        dark: {
          primary: colors.slate[50],
          secondary: colors.slate[300],
          accent: colors.blue[700],
          bgMain: colors.slate[600],
          bgNav: colors.slate[800],
          bgActivity: colors.slate[900],
          bgBody: colors.slate[900]


        }
      },

      backgroundImage: {

        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        // "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
