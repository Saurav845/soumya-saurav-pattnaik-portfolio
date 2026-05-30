import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        sora: ["var(--font-sora)", "Sora", "sans-serif"],
        space: ["var(--font-space)", "Space Grotesk", "sans-serif"]
      },
      colors: {
        graphite: "#08090d",
        panel: "#10131a",
        cyanx: "#2ee9ff",
        bluex: "#4a7dff",
        emeraldx: "#4dffb4"
      }
    }
  }
};

export default config;
