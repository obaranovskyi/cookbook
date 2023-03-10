More info: https://webpack.js.org/guides/code-splitting/

#### Dependencies:
```bash
npm install --save-dev html-webpack-plugin
```

## Notes
Code splitting is one of the most compelling features of webpack. This feature allows you to split your
code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller
bundles and control resource load prioritization which, if used correctly, can have a major impact on load time

#### There are three general approaches to code splitting available:
- **Entry Points**: Manually split code using `entry` configuration.
- **Prevent Duplication**: use [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) or [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
to dedupe and split chunks
- **Dynamic imports**: Split code via inline function calls within modules.

Two similar techniques are supported by webpack when it comes to dynamic code splitting.
The first and recommended approach is to use the `import()` syntax that conforms to the `ECMAScript` for dynamic imports.
The legacy, webpack-specific approach is to use `require.ensure`.
