setTimeout(function(){
	console.log("sudah 3 detik");
}, 3000);

process.on('exit', (code) => {
	console.log(`Arsitektur processor ini adalah ${process.arch}`);
	console.log(`Keluar dengan exit code: ${code}`);
});