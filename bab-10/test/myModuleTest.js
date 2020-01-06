const assert = require("assert");
const message1 = require("../myModule").message1;
const kurang = require("../myModule").kurang;

describe("myModule", function () {
    it("message1 harus mengembalikan 'message1'", function () {
        assert.equal(message1(), "message1");
    });

    it("kurang harus mengembalikan nilai kurang", function () {
        assert.equal(kurang(5, 2), 3);
    });
});