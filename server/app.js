var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var exec = require('child_process').exec;
var weatherHandler = require('./handlers/weather.js');

var port = 3000;
var app = express();
var applicationFolder = path.join(__dirname, 'output');
var applicationPage = path.join(applicationFolder, 'index.html');

app.use(serveStatic(applicationFolder, {'index': ['index.html']}));
app.get('/weather', weatherHandler);

app.listen(port);
console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)


var cmd = `start http://localhost:${port}/`;
exec(cmd);
