import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "std-content": "1.25rem", // 5 units
        "std-sm": "0.75rem", // 3 units
        "std-md": "1.25rem", // 5 units
        "std-lg": "1.75rem", // 7 units
        "std-xl": "2.25rem", // 9 units
      },
      fontFamily: {
        default: "var(--font-geist-sans)",
        geist: "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
