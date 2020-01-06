var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('nama_database.db');

var prepared = db.prepare("INSERT INTO books VALUES (?)");

for (var i = 0; i < 10; i++) {
	prepared.run("Info " + i);
}

prepared.finalize();