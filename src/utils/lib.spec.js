const { expect } = require('chai');
const { copyPropsFromObj } = require('./lib');

describe('file: ./src/utils/lib.js', () => {
    describe('function: copyPropsFromObj', () => {
        describe(`copyPropsFromObj(['a', 'b'], { a: 1, b: 2, c: 3 })`, () => {
            it('1. should copy a and b', () => {
                const actualValue = copyPropsFromObj(['a', 'b'], { a: 1, b: 2, c: 3 });
                const expectedValue = { a: 1, b: 2 };
                expect(actualValue).to.deep.equal(expectedValue); // not to.equal
            });
        });
        describe(`copyPropsFromObj(['x', 'y'], { a: 1, b: 2, c: 3 })`, () => {
            it('2. should not copy anything as there is no match', () => {
                const actualValue = copyPropsFromObj(['x', 'y'], { a: 1, b: 2, c: 3 });
                const expectedValue = {};
                expect(actualValue).to.deep.equal(expectedValue); // not to.equal
            });
        });
        describe(`copyPropsFromObj(['a', 'b', 'x', 'y'], { a: 1, b: 2, c: 3 })`, () => {
            it('3. should copy a and b, ignore x and y', () => {
                const actualValue = copyPropsFromObj(['a', 'b', 'x', 'y'], { a: 1, b: 2, c: 3 });
                const expectedValue = { a: 1, b: 2 };
                expect(actualValue).to.deep.equal(expectedValue); // not to.equal
            });
        });
    });
});