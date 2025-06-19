// postcss.config.cjs
const tailwindcss = require('@tailwindcss/postcss');
const nesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    nesting,
    tailwindcss,
    autoprefixer,
  ],
};
