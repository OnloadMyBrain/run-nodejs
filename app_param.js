// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');

var app = express(); // create server

app.use(function(request, response){
  var name = request.param('name');
  var region = request.param('region');

  response.send('<h1>'+name+'and'+region+'</h1>');
  
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});