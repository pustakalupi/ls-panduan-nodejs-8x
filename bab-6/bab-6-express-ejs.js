var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('bab-6-home', { 
		judul: "Judul ini Ditulis dengan EJS",
		pesan: "pesan ditulis dengan EJS"
	});
});

app.listen(3000, function () {
	console.log('Aplikasi ini berjalan pada port 3000!');
});