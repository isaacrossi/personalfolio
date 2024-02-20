/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: "RightGrotesk-Medium",
      heading: "RightGrotesk-TallBold",
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: "1.618rem",
      "2xl": "2.618rem",
      "3xl": "4.236rem",
      "4xl": "6.854rem",
      "5xl": "11.089rem",
    },
    colors: {
      dark: "#2C3639",
      secondary: "#3F4E4F",
      light: "#DCD7C9",
      tertiary: "#E68333",
    },
    extend: {
      lineHeight: {
        tightest: "0.8",
        "extra-tight": "0.9",
        12: "3rem",
      },
    },
  },
  plugins: [],
};
