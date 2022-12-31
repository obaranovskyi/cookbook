const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',

    /* Only for script tag usage */
    /* library: 'webpackNumbers' */

    /* Bundle a library that can work with - CommonJS, AMD and script tag */
    globalObject: 'this',
    library: {
      name: 'webpackNumbers',
      type: 'umd'
    }
  },
  /* Externalize lodash (treating a lodash as a peer dependency) */
  /* Do not bundle it to along with our library */
  /* In other words, our library expects a dependency named lodash */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }  
  }
}
