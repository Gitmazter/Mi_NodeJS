var Block = require("./Block")
const Blockchain = require("./BlockChain")
const TxData = require("./TxData")
const { data, lastHash } = require("./config")

describe("Block", () => {

    let time = Date.now()
    let data = new TxData(
        time, 
        "0xBA23FFb7f86001F69266B56809E2Ef32d8287545",
        "0xBA23FFb7f86100F69266B56809E2Ef32d8287545",
        0.0034123,
        "transfer"
    )
    let lastHash = "0xc00170ac8cb78e234aa7fcfc0bf515442b0344a8873690326e9dd7e181e2f7a7"
    let hash = "0xc00170ac8cb78e234aa7fcfc0bf515442b0344a8873690326e9dd7e181e2f7a7"

    let block = new Block(time, data, lastHash, hash)

    it('should be a block', () => {
        expect(block instanceof Block).toBe(true)
    });

    it('should have a timestamp', () => {
        expect(block.timestamp > 1683711570).toBe(true)
    });

    it('should have an instance of TxData as data', () => {
        expect(block.data instanceof TxData)
    });

    it('should have a valid prevHash', () => {
        expect(block.prevHash.length).toEqual(66)
    });
    
    it('should have a valid hash', () => {
        expect(block.hash.length).toEqual(66)
    });

})