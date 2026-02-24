module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'text-rotation': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'text-rotation': 'text-rotation 8s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
