let GENESIS_DATA = require('./config')
let crypto = require('./Hash')

class Block {
    constructor(time, data, hash, prevHash){
        this.timestamp = time
        this.data = data
        this.hash = hash
        this.prevHash = prevHash
    }
    static Genesis () {
        console.log(GENESIS_DATA);
        return new this(GENESIS_DATA)
    }

    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        return new this({
          timestamp,
          data,
          // skapa aktuellt block's hash
          hash: crypto(timestamp, lastHash, data),
          lastHash
        });
    }
}

module.exports = Block