var mysql = require('mysql');
 
var connection = mysql.createConnection({
	host: "domain_atau_ip",
	user: "username_anda",
	password: "password_anda"
});

connection.connect(function(gag) {
	if (gag){
		throw gag;
	}
	console.log("Terkoneksi dengan sukses!");
  	connection.query("CREATE DATABASE puppies", function (gag, result) {
		if (gag){
			throw gag;
		}
		console.log("Database telah dibuat");
		connection.destroy();
	});
});