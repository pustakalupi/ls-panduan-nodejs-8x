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
  
	connection.query("INSERT INTO books (title, description) VALUES ('Cara Membuat Kopi', 'bagaimana caranya membuat kopi')", function (gag, result) {
		if (gag){
			throw gag;
		}
		console.log("1 record diinsert");
		connection.destroy();
	});
});