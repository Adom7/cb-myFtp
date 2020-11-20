const http = require('http');
const port = process.argv[2]

if (!port) {
  console.log("Usage : node e01.js <PORT> ") // si le port n'est pas renseigner.
  process.exit(0)
}
const requestListener = function (req, res) {
  res.writeHead(200);
  //res.end('<html><h1>Hello, World!</h1><html>');


  
}

const server = http.createServer(requestListener);
server.listen(port);