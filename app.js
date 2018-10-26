var http = require('http');
var express = require('express');

var app = express(); // create server

app.use(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'name' : 'Son Seunghyun'
	});
	response.end('<h1>Hello Express!');
});

http.createServer(app).listen(3000, function () {
	console.log('Server running....');
});