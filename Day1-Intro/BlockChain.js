const Block = require("./Block");

class BlockChain{
    constructor() {
        const date = Date.now()
        const genesis = new Block({
            date,
            data: 'GENESIS DATA',
            hash: '#AWS420',
            lastHash: 'genesislasthash'
           });
        this.transactions = [genesis]
        this.hashCounter = 1;
    }
    addBlock(data) {
        const lastHash = this.transactions[this.transactions.length-1].hash
        const hash = `${Date.now()}#ABC`
        const date = Date.now()
        const block = new Block({date, data, hash, lastHash});
        block.timestamp = Date.now()
        this.transactions.push(block)
    }
    get chainHistory () {
        return this.transactions
    }
}

module.exports = BlockChain;