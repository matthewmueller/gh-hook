/**
 * Module dependencies
 */

var Hook = require('../'),
    express = require('express'),
    app = express();

/**
 * Hook
 */

var hook = Hook('/deploy')
  .auth('matt', 'test')
  .branch('master')
  .exec('echo `pwd`');

/**
 * Listen
 */

app.use(express.bodyParser());
app.use(hook);

app.listen(8000);
console.log("listening on port 8000");
