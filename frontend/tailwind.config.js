/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds
        paper: {
          50: '#FFFFFF',
          100: '#F8F8F6',
          200: '#F1F1EE',
          300: '#E7E7E2',
        },
        base: '#F8F8F6',
        // High contrast typography
        ink: {
          950: '#0A0A0A',
          900: '#111111',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#5F6368',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        primary: '#111111',
        secondary: '#5F6368',
        // Deal accents
        'deal-orange': '#F97316',
        'deal-hover': '#EA580C',
        'deal-light': '#FFF7ED',
        accent: {
          DEFAULT: '#F97316',
          hover: '#EA580C',
          light: '#FFF7ED',
        },
        // Borders
        'border-warm': '#E8E8E8',
        'border-subtle': '#E8E8E8',
        border: {
          DEFAULT: '#E8E8E8',
          warm: '#E8E8E8',
          subtle: '#E8E8E8',
          dark: '#D1D5DB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        'content': '1220px',
      }
    },
  },
  plugins: [],
}
