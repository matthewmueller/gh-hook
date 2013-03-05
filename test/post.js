#!/usr/bin/env node

var request = require('superagent'),
    args = process.argv.slice(2);

if(args && args[0] == '-h') {
  console.log('$ ./post [branch] [user:pass]');
  process.exit(0);
}

var branch = args[0] || 'master';
var auth = args[1] || 'matt:test';
auth = auth.split(':');

// POST with a sample github response
request
  .post('http://localhost:8000/deploy')
  .send('payload=%7B%22pusher%22%3A%7B%22name%22%3A%22none%22%7D%2C%22hook_callpath%22%3A%22new%22%2C%22repository%22%3A%7B%22name%22%3A%22wordsmith%22%2C%22has_wiki%22%3Atrue%2C%22size%22%3A3768%2C%22created_at%22%3A%222013-01-08T18%3A09%3A43-08%3A00%22%2C%22private%22%3Atrue%2C%22watchers%22%3A0%2C%22fork%22%3Afalse%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%22%2C%22language%22%3A%22JavaScript%22%2C%22pushed_at%22%3A%222013-01-17T17%3A07%3A32-08%3A00%22%2C%22id%22%3A7513309%2C%22has_downloads%22%3Atrue%2C%22open_issues%22%3A4%2C%22has_issues%22%3Atrue%2C%22description%22%3A%22wordsmith%20web%20application%22%2C%22stargazers%22%3A0%2C%22forks%22%3A0%2C%22owner%22%3A%7B%22name%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%7D%2C%22forced%22%3Afalse%2C%22after%22%3A%22a61ca7054f2f66628842fd09c77fefe7c85a77c3%22%2C%22head_commit%22%3A%7B%22modified%22%3A%5B%22Makefile%22%5D%2C%22added%22%3A%5B%5D%2C%22author%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%2C%22removed%22%3A%5B%5D%2C%22timestamp%22%3A%222013-01-17T17%3A07%3A27-08%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%2Fcommit%2Fa61ca7054f2f66628842fd09c77fefe7c85a77c3%22%2C%22id%22%3A%22a61ca7054f2f66628842fd09c77fefe7c85a77c3%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22added%20npm%20install%20to%20makefile%22%2C%22committer%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%7D%2C%22deleted%22%3Afalse%2C%22commits%22%3A%5B%7B%22modified%22%3A%5B%22mongroup.conf%22%5D%2C%22added%22%3A%5B%5D%2C%22author%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%2C%22removed%22%3A%5B%5D%2C%22timestamp%22%3A%222013-01-17T16%3A16%3A37-08%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%2Fcommit%2Fea0d85a2f5dc813ba60e5e03bb050c9350c8e0a1%22%2C%22id%22%3A%22ea0d85a2f5dc813ba60e5e03bb050c9350c8e0a1%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22add%20sudo%22%2C%22committer%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%7D%2C%7B%22modified%22%3A%5B%22mongroup.conf%22%5D%2C%22added%22%3A%5B%5D%2C%22author%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%2C%22removed%22%3A%5B%5D%2C%22timestamp%22%3A%222013-01-17T16%3A18%3A19-08%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%2Fcommit%2F4f2e6dc09d9dd3a4c2926366a01e8769bdf92127%22%2C%22id%22%3A%224f2e6dc09d9dd3a4c2926366a01e8769bdf92127%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22update%20pids%20and%20logs%20dir%22%2C%22committer%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%7D%2C%7B%22modified%22%3A%5B%22Makefile%22%5D%2C%22added%22%3A%5B%5D%2C%22author%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%2C%22removed%22%3A%5B%5D%2C%22timestamp%22%3A%222013-01-17T17%3A07%3A27-08%3A00%22%2C%22url%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%2Fcommit%2Fa61ca7054f2f66628842fd09c77fefe7c85a77c3%22%2C%22id%22%3A%22a61ca7054f2f66628842fd09c77fefe7c85a77c3%22%2C%22distinct%22%3Atrue%2C%22message%22%3A%22added%20npm%20install%20to%20makefile%22%2C%22committer%22%3A%7B%22name%22%3A%22Matt%20Mueller%22%2C%22username%22%3A%22MatthewMueller%22%2C%22email%22%3A%22mattmuelle%40gmail.com%22%7D%7D%5D%2C%22ref%22%3A%22refs%2Fheads%2F' + branch + '%22%2C%22before%22%3A%22388ca18a29be07f9c98993a494728e3d8ae078df%22%2C%22compare%22%3A%22https%3A%2F%2Fgithub.com%2FMatthewMueller%2Fwordsmith%2Fcompare%2F388ca18a29be...a61ca7054f2f%22%2C%22created%22%3Afalse%7D')
  .auth(auth[0], auth[1])
  .end(function(err, res) {
    if(err) console.error('request error', err);
    else console.log('status', res.status, 'text', res.text);
  });

