// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var serveStatic = require('serve-static');

var app = express(); // create server

app.use(morgan('tiny'));
app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/name/:id', function(request, response){
  var name = request.param('id');
  // DB

  response.send('<h1>' + name + '</h1>');
});

app.get('*', function(request, response){
  response.send(404, '<h1>ERROR !!</h1>')
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});