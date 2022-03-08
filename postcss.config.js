const postcssConfig = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties')({
      preserve: true
    }),
    require('postcss-apply'),
    require('postcss-nested'),
    require('postcss-custom-media')({
      preserve: true
    }),
    require('autoprefixer')
  ]
}

module.exports = postcssConfig
