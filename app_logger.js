var http = require('http');
var express = require('express');
var morgan = require('morgan');

var app = express(); // create server

app.use(morgan('tiny'));
app.use(function (request, response) {
	response.send('<h1>hello Express..</h1>');
});

http.createServer(app).listen(3000, function () {
	console.log('Server running....');
});