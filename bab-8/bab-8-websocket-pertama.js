const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 9397
});

wss.on('connection', function koneksi(ws) {
	ws.on('message', function pesanDatang(pesan) {
		console.log('Diterima: %s', pesan);
	});

	ws.send('pesan dikirimkan ke client');
});