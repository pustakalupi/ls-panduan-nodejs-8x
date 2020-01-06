var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(654);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/bab-8-websocket-express-socketio.html');
});

io.on('connection', function (socket) {

	socket.on('event_ke_server', function (data) {
		console.log(data);
	});

	socket.emit('salam', {
		content: 'Selamat Coding!'
	});

	socket.emit('salam1', {
		content: 'Selamat Coding 1!'
	});
});