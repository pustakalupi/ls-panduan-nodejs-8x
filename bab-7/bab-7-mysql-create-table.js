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
  
	connection.query("CREATE TABLE books (title VARCHAR(255), description VARCHAR(255))", function (gag, result) {
		if (gag){
			throw gag;
		}
		console.log("Table selesai dibuat");
		connection.destroy();
	});
});