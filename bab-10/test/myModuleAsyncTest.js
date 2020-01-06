const assert = require("chai").assert;
const asyncSub = require("../myModuleAsync").asyncSub;

describe("myModuleAsync", function () {
	it("asyncSub(20, 11) harus mengembalikan '9'", function () {
		asyncSub(20, 11, function (res) {
			assert.equal(res, 9);
			done();
		});
	});
});