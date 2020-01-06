const express = require('express');
const app = express();
 
app.use(express.static('public123'));
 
app.listen(3000, function () {
	console.log('Aplikasi ini berjalan pada port 3000!');
});