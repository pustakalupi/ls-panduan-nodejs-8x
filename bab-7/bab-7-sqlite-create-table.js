var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('nama_database.db');

db.serialize(function() {
	db.run("CREATE TABLE if not exists books (info TEXT)");
});