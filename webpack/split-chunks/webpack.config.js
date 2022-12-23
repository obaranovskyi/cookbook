const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    // INFO: With the `optimization.splitChunks` configuration option in place, we should now see the 
    // duplicate dependency removed from our `index.bundle.js` and `another.bundle.js`. The plugin 
    // should notice that we've separated `lodash` out to a separate chunk and removed the dead weight from
    // our main bundle.
    splitChunks: {
      chunks: 'all',
    }
  }
};
