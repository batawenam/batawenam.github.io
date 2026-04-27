/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'system-ui', '-apple-system', 'sans-serif']
      },
      maxWidth: {
        'prose-tight': '640px'
      },
      colors: {
        ink: '#0A0A0A',
        muted: '#737373',
        subtle: '#A3A3A3',
        line: '#E5E5E5'
      }
    }
  },
  plugins: []
};
