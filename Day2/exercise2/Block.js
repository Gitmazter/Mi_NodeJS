class Block {
    constructor (timestamp, data, prevHash, hash) {
        this.timestamp = timestamp
        this.data = data
        this.prevHash = prevHash
        this.hash = hash
    }
}

module.exports = Block