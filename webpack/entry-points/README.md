More info: https://webpack.js.org/guides/code-splitting/

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

### As mentioned there are some pitfalls to this approach:
- If there are any duplicated modules between entry chunks they will be included in both bundles.
- It isn't as flexible and can't be used to dynamically split code with the core application logic.

The first of htese two points is definitely an issue for our example, as `lodash` is also imported within `./src/index.js`
and will thus be duplicated in both bundles. 

Let's remove this duplication in next section. (Prevent duplication)
