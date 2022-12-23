## Load async CSS

```html
<link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="critical-style.css">
```
`style.css` comes before `critical-style.css` therefore it has to be loaded first.
However, since we did async load of `style.css` it will be loaded after `critical-style.css`.


A browser see that the media is not set to 'all' but to 'print' therefore it assumes that loading is not critical.
In this way the render is not blocked by the loading css files.

```html
<link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">
```

