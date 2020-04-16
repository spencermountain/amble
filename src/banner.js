var color = require('colorette')

var rando = function () {
  var emojis = {
    lemon: color.yellow('🍋'),
    flower: color.red('🌼'),
    check: color.green('✅'),
    boat: color.blue('⛵ '),
    sun: color.yellow('🌞 '),
    sprout: color.green('🌱 '),
    time: color.green('🕙 '),
    shirt: color.blue('👕 '),
    hat: color.magenta('🎩 '),
    orange: color.red('🍑 '),
    candy: color.magenta('🍬 '),
    lollypop: color.red('🍭 '),
    dress: color.red('👗 '),
    happy: color.green('😊 '),
    trumpet: color.yellow('🎺 '),
  }
  var keys = Object.keys(emojis)
  var r = parseInt(Math.random() * keys.length - 1, 10)
  return emojis[keys[r]]
}

//print a nice emoji
var banner = function () {
  var str = '             ' + rando()
  return str + '\n'
}
module.exports = banner
