const Block = require("./Block");

class BlockChain{
    transactions = []
    constructor() {
        // dummy block as first block in chain
        const genesis = new Block(
            Date.now(),
            {"type": "genesis"},
            '#AWS420',
            'genesislasthash'
            );
        
    }
    addBlock(data) {
        const lastHash = this.transactions[this,this.transactions.length-1]
        const hash = `${Date.now()}#ABC`
        const block = new Block(Date.now(), data, hash, lastHash);

        this.transactions.push(block)
    }
    get chainHistory () {
        return this.transactions
    }
}

module.exports = BlockChain;