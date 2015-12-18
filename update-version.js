var path = require('path');
var mkdirp = require('mkdirp');

mkdirp('/server/output', function (e) {
  if(e) console.error('cannot create output', e);
});

var exec = require('child_process').exec;
var jsonfile = require('jsonfile');
var cmd = 'git describe --tags';
var file = 'package.json';

exec(cmd, function(e, version) {
  if(e) console.error('ERROR:', e);
  var newConfig = Object.assign(jsonfile.readFileSync(file), { version: version.replace('\r', '').replace('\n', '') });
  jsonfile.writeFileSync(file, newConfig, {spaces: 2});
});
