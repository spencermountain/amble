var exec = require('shelljs').exec
var path = require('path');
var gaze = require('gaze');
var chalk = require('chalk');
var banner = require('./banner')
var cwd = process.cwd()

var options = {
  interval: 1,
  ignoreDotFiles: true,
  wait: 2
};

var watch = function(file) {
  //first, understand relative links
  var abs = path.resolve(cwd, file);
  var obj = {
    exec: abs,
    watch: path.dirname(abs)
  }

  //run our exec function
  var doit = function() {
    console.log(banner());
    var cmd = 'node ' + obj.exec + ' --debug --color'
    exec(cmd);
    console.log('\n\n\n\n\n\n\n');
  };
  //set-up the watcher
  var init = obj.watch + '/**/*.js'
  var node_modules = '!**/node_modules/**'
  var git = '!**/.git/**'

  //do it right-away
  var rel = path.relative(cwd, init);
  console.log(chalk.grey('watching: ') + chalk.blue(rel))
  console.log('\n\n')
  doit();

  gaze([init, node_modules, git], options, function(err) {
    if (err) {
      console.log(err);
    }
    this.on('added', function(filepath) {
      console.log(filepath + ' was added');
    });
    //On changed/added/deleted
    this.on('all', function() {
      doit();
    });
  });
}

module.exports = watch
