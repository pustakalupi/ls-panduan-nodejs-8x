var mysql = require('mysql');
 
var connection = mysql.createConnection({
	host: "domain_atau_ip",
	user: "username_anda",
	password: "password_anda",
	database: "puppies"
});
 
connection.connect(function(gag) {
	if (gag){
		throw gag;
	}
	console.log("Terkoneksi dengan sukses!");
  
	connection.query("SELECT * FROM books", function (gag, result, fields) {
		if (gag){
			throw gag;
		}
		console.log(result);
		connection.destroy();
	});
});