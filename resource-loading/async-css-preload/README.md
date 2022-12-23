## Preload async CSS

```html
<link href="style.css" rel="preload" as="style" onload="setTimeout(() => {this.rel='stylesheet'}, 5000)">
```
1. We preload CSS not blocking render
2. We set `rel` to `cheatsheet`. By this we make our styles consumable.

**Note** We have `setTimeout` but it's here only for demo purpose.
