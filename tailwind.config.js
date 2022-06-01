module.exports = {
  content: ["./resources/**/*.{html,js}", "./resources/**/*.blade.php", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
