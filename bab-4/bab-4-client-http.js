var http1 = require('http');

var req = http1.request({
	host: 'www.google.com',
	port: '80',
	path: '/'
}, function (response) {
	var isiHTML = '';
	response.on('data', function (potonganData) {
		//Akumulasikan data
		isiHTML += potonganData;
	});
	response.on('end', function () {
		//Data telah diterima secara komplit
		console.log(isiHTML);
	});
});
req.end();