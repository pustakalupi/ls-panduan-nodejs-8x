const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 9876
});

wss.on('connection', function koneksi(ws, req) {
	const ip = req.connection.remoteAddress;
	console.log(ip);
	ws.send(ip);
});