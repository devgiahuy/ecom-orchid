import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      boxShadow: {
        "soft-primary": "0 8px 28px rgba(50,205,50,0.18)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
