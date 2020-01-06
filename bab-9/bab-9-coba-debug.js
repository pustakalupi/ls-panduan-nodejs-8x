var someVar = "xcvxcvxcv";
debugger;

setTimeout(function(){
	someVar = "ABCDE";
	debugger;
}, 1000);

someVar = "123";
debugger;