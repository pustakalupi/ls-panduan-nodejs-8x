var fs = require("fs");
 
console.log("START");
 
//Membaca secara asynchronous
fs.readFile('bab-4-teks-untuk-dibaca-asynchronous.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("File ini dibaca secara asynchronous: " + data.toString());
});
 
//Membaca secara synchronous
var data = fs.readFileSync('bab-4-teks-untuk-dibaca-synchronous.txt');
console.log("File ini dibaca secara synchronous: " + data.toString());
 
console.log("STOP");

//while(1); //infinite loop akan mencegah callback dari asynchronous read dipanggil.