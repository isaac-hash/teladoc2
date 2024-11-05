// /** @type {import('tailwindcss').Config} */
// export default {
//   purge: [],
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//     darkMode: false, // or 'media' or 'class'
//     content: [],
//     theme: {
//       extend: {},
//     },
//     variants: {
//       extend: {
//         display: ["group-hover"],
//     },
//     },
//     plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
}

