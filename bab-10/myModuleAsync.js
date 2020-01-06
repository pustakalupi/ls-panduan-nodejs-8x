module.exports.asyncSub = function (a, b, callback) {
	setTimeout(function () {
		callback(a - b);
	}, 1000);
};