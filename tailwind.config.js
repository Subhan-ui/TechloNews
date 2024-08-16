/** @type {import('tailwindcss').Config} */

import { red, gray, lightblack, blue, lightGray } from "./src/constant/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jump7456: {
          "15%": { "border-bottom-right-radius": "3px" },
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
          "50%": {
            transform: "translateY(18px) scale(1, 0.9) rotate(45deg)",
            "border-bottom-right-radius": "40px",
          },
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        shadow324: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.2, 1)" },
        },
      },
      animation: {
        jump7456: "jump7456 0.5s linear infinite",
        shadow324: "shadow324 0.5s linear infinite",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        plex: '"IBM Plex Serif", serif',
        nunito: '"Nunito Sans", sans-serif',
      },
      colors: {
        red: red,
        gray: gray,
        lightblack:lightblack,
        blue:blue,
        lightGray:lightGray,
      },
      screens: {
        "3xl": "1375px",
        '4xl': '1432px',
        '5xl':'1500',
        'md':'843px'
      },
    },
  },
  plugins: [],
};
