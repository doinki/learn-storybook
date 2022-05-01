/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ['src/**/*.@(j|t)s?(x)'],
  darkMode: 'class',
  theme: { screens: { sm: '480px', xs: '320px' } },
};
