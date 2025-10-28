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
        // Primary colors from FlipPost
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffe',
          300: '#7cc4ff',
          400: '#36a0ff', // Main primary blue
          500: '#0c7cd5',
          600: '#005fb3',
          700: '#004b8c',
          800: '#003f75',
          900: '#002d54',
        },
        // Secondary colors (purple from the sidebar)
        secondary: {
          50: '#f8f5ff',
          100: '#f0ebff',
          200: '#ddd2ff',
          300: '#c4a8ff',
          400: '#a97dff',
          500: '#8a4dff', // Main secondary purple
          600: '#7a3af5',
          700: '#6a2ad8',
          800: '#5721b5',
          900: '#491d96',
        },
        // Gray scale from the design
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Additional colors from the UI
        success: {
          100: '#d1fae5',
          500: '#10b981', // Green for success states
          700: '#047857',
        },
        warning: {
          100: '#fef3c7',
          500: '#f59e0b', // Yellow for warnings
          700: '#b45309',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444', // Red for errors
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
