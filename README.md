# amble
a cleaner watch script for node.js development

`npm i amble`

then in your project

`amble .`

this will run your either `index.js`, or the `main` from `package.json`, whenever a file changes in your repo.

i like to create a `./scratch.js` file, with my current stuff in it, so i run put this in my package.json:
```json
{
	"scripts":{
		"watch":"amble ./scratch.js --exclude ./builds"
	}
}
```

huge thanks to Kyle Robinson Young's [gaze library](https://github.com/shama/gaze)

MIT
