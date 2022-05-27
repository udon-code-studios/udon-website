module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "new-tegomin": ["New Tegomin"],
        sans: ["Inter"],
      },
      colors: {
        bg: "rgb(244 244 245)",
        primary: "rgb(39 39 42)",
        "primary-focus": "",
        secondary: "rgb(82 82 91)",
        "secondary-focus": "rgb(161 161 170)",
        tertiary: "rgb(212 212 216)",
        quaternary: "rgb(113 113 122)",
        "bg-dark": "rgb(24 24 27)",
        "primary-dark": "rgb(244 244 245)",
        "primary-focus-dark": "",
        "secondary-dark": "rgb(161 161 170)",
        "secondary-focus-dark": "rgb(212 212 216)",
        "tertiary-dark": "rgb(63 63 70)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
