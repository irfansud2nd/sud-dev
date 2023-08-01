/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        runningElement: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        navMenuBgShow: {
          "0%": { display: "none", opacity: "0" },
          "50%": { display: "block", position: "absolute", opacity: "40%" },
          "100%": { display: "block", position: "absolute", opacity: "40%" },
        },
        navMenuShow: {
          "0%": { display: "none", transform: "translateX(100%)" },
          "50%": { display: "block", transform: "translateX(100%)" },
          "100%": { display: "block", transform: "translateX(0%)" },
        },
      },
      animation: {
        runningImage: "runningElement 10s linear infinite",
        navMenuShow: "navMenuShow 1.5s linear forwards",
        navMenuBgShow: "navMenuBgShow 1.5s linear forwards",
      },
    },
  },
  plugins: [],
};
