const Block = require("./Block")

class BlockChain {
    constructor () {
        const genesis = new Block (
            Date.now(),
            "GENESIS",
            "0x420FAZEhashx0"
        )
        this.blocks = [ genesis ]
        this.blockCount = 1
    }

    addBlock (data) {
        const prevhash = this.blocks[this.blockCount -1].hash
        this.blocks.push(new Block(Date.now(), data, prevhash))
    }
}
module.exports = BlockChain