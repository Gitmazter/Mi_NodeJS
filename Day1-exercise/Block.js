var { createHash } = require('crypto')

class Block {
    constructor (timestamp, data, prevhash) {
        this.timestamp = timestamp
        this.data = data
        this.hash = this.hashing(timestamp, data, prevhash)
        this.prevhash = prevhash
    }
    hashing (timestamp, data, prevhash) {
        const wee = Buffer.from(createHash('sha256').update(`${timestamp}${data}${prevhash}`).digest('hex')).toString('base64');
        console.log(wee);
        return wee
    }

}

module.exports = Block