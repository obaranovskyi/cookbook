More info: https://webpack.js.org/guides/development/

## INFO
Here we're adding source maps

```bash
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-dev-server
```

### Choosing a Development Tool
There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:
- [webpack's Watch Mode](https://webpack.js.org/configuration/watch/#watch)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)


### Note
`webpack-dev-server` doesn't write any output files after compiling.
Instead, it keeps bundle files in memory and serves them as if they were real
files mounted at the server's root path. If your page expects to find the bundle
files on a different path, you can change this with the `devMiddleware.publicPath`
option in the dev server's configuration.

More about `dev-server` https://webpack.js.org/configuration/dev-server/
