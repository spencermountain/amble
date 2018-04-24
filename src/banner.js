var chalk = require('chalk');

var rando = function() {
  var emojis = {
    lemon: chalk.yellow('🍋'),
    flower: chalk.red('🌼'),
    check: chalk.green('✅'),
    boat: chalk.blue('⛵ '),
    sun: chalk.yellow('🌞 '),
    sprout: chalk.green('🌱 '),
    time: chalk.green('🕙 '),
    shirt: chalk.blue('👕 '),
    hat: chalk.magenta('🎩 '),
    orange: chalk.red('🍑 '),
    candy: chalk.magenta('🍬 '),
    lollypop: chalk.red('🍭 '),
    dress: chalk.red('👗 '),
    happy: chalk.green('😊 '),
    trumpet: chalk.yellow('🎺 ')
  };
  var keys = Object.keys(emojis);
  var r = parseInt(Math.random() * keys.length - 1, 10);
  return emojis[keys[r]];
}

//print a nice emoji
var banner = function() {
  var str = '             ' + rando()
  return str + '\n'
};
module.exports = banner
