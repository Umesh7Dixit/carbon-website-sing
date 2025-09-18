/** @type {import('tailwindcss').Config} */



// module.exports = {
//   // content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//     content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {

//       animation: {
//         "spin-slow": "spin 5s linear infinite",
//         // 'spin-slow': 'spin 20s linear infinite',
//         'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite', // needed for your class
      },
      fontFamily: {
      sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
    },
    },
  },
  plugins: [],
};






// module.exports = {
//   content: [
//     "./src/app/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         "spin-slow": "spin 20s linear infinite", // slow rotation
//       },
//     },
//   },
//   plugins: [],
// };
