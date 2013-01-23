/**
 * Module dependencies
 */

var connect = require('connect'),
    exec = require('child_process').exec;

/**
 * Base
 *
 * @param {String} url
 * @return {hook}
 * @api public
 */

exports.base = function(url) {
  this.url = url;
  return this;
};

/**
 * Authenticate
 *
 * @param {String} username
 * @param {String} password
 * @return {hook}
 * @api public
 */

exports.auth = function(username, password) {
  this.authorize = connect.basicAuth(username, password);
  return this;
};

/**
 * Execute a command
 *
 * @param {String} command
 * @return {hook}
 * @api public
 */

exports.exec = function(command) {
  this.commands.push(command);
  return this;
};

/**
 * Branch to respond to
 *
 * @param {String} branch
 * @return {hook}
 * @api public
 */

exports.branch = function(branch) {
  this._branch = branch;
  return this;
};

/**
 * Main middleware handler
 *
 * @api private
 */

exports.handle = function(req, res, next) {
  if(req.method != 'POST' || req.url != this.url) return next();
  var self = this;

  self.authorize(req, res, function(err) {
    if(err) return next(err);
    self.parse(req, res, function(err) {
      if (err) return next(err);
      self.execute(req, res, function(err) {
        if(err) return next(err);
        res.send(200);
      });
    });
  });
};

/**
 * Default authorization middleware (no authorization)
 * may be overwritten by using hook.auth(user, pass)
 *
 * @api private
 */

exports.authorize = function(req, res, next) {
  return next();
};

/**
 * Middleware to parse the github request
 *
 * @api private
 */

exports.parse = function(req, res, next) {
  if(!req.body) return next(new Error('gh-hook requires bodyParser middleware'));
  req.body = JSON.parse(req.body.payload);
  return next();
};

/**
 * Execute the supplied commands
 *
 * @api private
 */

exports.execute = function(req, res, next) {
  var body = req.body,
      branch = body.ref.split('/').pop(),
      cmds = this.commands;

  if(!cmds.length) return next();

  // ignore other branches
  if(branch != this._branch) return next();

  exec(cmds.join('&&'), function(err, stdout, stderr) {
    if(err) return next(err);
    if(stdout) process.stdout.write(stdout);
    if(stderr) process.stderr.write(stderr);
    next();
  });
};
