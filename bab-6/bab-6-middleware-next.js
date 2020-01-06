const express = require('express');
const app = express();
 
app.use(function (req, res, next) {
	console.log('suatu bilangan:', 123);
	next();
});
 
app.use('/pengguna/:id', function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});
 
app.get('/', function (req, res) {
	console.log('Salam dari Express.js!');
	res.send('Salam dari Express.js!');
});

app.get('/pengguna/:id', function (req, res) {
	console.log('Menampilkan pengguna ID');
	res.send('Menampilkan pengguna ID');
});
 
app.listen(3000, function () {
	console.log('Berjalan di port 3000!');
});