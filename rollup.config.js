var uglify = require('rollup-plugin-uglify')
var pkg = require('./package.json')

var banner = '//  Ramda v' + pkg.version + '\n'
  + '//  https://github.com/mugos/fredis\n'
  + '//  (c) 2018-' + new Date().getFullYear()
  + '//  fRedis may be freely distributed under the MIT license.\n'

var input = 'src/index.js'

var config = {
  input: input,
  output: {
    format: 'umd',
    name: 'R',
    exports: 'named'
  },
  banner: banner,
  plugins: []
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
