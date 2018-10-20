// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var serveStatic = require('serve-static');

var app = express(); // create server

app.use(morgan('tiny'));
app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/a', function(request, response){
  response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response){
  response.send('<a href="/a">Go to A</a>');
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});