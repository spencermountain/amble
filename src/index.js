// var exec = require('shelljs').exec
var path = require('path')
var color = require('colorette')
var chokidar = require('chokidar')
var banner = require('./banner')
var cp = require('child_process')
var cwd = process.cwd()

var exec = function (cmd) {
  cp.execSync(cmd, { encoding: 'utf8', silent: false, stdio: 'inherit' })
}

var watch = function (file, args) {
  arg = args || ''
  //first, understand relative links
  var abs = path.resolve(cwd, file)
  var obj = {
    exec: abs,
    watch: path.dirname(abs),
  }

  //run our exec function
  var doit = function () {
    console.log(banner() || '')
    var cmd = `node ${args} ${obj.exec} --debug --color`
    try {
      exec(cmd)
    } catch (e) {
      // console.log('caught')
    }
    console.log('\n\n\n\n\n\n\n')
  }
  //set-up the watcher
  var init = obj.watch + '/**/*.js'

  //do it right-away
  var rel = path.relative(cwd, init)
  console.log(color.gray('watching: ') + color.blue(rel))
  console.log('\n\n')

  // let changes = 0
  const watcher = chokidar
    .watch(init, {
      ignored: [/node_modules/, /(^|[\/\\])\../],
      persistent: true,
    })
    .on('ready', () => {
      doit()
      watcher.on('add', () => {
        doit()
      })
      watcher.on('error', () => {
        console.log('=-=-error=-=-')
      })
      watcher.on('addDir', () => {
        doit()
      })
    })
    .on('change', () => {
      doit()
      // changes += 1
    })
    .on('unlink', () => {
      doit()
    })
}

module.exports = watch
