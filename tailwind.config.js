/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      backgroundImage: {
        "hero-img":
          "url('https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg')",
      },
      colors: {
        "splash-pink-light": "#DA4298",
        "splash-pink": "#D5298a",
        "splash-pink-dark": "#B32374",
        "splash-purple": "#2b2f54",
        "modal-bg": "#0009",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        modal: "repeat(2, minmax(0, 450px))",
      },
    },
    plugins: [],
  },
};
