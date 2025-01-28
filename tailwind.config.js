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
        modalOpen: {
          '0%': { opacity: 0, marginTop: '-5px' },
          '100%': { opacity: 1, marginTop: '0' },
        },
        modalClose: {
          '0%': { opacity: 1, marginTop: '0' },
          '100%': { opacity: 0, marginTop: '-5px' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
        modalOpen: 'modalOpen 0.1s ease-out',
        modalClose: 'modalClose 0.1s ease-out',
      },
      screens: {
        "sm-max": { max: "640px" },
        desktop: "900px",
        tablet: {max: "900px"},
        '360': {min: '360px'},
      },
      shadows : {
        headerMenu: '#2F496D'
      },
      height: {
        'screen-minus-90': 'calc(100dvh - 90px)',
      },
      colors: {
        scrollbar: '#4a4a4a',
        scrollbarHover: '#6b6b6b',
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        error: "#f44336",
        success: "#4caf50",
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
