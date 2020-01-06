console.log("START");

var EventEmitter = require("events");
var eventEmitter = new EventEmitter();

//buat event handler
var openHandler = function(){
	console.log("file opened");
};

var readHandler = function(){
	console.log("reading...");
};

var closeHandler = function(){
	console.log("file closed");
};

//pasang event handler ke events
eventEmitter.on('open', openHandler);
eventEmitter.on('read', readHandler);
eventEmitter.on('close', closeHandler);

//tembakkan event
eventEmitter.emit('open');
eventEmitter.emit('read');
eventEmitter.emit('close');

console.log("FINISH");