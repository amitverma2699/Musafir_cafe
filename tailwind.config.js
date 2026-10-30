/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#29211E',
        porcelain: '#FAF7F1',
        buttercream: '#EDE2D0',
        cocoa: '#715448',
        terracotta: {
          DEFAULT: '#B86E52',
          hover: '#A25C42',
          light: '#EAD7CF'
        },
        sage: {
          DEFAULT: '#8B9277',
          light: '#DFE2D6',
          dark: '#686E56'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.08em',
        'loose-luxury': '0.15em',
        'ultra-wide': '0.22em'
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(41, 33, 30, 0.04)',
        'soft-lift': '0 10px 30px -10px rgba(41, 33, 30, 0.08)',
        'elevated': '0 20px 40px -15px rgba(41, 33, 30, 0.12)',
      }
    },
  },
  plugins: [],
}
