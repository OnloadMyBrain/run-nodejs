var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var serveStatic = require('serve-static');

var app = express(); // create server

app.use(morgan('tiny'));
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(function (request, response) {
	response.send('<h1><img src="img_npm.png" alt=""></h1>');
});

http.createServer(app).listen(3000, function () {
	console.log('Server running....');
});