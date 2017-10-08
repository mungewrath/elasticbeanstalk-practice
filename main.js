const fs = require("fs"),
  http = require("http");

var tls = require('tls');

/* Hello, World! program in node.js */
console.log("Hello, World!")

var options = {
  key: fs.readFileSync('mynode-backend-key.pem'),
  cert: fs.readFileSync('mynode-backend-cert.pem')
};

tls.createServer(options, function (s) {
  s.write("Hello World. We're secure, see? Now go away.\n");
  s.pipe(s);
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
