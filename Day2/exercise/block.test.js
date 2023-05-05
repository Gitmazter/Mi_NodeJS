const Block = require("./Block");

describe('Block', () => {
    const block = new Block()

    // Act
    it('should return an instance of Block', () => {
        // Assertion
        expect(block instanceof Block).toBe(true);
    });
})