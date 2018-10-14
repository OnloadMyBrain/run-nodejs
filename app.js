// 모듈 추출 http, fs, url
const http = require('http');
const fs = require('fs');
// const url = require('url');
const ejs = require('ejs');

http.createServer(function(request, response){
  fs.readFile('ejs.ejs', function(error,data){
    response.writeHead(200, {'Content-type':'text/html'});
    response.end(ejs.render(data));
  });
}).listen(3000, function(){
  console.log('Server running...');
});