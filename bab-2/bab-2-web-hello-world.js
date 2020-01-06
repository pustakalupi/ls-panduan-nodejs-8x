var http = require('http');

http.createServer(function (req, res) {
	let ct = 'text/html';
	let ct1 = 'Content-Type';
	let responseCode = 200;
	res.writeHead(responseCode, {
		ct1: ct
	});
	res.end('Hello World!');
}).listen(7531);