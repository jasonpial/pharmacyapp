import type { Config } from "tailwindcss";
import twAnimate from "tw-animate-css";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [twAnimate],
};

export default config;
