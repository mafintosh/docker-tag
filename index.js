var docker = require('docker-remote-api')
var parse = require('docker-parse-image')

var noop = function() {}

var toString = function(name) {
  return name ? name+'/' : ''
}

var tag = function(from, to, opts, cb) {
  if (typeof opts === 'function') return tag(from, to, null, opts)
  if (!opts) opts = {}
  if (!cb) cb = noop

  var request = docker(opts)
  
  to = parse(to)
  from = parse(from)

  if (!to || !from) throw new Error('Invalid image names')

  request.post('/images/'+from.name+'/tag', {
    body: null,
    drain: true,
    qs: {
      repo: toString(to.registry)+toString(to.namespace)+to.repository,
      tag: to.tag || 'latest'
    }
  }, cb)
}

module.exports = tag