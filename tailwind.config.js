// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//     ""
//   ],
//   theme: {
//     extend: {
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F57C00',
          white: '#FFFFFF',
        },
        orange: {
          dark: '#E65100',
          light: '#FFB74D',
          soft: '#FFE0B2',
        },
        gray: {
          dark: '#2C3E50',
          medium: '#546E7A',
          light: '#F5F7FA',
        },
        success: '#10B981',
        info: '#0EA5E9',
        border: '#E0E0E0',
      },
    fontFamily: {
    sans: [
      'ui-sans-serif',
      'system-ui',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ],
  },
    },
  },
  plugins: [],
};

