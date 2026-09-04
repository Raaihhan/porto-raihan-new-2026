import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#082b61",
        royal: "#0756c9",
        sky: "#e8f3ff",
        mist: "#f5f8fc",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(8, 43, 97, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
