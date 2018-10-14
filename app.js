// 모듈 추출 http, fs, url
const http = require('http');
const fs = require('fs');
const url = require('url');

// server 생성 및 실행
http.createServer(function(request,response){
  // 페이지 이동

  // var pathname = url.parse(request.url).pathname;
  // ohterpage 구분

//   if(pathname == '/'){
//     // index.html
//     fs.readFile('index.html', function(error,data){
//       response.writeHead(200, {'Content-Type':'text/html'});
//       response.end(data);
//     })
//   }else if(pathname == '/otherpage'){
//     fs.readFile('otherpage.html', function(error,data){
//       response.writeHead(200, {'Content-Type':'text/html'});
//       response.end(data);
//     })
//   }
// }).listen(3000, function(){
//   console.log('Server running...');
    if(request.method == 'GET'){
      // GET
      // var query = url.parse(request.url, true).query;
      fs.readFile('index.html', function(error,data){
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(data);
      });
    }else if(request.mothod == 'POST'){
      // POST
      request.on('data', function(data){
        response.writeHead(200, {'Contet-Tpye':'text/html'});
        response.end('<h1>'+ data +'</h1>');
      });
    }
  }).listen(3000, function(){
  console.log('Server running...');
});