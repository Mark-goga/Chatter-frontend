module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
      },
      screens: {
        "sm-max": { max: "640px" },
        desktop: "900px",
        tablet: {max: "900px"}
      },
      shadows : {
        headerMenu: '#2F496D'
      },
      height: {
        'screen-minus-100': 'calc(100vh - 100px)',
      },
      colors: {
        scrollbar: '#4a4a4a',
        scrollbarHover: '#6b6b6b',
        header: '#1D2126',
        primary: "#2F496D",
        error: "#f44336",
        success: "#4caf50",
        "primary-dark": "#1D2D44",
      },
      transitionProperty: {
        height: "height",
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '34px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
