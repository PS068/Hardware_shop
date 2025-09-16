module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Navy
        primary: {
          DEFAULT: "#1B365D", // navy-900
          50: "#F0F4F8", // navy-50
          100: "#D9E2EC", // navy-100
          200: "#BCCCDC", // navy-200
          300: "#9FB3C8", // navy-300
          400: "#829AB1", // navy-400
          500: "#627D98", // navy-500
          600: "#486581", // navy-600
          700: "#334E68", // navy-700
          800: "#243B53", // navy-800
          900: "#1B365D", // navy-900
        },
        // Secondary Colors - Gold
        secondary: {
          DEFAULT: "#D4A574", // gold-400
          50: "#FDF8F3", // gold-50
          100: "#F9EFDF", // gold-100
          200: "#F2DCBC", // gold-200
          300: "#E8C394", // gold-300
          400: "#D4A574", // gold-400
          500: "#B8935C", // gold-500
          600: "#9A7B4A", // gold-600
          700: "#7D643A", // gold-700
          800: "#624F2E", // gold-800
          900: "#4A3C24", // gold-900
        },
        // Accent Colors - Teal
        accent: {
          DEFAULT: "#4A90A4", // teal-500
          50: "#F0F9FA", // teal-50
          100: "#D6F0F3", // teal-100
          200: "#B8E3E8", // teal-200
          300: "#94D1D9", // teal-300
          400: "#6FB1C0", // teal-400
          500: "#4A90A4", // teal-500
          600: "#3A7A8C", // teal-600
          700: "#2D6374", // teal-700
          800: "#234E5C", // teal-800
          900: "#1B3D47", // teal-900
        },
        // Background Colors
        background: "#FAFBFC", // slate-50
        surface: "#F4F6F8", // slate-100
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#64748B", // slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#27AE60", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#27AE60", // green-600
          700: "#15803D", // green-700
        },
        warning: {
          DEFAULT: "#F39C12", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#F39C12", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
        },
        error: {
          DEFAULT: "#E74C3C", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E74C3C", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}