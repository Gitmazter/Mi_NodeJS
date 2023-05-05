const Block = require("./Block");



describe('Block', () => {
    const timestamp = Date.now()
    const data = "dis is buy ordur for pepe"
    const prevHash = "PEPE0412j434ji12"
    const hash = " PEPE54nk1j23k21j3"


    const block = new Block(timestamp, data, prevHash, hash)

    it('should be an instance of Block', () => {
        expect(block instanceof Block).toBe(true)
    });

    it('should have a timestamp', () => {
        expect(block.timestamp).toEqual(timestamp)
    });

    it('should have data', () => {
        expect(block.data).toEqual(data)
    });

    it('should have a prevHash', () => {
        expect(block.prevHash).toEqual(prevHash)
    });
     
    it('should have a hash', () => {
        expect(block.hash).toEqual(hash)
    });

})
