/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        gray: {
          bg_dark: "#242424",
          text_dark: "hsla(0,0%,100%,.5)",
        },
      },
    },
  },
  darkMode: "class",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // 配置 Tailwind 来移除生产环境下没有使用到的样式声明
};
