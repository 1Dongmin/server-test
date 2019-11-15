const http = require('http'); // 서버를 만드는 모듈 불러옴
http.createServer((request, response) => {
  console.log('server start!');
}).listen(8080);
