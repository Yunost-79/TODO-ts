/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#161616',
        headerColor: '#111111',
        goldenYellow: '#FFC000',
        goldenOrange: '#e89505',
        commonGrey: '#d8d8d8',
      },
      flex: {
        'taskItem-5': '1 1 5%',
        'taskItem-10': '1 1 10%',
        'taskItem-85': '1 1 85%',
      },
    },
  },
  plugins: [],
};
