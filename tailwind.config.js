/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/store/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '12px',
      normal: '16px',
      md: '20px',
      big: '25px',
      lg: '31px',
      xl: '38px',
      xxl: '48px',
      xxxl: '61px'
    },
    colors: {
      white: "#FFFFFF",
      black: '#000000',
      foundation: "#057087",
      yellow: "#FFA500",
      gray: "#808080",
      lightGray: "#808080CC",
      darkGray: "#000000CC",
      flamingo: '#ED4B9E',
      error: "#E60000",
    },
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
