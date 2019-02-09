var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  var url = req.url;
  var tmp = url.split('.');

  //tmp配列の最後の要素(外部ファイルの拡張子)を取得
  var ext = tmp[tmp.length - 1]; 
  //リクエストされたURLをサーバの相対パスへ変換する
  var path = '.' + url; 

  switch(ext){
    case 'js':
       fs.readFile(path,function(err,data){
         res.writeHead(200,{"Content-Type":"text/javascript"});
         res.end(data,'utf-8');
       });
       break;
       case 'css':
       fs.readFile(path,function(err,data){
         res.writeHead(200,{"Content-Type":"text/css"});
         res.end(data,'utf-8');
       });
       break;
     case '/':
       fs.readFile('./index.html',function(err,data){
         res.writeHead(200,{"Content-Type":"text/html"});
         res.end(data,'utf-8');
       })
       break;
  }
}).listen(process.env.PORT || 8080);