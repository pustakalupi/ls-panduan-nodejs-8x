const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
	res.send('Express.js GET!');
});

app.get('/path1/wx?yz', function (req, res) {
	res.send('wx?yz')
});

app.get('/path2/wx+yz', function (req, res) {
	res.send('wx+yz')
});

app.get('/path3/wx*yz', function (req, res) {
	res.send('wx*yz')
});

app.get('/path4/wx(yz)?e', function (req, res) {
	res.send('wx(yz)?e')
});

app.get('/path5/books/:bookId', function (req, res) {
	res.send(req.params)
});
 
app.listen(3000, function () {
	console.log('Aplikasi ini berjalan pada port 3000!');
});