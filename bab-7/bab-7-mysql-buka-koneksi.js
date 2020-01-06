var mysql = require('mysql'); //import module mysql
 
var connection = mysql.createConnection({
	host: "domain_atau_ip",
	user: "username_anda",
	password: "password_anda"
});

connection.connect(function(gag) {
	if (gag) {
		console.error('error buka koneksi: ' + gag.stack);
		return;
	}
	
	console.log('terkoneksi dengan id ' + connection.threadId);
});