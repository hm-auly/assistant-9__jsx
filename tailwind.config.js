import { color } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
       primary: "#1677BD",
       secoundary: "#8F8F8F"
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],

  plugins: [],
}

