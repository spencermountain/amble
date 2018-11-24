#!/usr/bin/env node
//grab the params and just do it
var watch = require('../src/index');
watch(process.argv[2], process.argv.slice(3).join(' '))
