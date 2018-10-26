var http = require('http');
var express = require('express');

var app = express();

app.use(function (req, res) {
	var agent = req.header('User-Agent');
	agent.toLowerCase().match('chrome') ? res.send('chrome') : res.send('express');
});

http.createServer(app).listen(3000, function () {
	console.log('server running...')
});