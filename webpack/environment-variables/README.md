More info: https://webpack.js.org/guides/environment-variables/


## Notes 
There is one change that you will have to make to your webpack config. Typically, `module.exports` points to the configuration object.
To use the `env` variable, you must convert `module.exports` to a function.
