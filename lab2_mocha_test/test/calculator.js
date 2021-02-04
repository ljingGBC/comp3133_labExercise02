var calculator = require("../calculator.js");
var assert = require("chai").assert

describe("Calculator Test", () => {
    // test add
    describe("add correctly", () => {
        it('correctly calculates 5 + 2', () => {
            assert.equal(calculator.add(5, 2), 7)
        })
    });
    
    describe("add incorrectly", () => {
        it('incorrectly calculates 5 + 2', () => {
            assert.equal(calculator.add(5, 2), 8)
        })
    });

    // test subtract
    describe("subtract correctly", () => {
        it('correctly calculates 5 - 2', () => {
            assert.equal(calculator.sub(5, 2), 3)
        })
    });

    describe("subtract incorrectly", () => {
        it('incorrectly calculates 5 - 2', () => {
            assert.equal(calculator.sub(5, 2), 5)
        })
    });

    // test multiply
    describe("multiply correctly", () => {
        it('correctly calculates 5 * 2', () => {
            assert.equal(calculator.mul(5, 2), 10)
        })
    });

    describe("multiply incorrectly", () => {
        it('incorrectly calculates 5 * 2', () => {
            assert.equal(calculator.mul(5, 2), 12)
        })
    });

    // test divide
    describe("divide correctly", () => {
        it('correctly calculates 10 / 2', () => {
            assert.equal(calculator.div(10, 2), 5)
        })
    });

    describe("divide incorrectly", () => {
        it('incorrectly calculates 10 / 2', () => {
            assert.equal(calculator.div(10, 2), 2)
        })
    });

});



