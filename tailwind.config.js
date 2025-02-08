/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "fluid-sm": "clamp(0.64rem, 0.06vi + 0.62rem, 0.67rem)",
        "fluid-base": "clamp(0.8rem, 0.18vi + 0.75rem, 0.89rem)",
        "fluid-md": "clamp(1rem, 0.37vi + 0.89rem, 1.19rem)",
        "fluid-lg": "clamp(1.25rem, 0.65vi + 1.06rem, 1.58rem)",
        "fluid-xl": "clamp(1.56rem, 1.07vi + 1.26rem, 2.11rem)",
        "fluid-xxl": "clamp(1.95rem, 1.68vi + 1.47rem, 2.81rem)",
        "fluid-xxxl": "clamp(2.44rem, 2.55vi + 1.71rem, 3.75rem)",
      },
      fontFamily: {
        mona: ["'Mona Sans'"],
        sourceserif: ["'Source Serif 4'"],
      },
      colors: {
        background: "rgba(var(--background))",
        text: "rgba(var(--text))",
        primary: "rgba(var(--primary))",
        light: "rgba(var(--light))",
        dark: "rgba(var(--dark))",
        card: "rgba(var(--card))",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        rippling: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        rippling: "rippling var(--duration) ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
