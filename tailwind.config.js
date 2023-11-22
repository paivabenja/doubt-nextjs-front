const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
];

export const theme = {
  extend: {
    colors: {
      'doubt-green': '#0b3a00',
      'doubt-green-light': '#a4b59f',
      'doubt-green-lighter': '#e2ebdf',
    }
  },
  darkMode: 'class',
};

export const plugins = [nextui()];
