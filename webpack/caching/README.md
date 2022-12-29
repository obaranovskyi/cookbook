More info: https://webpack.js.org/guides/caching/ 

### Notes:

**Extracting Boilerplate.** It's also good practice to extract third-party libraries, such as `lodash` or `react`, to separate `vendor`
chunk as they are less likely to change than our local source code.
This step will allow clients to request even less from the server to stay up to date.
This can be done by using the `cacheGroups` option of the `SplitChunksPlugin` demonstrated in Example 2 of `SplitChunksPlugin`. 
