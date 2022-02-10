module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        capsule: {
          white: "#FFFBF3",
          orange: "#FF945",
          blue: "#547EF0",
          green: "#4C8F82",
          yellow: "#E6BA53",
          black: "#1A1A1A",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
