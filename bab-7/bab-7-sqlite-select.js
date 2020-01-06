var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('nama_database.db');

db.each("SELECT rowid AS id, info FROM books", function(err, row) {
	console.log(row.info);
});