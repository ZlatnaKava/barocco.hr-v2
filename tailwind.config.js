module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  variants: {
    borderStyle: ["responsive", "hover", "focus"],
  },
  theme: {
    extend: {
      colors: {
        "barocco-yellow": "#d3aa20",
        "barocco-gold": "#9a6703",
        "barocco-red": "#cc3300",
      },
      fill: {
        "white": "#FFFFFF",
        "barocco-yellow": "#d3aa20",
        "barocco-gold": "#9a6703",
        "barocco-red": "#cc3300",
      },

      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minHeight: {
        "0": "0",
        "300": "300px",
        "500": "500px",
        "600": "600px",
        full: "100%",
      },
      width: {
        "bean-small": "100px",
        "bean-medium": "200px",
        "bean-big": "200px",
      },
      inset: {
        "0": 0,
        auto: "auto",
        full: "100%",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        landscape: { raw: "(orientation: landscape)" },
        "mobile-portrait-iPhone-6": {
          raw:
            "(min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
        },
        "mobile-portrait-iPhone-6plus": {
          raw:
            "(min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        "mobile-portrait-iPhone-x": {
          raw:
            "(min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)",
        },
        "tablet-portrait": {
          raw:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)",
        },
        "mobile-landscape-iPhone-6": {
          raw:
            "(min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)",
        },
        "mobile-landscape-iPhone-6plus": {
          raw:
            "(min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)",
        },
        "mobile-landscape-iPhone-x": {
          raw:
            "(min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)",
        },
        "tablet-landscape": {
          raw:
            "(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)",
        },
      },
      opacity: {
        "easter-egg": "0.05",
      },
    },
  },
  variants: {},
  plugins: [],
}
