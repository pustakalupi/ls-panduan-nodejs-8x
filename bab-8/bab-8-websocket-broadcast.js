const WebSocket = require('ws');

const wss = new WebSocket.Server({
	port: 9876
});


wss.on('connection', function koneksi(ws) {
	ws.on('message', function pesanDatang(data) {
		wss.clients.forEach(function each(item) {
			if (item !== ws && item.readyState === WebSocket.OPEN) {
				console.log(data);
				item.send(data);
			}
		});
	});
});