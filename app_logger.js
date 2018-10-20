// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');

var app = express(); // create server

app.use(express.logger(':method + :date'));
app.use(function(request, response){
  response.send('<h1>hello Express..</h1>');
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});