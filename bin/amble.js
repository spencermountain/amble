console.log('\n\n')
var watch = require('../src/index');
var files = process.argv.slice(2)
if (files.length === 0) {
  files = ['.']
}
watch(files)
