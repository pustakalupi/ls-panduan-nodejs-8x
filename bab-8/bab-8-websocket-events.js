const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 9876
});

wss.on('connection', function koneksi(ws) {
	ws.on('message', function pesanDatang(pesan) {
		console.log('Diterima: %s', pesan);
		ws.send('server mendeteksi tombol Kirim Data diklik');
	});
});