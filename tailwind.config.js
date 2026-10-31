/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#101114",
        surface: {
          DEFAULT: "#181B21",
          secondary: "#20242C",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#A0A6B2",
        },
        accent: {
          primary: "#8B9EFF",
          secondary: "#7CDBBB",
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        bengali: ['Noto Sans Bengali', 'Hind Siliguri', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}