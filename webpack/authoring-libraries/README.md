More info:

Aside from applications, webpack can also be used to bundle JavaScript libraries. 


## Usage

#### CommonJS module require

```javascript
const webpackNumbers = require('webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');
```

#### AMD module require
```javascript
require(['webpackNumbers'], function (webpackNumbers) {
  // ...
  webpackNumbers.wordToNum('Two');
});
```

#### script tag

```html
<!DOCTYPE html>
<html>
  ...
  <script src="https://example.org/webpack-numbers.js"></script>
  <script>
    // ...
    // Global variable
    webpackNumbers.wordToNum('Five');
    // Property in the window object
    window.webpackNumbers.wordToNum('Five');
    // ...
  </script>
</html>
```

#### External limitations

For libraries that use several files from a dependency:
```javascript
import A from 'library/one';
import B from 'library/two';

// ...
```
You won't be able to exclude them from the bundle by specifying `library` in the externals. You'll either need to exclude them one by one or by using a regular expression.
```javascript
module.exports = {
  //...
  externals: [
    'library/one',
    'library/two',
    // Everything that starts with "library/"
    /^library\/.+$/,
  ],
};
```

