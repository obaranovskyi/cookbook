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


The `SplitChunksPlugin` allows us to extract common dependencies into an existing entry chunk or 
an entirely new chunk. Let's use this to de-duplicate the `lodash` dependency from the previous example.

One more interesting plugin for splitting code is [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin)
It is useful for splitting CSS out form the main application.
