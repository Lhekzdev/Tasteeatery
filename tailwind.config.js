/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        RedHatdisplay: ['Red Hat Display, sans-serif'],
      },
      colors:{
        customOrange: "rgba(255, 140, 0, 1)",
        customPink: "rgba(255, 232, 204, 1)",
        customLightpink: "rgba(255, 232, 204, 1)",
        customBrown: "rgba(51, 28, 0, 1)",
        customShadow: "rgba(94, 94, 94, 0.1)"
       


      },
      boxShadow: {
        'custom-light': '0 4px 20px rgba(94, 94, 94, 0.1)',
      },
  },
  plugins: [],
}
}

