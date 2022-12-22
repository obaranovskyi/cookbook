More info: https://webpack.js.org/guides/development/

## INFO
Here we're adding source maps

```bash
npm install --save-dev html-webpack-plugin
```

## Notes:
- Source map options: https://webpack.js.org/configuration/devtool/

### Choosing a Development Tool
There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:
- [webpack's Watch Mode](https://webpack.js.org/configuration/watch/#watch)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)


### Watch mode
You can instruct webpack to "watch" all files within your dependency graph for changes.
If one of these files is updated, the code will be recompiled so you don't have to run the full build manually.

