# amble
a clean way to 'hot-reload' a node.js script in the console.

`npm i amble`

then in your project

`amble ./toRun.js`

this will run file and watch all relevant files recursively.

i like to create a `./scratch.js` file, with my current stuff in it, so i run put this in my package.json:
```json
{
	"scripts":{
		"watch":"amble ./scratch.js"
	}
}
```

### javascript access
```js
var amble=require('amble')
amble({exec:'./scratch', watch:'./'})
```

huge thanks to Kyle Robinson Young's [gaze library](https://github.com/shama/gaze)

MIT
