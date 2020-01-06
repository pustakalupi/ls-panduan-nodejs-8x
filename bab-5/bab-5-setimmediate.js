var setTimeoutCallback = function(){
	console.log("setTimeoutCallback dipanggil");
};

var callbackBiasa = function(){
	console.log("callbackBiasa dipanggil");
};

var setImmediateCallback = function(){
	console.log("setImmediateCallback dipanggil");
};

setTimeout(setTimeoutCallback, 5000);

setImmediate(setImmediateCallback);

callbackBiasa();