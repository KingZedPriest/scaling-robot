import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {
     colors: {
      primary: "#D56F3E",
      secondary: "#1C1F33",
      sidebarHover: "#D56F3E",
      sidebar: "#592F1A",
      sidebarText: "#0A0B12",
      textWhite: "#F2F2F7",
      textPrimary: "#161618",
     }
    },
  },
  plugins: [],
}
export default config
