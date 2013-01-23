/**
 * Module dependencies
 */

var proto = require('./proto');

/**
 * Export `Hook`
 */

module.exports = Hook;

/**
 * Initialize `Hook`
 */

function Hook(url) {
  if(!(this instanceof Hook)) return new Hook(url);

  function hook(req, res, next) { hook.handle(req, res, next); }

  hook.url = url || '/';
  hook.commands = [];
  hook._branch = 'master';
  hook.__proto__ = proto;

  return hook;
}
