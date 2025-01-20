import type { Config } from "tailwindcss";

import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components.tsx/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      jockey: ["Jockey One", ...fontFamily.sans],
    },
    keyframes: {
      "stroke-offset": {
        "100%": {
          strokeDashoffset: "-35%",
        },
      },
    },
    animation: {
      "stroke-offset": "stroke-offset 8s infinite linear",
    }
  },
  plugins: [],
} satisfies Config;
