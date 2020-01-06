var http1 = require('http');

let pesan = 'Ini adalah server http!';
http1.createServer(function (req, res) {
	res.write(pesan); //tulis
	res.end(); //akhiri
}).listen(8080); //gunakan port 8080