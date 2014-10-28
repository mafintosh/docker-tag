#!/usr/bin/env node

var minimist = require('minimist')
var fs = require('fs')
var tag = require('./')

var argv = minimist(process.argv.slice(2), {
  alias:{host:'H'}
})

if (argv._.length < 2 || argv.help) {
  console.error(fs.readFileSync(__dirname+'/help.txt', 'utf-8'))
  process.exit(1)
}

if (argv.version) {
  console.log(require('./package').version)
  process.exit(2)
}

tag(argv._[0], argv._[1], argv, function(err) {
  if (!err) return
  console.error('Error: %s', err.message)
  process.exit(3)
})