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
 * Deploy fn
 *
 * @param {Function} fn
 * @return {hook}
 * @api public
 */

exports.deploy = function(fn) {
  this._deploy = fn;
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
        res.send(204);
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

exports.authorize = function(req, res, next) { return next() };

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
 * Execute the deploy script if correct branch
 *
 * @api private
 */

exports.execute = function(req, res, next) {
  var body = req.body,
      branch = body.ref.split('/').pop();

  // ignore other branches
  if(branch != this._branch) return next();

  // Respond
  res.send(204);

  // Call the deploy function
  this._deploy(body);
};
