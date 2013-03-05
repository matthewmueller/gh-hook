
# gh-hook

  respond to [github post-recieve hooks](https://help.github.com/articles/post-receive-hooks).

## Example

```js
var hook = Hook('/deploy')
  .auth('matt', 'test')
  .branch('master')
  .deploy(function(body) {

  });

app.use(hook)
```

## Install

    npm install gh-hook

## API

## Hook(url)

  Initialize a new `hook` with an optional base `url`. Defaults to `/`

## hook.base(url:String)

  Specify a base `url`. Alias for `Hook(url)`.

## hook.auth(username:String, password:String)

  Authenticate using basic auth

## hook.branch(branch:String)

  Specify a `branch` to respond to. Defaults to `master`;

## hook.deploy(fn:Function)

  Execute a callback function when you github posts to the given base `url` and
  branch and auth conditions are satisfied.

## License

(The MIT License)

Copyright (c) 2012 matthew mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
