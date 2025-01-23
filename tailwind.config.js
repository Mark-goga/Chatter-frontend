module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-max": { max: "640px" },
        desktop: "992px",
      },
      width: {
        calc: "calc(100% - 520px)",
      },
      colors: {
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
      },
      fontFamily: {
        raleway: ["'Raleway', sans-serif"],
      },
    },
  },
  plugins: [],
}
