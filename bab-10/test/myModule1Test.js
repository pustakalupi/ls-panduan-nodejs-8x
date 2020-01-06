const assert = require("chai").assert;
const message2 = require("../myModule1").message2;
const kali = require("../myModule1").kali;

describe("myModule1", function () {
    it("message2 harus mengembalikan 'message2'", function () {
        assert.equal(message2(), "message2");
    });

    it("message2 harus mengembalikan tipe data string", function () {
        assert.typeOf(message2(), "string");
    });

    it("kali harus mengembalikan nilai kali", function () {
        assert.equal(kali(10, 2), 20);
    });

    it("kali harus mengembalikan tipe data number", function () {
        assert.typeOf(kali(2, 2), "number");
    });
});