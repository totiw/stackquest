/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: {
          DEFAULT: "rgb(var(--accent-color))",
          primary: "rgb(var(--accent-primary), 1)",
          secondary: "rgb(var(--accent-secondary), 0.2)",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
