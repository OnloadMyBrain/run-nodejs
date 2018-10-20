// 모듈 추출 http, fs, url
var http = require('http');
var express = require('express');

var app = express(); // create server

app.use(function(request, response){
  var agent = request.header('User-Agent');

  if(agent.toLowerCase().match(/chrome/)){
    response.send('<h1>Hello Chrome!</h1>');
  }else{
    response.send('<h1>Hello Express!</h1>')
  }
});

http.createServer(app).listen(3000, function(){
  console.log('Server running....');
});