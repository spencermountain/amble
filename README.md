# amble

a clean way to 'hot-reload' a node.js script in the console.

`npm i amble`

then in your project

`amble ./toRun.js`

this will run file and watch all relevant files recursively.

i like to create a `./scratch.js` file, with my current stuff in it, so i run put this in my package.json:

```json
{
  "scripts": {
    "watch": "amble ./scratch.js"
  }
}
```

### javascript access

```js
var amble = require('amble')
amble({ exec: './scratch', watch: './' })
```

if you want to pass arguments into node, put them after your filename:

```
amble scratch.mjs --experimental-modules
```

huge thanks to Paul Miller's [chokidar library](https://github.com/paulmillr/chokidar)

MIT
