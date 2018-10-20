// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');

var app = express(); // create server

app.use(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('<h1>Hello Express</h1>');
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});