const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'loading-bar': {
          '0%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(0.6)' },
          '100%': { transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
    },
  },
  plugins: [],
};

export default config;
