/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropFilter: {
        blur: ["sm", "md", "lg", "xl", "2xl", "3xl"], // Add blur levels you want to use
      },
      animation: {
        text: "text 5s ease infinite", // Shimmer effect animation
        pulse: "pulse 1s ease-in-out infinite", // Pulsating animation
        "heart-beat": "heart-beat 1s ease-in-out infinite alternate", // Heartbeat animation
        "grow-shrink": "grow-shrink 1s ease-in-out infinite alternate", // Grow and shrink animation
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 100%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 100%",
            "background-position": "right center",
          },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "heart-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(0.9)" },
        },
        "grow-shrink": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
      backgroundImage: {
        "romantic-bg": "url('images/romanticBackground.jpg')",
      },
    },
  },
  plugins: [],
};
