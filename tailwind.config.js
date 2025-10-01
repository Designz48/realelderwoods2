/** @type {import('tailwindcss').Config} */
export default {
  // -----------------------------------------------------------------
  // Tell Tailwind where to look for class names.
  // Add every folder that contains JSX/TSX/HTML that uses Tailwind.
  // -----------------------------------------------------------------
  content: [
    "./index.html",               // Vite’s entry HTML
    "./src/**/*.{js,jsx,ts,tsx}", // all source files
  ],

  // -----------------------------------------------------------------
  // Extend the default theme with the pastel palette you want.
  // Adding these keys creates the missing utilities like `bg-mint-50`,
  // `bg-lavender-200`, `text-babyblue-700`, etc.
  // -----------------------------------------------------------------
  theme: {
    extend: {
      colors: {
        // Mint family
        mint: {
          50: "#F5FFF5",
          100: "#E0FFE0",
          200: "#DFFFD6", // you can reuse the hex you like
          300: "#C2FFC2",
          400: "#A5FFA5",
          500: "#88FF88",
          600: "#6BFF6B",
          700: "#4EFF4E",
          800: "#31FF31",
          900: "#14FF14",
        },

        // Lavender family
        lavender: {
          50: "#F9F9FF",
          100: "#F0F0FF",
          200: "#E6E6FA",
          300: "#D0D0F5",
          400: "#BABAF0",
          500: "#A4A4EB",
          600: "#8E8EE6",
          700: "#7878E1",
          800: "#6262DC",
          900: "#4C4CD7",
        },

        // Baby‑blue family
        babyblue: {
          50: "#F5FCFF",
          100: "#E0F5FF",
          200: "#DDEEFF",
          300: "#C2E5FF",
          400: "#A7DCFF",
          500: "#8CD3FF",
          600: "#71CAFF",
          700: "#56C1FF",
          800: "#3BB8FF",
          900: "#20AFFF",
        },
      },
    },
  },

  // -----------------------------------------------------------------
  // Safelist any classes that are generated dynamically at runtime.
  // Tailwind’s JIT engine can’t see template literals like
  // `bg-${link.color}-100`, so we explicitly whitelist the
  // possible values.
  // -----------------------------------------------------------------
  safelist: [
    // Colors used for navigation button backgrounds
    "bg-green-100",
    "bg-purple-100",
    "bg-blue-100",
    "bg-green-700",
    "bg-purple-700",
    "bg-blue-700",

    // Text colors that appear in the same dynamic expression
    "text-green-700",
    "text-purple-700",
    "text-blue-700",

    // Hover/focus variants that you might use with the same colors
    "hover:bg-green-200",
    "hover:bg-purple-200",
    "hover:bg-blue-200",
  ],

  plugins: [], // you can add official plugins (forms, typography, etc.) later
}
