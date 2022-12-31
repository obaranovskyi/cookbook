const path = require('path');


/*
  There is one change that you will have to make to your webpack config. Typically, `module.exports` points to the configuration object.
  To use the `env` variable, you must convert `module.exports` to a function.
*/

module.exports = (env) => {
  console.log('Goal:', env.goal); // local
  console.log('Production:', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
};
